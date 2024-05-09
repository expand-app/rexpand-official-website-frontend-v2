import React, { ReactElement, useState, useEffect, useRef} from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Image from 'next/image';
import bannerImage from '@/assets/job/internship/data-analysis/banner.png';
import Button, { ButtonSize, ButtonType } from '@/components/Button/Button';
import VideoCard from '@/components/VideoCard/VideoCard';
import bannerVideoImage from '@/assets/job/internship/data-analysis/banner_video.png';
import introImage from '@/assets/job/internship/data-analysis/intro.png';
import sightImage from '@/assets/job/internship/data-analysis/sight.png';
import arrowUpImg from '@/assets/icon_arrow_up.png';
import consultImg from '@/assets/icon_consult.png';
import sendImg from '@/assets/icon_send.png';
import rocketImg from '@/assets/icon_rocket.png';

import clsx from 'clsx';
import Accordion from '@/components/Accordion/Accordion';
import { dataAnalysisFAQData, dataAnalysisOutlineData } from '@/data/data_analysis_internship';
import FloatMenu from '@/components/FloatMenu/FloatMenu';
import { internshipMenusData } from '@/data/internship';
import Outline from '@/pages/job/components/Outline/Outline';
import VideoModal from '@/components/VideoModal/VideoModal';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export const DataAnalysisPage: NextPage = () => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [videoModalPath, setVideoModalPath] = useState<string | undefined>();
  
  const introRef = useRef<HTMLDivElement>(null!);
  const sightRef = useRef<HTMLDivElement>(null!);
  const outlineRef = useRef<HTMLDivElement>(null!);
  const faqRef = useRef<HTMLDivElement>(null!);

  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex)

    if ( newIndex === 0) {
      introRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // useEffect(() => {  
  //   const handleScroll = () => {  
  //     const x = window.scrollX;
  //     const y = window.scrollY;
  //     console.log(x, y);

  //   };  
  
  //   window.addEventListener('scroll', handleScroll);  
  
  //   return () => {  
  //     window.removeEventListener('scroll', handleScroll);  
  //   };  
  // }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px', 
      threshold: 0.5, 
    };

    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setActiveFloatMenuIndex(0);
        }
      });
    }, options);

    const sightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setActiveFloatMenuIndex(1);
        }
      });
    }, options);

    const outlineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setActiveFloatMenuIndex(2);
        }

      });
    }, options);

    const faqObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setActiveFloatMenuIndex(3);
        }
      });
    }, options);

    if (introRef.current) {
      introObserver.observe(introRef.current);
    }
    if (sightRef.current) {
      sightObserver.observe(sightRef.current);
    }
    if (outlineRef.current) {
      outlineObserver.observe(outlineRef.current);
    }
    if (faqRef.current) {
      faqObserver.observe(faqRef.current);
    }

    return () => {
      if (introRef.current) {
        introObserver.unobserve(introRef.current);
      }

      if (sightRef.current) {
        sightObserver.unobserve(sightRef.current);
      }

      if (outlineRef.current) {
        outlineObserver.unobserve(outlineRef.current);
      }

      if (faqRef.current) {
        faqObserver.unobserve(faqRef.current);
      }
      
    };
  }, [introRef, sightRef, outlineRef, faqRef]);


  return (
    <div>
      <Head>
        <title>数据分析实习 - 求职项目 - Rexpand</title>
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
      <Header theme={Theme.TRANSPARENT}/>
      <main className=''>
        <div className={`${styles.banner_container} internship_banner_container flex items-center relative`} 
            style={{
              backgroundImage: `url(${bannerImage.src}),linear-gradient(to right, #007722, #96D8BA)`,
              minHeight: 600,
              backgroundSize: '100% auto',
              backgroundPosition: '0 0',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-3/4'>
              <div className="z-10 pt-0 flex-1">
                  <h1 className={clsx(styles.banner_title)}>数据分析实习</h1>
                  <h2 className={clsx(styles.banner_subtitle)}>使用SQL进行数据清理和分析，搭建客户需要的电子邮件营销数据管线，分析营销数据表现</h2>

                  <Button
                      className="z-10"
                      type={ButtonType.BORDERED} 
                      size={ButtonSize.MIDDLE} 
                      text="咨询项目" />
              </div>
              <VideoCard 
                className='flex-1'
                image={bannerVideoImage} 
                videoPath='https://xxx.com/test.mp4' 
                onClick={()=>{
                  setVideoModalPath('https://xxx.com/test.mp4');
                  setVideoModalOpen(true);
                }}/>

              <div className={clsx('bg-white md:w-5/6 flex flex-col md:flex-row gap-24 px-20 py-12 rounded-lg -ml-2', styles.banner_overlay)}>
                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>项目时长</h1>
                  <div className='internship_banner_card_content'>10周 / 20小时</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>适合学员</h1>
                  <div className='internship_banner_card_content'>求职数据分析方向且缺少美国实习经验的留学生</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>项目特色</h1>
                  <ul className='internship_banner_card_content list'>
                    <li><span>和项目经理一起参与公司项目</span></li>
                    <li><span>进行客户真实业务数据的分析</span></li>
                    <li><span>提升硬核技术知识和业务分析能力</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className={clsx('bg-white section internship_intro_section', styles.section1)}
          ref={introRef}>
          <div className='container mx-auto'>
            <SectionTitle title="实习介绍" className='internship_intro_title'/>
           
            <div className='flex flex-col md:flex-row'>
              <div className='flex justify-end'>
                <Image src={introImage} alt='实习介绍' className='mr-8 h-full w-auto'/>
              </div>
              
              <div className={clsx('flex-1 flex items-center internship_practise_intro_text')}>
                <div>实习生将在一家咨询公司的Marketing Analytics Services (MAS) 部门任职，将负责协助企业客户从策略概念化到执行的全过程，构建和实施数字营销策略(Digital Marketing)。通过数据驱动方法，为客户提供高效率的客户获取解决方案。工作职责包括使用SQL作为主要的数据处理和分析工具，构建必要的数据管线(Data Pipeline) 以支持工程化的市场营销活动。此外，利用Tableau和Excel等工具进行深入的营销数据分析和结果可视化(Visualization)，进一步优化并提升客户的数字营销效果。</div>
              </div>
            </div>

          </div>
        </div>

        <div className={clsx('bg-white section internship_sight_section overflow-auto')}
          ref={sightRef}>
          <SectionTitle title="项目亮点" className='internship_sight_title'/>
          <div style={{
            backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`,
            padding: '38px 0 50px 0',
          }}>
            <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row h-96'>
                
                <div className='flex justify-end'>
                  <Image src={sightImage} alt='项目亮点' className='mr-24 h-full w-auto'/>
                </div>
                
                <div className='flex-1 flex leading-8 items-center flex-wrap content-center'>
                  <div className={clsx('w-full md:w-1/2 overflow-auto')}>
                    <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                      <Image src={arrowUpImg} alt='增加经验' width={33} />
                      <h1 className='sight_title'>增加经验</h1>
                      <div className='sight_subtitle'>简历上一份实习/全职工作经验</div>
                    </div>
                  </div>

                  <div className={clsx('w-full md:w-1/2')}>
                    <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                      <Image src={consultImg} alt='全流程顾问式服务' width={33} />
                      <h1 className='sight_title'>全流程顾问式服务</h1>
                      <div className='sight_subtitle'>助力上百Entry Level数据专业同学入行</div>
                    </div>
                  </div>

                  <div className={clsx('w-full md:w-1/2')}>
                    <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                      <Image src={sendImg} alt='求职无忧' width={33} />
                      <h1 className='sight_title'>求职无忧</h1>
                      <div className='sight_subtitle'>助力转行数据方向的同学添加相关经验</div>
                    </div>
                  </div>

                  <div className={clsx('w-full md:w-1/2')}>
                    <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                      <Image src={rocketImg} alt='技能提升' width={33} />
                      <h1 className='sight_title'>技能提升</h1>
                      <div className='sight_subtitle'>真实业务场景下学习数据分析核心技能SQL</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>


        <div className={clsx('bg-white section internship_outline_section')}
          ref={outlineRef}>
          <div className='container mx-auto'>
            <SectionTitle title="项目大纲" className='internship_outline_title'/>

            <div className='flex flex-col md:flex-row'>
              <Outline data={dataAnalysisOutlineData} />
            </div>
          </div>
        </div>

        <div className='bg-white section internship_faq_section' >
          <div ref={faqRef}></div>
          <div className='container mx-auto'>
            <SectionTitle className='internship_faq_title' title="常见问题" />

            <div className='flex flex-col justify-center md:flex-row'>
              <Accordion data={dataAnalysisFAQData}/>
            </div>
          </div>
        </div>

        <FloatMenu 
          className='fixed right-2 top-1/2' 
          data={internshipMenusData} 
          activeIndex={activeFloatMenuIndex}
          onChange={onFloatMenuChange}/>

        <VideoModal
          videoPath={videoModalPath} 
          open={videoModalOpen} 
          onClose={()=>{
            setVideoModalOpen(false);
          }}/>
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

