import { AccordionData } from '@/components/Accordion/Accordion';
import { WhyJoinData } from '@/pages/job/interview-camp/WhyJoinList/WhyJoinList';
import whyJoin1Img from '@/assets/interview-camp/icon_whyjoin_1.png';
import whyJoin2Img from '@/assets/interview-camp/icon_whyjoin_2.png';
import whyJoin3Img from '@/assets/interview-camp/icon_whyjoin_3.png';
import whyJoin4Img from '@/assets/interview-camp/icon_whyjoin_4.png';
import { CourceArrangement } from '@/pages/job/interview-camp/CourseArrangement/CourseArrangement';

export const interviewCampFAQData: AccordionData[] = [
    {
        id: 1,
        title: '课程形式是直播还是录播？',
        content: <>
            <ol className='list-none'>
                <li>直播授课，无法参加直播的同学可以看直播回放。回放永久有效，可以反复学习。</li>
            </ol>
        </>,
    },
    {
        id: 2,
        title: '如何领取听课福利？',
        content: <></>,
    },
    {
        id: 3,
        title: '如何加入学习社群？',
        content: <></>,
    },
    {
        id: 4,
        title: '面试集训营主讲老师是谁？',
        content: <></>,
    },
];


export const whyJoinData: WhyJoinData[] = [{
    id: 1,
    icon: whyJoin1Img,
    title: '真题串讲',
    description: '名企面试真题串讲，90%面试通过率',
},{
    id: 2,
    icon: whyJoin2Img,
    title: '全流程解析',
    description: '5天快速掌握，从Hirevue到Super Day面试全流程解析',
},{
    id: 3,
    icon: whyJoin3Img,
    title: '名企面试官',
    description: '名企面试官主讲，10+年面试经验保驾护航',
},{
    id: 4,
    icon: whyJoin4Img,
    title: '每月开课',
    description: '每月循环开课，上千名留学生报名',
}];

export const courceArrangementData: CourceArrangement[] = [{
    id: 1,
    title: '面试前48小时攻略，锁定Offer',
    content: ['听课福利：面试百宝书Interview 64问 (含答案)'],
},{
    id: 2,
    title: '不再害怕在线评估，HireVue终极指南',
    content: ['听课福利：Goldman Sachs等公司 HireVue面试真题及答案'],
},{
    id: 3,
    title: '所有面试的三个通用逻辑',
    content: ['听课福利：个人专属BQ 面试答案 (背诵版)'],
},{
    id: 4,
    title: 'Mock Interview，让真实面试变得简单',
    content: ['听课福利：美国名企职位内推机会'],
},{
    id: 5,
    title: '别人还在等待，教你用内推获取更多机会',
    content: ['听课福利：Networking 万能白皮书'],
}]