import React from "react";
import styles from "./LinkFilter.module.css";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import { CategoryTitle, CategoryType } from "../../constant";

export const LinkFilter = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <>{isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}</>
  );
};

const MobileView = ({ current, className, onChange }: Props) => {
  const onTitleTypeMouseEnter = (filterName: any) => {
    onChange?.(filterName);
  };

  const combinedClassName = clsx(
    "flex flex-row",
    styles.m_link_filter,
    className
  );
  return (
    <div className={combinedClassName}>
      {Object.keys(CategoryTitle)?.map((key, index) => (
        <div
          key={index}
          className={clsx("text-black cursor-pointer", {
            [styles.active]: current === key,
          })}
          onMouseEnter={() => onTitleTypeMouseEnter(key)}
        >
          {CategoryTitle[key as keyof typeof CategoryTitle]}
        </div>
      ))}
    </div>
  );
};

const PCView = ({ current, className, onChange }: Props) => {
  const onTitleTypeMouseEnter = (filterName: any) => {
    onChange?.(filterName);
  };

  const combinedClassName = clsx(
    "flex flex-row gap-12 pl-20",
    styles.link_filter,
    className
  );
  console.log(current, "+=current=");

  return (
    <div className={combinedClassName}>
      {Object.keys(CategoryTitle)?.map((key, index) => (
        <div
          key={index}
          className={clsx("text-black cursor-pointer", {
            [styles.active]: current === key,
          })}
          onMouseEnter={() => onTitleTypeMouseEnter(key)}
        >
          {CategoryTitle[key as keyof typeof CategoryTitle]}
        </div>
      ))}
    </div>
  );
};
export default LinkFilter;

export interface Props {
  current: CategoryType; // current fiter name
  className?: string;
  onChange: (filterName: string) => void;
}
