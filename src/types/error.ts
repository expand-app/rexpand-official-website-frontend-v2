export class ApiError extends Error {
  statusCode: number;
  responseBody: { message: string; error: string };

  constructor(
    statusCode: number,
    responseBody: { message: string; error: string },
    message?: string,
  ) {
    // If a specific message is provided, use it, otherwise default to a generic message
    super(message || `API error with status code ${statusCode}`);

    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;

    this.statusCode = statusCode;
    this.responseBody = responseBody;

    // This clips the constructor invocation from the stack trace.
    // It's not absolutely necessary, but it does make the stack trace a bit cleaner
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const isApiError = (obj: any): obj is ApiError => {
  if (obj instanceof ApiError) {
    return true;
  } else if (
    obj?.name === 'ApiError' &&
    obj?.statusCode !== undefined &&
    obj?.responseBody !== undefined
  ) {
    return true;
  }

  return false;
};

export const isClientError = (error: unknown): error is ApiError => {
  if (error instanceof ApiError) {
    return String(error.statusCode).startsWith('4');
  }
  return false;
};

/**
 * 是否是5XX 错误
 * @param error   ApiError
 * @returns
 */
export const isServerError = (error: ApiError) => {
  if (error instanceof ApiError) {
    return String(error.statusCode).startsWith('5');
  }
  return false;
};
