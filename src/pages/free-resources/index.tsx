import React, { useContext, useEffect, useMemo, useState } from "react";
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
  TagType,
  RightArticleType,
} from "./type";
import Link from "next/link";
import { FreeResourcesContextProvider } from "./ContextProvider";
import useFreeResourcesContext from "./Context";

export interface FreeResourcesPageViewProps {
  filteredFreeResources: FreeResourceData[];
  handleFilterChange: (filterName: any) => void;
  currentFilter: CategoryType;
  contentTypes: ContentTypes;
  handleTitleTypeClick: (val: TitleShowType) => void;
  titleShowType: TitleShowType;
  breadcrumb: string;
  setTagType: React.Dispatch<React.SetStateAction<keyof typeof TagType | null>>;
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
  const [articleType, setArticleType] =
    useState<keyof typeof RightArticleType>("hot");
  const [tagType, setTagType] = useState<keyof typeof TagType | null>(null);
  const handleFilterChange = (filterName: CategoryType) => {
    setCurrentFilter(filterName);
  };

  const handleTitleTypeClick = (val: TitleShowType) => {
    setTitleShowType(val);
  };
  const filteredFreeResources = useMemo(() => {
    if (titleShowType === TitleShowType.tag && tagType) {
      return articleList?.filter(
        (item) => item?.attributes.tag.indexOf(tagType) != -1
      );
    } else {
      if (currentFilter === CategoryType.NewArticle) {
        return articleList?.filter((item) =>
          dayjs(item.attributes.postDate).isAfter(dayjs(LATEST_DATE))
        );
      }
      return articleList?.filter(
        (item) => item?.attributes.category?.indexOf(currentFilter) != -1
      );
    }
  }, [articleList, currentFilter, titleShowType, tagType]);

  const breadcrumb = useMemo(() => {
    let subText = "";

    switch (titleShowType) {
      case TitleShowType.single:
        subText = `${CategoryTitle[currentFilter]}`;
        break;
      case TitleShowType.tag:
        if (tagType) {
          subText = `${TagType[tagType]}`;
        }

        break;
      default:
        break;
    }

    return subText;
  }, [currentFilter, tagType, titleShowType]);

  const filteredFreeResourcesByArticleType = useMemo(() => {
    if (articleType === "hot") {
      return articleList?.filter((item) => item?.attributes.isPopular);
    } else if (articleType === "recommend") {
      return articleList?.filter((item) => item?.attributes.isRecommended);
    } else if (articleType === "random") {
      return articleList?.filter((item) => item?.attributes.isRandom);
    }
    return [];
  }, [articleList, articleType]);

  return (
    <>
      <Head />
      <FreeResourcesContextProvider
        filteredFreeResources={filteredFreeResources}
        currentFilter={currentFilter}
        handleFilterChange={handleFilterChange}
        contentTypes={contentTypes}
        handleTitleTypeClick={handleTitleTypeClick}
        titleShowType={titleShowType}
        breadcrumb={breadcrumb}
        setTagType={setTagType}
        tagType={tagType}
        articleType={articleType}
        setArticleType={setArticleType}
        filteredFreeResourcesByArticleType={filteredFreeResourcesByArticleType}
      >
        {isMobile?.() ? <MobileView /> : <PCView />}
      </FreeResourcesContextProvider>
    </>
  );
};

function MobileView({}) {
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

            <LinkFilter />

            <FreeResourceList />
            {titleShowType !== TitleShowType.tag && <RightRecommendContent />}
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

function PCView() {
  const { handleTitleTypeClick, titleShowType, breadcrumb } =
    useFreeResourcesContext();
  return (
    <div>
      <main className={clsx("", styles.main)}>
        <div className={styles.page}>
          <Header theme={Theme.LIGHT} />

          <div className="container mx-auto w-3/4">
            <div className="pt-6 pb-8 text-base text-white">
              <Link href="/">首页</Link> &gt;&gt;
              <span
                className="cursor-pointer "
                onClick={() => {
                  handleTitleTypeClick(TitleShowType.default);
                }}
              >
                免费资源
              </span>
              {breadcrumb ? ` >> ${breadcrumb}` : ""}
            </div>

            <div className=" overflow-auto">
              <LinkFilter />
            </div>

            <div className={`pb-12 mt-6 flex space-x-4`}>
              <FreeResourceList />
              {titleShowType !== TitleShowType.tag && <RightRecommendContent />}
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
