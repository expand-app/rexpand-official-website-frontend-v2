import { AccordionData } from "@/components/Accordion/Accordion";
import { OutlineData } from "@/pages/job/components/Outline/Outline";

export const fullStackDevFAQData: AccordionData[] = [
  {
    id: 1,
    title: "Full Stack Engineer项目工作经验的title写什么？ ",
    content: (
      <>
        <ol className="list-decimal">
          <li>Software Engineer</li>
          <li>Software Engineer - Frontend </li>
          <li>Software Engineer - Backend</li>
          <li>Software Engineer - Fullstack</li>
          <li>Frontend Engineer</li>
          <li>Backen Engineer</li>
          <li>Fullstack Engineer</li>
          <li>Software Development Engineer Intern</li>
          <li>Software Developer</li>
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
          <li>Front-end: React Native, Expo, Typescript, Jotai, Axios</li>
          <li>
            Back-end: Node.js, Express.js, MongoDB, Mongoose,
            JWT，Javascript(ES6)
          </li>
          <li>Cloud service: AWS S3, AWS Elastic Beanstalk, AWS Cognito</li>
          <li>
            Tools: Postman, Swagger，Datadog, CI/CD, Git/Github, Husky, ESlint
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: "如果缺席直播课程怎么办？",
    content: <>直播课程设置回放，可通过回放补充学习。</>,
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

// 全栈开发 - 项目大纲
export const fullStackDevOutlineData: OutlineData = {
  subjects: [
    {
      subjectName: "App后端开发",
      subjectTags: ["上课频率：5周", "每周4个小时课程"],
      subjectDescription:
        "这部分用Node.js, Express.js, MongoDB等技术进行App后端开发。",
      courseList: [
        {
          name: "第1周：项目介绍与后端环境搭建",
          sections: [
            "介绍导师背景和项目概览",
            "学习Express.js、MongoDB基础和设置开发环境",
            "进行后端简历会话",
          ],
        },
        {
          name: "第2周：后端架构设计与API开发",
          sections: ["设计后端架构，学习如何使用RESTful API", "设置AWS账户"],
        },
        {
          name: "第3周：用户管理与认证系统",
          sections: [
            "实现认证与验证功能，开发用户相关的APIs",
            "提供后端Office Hour以解答疑问",
          ],
        },
        {
          name: "第4周：视频服务与云基础",
          sections: [
            "开发视频相关的APIs，学习AWS基础知识",
            "继续提供后端Office Hour",
          ],
        },
        {
          name: "第5周：部署准备与系统监控",
          sections: [
            "准备部署、设置CI/CD流程，学习使用DataDog进行数据监控",
            "进行后端回顾与改进",
          ],
        },
      ],
    },
    {
      subjectName: "App前端开发",
      subjectTags: ["上课频率：5周", "每周4个小时课程"],
      subjectDescription:
        "这部分用 React Native, Expo, Typescript等技术进行App前端开发",
      courseList: [
        {
          name: "第6周：前端开发入门与环境设置",
          sections: [
            "介绍React Native和TypeScript，设置iOS与Android的开发环境",
            "提供前端Office Hour以答疑解惑",
          ],
        },
        {
          name: "第7周：界面设计与框架实现",
          sections: ["设计前端界面，实现应用框架", "开发前端附加功能"],
        },
        {
          name: "第8周：用户交互与界面完善",
          sections: [
            "开发用户登录/注册功能，创建用户个人资料页面（第一部分）",
            "继续提供前端Office Hour",
          ],
        },
        {
          name: "第9周：用户体验深化与功能增强",
          sections: [
            "完成用户个人资料页面（第二部分），开发信息流屏幕",
            "再次提供前端Office Hour",
          ],
        },
        {
          name: "第10周：多媒体处理与性能优化",
          sections: [
            "开发自定义视频组件，实现视频上传功能",
            "进行前端回顾与改进",
          ],
        },
      ],
    },
  ],
};
