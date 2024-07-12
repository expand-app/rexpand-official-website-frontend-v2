import { GetStaticProps, NextPage } from "next/types";

import freeResourcesService, { TagList } from "@/services/FreeResources";
import {
  Categories,
  CategoryTitle,
  FreeResourceData,
  TitleShowType,
} from "../type";
import { META_DATA } from "@/constant";
import Head from "@/components/Head";
import FreeResourceLayout from "../components/FreeResourceLayout";
interface Props {
  articleList: FreeResourceData;
  tagList: TagList;
  categories: Categories;
}

const Index: NextPage<Props> = ({ articleList, tagList, categories }) => {
  return (
    <>
      <Head {...META_DATA.news} />
      <FreeResourceLayout
        title={CategoryTitle.IndustryKnowledge}
        type={TitleShowType.single}
        articleList={articleList}
        tagList={tagList}
        categories={categories}
        data={articleList?.filter(
          (item) =>
            item?.attributes.category?.data?.attributes.name ===
            CategoryTitle.IndustryKnowledge
        )}
      />
    </>
  );
};

export default Index;

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
