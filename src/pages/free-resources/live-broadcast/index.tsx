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
      <Head {...META_DATA.liveBroadcast} />
      <FreeResourceLayout
        title={CategoryTitle.LiveStreamBooking}
        type={TitleShowType.single}
        articleList={articleList}
        tagList={tagList}
        categories={categories}
        data={articleList?.filter(
          (item) =>
            item?.attributes.category?.data?.attributes.name ===
            CategoryTitle.LiveStreamBooking
        )}
      />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await freeResourcesService.getArticleList();
    const categories = await freeResourcesService.getArticleCategory();
    const tagData = await freeResourcesService.getArticleTag();
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
