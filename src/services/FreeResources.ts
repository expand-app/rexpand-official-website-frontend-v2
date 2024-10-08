import {
  Categories,
  FreeResource,
  FreeResourceData,
} from "@/pages/free-resources/type";
import { APIResponse } from "@/types/api";
import { BaseAPI } from "@/utils/base-api";

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
    return this.get(`/api/articles?populate=*&pagination[limit]=-1`, {
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
    return this.get(`/api/tags?sort=id:asc`, {
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
  getArticleCategory = (): Promise<APIResponse<Categories>> => {
    return this.get(`/api/categories?sort=id:asc`, {
      withAuthToken: false,
    });
  };
}

const freeResources = new FreeResourcesAPI();

export default freeResources;
