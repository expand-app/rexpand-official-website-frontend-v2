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
import { CategoryType, FreeResourceData, Tag, TitleShowType } from "../../type";
import { TagList } from "@/services/FreeResources";
import useScreen from "@/components/useScreen/useScreen";

interface IndexPCProps {
  title: string;
  type: TitleShowType;
  data: FreeResourceData;
  tagList: TagList;
  articleList: FreeResourceData;
  currentFilter?: CategoryType;
  setCurrentFilter?: React.Dispatch<React.SetStateAction<CategoryType>>;
  tag?: Tag;
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
              &gt;&gt;&nbsp;
              {title}
            </div>

            <LinkFilter
              type={type}
              title={title}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              tag={tag}
              data={articleList}
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
}) => {
  return (
    <div>
      <main className={clsx("m-main", styles.m_main)}>
        <div className={styles.m_page}>
          <Header theme={Theme.LIGHT} />
          <div className="container mx-auto m-section px-3 ">
            <div className="pt-2 pb-6 text-base text-white">
              <Link href="/">Rexpand</Link> &gt;&gt;
              <Link href="/free-resources"> 免费资源</Link>
              &gt;&gt;&nbsp;
              {title}
            </div>

            <div className=" overflow-auto">
              <LinkFilter
                type={type}
                title={title}
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
                tag={tag}
                data={articleList}
              />
            </div>

            <div className={` flex space-y-4 flex-col`}>
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
    </div>
  );
};
export default IndexPC;
