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
        title: 'H1b offer保障是什么意思？',
        content: <>项目保障报名学员拿到的offer公司可以提供H1b工作签证，为学员之后在美国发展解决身份问题。</>,
    },
    {
        id: 3,
        title: '简历代投服务是怎么做的？',
        content: <>服务团队每日会根据同学精修后简历，投递最新开放出适合的职位，让学员不错过职位机会。</>,
    },
    {
        id: 4,
        title: '内推服务是怎么做的？',
        content: <>服务团队会根据投递职位在LinkedIn上做Networking，极大增加拿到面试的机会。</>,
    },
    {
        id: 5,
        title: '1v1求职辅导授课有多少课时？',
        content: <>保offer项目学员的1v1求职辅导课时数不限，具体会根据学员简历修改情况、接到面试情况来安排。</>,
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


export const projectProcessData: (any) = [
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
                title: '简历服务/Resume',
                content: [
                    <div key={1} className='project_process_para'>根据original resume，引导同学进行brainstorm</div>,
                    <div key={2} className='project_process_para'>详细了解同学的每段过往work experience</div>,
                    <div key={3} className='project_process_para'>确定简历修改方向</div>,
                    <div key={4} className='project_process_para'>同时帮助同学准备精修简历内容</div>,
                    <div key={5} className='project_process_para'>提供相关内容的学习资料</div>,
                    <div key={6} className='project_process_para'>解析简历修改逻辑及每个bullet内容</div>,

                    <h2 key={7} className='project_process_title2'>阶段中，涉及到的资料有：</h2>,
                    <div key={8} className='project_process_para'>同学简历</div>,
                    <div key={9} className='project_process_para'>简历相关学习资料</div>,
                    <div key={10} className='project_process_para'>简历修改逻辑与详细解析</div>,
                ]
            },
       ],
    },{
        id: 3,
       processes: [
            {
                title: '内推服务/Internal Referral',
                content: [
                    <div key={1} className='project_process_para'>根据同学求职目标，为其推荐最匹配的实习或全职职位</div>,
                    <div key={2} className='project_process_para'>带领同学深度使用领英</div>,
                    <div key={3} className='project_process_para'>进行求职社交技能培训</div>,
                    <div key={4} className='project_process_para'>辅导同学精修cover letter、networking email、thank you letter、follow-up email</div>,

                    <h2 key={5} className='project_process_title2'>阶段中，涉及到的资料有：</h2>,
                    <div key={6} className='project_process_para'>Profile Headline</div>,
                    <div key={7} className='project_process_para'>LinkedIn Message</div>,
                    <div key={8} className='project_process_para'>社交邮件优秀案例</div>,
                    <div key={9} className='project_process_para'>求职信优秀案例/模板</div>,
                    <div key={10} className='project_process_para'>LinkedIn社交注意事项</div>,
                ]
            },
       ],
    },{
        id: 4,
       processes: [
            {
                title: '面试服务/Interview',
                content: [
                    <div key={1} className='project_process_para'>对同学进行行业知识与技术知识（Industry knowledge & Technical knowledge）培训</div>,
                    <div key={2} className='project_process_para'>带领同学学习JD（Job Description）的解读，进行行为面试、技术面试指导，以及如何讲好backup story（背景故事）</div>,
                    <div key={3} className='project_process_para'>最终带领同学进行模拟面试与评估以及面试谈判技巧指导</div>,

                    <h2 key={5} className='project_process_title2'>阶段中，涉及到的资料有：</h2>,
                    <div key={6} className='project_process_para'>行为面试Q&A</div>,
                    <div key={7} className='project_process_para'>技术面试Q&A</div>,
                    <div key={8} className='project_process_para'>工作经历backup story</div>,
                    <div key={9} className='project_process_para'>面试试题</div>,
                    <div key={10} className='project_process_para'>学习资源</div>,
                ]
            },
       ],
    },

];