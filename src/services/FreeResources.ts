import { BaseAPI } from "@/utils/base-api";
class FreeResourcesAPI extends BaseAPI {
  getArticleList = (): Promise<any> => {
    return this.get(`/api/restaurants?populate=*`, {
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
}

const freeResources = new FreeResourcesAPI({
  host: "cms.staging.tuilink.io",
  schema: "https://",
});

export default freeResources;
