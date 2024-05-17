import deloitteLogoImg from '@/assets/success-cases/logo_deloitte.png';
import bainLogoImg from '@/assets/success-cases/logo_bain.png';
import goldmanSachsLogoImg from '@/assets/success-cases/logo_goldman_sachs.png';
import spotifyLogoImg from '@/assets/success-cases/logo_spotify.png';
import oracleLogoImg from '@/assets/success-cases/logo_oracle.png';
import pwcLogoImg from '@/assets/success-cases/logo_pwc.png';

import {StudentExperienceData} from '@/pages/success-cases/components/StudentExperienceList/StudentExperienceList';
import stuExp1Img from '@/assets/success-cases/stuexp_1.jpg';
import stuExp2Img from '@/assets/success-cases/stuexp_2.jpg';
import stuExp3Img from '@/assets/success-cases/stuexp_3.jpg';
import stuExp4Img from '@/assets/success-cases/stuexp_4.jpg';
import stuExp5Img from '@/assets/success-cases/stuexp_5.png';
import stuExp6Img from '@/assets/success-cases/stuexp_6.jpg';
import stuExp7Img from '@/assets/success-cases/stuexp_7.png';
import stuExp8Img from '@/assets/success-cases/stuexp_8.jpg';
import { TopOfferData } from '@/pages/success-cases/components/TopOfferList/TopOfferList';

export const topOffersData: TopOfferData[] = [
    {
        id: 1,
        companyName: 'Deloitte',
        companyLogo: deloitteLogoImg,
        jobTitle: 'Data Analyst', 
        userName: 'W同学',
        university: '波士顿大学',
        major: 'Data Science专业',
    },

    {
        id: 2,
        companyName: 'Bain',
        companyLogo: bainLogoImg,
        jobTitle: 'Analyst', 
        userName: 'A同学',
        university: '北卡大学教堂山分校',
        major: 'Finance专业',
    },

    {
        id: 3,
        companyName: 'Goldman Sachs',
        companyLogo: goldmanSachsLogoImg,
        jobTitle: 'Equity Research Analyst', 
        userName: 'J同学',
        university: '北卡大学教堂山分校',
        major: 'Finance专业',
    },

    {
        id: 4,
        companyName: 'Spotify',
        companyLogo: spotifyLogoImg,
        jobTitle: 'Data Scientist', 
        userName: 'Y同学',
        university: '马里兰大学',
        major: 'Data Science',
    },

    {
        id: 5,
        companyName: 'Oracle',
        companyLogo: oracleLogoImg,
        jobTitle: 'Data Management Associate', 
        userName: 'L同学',
        university: 'Duke University',
        major: 'Computer Science',
    },

    {
        id: 6,
        companyName: 'PwC',
        companyLogo: pwcLogoImg,
        jobTitle: 'Financial Analyst', 
        userName: 'L同学',
        university: 'Ohio State University',
        major: 'Finance',
    },

    
];

export const studentExperienceListData: StudentExperienceData[] = [
    {
        id: 1,
        userName: 'Annie',
        image: stuExp1Img,
        university: 'University of Illinois at Chicago',
        major: 'Master of Business Administration',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/annie.mp4',
    },
    {
        id: 2,
        userName: 'Jeff',
        image: stuExp2Img,
        university: 'University of California, Los Angeles',
        major: 'Financial Mathematics',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/jeff.mp4',
    },
    {
        id: 3,
        userName: 'Emily',
        image: stuExp3Img,
        university: 'University of Texas at Arlington',
        major: 'Data Science',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/emily.mp4',
    },
    {
        id: 4,
        userName: 'Frank',
        image: stuExp4Img,
        university: 'Washington University in St. Louis',
        major: 'Data Science',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/frank.mp4',
    },
    {
        id: 5,
        userName: 'Tianqi',
        image: stuExp5Img,
        university: 'University of Southern California',
        major: 'Computer Science',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/tianqi.mp4',
    },
    {
        id: 6,
        userName: 'Nancy',
        image: stuExp6Img,
        university: 'Johns Hopkins University',
        major: 'Fiance',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/nancy.mp4',
    },
    {
        id: 7,
        userName: 'Tom',
        image: stuExp7Img,
        university: 'University of San Francisco',
        major: 'Data Science',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/tom.mp4',
    },
    {
        id: 8,
        userName: 'Jassica',
        image: stuExp8Img,
        university: 'Florida State University',
        major: 'Data Science',
        videoUrl: 'http://resources.rexpandcareer.com/videos/students/jessica.mp4',
    }
];
