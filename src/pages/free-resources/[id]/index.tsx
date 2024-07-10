import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import qrDaeImg from "@/assets/qr_dae.png";
import freeResourcesService, { TagList } from "@/services/FreeResources";
import Image from "next/image";
import tagSvg from "@/assets/free-resources/tag.svg";
import qrRexpandImg from "@/assets/qr_rexpand.png";
import like_svg from "@/assets/free-resources/link_white.svg";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import { ContentTypes, FreeResource, FreeResourceData, TagType } from "../type";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRouter } from "next/router";
import RightContent from "./RightContent";
import { Button, Popover, Popper } from "@mui/material";
import theme from "@/utils/theme";
import dayjs from "dayjs";
import { TIME_FORMAT } from "../constant";
import _ from "lodash";
import { STRAPI_PRIVATE_PROP } from "@/constant";

interface Props {
  article: FreeResource;
  articleList: FreeResourceData;
  tagList: TagList;
}

interface FreeResourceDetailViewPage extends Props {
  addLikeCount: (val: number) => void;
  relatedArticles: FreeResourceData;
  previousArticle: FreeResource | null;
  nextArticle: FreeResource | null;
}

export const FreeResourceDetailPage: NextPage<Props> = ({
  ...props
}: Props) => {
  const { isMobile } = useScreen();
  const { articleList } = props;
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<FreeResource>(props.article);

  const addLikeCount = async (val: number) => {
    const data = await freeResourcesService.setArticle({
      id,
      likeCount: val + 1,
    });
    setArticle(data.data);
  };

  const relatedArticles = useMemo(() => {
    if (id) {
      return articleList
        .filter((item) => {
          if (item.id === article.id) {
            return false;
          }
          return item.attributes.tags.data.some((item) => item.id === +id);
        })
        .slice(0, 2);
    }
    return [];
  }, [article.id, articleList, id]);

  const previousArticle = useMemo(() => {
    if (id) {
      return articleList.find((item) => item.id === +id - 1) || null;
    }
    return null;
  }, [articleList, id]);

  const nextArticle = useMemo(() => {
    if (id) {
      return articleList.find((item) => item.id === +id + 1) || null;
    }
    return null;
  }, [articleList, id]);

  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? (
          <MobileView
            {...props}
            article={article}
            addLikeCount={addLikeCount}
            relatedArticles={relatedArticles}
            previousArticle={previousArticle}
            nextArticle={nextArticle}
          />
        ) : (
          <PCView
            {...props}
            article={article}
            relatedArticles={relatedArticles}
            addLikeCount={addLikeCount}
            previousArticle={previousArticle}
            nextArticle={nextArticle}
          />
        )}
      </div>
    </>
  );
};

function MobileView({
  article,
  addLikeCount,
  previousArticle,
  nextArticle,
  relatedArticles,
}: FreeResourceDetailViewPage) {
  const { attributes } = article;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  return (
    <main className={clsx(" m-main", styles.m_main)}>
      <Header theme={Theme.LIGHT} />
      <div className="m-section">
        <div className={clsx(styles.page, "px-3")}>
          <div className="pt-6 pb-8 text-base text-white">
            <Link href="/">Rexpand</Link> &gt;&gt;
            <Link href={"/free-resources"}>免费资源</Link>
          </div>

          <div className="">
            <div className="text-2xl font-bold text-white mb-4">
              {attributes.title}
            </div>
            <div className="mb-6 text-sm flex gap-2 text-white items-center">
              <span>{attributes.postDate}</span>
              <span>|</span>
              <span>{attributes.author}</span>
              <span>|</span>
              <Button
                sx={{
                  fontSize: 20,
                  p: 0,
                  fontWeight: 400,
                }}
                onClick={(event) => {
                  setAnchorEl(anchorEl ? null : event.currentTarget);
                }}
              >
                关注公众号
              </Button>
              <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement={"right-start"}
              >
                <Image src={qrRexpandImg} alt="微信公众号" />
              </Popper>
            </div>

            <div className="flex gap-6 flex-col bg-white rounded  py-6 px-3">
              <div className="flex-1 text-sm">
                <BlocksRenderer content={attributes.content}></BlocksRenderer>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="text-center mt-10  mb-14 flex justify-center">
            <Button
              variant="contained"
              onClick={() => {
                addLikeCount(attributes.likeCount);
              }}
              sx={{
                fontSize: 12,
                borderRadius: 2,
                py: 3,
                px: 4,
              }}
            >
              <Image
                src={like_svg}
                alt="like"
                style={{ color: "#fff" }}
                width={22}
                height={22}
              ></Image>
              <span>点赞{attributes.likeCount}</span>
            </Button>
          </div>
          <div className="flex justify-center items-center py-2  mx-6  rounded-[40px] mb-6  ">
            <div className="bg-custom-green-0.4  py-2 px-3  rounded-[40px]   flex gap-2 justify-center items-center  ">
              <div className="rounded-[80px] py-2 px-3 bg-custom-green text-white whitespace-nowrap">
                扫一扫
              </div>
              <div className="text-[#1B1B1B] text-xs">
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
          <div className="mt-5  flex  gap-5 justify-center">
            {attributes?.tags?.data.map((item, index) => {
              return (
                <div
                  className=" gap-1 flex items-center  bg-[#0000000f] rounded py-1 px-3"
                  key={item.id}
                >
                  <Image
                    src={tagSvg}
                    width={16}
                    height={16}
                    alt={item.attributes.title}
                  ></Image>
                  {item.attributes.title}
                </div>
              );
            })}
          </div>
          <div className="mt-16 ">
            <Image
              className="rounded-md overflow-hidden"
              alt="bg"
              width={500}
              height={500}
              layout="responsive"
              src={
                "https://rexpand-cms-strapi.s3.us-east-1.amazonaws.com/Group_427318709_3d9757ca53.svg"
              }
            ></Image>
          </div>
          <div className="text-[#1B1B1B]">
            <div className="mt-8 mb-3">
              <div className=" text-lg font-semibold"> 相关阅读</div>
              <div className="mt-3  rounded bg-white space-y-4">
                {relatedArticles.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="p-4 flex justify-between gap-2"
                    >
                      <Image
                        alt={item.attributes.title}
                        width={176}
                        height={117}
                        className="max-h-[117px]"
                        src={
                          item.attributes.cover.data.attributes.formats.large
                            .url
                        }
                      />
                      <div className="flex-1">
                        <div className="text-sm line-clamp-2  mb-2">
                          {item.attributes.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 上一篇 下一篇 */}
            <div className="flex  gap-6 mb-8 mt-6">
              {previousArticle && (
                <div className="basis-1/2 py-8 px-3 bg-white rounded ">
                  <div className="text-sm ">
                    {previousArticle.attributes.title}
                  </div>
                  <Link href={`/free-resources/${previousArticle.id}`}>
                    <Button
                      fullWidth
                      variant="contained"
                      className="mt-16"
                      sx={{ height: 60 }}
                    >
                      上一篇
                    </Button>
                  </Link>
                </div>
              )}
              {nextArticle && (
                <div className="basis-1/2 py-8 px-3 bg-white rounded ">
                  <div className="text-sm ">{nextArticle.attributes.title}</div>
                  <Link href={`/free-resources/${nextArticle.id}`}>
                    <Button
                      sx={{ height: 60 }}
                      fullWidth
                      variant="contained"
                      className="mt-16"
                    >
                      下一篇
                    </Button>
                  </Link>
                </div>
              )}
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
  addLikeCount,
  articleList,
  tagList,
  relatedArticles,
  previousArticle,
  nextArticle,
}: FreeResourceDetailViewPage) {
  const { attributes } = article;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  return (
    <main className={clsx(styles.main)}>
      <Header theme={Theme.LIGHT} />
      <div className={clsx(styles.page)}>
        <div className={clsx(" container mx-auto   w-2/3 rounded relative")}>
          <div className={clsx("")}>
            <div className="pt-6 text-base text-white">
              <Link href="/">首页</Link> &gt;&gt;
              <Link href={"/free-resources"}>免费资源</Link>
            </div>

            <div className="fr-article-header">
              <div className="fr-article-title">{attributes.title}</div>
              <div className="mb-6 text-xl flex gap-3 text-white items-center">
                <span>{dayjs(attributes.postDate).format(TIME_FORMAT)}</span>
                <span>|</span>
                <span>{attributes.author}</span>
                <span>|</span>
                <Button
                  sx={{
                    fontSize: 20,
                    p: 0,
                    fontWeight: 400,
                  }}
                  onClick={(event) => {
                    setAnchorEl(anchorEl ? null : event.currentTarget);
                  }}
                >
                  关注公众号
                </Button>
                <Popper
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  placement={"right-start"}
                >
                  <Image src={qrRexpandImg} alt="微信公众号" />
                </Popper>
              </div>

              <div className="flex gap-6">
                <div className="flex-1  pt-8 pb-10 px-6  rounded">
                  <div className="fr-article-body">
                    <BlocksRenderer
                      content={attributes.content}
                    ></BlocksRenderer>
                  </div>
                  <div className="text-center mt-20  mb-14 flex justify-center">
                    <Button
                      onClick={() => {
                        addLikeCount(attributes.likeCount);
                      }}
                      variant="contained"
                      sx={{
                        borderRadius: 10,
                        padding: theme.spacing(6, 5),
                      }}
                      className="flex gap-3 bg-custom-green  text-white "
                    >
                      <Image
                        src={like_svg}
                        alt="like"
                        style={{ color: "#fff" }}
                        width={22}
                        height={22}
                      ></Image>
                      <span>点赞{attributes.likeCount}</span>
                    </Button>
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
                  <div className="mt-24 mb-20 flex  gap-5 justify-center">
                    {attributes.tags.data.map((item, index) => {
                      return (
                        <div
                          className=" gap-1 flex items-center  bg-[#0000000f] rounded py-1 px-3"
                          key={item.id}
                        >
                          <Image
                            src={tagSvg}
                            width={16}
                            height={16}
                            alt={item.attributes.title}
                          ></Image>
                          {item.attributes.title}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-24">
                    <Image
                      alt="bg"
                      width={500}
                      height={500}
                      layout="responsive"
                      src={
                        "https://rexpand-cms-strapi.s3.us-east-1.amazonaws.com/Group_427318709_3d9757ca53.svg"
                      }
                    ></Image>
                  </div>
                </div>

                <RightContent
                  filteredFreeResources={articleList}
                  tagList={tagList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  mt-[90px]  w-2/3">
        <div className="">
          <div className=" text-5xl font-semibold"> 相关阅读</div>
          <div className="mt-10 py-6 px-11 rounded bg-white space-y-4">
            {relatedArticles.map((item) => {
              return (
                <div key={item.id} className="py-8 flex justify-between gap-24">
                  <div className="flex-1">
                    <div className="text-xl font-semibold mb-2">
                      {item.attributes.title}
                    </div>
                    <div className="line-clamp-2">
                      {item.attributes.summary}
                    </div>
                  </div>
                  <Image
                    alt={item.attributes.title}
                    width={176}
                    height={117}
                    src={
                      item.attributes.cover.data.attributes.formats.large.url
                    }
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
        {/* 上一篇 下一篇 */}
        <div className="flex  gap-6 mb-[70px] mt-6">
          {previousArticle && (
            <div className="basis-1/2 py-8 px-6 bg-white rounded ">
              <div className="text-xl font-semibold">
                {previousArticle.attributes.title}
              </div>
              <Link href={`/free-resources/${previousArticle.id}`}>
                <Button
                  fullWidth
                  variant="contained"
                  className="mt-16"
                  sx={{ height: 60 }}
                >
                  上一篇
                </Button>
              </Link>
            </div>
          )}
          {nextArticle && (
            <div className="basis-1/2 py-8 px-6 bg-white rounded ">
              <div className="text-xl font-semibold">
                {nextArticle.attributes.title}
              </div>
              <Link href={`/free-resources/${nextArticle.id}`}>
                <Button
                  sx={{ height: 60 }}
                  fullWidth
                  variant="contained"
                  className="mt-16"
                >
                  下一篇
                </Button>
              </Link>
            </div>
          )}
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
      const tagData = await freeResourcesService.getArticleTag();

      return {
        props: {
          article: data.data.find((item) => item.id === +params.id) || [],
          articleList: data.data,
          tagList: tagData.data,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        article: [],
        articleList: [],
        contentTypes: {},
        articleTagType: {},
      },
    };
  }
};
