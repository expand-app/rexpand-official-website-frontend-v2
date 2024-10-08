import { CMSImage } from "@/types/common";

export interface Student {
  name: string;
  companyName: string;
  jobTitle: string;
  publishedAt: string;
  university: string | null;
  major: string;
  weChatUrl: string;
  offerImage: CMSImage;
  companyLogo: CMSImage;
  borderColor: string | null;
}

export interface StudentData {
  id: number;
  attributes: Student;
}
export type StudentDataAPIData = Array<StudentData>;

export interface PageInfo {
  page: number;
  pages: number;
  pageSize: number;
}

export interface ImageInfo {
  url: string;
  width: number | undefined;
  height: number | undefined;
}
