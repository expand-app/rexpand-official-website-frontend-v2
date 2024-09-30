import banner1 from "@/assets/home/banner1.jpg";
import banner2 from "@/assets/home/banner2.jpg";
import banner3 from "@/assets/home/banner3.jpg";
import m_banner1 from "@/assets/home/m_banner1.jpg";
import m_banner2 from "@/assets/home/m_banner2.jpg";
import m_banner3 from "@/assets/home/m_banner3.jpg";
import { StaticImageData } from "next/image";

export const STRAPI_PRIVATE_PROP = [
  "createdAt",
  "updatedAt",
  "publishedAt",
] as const;

export interface MetaData {
  [property: string]: {
    title: string;
    description?: string;
    keyword?: string;
  };
}

export const META_DATA: MetaData = {
  index: {
    title:
      "睿思班求职(Rexpand) | 让AI内推引领求职，提供北美求职职业规划、简历修改、面试辅导等实习求职服务",
    description:
      "睿思班求职(Rexpand)是一家用AI帮助求职者实现内推就业的创导者.目前已帮助美国5000+学员实现大厂就业并获得Sponsor H1B，提供支持opt和cpt的实习或全职工作项目",
    keyword:
      "睿思班,求职简历,职业规划,面试,referral,Mock interview,networking,intern,实习,h1b,opt,cpt,美国找工作",
  },
  jobHunting: {
    title: "北美求职_留学生找工作_实习内推-睿思班求职(Rexpand)让AI内推引领求职",
    description:
      "睿思班求职(Rexpand)一家用AI帮助求职者实现内推就业的创导者，主要帮助在北美的华人留学生解决实习求职就业的服务",
    keyword: "北美求职,华人找工作,实习,海外求职,留学生求职",
  },
  interview: {
    title:
      "面试_面试辅导_面试自我介绍_Mock interview-睿思班求职(Rexpand)让AI内推引领求职",
    description:
      "睿思班求职(Rexpand)一家用AI帮助求职者实现内推就业的创导者，主要为北美的华人留学生提供面试辅导及Mock interview的服务",
    keyword: "面试,面试自我介绍,面试辅导,AI面试,Mock interview",
  },
  news: {
    title: "求职_面试_简历_h1b_opt-睿思班求职(Rexpand)让AI内推引领求职",
    description:
      "睿思班求职(Rexpand)一家用AI帮助求职者实现内推就业的创导者，主要为北美的华人留学生提供求职面试辅导相关的行业知识以及最新h1b和opt获取的政策",
    keyword: "求职,面试,简历,h1b,opt",
  },
  liveBroadcast: {
    title:
      "求职面试辅导直播_Mock interview-睿思班求职(Rexpand)让AI内推引领求职",
    description:
      "睿思班求职(Rexpand)一家用AI帮助求职者实现内推就业的创导者,为在北美的华人留学生提供求职面试辅导直播的Mock interview",
    keyword: "求职,面试,Mock interview,面试辅导,直播",
  },
  offerGuarantee: {
    title: "求职项目_睿思班求职(Rexpand)",
  },
  successCase: {
    title: "成功案例_睿思班求职(Rexpand)",
  },
  freeResources: {
    title: "免费资源_睿思班求职(Rexpand)",
  },
  about: {
    title: "关于我们_睿思班求职(Rexpand)",
  },
} as const;

export interface HomeData {
  src: StaticImageData;
  url: string;
  title: string;
  subTilte: string[];
}

export type HomeDatas = Array<HomeData>;

export const getHomeData = (isMobile: boolean): HomeDatas => {
  return [
    {
      src: isMobile ? m_banner1 : banner1,
      url: "https://rexpandcareer.com/job/offer-guarantee",
      title: "保offer求职辅导项目",
      subTilte: [
        "实习补充、简历代投、名企内推、导师辅导等一站式求职项目服务",
        "H1B签证保障，上岸率100%",
      ],
    },
    {
      src: isMobile ? m_banner2 : banner2,
      url: "https://rexpandcareer.com/job/internship/quantitative-investment",
      title: "量化投资实习项目",
      subTilte: [
        "本期项目时间：2024年9月-2024年11月",
        "在美实习提高简历含金量，求职Quant & Risk方向首选",
      ],
    },
    {
      src: isMobile ? m_banner3 : banner3,
      title: "面试集训营",
      url: "https://rexpandcareer.com/job/interview-camp",
      subTilte: [
        "本期开营时间：2024年9月23日-9月27日",
        "连续5天，每晚直播带你提升面试能力",
      ],
    },
  ];
};
