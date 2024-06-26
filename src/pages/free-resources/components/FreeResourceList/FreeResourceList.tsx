import React from "react";
import styles from "./FreeResourceList.module.css";
import Image, { StaticImageData } from "next/image";
import timeIconImg from "@/assets/icon_time.png";
import clsx from "clsx";
import Link from "next/link";
import useScreen from "@/components/useScreen/useScreen";

const FreeResourceList = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <div>
      {isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}
    </div>
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

const PCView = ({ data }: Props) => {
  return (
    <div className={clsx("flex flex-wrap", styles.free_resource_list)}>
      {data?.map((item, index) => {
        return (
          <div
            key={item.id}
            className={clsx(
              styles.card,
              `${index !== data.length - 1 ? "mb-6" : ""}`
            )}
          >
            {/* <Link href={`/free-resources/${item.id}`}> */}
            <Link href={`/free-resources/${item.id}`}>
              <div
                className={`rounded relative flex   bg-white py-6 px-5 cursor-pointer  `}
              >
                <div className={styles.img_container}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={clsx(styles.img)}
                  />
                </div>
                <div
                  className={clsx(
                    "flex flex-col justify-between",
                    styles.bottom
                  )}
                >
                  <div>
                    <div className={clsx(" font-m ", styles.title)}>
                      {item.title}
                    </div>
                    <div className={clsx("", styles.summary_container)}>
                      <div className={clsx("", styles.summary)}>
                        {item.summary}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <Image src={timeIconImg} alt="发布时间" />
                    <div className="opacity-60">
                      发布时间：{item.publishDate}
                    </div>
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
export default FreeResourceList;

export interface Props {
  data: FreeResourceData[];
}

export interface FreeResourceData {
  id: number;
  image: StaticImageData;
  title: string;
  summary: string;
  publishDate: string;

  lastUpdateDate?: string;
  content?: string[];
  tags?: string[];
}
