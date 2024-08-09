import { TagList } from "@/services/FreeResources";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export enum CategoryTitle {
  All = "全部",
  JobSearchGuide = "求职规划",
  InterviewTips = "面试技巧",
  IndustryKnowledge = "行业知识",
  // LiveStreamBooking = "直播预约",
}

export enum CategoryPath {
  "求职规划" = "/free-resources/job-hunting",
  "面试技巧" = "/free-resources/interview",
  "行业知识" = "/free-resources/news",
  // "直播预约" = "/free-resources/live-broadcast",
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

export interface FreeResource {
  id: number;
  attributes: Attributes;
}
export type FreeResourceData = Array<FreeResource>;

export enum TitleShowType {
  default = "default",
  single = "single",
  tag = "tag",
}
export interface ContentTypes {
  tag: {
    enum: Array<keyof typeof TagType>;
  };
  // articleType: {
  //   enum: Array<keyof typeof RightArticleType>;
  // };
}
export interface Tag {
  title: string;
  desc: string;
}

export type CategoryName = Exclude<CategoryTitle, CategoryTitle.All>;

export interface Category {
  id: number;
  attributes: {
    name: CategoryName;
    path: string;
  };
}
export interface CategoryData {
  data: Category;
}

export type Categories = Array<Category>;
export interface Attributes {
  title: string;
  favoriteCount: number;
  likeCount: number;
  readCount: number;
  postDate: string;
  author: string;
  category: CategoryData | null;
  summary: string;
  content: BlocksContent;
  isPopular: boolean | null;
  isRecommended: boolean | null;
  isRandom: boolean | null;
  tags: {
    data: TagList;
  };
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
