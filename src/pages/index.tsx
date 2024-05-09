import Button, { ButtonColor, ButtonRadius, ButtonSize, ButtonType } from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import clsx from "clsx";
import { NextPage } from "next";
import bannerImg from '@/assets/home/banner.png';
import offer1Img from '@/assets/home/offer_1.svg';
import styles from './index.module.css';
import Image from "next/image";
import VerticalTabs from "@/components/VerticalTabs/VerticalTabs";
import {offerGuaranteeTabsData, internshipProjectCardsData, interviewCampData} from '@/data/home';
import internshipProjectBgImg from '@/assets/home/bg_internship_project.png';
import InternshipProjectCards from "./index/components/InternshipProjectCards/InternshipProjectCards";
import InterviewCamp from "./index/components/InterviewCamp/InterviewCamp";
import Link from "next/link";
import Head from "next/head";

export const HomePage: NextPage = () => {

  return (<>
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
      <Header />
      <>
        <div className={`flex flex-col items-center  justify-center page-banner ${styles.banner_container}`} style={{backgroundImage: `url(${bannerImg.src})`}}>
          <h1 className={clsx('text-white z-10', styles.banner_text)}>北美留学生 求职一站式服务</h1>
          <Link href='/job/offer-guarantee' className="z-10">
            <Button 
              type={ButtonType.SOLID} 
              size={ButtonSize.MIDDLE} 
              color={ButtonColor.WHITE}
              radius={ButtonRadius.NONE}
              text="了解更多" 
              />
          </Link>
        </div>

        <div className={clsx('bg-white section', styles.section)}>
          <div className="container mx-auto flex flex-col items-center">
            <SectionTitle 
              className={styles.section_title}
              title='保Offer求职项目'
              subtitle='锁定心仪offer，拿不到Offer退款'/>

            <VerticalTabs data={offerGuaranteeTabsData}/>
            
            <Link href='/job/offer-guarantee' className="z-10">
              <Button 
                type={ButtonType.BORDERED} 
                size={ButtonSize.MIDDLE} 
                color={ButtonColor.GREEN}
                radius={ButtonRadius.NONE}
                text="查看详情" />
            </Link>
          </div>
        </div>

        <div 
          className={clsx('bg-white relative section',styles.section)}
          style={{
            backgroundImage: `url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
          }}>
          
          <div className="container mx-auto overflow-auto">
            <SectionTitle 
              className={styles.section_title}
              title='实习项目'
              subtitle='超多机会，领航职业起点'/>
            <InternshipProjectCards data={internshipProjectCardsData} />
          </div>
          
          {/* <div className={'absolute top-0 left-0 w-full h-full z-0 grayscale'} style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div> */}
        </div>

        <div className={clsx('bg-white text-center section',styles.section)}>
          <div className="container mx-auto overflow-auto">
            <SectionTitle 
              className={styles.section_title}
              title='面试集训营'
              subtitle='超强指导，助力每个机会'/>

            <InterviewCamp className={styles.interview_camp_cards} data={interviewCampData} />
            <Link href='/job/interview-camp' className="z-10">
              <Button text='查看课程' 
                type={ButtonType.GRADIENT} 
                size={ButtonSize.MIDDLE} 
                radius={ButtonRadius.NONE}
                />
            </Link>
          </div>
        </div>

      </>
      <Footer />
      </div>
    </>);
};

export default HomePage;
