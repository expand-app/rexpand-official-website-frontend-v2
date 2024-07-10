import {
  FreeResource,
  FreeResourceData,
  TagType,
} from "@/pages/free-resources/type";
import { BaseAPI } from "@/utils/base-api";

export interface APIResponse<T = any> {
  data: T;
  error?: string;
}

export interface CategoryDescriptionData {
  id: number;
  attributes: Record<string, string>;
}

export interface StrapiCommonData {
  id: number;
  attributes: Record<string, any>;
}

export interface Tag {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
}

export type TagList = Array<Tag>;
class FreeResourcesAPI extends BaseAPI {
  getArticleList = (): Promise<APIResponse<FreeResourceData>> => {
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
  getArticleTag = (): Promise<APIResponse<TagList>> => {
    return this.get(`/api/tags`, {
      withAuthToken: false,
    });
  };
  setArticle = ({ id, likeCount }: any): Promise<APIResponse<FreeResource>> => {
    return this.put(`/api/articles/${id}?populate=*`, {
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
  host: "localhost:3001",
  schema: "http://",
});

export default freeResources;
