import clsx from "clsx";
import styles from "../../index.module.css";
import Image from "next/image";
import qrDaeImg from "@/assets/qr_dae.png";
import freeResourcesService from "@/services/FreeResources";
import tagSvg from "@/assets/free-resources/tag.svg";
import new_live from "@/assets/free-resources/new_live.svg";
import {
  ContentTypes,
  FreeResourceData,
  RightArticleType,
  TagType,
  TitleShowType,
} from "../type";
import useScreen from "@/components/useScreen/useScreen";
import { useMemo } from "react";
import Link from "next/link";
interface RightRecommendContentProps {
  filteredFreeResources: FreeResourceData[];
  contentTypes: ContentTypes;
}

interface RightRecommendContentViewProps {
  filteredFreeResourcesOfHot: FreeResourceData[];
  filteredFreeResourcesOfRecommend: FreeResourceData[];
  contentTypes: ContentTypes;
}

const PCView: React.FC<RightRecommendContentViewProps> = ({
  filteredFreeResourcesOfRecommend,
  filteredFreeResourcesOfHot,
  contentTypes,
}) => {
  return (
    <div className="min-w-80  w-80 py-8 px-5">
      <div className={clsx("")}>
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
          <div
            className={clsx(
              `cursor-pointer transition-all duration-300 text-xl  font-semibold `
            )}
          >
            {RightArticleType.hot}
          </div>
        </div>

        <ul className="mt-8">
          {filteredFreeResourcesOfHot.map((item) => {
            return (
              <li key={item.id} className="flex  mt-6 ">
                <div>
                  <i className=" inline-block  mt-2 w-1.5 h-1.5 rounded-sm bg-custom-green mr-4 " />
                </div>
                <div className="line-clamp-2">{item.attributes.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-8  mb-6">
        <div className=" flex gap-2">
          <Image src={new_live} alt="最新直播" width={26} height={26}></Image>
          最新直播
        </div>
        <div className="mt-2">
          <Image
            src={
              "https://rexpand-cms-strapi.s3.us-east-1.amazonaws.com/thumbnail_Rectangle_18936_600ff33efe.png"
            }
            alt="最新直播"
            width={267}
            height={132}
          ></Image>
        </div>
      </div>
      <div className="mt-6 py-8 px-5 bg-white ">
        <div className="text-xl font-medium "> 热门标签</div>
        <div className=" mt-6 flex  flex-wrap gap-4">
          {contentTypes.tagType.enum.map((key) => {
            return (
              <div
                key={key}
                // onClick={() => {
                //   handleTitleTypeClick(TitleShowType.tag);
                //   setTagType(key);
                // }}
                className={`flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
              >
                <Image src={tagSvg} alt={TagType[key]}></Image>
                <span>{TagType[key]}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 py-8 px-5 bg-white">
        <div className="flex justify-between text-base ">
          <div
            className={clsx(
              `cursor-pointer transition-all duration-300 text-xl  font-semibold `
            )}
          >
            {RightArticleType.recommend}
          </div>
        </div>

        <ul className="mt-8">
          {filteredFreeResourcesOfRecommend.map((item) => {
            return (
              <li key={item.id} className="flex  mt-6 ">
                <div>
                  <i className=" inline-block  mt-2 w-1.5 h-1.5 rounded-sm bg-custom-green mr-4 " />
                </div>
                <div className="line-clamp-2">{item.attributes.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const MobileView: React.FC<RightRecommendContentViewProps> = () => {
  return (
    <div className="">
      <div className={clsx("py-8 px-5", styles.rightContent)}>
        <div className=" rounded-sm bg-custom-green-0.2">
          <div className="text-xl  ">
            <div className="font-semibold ">
              扫描二维码或者<span className="text-custom-green ">点击这里</span>
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
      </div>
      <div className="mt-6 py-8 px-5 bg-white">
        <div className="flex justify-between text-base ">
          {contentTypes.articleType.enum.map((key) => {
            return (
              <div
                key={key}
                className={clsx(
                  `cursor-pointer transition-all duration-300 ${
                    key === articleType ? "text-xl  font-semibold" : ""
                  }`
                )}
              >
                {RightArticleType[key]}
              </div>
            );
          })}
        </div>
        <ul className="mt-8">
          <li className="flex  mt-6 ">
            <div>
              <i className=" inline-block  mt-2 w-1.5 h-1.5 rounded-sm bg-custom-green mr-4 " />
            </div>
            <div>6月12日下午4时许，山西省临汾市安泽县</div>
          </li>
          <li className="flex mt-6  ">
            <div>
              <i className=" inline-block  mt-2 w-1.5 h-1.5 rounded-sm bg-custom-green mr-4 " />
            </div>
            <div>6月12日下午4时许，山西省临汾市安泽县</div>
          </li>
        </ul>
      </div>
      <div className="mt-6 py-8 px-5 bg-white mb-6 ">
        <div className="text-xl font-medium "> 热门标签</div>
        <div className=" mt-6 flex  flex-wrap gap-4">
          {contentTypes.tagType.enum.map((key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleTitleTypeClick(TitleShowType.tag);
                  setTagType(key);
                }}
                className={clsx(
                  "flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid"
                )}
              >
                <Image src={tagSvg} alt={TagType[key]}></Image>
                <span>{TagType[key]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const RightRecommendContent: React.FC<RightRecommendContentProps> = (props) => {
  const { isMobile } = useScreen();
  const { filteredFreeResources } = props;
  const filteredFreeResourcesOfHot = useMemo(() => {
    return filteredFreeResources?.filter(
      (item) => item?.attributes.articleType === "hot"
    );
  }, [filteredFreeResources]);

  const filteredFreeResourcesOfRecommend = useMemo(() => {
    return filteredFreeResources?.filter(
      (item) => item?.attributes.articleType === "recommend"
    );
  }, [filteredFreeResources]);

  return isMobile() ? (
    <MobileView
      filteredFreeResourcesOfRecommend={filteredFreeResourcesOfRecommend}
      filteredFreeResourcesOfHot={filteredFreeResourcesOfHot}
      contentTypes={props.contentTypes}
    />
  ) : (
    <PCView
      filteredFreeResourcesOfRecommend={filteredFreeResourcesOfRecommend}
      filteredFreeResourcesOfHot={filteredFreeResourcesOfHot}
      contentTypes={props.contentTypes}
    />
  );
};

export default RightRecommendContent;
