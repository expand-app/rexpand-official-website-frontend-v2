import { AccordionData } from '@/components/Accordion/Accordion';
import { OutlineData } from '@/pages/job/components/Outline/Outline';

export const dataAnalysisFAQData: AccordionData[] = [
    {
        id: 1,
        title: 'Marketing Analytics项目工作经验的Title写什么?  ',
        content: <>
            <ol className='list-decimal'>
                <li>Data Analyst (Data Analytics Intern)</li>
                <li>Marketing Data Analyst (Marketing Analytics Intern)</li>
                <li>Business Analyst (Business Analyst Intern)</li>
                <li>Marketing Analyst (Marketing Analytics Intern)</li>
                <li>Customer Insights Analyst (Customer Insights Analytics Intern)</li>
                <li>Data Engineer (Data Enigneer Intern)</li>
            </ol>
        </>,
    },
    {
        id: 2,
        title: 'Marketing Analytics项目公司是怎么写在简历里什么?',
        content: <>Intelliimpact Intelliimpact LLC是一个注册在Texas的Consulting公司，主要业务是Management Consulting, Data Analytics, Marketing Consulting Services, 具体业务详情可以查看公司的官网：www.intelliimpact.com</>,
    },
    {
        id: 3,
        title: '项目做完后，简历中Skills里可以添加什么内容？',
        content: <>
            <ol className='list-decimal'>
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
        </>,
    },
    {
        id: 4,
        title: '如果缺席直播课程怎么办？',
        content: <>直播课程设置回放，可通过回放视频补充学习</>,
    },
    {
        id: 5,
        title: '上课的模式是什么？',
        content: <>课程采取直播加录播的形式，链接会发在班级群里。所有报名学员均会在班级群里，项目会配备一个班主任老师，会负责群内作业收发以及各项事务的通知。</>,
    },
    {
        id: 6,
        title: '美国实习项目和学校上课项目区别是什么？',
        content: <>项目会以Corporate Level的企业咨询项目为主体，遵循工业界项目的进行流程，项目会以咨询公司工作经验的形式展现在简历上，补充同学简历经验不足这一最大求职短板。</>,
    },
    {
        id: 7,
        title: '适合什么水平的同学，需要具备什么样的技能为条件？跟不上项目怎么办？',
        content: <>0基础可学，课程分为基础理论和项目实操两个大的板块，不需要项目同学有预备知识。项目老师有固定的答疑时间（Office Hour），有项目相关问题可集中提问。</>,
    },
    {
        id: 8,
        title: '项目中遇到问题找谁？',
        content: <>班主任老师在项目群里会负责关于听课、学习材料发送、视频播放等问题的处理。</>,
    },
    {
        id: 9,
        title: '课程在什么平台？课程里的学习资料以什么形式分享？',
        content: <>直播课程会通过线上授课软件进行，通过微信即可听课，学习资料和课件会在上课的班级微信群里分享，作业会在微信群里提交。</>,
    }
];

// 数据分析 - 项目大纲
export const dataAnalysisOutlineData: OutlineData = {
    subjects: [{
        subjectName: '项目启动和团队准备阶段',
        subjectTags: ['上课频率:3周','2节课/周','1h/课'],
        subjectDescription: '这部分主要涉及项目的启动阶段和准备工作。包括团队的介绍与沟通，市场调研的回顾和讨论，以及与客户的沟通和需求了解。同时还包括了制定数据战略和与经理讨论相关事宜。',
        courseList: [{
            name: '第1周：项目启动和团队介绍',
            sections: [
                '介绍项目背景、目标和团队成员',
                '分配任务和角色',
                '进行入职会议，确立项目方向和内容',
            ],
        },{
            name: '第2周：市场调研和邮件营销',
            sections: [
                '回顾市场调研结果，讨论竞争对手分析和市场定位策略',
                '学习如何使用Mailchimp进行邮件营销，包括创建邮件列表和设计邮件模板',
                '进行与营销经理的客户电话会议，了解客户需求和期望',
            ],
        },{
            name: '第3周：项目启动和团队介绍',
            sections: [
                '讨论数据收集、分析和利用的策略',
                '与经理共同制定数据管理计划',
                '准备进行SQL基础学习，为后续的数据处理和分析做准备',
            ],
        }],
    },
    {
        subjectName: '数据处理与分析',
        subjectTags: ['上课频率:4周','每周2节直播课','每节课1小时'],
        subjectDescription: '这部分主要围绕着数据处理和分析展开。从SQL基础的学习开始，到数据的清洗和分割，再到自动化数据管道的建立和实施。涉及了地理位置分析、电子邮件列表更新、数据管道的审查和改进等内容。',
        courseList: [{
            name: '第4周：SQL essentials和data cleaning',
            sections: [
                '介绍项目背景、目标和团队成员',
                '分配任务和角色',
                '进行入职会议，确立项目方向和内容',
            ],
        },{
            name: '第5周：自动化数据处理管道',
            sections: [
                '回顾市场调研结果，讨论竞争对手分析和市场定位策略',
                '学习如何使用Mailchimp进行邮件营销，包括创建邮件列表和设计邮件模板',
                '进行与营销经理的客户电话会议，了解客户需求和期望',
            ],
        },{
            name: '第6周：地理位置分析和数据更新',
            sections: [
                '讨论数据收集、分析和利用的策略',
                '与经理共同制定数据管理计划',
                '准备进行SQL基础学习，为后续的数据处理和分析做准备',
            ],
        },{
            name: '第7周：adhoc project和data pipeline implementation',
            sections: [
                'adhoc project：banking relationship pricing validation',
                'data pipeline implementation，并复盘',
            ],
        }],
    },{
        subjectName: '营销策略优化与实施',
        subjectTags: ['上课频率:3周','每周2节直播课','每节课1小时'],
        subjectDescription: '这部分着重于营销策略的优化和实施，包括A/B测试的设计和实施、邮件营销活动的绩效审查、策略的最终优化和数字营销计划的完善。最后，对整个项目进行总结审查，并为未来的面试和职业发展做准备。',
        courseList: [{
            name: '第8周：A/B测试和邮件营销审查',
            sections: [
                '学习如何设计和实施A/B Testing，评估营销策略的效果',
                '跟踪之前发送的邮件营销活动的效果，并提出改进方案',
            ],
        },{
            name: '第9周：策略优化和数字营销计划',
            sections: [
                '优化之前的营销策略，并制定实施计划',
                '最终完善数字营销计划，准备最终报告',
            ],
        },{
            name: '第10周：报告审查和面试准备',
            sections: [
                '审查并讨论最终报告',
                '分享项目经验和教训，准备面试和职业发展',
            ],
        }],
    }]
};
