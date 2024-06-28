import dayjs from "dayjs";

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
  hotArticle = "热门文章",
  recommendArticle = "推荐文章",
  randomArticle = "随机文章",
}

export const LATEST_DATE = dayjs().subtract(3, "d");

export const PAGE_SIZE = 5;
