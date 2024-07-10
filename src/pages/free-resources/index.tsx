import React, { useContext, useEffect, useMemo, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FreeResourceList from "./components/FreeResourceList/FreeResourceList";
import FreeResourceLayout from "./components/FreeResourceLayout";
import LinkFilter from "./components/LinkFilter/LinkFilter";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import dayjs from "dayjs";
import { LATEST_DATE } from "./constant";
import freeResourcesService, { TagList } from "@/services/FreeResources";
import {
  FreeResourceData,
  CategoryTitle,
  CategoryType,
  TitleShowType,
} from "./type";
import useFreeResourcesContext from "./Context";
import _ from "lodash";
import Link from "next/link";

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
  const { isMobile } = useScreen();
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
        title={CategoryTitle.NewArticle}
        type={TitleShowType.default}
        articleList={articleList}
        tagList={tagList}
        data={filteredFreeResources}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      {/* {isMobile?.() ? (
        <MobileView
          {...props}
          data={filteredFreeResources}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      ) : (
        <PCView
          {...props}
          data={filteredFreeResources}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      )} */}
    </>
  );
};

const MobileView: React.FC<FreeResourcesPageViewProps> = ({
  articleList,
  tagList,
  data,
  currentFilter,
  setCurrentFilter,
}) => {
  const { handleTitleTypeClick, titleShowType, breadcrumb } =
    useFreeResourcesContext();
  return (
    <div>
      <main className={clsx("m-main", styles.m_main)}>
        <div className={styles.m_page}>
          <Header theme={Theme.LIGHT} />
          <div className="container mx-auto m-section px-3 ">
            <div className="pt-2 pb-6 text-base text-white">
              <Link href="/">首页</Link> &gt;&gt;
              <span
                className="cursor-pointer ml-1"
                onClick={() => {
                  handleTitleTypeClick(TitleShowType.default);
                }}
              >
                免费资源
              </span>
              {breadcrumb ? ` >> ${breadcrumb}` : ""}
            </div>

            <LinkFilter
              type={TitleShowType.default}
              title={CategoryTitle.NewArticle}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              data={articleList}
            />

            <FreeResourceList data={data} />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

const PCView: React.FC<FreeResourcesPageViewProps> = ({
  articleList,
  tagList,
  data,
  currentFilter,
  setCurrentFilter,
}) => {
  return (
    <FreeResourceLayout
      title={CategoryTitle.NewArticle}
      type={TitleShowType.default}
      articleList={articleList}
      tagList={tagList}
      data={data}
      currentFilter={currentFilter}
      setCurrentFilter={setCurrentFilter}
    />
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
