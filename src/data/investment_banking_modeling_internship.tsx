import { AccordionData } from '@/components/Accordion/Accordion';
import { OutlineData } from '@/pages/job/components/Outline/Outline';

export const investmentBankingModelingFAQData: AccordionData[] = [
    {
        id: 1,
        title: 'Financial Modeling项目工作经验的Title写什么?',
        content: <>
            <ol className='list-decimal'>
                <li>Financial Analyst (Financial Analyst Intern)</li>
                <li>Transaction Advisory Analyst (Transaction Avisory Intern)</li>
                <li>Valuation Analyst (Valuation Analyst Intern)</li>
                <li>Financial Planning and Analysis(FP&A) Analyst (FP&A Intern)</li>
                <li>Budget Analyst (Budeget Analyst Intern)</li>
            </ol>
        </>,
    },
    {
        id: 2,
        title: 'Financial Modeling项目公司是怎么写在简历里什么?',
        content: <>Intelliimpact
        Intelliimpact LLC是一个注册在Texas的Consulting公司，主要业务是Management Consulting, Data Analytics, Marketing Consulting Services, 具体业务详情可以查看公司的官网：www.intelliimpact.com</>,
    },
    {
        id: 3,
        title: '项目做完后，简历中Skills里可以添加什么内容？',
        content: <>
            <ol className='list-decimal'>
                <li>Valuation</li>
                <li>Financial Analysis</li>
                <li>Financial Modeling</li>
                <li>Budgeting</li>
                <li>Cash Flow Forecasting</li>
                <li>Excel Modeling</li>
                <li>FP&A Model</li>
                <li>Operating Model</li>
                <li>Discounted Cash Flow Model</li>
                <li>Comparable Companies Model</li>
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

// 投行建模实习 - 项目大纲
export const investmentBankingModelingOutlineData: OutlineData = {
    subjects: [{
        subjectName: '金融建模基础',
        subjectTags: ['上课频率:3周','2节课/周', '1h/课'],
        subjectDescription: '这部分主要介绍团队和项目情况，同时通过实践来提高对财务建模的理解和能力。',
        courseList: [{
            name: '第1周：介绍公司客户和业务内容，学习三大财务报表的基本会计知识',
            sections: [
                '公司、客户、工作内容及业务线介绍',
                '学习基础会计原理，包括资产负债表、利润表和现金流量表的编制方法',
            ],
        },{
            name: '第2周：折现现金流（DCF）建模，对同行公司进行比较分析以掌握估值的基础方法',
            sections: [
                '学习DCF（折现现金流）模型的基本构建和应用，掌握如何通过预测未来现金流并折现到现值来进行企业价值评估',
                '进行同行公司分析，学习如何选取合适的比较公司，分析其财务指标，并应用于相对估值',
            ],
        },{
            name: '第3周：学习Excel建模的最佳实践，并通过具体的商业案例回顾巩固所学知识',
            sections: [
                '学习Excel中金融建模的最佳实践，包括数据整理、公式应用和模型优化技巧',
                '审核和讨论具体的商业案例，应用所学技术进行财务分析和模型构建',
            ],
        }],
    },
    ]
};
