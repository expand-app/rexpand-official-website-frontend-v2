import { NextPage } from "next";
import Head from "@/components/Head";
import styles from "../../index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import clsx from "clsx";
import LinkFilter from "../LinkFilter/LinkFilter";
import FreeResourceList from "../FreeResourceList/FreeResourceList";
import RightRecommendContent from "../RightRecommendContent";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import {
  Categories,
  CategoryTitle,
  FreeResourceData,
  Tag,
  TitleShowType,
} from "../../type";
import { TagList } from "@/services/FreeResources";
import useScreen from "@/components/useScreen/useScreen";

interface IndexPCProps {
  title?: string;
  type: TitleShowType;
  data: FreeResourceData;
  tagList: TagList;
  articleList: FreeResourceData;
  currentFilter?: CategoryTitle;
  setCurrentFilter?: React.Dispatch<React.SetStateAction<CategoryTitle>>;
  tag?: Tag;
  categories?: Categories;
}

const IndexPC: NextPage<IndexPCProps> = (props) => {
  const { isMobile } = useScreen();

  return (
    <>{isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}</>
  );
};

const PCView: React.FC<IndexPCProps> = ({
  title,
  type,
  data,
  tagList,
  articleList,
  currentFilter,
  setCurrentFilter,
  tag,
  categories,
}) => {
  return (
    <>
      <Head />
      <main className={clsx("", styles.main)}>
        <div className={styles.page}>
          <Header theme={Theme.LIGHT} />

          <div className="container mx-auto w-3/4">
            <div className="pt-6 pb-8 text-base text-white">
              <Link href="/">Rexpand</Link> &gt;&gt;
              <Link href="/free-resources"> 免费资源</Link>
              {title && <span>&gt;&gt;&nbsp;{title}</span>}
            </div>

            <LinkFilter
              type={type}
              title={title}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              tag={tag}
              data={articleList}
              categories={categories}
            />

            <div className={`pb-12 mt-6 flex space-x-4`}>
              <FreeResourceList data={data} />
              {type !== TitleShowType.tag && (
                <RightRecommendContent
                  articleList={articleList}
                  tagList={tagList}
                />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

const MobileView: React.FC<IndexPCProps> = ({
  title,
  type,
  data,
  tagList,
  articleList,
  currentFilter,
  setCurrentFilter,
  tag,
  categories,
}) => {
  return (
    <div>
      <main className={clsx("m-main bg-[#F7F7F7]", styles.m_main)}>
        <Header theme={Theme.LIGHT} />
        <div className="container mx-auto m-section  ">
          <div className={clsx(styles.m_page, "px-3 pb-8")}>
            <div className="pt-2 pb-6 text-base text-white">
              <Link href="/">Rexpand</Link> &gt;&gt;
              <Link href="/free-resources"> 免费资源</Link>
              {title && <span>&gt;&gt;&nbsp;{title}</span>}
            </div>

            <div className=" overflow-auto">
              <LinkFilter
                type={type}
                title={title}
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
                tag={tag}
                data={articleList}
                categories={categories}
              />
            </div>

            <FreeResourceList data={data} />
          </div>
          {type !== TitleShowType.tag && (
            <RightRecommendContent
              articleList={articleList}
              tagList={tagList}
            />
          )}
        </div>

        <Footer />
      </main>
    </div>
  );
};
export default IndexPC;
