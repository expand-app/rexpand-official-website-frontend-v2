import { FreeResourceData, TagType } from "@/pages/free-resources/type";
import { BaseAPI } from "@/utils/base-api";

export interface APIResponse<T = any> {
  data: T;
  error?: string;
}

export interface CategoryDescriptionData {
  id: number;
  attributes: {
    [K in keyof typeof TagType]?: string;
  };
}

class FreeResourcesAPI extends BaseAPI {
  getArticleList = (): Promise<APIResponse<Array<FreeResourceData>>> => {
    return this.get(`/api/articles?populate=*`, {
      withAuthToken: false,
    });
  };
  getArticleById = (id: number): Promise<APIResponse<FreeResourceData>> => {
    return this.get(`/api/articles/${id}`, {
      withAuthToken: false,
    });
  };
  getArticleType = (): Promise<any> => {
    return this.get(
      `/api/content-type-builder/content-types/api::article.article`,
      {
        withAuthToken: false,
      }
    );
  };
  setArticle = ({
    id,
    likeCount,
  }: any): Promise<APIResponse<FreeResourceData>> => {
    return this.put(`/api/articles/${id}`, {
      body: JSON.stringify({
        data: {
          likeCount,
        },
      }),
      withAuthToken: false,
    });
  };
  getCategoryDescriptionData = (): Promise<
    APIResponse<CategoryDescriptionData>
  > => {
    return this.get(`/api/category-description`, {
      withAuthToken: false,
    });
  };
}

const freeResources = new FreeResourcesAPI({
  host: "cms.staging.tuilink.io",
  schema: "https://",
});

export default freeResources;
