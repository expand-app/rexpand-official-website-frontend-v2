import type { BlocksContent } from "@strapi/blocks-react-renderer";

export enum CategoryType {
  NewArticle = "NewArticle",
  JobStrategy = "JobStrategy",
  InterviewSkills = "InterviewSkills",
  IndustryKnowledge = "IndustryKnowledge",
  LiveBookings = "LiveBookings",
  // NewArticle = "最新文章",
  // JobStrategy = "求职攻略",
  // InterviewSkills = "面试技巧",
  // IndustryKnowledge = "行业知识",
  // LiveBookings = "直播预约",
}
export enum CategoryTitle {
  NewArticle = "最新文章",
  JobStrategy = "求职攻略",
  InterviewSkills = "面试技巧",
  IndustryKnowledge = "行业知识",
  LiveBookings = "直播预约",
}

export enum RightArticleType {
  hot = "热门文章",
  recommend = "推荐文章",
  random = "随机文章",
}

export enum TagType {
  Job = "求职",
  career = "就业",
  interview = "面试",
  internalReferral = "内推",
}
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

export enum TitleShowType {
  default = "default",
  single = "single",
  tag = "tag",
}
export interface ContentTypes {
  tagType: {
    enum: Array<keyof typeof TagType>;
  };
  articleType: {
    enum: Array<keyof typeof RightArticleType>;
  };
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
  tagType: TagType;
  articleType: keyof typeof RightArticleType;
  summaryJSONRrich: Array<ParagraphBlock>;
  summaryEditor: string;
  content: BlocksContent;
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
