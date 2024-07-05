import dayjs from "dayjs";

export const LATEST_DATE = dayjs().subtract(14, "d");

export const PAGE_SIZE = 5;

export const TIME_FORMAT = "YYYY/MM/DD";

export const needShowContentType = ["tagType", "articleType"] as const;
