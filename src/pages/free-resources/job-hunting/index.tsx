import { GetStaticProps, NextPage } from "next/types";

import freeResourcesService, { TagList } from "@/services/FreeResources";
import {
  Categories,
  CategoryTitle,
  FreeResourceData,
  TitleShowType,
} from "../type";
import FreeResourceLayout from "../components/FreeResourceLayout";
import Head from "@/components/Head";
import { META_DATA } from "@/constant";

interface JobJuntingProps {
  articleList: FreeResourceData;
  tagList: TagList;
  categories: Categories;
}

const JobJunting: NextPage<JobJuntingProps> = ({
  articleList,
  tagList,
  categories,
}) => {
  return (
    <>
      <Head {...META_DATA.jobHunting} />
      <FreeResourceLayout
        title={CategoryTitle.JobSearchGuide}
        type={TitleShowType.single}
        articleList={articleList}
        categories={categories}
        tagList={tagList}
        data={articleList?.filter(
          (item) =>
            item?.attributes.category?.data?.attributes.name ===
            CategoryTitle.JobSearchGuide
        )}
      />
    </>
  );
};

export default JobJunting;

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
