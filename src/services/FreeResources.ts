import { BaseAPI } from "@/utils/base-api";
class FreeResourcesAPI extends BaseAPI {
  getUniversityList = (): Promise<any> => {
    return this.get(`api/restaurants?populate=*`, {
      withAuthToken: false,
    });
  };
}

const freeResources = new FreeResourcesAPI({
  host: "3.84.208.124:1337/",
});

export default freeResources;
