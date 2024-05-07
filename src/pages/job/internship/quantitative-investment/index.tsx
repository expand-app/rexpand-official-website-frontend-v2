import React, { ReactElement, useState } from 'react';
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
import { fullStackDevFAQData, fullStackDevOutlineData } from '@/data/full_stack_dev_internship';
import { investmentBankingModelingFAQData, investmentBankingModelingOutlineData } from '@/data/investment_banking_modeling_internship';
import { quantitativeInvestmentFAQData, quantitativeInvestmentOutlineData } from '@/data/quantitative_investment_internship';
import VideoModal from '@/components/VideoModal/VideoModal';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export const DataAnalysisPage: NextPage = () => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [videoModalPath, setVideoModalPath] = useState<string | undefined>();
  
  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex)

    
  };

  return (
    <div>
      <Head>
        <title>量化投资实习 - 求职项目 - Rexpand</title>
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
      <main className='mb-12'>
        <div className={`${styles.banner_container} internship_banner_container flex items-center relative`} 
            style={{
              backgroundImage: `url(${bannerImage.src}),linear-gradient(to right, #007722, #96D8BA)`,
              minHeight: 600,
              backgroundSize: '100% auto',
              backgroundPosition: '0 0',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-3/4'>
              <div className="z-10 pt-0 flex-1">
                  <h1 className={clsx(styles.banner_title)}>量化投资实习</h1>
                  <h2 className={clsx(styles.banner_subtitle)}>使用Python进行量化风险管理和投资策略，包括VaR模型评估和战略资产配置建议</h2>

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
                  <div className='internship_banner_card_content'>10周 / 30小时</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>适合学员</h1>
                  <div className='internship_banner_card_content'>求职Quant Risk方向且缺少美国实习经验的留学生</div>
                </div>

                <div className='flex-1'>
                  <h1 className='internship_banner_card_title'>项目特色</h1>
                  <ul className='internship_banner_card_content list'>
                    <li>和项目经理一起参与公司项目</li>
                    <li>进行量化分析和风险管理</li>
                    <li>提升量化建模和业务分析能力</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className={clsx('bg-white section internship_intro_section', styles.section1)}>
          <div className='container mx-auto'>
            <SectionTitle title='实习介绍' className='internship_intro_title'/>

            <div className='flex flex-col md:flex-row'>
              <div className='flex justify-end'>
                <Image src={introImage} alt='实习介绍' className='mr-8 h-full w-auto'/>
              </div>
              
              <div className='flex-1 leading-7 text-gray-500 flex items-center internship_practise_intro_text'>
                <div>实习生将在一家咨询公司的Investment Management Services (IMS) 部门任职，将支持投资组合经理执行量化风险管理服务和制定量化投资策略。这个职位的核心工作包括运用Python作为主要分析工具，通过使用价值在风险（VaR）模型进行风险评估与量化，辅助客户在风险管理上的决策。工作中将利用多因子回归模型等量化方法，为客户提供战略性的资产配置建议（Strategic Asset Allocation）。通过高级量化分析技术，帮助客户优化投资组合表现并实现量化风险控制（Quantitative Risk Management)。</div>
              </div>
            </div>

          </div>
        </div>

        <div className='bg-white section internship_sight_section overflow-auto'>
        <div className='container mx-auto internship_sight_title'>
          <SectionTitle title='项目亮点' />
            <div style={{backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`}}>
              <div className='flex flex-col md:flex-row h-96'>
                <div className='flex-1 flex justify-end'>
                  <Image src={sightImage} alt='项目亮点' className='mr-24 h-full w-auto'/>
                </div>
                
                <div className='flex-1 flex leading-8 items-center flex-wrap content-center'>
                  <div className='w-full md:w-1/2'>
                    <div className='rounded-md bg-white flex flex-col py-5 px-6 m-1 min-h-36'>
                      <Image src={arrowUpImg} alt='增加经验' width={26} />
                      <h1 className='font-bold'>增加经验</h1>
                      <div className='text-sm text-gray-500'>简历上一份实习/全职工作经验</div>
                    </div>
                  </div>

                  <div className='w-full md:w-1/2'>
                    <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                      <Image src={consultImg} alt='全流程顾问式服务' width={26} />
                      <h1 className='font-bold'>全流程顾问式服务</h1>
                      <div className='text-sm text-gray-500'>帮助过上百名Entry Level同学收获Quant offer</div>
                    </div>
                  </div>

                  <div className='w-full md:w-1/2'>
                    <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                      <Image src={sendImg} alt='求职无忧' width={26} />
                      <h1 className='font-bold'>求职无忧</h1>
                      <div className='text-sm text-gray-500'>帮助想转行做量化方向的同学添加相关简历经验</div>
                    </div>
                  </div>

                  <div className='w-full md:w-1/2'>
                    <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                      <Image src={rocketImg} alt='技能提升' width={26} />
                      <h1 className='font-bold'>技能提升</h1>
                      <div className='text-sm text-gray-500'>真实业务场景下学习量化风险和资产配置等模型</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>


        <div className='bg-white section internship_outline_section'>
          <div className='container mx-auto'>

            <SectionTitle title='项目大纲' className='internship_outline_title'/>

            <div className='flex flex-col md:flex-row'>
              <Outline data={quantitativeInvestmentOutlineData} />
            </div>
          </div>
        </div>


        <div className='bg-white section internship_faq_section'>
          <div className='container mx-auto'>
            <SectionTitle title='常见问题' className='internship_faq_title'/>

            <div className='flex flex-col justify-center md:flex-row'>
              <Accordion data={quantitativeInvestmentFAQData}/>
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

