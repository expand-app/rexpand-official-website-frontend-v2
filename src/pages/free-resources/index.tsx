import React, { useEffect, useMemo, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FreeResourceList from "./components/FreeResourceList/FreeResourceList";
import { freeResourceListData } from "@/data/free_resource";
import LinkFilter from "./components/LinkFilter/LinkFilter";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import dayjs from "dayjs";
import { LATEST_DATE, PAGE_SIZE } from "./constant";
import freeResourcesService from "@/services/FreeResources";
import RightRecommendContent from "./components/RightRecommendContent";
import {
  ContentTypes,
  FreeResourceData,
  PageInfo,
  CategoryTitle,
  CategoryType,
  TitleShowType,
} from "./type";

export interface FreeResourcesPageViewProps {
  filteredFreeResources: FreeResourceData[];
  handleFilterChange: (filterName: any) => void;
  currentFilter: CategoryType;
  contentTypes: ContentTypes;
  handleTitleTypeClick: (val: TitleShowType) => void;
  titleShowType: TitleShowType;
  breadcrumb: string;
}

export interface FreeResourcesPageProps {
  articleList: FreeResourceData[];
  contentTypes: ContentTypes;
}

export const FreeResourcesPage: NextPage<FreeResourcesPageProps> = ({
  articleList,
  contentTypes,
}) => {
  const { isMobile } = useScreen();

  const [currentFilter, setCurrentFilter] = useState<CategoryType>(
    CategoryType.NewArticle
  );
  const [titleShowType, setTitleShowType] = useState<TitleShowType>(
    TitleShowType.default
  );
  const handleFilterChange = (filterName: CategoryType) => {
    setCurrentFilter(filterName);
  };

  const handleTitleTypeClick = (val: TitleShowType) => {
    setTitleShowType(val);
  };
  const filteredFreeResources = useMemo(() => {
    if (currentFilter === CategoryType.NewArticle) {
      return articleList?.filter((item) =>
        dayjs(item.attributes.postDate).isAfter(dayjs(LATEST_DATE))
      );
    }
    return articleList?.filter(
      (item) => item?.attributes.type?.indexOf(currentFilter) != -1
    );
  }, [articleList, currentFilter]);

  const breadcrumb = useMemo(() => {
    let subText = "";

    switch (titleShowType) {
      case TitleShowType.single:
        subText = `${CategoryTitle[currentFilter]}`;
        break;
      case TitleShowType.label:
        subText = `label`;
        break;
      default:
        break;
    }
    let text = `首页 >> 免费资源 >> ${subText}`;

    return text;
  }, [currentFilter, titleShowType]);

  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? (
          <MobileView
            filteredFreeResources={filteredFreeResources}
            currentFilter={currentFilter}
            handleFilterChange={handleFilterChange}
            contentTypes={contentTypes}
            handleTitleTypeClick={handleTitleTypeClick}
            titleShowType={titleShowType}
            breadcrumb={breadcrumb}
          />
        ) : (
          <PCView
            filteredFreeResources={filteredFreeResources}
            currentFilter={currentFilter}
            handleFilterChange={handleFilterChange}
            contentTypes={contentTypes}
            handleTitleTypeClick={handleTitleTypeClick}
            titleShowType={titleShowType}
            breadcrumb={breadcrumb}
          />
        )}
      </div>
    </>
  );
};

function MobileView({
  filteredFreeResources,
  currentFilter,
  handleFilterChange,
}: FreeResourcesPageViewProps) {
  return (
    <div>
      <main className={clsx("m-main", styles.m_main)}>
        <div className={styles.page}>
          <Header theme={Theme.LIGHT} />

          <div className="container mx-auto m-section">
            <div className="py-24px px-20px">
              <LinkFilter
                current={currentFilter}
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <FreeResourceList data={filteredFreeResources} />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

function PCView({
  filteredFreeResources,
  currentFilter,
  handleFilterChange,
  contentTypes,
  handleTitleTypeClick,
  titleShowType,
  breadcrumb,
}: FreeResourcesPageViewProps) {
  return (
    <div>
      <main className={clsx("", styles.main)}>
        <div className={styles.page}>
          <Header theme={Theme.LIGHT} />

          <div className="container mx-auto w-3/4">
            <div className="pt-6 pb-8 text-base text-white">{breadcrumb}</div>
            <div className=" overflow-auto">
              <LinkFilter
                className={styles.filter}
                current={currentFilter}
                onChange={handleFilterChange}
                handleTitleTypeClick={handleTitleTypeClick}
                titleShowType={titleShowType}
              />
            </div>
            <div className="pb-12 mt-6 flex space-x-4">
              <FreeResourceList data={filteredFreeResources} />
              <RightRecommendContent contentTypes={contentTypes} />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default FreeResourcesPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await freeResourcesService.getArticleList();
    const contentType = await freeResourcesService.getArticleType();
    return {
      props: {
        articleList: data.data,
        contentTypes: contentType.data.schema.attributes,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        articleList: [],
        contentTypes: [],
      },
    };
  }
};
