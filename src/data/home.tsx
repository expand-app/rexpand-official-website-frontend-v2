import { TabItem } from "@/components/VerticalTabs/VerticalTabs";
import { CardItem } from "@/pages/index/components/InternshipProjectCards/InternshipProjectCards";

import offerGuaranteeImg1 from "@/assets/home/offer_1.png";
import offerGuaranteeImg2 from "@/assets/home/offer_2.png";
import offerGuaranteeImg3 from "@/assets/home/offer_3.png";
import offerGuaranteeImg4 from "@/assets/home/offer_4.png";
import { InterviewCampData } from "@/pages/index/components/InterviewCamp/InterviewCamp";
import interviewCampImg1 from "@/assets/home/interview_1.png";
import interviewCampImg2 from "@/assets/home/interview_2.png";
import interviewCampImg3 from "@/assets/home/interview_3.png";

export const offerGuaranteeTabsData: TabItem[] = [
  {
    id: 1,
    title: (
      <>
        <span style={{ color: "#008A27" }}>H1b</span> offer保障
      </>
    ),
    subtitle: "高频内推、简历代投、求职辅导全方位保证成功率",
    image: offerGuaranteeImg1,

    //content: <Image src={offerGuaranteeImg1} height={200} alt='H1b Offer保障'/>
  },
  {
    id: 2,
    title: (
      <>
        周均<span style={{ color: "#008A27" }}>20+</span>次内推
      </>
    ),
    subtitle: "数千家美国名企内推，直接对接岗位招聘官",
    image: offerGuaranteeImg2,
    // content: <Image src={offerGuaranteeImg2} height={200} alt='周均20+次内推'/>
  },
  {
    id: 3,
    title: (
      <>
        <span style={{ color: "#008A27" }}>1000+</span>名企导师保驾护航
      </>
    ),
    subtitle: "全部来自于高盛、谷歌等超一线名企，平均工作经验超过5年",
    image: offerGuaranteeImg3,
    // content: <Image src={offerGuaranteeImg3} height={200} alt='1000+名企导师保驾护航'/>
  },
  {
    id: 4,
    title: (
      <>
        <span style={{ color: "#008A27" }}>美国实习</span>提升求职竞争力
      </>
    ),
    subtitle: "数据、金融、工程等方向企业级项目，秒提简历过筛率",
    image: offerGuaranteeImg4,
    // content: <Image src={offerGuaranteeImg4} height={200} alt='美国实习提升求职竞争力'/>
  },
];

export const internshipProjectCardsData: CardItem[] = [
  {
    id: 1,
    title: (
      <div className="font-l">
        <span className={"font-w600 font-m"}>数据分析</span>实习
      </div>
    ),
    subtitle: "Data Analytics",
    link: "/job/internship/data-analysis",
    description:
      "实习生将在一家咨询公司的Marketing Analytics Services (MAS)部门任职，工作职责包括使用SQL构建必要的数据管线(Data Pipeline)以支持工程化的市场营销活动。此外，利用Tableau和Excel等工具进行营销数据分析和结果可视化(Visualization)，进一步优化数字营销效果",
  },
  {
    id: 2,
    title: (
      <div className="font-l">
        <span className={"font-w600 font-m"}>量化投资</span>实习
      </div>
    ),
    subtitle: "Quantitative Investment",
    link: "/job/internship/quantitative-investment",
    description:
      "实习生将在一家咨询公司的Investment Management Services(IMS)部门任职，工作职责包括通过使用价值在风险(VaR)模型进行风险评估与量化，辅助客户在风险管理(Quantitative Risk Management)上的决策。且将利用多因子回归模型等量化方法，提供资产配置建议(Strategic Asset Allocation)",
  },
  {
    id: 3,
    title: (
      <div className="font-l">
        <span className={"font-w600 font-m"}>投行建模</span>实习
      </div>
    ),
    subtitle: "Financial Modeling",
    link: "/job/internship/investment-banking-modeling",
    description:
      "实习生将在一家咨询公司的Transaction Advisory Services (TAS)部门任职，将为客户提供交易和并购过程中的金融建模(Financial Modeling)支持，协助进行公司估值(Valuation)和财务预测(Financial Planning)",
  },
  {
    id: 4,
    title: (
      <div className="font-l">
        <span className={"font-w600 font-m"}>全栈开发</span>实习
      </div>
    ),
    subtitle: "Full-stack Development",
    link: "/job/internship/full-stack-dev",
    description:
      "实习生在一家科技公司任职，参与开发一个与小红书相似的食物分享应用的移动端项目。此职位涵盖了全面的项目开发流程，包括前后端代码的编写、优化和最终部署到云平台。项目将采用JavaScript、Python和Java作为主要开发语言，使用MySQL和PostgreSQL作为数据库解决方案",
  },
];

export const interviewCampData: InterviewCampData[] = [
  {
    id: 1,
    title: (
      <>
        <span style={{ color: "#008A27" }}>90%</span>面试通过率
      </>
    ),
    subtitle: "90%面试通过率",
    image: interviewCampImg1,
  },
  {
    id: 2,
    title: <>5天时间快速准备</>,
    subtitle: "从Hirevue到经典行为面试问题，五天五个不同主题涵盖面试全流程",
    image: interviewCampImg2,
  },
  {
    id: 3,
    title: <>上千名留学生好评</>,
    subtitle: "每月直播开课，已有上千留学生报名且认可集训营价值",
    image: interviewCampImg3,
  },
];
