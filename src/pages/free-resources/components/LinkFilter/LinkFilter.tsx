import React from "react";
import styles from "./LinkFilter.module.css";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";

export const LinkFilter = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <>{isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}</>
  );
};

const MobileView = ({ current, data, className, onChange }: Props) => {
  const handleClick = (filterName: string) => {
    onChange?.(filterName);
  };

  const combinedClassName = clsx(
    "flex flex-row",
    styles.m_link_filter,
    className
  );
  return (
    <div className={combinedClassName}>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(styles.m_link, {
              [styles.m_active]: current === item,
            })}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

const PCView = ({ current, data, className, onChange }: Props) => {
  const handleClick = (filterName: string) => {
    onChange?.(filterName);
  };

  const combinedClassName = clsx(
    "flex flex-row gap-12 pl-20",
    styles.link_filter,
    className
  );
  return (
    <div className={combinedClassName}>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx("text-black cursor-pointer", {
              [styles.active]: current === item,
            })}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default LinkFilter;

export interface Props {
  current: string; // current fiter name
  data: Array<string>;
  className?: string;
  onChange: (filterName: string) => void;
}
