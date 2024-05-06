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

export const HomePage: NextPage = () => {
  return (<>
      <Header />
      <>
        <div className={`py-56 flex flex-col items-center ${styles.banner_container}`} style={{backgroundImage: `url(${bannerImg.src})`}}>
          <h1 className='text-4xl text-white mb-20 z-10'>北美留学生求职一站式服务</h1>
          <Button 
            className="z-10"
            type={ButtonType.BORDERED} 
            size={ButtonSize.MIDDLE} 
            color={ButtonColor.WHITE}
            text="了解更多" />
        </div>

        <div className='bg-white py-16 px-16 flex flex-col items-center'>
          <div className="container mx-auto px-4 md:px-20">
            <SectionTitle 
              className='mb-4'
              title='保Offer求职项目'
              subtitle='锁定心仪offer，拿不到Offer退款'/>

            <VerticalTabs data={offerGuaranteeTabsData}/>
            
            <Button 
              className="mt-8"
              type={ButtonType.BORDERED} 
              size={ButtonSize.MIDDLE} 
              color={ButtonColor.GREEN}
              text="查看详情" />
          </div>

        </div>

        <div 
          className='bg-white py-16 relative'
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
          
          <div className="relative sm:px-0 md:px-10">
            <div className="container mx-auto px-4 md:px-20">
              <SectionTitle 
                className="mb-12"
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

        <div className='bg-white py-16 text-center'>
          <div className="container mx-auto px-4 md:px-20">
            <SectionTitle 
              title='面试集训营'
              subtitle='超强指导，助力每个机会'/>

            <InterviewCamp className="my-14" data={interviewCampData} />
            <Button text='查看课程' 
              type={ButtonType.GRADIENT} 
              size={ButtonSize.MIDDLE} />
          </div>
        </div>

      </>
      <Footer />
    </>);
};

export default HomePage;
