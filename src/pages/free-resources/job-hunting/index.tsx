import { GetStaticProps, NextPage } from "next/types";

import freeResourcesService, { TagList } from "@/services/FreeResources";
import {
  CategoryTitle,
  CategoryType,
  ContentTypes,
  FreeResourceData,
  TitleShowType,
} from "../type";
import FreeResourceLayout from "../components/FreeResourceLayout";
import _ from "lodash";

interface JobJuntingProps {
  articleList: FreeResourceData;
  tagList: TagList;
}

const JobJunting: NextPage<JobJuntingProps> = ({ articleList, tagList }) => {
  return (
    <FreeResourceLayout
      title={CategoryTitle.JobSearchGuide}
      type={TitleShowType.single}
      articleList={articleList}
      tagList={tagList}
      data={articleList?.filter(
        (item) =>
          item?.attributes.category?.indexOf(CategoryType.JobSearchGuide) != -1
      )}
    />
  );
};

export default JobJunting;

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
