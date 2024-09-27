import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./TopOfferList.module.css";
import clsx from "clsx";
import Avatar from "@/components/Avatar/Avatar";
import Pagination from "@mui/material/Pagination";
import useScreen from "@/components/useScreen/useScreen";
import { PageInfo, StudentData, StudentDataAPIData } from "../../type";
import { ImageInfo } from "../..";

const topBorderStyles = [
  styles.tborder_deloitte,
  styles.tborder_bain,
  styles.tborder_goldmansachs,
  styles.tborder_spotify,
  styles.tborder_oracle,
  styles.tborder_pwc,
];

const TopOfferList = (props: Props) => {
  const { data } = props;
  const { isMobile } = useScreen();
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    page: 1,
    pageSize: 6,
    pages: 1,
  });
  useEffect(() => {
    setPageInfo({
      ...pageInfo,
      pages: Math.ceil(data.length / pageInfo.pageSize),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div>
      {isMobile?.() ? (
        <MobileView {...props} />
      ) : (
        <PCView {...props} pageInfo={pageInfo} setPageInfo={setPageInfo} />
      )}
    </div>
  );
};

const MobileView = ({ data, onStudentOfferClick }: ViewProps) => {
  return (
    <div className={clsx("overflow-auto", styles.m_top_offer_list)}>
      <div className={styles.m_top_offer_card_scroll_box}>
        <div className={styles.m_top_offer_card_box}>
          {data?.map((item, index) => {
            const { attributes } = item;
            const {
              companyLogo,
              companyName,
              jobTitle,
              name,
              university,
              major,
              offerImage,
            } = attributes;
            return (
              <div
                key={item.id}
                className={clsx(
                  styles.m_top_offer_item
                  //   topBorderStyles[index]
                )}
                onClick={() => {
                  onStudentOfferClick({
                    url: offerImage.data?.attributes.url || "",
                    width: offerImage.data?.attributes.width,
                    height: offerImage.data?.attributes.height,
                  });
                }}
              >
                <div
                  className={clsx(
                    "px-0 flex flex-col items-center justify-center",
                    styles.m_top
                  )}
                >
                  <div className={styles.m_logo_container}>
                    <Image
                      src={companyLogo.data?.attributes.url || ""}
                      alt={companyName}
                      width={100}
                    />
                  </div>
                  <div className={styles.m_company_name}>{companyName}</div>
                  <div className={styles.m_job_title}>{jobTitle}</div>
                </div>

                <div className={clsx("flex-1 relative", styles.m_bottom)}>
                  <Avatar className={styles.avatar} data={{ userName: name }} />

                  <div>
                    <div className={styles.m_university}>
                      {university || "xxx大学"}
                    </div>
                    <div className={styles.m_major}>{major}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PCView = ({
  data,
  pageInfo,
  setPageInfo,
  onStudentOfferClick,
}: PCViewProps) => {
  const displayedData = useMemo(() => {
    const { page, pageSize } = pageInfo;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data?.slice(startIndex, endIndex) || [];
  }, [data, pageInfo]);

  return (
    <div className={clsx("overflow-auto", styles.top_offer_list)}>
      <div className="flex flex-col md:flex-row gap-4">
        {displayedData?.map((item, index) => {
          const { attributes } = item;
          const {
            companyLogo,
            companyName,
            jobTitle,
            name,
            university,
            major,
            offerImage,
          } = attributes;
          return (
            <div
              key={item.id}
              className={clsx(
                "relative w-1/6 bg-white flex flex-col",
                styles.top_offer_item
                // topBorderStyles[index]
              )}
              onClick={() => {
                onStudentOfferClick({
                  url: offerImage.data?.attributes.url || "",
                  width: offerImage.data?.attributes.width,
                  height: offerImage.data?.attributes.height,
                });
              }}
            >
              <div
                className={clsx(
                  "px-0 flex flex-col items-center justify-center",
                  styles.top
                )}
              >
                <div className={styles.logo_container}>
                  <Image
                    src={companyLogo.data?.attributes.url || ""}
                    alt={companyName}
                    width={100}
                  />
                </div>
                <div className={styles.company_name}>{companyName}</div>
                <div className={styles.job_title}>{jobTitle}</div>
              </div>

              <div
                className={clsx("w-full flex-1 relative px-2", styles.bottom)}
              >
                <Avatar className={styles.avatar} data={{ userName: name }} />

                <div>
                  <div className={styles.university}>
                    {university || "xxxx大学"}
                  </div>
                  <div className={styles.major}>{major}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {
        <div className={"flex justify-center my-7"}>
          <Pagination
            count={pageInfo.pages}
            page={pageInfo.page}
            hidePrevButton
            hideNextButton
            sx={{
              fontSize: 14,
              " .MuiPaginationItem-root": {
                bgcolor: "rgba(0, 138, 39, 0.2)",
                color: "#fff",
              },
              " .MuiPaginationItem-root.Mui-selected": {
                bgcolor: "#008A27",
              },
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
      }
    </div>
  );
};

export default TopOfferList;

export interface Props {
  data: StudentDataAPIData;
  onStudentOfferClick: (image: ImageInfo) => void;
}

export interface ViewProps extends Props {}
export interface PCViewProps extends ViewProps {
  setPageInfo: React.Dispatch<React.SetStateAction<PageInfo>>;
  pageInfo: PageInfo;
}

export interface TopOfferData {
  id: number;
  companyName: string; // 公司名称
  companyLogo: StaticImageData; // 公司LOGO
  jobTitle: string; // 职位
  userName: string; // 用户名
  university: string; // 学校
  major: string; // 专业
}
