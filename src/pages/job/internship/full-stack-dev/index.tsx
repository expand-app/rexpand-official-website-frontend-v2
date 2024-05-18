import React, { ReactElement, useState, useRef, useEffect } from 'react';
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
import FloatMenu from '@/components/FloatMenu/FloatMenu';
import { fullStackDevSightViewData, internshipMenusData } from '@/data/internship';
import Outline from '@/pages/job/components/Outline/Outline';
import { fullStackDevFAQData, fullStackDevOutlineData } from '@/data/full_stack_dev_internship';
import VideoModal from '@/components/VideoModal/VideoModal';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import _ from 'lodash';
import SightView from '../../components/SightView/SightView';
import BannerOverlayCard from '@/components/BannerOverlayCard/BannerOverlayCard';
import useScreen from '@/components/useScreen/useScreen';
import JobConsultModal from '@/components/JobConsultModal/JobConsultModal';
import { fsdConsultModalData, } from '@/data/job_consult';


export const FullStackDevPage: NextPage = () => {
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
              qrImage={fsdConsultModalData.qrImage}
              content={fsdConsultModalData.content}
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
                  <h1 className={clsx(styles.m_banner_title)}>全栈开发实习</h1>
                  <h2 className={clsx(styles.m_banner_subtitle)}>从前后端编写到云部署的全流程，使用JavaScript、Python、Java，以及MySQL和PostgreSQL数据库，依托AWS和Azure平台，提供全面的现代应用开发经验</h2>
                  {/* <VideoCard 
                    image={bannerVideoImage} 
                    videoPath='https://xxx.com/test.mp4'
                    onClick={()=>{
                      setVideoModalPath('https://xxx.com/test.mp4');
                      setVideoModalOpen(true);
                    }}/> */}
                    <Image src={require('@/assets/temp/4.png')} alt="" style={{margin: '36px 0 -14px 0'}}/>
               
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
                  content: '10周 / 40小时',
                },{
                  id: 2,
                  title: '适合学员',
                  content: '求职SDE方向且缺少美国实习经验的留学生',
                },{
                  id: 3,
                  title: '项目特色',
                  content: [
                    '进行真实移动端软件开发', 
                    '提升前后端-编程能力',
                    '增加在美实习经验',
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
                <div>实习生在一家科技公司任职，参与开发一个与小红书相似的食物分享应用的移动端项目。此职位涵盖了全面的项目开发流程，包括前后端代码的编写、优化和最终部署到云平台。您将负责设计数据结构，参与DevOps相关工作，确保项目从概念到发布的每个阶段都高效、顺利进行。在技术选型方面，项目将采用JavaScript、Python和Java作为主要开发语言，使用MySQL和PostgreSQL作为数据库解决方案，同时，云基础设施将主要依托于AWS和Azure平台。此岗位旨在为实习生提供一个全面深入了解和参与现代应用开发的机会。</div>
              </div>

              <div className={styles.m_intro_img_box}>
                <Image src={introImage} alt='实习介绍' className='mr-8 h-full w-auto'/>
              </div>
              
             

            </div>
          </div>
        </div>

        <div className='bg-white section m_internship_sight_section'>
            <SectionTitle title="项目亮点" className='m_internship_sight_title'/>
            <div style={{
              backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`,
              padding: '68px 0 92px 0',
            }}>
            <div className='px-12px'>
              <SightView data={fullStackDevSightViewData}/>
            </div>
          </div>
        </div>


        <div className={clsx('bg-white section m_internship_outline_section')}>
          <div className='px-12px'>
            <SectionTitle title="项目大纲" className='m_internship_outline_title'/>

            <div className='flex flex-col md:flex-row'>
              <Outline data={fullStackDevOutlineData} />
            </div>
          </div>
        </div>


        <div className='bg-white section m_internship_faq_section'>
          <div className='px-12px'>
            <SectionTitle className='internship_faq_title' title="常见问题" />

            <div className='flex flex-col justify-center md:flex-row'>
              <Accordion data={fullStackDevFAQData}/>
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
                  <h1 className={clsx(styles.banner_title)}>全栈开发实习</h1>
                  <h2 className={clsx(styles.banner_subtitle)}>从前后端编写到云部署的全流程，使用JavaScript、Python、Java，以及MySQL和PostgreSQL数据库，依托AWS和Azure平台，提供全面的现代应用开发经验</h2>

                  <Button
                      className="z-10"
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
                <Image src={require('@/assets/temp/4.png')} alt="" style={{margin: '40px 0 40px 0'}}/>
               
              {/* <div className={clsx('bg-white md:w-5/6 flex flex-col md:flex-row gap-24 px-20 py-12 rounded-lg -ml-2', styles.banner_overlay)}>
                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>项目时长</h1>
                  <div className='internship_banner_card_content'>10周 / 40小时</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>适合学员</h1>
                  <div className='internship_banner_card_content'>求职SDE方向且缺少美国实习经验的留学生</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>项目特色</h1>
                  <ul className='internship_banner_card_content list'>
                    <li><span>进行真实移动端软件开发</span></li>
                    <li><span>提升前后端-编程能力</span></li>
                    <li><span>增加在美实习经验</span></li>
                  </ul>
                </div>
              </div> */}
            </div>
            <BannerOverlayCard
              contentStyle={{
                fontSize: '20px',
              }}
              cardClassName='w-p85'
              data={[{
                id: 1,
                title: '项目时长',
                content: '10周 / 40小时',
              },{
                id: 2,
                title: '适合学员',
                content: '求职SDE方向且缺少美国实习经验的留学生',
              },{
                id: 3,
                title: '项目特色',
                content: [
                  '进行真实移动端软件开发', 
                  '提升前后端-编程能力',
                  '增加在美实习经验',
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
                <Image src={introImage} alt='实习介绍' className='mr-8 h-full w-auto'/>
              </div>
              
              <div className='flex-1 leading-7 text-gray-500 flex items-center internship_practise_intro_text'>
                <div>实习生在一家科技公司任职，参与开发一个与小红书相似的食物分享应用的移动端项目。此职位涵盖了全面的项目开发流程，包括前后端代码的编写、优化和最终部署到云平台。您将负责设计数据结构，参与DevOps相关工作，确保项目从概念到发布的每个阶段都高效、顺利进行。在技术选型方面，项目将采用JavaScript、Python和Java作为主要开发语言，使用MySQL和PostgreSQL作为数据库解决方案，同时，云基础设施将主要依托于AWS和Azure平台。此岗位旨在为实习生提供一个全面深入了解和参与现代应用开发的机会。</div>
              </div>

            </div>
          </div>
        </div>

        <div className='bg-white section internship_sight_section'>
          <div ref={sightAnchorRef} className='internship_section_anchor'></div>
            <SectionTitle title="项目亮点" className='internship_sight_title'/>
            <div style={{
              backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`,
            }}>
            <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row'>
                <div className='flex justify-end'>
                  <Image src={sightImage} alt='项目亮点' className='mr-24'
                  style={{width: '28vw', height: 'auto'}}/>
                </div>
                
                <SightView data={fullStackDevSightViewData}/>
              </div>

            </div>
          </div>
        </div>


        <div className='bg-white section internship_outline_section'>
          <div ref={outlineAnchorRef} className='internship_section_anchor'></div>
          <div className='container mx-auto'>
            <SectionTitle className='internship_outline_title' title="项目大纲" />

            <div className='flex flex-col md:flex-row'>
              <Outline data={fullStackDevOutlineData} />
            </div>
          </div>
        </div>


        <div className='bg-white section internship_faq_section'>
          <div ref={faqAnchorRef} className='internship_section_anchor'></div>
          <SectionTitle className='internship_faq_title' title="常见问题" />

          <div className='container mx-auto flex flex-col justify-center md:w-5/6'>
            <Accordion data={fullStackDevFAQData}/>
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



export default FullStackDevPage;
 
// DataAnalysisPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <InternshipLayout>
//         {page}
//     </InternshipLayout>
//   )
// }

