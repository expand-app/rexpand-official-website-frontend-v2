import { AccordionData } from "@/components/Accordion/Accordion";
import { FloatMenuItemData } from "@/components/FloatMenu/FloatMenu";
import { SightViewData } from "@/pages/job/components/SightView/SightView";
import arrowUpImg from "@/assets/icon_arrow_up.png";
import consultImg from "@/assets/icon_consult.png";
import sendImg from "@/assets/icon_send.png";
import rocketImg from "@/assets/icon_rocket.png";
export const internshipMenusData: FloatMenuItemData[] = [
  {
    id: 1,
    text: "实习介绍",
    anchor: "intro",
  },
  {
    id: 2,
    text: "项目亮点",
    anchor: "sight",
  },
  {
    id: 3,
    text: "项目大纲",
    anchor: "outline",
  },
  {
    id: 4,
    text: "常见问题",
    anchor: "faq",
  },
];

// 数据分析 - 项目亮点
export const ananlysisSightViewData: SightViewData[] = [
  {
    image: arrowUpImg,
    title: "增加经验",
    subtitle: "简历上一份实习/全职工作经验",
  },
  {
    image: consultImg,
    title: "全流程顾问式服务",
    subtitle: "助力上百Entry Level数据专业同学入行",
  },
  {
    image: sendImg,
    title: "求职无忧",
    subtitle: "助力转行数据方向的同学添加相关经验",
  },
  {
    image: rocketImg,
    title: "技能提升",
    subtitle: "真实业务场景下学习数据分析核心技能SQL、Machine Learning等",
  },
];

// 量化投资 - 项目亮点
export const quantitativeInvestimentSightViewData: SightViewData[] = [
  {
    image: arrowUpImg,
    title: "增加经验",
    subtitle: "简历上一份实习/全职工作经验",
  },
  {
    image: consultImg,
    title: "全流程顾问式服务",
    subtitle: "帮助过上百名Entry Level同学收获Quant offer",
  },
  {
    image: sendImg,
    title: "求职无忧",
    subtitle: "帮助想转行做量化方向的同学添加相关简历经验",
  },
  {
    image: rocketImg,
    title: "技能提升",
    subtitle: "真实业务场景下学习量化风险和资产配置等模型",
  },
];

// 投行建模 - 项目亮点
export const investmentBankingModelingSightViewData: SightViewData[] = [
  {
    image: arrowUpImg,
    title: "增加经验",
    subtitle: "简历上一份实习/全职工作经验",
  },
  {
    image: consultImg,
    title: "全流程顾问式服务",
    subtitle: "帮助过上百名Entry Level金融专业的同学入行",
  },
  {
    image: sendImg,
    title: "求职无忧",
    subtitle: "帮助想转行做FP&A方向的同学添加相关简历经验",
  },
  {
    image: rocketImg,
    title: "技能提升",
    subtitle: "真实业务场景下学习财务建模核心技能",
  },
];

// 全栈开发 - 项目亮点
export const fullStackDevSightViewData: SightViewData[] = [
  {
    image: arrowUpImg,
    title: "增加经验",
    subtitle: "简历上一份实习/全职工作经验",
  },
  {
    image: consultImg,
    title: "全流程顾问式服务",
    subtitle: "助力上百名Entry Level computer science专业同学入行",
  },
  {
    image: sendImg,
    title: "求职无忧",
    subtitle: "帮助想转行做SDE方向的同学添加相关简历经验",
  },
  {
    image: rocketImg,
    title: "技能提升",
    subtitle: "真实业务场景下应用全栈开发技术",
  },
];
