import React, { useMemo, useState } from "react";
import { GetStaticPaths, NextPage } from "next";
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
import { FreeResource, FreeResourceData } from "../type";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRouter } from "next/router";
import RightContent from "./RightContent";
import { Button, Dialog, DialogContent, Popper } from "@mui/material";
import theme from "@/utils/theme";
import dayjs from "dayjs";
import { TIME_FORMAT } from "../constant";
import ArrowLeft from "@/assets/free-resources/arrow_left.svg";
import ArrowRight from "@/assets/free-resources/arrow_right.svg";
import ArrowClose from "@/assets/free-resources/arrow_close.svg";

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
    const tagIds = article.attributes.tags.data.map((item) => item.id);
    if (id) {
      return articleList
        .filter((item) => {
          if (item.id === article.id) {
            return false;
          }
          return item.attributes.tags.data.some((item) =>
            tagIds.includes(item.id)
          );
        })
        .slice(0, 2);
    }
    return [];
  }, [article.attributes.tags.data, article.id, articleList, id]);

  const previousArticle = useMemo(() => {
    if (id) {
      let currentId = +id - 1;
      while (currentId >= 0) {
        const article = articleList.find((item) => item.id === currentId);
        if (article) {
          return article;
        }
        currentId--;
      }
    }
    return null;
  }, [articleList, id]);

  const nextArticle = useMemo(() => {
    if (id) {
      let currentId = +id + 1;
      const maxIdArticle = articleList.reduce(
        (max, current) => {
          return current.id > max.id ? current : max;
        },
        { id: 0 }
      );

      while (currentId <= maxIdArticle.id) {
        const article = articleList.find((item) => item.id === currentId);
        if (article) {
          return article;
        }
        currentId++;
      }
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
  const [open, setOpen] = React.useState(false);
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
              <span>{dayjs(attributes.postDate).format(TIME_FORMAT)}</span>
              <span>|</span>
              <span>{attributes.author}</span>
              <span>|</span>
              <Button
                sx={{
                  fontSize: 14,
                  p: 0,
                  fontWeight: 400,
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                关注公众号
              </Button>
              <Dialog
                open={open}
                onClose={() => {
                  setOpen(false);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{
                  paper: clsx(styles.m_dialog_bg),
                }}
              >
                <div className="flex justify-end mt-4 px-4">
                  <Image
                    alt="close"
                    onClick={() => {
                      setOpen(false);
                    }}
                    src={ArrowClose}
                    width={18}
                    height={18}
                  />
                </div>
                <DialogContent
                  sx={{
                    py: 6,
                    px: 10,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: 14,
                    color: "#333",
                  }}
                >
                  <Image src={qrRexpandImg} alt="微信公众号" />
                  <div className="mt-6">
                    关注
                    <span className="text-custom-green">「睿思班求职」</span>
                    公众号
                  </div>
                  <div className="mt-1">不错过每天北美求职咨询及内推岗位</div>
                </DialogContent>
              </Dialog>
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
          <div className="flex justify-center items-center py-2  bg-white mx-6  rounded-[40px] mb-7  ">
            <div className="py-2 px-3  rounded-[40px]   flex gap-2 justify-center items-center  ">
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
            {attributes?.tags?.data.map((item) => {
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
          <div className="mt-16 rounded ">
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
          <div className="text-[#1B1B1B]">
            {relatedArticles.length > 0 && (
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
                          className="max-h-[117px] rounded"
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
            )}

            {/* 上一篇 下一篇 */}
            <div className="flex   mb-8 mt-6 ">
              {previousArticle && (
                <div className="basis-1/2 py-8 px-3 bg-white rounded  flex flex-col justify-between ">
                  <div className="text-sm  mb-14">
                    {previousArticle.attributes.title}
                  </div>
                  <Link href={`/free-resources/${previousArticle.id}`}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ height: 60, fontWeight: 400, fontSize: 12 }}
                    >
                      <Image
                        src={ArrowLeft}
                        width={13}
                        height={13}
                        alt="上一篇"
                        className="mr-1"
                      />
                      上一篇
                    </Button>
                  </Link>
                </div>
              )}
              {nextArticle && (
                <div className="basis-1/2 py-8 px-3 bg-white rounded flex flex-col justify-between  ">
                  <div className="text-sm  mb-14">
                    {nextArticle.attributes.title}
                  </div>
                  <Link href={`/free-resources/${nextArticle.id}`}>
                    <Button
                      sx={{ height: 60, fontWeight: 400, fontSize: 12 }}
                      fullWidth
                      variant="contained"
                    >
                      下一篇
                      <Image
                        src={ArrowRight}
                        width={13}
                        height={13}
                        alt="下一篇"
                        className="ml-1"
                      />
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
          <div>
            <div className="pt-6 text-base text-white">
              <Link href="/">首页</Link> &gt;&gt;&nbsp;
              <Link href={"/free-resources"}>免费资源</Link>
            </div>

            <div className="text-[40px] text-white mt-8 mb-4">
              {attributes.title}
            </div>
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
              <div className="flex-1  pt-8 pb-11 px-6  bg-white rounded">
                <div className="fr-article-body">
                  <BlocksRenderer content={attributes.content}></BlocksRenderer>
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
                  {attributes.tags.data.map((item) => {
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
      <div className="container mx-auto  mt-[90px]  w-2/3">
        {relatedArticles.length > 0 && (
          <div className="">
            <div className=" text-[40px] font-semibold"> 相关阅读</div>
            <div className="mt-10 py-6 px-11 rounded bg-white space-y-4">
              {relatedArticles.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="py-8 flex justify-between gap-24"
                  >
                    <div className="flex-1">
                      <div className="text-xl font-medium mb-2">
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
        )}

        {/* 上一篇 下一篇 */}
        <div className="flex  gap-6 mb-[70px] mt-6">
          {previousArticle && (
            <div className="basis-1/2 py-8 px-6 bg-white rounded   flex flex-col justify-between">
              <div className="text-xl font-medium mb-16 ">
                {previousArticle.attributes.title}
              </div>
              <Link href={`/free-resources/${previousArticle.id}`}>
                <Button fullWidth variant="contained" sx={{ height: 60 }}>
                  <Image
                    src={ArrowLeft}
                    width={16}
                    height={16}
                    alt="上一篇"
                    className="mr-2"
                  />
                  上一篇
                </Button>
              </Link>
            </div>
          )}
          {nextArticle && (
            <div className="basis-1/2 py-8 px-6 bg-white rounded flex flex-col justify-between ">
              <div className="text-xl font-medium mb-16">
                {nextArticle.attributes.title}
              </div>
              <Link href={`/free-resources/${nextArticle.id}`}>
                <Button sx={{ height: 60 }} fullWidth variant="contained">
                  下一篇
                  <Image
                    src={ArrowRight}
                    width={16}
                    height={16}
                    alt="下一篇"
                    className="ml-2"
                  />
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
