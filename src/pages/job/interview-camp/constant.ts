import dayjs from "dayjs";

export const TRAINING_CAMP_DATE = [
  "2024-07-22",
  "2024-08-19",
  "2024-09-16",
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
