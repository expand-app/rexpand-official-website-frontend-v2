import { CMSImage } from "@/types/common";

export interface Referral {
  name: string;
  avatar: CMSImage;
  url: string;
  headLine: string;
  bioIntro: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  universityName: string;
}

export interface ReferralData {
  id: number;
  attributes: Referral;
}

export interface University {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  weChatUrl: string;
  image: CMSImage;
  url: string;
  referrals: {
    data: Array<ReferralData>;
  };
}

export interface UniversityData {
  id: number;
  attributes: University;
}
export type UniversityAPIData = Array<UniversityData>;
