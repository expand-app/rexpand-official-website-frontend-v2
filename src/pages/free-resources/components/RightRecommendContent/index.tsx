import clsx from "clsx";
import styles from "./index.module.css";
import Image from "next/image";
import qrDaeImg from "@/assets/qr_dae.png";
import tagSvg from "@/assets/free-resources/tag.svg";
import {
  ContentTypes,
  FreeResourceData,
  RightArticleType,
  TagType,
  TitleShowType,
} from "../../type";
import useFreeResourcesContext from "../../Context";
import useScreen from "@/components/useScreen/useScreen";
import freeResourcesService, {
  CategoryDescriptionData,
  TagList,
} from "@/services/FreeResources";
import Link from "next/link";
import _ from "lodash";
import { STRAPI_PRIVATE_PROP } from "@/constant";
import { GetStaticProps, NextPage } from "next";
import { useMemo, useState } from "react";
interface RightRecommendContentProps {
  articleList: FreeResourceData;
  tagList: TagList;
}
interface RightRecommendContentViewProps extends RightRecommendContentProps {
  data: FreeResourceData;
  articleType: keyof typeof RightArticleType;
  setArticleType: React.Dispatch<
    React.SetStateAction<keyof typeof RightArticleType>
  >;
}

const PCView: React.FC<RightRecommendContentViewProps> = ({
  tagList,
  articleType,
  setArticleType,
  data,
}) => {
  return (
    <div className="min-w-80  w-80">
      <div className={clsx("py-8 px-5", styles.rightContent)}>
        <div className=" rounded-sm bg-custom-green-0.2">
          <div className="text-xl text-center ">
            <div className="font-semibold ">
              扫描二维码或者
              <Link
                className="text-custom-green "
                href="https://work.weixin.qq.com/ca/cawcde49bb005d5c7d"
                target="_blank"
              >
                点击这里
              </Link>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Image
              src={qrDaeImg}
              alt={"qr_code_img"}
              className={clsx("w-24 h-24")}
            />
          </div>
          <div className="mt-3 text-center">上千名校友内推群等你来</div>
        </div>
      </div>
      <div className="mt-6 py-8 px-5 bg-white">
        <div className="flex justify-between text-base ">
          {Object.keys(RightArticleType).map((key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  setArticleType(key as keyof typeof RightArticleType);
                }}
                className={clsx(
                  `cursor-pointer transition-all duration-300 ${
                    key === articleType ? "text-xl  font-semibold" : ""
                  }`
                )}
              >
                {RightArticleType[key as keyof typeof RightArticleType]}
              </div>
            );
          })}
        </div>

        <ul className="mt-8">
          {data.map((item) => {
            return (
              <Link href={`/free-resources/${item.id}`} key={item.id}>
                <li key={item.id} className="flex  mt-6 ">
                  <div>
                    <i className=" inline-block  mt-2 w-1.5 h-1.5 rounded-sm bg-custom-green mr-4 " />
                  </div>
                  <div className="line-clamp-2">{item.attributes.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="mt-6 py-8 px-5 bg-white ">
        <div className="text-xl font-medium "> 热门标签</div>
        <div className=" mt-6 flex  flex-wrap gap-4">
          {tagList.map((item) => {
            return (
              <Link href={`/free-resources/tag/${item.id}`} key={item.id}>
                <div
                  className={`transition-all  flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
                >
                  <Image src={tagSvg} alt={item.attributes.title}></Image>
                  <span>{item.attributes.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MobileView: React.FC<RightRecommendContentViewProps> = ({
  tagList,
  articleType,
  setArticleType,
  data,
}) => {
  return (
    <div className="">
      <div
        className={clsx(
          "py-4 px-3 rounded overflow-hidden bg-custom-green-0.2",
          styles.rightContent
        )}
      >
        <div className="text-xl  ">
          <div className="font-semibold ">
            扫描二维码或者
            <Link
              className="text-custom-green "
              href="https://work.weixin.qq.com/ca/cawcde49bb005d5c7d"
              target="_blank"
            >
              点击这里
            </Link>
          </div>
        </div>
        <div className="mt-6 flex gap-10 items-center ">
          <Image
            src={qrDaeImg}
            alt={"qr_code_img"}
            className={clsx("w-24 h-24")}
          />
          <div className="text-sm text-[#00000099]">
            上千名校友内推群
            <div>等你来!</div>
          </div>
        </div>
      </div>

      <div className="mt-6 py-4 px-3 bg-white">
        <div className="flex justify-between text-base ">
          {Object.keys(RightArticleType).map((key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  setArticleType(key as keyof typeof RightArticleType);
                }}
                className={clsx(
                  `cursor-pointer transition-all duration-300 ${
                    key === articleType ? "text-xl  font-semibold" : ""
                  }`
                )}
              >
                {RightArticleType[key as keyof typeof RightArticleType]}
              </div>
            );
          })}
        </div>
        <ul className="mt-8">
          {data.map((item) => {
            return (
              <Link href={`/free-resources/${item.id}`} key={item.id}>
                <li key={item.id} className="flex  mt-6 ">
                  <div>
                    <i className=" inline-block  mt-2 w-1.5 h-1.5 rounded-sm bg-custom-green mr-4 " />
                  </div>
                  <div className="line-clamp-2">{item.attributes.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="mt-6 py-4 px-3 bg-white mb-6 ">
        <div className="text-xl font-medium "> 热门标签</div>
        <div className=" mt-6 flex  flex-wrap gap-4">
          {tagList.map((item) => {
            return (
              <Link href={`/free-resources/tag/${item.id}`} key={item.id}>
                <div
                  className={`transition-all  flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
                >
                  <Image src={tagSvg} alt={item.attributes.title}></Image>
                  <span>{item.attributes.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RightRecommendContent: NextPage<RightRecommendContentProps> = (props) => {
  const { isMobile } = useScreen();
  const { articleList } = props;
  const [articleType, setArticleType] =
    useState<keyof typeof RightArticleType>("hot");
  const filteredFreeResourcesByArticleType = useMemo(() => {
    if (articleType === "hot") {
      return articleList?.filter((item) => item?.attributes.isPopular);
    } else if (articleType === "recommend") {
      return articleList?.filter((item) => item?.attributes.isRecommended);
    } else if (articleType === "random") {
      return articleList?.filter((item) => item?.attributes.isRandom);
    }
    return [];
  }, [articleList, articleType]);

  return isMobile() ? (
    <MobileView
      {...props}
      data={filteredFreeResourcesByArticleType}
      articleType={articleType}
      setArticleType={setArticleType}
    />
  ) : (
    <PCView
      {...props}
      data={filteredFreeResourcesByArticleType}
      articleType={articleType}
      setArticleType={setArticleType}
    />
  );
};

export default RightRecommendContent;
