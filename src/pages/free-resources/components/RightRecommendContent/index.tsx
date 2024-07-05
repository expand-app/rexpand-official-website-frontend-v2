import clsx from "clsx";
import styles from "./index.module.css";
import Image from "next/image";
import qrDaeImg from "@/assets/qr_dae.png";
import tagSvg from "@/assets/free-resources/tag.svg";
import { RightArticleType, TagType, TitleShowType } from "../../type";
import useFreeResourcesContext from "../../Context";
import useScreen from "@/components/useScreen/useScreen";
import Link from "next/link";
interface RightRecommendContentProps {}

const PCView: React.FC = () => {
  const {
    contentTypes,
    setTagType,
    handleTitleTypeClick,
    articleType,
    setArticleType,
    filteredFreeResourcesByArticleType,
  } = useFreeResourcesContext();
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
          {filteredFreeResourcesByArticleType.map((item) => {
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
          {contentTypes.tag.enum.map((key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleTitleTypeClick(TitleShowType.tag);
                  setTagType(key);
                }}
                className={`transition-all  flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
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

const MobileView: React.FC = () => {
  const {
    contentTypes,
    setTagType,
    handleTitleTypeClick,
    articleType,
    setArticleType,
    filteredFreeResourcesByArticleType,
  } = useFreeResourcesContext();

  return (
    <div className="">
      <div className={clsx("py-8 px-5", styles.rightContent)}>
        <div className=" rounded-sm bg-custom-green-0.2">
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
          {filteredFreeResourcesByArticleType.map((item) => {
            return (
              <Link href={`/free-resources/${item.id}`} key={item.id}>
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
      <div className="mt-6 py-8 px-5 bg-white mb-6 ">
        <div className="text-xl font-medium "> 热门标签</div>
        <div className=" mt-6 flex  flex-wrap gap-4">
          {contentTypes.tag.enum.map((key) => {
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

const RightRecommendContent: React.FC<RightRecommendContentProps> = () => {
  const { isMobile } = useScreen();
  return isMobile() ? <MobileView /> : <PCView />;
};

export default RightRecommendContent;
