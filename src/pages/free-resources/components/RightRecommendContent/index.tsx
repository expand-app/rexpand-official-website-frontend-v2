import clsx from "clsx";
import styles from "../../index.module.css";
import Image from "next/image";
import qrDaeImg from "@/assets/qr_dae.png";
import tagSvg from "@/assets/free-resources/tag.svg";
import { RightArticleType, TagType, TitleShowType } from "../../type";
import { ContentTypes } from "../../type";
import useFreeResourcesContext from "../../context";
import useScreen from "@/components/useScreen/useScreen";
interface RightRecommendContentProps {}

const PCView: React.FC = () => {
  const { contentTypes, setTagType, handleTitleTypeClick } =
    useFreeResourcesContext();
  return (
    <div className="min-w-80  w-80">
      <div className={clsx("py-8 px-5", styles.rightContent)}>
        <div className=" rounded-sm bg-custom-green-0.2">
          <div className="text-xl text-center ">
            <div className="font-semibold ">
              扫描二维码或者<span className="text-custom-green ">点击这里</span>
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
          {contentTypes.articleType.enum.map((key) => {
            return (
              <div
                key={key}
                className={` cursor-pointer transition-all duration-300 hover:text-xl hover:font-semibold `}
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
      <div className="mt-6 py-8 px-5 bg-white ">
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
                className={`flex cursor-pointer gap-1 rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid`}
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
  const { contentTypes, setTagType, handleTitleTypeClick } =
    useFreeResourcesContext();
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
                className={` cursor-pointer transition-all duration-300 hover:text-xl hover:font-semibold `}
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

const RightRecommendContent: React.FC<RightRecommendContentProps> = () => {
  const { isMobile } = useScreen();
  return isMobile() ? <MobileView /> : <PCView />;
};

export default RightRecommendContent;
