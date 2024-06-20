import { ApiError, isApiError } from "@/types/error";

export const DEFAULT_REQUEST_SCHEMA = "http://";
export const DEFAULT_TIMEOUT = 30000; // 30秒默认超时时间

const getString = (object: unknown) => {
  return typeof object === "object" ? JSON.stringify(object) : String(object);
};
const getDefaultToken = () => {
  return "123";
};

export interface RequestOption extends RequestInit {
  withAuthToken?: boolean;
  queryParams?: Record<string, unknown>;
  logging?: boolean;
  dataOnly?: boolean;
  enableSignInRedirectionOn401?: boolean;
  isBlob?: boolean;
  isJsonContentType?: boolean;
  isShowToast?: boolean;
  timeout?: number; // 新增的超时参数
  isCancelRequest?: boolean; // 新增的取消请求参数
}

export interface BaseAPIProps {
  schema?: string;
  host?: string;
  prefix?: string;
  getAuthToken?: () => string | Promise<string>;
  isLKAPI?: boolean;
}

export abstract class BaseAPI {
  private readonly schema: string;
  private readonly host: string;
  private readonly prefix: string;
  private readonly getAuthToken: (() => string | Promise<string>) | undefined;

  constructor({
    prefix,
    schema = DEFAULT_REQUEST_SCHEMA,
    host,
    getAuthToken,
    isLKAPI,
  }: BaseAPIProps = {}) {
    this.schema = schema;
    this.host = host || "";
    this.prefix = prefix ?? "";
    this.getAuthToken = getAuthToken || getDefaultToken;
  }

  protected async fetch<Response>(
    path: string,
    options: RequestOption
  ): Promise<Response> {
    let url = [this.schema, this.host, this.prefix, path].join("");
    let token;
    const {
      withAuthToken = true,
      queryParams,
      logging = true,
      dataOnly = false,
      enableSignInRedirectionOn401 = true,
      isBlob = false,
      isJsonContentType = true,
      isShowToast = true,
      timeout = DEFAULT_TIMEOUT, // 使用默认超时时间
      isCancelRequest = true, // 默认启用取消请求
    } = options;

    if (queryParams) {
      const searchParams = new URLSearchParams();
      Object.entries(queryParams).forEach(([key, value]) => {
        searchParams.append(key, getString(value));
      });
      url += `?${String(searchParams)}`;
    }

    options.headers = new Headers({
      ...options.headers,
    });

    if (isJsonContentType) {
      options.headers.append("Content-Type", "application/json");
    }

    if (withAuthToken) {
      if (!this.getAuthToken) {
        throw Error(
          "No auth token getter set for an authenticated API fetching"
        );
      }

      token = await this.getAuthToken();
      options.headers.append("Authorization", `Bearer ${token}`);
    }

    const loggingAttributes = {
      url,
      method: options.method,
      body: getString(options.body),
    };

    const controller = new AbortController();
    let timeoutId: NodeJS.Timeout;
    let isToastAbortError = false;

    if (isCancelRequest && !options.signal) {
      isToastAbortError = true;
      timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);
      options.signal = controller.signal;
    } else {
      // 如果外部fn signal  abort，内部的也abort
      options.signal?.addEventListener("abort", () => {
        controller.abort();
      });
    }

    return fetch(url, options)
      .then((response) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (response.status >= 200 && response.status < 400) {
          return isBlob ? response.blob() : response.json();
        } else {
          return response.json().then(
            (json) => {
              throw new ApiError(response.status, json);
            },
            (error) => {
              throw new ApiError(response.status, {
                message: error?.message,
                error,
              });
            }
          );
        }
      })
      .then((responseJson) => {
        if (logging) {
          console.debug({
            message: "API succeeded",
            request: loggingAttributes,
            response: responseJson,
          });
        }

        return dataOnly ? responseJson.data : responseJson;
      })
      .catch((error) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (logging) {
          console.debug({
            message: "API failed",
            request: loggingAttributes,
            response: isApiError(error) ? error.responseBody : error,
            ...(isApiError(error) && {
              responseCode: error.statusCode,
            }),
          });
        }

        // if (error.name === "AbortError" && isToastAbortError) {
        //   if (isShowToast) {
        //     toast("Request timed out. Please try again.", {
        //       type: "error",
        //     });
        //   }
        // } else if (
        //   isShowToast &&
        //   ((isApiError(error) && String(error.statusCode).startsWith("5")) ||
        //     (error instanceof TypeError && error.message === "Failed to fetch"))
        // ) {
        //   toast("Something went wrong. Please try again later", {
        //     type: "error",
        //   });
        // }

        // if (
        //   enableSignInRedirectionOn401 &&
        //   isApiError(error) &&
        //   error.statusCode === 401
        // ) {
        //   clearAuthStorage();
        //   window.location.replace(RouterPath.SignIn);
        // }

        throw error;
      });
  }

  protected get<Response>(
    path: string,
    options?: Omit<RequestOption, "method">
  ) {
    return this.fetch<Response>(path, { ...options, method: "GET" });
  }

  protected put<Response>(
    path: string,
    options?: Omit<RequestOption, "method">
  ) {
    return this.fetch<Response>(path, { ...options, method: "PUT" });
  }

  protected post<Response>(
    path: string,
    options?: Omit<RequestOption, "method">
  ) {
    return this.fetch<Response>(path, { ...options, method: "POST" });
  }

  protected patch<Response>(
    path: string,
    options?: Omit<RequestOption, "method">
  ) {
    return this.fetch<Response>(path, { ...options, method: "PATCH" });
  }

  protected delete<Response>(
    path: string,
    options?: Omit<RequestOption, "method">
  ) {
    return this.fetch<Response>(path, { ...options, method: "DELETE" });
  }

  protected postForm<Response>(
    path: string,
    form: FormData,
    options?: Omit<RequestOption, "method" | "body">
  ) {
    return this.post<Response>(path, {
      ...options,
      headers: {
        ...options?.headers,
        "Content-Type": "multipart/form-data",
      },
      body: form,
    });
  }

  protected postJson<Response>(
    path: string,
    body: object,
    options?: Omit<RequestOption, "method" | "body">
  ) {
    return this.post<Response>(path, {
      ...options,
      headers: {
        ...options?.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}
