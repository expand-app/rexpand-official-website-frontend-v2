import gzhIcon from '@/assets/icon_gzh.png';
import wechatvideoIcon from '@/assets/icon_wechatvideo.png';
import linkedInIcon from '@/assets/icon_linkedin.png';
import xiaohongshuIcon from '@/assets/icon_xiaohongshu.png';

import { SocialLinkData } from '@/components/SocialLinks/SocialLinks';


export const socialLinksData: SocialLinkData[] = [
    {
        id: 1,
        name: '微信公众号',
        icon: gzhIcon,
        link: 'https://mp.weixin.qq.com/s?__biz=Mzg3ODg2OTA0Nw==&mid=2247490690&idx=1&sn=72fa5936186ec54e86c39635427e823e&chksm=cf0c73daf87bfacc9828ce6e4af4fc3c4b1abe878ec79ad5da56e622d3bc80b3d600cf98d6dd#rd',
    },
    {
        id: 2,
        name: '微信视频号',
        icon: wechatvideoIcon,
        link: 'https://weixin.qq.com/sph/AuxoRHASb',
    },
    {
        id: 3,
        name: 'LinkedIn',
        icon: linkedInIcon,
        link: 'https://www.linkedin.com/company/rexpandcareer/',
    },
    {
        id: 4,
        name: '小红书',
        icon: xiaohongshuIcon,
        link: 'https://www.xiaohongshu.com/user/profile/5c87d436000000001602db68?xhsshare=CopyLink&appuid=5c87d436000000001602db68&apptime=1714360111',
    },
    
];

