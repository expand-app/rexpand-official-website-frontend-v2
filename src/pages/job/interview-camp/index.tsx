import React, { useMemo, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Image from 'next/image';
import bannerRightImage from '@/assets/interview-camp/banner_right.png';
import Button, { ButtonSize, ButtonType } from '@/components/Button/Button';
import courceBgImg from '@/assets/interview-camp/course_bg.png';
import clsx from 'clsx';
import Accordion from '@/components/Accordion/Accordion';
import FloatMenu from '@/components/FloatMenu/FloatMenu';
import { internshipMenusData } from '@/data/internship';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { daysToNow, formatDate } from '@/utils/Utils';
import { courceArrangementData, interviewCampFAQData, whyJoinData } from '@/data/interview_camp';
import WhyJoinList from './WhyJoinList/WhyJoinList';
import CourseArrangement from './CourseArrangement/CourseArrangement';

const nextCourceTime = new Date('2024-05-12');

export const DataAnalysisPage: NextPage = () => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();
  // const [courseDaysLeft, setCourseDaysLeft] = useState<number>(0);

  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex)
  };

  const courseDaysLeft = useMemo(()=>{
    return daysToNow(nextCourceTime);
  },[]); 

  return (
    <div>
      <Head>
        <title>面试集训营 - 求职项目 - Rexpand</title>
        <meta
          name="description"
          content="Learn more about My Company, our mission, and what we do."
        />
        <meta property="og:title" content="About Us - My Company" />
        <meta
          property="og:description"
          content="Learn more about My Company, our mission, and what we do."
        />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yourwebsite.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "My Company",
            url: "https://www.yourwebsite.com",
            logo: "https://www.yourwebsite.com/logo.png",
          })}
        </script>
      </Head>
      <Header theme={Theme.TRANSPARENT} />
      <main className=''>
        <div className={`${styles.banner_container} internship_banner_container flex items-center relative`} 
            style={{
              backgroundImage: `linear-gradient(to right, #007722, #96D8BA)`,
              minHeight: 600,
              backgroundSize: '100% auto',
              backgroundPosition: '0 0',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center w-3/4'>
              <div className="z-10 pt-0 flex-1">
                  <h1 className='text-4xl text-white mb-6 banner_text'>面试集训营</h1>
                  <h2 className='text-base text-white mb-1 banner_subtitle'>只要99元，5天时间全面掌握北美面试技巧</h2>
                  <h3 className='text-sm text-white mb-16 banner_subtitle'>下次开课：{formatDate(nextCourceTime)} 倒计时：<span className='bg-white text-black px-1 mr-1'>{courseDaysLeft}</span>天</h3>

                  <Button
                      className="z-10"
                      type={ButtonType.BORDERED} 
                      size={ButtonSize.MIDDLE} 
                      text="咨询项目" />
              </div>
              <div className='flex-1'>
                <Image src={bannerRightImage} alt="Banner" className={clsx('',styles.banner_img)}/>
              </div>
            
              <div className={clsx('bg-white md:w-5/6 flex flex-col md:flex-row gap-24 px-20 py-12 rounded-lg -ml-2 -mb-32', styles.banner_overlay)}>
                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>课程时长</h1>
                  <div className='text-gray-600 text-sm'>5天时间，从Hirevue到经典BQ问题，快速掌握北美求职核心面试能力</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>适合学员</h1>
                  <div className='internship_banner_card_content'>Entry level求职北美留学生，对北美面试不了解，需要快速提升能力的求职者</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>求职方向</h1>
                  <ul className='internship_banner_card_content list'>
                    <li><span>不限求职方向</span></li>
                    <li><span>数据、金融、技术、软件开发等等方向均可报名</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
       

        <div className='bg-white pt-48 pb-24 section' style={{background: 'linear-gradient(180deg, #EEFFFC00 0%, #7DD19366 100%)'}}>
            <div className='container mx-auto w-3/4'>
              <SectionTitle 
                title='为什么要参加？' 
                className='mb-12'/>

              <WhyJoinList data={whyJoinData} />
            </div>
        </div>

        <div className='bg-white py-24 section' style={{
          backgroundImage: `url(${courceBgImg.src})`,
          backgroundSize: '100% auto',
          backgroundPosition: '0,0'
        }}>
          <div className='container mx-auto w-2/3'>
            <SectionTitle 
                    title='面试集训营 课程安排' 
                    className='mb-12'/>
            
            <CourseArrangement data={courceArrangementData}/>
          </div>
        </div>


        <div className='bg-white section internship_faq_section'>
          <SectionTitle 
                    title='常见问题'
                    className='internship_faq_title' 
                    />
          <div className='container mx-auto flex flex-col justify-center md:flex-row md:w-5/6'>
            <Accordion data={interviewCampFAQData}/>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};
export default DataAnalysisPage;
 
// DataAnalysisPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <InternshipLayout>
//         {page}
//     </InternshipLayout>
//   )
// }

