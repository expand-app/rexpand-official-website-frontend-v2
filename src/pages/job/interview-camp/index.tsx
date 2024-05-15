import React, { useMemo, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Image from 'next/image';
import bannerRightImage from '@/assets/interview-camp/banner_right.png';
import bannerBgImage from '@/assets/interview-camp/banner_bg.png';
import mBannerBgImage from '@/assets/interview-camp/m_banner_bg.png';
import Button, { ButtonRadius, ButtonSize, ButtonType } from '@/components/Button/Button';
import courceBgImg from '@/assets/interview-camp/course_bg.png';
import mCourceBgImg from '@/assets/interview-camp/m_course_bg.png';
import clsx from 'clsx';
import Accordion from '@/components/Accordion/Accordion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { daysToNow, formatDate } from '@/utils/Utils';
import { courceArrangementData, interviewCampFAQData, whyJoinData } from '@/data/interview_camp';
import WhyJoinList from './WhyJoinList/WhyJoinList';
import CourseArrangement from './CourseArrangement/CourseArrangement';
import BannerOverlayCard from '@/components/BannerOverlayCard/BannerOverlayCard';
import useScreen from '@/components/useScreen/useScreen';
import CampBannerOverlayCard from './CampBannerOverlayCard/CampBannerOverlayCard';

const nextCourceTime = new Date('2024-05-12');

export const InterviewCampPage: NextPage = () => {
  const { isMobile } = useScreen();
 
  return (
      <>
        <Head>
          <title>睿思班 | 让内推引领求职</title>
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
        <div>
            {isMobile?.()? 
            <MobileView />
            :
            <PCView/>
            }
        </div>
      </>
  );
}


export const MobileView = () => {
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
      
      <Header theme={Theme.TRANSPARENT} />
      <main className=''>
        <div className={`${styles.m_banner_container} m_internship_banner_container flex flex-col items-center relative`}
            style={{
              backgroundImage: `url(${mBannerBgImage.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 -70px',
              maxHeight: 453,
            }}>
           
           <div className='flex flex-col items-center justify-center px-22px'>
               <div className={styles.m_banner_text}>
                <h1 className={clsx(styles.m_banner_title)}>面试集训营</h1>
                <h2 className={clsx(styles.m_banner_subtitle1)}>只要99元，5天时间全面掌握北美面试技巧</h2>
                <h3 className={clsx(styles.m_banner_subtitle2)}>下次开课：<span className='font-w500 font-m'>{formatDate(nextCourceTime)}</span> 倒计时：<span className={styles.m_count_down_num}>{courseDaysLeft}</span>天</h3>

                  <Button
                      className={styles.m_banner_btn}
                      type={ButtonType.SOLID} 
                      size={ButtonSize.MIDDLE} 
                      radius={ButtonRadius.ROUNDED}
                      text="立即报名" />
              </div>
              {/* <div className='flex-1'>
                <Image src={bannerRightImage} alt="Banner" className={clsx('',styles.banner_img)}/>
              </div> */}
            </div>
            
            <BannerOverlayCard 
              cardClassName='w-p85'
              data={[{
                id: 1,
                title: '课程时长',
                content: '5天时间，从Hirevue到经典BQ问题，快速掌握北美求职核心面试能力',
              },{
                id: 2,
                title: '适合学员',
                content: 'Entry level求职北美留学生，对北美面试不了解，需要快速提升能力的求职者',
              },{
                id: 3,
                title: '求职方向',
                content: ['不限求职方向', '数据、金融、技术、软件开发等等方向均可报名'],
              }]}
              className={clsx("",styles.m_banner_overlay)} />

        </div>
       

        <div className='bg-white pb-24 section' style={{
          background: 'linear-gradient(180deg, #EEFFFC00 0%, #7DD19366 100%)',
          paddingTop: 350,
          
          }}>

            <div className='px-12px'>
              <SectionTitle 
                title='为什么要参加？'
                className='mb-60px'/>

              <WhyJoinList data={whyJoinData} />
            </div>
        </div>

        <div className='bg-white section' style={{
          backgroundImage: `url(${mCourceBgImg.src})`,
          backgroundSize: '100% 100%',
          backgroundPosition: '0,0',
          padding: '67px 0 66px 0'
        }}>
            <SectionTitle 
                    title={<><span style={{color: '#008A27'}}>面试集训营</span>课程安排</>} 
                    />
            
            <div className={styles.m_course_arra_content}>
              <CourseArrangement data={courceArrangementData}/>
            </div>
        </div>


        <div className='bg-white section m_internship_faq_section'>
          <div className='px-12px'>
          <SectionTitle 
                    title='常见问题'
                    className='internship_faq_title' 
                    />
            <Accordion data={interviewCampFAQData}/>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};


export const PCView = () => {
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
      <Header theme={Theme.TRANSPARENT} />
      <main className=''>
        <div className={`${styles.banner_container} internship_banner_container flex items-center relative`} 
            style={{
              backgroundImage: `url(${bannerBgImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center w-p85'>
              <div className="z-10 pt-0 flex-1">
                  <h1 className='text-white mb-6 banner_text font-sb'>面试集训营</h1>
                  <h2 className='text-base text-white mb-1 font-m font-22 font-w500 mb-7px'>只要99元，5天时间全面掌握北美面试技巧</h2>
                  <h3 className=' text-white font-16 font-w400'>下次开课：<span className='font-w500'>{formatDate(nextCourceTime)}</span> 倒计时：<span className={styles.count_down_num}>{courseDaysLeft}</span>天</h3>

                  <Button
                      className={styles.banner_btn}
                      type={ButtonType.SOLID} 
                      size={ButtonSize.MIDDLE} 
                      text="立即报名" />
              </div>
              <div className='flex-1'>
                <Image src={bannerRightImage} alt="Banner" className={clsx('',styles.banner_img)}/>
              </div>
            </div>
            <CampBannerOverlayCard
              cardClassName='w-p85'
              data={[{
                id: 1,
                title: '课程时长',
                content: '5天时间，从Hirevue到经典BQ问题，快速掌握北美求职核心面试能力',
              },{
                id: 2,
                title: '适合学员',
                content: 'Entry level求职北美留学生，对北美面试不了解，需要快速提升能力的求职者',
              },{
                id: 3,
                title: '求职方向',
                content: ['不限求职方向', '数据、金融、技术、软件开发等等方向均可报名'],
              }]}
              className={clsx("",styles.banner_overlay)} />

        </div>
       

        <div className='bg-white pb-24 section' style={{
          background: 'linear-gradient(180deg, #EEFFFC00 0%, #7DD19366 100%)',
          paddingTop: 290,
          
          }}>
            <div className='container mx-auto w-3/4'>
              <SectionTitle 
                title='为什么要参加？'
                className='mb-60px'/>

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
                    title={<><span style={{color: '#008A27',marginRight:12}}>面试集训营</span>课程安排</>} 
                    className='mb-12'/>
            
            <CourseArrangement data={courceArrangementData}/>
          </div>
        </div>


        <div className='bg-white section internship_faq_section'>
          <SectionTitle 
                    title='常见问题'
                    className='internship_faq_title' 
                    />
          <div className='container mx-auto flex flex-col justify-center md:w-5/6'>
            <Accordion data={interviewCampFAQData}/>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};
export default InterviewCampPage;
 
// DataAnalysisPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <InternshipLayout>
//         {page}
//     </InternshipLayout>
//   )
// }

