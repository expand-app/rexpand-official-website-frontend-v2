import { AccordionData } from '@/components/Accordion/Accordion';
import { OutlineData } from '@/pages/job/internship/components/Outline/Outline';

export const fullStackDevFAQData: AccordionData[] = [
    {
        id: 1,
        title: 'Full Stack Engineer项目工作经验的Title写什么？ ',
        content: <>
            <ol className='list-decimal'>
                <li>Software Engineer</li>
                <li>Software Engineer - Frontend </li>
                <li>Software Engineer - Backend</li>
                <li>Software Engineer - Fullstack</li>
                <li>Frontend Engineer</li>
                <li>Backen Engineer</li>
                <li>Fullstack Engineer</li>
                <li>Software development engineer intern</li>
                <li>Software developr</li>
            </ol>
        </>,
    },
    {
        id: 2,
        title: 'Full Stack Engineer项目公司是怎么写在简历里什么?',
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

// 全栈开发 - 项目大纲
export const fullStackDevOutlineData: OutlineData = {
    subjects: [{
        subjectName: 'App后端开发',
        subjectTags: ['上课频率:5周','4小时课程/周'],
        subjectDescription: '这部分用Node.js, Express.js, MongoDB等技术进行App后端开发。',
        courseList: [{
            name: '第1周：项目介绍与后端环境搭建',
            sections: [
                '介绍导师背景和项目概览',
                '学习Express.js、MongoDB基础和设置开发环境',
                '进行后端简历会话',
            ],
        },{
            name: '第2周：后端架构设计与API开发',
            sections: [
                '设计后端架构，学习如何使用RESTful API',
                '设置AWS账户',
            ],
        },{
            name: '第3周：用户管理与认证系统',
            sections: [
                '实现认证与验证功能，开发用户相关的APIs',
                '提供后端Office Hour以解答疑问',
            ],
        },{
            name: '第4周：视频服务与云基础',
            sections: [
                '开发视频相关的APIs，学习AWS基础知识',
                '继续提供后端Office Hour',
            ],
        },{
            name: '第5周：部署准备与系统监控',
            sections: [
                '准备部署、设置CI/CD流程，学习使用DataDog进行数据监控',
                '进行后端回顾与改进',
            ],
        }],
    },
    ]
};
