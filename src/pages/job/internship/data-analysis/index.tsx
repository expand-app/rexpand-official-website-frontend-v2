import React, { ReactElement, useState, useEffect, useRef} from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Image from 'next/image';
import bannerImage from '@/assets/job/internship/data-analysis/banner.png';
import Button, { ButtonRadius, ButtonSize, ButtonType } from '@/components/Button/Button';
import VideoCard from '@/components/VideoCard/VideoCard';
import bannerVideoImage from '@/assets/job/internship/data-analysis/banner_video.png';
import introImage from '@/assets/job/internship/data-analysis/intro.png';
import sightImage from '@/assets/job/internship/data-analysis/sight.png';
import clsx from 'clsx';
import Accordion from '@/components/Accordion/Accordion';
import { dataAnalysisFAQData, dataAnalysisOutlineData } from '@/data/data_analysis_internship';
import FloatMenu from '@/components/FloatMenu/FloatMenu';
import { ananlysisSightViewData, internshipMenusData } from '@/data/internship';
import Outline from '@/pages/job/components/Outline/Outline';
import VideoModal from '@/components/VideoModal/VideoModal';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import _ from 'lodash';
import SightView from '../../components/SightView/SightView';
import BannerOverlayCard from '@/components/BannerOverlayCard/BannerOverlayCard';
import useScreen from '@/components/useScreen/useScreen';
import JobConsultModal from '@/components/JobConsultModal/JobConsultModal';
import { daConsultModalData } from '@/data/job_consult';


export const DataAnalysisPage: NextPage = () => {
  const [jobConsultModalOpen, setJobConsultModalOpen] = useState<boolean>(false);
  const { isMobile } = useScreen();
 
  const onBannerBtnClick = () => {
    setJobConsultModalOpen(true);
  }

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
            <MobileView onBannerBtnClick={onBannerBtnClick}/>
            :
            <PCView onBannerBtnClick={onBannerBtnClick}/>
            }

        <JobConsultModal
          open={jobConsultModalOpen} 
          onClose={()=>setJobConsultModalOpen(false)} 
          qrImage={daConsultModalData.qrImage}
          content={daConsultModalData.content}
        />
        </div>
      </>
  );
}

export const MobileView = ({onBannerBtnClick,}: Props) => {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [videoModalPath, setVideoModalPath] = useState<string | undefined>();
  
  return (
    <div>
      
      <Header theme={Theme.TRANSPARENT}/>
      <main className=''>
        <div className={`${styles.m_banner_container} internship_banner_container flex flex-col items-center relative`}>
            <div className='flex flex-col items-center justify-center px-22px'>
              <div className={styles.m_banner_text}>
                  <h1 className={clsx(styles.m_banner_title)}>数据分析实习</h1>
                  <h2 className={clsx(styles.m_banner_subtitle)}>使用SQL进行数据清理和分析，搭建客户需要的电子邮件营销数据管线，分析营销数据表现</h2>

                 

                  {/* <VideoCard 
                    image={bannerVideoImage} 
                    videoPath='https://xxx.com/test.mp4' 
                    onClick={()=>{
                      setVideoModalPath('https://xxx.com/test.mp4');
                      setVideoModalOpen(true);
                    }}/> */}
                  <Image src={require('@/assets/temp/1.png')} alt="" style={{margin: '40px 0'}}/>
                  
                    
                  <Button
                      className={styles.m_banner_btn}
                      type={ButtonType.BORDERED} 
                      size={ButtonSize.MIDDLE} 
                      radius={ButtonRadius.NONE}
                      text="咨询项目" 
                      onClick={onBannerBtnClick}/>
              </div>
            </div>

            <div className={styles.m_banner_overlay_box}>
              <BannerOverlayCard
                data={[{
                  id: 1,
                  title: '项目时长',
                  content: '10周 / 20小时',
                },{
                  id: 2,
                  title: '适合学员',
                  content: '求职数据分析方向且缺少美国实习经验的留学生',
                },{
                  id: 3,
                  title: '项目特色',
                  content: [
                    '和项目经理一起参与公司项目', 
                    '进行客户真实业务数据的分析',
                    '提升硬核技术知识和业务分析能力',
                  ],
                }]}
                className={clsx("",styles.m_banner_overlay)} />
            </div>
        </div>

        <div className={clsx('bg-white section m_internship_intro_section', styles.section1)}>
          <div className='px-22px'>
            <SectionTitle title="实习介绍" className='m_internship_intro_title'/>
           
            <div className='flex flex-col'>
              <div className={clsx('flex-1 flex items-center m_internship_practise_intro_text')}>
                <div>实习生将在一家咨询公司的Marketing Analytics Services (MAS) 部门任职，将负责协助企业客户从策略概念化到执行的全过程，构建和实施数字营销策略(Digital Marketing)。通过数据驱动方法，为客户提供高效率的客户获取解决方案。工作职责包括使用SQL作为主要的数据处理和分析工具，构建必要的数据管线(Data Pipeline) 以支持工程化的市场营销活动。此外，利用Tableau和Excel等工具进行深入的营销数据分析和结果可视化(Visualization)，进一步优化并提升客户的数字营销效果。</div>
              </div>
              <div className={styles.m_intro_img_box}>
                <Image src={introImage} alt='实习介绍' className='mr-8 h-full w-auto'/>
              </div>
            </div>

          </div>
        </div>

        <div className={clsx('bg-white section m_internship_sight_section')}>
          <SectionTitle title="项目亮点" className='m_internship_sight_title'/>
          <div style={{
            backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`,
            padding: '68px 0 92px 0',
          }}>
            <div className='px-12px'>
                <SightView data={ananlysisSightViewData}/>

            </div>
          </div>
        </div>


        <div className={clsx('bg-white section m_internship_outline_section')}>
          <div className='px-12px'>
            <SectionTitle title="项目大纲" className='m_internship_outline_title'/>

            <div className='flex flex-col md:flex-row'>
              <Outline data={dataAnalysisOutlineData} />
            </div>
          </div>
        </div>

        <div className='bg-white section m_internship_faq_section' >
          <div className='px-12px'>
            <SectionTitle className='internship_faq_title' title="常见问题" />

            <div className='flex flex-col justify-center md:flex-row'>
              <Accordion data={dataAnalysisFAQData}/>
            </div>
          </div>
        </div>

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




export const PCView = ({onBannerBtnClick,}: Props) => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [videoModalPath, setVideoModalPath] = useState<string | undefined>();
  
  const disableObserver = useRef<boolean>(false);
  const introAnchorRef = useRef<HTMLDivElement>(null!);
  const sightAnchorRef = useRef<HTMLDivElement>(null!);
  const outlineAnchorRef = useRef<HTMLDivElement>(null!);
  const faqAnchorRef = useRef<HTMLDivElement>(null!);

  const onFloatMenuChange = (newIndex: number) => {
    disableObserver.current = true;
    setActiveFloatMenuIndex(newIndex);
    
    if ( newIndex === 0) {
      introAnchorRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if ( newIndex === 1) {
      sightAnchorRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if ( newIndex === 2) {
      outlineAnchorRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else if ( newIndex === 3) {
      faqAnchorRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(()=>{
      disableObserver.current = false;
    }, 1000);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px', 
      threshold: 0.5, 
    };
    const debouncedSetActiveFloatMenuIndex = _.debounce(setActiveFloatMenuIndex, 200);
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!disableObserver.current && entry.isIntersecting === true) {
          debouncedSetActiveFloatMenuIndex(0);
        }
      });
    }, options);

    const sightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!disableObserver.current && entry.isIntersecting === true) {
          debouncedSetActiveFloatMenuIndex(1);
        }
      });
    }, options);

    const outlineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!disableObserver.current && entry.isIntersecting === true) {
          debouncedSetActiveFloatMenuIndex(2);
        }

      });
    }, options);

    const faqObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!disableObserver.current && entry.isIntersecting === true) {
          debouncedSetActiveFloatMenuIndex(3);
        }
      });
    }, options);

    if (introAnchorRef.current) {
      introObserver.observe(introAnchorRef.current);
    }
    if (sightAnchorRef.current) {
      sightObserver.observe(sightAnchorRef.current);
    }
    if (outlineAnchorRef.current) {
      outlineObserver.observe(outlineAnchorRef.current);
    }
    if (faqAnchorRef.current) {
      faqObserver.observe(faqAnchorRef.current);
    }

    return () => {
      if (introAnchorRef.current) {
        introObserver.unobserve(introAnchorRef.current);
      }

      if (sightAnchorRef.current) {
        sightObserver.unobserve(sightAnchorRef.current);
      }

      if (outlineAnchorRef.current) {
        outlineObserver.unobserve(outlineAnchorRef.current);
      }

      if (faqAnchorRef.current) {
        faqObserver.unobserve(faqAnchorRef.current);
      }
      
    };
  }, [introAnchorRef, sightAnchorRef, outlineAnchorRef, faqAnchorRef]);


  return (
    <div>
      <Header theme={Theme.TRANSPARENT}/>
      <main className=''>
        <div className={`${styles.banner_container} internship_banner_container flex items-center relative`} 
            style={{
              backgroundImage: `url(${bannerImage.src}),linear-gradient(to right, #007722, #96D8BA)`,
              minHeight: 600,
              backgroundSize: '100% auto',
              backgroundPosition: '0 0',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-p85'>
              <div className="z-10 pt-0 flex-1">
                  <h1 className={clsx(styles.banner_title)}>数据分析实习</h1>
                  <h2 className={clsx(styles.banner_subtitle)}>使用SQL进行数据清理和分析，搭建客户需要的电子邮件营销数据管线，分析营销数据表现</h2>

                  <Button
                      className={styles.banner_btn}
                      type={ButtonType.BORDERED} 
                      size={ButtonSize.MIDDLE} 
                      radius={ButtonRadius.NONE}
                      text="咨询项目" 
                      onClick={onBannerBtnClick}/>
              </div>
              {/* <VideoCard 
                image={bannerVideoImage} 
                videoPath='https://xxx.com/test.mp4' 
                onClick={()=>{
                  setVideoModalPath('https://xxx.com/test.mp4');
                  setVideoModalOpen(true);
                }}/> */}
               <Image src={require('@/assets/temp/1.png')} alt="" className={styles.banner_img}/>
                  
            </div>

            <BannerOverlayCard
              contentStyle={{
                fontSize: '20px',
              }}
              cardClassName={clsx('w-p85')}
              data={[{
                id: 1,
                title: '项目时长',
                content: '10周 / 20小时',
              },{
                id: 2,
                title: '适合学员',
                content: '求职数据分析方向且缺少美国实习经验的留学生',
              },{
                id: 3,
                title: '项目特色',
                content: [
                  '和项目经理一起参与公司项目', 
                  '进行客户真实业务数据的分析',
                  '提升硬核技术知识和业务分析能力',
                ],
              }]}
              className={clsx("",styles.banner_overlay)} />
        </div>

        <div className={clsx('bg-white section internship_intro_section', styles.section1)}>
          <div ref={introAnchorRef} className='internship_section_anchor'></div>
          <div className='container mx-auto'>
            <SectionTitle title="实习介绍" className='internship_intro_title'/>
           
            <div className='flex flex-col md:flex-row'>
              <div className='flex justify-end' 
                  style={{width: '28vw'}}>
                <Image src={introImage} alt='实习介绍' className='object-contain lg:mr-8 h-full w-auto'
                  />
              </div>
              
              <div className={clsx('flex-1 flex items-center internship_practise_intro_text')}>
                <div>实习生将在一家咨询公司的Marketing Analytics Services (MAS) 部门任职，将负责协助企业客户从策略概念化到执行的全过程，构建和实施数字营销策略(Digital Marketing)。通过数据驱动方法，为客户提供高效率的客户获取解决方案。工作职责包括使用SQL作为主要的数据处理和分析工具，构建必要的数据管线(Data Pipeline) 以支持工程化的市场营销活动。此外，利用Tableau和Excel等工具进行深入的营销数据分析和结果可视化(Visualization)，进一步优化并提升客户的数字营销效果。</div>
              </div>
            </div>

          </div>
        </div>

        <div className={clsx('bg-white section internship_sight_section')}>
          <div ref={sightAnchorRef} className='internship_section_anchor'></div>

          <SectionTitle title="项目亮点" className='internship_sight_title'/>
          <div style={{
            backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`,
           
          }}>
            <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row'>
                
                <div className='flex justify-end'>
                  <Image src={sightImage} alt='项目亮点' className='object-contain lg:mr-24' 
                    style={{width: '28vw', height: 'auto'}} />
                </div>
                
                <SightView data={ananlysisSightViewData}/>
              </div>

            </div>
          </div>
        </div>


        <div className={clsx('bg-white section internship_outline_section')}>
          <div ref={outlineAnchorRef} className='internship_section_anchor'></div>
          <div className='container mx-auto'>
            <SectionTitle title="项目大纲" className='internship_outline_title'/>

            <div className='flex flex-col md:flex-row'>
              <Outline data={dataAnalysisOutlineData} />
            </div>
          </div>
        </div>

        <div className='bg-white section internship_faq_section' >
          <div ref={faqAnchorRef} className='internship_section_anchor'></div>
          <SectionTitle className='internship_faq_title' title="常见问题" />

          <div className='container mx-auto flex flex-col justify-center md:w-5/6'>
            <Accordion data={dataAnalysisFAQData}/>
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

export interface Props {
  onBannerBtnClick: () => void;
}


export default DataAnalysisPage;
 
// DataAnalysisPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <InternshipLayout>
//         {page}
//     </InternshipLayout>
//   )
// }

