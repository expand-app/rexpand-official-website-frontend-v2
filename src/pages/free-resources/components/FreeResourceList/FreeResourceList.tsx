import React, { useEffect, useMemo, useState } from "react";
import styles from "./FreeResourceList.module.css";
import Image, { StaticImageData } from "next/image";
import timeIconImg from "@/assets/icon_time.png";
import clsx from "clsx";
import favorite from "@/assets/free-resources/favorite.svg";
import read from "@/assets/free-resources/read.svg";
import like from "@/assets/free-resources/like.svg";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "next/link";
import useScreen from "@/components/useScreen/useScreen";
import { FreeResourceData, PageInfo } from "../../type";
import { PAGE_SIZE } from "../../constant";
import { NextPage } from "next";
import useFreeResourcesContext from "../../Context";

export interface FreeResourceListProp {}

const FreeResourceList: NextPage<FreeResourceListProp> = () => {
  const { filteredFreeResources: data } = useFreeResourcesContext();
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    page: 1,
    pageSize: PAGE_SIZE,
    pages: 1,
  });
  const { isMobile } = useScreen();
  useEffect(() => {
    setPageInfo({
      ...pageInfo,
      pages: Math.ceil(data.length / pageInfo.pageSize),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const displayedData = useMemo(() => {
    const { page, pageSize } = pageInfo;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex) || [];
  }, [data, pageInfo]);

  return isMobile() ? (
    <MobileView
      data={displayedData}
      pageInfo={pageInfo}
      setPageInfo={setPageInfo}
    />
  ) : (
    <PCView
      data={displayedData}
      pageInfo={pageInfo}
      setPageInfo={setPageInfo}
    />
  );
};

const MobileView = ({ data, pageInfo, setPageInfo }: Props) => {
  return (
    <div className={clsx("flex flex-col flex-1", styles.free_resource_list)}>
      {data?.map((item, index) => {
        const {
          id,
          attributes: {
            title,
            favoriteCount,
            likeCount,
            readCount,
            postDate,
            postName,
            summaryEditor,
            summaryJSONRrich,
            articleCover,
          },
        } = item;
        const image = articleCover?.data.attributes.formats.large.url;

        return (
          <div
            key={id}
            className={clsx(`${index !== data.length - 1 ? "mb-3" : ""}`)}
          >
            {/* <Link href={`/free-resources/${item.id}`}> */}
            <Link href={`/free-resources/${id}`}>
              <div
                className={`rounded relative text-[#1B1B1B]   bg-white py-3 px-3 cursor-pointer  `}
              >
                <div className="flex gap-2">
                  <div className="w-[110px] h-[73px] ">
                    <Image
                      src={image}
                      alt={title}
                      width={110}
                      height={73}
                      className={clsx("w-full ", styles.img)}
                    />
                  </div>
                  <div
                    className={clsx("flex flex-col justify-between  flex-1")}
                  >
                    <div className={clsx(" text-sm ", styles.summary)}>
                      {title}
                    </div>
                  </div>
                </div>
                <div className="flex text-xs justify-between flex-row items-center mt-2 ">
                  <div className="flex justify-between flex-row items-center gap-1">
                    <span className="font-medium">{postName}</span>
                    <span>|</span>
                    <div className="opacity-60">{postDate}</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center ">
                      <Image
                        src={read}
                        width={14}
                        height={14}
                        alt="阅读量"
                      ></Image>
                      {readCount}
                    </div>
                    <div className="flex gap-1 items-center">
                      <Image
                        src={favorite}
                        width={14}
                        height={14}
                        alt="收藏"
                      ></Image>
                      {favoriteCount}
                    </div>
                    <div className="flex gap-1 items-center">
                      <Image
                        src={like}
                        width={14}
                        height={14}
                        alt="点赞"
                      ></Image>
                      {likeCount}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      {pageInfo.pages > 1 && (
        <div className={"flex justify-center my-8"}>
          <Pagination
            count={pageInfo.pages}
            page={pageInfo.page}
            hidePrevButton
            sx={{
              fontSize: 14,
            }}
            color="primary"
            onChange={(_event, page: number) => {
              setPageInfo({
                ...pageInfo,
                page,
              });
            }}
            shape="rounded"
          />
        </div>
      )}
    </div>
  );
};

const PCView = ({ data, pageInfo, setPageInfo }: Props) => {
  return (
    <div className={clsx("flex flex-col flex-1", styles.free_resource_list)}>
      {data?.map((item, index) => {
        const {
          id,
          attributes: {
            title,
            favoriteCount,
            likeCount,
            readCount,
            postDate,
            postName,
            summaryEditor,
            summaryJSONRrich,
            articleCover,
          },
        } = item;
        const image = articleCover?.data.attributes.formats.large.url;

        return (
          <div
            key={id}
            className={clsx(
              styles.card,
              `${index !== data.length - 1 ? "mb-6" : ""}`
            )}
          >
            {/* <Link href={`/free-resources/${item.id}`}> */}
            <Link href={`/free-resources/${id}`}>
              <div
                className={`rounded relative flex   bg-white py-6 px-5 cursor-pointer  `}
              >
                <div className={styles.img_container}>
                  <Image
                    src={image}
                    alt={title}
                    width={275}
                    height={183}
                    className={clsx("w-full", styles.img)}
                  />
                </div>
                <div
                  className={clsx(
                    "flex flex-col justify-between",
                    styles.bottom
                  )}
                >
                  <div>
                    <div className={clsx(" font-m text-xl ", styles.title)}>
                      {title}
                    </div>
                    <div className={clsx("", styles.summary_container)}>
                      <div className={clsx("", styles.summary)}>
                        {summaryEditor}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-row items-center text-sm">
                    <div className="flex justify-between flex-row items-center gap-1">
                      <span className="font-medium">{postName}</span>
                      <span>|</span>
                      <div className="opacity-60">{postDate}</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex gap-1">
                        <Image src={read} alt="阅读量"></Image>
                        {readCount}
                      </div>
                      <div className="flex gap-1">
                        <Image src={favorite} alt="收藏"></Image>
                        {favoriteCount}
                      </div>
                      <div className="flex gap-1">
                        <Image src={like} alt="点赞"></Image>
                        {likeCount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      {pageInfo.pages > 1 && (
        <div className={"flex justify-center mt-12"}>
          <Pagination
            count={pageInfo.pages}
            page={pageInfo.page}
            hidePrevButton
            sx={{
              fontSize: 14,
            }}
            color="primary"
            onChange={(_event, page: number) => {
              setPageInfo({
                ...pageInfo,
                page,
              });
            }}
            shape="rounded"
          />
        </div>
      )}
    </div>
  );
};
export default FreeResourceList;

export interface Props {
  data: Array<FreeResourceData>;
  pageInfo: PageInfo;
  setPageInfo: React.Dispatch<React.SetStateAction<PageInfo>>;
}
