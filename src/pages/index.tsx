import Button, { ButtonColor, ButtonSize, ButtonType } from "@/components/Button/Button";
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

export const HomePage: NextPage = () => {

  return (<>
      <Header />
      <>
        <div className={`flex flex-col items-center  justify-center page-banner ${styles.banner_container}`} style={{backgroundImage: `url(${bannerImg.src})`}}>
          <h1 className={clsx('text-white z-10', styles.banner_text)}>北美留学生 求职一站式服务</h1>
          <Link href='/job/offer-guarantee' className="z-10">
            <Button 
              type={ButtonType.BORDERED} 
              size={ButtonSize.MIDDLE} 
              color={ButtonColor.WHITE}
              text="了解更多" 
              />
          </Link>
        </div>

        <div className={clsx('bg-white px-16', styles.section)}>
          <div className="container mx-auto px-4 md:px-20 flex flex-col items-center">
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
                text="查看详情" />
            </Link>
          </div>
        </div>

        <div 
          className={clsx('bg-white relative',styles.section)}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
          
          <div className="relative sm:px-0 md:px-10">
            <div className="container mx-auto px-4 md:px-20 overflow-auto">
              <SectionTitle 
                className={styles.section_title}
                title='实习项目'
                subtitle='超多机会，领航职业起点'/>
              <InternshipProjectCards data={internshipProjectCardsData} />
            </div>
          </div>
          
          {/* <div className={'absolute top-0 left-0 w-full h-full z-0 grayscale'} style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div> */}
        </div>

        <div className={clsx('bg-white text-center',styles.section)}>
          <div className="container mx-auto px-4 md:px-20 overflow-auto">
            <SectionTitle 
              className={styles.section_title}
              title='面试集训营'
              subtitle='超强指导，助力每个机会'/>

            <InterviewCamp className={styles.interview_camp_cards} data={interviewCampData} />
            <Link href='/job/interview-camp' className="z-10">
              <Button text='查看课程' 
                type={ButtonType.GRADIENT} 
                size={ButtonSize.MIDDLE} />
            </Link>
          </div>
        </div>

      </>
      <Footer />
    </>);
};

export default HomePage;
