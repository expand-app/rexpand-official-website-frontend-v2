import { NextPage } from "next";
import styles from './index.module.css';
import Button, { ButtonColor, ButtonRadius, ButtonSize, ButtonType } from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import bannerImage from '@/assets/success-cases/banner.png';
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import greenGradientBgImg from '@/assets/success-cases/green_gradient.svg'
import TopOfferList from "./components/TopOfferList/TopOfferList";
import { studentExperienceListData, topOffersData } from "@/data/success_cases";
import StudentExperienceList from "./components/StudentExperienceList/StudentExperienceList";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";

const SuccessCasesPage: NextPage = () => {
    return (
        <div className={styles.page}>
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
                        backgroundSize: '100% auto',
                    }
                    }>
                        <div className="container mx-auto">
                            <TopOfferList data={topOffersData}/>
                        </div>
                    </div>
                   
                </div>

                <div className={clsx('section', styles.section2)} style={{background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(125, 209, 147, 0.2))`}}>
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
        </div>
    );
}

export default SuccessCasesPage;