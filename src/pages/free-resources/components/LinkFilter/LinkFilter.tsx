import React from "react";
import styles from "./LinkFilter.module.css";
import clsx from "clsx";
import parentStyles from "../../index.module.css";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import tag_green from "@/assets/free-resources/tag_green.svg";
import {
  Categories,
  CategoryPath,
  CategoryTitle,
  FreeResourceData,
  Tag,
  TitleShowType,
} from "../../type";
import Link from "next/link";

export interface LinkFilterProps {
  type: TitleShowType;
  title?: string;
  currentFilter?: CategoryTitle;
  setCurrentFilter?: React.Dispatch<React.SetStateAction<CategoryTitle>>;
  tag?: Tag;
  data?: FreeResourceData;
  categories?: Categories;
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
  categories,
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
      <div
        className={clsx(
          "text-black rounded whitespace-nowrap text-base cursor-pointer min-w-[90px] min-h-[38px]  bg-white flex justify-center items-center",
          {
            [styles.active]: currentFilter === CategoryTitle.NewArticle,
          },
          currentFilter !== CategoryTitle.NewArticle ? "opacity-40" : ""
        )}
        onMouseEnter={() => onTitleTypeMouseEnter(CategoryTitle.NewArticle)}
      >
        {CategoryTitle.NewArticle}
      </div>
      {categories?.map((item) => {
        return (
          <Link href={CategoryPath[item.attributes.name]} key={item.id}>
            <div
              className={clsx(
                "text-black rounded whitespace-nowrap text-base cursor-pointer min-w-[90px] min-h-[38px]  bg-white flex justify-center items-center",
                {
                  [styles.active]: currentFilter === item.attributes.name,
                },
                currentFilter !== item.attributes.name ? "opacity-40" : ""
              )}
              onMouseEnter={() => onTitleTypeMouseEnter(item.attributes.name)}
            >
              {item.attributes.name}
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
  categories,
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
      <div
        className={clsx("text-black cursor-pointer", {
          [styles.active]: currentFilter === CategoryTitle.NewArticle,
        })}
        onMouseEnter={() => onTitleTypeMouseEnter(CategoryTitle.NewArticle)}
      >
        {CategoryTitle.NewArticle}
      </div>
      {categories?.map((item) => {
        return (
          <Link href={CategoryPath[item.attributes.name]} key={item.id}>
            <div
              className={clsx("text-black cursor-pointer", {
                [styles.active]: currentFilter === item.attributes.name,
              })}
              onMouseEnter={() => onTitleTypeMouseEnter(item.attributes.name)}
            >
              {item.attributes.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default LinkFilter;
