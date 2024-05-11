import { AccordionData } from '@/components/Accordion/Accordion';
import { ProjectProcessData } from '@/pages/job/offer-guarantee/components/ProjectProcess/ProjectProcess';

export const offerGuaranteeFAQData: AccordionData[] = [
    {
        id: 1,
        title: 'H1B offer保障是什么意思？ ',
        content: <>
            <ol className='list-decimal'>
                <li> 通过「职业规划」、「简历代投」、「内推服务」、「面试辅导」等全链条服务保障同学上岸。如若在服务期内未拿到offer，则有退款机制。</li>
            </ol>
        </>,
    },
    {
        id: 2,
        title: '简历代投服务是怎么做的？',
        content: <></>,
    },
    {
        id: 3,
        title: '内推服务是怎么做的？',
        content: <></>,
    },
    {
        id: 4,
        title: '1v1求职辅导授课有多少课时？',
        content: <></>,
    },
    {
        id: 5,
        title: '1v1求职辅导授课导师都是什么背景？',
        content: <></>,
    },
    {
        id: 6,
        title: '1v1求职辅导授课形式是什么？一节课时间多长？',
        content: <></>,
    },
    {
        id: 7,
        title: '保offer项目学员简历是否可以增加实习项目？',
        content: <></>,
    },
];


export const projectProcessData: ProjectProcessData[] = [
    {
        id: 1,
       processes: [
            {
                title: '职业规划服务/Career Consultation',
                content: [
                    <div key={1} className='project_process_para'>带领同学进行美国就业总览</div>,
                    <div key={2} className='project_process_para'>进行职业规划与设计</div>,
                    <div key={3} className='project_process_para'>求职目标和方向的敲定</div>,

                    <h2 key={4} className='project_process_title2'>阶段中，涉及到的资料有：</h2>,
                    <div key={5} className='project_process_para'>可申请职位title</div>,
                    <div key={6} className='project_process_para'>北美求职timeline</div>,
                ]
            },
       ],
    },

];