import React, { useEffect, useMemo, useState } from "react";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import { useRouter } from "next/router";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import RichTextDisplay, { ParagraphBlock } from "./ParseBlocksText";
import { FreeResourceData } from "../free-resources/components/FreeResourceList/FreeResourceList";
import freeResources from "@/services/FreeResources";

// 定义 Props 的类型
interface Props {
  article?: FreeResourceData;
}

const FreeResourceDetailPage: NextPage<Props> = ({ article }) => {
  const { isMobile } = useScreen();

  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? (
          <MobileView article={article} />
        ) : (
          <PCView article={article} />
        )}
      </div>
    </>
  );
};

function MobileView({ article }: Props) {
  return (
    <main className={clsx("bg-white m-main", styles.m_main)}>
      <Header theme={Theme.LIGHT} />
      <div className="m-section">
        <div className="flex justify-center">
          <div className="m-fr-article-box">
            <div className="m-fr-article">
              {article ? (
                <>
                  <div className="m-fr-article-header">
                    <Image
                      src={article?.image}
                      alt={article?.title}
                      sizes="100vw"
                      width={765}
                      height={362}
                      className={"m_head_image"}
                    />
                    <div className="m-fr-article-title">{article?.title}</div>
                    <div className="m-fr-article-lastupdate">
                      最后更新时间: <span>{article?.lastUpdateDate}</span>
                    </div>
                  </div>

                  <div className="m-fr-article-body">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: article?.content?.join("") ?? "",
                      }}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function PCView({ article }: Props) {
  return (
    <main className={clsx("bg-white", styles.main)}>
      <Header theme={Theme.LIGHT} />
      <div className="container mx-auto flex justify-center w-1/2">
        <div className="fr-article-box">
          <div className="fr-article">
            {article ? (
              <>
                <div className="fr-article-header">
                  <Image
                    src={article?.image}
                    alt={article?.title}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 8,
                    }}
                    width={765}
                    height={362}
                  />
                  <div className="fr-article-title">{article?.title}</div>
                  <div className="fr-article-lastupdate">
                    最后更新时间: <span>{article?.lastUpdateDate}</span>
                  </div>
                </div>

                <div className="fr-article-body">
                  <RichTextDisplay content={article.content} />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default FreeResourceDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const data = await freeResources.getArticleList();
    const attributes = data.data[0].attributes;

    return {
      props: {
        article: {},
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        article: null,
      },
    };
  }
};
