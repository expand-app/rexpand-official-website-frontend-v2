import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Header, { Theme } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import qrDaeImg from "@/assets/qr_dae.png";
import freeResourcesService from "@/services/FreeResources";
import Image from "next/image";
import tagSvg from "@/assets/free-resources/tag.svg";
import qrRexpandImg from "@/assets/qr_rexpand.png";
import like_svg from "@/assets/free-resources/link_white.svg";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import { ContentTypes, FreeResourceData, TagType } from "../type";
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
  article: FreeResourceData;
  articleList: Array<FreeResourceData>;
  contentTypes: ContentTypes;
  articleTagType: any;
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

  const addLikeCount = async (val: number) => {
    const data = await freeResourcesService.setArticle({
      id,
      likeCount: val + 1,
    });
    setArticle(data.data);
  };

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
  articleTagType,
}: FreeResourceDetailViewPage) {
  const { attributes } = article;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  return (
    <main className={clsx("bg-white m-main", styles.m_main)}>
      <Header theme={Theme.LIGHT} />
      <div className="m-section">
        <div className={clsx(styles.page)}>
          <div className={clsx("container mx-auto  w-2/3")}>
            <div className="pt-6 pb-8 text-base text-white">
              <Link href="/">首页</Link> &gt;&gt;
              <Link href={"/free-resources"}>免费资源</Link>
              &nbsp;&gt;&gt; 详情
            </div>
            <div className="justify-center">
              <div className="">
                <div className="fr-article-title">{attributes.title}</div>
                <div className="mb-6 text-xl flex gap-2 text-white items-center">
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

                <div className="flex gap-6">
                  <div className="flex-1">
                    <div className="fr-article-body">
                      <BlocksRenderer
                        content={attributes.content}
                      ></BlocksRenderer>
                    </div>
                    <div className="text-center mt-10  mb-14 flex justify-center">
                      <Button
                        onClick={() => {
                          addLikeCount(attributes.likeCount);
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
                      {Object.keys(articleTagType).map((key, index) => {
                        return (
                          <div
                            className=" gap-1 flex items-center  bg-[#0000000f] rounded py-1 px-3"
                            key={key}
                          >
                            <Image
                              src={tagSvg}
                              width={16}
                              height={16}
                              alt={articleTagType[key]}
                            ></Image>
                            {articleTagType[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-24">
                      <Image
                        alt="bg"
                        src={
                          "https://rexpand-cms-strapi.s3.us-east-1.amazonaws.com/thumbnail_Group_427318709_f9d02f34ab.png?updatedAt=2024-07-04T08%3A57%3A12.406Z"
                        }
                      ></Image>
                    </div>
                  </div>
                  {Object.keys(contentTypes).length > 0 &&
                    articleList.length > 0 && (
                      <RightContent
                        filteredFreeResources={articleList}
                        contentTypes={contentTypes}
                      />
                    )}
                </div>
              </div>
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
  articleTagType,
}: FreeResourceDetailViewPage) {
  const { attributes } = article;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  return (
    <main className={clsx("bg-white", styles.main)}>
      <Header theme={Theme.LIGHT} />
      <div className={clsx(styles.page, "bg-white rounded relative")}>
        {/* <div className={clsx("absolute top-0 ",styles.absolute)}> </div> */}
        <div className={clsx("container mx-auto  w-2/3")}>
          <div className="pt-6 text-base text-white">
            <Link href="/">首页</Link> &gt;&gt;
            <Link href={"/free-resources"}>免费资源</Link>
            &nbsp;&gt;&gt; 详情
          </div>
          <div className="justify-center">
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
                    {Object.keys(articleTagType).map((key, index) => {
                      return (
                        <div
                          className=" gap-1 flex items-center  bg-[#0000000f] rounded py-1 px-3"
                          key={key}
                        >
                          <Image
                            src={tagSvg}
                            width={16}
                            height={16}
                            alt={articleTagType[key]}
                          ></Image>
                          {articleTagType[key]}
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
                {Object.keys(contentTypes).length > 0 &&
                  articleList.length > 0 && (
                    <RightContent
                      filteredFreeResources={articleList}
                      contentTypes={contentTypes}
                    />
                  )}
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
      const articleTagTypeData = await freeResourcesService.getArticleTag();
      const articleTagType = _.omit(
        articleTagTypeData.data.attributes,
        STRAPI_PRIVATE_PROP
      );
      return {
        props: {
          article: data.data.find((item) => item.id === +params.id) || [],
          articleList: data.data,
          contentTypes: contentType.data.schema.attributes,
          articleTagType,
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
