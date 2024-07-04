import { FreeResourceData, Attributes } from "@/pages/free-resources/type";
import { BaseAPI } from "@/utils/base-api";

export interface APIResponse<T = any> {
  data: T;
  error?: string;
}

class FreeResourcesAPI extends BaseAPI {
  getArticleList = (): Promise<APIResponse<Array<FreeResourceData>>> => {
    return this.get(`/api/restaurants?populate=*`, {
      withAuthToken: false,
    });
  };
  getArticleById = (id: number): Promise<APIResponse<FreeResourceData>> => {
    return this.get(`/api/restaurants/${id}`, {
      withAuthToken: false,
    });
  };
  getArticleType = (): Promise<any> => {
    return this.get(
      `/api/content-type-builder/content-types/api::restaurant.restaurant`,
      {
        withAuthToken: false,
      }
    );
  };
  setArticle = ({
    id,
    likeCount,
  }: any): Promise<APIResponse<FreeResourceData>> => {
    return this.put(`/api/restaurants/${id}`, {
      body: JSON.stringify({
        data: {
          likeCount,
        },
      }),
      withAuthToken: false,
    });
  };
}

const freeResources = new FreeResourcesAPI({
  host: "cms.staging.tuilink.io",
  schema: "https://",
});

export default freeResources;
