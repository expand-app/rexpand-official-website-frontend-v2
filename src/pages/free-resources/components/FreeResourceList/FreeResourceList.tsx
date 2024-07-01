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

export interface FreeResourceListProp {
  data: Array<FreeResourceData>;
}

const FreeResourceList: NextPage<FreeResourceListProp> = ({ ...props }) => {
  const { data } = props;
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

  return (
    <PCView
      data={displayedData}
      pageInfo={pageInfo}
      setPageInfo={setPageInfo}
    />
  );
};

const MobileView = ({ data }: Props) => {
  return (
    <div className={clsx("flex flex-wrap", styles.m_free_resource_list)}>
      {data?.map((item) => {
        return (
          <div key={item.id} className={clsx("", styles.m_card)}>
            {/* <Link href={`/free-resources/${item.id}`}> */}
            <Link href={`/free-resources/${item.id}`}>
              <div className={styles.img_container}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={clsx("w-full", styles.img)}
                />
              </div>
              <div className={styles.m_bottom}>
                <div className={clsx(styles.m_title)}>{item.title}</div>
                <div className={clsx("", styles.m_summary_container)}>
                  <div className={clsx("opacity-60", styles.m_summary)}>
                    {item.summary}
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <Image
                    src={timeIconImg}
                    alt="发布时间"
                    className={styles.m_publish_time_icon}
                  />
                  <div className={styles.m_publish_time}>
                    发布时间：{item.lastUpdateDate}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
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
