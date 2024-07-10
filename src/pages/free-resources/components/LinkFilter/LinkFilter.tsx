import React from "react";
import styles from "./LinkFilter.module.css";
import clsx from "clsx";
import parentStyles from "../../index.module.css";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import tag_green from "@/assets/free-resources/tag_green.svg";
import {
  CategoryPath,
  CategoryTitle,
  CategoryType,
  FreeResourceData,
  Tag,
  TitleShowType,
} from "../../type";
import useFreeResourcesContext from "../../Context";
import Link from "next/link";

export interface LinkFilterProps {
  type: TitleShowType;
  title: string;
  currentFilter?: CategoryType;
  setCurrentFilter?: React.Dispatch<React.SetStateAction<CategoryType>>;
  tag?: Tag;
  data?: FreeResourceData;
}

export const LinkFilter: React.FC<LinkFilterProps> = (props) => {
  const { isMobile } = useScreen();

  return (
    <>{isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}</>
  );
};

const MobileView = ({
  type,
  title,
  currentFilter,
  setCurrentFilter,
  tag,
  data,
}: LinkFilterProps) => {
  const onTitleTypeMouseEnter = (filterName: any) => {
    setCurrentFilter?.(filterName);
  };

  const combinedClassName = clsx(
    "flex flex-row  overflow-auto  mb-4",
    styles.m_link_filter
  );

  if (type === TitleShowType.single) {
    return <div className="text-[40px] text-white font-semibold">{title}</div>;
  } else if (type === TitleShowType.tag) {
    return (
      <div className="py-6 px-20 bg-white rounded flex justify-between items-center ">
        <div className="flex flex-col basis-4/5">
          <div className="flex items-center">
            <Image src={tag_green} alt="tag"></Image>
            <span className="text-[40px] text-[#1B1B1B] ml-5 ">
              {tag?.title}
            </span>
          </div>
          <div className="mt-5">{tag?.desc}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-custom-green text-6xl font-semibold ">
            {data?.length}
          </div>
          <div className="mt-1 text-[#1b1b1b99] text-xl">篇内容持续更新</div>
        </div>
      </div>
    );
  }
  return (
    <div className={combinedClassName}>
      {Object.keys(CategoryTitle)?.map((key, index) => {
        if (
          CategoryTitle[key as keyof typeof CategoryTitle] ===
          CategoryTitle.NewArticle
        ) {
          return (
            <div
              key={key}
              className={clsx(
                "text-black rounded whitespace-nowrap text-base cursor-pointer min-w-[90px] min-h-[38px]  bg-white flex justify-center items-center",
                {
                  [styles.active]: currentFilter === key,
                },
                currentFilter !== key ? "opacity-40" : ""
              )}
              onMouseEnter={() => onTitleTypeMouseEnter(key)}
            >
              {CategoryTitle.NewArticle}
            </div>
          );
        }
        return (
          <Link href={CategoryPath[key as keyof typeof CategoryPath]} key={key}>
            <div
              className={clsx(
                "text-black rounded whitespace-nowrap text-base cursor-pointer min-w-[90px] min-h-[38px]  bg-white flex justify-center items-center",
                {
                  [styles.active]: currentFilter === key,
                },
                currentFilter !== key ? "opacity-40" : ""
              )}
              onMouseEnter={() => onTitleTypeMouseEnter(key)}
            >
              {CategoryTitle[key as keyof typeof CategoryTitle]}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const PCView = ({
  type,
  title,
  currentFilter,
  setCurrentFilter,
  tag,
  data,
}: LinkFilterProps) => {
  const onTitleTypeMouseEnter = (filterName: any) => {
    setCurrentFilter?.(filterName);
  };

  const combinedClassName = clsx(
    "flex flex-row gap-12 pl-20",
    styles.link_filter,
    parentStyles.filter
  );

  if (type === TitleShowType.single) {
    return <div className="text-[40px] text-white font-semibold">{title}</div>;
  } else if (type === TitleShowType.tag) {
    return (
      <div className="py-6 px-20 bg-white rounded flex justify-between items-center ">
        <div className="flex flex-col basis-4/5">
          <div className="flex items-center">
            <Image src={tag_green} alt="tag"></Image>
            <span className="text-[40px] text-[#1B1B1B] ml-5 ">
              {tag?.title}
            </span>
          </div>
          <div className="mt-5">{tag?.desc}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-custom-green text-6xl font-semibold ">
            {data?.length}
          </div>
          <div className="mt-1 text-[#1b1b1b99] text-xl">篇内容持续更新</div>
        </div>
      </div>
    );
  }
  return (
    <div className={combinedClassName}>
      {Object.keys(CategoryTitle)?.map((key, index) => {
        if (
          CategoryTitle[key as keyof typeof CategoryTitle] ===
          CategoryTitle.NewArticle
        ) {
          return (
            <div
              key={key}
              className={clsx("text-black cursor-pointer", {
                [styles.active]: currentFilter === key,
              })}
              onMouseEnter={() => onTitleTypeMouseEnter(key)}
            >
              {CategoryTitle.NewArticle}
            </div>
          );
        }
        return (
          <Link href={CategoryPath[key as keyof typeof CategoryPath]} key={key}>
            <div
              className={clsx("text-black cursor-pointer", {
                [styles.active]: currentFilter === key,
              })}
              onMouseEnter={() => onTitleTypeMouseEnter(key)}
            >
              {CategoryTitle[key as keyof typeof CategoryTitle]}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default LinkFilter;
