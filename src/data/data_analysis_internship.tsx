import { AccordionData } from "@/components/Accordion/Accordion";
import { OutlineData } from "@/pages/job/components/Outline/Outline";

export const dataAnalysisFAQData: AccordionData[] = [
  {
    id: 1,
    title: "Data Analytics项目工作经验的title写什么?  ",
    content: (
      <>
        <ol className="list-decimal">
          <li>Data Analyst (Data Analytics Intern)</li>
          <li>Marketing Data Analyst (Marketing Analytics Intern)</li>
          <li>Business Analyst (Business Analyst Intern)</li>
          <li>Marketing Analyst (Marketing Analytics Intern)</li>
          <li>
            Customer Insights Analyst (Customer Insights Analytics Intern)
          </li>
          <li>Data Engineer (Data Enigneer Intern)</li>
          <li>Data Scientist (Data Scientist Intern)</li>
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
          <li>Data Cleaning</li>
          <li>Management Consulting</li>
          <li>Customer Segmentation</li>
          <li>Strategic Planning</li>
          <li>A/B Testing</li>
          <li>Email Marketing</li>
          <li>SQL</li>
          <li>Tableau</li>
          <li>Excel</li>
          <li>Database Management</li>
          <li>Market Research</li>
          <li>Machine Learning</li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: "如果缺席直播课程怎么办？",
    content: <>直播课程设置回放，可通过回放视频补充学习。</>,
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

// 数据分析 - 项目大纲
export const dataAnalysisOutlineData: OutlineData = {
  subjects: [
    {
      subjectName: "项目启动和团队准备阶段",
      subjectTags: ["上课频率：2周", "每周2节直播课", "每节课1小时"],
      subjectDescription:
        "这部分主要涉及项目的启动阶段和准备工作。包括团队的介绍与沟通，市场调研的回顾和讨论，以及与客户的沟通和需求了解。",
      courseList: [
        {
          name: "第1周：项目启动和团队介绍",
          sections: [
            "介绍项目背景、目标和团队成员、分配任务和角色",
            "进行入职会议，确立项目方向和内容",
          ],
        },
        {
          name: "第2周：市场调研和邮件营销",
          sections: [
            "回顾市场调研结果，讨论竞争对手分析和市场定位策略",
            "学习如何使用Mailchimp进行邮件营销，包括创建邮件列表和设计邮件模板",
            "进行与营销经理的客户电话会议，了解客户需求和期望",
          ],
        },
      ],
    },
    {
      subjectName: "数据处理分析与营销策略优化",
      subjectTags: ["上课频率：5周", "每周2节直播课", "每节课1小时"],
      subjectDescription:
        "这部分主要围绕着数据处理和分析展开。从SQL基础的学习开始，到数据的清洗和分割，再到自动化数据管道的建立和实施，同时还包括了复盘整体数据维度表现，与经理讨论制定数据战略方案等。",
      courseList: [
        {
          name: "第3周：数据策略和管理",
          sections: [
            "讨论数据收集、分析和利用的策略",
            "与经理共同制定数据管理计划",
            "准备进行SQL基础学习，为后续的数据处理和分析做准备",
          ],
        },
        {
          name: "第4周：SQL essentials和data cleaning",
          sections: [
            "学习SQL基础，包括设置数据库和基本查询操作",
            "开始进行data cleaning和segmentation，处理数据中的缺失值和异常值",
          ],
        },
        {
          name: "自动化数据处理管道",
          sections: [
            "深入学习SQL，包括subqueries、aggregate functions等",
            "建立automated data pipeline，提高数据处理效率",
            "进一步data cleaning，解决实际数据集中的问题",
          ],
        },
        {
          name: "第6周：adhoc project和data pipeline配置",
          sections: [
            "adhoc project：banking relationship pricing validation",
            "进一步探讨数据分段和自动化技术",
          ],
        },
        {
          name: "第7周：A/B测试和邮件营销审查",
          sections: [
            "学习如何设计和实施A/B Testing，评估营销策略的效果",
            "跟踪之前发送的邮件营销活动的效果，并提出改进方案",
          ],
        },
      ],
    },
    {
      subjectName: "数据科学与建模实践",
      subjectTags: ["上课频率：3周", "每周2节直播课", "每节课1小时"],
      subjectDescription:
        "这一部分课程将进入数据科学和建模的实际操作，通过Machine Learning来创建和训练模型，通过选择和转换关键特征来创建可用的数据集。",
      courseList: [
        {
          name: "第8周：数据科学入门",
          sections: [
            "数据科学的基本介绍，了解其重要性和应用",
            "通过选择和转换关键特征，创建可用的数据集",
          ],
        },
        {
          name: "第9周：机器学习算法实践",
          sections: [
            "SQL的实际应用，提升数据库管理能力",
            "机器学习的基础知识，了解其原理和应用",
          ],
        },
        {
          name: "第10周：数据建模应用",
          sections: [
            "通过实际操作构建和训练业务数据模型",
            "复盘项目，在面试中有效地沟通项目细节",
          ],
        },
      ],
    },
  ],
};
