import dayjs from "dayjs";

const chineseNumbers = [
  "零",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
];
const chineseDigits = ["", "十", "百", "千", "万", "亿"];

export function numberToChinese(num: number) {
  let result = "";

  // 将数字转换为字符串，然后逐个处理
  const numStr = String(num);
  const numLength = numStr.length;

  for (let i = 0; i < numLength; i++) {
    const digit = parseInt(numStr[i]);
    const digitChinese = chineseNumbers[digit];

    // 对于非零的数字，添加对应的数值和位数单位
    if (digit !== 0) {
      result += digitChinese + chineseDigits[numLength - i - 1];
    } else {
      // 处理连续的零
      if (result[result.length - 1] !== "零") {
        result += digitChinese;
      }
    }
  }

  // 对于特殊情况，处理一些零的情况
  if (result[result.length - 1] === "零") {
    result = result.slice(0, result.length - 1);
  }

  // 处理十位数为一的情况
  if (result.startsWith("一十")) {
    result = result.slice(1);
  }

  return result;
}

/**
 * 返回指定日期距离现在的天数
 * @param date
 * @returns
 */
export function daysToNow(date: Date) {
  const currentDate = new Date();

  const difference = date.getTime() - currentDate.getTime();

  // 计算差值对应的天数
  const daysDifference = Math.ceil(difference / (1000 * 3600 * 24));

  // 如果差值大于 0，说明传入日期在当前日期之后，返回差值；否则返回 0
  return daysDifference > 0 ? daysDifference : 0;
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份是从 0 开始计数的，所以需要加 1
  const day = date.getDate();

  // 使用模板字符串将年、月、日拼接成所需的格式
  const formattedDate = `${year}年${month}月${day}日`;

  return formattedDate;
}

//集训营时间

export const TRAINING_CAMP_DATE = [
  "2024-07-29",
  "2024-08-26",
  "2024-09-23",
  "2024-10-21",
  "2024-11-18",
  "2024-12-16",
];

export const getClosestDate = (dates: Array<string>) => {
  const now = dayjs();
  let closestDate = dayjs().add(2, "month").format("YYYY-MM-DD");
  let minDiff = Infinity;

  dates.forEach((dateStr) => {
    console.log(dateStr, "+=dateStr");

    const date = dayjs(dateStr, "YYYY-MM-DD");

    const diff = date.diff(now, "d");

    if (diff >= 0 && diff < minDiff) {
      minDiff = diff;
      closestDate = dayjs(dateStr).format("YYYY-MM-DD");
    }
  });

  return closestDate;
};

export function daysUntilDate(dateStr: string): number | null {
  const targetDate = dayjs(dateStr, "YYYY-MM-DD");
  const now = dayjs();

  if (targetDate.isBefore(now)) {
    return null;
  }

  return targetDate.diff(now, "day");
}

export function replaceCDNName(url: string): string {
  if (url) {
    return url.replace(
      "https://rexpand-cms-strapi-prod.s3.us-east-1.amazonaws.com",
      "https://file.cms.tuilink.io"
    );
  }
  return "";
}
