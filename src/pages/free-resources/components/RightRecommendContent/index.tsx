import clsx from "clsx";
import styles from "../../index.module.css";
import Image from "next/image";
import qrDaeImg from "@/assets/qr_dae.png";
interface RightRecommendContentProps {}

const RightRecommendContent: React.FC<RightRecommendContentProps> = () => {
  return (
    <div>
      <div className={clsx("py-8 px-5 min-w-80 ", styles.rightContent)}>
        <div className="text-xl  font-semibold">扫码1V1求职攻略咨询</div>
        <div className="mt-2  flex py-5 items-center px-5 rounded-sm bg-custom-green-0.2">
          <div className="text-base ">
            <div className="font-semibold mb-1 text-custom-green  ">
              扫描右侧二维码
            </div>
            <div>上千名校友内推群等你来</div>
          </div>
          <div className="mt-6">
            <Image
              src={qrDaeImg}
              alt={"qr_code_img"}
              className={clsx("w-24 h-24")}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 py-8 px-5 bg-white">
        <div className="flex justify-between text-base font-semibold ">
          <div className="hover:text-xl font-semibold cursor-pointer ">
            热门文章
          </div>
          <div>推荐文章</div>
          <div>随机文章</div>
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
      <div className="mt-6 py-8 px-5 bg-white flex  flex-wrap gap-4">
        <div className="rounded text-base border-[1px] py-1  px-2 border-custom-black-0.1 border-solid">
          求职
        </div>
        <div className="rounded text-base border-[1px] py-1 px-2 border-custom-black-0.1 border-solid">
          就业
        </div>
        <div className="rounded text-base border-[1px] py-1 px-2 border-custom-black-0.1 border-solid">
          面试
        </div>
        <div className="rounded text-base border-[1px] py-1 px-2 border-custom-black-0.1 border-solid">
          面试技巧
        </div>
        <div className="rounded text-base border-[1px] py-1 px-2 border-custom-black-0.1 border-solid">
          面试时间
        </div>
        <div className="rounded text-base border-[1px] py-1 px-2 border-custom-black-0.1 border-solid">
          求职时间线
        </div>
      </div>
    </div>
  );
};

export default RightRecommendContent;
