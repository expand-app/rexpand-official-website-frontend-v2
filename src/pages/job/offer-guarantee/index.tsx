import React, { ReactElement, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Image from 'next/image';
import bannerImage from '@/assets/job/offer-guarantee/banner.png';
import Button, { ButtonSize, ButtonType } from '@/components/Button/Button';
import VideoCard from '@/components/VideoCard/VideoCard';
import bannerVideoImage from '@/assets/job/internship/data-analysis/banner_video.png';
import clsx from 'clsx';
import Accordion from '@/components/Accordion/Accordion';
import FloatMenu from '@/components/FloatMenu/FloatMenu';
import { internshipMenusData } from '@/data/internship';
import { offerGuaranteeFAQData, projectProcessData } from '@/data/offer_guarantee';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import VerticalTabs from '@/components/VerticalTabs/VerticalTabs';
import { offerGuaranteeTabsData } from '@/data/home';
import googleImage from '@/assets/job/offer-guarantee/logo_google.png';
import deloitteImage from '@/assets/job/offer-guarantee/logo_deloitte.png';
import spotifyImage from '@/assets/job/offer-guarantee/logo_spotify.png';
import amazonImage from '@/assets/job/offer-guarantee/logo_amazon.png';
import facebookImage from '@/assets/job/offer-guarantee/logo_facebook.png';
import PersonalizedCourse from './components/PersonalizedCourse/PersonalizedCourse';
import ProjectProcess from './components/ProjectProcess/ProjectProcess';


export const DataAnalysisPage: NextPage = () => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();

  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex)

    
  };

  return (
    <div>
      <Head>
        <title>保offer项目 - 求职项目 - Rexpand</title>
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
      <Header theme={Theme.LIGHT}/>
      <main className='mt-20 mb-12'>
        <div className={`${styles.banner_container} flex items-center relative`} 
            style={{
              backgroundImage: `linear-gradient(to right, #007722, #96D8BA)`,
              minHeight: 600,
              backgroundSize: '100% auto',
              backgroundPosition: '0 0',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-10/12'>
              <div className="z-10 pt-0 pl-20 flex-1">
                  <h1 className={clsx('text-4xl text-white z-10 mb-3 banner_text', styles.banner_title)}>保offer项目</h1>
                  <h2 className={clsx('text-base text-white opacity-70 z-10  mb-16', styles.banner_subtitle)}>超高频次内推，全流程求职服务，保证高薪名企Offer</h2>

                  <Button
                      className="z-10"
                      type={ButtonType.BORDERED} 
                      size={ButtonSize.MIDDLE} 
                      text="咨询项目" />
              </div>
              <Image src={bannerImage} alt="Banner" height={460} className={clsx('flex-1', styles.banner_img)}/>
            </div>
        </div>
       

        <div className={clsx('bg-white pt-24 section', styles.section1)} style={{
          background: '#F7FBF8'
        }}>
            <div className='container mx-auto'>
              <SectionTitle 
                title='什么是保Offer项目' 
                subtitle='项目针对北美留学生设计，保证sponsor H1b工作offer。9年多的时间积累留学生求职辅导经验，项目已经累计帮助2000多位学员拿到北美offer'
                className='mb-12'/>
              
              <div className={clsx('flex flex-col md:flex-row gap-16 w-full items-center justify-between overflow-auto', styles.logo_list)}>
                <Image src={googleImage} alt="Google" />
                <Image src={deloitteImage} alt="Deloitte" />
                <Image src={spotifyImage} alt="Spotify" />
                <Image src={amazonImage} alt="Amazon" />
                <Image src={facebookImage} alt="Facebook" />
              </div>
              
              <VerticalTabs data={offerGuaranteeTabsData}/>
            </div>
        </div>

        <div className={clsx('bg-white section', styles.section2)}>
          <div className='container mx-auto w-2/3'>
            <SectionTitle 
                    title='个性化安排课程' 
                    className='mb-12'/>
            
            <PersonalizedCourse/>
          </div>
        </div>

        <div  className={clsx('section', styles.section3)}>
          <div className='container mx-auto w-3/4'>
            <SectionTitle 
                    title='项目安排' 
                    className='mb-12'/>
            
            <ProjectProcess data={projectProcessData}/>
          </div>
        </div>

        <div className={clsx('bg-white section internship_faq_section', styles.section4)}>
          <div className='container mx-auto'>
            <SectionTitle 
                      title='常见问题' 
                      className='internship_faq_title'/>

              <Accordion data={offerGuaranteeFAQData}/>
            {/* <div className='container mx-auto flex flex-col justify-center py-12 md:flex-row md:w-5/6'>
            </div> */}
          </div>
        </div>

        <FloatMenu 
          className='fixed right-2 top-1/2' 
          data={internshipMenusData} 
          activeIndex={activeFloatMenuIndex}
          onChange={onFloatMenuChange}/>
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
