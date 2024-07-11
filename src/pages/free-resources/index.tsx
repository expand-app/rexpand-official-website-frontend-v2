import React, { useMemo, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import FreeResourceLayout from "./components/FreeResourceLayout";
import Head from "@/components/Head";
import dayjs from "dayjs";
import { LATEST_DATE } from "./constant";
import freeResourcesService, { TagList } from "@/services/FreeResources";
import { FreeResourceData, CategoryType, TitleShowType } from "./type";

export interface FreeResourcesPageProps {
  articleList: FreeResourceData;
  tagList: TagList;
}

export interface FreeResourcesPageViewProps extends FreeResourcesPageProps {
  data: FreeResourceData;
  currentFilter: CategoryType;
  setCurrentFilter: React.Dispatch<React.SetStateAction<CategoryType>>;
}

export const FreeResourcesPage: NextPage<FreeResourcesPageProps> = (props) => {
  const { articleList, tagList } = props;
  const [currentFilter, setCurrentFilter] = useState<CategoryType>(
    CategoryType.NewArticle
  );
  const filteredFreeResources = useMemo(() => {
    if (currentFilter === CategoryType.NewArticle) {
      return articleList?.filter((item) =>
        dayjs(item.attributes.postDate).isAfter(dayjs(LATEST_DATE))
      );
    }
    return articleList?.filter(
      (item) => item?.attributes.category?.indexOf(currentFilter) != -1
    );
  }, [articleList, currentFilter]);
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
      />
    </>
  );
};

export default FreeResourcesPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await freeResourcesService.getArticleList();
    const tagData = await freeResourcesService.getArticleTag();
    return {
      props: {
        articleList: data.data,
        tagList: tagData.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        articleList: [],
        tagList: [],
      },
    };
  }
};
