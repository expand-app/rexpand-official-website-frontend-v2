import { ReferralData, UniversityAPIData } from "@/pages/ad/[urlName]/type";
import { APIResponse } from "@/types/api";
import { BaseAPI } from "@/utils/base-api";

class UniversityAPI extends BaseAPI {
  getUniversity = (url: string): Promise<APIResponse<UniversityAPIData>> => {
    return this.get(
      `/api/universities?filters[url][$eqi]=${url}&populate[referrals][populate]=avatar&populate=image`,
      {
        withAuthToken: false,
      }
    );
  };
  getUniversities = (): Promise<APIResponse<UniversityAPIData>> => {
    return this.get(`/api/universities?populate=*&pagination[limit]=-1`, {
      withAuthToken: false,
    });
  };
}

const university = new UniversityAPI();

export default university;
