import clsx from "clsx";
import Image from "next/image";
import qrDaeImg from "@/assets/qr_dae.png";
import tagSvg from "@/assets/free-resources/tag.svg";
import new_live from "@/assets/free-resources/new_live.svg";
import { FreeResourceData, RightArticleType } from "../type";
import useScreen from "@/components/useScreen/useScreen";
import { useMemo } from "react";
import Link from "next/link";
import { TagList } from "@/services/FreeResources";
import { ServerEnv } from "@/utils/env";
interface RightContentContentProps {
  filteredFreeResources: FreeResourceData;
  tagList: TagList;
}

interface RightContentContentViewProps {
  filteredFreeResourcesOfHot: FreeResourceData;
  filteredFreeResourcesOfRecommend: FreeResourceData;
  tagList: TagList;
}

const PCView: React.FC<RightContentContentViewProps> = ({
  filteredFreeResourcesOfRecommend,
  filteredFreeResourcesOfHot,
  tagList,
}) => {
  return (
    <div className="min-w-80  w-80  ">
      <div className=" rounded  bg-custom-green-0.2 pt-6  pb-7  px-5">
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
            width={96}
            height={96}
          />
        </div>
        <div className="mt-3 text-center">上千名校友内推群等你来</div>
      </div>

      <div className="mt-6  py-8 px-5 bg-white">
        <div className="flex justify-between text-base ">
          <div
            className={clsx(
              `cursor-pointer transition-all duration-300 text-xl  font-semibold `
            )}
          >
            {RightArticleType.hot}
          </div>
        </div>

        <ul className="mt-8 pl-2">
          {filteredFreeResourcesOfHot.map((item) => {
            return (
              <Link
                href={`/free-resources/${
                  process.env.NODE_ENV !== ServerEnv.Production
                    ? item.id
                    : `${item.id}.html`
                }`}
                key={item.id}
              >
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
      <div className="mt-8  mb-6 px-5">
        <div className=" flex gap-2">
          <Image src={new_live} alt="最新直播" width={26} height={26}></Image>
          <span className="text-xl  font-bold ">最新直播</span>
        </div>
        <div className="mt-2">
          <Image
            src={
              "https://rexpand-cms-strapi.s3.us-east-1.amazonaws.com/thumbnail_Rectangle_18936_600ff33efe.png"
            }
            alt="最新直播"
            width={267}
            height={132}
            className="rounded overflow-hidden"
          ></Image>
        </div>
      </div>
      <div className="mt-6 py-8 px-5 bg-white ">
        <div className="text-xl font-bold "> 热门标签</div>
        <div className=" mt-6 flex  flex-wrap gap-4">
          {tagList?.map((item) => {
            return (
              <Link
                href={`/free-resources/${
                  process.env.NODE_ENV !== ServerEnv.Production
                    ? item.id
                    : `${item.id}.html`
                }`}
                key={item.id}
              >
                <div
                  className={`flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
                >
                  <Image src={tagSvg} alt={item.attributes.title}></Image>
                  <span>{item.attributes.title}</span>
                </div>
              </Link>
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

        <ul className="mt-8 pl-2">
          {filteredFreeResourcesOfRecommend.map((item) => {
            return (
              <Link
                href={`/free-resources/${
                  process.env.NODE_ENV !== ServerEnv.Production
                    ? item.id
                    : `${item.id}.html`
                }`}
                key={item.id}
              >
                <li className="flex  mt-6 ">
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
    </div>
  );
};

const MobileView: React.FC<RightContentContentViewProps> = ({
  filteredFreeResourcesOfRecommend,
  filteredFreeResourcesOfHot,
  tagList,
}) => {
  return (
    <div className="min-w-80  w-80 py-8 px-5">
      <div>
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
              width={96}
              height={96}
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
              <Link
                href={`/free-resources/${
                  process.env.NODE_ENV !== ServerEnv.Production
                    ? item.id
                    : `${item.id}.html`
                }`}
                key={item.id}
              >
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
          {tagList?.map((item) => {
            return (
              <Link
                href={`/free-resources/${
                  process.env.NODE_ENV !== ServerEnv.Production
                    ? item.id
                    : `${item.id}.html`
                }`}
                key={item.id}
              >
                <div
                  className={`flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
                >
                  <Image src={tagSvg} alt={item.attributes.title}></Image>
                  <span>{item.attributes.title}</span>
                </div>
              </Link>
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
              <Link
                href={`/free-resources/${
                  process.env.NODE_ENV !== ServerEnv.Production
                    ? item.id
                    : `${item.id}.html`
                }`}
                key={item.id}
              >
                <li className="flex  mt-6 ">
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
    </div>
  );
};

const RightContentContent: React.FC<RightContentContentProps> = (props) => {
  const { isMobile } = useScreen();
  const { filteredFreeResources } = props;
  const filteredFreeResourcesOfHot = useMemo(() => {
    if (!filteredFreeResources) {
      return [];
    }
    return filteredFreeResources?.filter((item) => item?.attributes.isPopular);
  }, [filteredFreeResources]);

  const filteredFreeResourcesOfRecommend = useMemo(() => {
    if (!filteredFreeResources) {
      return [];
    }
    return filteredFreeResources?.filter(
      (item) => item?.attributes.isRecommended
    );
  }, [filteredFreeResources]);

  return isMobile() ? (
    <MobileView
      filteredFreeResourcesOfRecommend={filteredFreeResourcesOfRecommend}
      filteredFreeResourcesOfHot={filteredFreeResourcesOfHot}
      tagList={props.tagList}
    />
  ) : (
    <PCView
      filteredFreeResourcesOfRecommend={filteredFreeResourcesOfRecommend}
      filteredFreeResourcesOfHot={filteredFreeResourcesOfHot}
      tagList={props.tagList}
    />
  );
};

export default RightContentContent;
