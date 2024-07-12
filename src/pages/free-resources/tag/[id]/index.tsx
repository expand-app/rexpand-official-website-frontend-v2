import { GetStaticProps, NextPage } from "next/types";

import freeResourcesService, { TagList } from "@/services/FreeResources";
import { FreeResourceData, TitleShowType } from "../../type";
import FreeResourceLayout from "../../components/FreeResourceLayout";
import { useRouter } from "next/router";
import { useMemo } from "react";
interface JobJuntingProps {
  articleList: FreeResourceData;
  tagList: TagList;
}

const JobJunting: NextPage<JobJuntingProps> = ({ articleList, tagList }) => {
  const router = useRouter();
  const { id } = router.query;
  const tag = useMemo(() => {
    if (id) {
      return tagList.find((item) => item.id === +id);
    }
  }, [id, tagList]);

  return (
    <FreeResourceLayout
      title={tag?.attributes.title || ""}
      type={TitleShowType.tag}
      articleList={articleList}
      tag={{
        title: tag?.attributes.title || "",
        desc: tag?.attributes.description || "",
      }}
      tagList={tagList}
      data={articleList}
    />
  );
};

export default JobJunting;

export async function getStaticPaths() {
  // 获取所有可能的 tag 值
  const tagData = await freeResourcesService.getArticleTag();
  // 生成路径
  const paths = tagData.data.map((item) => ({
    params: { id: item.id + "" },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  try {
    const data = await freeResourcesService.getArticleList();
    const tagData = await freeResourcesService.getArticleTag();
    const { id } = context.params;
    if (id) {
      return {
        props: {
          articleList: data.data.filter((item) => {
            return item.attributes.tags.data.some((item) => item.id === +id);
          }),
          tagList: tagData.data,
        },
      };
    }
    return {
      props: {
        articleList: [],
        tagList: [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        articleList: [],
        articleTagType: {},
      },
    };
  }
};
