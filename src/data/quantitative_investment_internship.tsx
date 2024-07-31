import { AccordionData } from "@/components/Accordion/Accordion";
import { OutlineData } from "@/pages/job/components/Outline/Outline";

export const quantitativeInvestmentFAQData: AccordionData[] = [
  {
    id: 1,
    title: "Quant项目工作经验的title写什么? ",
    content: (
      <>
        <ol className="list-decimal">
          <li>Quant Analyst (Quant Analyst Intern)</li>
          <li>Risk Management/Analyst (Risk Management Intern)</li>
          <li>Quant Researcher (Quant Researcher Intern)</li>
          <li>Quant Trader (Quant Trader Intern)</li>
        </ol>
      </>
    ),
  },
  {
    id: 2,
    title: "简历上如何填写项目所属公司？",
    content: (
      <>
        这是一家注册在Dallas的Consulting公司，主要业务是Management Consulting,
        Data Analytics, Marketing Consulting Services等。
      </>
    ),
  },
  {
    id: 3,
    title: "项目做完后，简历中Skills里可以添加什么内容？",
    content: (
      <>
        <ol className="list-decimal">
          <li>Statistical modeling</li>
          <li>VaR model</li>
          <li>Brinson attribution model</li>
          <li>Asset allocation model</li>
          <li>Quantitative Research</li>
          <li>Optimization</li>
          <li>Python</li>
          <li>Excel</li>
          <li>Data Cleaning</li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: "如果缺席直播课程怎么办？",
    content: <>直播课程设置回放，可通过回放视频补充学习</>,
  },
  {
    id: 5,
    title: "上课的模式是什么？",
    content: (
      <>
        课程采取直播加录播的形式，链接会发在班级群里。所有报名学员均会在班级群里，项目会配备一个班主任老师，会负责群内作业收发以及各项事务的通知。
      </>
    ),
  },
  {
    id: 6,
    title: "美国实习项目和学校上课项目区别是什么？",
    content: (
      <>
        项目会以Corporate
        Level的企业咨询项目为主体，遵循工业界项目的进行流程，项目会以咨询公司工作经验的形式展现在简历上，补充同学简历经验不足这一最大求职短板。
      </>
    ),
  },
  {
    id: 7,
    title: "适合什么水平的同学，需要具备什么样的技能为条件？跟不上项目怎么办？",
    content: (
      <>
        0基础可学，课程分为基础理论和项目实操两个大的板块，不需要项目同学有预备知识。项目老师有固定的答疑时间（Office
        Hour），有项目相关问题可集中提问。
      </>
    ),
  },
  {
    id: 8,
    title: "项目中遇到问题找谁？",
    content: (
      <>
        班主任老师在项目群里会负责关于听课、学习材料发送、视频播放等问题的处理。
      </>
    ),
  },
  {
    id: 9,
    title: "课程在什么平台？课程里的学习资料以什么形式分享？",
    content: (
      <>
        直播课程会通过线上授课软件进行，通过微信即可听课，学习资料和课件会在上课的班级微信群里分享，作业会在微信群里提交。
      </>
    ),
  },
];

// 量化投资实习 - 项目大纲
export const quantitativeInvestmentOutlineData: OutlineData = {
  subjects: [
    {
      subjectName: "量化风险管理",
      subjectTags: ["上课频率：6周", "2-4小时课程/周"],
      subjectDescription:
        "这部分需要向一家量化基金公司的CIO计算和汇报他们的一只long only 基金的VaR，帮助PM评估市场风险。我们会使用三种方法（Paramatic/Monte Carlo/Historical)计算基金的VaR，并写成一个Python程序，能够每个月很方便的进行计算并汇报。同时，我们也会跟客户沟通，帮助我们的客户（即CIO)分析驱动VaR增高或者降低的因素，帮助客户更好的分析股票的市场风险。",
      courseList: [
        {
          name: "第1周：介绍量化风险管理的重要性、基本原则及VaR的定义和应用",
          sections: [
            "介绍项目背景、目标和团队成员",
            "强调量化风险管理的重要性和基本原则",
            "介绍价值在风险(Value at Risk, VaR)的定义、作用及其与其他风险度量的关系",
          ],
        },
        {
          name: "第2周：不同VaR计算方法、参数法VaR详解",
          sections: [
            "概述三种VaR计算方法",
            "VaR介绍和相关编程技巧",
            "参数法VaR的详细解析，包括公式和应用场景",
          ],
        },
        {
          name: "第3周：通过蒙特卡洛模拟和历史模拟法实现VaR计算，并探索基于VaR的投资组合优化",
          sections: [
            "蒙特卡洛模拟法VaR的计算步骤和案例分析",
            "历史模拟法VaR的实施和实际应用",
            "基于VaR的马科维茨(Markowitz)投资组合优化方案和Brinson模型的初步介绍",
          ],
        },
        {
          name: "第4周：研究Brinson多期归因和债券风险管理的方法及其应用",
          sections: [
            "Brinson模型多期归因分析",
            "债券风险管理初步介绍",
            "利用主成分分析(PCA)和Hermite插值法进行利率曲线分析",
          ],
        },
        {
          name: "第5周：聚焦时间序列数据的处理和分析，项目答疑",
          sections: [
            "时间序列数据处理和分析技巧介绍",
            "对时间序列数据的处理和分析深入讲解",
            "项目答疑直播解决项目中的问题",
          ],
        },
        {
          name: "第6周：深入分析时间序列数据，并介绍风险平价模型及其与宏观因子的关系",
          sections: [
            "深入讲解时间序列数据分析",
            "介绍风险平价模型和宏观经济因子",
            "风险平价模型应用及答疑",
          ],
        },
      ],
    },
    {
      subjectName: "量化交易策略",
      subjectTags: ["上课频率：4周", "2-4小时课程/周"],
      subjectDescription:
        "这部分将协助客户进行量化研究Quant Research的工作。客户会提供给我们一些他们想要研究的想法，我们负责和研究回测这些想法是否可行。我们需要帮助客户完成的一个工作是测试将经济增长、通胀、利率等宏观经济数据融入量化模型对于目前我们的一只量化基金有没有显著的收益上的提升。",
      courseList: [
        {
          name: "第7周：讨论量化交易的基本原理、量化基金的策略及宏观经济因素对策略的影响",
          sections: [
            "介绍量化交易的基本原理和量化研究的角色",
            "介绍该量化基金的投资策略和目标",
            "分析宏观经济因素如何影响市场和量化策略",
          ],
        },
        {
          name: "第8周：概述宏观经济指标并探讨将宏观数据整合入量化模型的方法",
          sections: [
            "宏观经济指标概述，如经济增长、通胀和利率等",
            "数据收集方法，包括公开数据源和私人数据的处理",
            "如何将宏观数据整合进量化模型，包括初步的数据处理和分析",
          ],
        },
        {
          name: "第9周：解析宏观因子分析的技术和构建大类资产配置模型的过程",
          sections: [
            "宏观因子分析的基本概念和技术",
            "构建大类资产配置模型的步骤和方法",
            "案例研究：宏观因子模型在量化基金中的应用",
          ],
        },
        {
          name: "第10周：宏观因子模型的构建和应用",
          sections: [
            "进一步深入探讨宏观因子模型的构建和优化方法",
            "继续讲解宏观因子模型的应用场景和效果评估",
          ],
        },
      ],
    },
  ],
};
