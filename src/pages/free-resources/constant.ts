import dayjs from "dayjs";

export const LATEST_DATE = dayjs().subtract(7, "d");

export const PAGE_SIZE = 5;

export const needShowContentType = ["tagType", "articleType"] as const;
