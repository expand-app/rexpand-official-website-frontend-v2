import React, { useMemo, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import FreeResourceLayout from "./components/FreeResourceLayout";
import Head from "@/components/Head";
import dayjs from "dayjs";
import { LATEST_DATE } from "./constant";
import freeResourcesService, { TagList } from "@/services/FreeResources";
import {
  FreeResourceData,
  TitleShowType,
  CategoryTitle,
  Categories,
} from "./type";

export interface FreeResourcesPageProps {
  articleList: FreeResourceData;
  tagList: TagList;
  categories: Categories;
}

export interface FreeResourcesPageViewProps extends FreeResourcesPageProps {
  data: FreeResourceData;
  currentFilter: CategoryTitle;
  setCurrentFilter: React.Dispatch<React.SetStateAction<CategoryTitle>>;
}

export const FreeResourcesPage: NextPage<FreeResourcesPageProps> = (props) => {
  const { articleList, tagList, categories } = props;
  const [currentFilter, setCurrentFilter] = useState<CategoryTitle>(
    CategoryTitle.All
  );
  const filteredFreeResources = useMemo(() => {
    if (currentFilter === CategoryTitle.All) {
      return articleList.sort((a, b) => {
        const timeA = dayjs(a.attributes.postDate);
        const timeB = dayjs(b.attributes.postDate);
        return timeB.diff(timeA); // 使用 dayjs 的 diff 方法进行比较
      });
    }
    return articleList?.filter(
      (item) =>
        item?.attributes.category?.data?.attributes.name === currentFilter
    );
  }, [articleList, currentFilter]);
  console.log(articleList, "+=articleList", categories, currentFilter);

  return (
    <>
      <Head />
      <FreeResourceLayout
        type={TitleShowType.default}
        articleList={articleList}
        tagList={tagList}
        data={filteredFreeResources}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        categories={categories}
      />
    </>
  );
};

export default FreeResourcesPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await freeResourcesService.getArticleList();
    const tagData = await freeResourcesService.getArticleTag();
    const categories = await freeResourcesService.getArticleCategory();
    return {
      props: {
        articleList: data.data,
        tagList: tagData.data,
        categories: categories.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        articleList: [],
        tagList: [],
        categories: [],
      },
    };
  }
};
