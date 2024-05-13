import { AccordionData } from '@/components/Accordion/Accordion';
import { ProjectProcessData } from '@/pages/job/offer-guarantee/components/ProjectProcess/ProjectProcess';

export const offerGuaranteeFAQData: AccordionData[] = [
    {
        id: 1,
        title: '怎么实现保证拿到offer？',
        content: <>
        <div>通过「职业规划」、「简历代投」、「内推服务」、「面试辅导」等全链条服务保障同学上岸。如若在服务期内未拿到offer，则有退款机制。</div>
            {/* <ol className='list-decimal'>
                <li> 通过「职业规划」、「简历代投」、「内推服务」、「面试辅导」等全链条服务保障同学上岸。如若在服务期内未拿到offer，则有退款机制。</li>
            </ol> */}
        </>,
    },
    {
        id: 2,
        title: 'H1B offer保障是什么意思？',
        content: <>项目保障报名学员拿到的offer公司可以提供H1B工作签证，为学员之后在美国发展解决身份问题。</>,
    },
    {
        id: 3,
        title: '简历代投服务是怎么做的？',
        content: <>服务团队每日会根据同学精修后简历，投递最新开放出适合的职位，让学员不错过职位机会。</>,
    },
    {
        id: 4,
        title: '内推服务是怎么做的？',
        content: <>服务团队会根据投递职位在LinkedIn上做Networking，极大增加拿到面试的机会</>,
    },
    {
        id: 5,
        title: '1v1求职辅导授课有多少课时？',
        content: <>保offer项目学员的1v1求职辅导课时数不限，具体会根据学员简历修改情况、接到面试情况来安排</>,
    },
    {
        id: 6,
        title: '1v1求职辅导授课导师都是什么背景？',
        content: <>授课导师均在美国知名企业就职，包括但不限于Goldman Sachs、McKinsey、Google、Amazon、EY等投行和互联网大厂。服务团队会根据学员求职方向，安排同方向讲师授课。</>,
    },
    {
        id: 7,
        title: '1v1求职辅导授课形式是什么？一节课时间多长？',
        content: <>1v1求职辅导为直播课形式，一节课时长1小时。</>,
    },
    {
        id: 8,
        title: '保offer项目学员简历是否可以增加实习项目？',
        content: <>保offer项目学员可根据自己的求职方向添加对应的在美实习经验，实习项目方向包括数据分析、量化与风险管理、投行建模、全栈开发四个方向。</>,
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
    },{
        id: 2,
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
    },{
        id: 3,
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