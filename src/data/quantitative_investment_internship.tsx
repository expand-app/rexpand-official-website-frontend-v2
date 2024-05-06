import { AccordionData } from '@/components/Accordion/Accordion';
import { OutlineData } from '@/pages/job/internship/components/Outline/Outline';

export const quantitativeInvestmentFAQData: AccordionData[] = [
    {
        id: 1,
        title: 'Quant项目工作经验的Title写什么? ',
        content: <>
            <ol className='list-decimal'>
                <li>Quant Analyst (Quant Analyst Intern)</li>
                <li>Risk Management/Analyst (Risk Management Intern)</li>
                <li>Quant Researcher (Quant Researcher Intern)</li>
                <li>Quant Trader (Quant Trader Intern)</li>
            </ol>
        </>,
    },
    {
        id: 2,
        title: 'Quant项目公司是怎么写在简历里什么?',
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

// 量化投资实习 - 项目大纲
export const quantitativeInvestmentOutlineData: OutlineData = {
    subjects: [{
        subjectName: '量化风险管理',
        subjectTags: ['上课频率:6周','2-4小时课程/周'],
        subjectDescription: '这部分需要向一家量化基金公司的CIO计算和汇报他们的一只long only 基金的VaR，帮助PM评估市场风险。我们会使用三种方法（Paramatic/Monte Carlo/Historical)计算基金的VaR，并写成一个Python程序，能够每个月很方便的进行计算并汇报。同时，我们也会跟客户沟通，帮助我们的客户（即CIO)分析驱动VaR增高或者降低的因素，帮助客户更好的分析股票的市场风险。',
        courseList: [{
            name: '第1周：介绍量化风险管理的重要性、基本原则及VaR的定义和应用',
            sections: [
                '介绍项目背景、目标和团队成员',
                '强调量化风险管理的重要性和基本原则',
                '介绍价值在风险(Value at Risk, VaR)的定义、作用及其与其他风险度量的关系',
            ],
        },{
            name: '第2周：不同VaR计算方法、参数法VaR详解',
            sections: [
                '概述三种VaR计算方法',
                'VaR介绍和相关编程技巧',
                '参数法VaR的详细解析，包括公式和应用场景',
            ],
        },{
            name: '第3周：通过蒙特卡洛模拟和历史模拟法实现VaR计算，并探索基于VaR的投资组合优化',
            sections: [
                '蒙特卡洛模拟法VaR的计算步骤和案例分析',
                '历史模拟法VaR的实施和实际应用',
                '基于VaR的马科维茨(Markowitz)投资组合优化方案和Brinson模型的初步介绍',
            ],
        },{
            name: '第4周：研究Brinson多期归因和债券风险管理的方法及其应用',
            sections: [
                'Brinson模型多期归因分析',
                '债券风险管理初步介绍',
                '利用主成分分析(PCA)和Hermite插值法进行利率曲线分析',
            ],
        },{
            name: '第5周：聚焦时间序列数据的处理和分析，项目答疑',
            sections: [
                '时间序列数据处理和分析技巧介绍',
                '对时间序列数据的处理和分析深入讲解',
                '项目答疑直播解决项目中的问题',
            ],
        },{
            name: '第6周：深入分析时间序列数据，并介绍风险平价模型及其与宏观因子的关系',
            sections: [
                '深入讲解时间序列数据分析',
                '介绍风险平价模型和宏观经济因子',
                '风险平价模型应用及答疑',
            ],
        }],
    },
    ]
};
