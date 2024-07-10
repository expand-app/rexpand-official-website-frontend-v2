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
import { STRAPI_PRIVATE_PROP } from "@/constant";
interface Props {
  articleList: FreeResourceData;
  tagList: TagList;
}

const Index: NextPage<Props> = ({ articleList, tagList }) => {
  return (
    <FreeResourceLayout
      title={CategoryTitle.LiveStreamBooking}
      type={TitleShowType.single}
      articleList={articleList}
      tagList={tagList}
      data={articleList?.filter(
        (item) =>
          item?.attributes.category?.indexOf(CategoryType.LiveStreamBooking) !=
          -1
      )}
    />
  );
};

export default Index;

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
