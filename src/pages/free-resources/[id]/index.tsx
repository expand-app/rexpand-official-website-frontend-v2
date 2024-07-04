import React, { useEffect, useMemo, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import qrDaeImg from "@/assets/qr_dae.png";
import freeResourcesService from "@/services/FreeResources";
import Image from "next/image";
import tagSvg from "@/assets/free-resources/tag.svg";
import like_svg from "@/assets/free-resources/link_white.svg";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import { ContentTypes, FreeResourceData, TagType } from "../type";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRouter } from "next/router";
import RightRecommendContent from "./RightContent";

interface Props {
  article: FreeResourceData;
  articleList: Array<FreeResourceData>;
  contentTypes: ContentTypes;
}

interface FreeResourceDetailViewPage extends Props {
  addLikeCount: (val: number) => void;
}

export const FreeResourceDetailPage: NextPage<Props> = ({
  ...props
}: Props) => {
  const { isMobile } = useScreen();
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<FreeResourceData>(props.article);
  console.log(props, "+==");

  // useEffect(()=>{
  //     const getArticle=async()=>{
  //       if(id){
  //          const data=await freeResourcesService.getArticleById(+id)
  //          setArticle(data.data)
  //       }

  //     }
  // },[])
  const addLikeCount = async (val: number) => {
    const data = await freeResourcesService.setArticle({
      id,
      likeCount: val + 1,
    });
    setArticle(data.data);
  };
  console.log(article, "+==addLikeCountlikeCount==");

  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? (
          <MobileView {...props} addLikeCount={addLikeCount} />
        ) : (
          <PCView {...props} article={article} addLikeCount={addLikeCount} />
        )}
      </div>
    </>
  );
};

function MobileView({
  article,
  contentTypes,
  addLikeCount,
  articleList,
}: FreeResourceDetailViewPage) {
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

function PCView({
  article,
  contentTypes,
  addLikeCount,
  articleList,
}: FreeResourceDetailViewPage) {
  const { attributes } = article;
  return (
    <main className={clsx("bg-white", styles.main)}>
      <Header theme={Theme.LIGHT} />
      <div className={clsx(styles.page)}>
        <div className={clsx("container mx-auto  w-2/3")}>
          <div className="pt-6 pb-8 text-base text-white">
            <Link href="/">首页</Link> &gt;&gt;
            <span className="cursor-pointer ml-1" onClick={() => {}}>
              免费资源
            </span>
            &nbsp;&gt;&gt; 详情
          </div>
          <div className="justify-center">
            <div className="">
              <div className="fr-article-header">
                <div className="fr-article-title">{attributes.title}</div>
                <div className="mb-6 text-xl flex gap-2 text-white">
                  <span>{attributes.postDate}</span>
                  <span>|</span>
                  <span>{attributes.postName}</span>
                  <span>|</span>
                  <span>关注公众号</span>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="fr-article-body">
                    <BlocksRenderer
                      content={attributes.content}
                    ></BlocksRenderer>
                  </div>
                  <div className="text-center mt-10  mb-14 flex justify-center">
                    <div
                      onClick={() => {
                        addLikeCount(attributes.likeCount);
                      }}
                      className="flex gap-3 bg-custom-green p-6 rounded-[40px] text-white "
                    >
                      <Image
                        src={like_svg}
                        alt="like"
                        style={{ color: "#fff" }}
                        width={22}
                        height={22}
                      ></Image>
                      <span>点赞{attributes.likeCount}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center py-2 px-3  rounded-[40px] mb-8  ">
                    <div className="bg-custom-green-0.4  py-2 px-3  rounded-[40px]   flex gap-2 justify-center items-center  ">
                      <div className="rounded-[40px] py-2 px-3 bg-custom-green text-white">
                        扫一扫
                      </div>
                      <div className="text-[#1B1B1B]">
                        免费加美国各大高校实名校友群，每天发送美国企业内推岗位以及校友connect！
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={qrDaeImg}
                      alt={"qr_code_img"}
                      className={clsx("w-24 h-24")}
                    />
                  </div>
                  <div className="mt-20 mb-20 flex  gap-5 justify-center">
                    {contentTypes.tagType.enum.map((key) => {
                      return (
                        <div
                          className=" gap-1 flex items-center  bg-[#0000000f] rounded py-1 px-3"
                          key={key}
                        >
                          <Image
                            src={tagSvg}
                            width={16}
                            height={16}
                            alt={TagType[key]}
                          ></Image>
                          {TagType[key]}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <RightRecommendContent
                  filteredFreeResources={articleList}
                  contentTypes={contentTypes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
export default FreeResourceDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await freeResourcesService.getArticleList();
  const paths = data.data.map((item) => ({
    params: { id: item.id + "" },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  try {
    if (params?.id) {
      const data = await freeResourcesService.getArticleList();
      const contentType = await freeResourcesService.getArticleType();
      return {
        props: {
          article: data.data.find((item) => item.id === +params.id) || [],
          articleList: data.data,
          contentTypes: contentType.data.schema.attributes,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        article: [],
        articleList: [],
        contentTypes: [],
      },
    };
  }
};
