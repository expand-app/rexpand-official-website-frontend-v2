import { StudentDataAPIData } from "@/pages/success-cases/type";
import { APIResponse } from "@/types/api";
import { BaseAPI } from "@/utils/base-api";

class SuccessCaseAPI extends BaseAPI {
  getAllData = (): Promise<APIResponse<StudentDataAPIData>> => {
    return this.get(`/api/success-cases?populate=*&pagination[limit]=-1`, {
      withAuthToken: false,
    });
  };
}

const successCase = new SuccessCaseAPI();

export default successCase;
