import React, { useMemo } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import { useRouter } from "next/router";
import { freeResourceListData } from "@/data/free_resource";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import { FreeResourceData } from "../components/FreeResourceList/FreeResourceList";
import Head from "@/components/Head";

export const FreeResourceDetailPage: NextPage = ({ ...props }: Props) => {
  const { isMobile } = useScreen();
  // const router = useRouter();
  // const { id } = router.query;

  // const currentArticle = useMemo(()=>{
  //     if ( id != undefined) {
  //         let idNum: number = parseInt(id as string);

  //         return freeResourceListData.find((item)=>item.id+'' == id);
  //     }
  //     return null;
  // }, [freeResourceListData, id]);

  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}
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
      <Footer />
    </main>
  );
}
export default FreeResourceDetailPage;

interface Props {
  article?: FreeResourceData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = freeResourceListData?.map((item) => ({
    params: { id: item.id + "" },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const freeResourceData = freeResourceListData?.find(
    (item) => item.id + "" === params?.id
  );

  return { props: { article: freeResourceData } };
};

interface ParamsProps {
  id: string;
}
