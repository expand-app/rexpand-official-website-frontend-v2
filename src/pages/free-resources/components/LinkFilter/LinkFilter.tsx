import React from "react";
import styles from "./LinkFilter.module.css";
import clsx from "clsx";
import parentStyles from "../../index.module.css";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import tag_green from "@/assets/free-resources/tag_green.svg";
import {
  CategoryTitle,
  CategoryType,
  TagType,
  TitleShowType,
} from "../../type";
import useFreeResourcesContext from "../../Context";

export const LinkFilter = () => {
  const { isMobile } = useScreen();

  return <>{isMobile?.() ? <MobileView /> : <PCView />}</>;
};

const MobileView = () => {
  const {
    currentFilter,
    handleFilterChange,
    handleTitleTypeClick,
    titleShowType,
    tagType,
    filteredFreeResources,
  } = useFreeResourcesContext();
  const onTitleTypeMouseEnter = (filterName: any) => {
    handleFilterChange?.(filterName);
  };

  const onTitleTypeClick = () => {
    handleTitleTypeClick(TitleShowType.single);
  };

  const combinedClassName = clsx(
    "flex flex-row  overflow-auto  mb-4",
    styles.m_link_filter
  );
  if (titleShowType === TitleShowType.single) {
    return (
      <div className="text-[30px] mb-4  text-center text-white font-semibold">
        {CategoryTitle[currentFilter]}
      </div>
    );
  } else if (titleShowType === TitleShowType.tag) {
    return (
      <div className="py-3   rounded flex  ">
        <div className="flex flex-col text-white ">
          <div className="flex items-center gap-4">
            <Image src={tag_green} alt="tag" width={33} height={33}></Image>
            <span className="text-[30px]   ">{TagType[tagType!]}</span>
          </div>
          <div className="flex  items-center gap-1">
            <div className=" text-base font-semibold ">
              {filteredFreeResources.length}
            </div>
            <div>篇内容持续更新</div>
          </div>

          <div
            className={clsx(
              "mt-5 text-[#1c1c1c99] p-3 rounded text-xs",
              styles.desc
            )}
          >
            描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述。
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={combinedClassName}>
      {Object.keys(CategoryTitle)?.map((key, index) => (
        <div
          key={index}
          className={clsx(
            "text-black rounded whitespace-nowrap text-base cursor-pointer min-w-[90px] min-h-[38px]  bg-white flex justify-center items-center",
            {
              [styles.active]: currentFilter === key,
            },
            currentFilter !== key ? "opacity-40" : ""
          )}
          onMouseEnter={() => onTitleTypeMouseEnter(key)}
          onClick={onTitleTypeClick}
        >
          {CategoryTitle[key as keyof typeof CategoryTitle]}
        </div>
      ))}
    </div>
  );
};

const PCView = () => {
  const {
    currentFilter,
    handleFilterChange,
    handleTitleTypeClick,
    titleShowType,
    tagType,
    filteredFreeResources,
  } = useFreeResourcesContext();
  const onTitleTypeMouseEnter = (filterName: any) => {
    handleFilterChange?.(filterName);
  };

  const onTitleTypeClick = () => {
    handleTitleTypeClick(TitleShowType.single);
  };

  const combinedClassName = clsx(
    "flex flex-row gap-12 pl-20",
    styles.link_filter,
    parentStyles.filter
  );

  if (titleShowType === TitleShowType.single) {
    return (
      <div className="text-[40px] text-white font-semibold">
        {CategoryTitle[currentFilter]}
      </div>
    );
  } else if (titleShowType === TitleShowType.tag) {
    return (
      <div className="py-6 px-20 bg-white rounded flex justify-between items-center ">
        <div className="flex flex-col basis-4/5">
          <div className="flex items-center">
            <Image src={tag_green} alt="tag"></Image>
            <span className="text-[40px] text-[#1B1B1B] ml-5 ">
              {TagType[tagType!]}
            </span>
          </div>
          <div className="mt-5">
            描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述描述这是一段描述。
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-custom-green text-6xl font-semibold ">
            {filteredFreeResources.length}
          </div>
          <div className="mt-1 text-[#1b1b1b99] text-xl">篇内容持续更新</div>
        </div>
      </div>
    );
  }
  return (
    <div className={combinedClassName}>
      {Object.keys(CategoryTitle)?.map((key, index) => (
        <div
          key={index}
          className={clsx("text-black cursor-pointer", {
            [styles.active]: currentFilter === key,
          })}
          onMouseEnter={() => onTitleTypeMouseEnter(key)}
          onClick={onTitleTypeClick}
        >
          {CategoryTitle[key as keyof typeof CategoryTitle]}
        </div>
      ))}
    </div>
  );
};
export default LinkFilter;
