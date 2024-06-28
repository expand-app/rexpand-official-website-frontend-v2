import { CategoryType } from "./constant";

export interface PageInfo {
  page: number;
  pages: number;
  pageSize: number;
}

interface TextChild {
  text: string;
  type: "text";
}

export interface ParagraphBlock {
  type: "paragraph";
  children: TextChild[];
}

export interface FreeResourceData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  companyName: string | null;
  favoriteCount: number;
  likeCount: number;
  readCount: number;
  postDate: string;
  postName: string;
  type: CategoryType;
  summaryJSONRrich: Array<ParagraphBlock>;
  summaryEditor: string;
  articleCover: {
    data: {
      id: number;
      attributes: {
        formats: {
          large: {
            url: string;
            name: string;
          };
        };
      };
    };
  };
}
