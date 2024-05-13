import { NextPage } from "next";
import styles from './index.module.css';
import Button, { ButtonColor, ButtonRadius, ButtonSize, ButtonType } from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import bannerImage from '@/assets/success-cases/banner.png';
import mBannerImg from '@/assets/success-cases/m_banner_img.png';

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import greenGradientBgImg from '@/assets/success-cases/green_gradient.svg'
import TopOfferList from "./components/TopOfferList/TopOfferList";
import { studentExperienceListData, topOffersData } from "@/data/success_cases";
import StudentExperienceList from "./components/StudentExperienceList/StudentExperienceList";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import Head from "next/head";
import useScreen from "@/components/useScreen/useScreen";

const SuccessCasesPage: NextPage = () => {

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

function MobileView() {
    return (
        <main className="m-main">
           <Header />
            <>
                <div className={`py-0 flex flex-col justify-center relative ${styles.m_banner_container}`}
                    style={{backgroundImage: `url(${mBannerImg.src})`}}
                >
                    {/* <Image className={styles.banner_img} src={bannerImage} alt='Banner'/> */}
                    {/* <div className={styles.m_banner_img_box}>
                        <Image alt="" src={require('@/assets/success-cases/m_banner_img.png')} className={styles.m_banner_img}/>
                    </div> */}
                    <div className={styles.m_banner_content}>
                        <h1 className='font-m font-w600 font-48 text-white mb-20 z-10 m-banner-text'>看Claire如何斩获<br />上市公司FA offer</h1>
                        <Button 
                            className={styles.m_banner_btn}
                            type={ButtonType.BORDERED} 
                            size={ButtonSize.MIDDLE} 
                            radius={ButtonRadius.NONE}
                            color={ButtonColor.WHITE}
                            text="点击查看" />
                    </div>
                </div>

                <div className={clsx('bg-white section', styles.m_section1)}>
                    <div className="container mx-auto">
                    <SectionTitle 
                            className={styles.m_section_title1}
                            title="学员Offer榜" 
                            subtitle="恭喜学员们斩获金融、咨询、数据等多个领域的Offer" 
                            />
                    </div> 
                    <div className={styles.m_top_offer_content}>
                        <TopOfferList data={topOffersData}/>
                    </div>
                   
                </div>

                <div className={clsx('section', styles.m_section2)} style={{background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(125, 209, 147, 0.2)), white`}}>
                    <SectionTitle 
                        className={styles.m_section_title2}
                        title="学员心得"
                        />
                    <div className={styles.m_stu_exp_content}>
                        <StudentExperienceList data={studentExperienceListData} />
                    </div>
                </div>
            </>

            <Footer />
        </main>
    );
}

function PCView() {
    return (
        <main className={'main'}>
           <Header />
            <>
                <div className={`py-0 flex flex-col justify-center relative ${styles.banner_container}`} 
                    style={{backgroundImage: `linear-gradient(to right, #007722, #96D8BA)`}}>
                    {/* <Image className={styles.banner_img} src={bannerImage} alt='Banner'/> */}
                    <video className={styles.banner_video} autoPlay muted loop >
                        <source src="http://resources.rexpandcareer.com/videos/cases/successful-cases.mov" type="video/mp4" />
                    </video>
                    <div className="text-center z-10 pt-36">
                        <h1 className='font-m font-w600 font-48 text-white mb-20 z-10 banner_text'>看Claire如何斩获上市公司FA offer</h1>
                        <Button 
                            className="z-10 rounded-none"
                            type={ButtonType.SOLID} 
                            size={ButtonSize.MIDDLE} 
                            radius={ButtonRadius.NONE}
                            color={ButtonColor.GREEN}
                            text="点击查看" />
                    </div>
                </div>

                <div className={clsx('bg-white section', styles.section1)}>
                    <div className="container mx-auto">
                    <SectionTitle 
                            className={styles.section_title1}
                            title="学员Offer榜" 
                            subtitle="恭喜学员们斩获金融、咨询、数据等多个领域的Offer" 
                            />
                    </div> 
                    <div className="pt-20" style={{
                        backgroundImage: `url(${greenGradientBgImg.src})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize: 'cover',
                    }
                    }>
                        <div className="container mx-auto">
                            <TopOfferList data={topOffersData}/>
                        </div>
                    </div>
                   
                </div>

                <div className={clsx('section', styles.section2)} style={{background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(125, 209, 147, 0.2)), white`}}>
                    <div className="container mx-auto">
                        <SectionTitle 
                            className={styles.section_title2}
                            title="学员心得"
                            />
                        <div className="">
                            <StudentExperienceList data={studentExperienceListData} />
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </main>
    );
}

export default SuccessCasesPage;