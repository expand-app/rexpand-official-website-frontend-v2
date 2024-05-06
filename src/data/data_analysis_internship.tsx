import { AccordionData } from '@/components/Accordion/Accordion';
import { OutlineData } from '@/pages/job/internship/components/Outline/Outline';

export const dataAnalysisFAQData: AccordionData[] = [
    {
        id: 1,
        title: 'Marketing Analytics项目工作经验的Title写什么? ',
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
        content: <></>,
    },
    {
        id: 3,
        title: '项目做完后，简历中Skills里可以添加什么内容？',
        content: <></>,
    },
    {
        id: 4,
        title: '如果缺席直播课程怎么办？',
        content: <></>,
    },
    {
        id: 5,
        title: '上课的模式是什么？',
        content: <></>,
    },
    {
        id: 6,
        title: '美国实习项目和学校上课项目区别是什么？',
        content: <></>,
    },
    {
        id: 7,
        title: '适合什么水平的同学，需要具备什么样的技能为条件？跟不上项目怎么办？',
        content: <></>,
    },
    {
        id: 8,
        title: '项目中遇到问题找谁？',
        content: <></>,
    },
    {
        id: 9,
        title: '课程在什么平台？课程里的学习资料以什么形式分享？',
        content: <></>,
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
        subjectName: '项目启动和团队准备阶段2',
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
        },],
    }]
};
