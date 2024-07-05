import type { BlocksContent } from "@strapi/blocks-react-renderer";

export enum CategoryType {
  NewArticle = "NewArticle",
  JobSearchGuide = "JobSearchGuide",
  InterviewTips = "InterviewTips",
  IndustryKnowledge = "IndustryKnowledge",
  LiveStreamBooking = "LiveStreamBooking",
  // NewArticle = "最新文章",
  // JobStrategy = "求职攻略",
  // InterviewSkills = "面试技巧",
  // IndustryKnowledge = "行业知识",
  // LiveBookings = "直播预约",
}
export enum CategoryTitle {
  NewArticle = "最新文章",
  JobSearchGuide = "求职攻略",
  InterviewTips = "面试技巧",
  IndustryKnowledge = "行业知识",
  LiveStreamBooking = "直播预约",
}

export enum RightArticleType {
  hot = "热门文章",
  recommend = "推荐文章",
  random = "随机文章",
}

export enum TagType {
  JobSeeking = "求职",
  Employment = "就业",
  Interview = "面试",
  InternalReferral = "内推",
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
  tag: {
    enum: Array<keyof typeof TagType>;
  };
  articleType: {
    enum: Array<keyof typeof RightArticleType>;
  };
}

export interface Attributes {
  title: string;
  favoriteCount: number;
  likeCount: number;
  readCount: number;
  postDate: string;
  author: string;
  category: CategoryType;
  tag: TagType;
  summary: string;
  content: BlocksContent;
  isPopular: boolean | null;
  isRecommended: boolean | null;
  isRandom: boolean | null;
  cover: {
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
