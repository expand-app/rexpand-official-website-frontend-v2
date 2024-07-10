import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "@/components/Head";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import { useRef, useState } from "react";
import styles from "./index.module.css";
import tagSvg from "@/assets/free-resources/tag.svg";
import freeResourcesService, { TagList } from "@/services/FreeResources";
import Header, { Theme } from "@/components/Header/Header";
import { FreeResourceData } from "../free-resources/type";
import Link from "next/link";
import _ from "lodash";
interface HotTagProps {
  articleList: FreeResourceData;
  tagList: TagList;
}

const PCView: React.FC<HotTagProps> = ({ tagList }) => {
  return (
    <main className={clsx("", styles.main)}>
      <div className={styles.page}>
        <Header theme={Theme.LIGHT} />

        <div className="container mx-auto w-3/4">
          <div className="py-6 text-[#33333399]  cursor-pointer">
            <Link href="/">首页</Link> &gt;&gt; 标签
          </div>
          <div className="bg-white rounded min-h-[830px] p-8">
            <div className="text-[22px] font-semibold text-center">
              标签归档
            </div>
            <div className=" mt-6 flex  flex-wrap gap-4">
              {tagList.map((item) => {
                return (
                  <Link href={`/free-resources/tag/${item.id}`} key={item.id}>
                    <div
                      className={`flex cursor-pointer gap-1 text-[#33333399]  rounded text-base border-[1px] px-4 items-center h-[50px] w-[180px] border-custom-black-0.1 border-solid`}
                    >
                      <Image
                        src={tagSvg}
                        alt={item.attributes.title}
                        width={18}
                        height={18}
                      ></Image>
                      <span className="text-lg ml-2">
                        {item.attributes.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

const MobileView: React.FC<HotTagProps> = ({ tagList }) => {
  return (
    <div className={styles.page}>
      <Header theme={Theme.LIGHT} />
      <main className="m-main mt-[45px] bg-white ">
        <div className="px-3">
          <div className="py-6 text-[#33333399]  cursor-pointer border-b border-solid borer-[#DADADA] ">
            <Link href="/">首页</Link> &gt;&gt; 标签
          </div>
          <div className=" rounded min-h-[830px] py-6">
            <div className="text-[22px] font-semibold text-center">
              标签归档
            </div>
            <div className={clsx("mt-6 flex  flex-wrap gap-4")}>
              {tagList.map((item) => {
                return (
                  <Link href={`/free-resources/tag/${item.id}`} key={item.id}>
                    <div
                      className={`flex cursor-pointer gap-1 text-[#33333399]  rounded text-base border-[1px] px-4 items-center h-[50px] w-[180px] border-custom-black-0.1 border-solid`}
                    >
                      <Image
                        src={tagSvg}
                        alt={item.attributes.title}
                        width={18}
                        height={18}
                      ></Image>
                      <span className="text-lg ml-2">
                        {item.attributes.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const HotTag: NextPage<HotTagProps> = (props) => {
  const { isMobile } = useScreen();

  return (
    <div>
      <Head />
      <div>
        {isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}
      </div>
    </div>
  );
};

export default HotTag;

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
