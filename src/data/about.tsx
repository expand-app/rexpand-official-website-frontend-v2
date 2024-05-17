import lAvatarImg from '@/assets/about/team-member/avatar_l.png';
import jimmyAvatarImg from '@/assets/about/team-member/avatar_jimmy.png';
import maxAvatarImg from '@/assets/about/team-member/avatar_max.png';
import yangAvatarImg from '@/assets/about/team-member/avatar_yang.png';
import jiexuanAvatarImg from '@/assets/about/team-member/avatar_jiexuan.png';
import leoAvatarImg from '@/assets/about/team-member/avatar_leo.png';
import teddyAvatarImg from '@/assets/about/team-member/avatar_teddy.png';
import bobbyAvatarImg from '@/assets/about/team-member/avatar_bobby.png';

import { MemberData } from '@/components/TeamMemberCard/TeamMemberCard';


export const membersData: MemberData[] = [
    {
        id: 1,
        name:'Lance老师',
        avatar: lAvatarImg,
        jobTitle: '担任知名银行的VP兼Senior Manager',
        majorArea: ['Data Engineer','Data Analytics'],
    },
    {
        id: 2,
        name:'Jimmy老师',
        avatar: jimmyAvatarImg,
        jobTitle: 'AWS资深软件工程师',
        majorArea: ['Machine Learning','Software Engineer'],
    },
    {
        id: 3,
        name:'Max老师',
        avatar: maxAvatarImg,
        jobTitle: '就职于FLAG中的一家，多年CS方向求职辅导经验',
        majorArea: ['Soft Development Engineer','Machine Learning Engineer','Front-end Engineer'],
    },
    {
        id: 4,
        name:'Yang老师',
        avatar: yangAvatarImg,
        jobTitle: '担任Goldman Sachs信贷量化研究VP',
        majorArea: ['Risk Management','Quantitative Finance', 'Trading'],
    },
    {
        id: 5,
        name:'Jiexuan老师',
        avatar: jiexuanAvatarImg,
        jobTitle: '资深金融分析师，曾任职高盛投行部和普华永道咨询部',
        majorArea: ['Financial Planning & Analysis','Investment Banking', 'Banking Operations'],
    },
    {
        id: 6,
        name:'Leo老师',
        avatar: leoAvatarImg,
        jobTitle: '任职Amazon Alexa组，在零售行业和电子商务方向多年数据分析经验',
        majorArea: ['Business Analyst','Data Analytics', 'Data Science'],
    },
    {
        id: 7,
        name:'Teddy老师',
        avatar: teddyAvatarImg,
        jobTitle: '担任JPMorgan VP，Quant Modeling Lead',
        majorArea: ['Quant modeling','Quantitative Finance', 'Risk Management'],
    },
    {
        id: 8,
        name:'Bobby老师',
        avatar: bobbyAvatarImg,
        jobTitle: '任职McKinsey管理咨询顾问，曾任职高盛投行部',
        majorArea: ['Consulting','Case Interview'],
    },
];

