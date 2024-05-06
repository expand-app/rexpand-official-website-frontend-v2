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
import VideoModal from '@/components/VideoModal/VideoModal';

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
        <title>投行建模实习 - 求职项目 - Rexpand</title>
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
              backgroundImage: `url(${bannerImage.src}),linear-gradient(to right, #007722, #96D8BA)`,
              minHeight: 600,
              backgroundSize: '100% auto',
              backgroundPosition: '0 0',
            }}>
           
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-3/4'>
              <div className="z-10 pt-0 flex-1">
                  <h1 className='text-4xl text-white z-10 mb-3'>投行建模实习</h1>
                  <h2 className='text-base text-white opacity-70 z-10  mb-16'>使用金融建模的方法来帮助企业客户在财务规划和决策中做出精确的预测和评估</h2>

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

              <div className={clsx('bg-white md:w-5/6 flex flex-col md:flex-row gap-24 px-20 py-12 rounded-lg -ml-2 -mb-32', styles.banner_overlay)}>
                <div className='flex-1'>
                  <h1 className='font-base font-bold mb-2'>项目时长</h1>
                  <div className='text-gray-600 text-sm'>10周 / 20小时</div>
                </div>

                <div className='flex-1'>
                  <h1 className='font-base font-bold mb-2'>适合学员</h1>
                  <div className='text-gray-600 text-sm'>求职投行中后台或金融方向且缺少美国实习经验的留学生</div>
                </div>

                <div className='flex-1'>
                  <h1 className='font-base font-bold mb-2'>项目特色</h1>
                  <ul className='list-disc pl-6 text-sm'>
                    <li>和项目经理一起参与公司项目</li>
                    <li>进行财务预算模型和公司估值模型的搭建</li>
                    <li>提升财务建模能力和业务分析能力</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className='bg-white mt-36'>
          <h1 className='text-4xl text-center pt-12 pb-6'>实习介绍</h1>
          <div className='container mx-auto flex flex-col md:flex-row h-96 md:w-3/4'>
            <div className='flex-1 flex justify-end'>
              <Image src={introImage} alt='实习介绍' className='mr-24 h-full w-auto'/>
            </div>
            
            <div className='flex-1 leading-7 text-gray-500 flex items-center'>
              <div>实习生将在一家咨询公司的Transaction Advisory Services (TAS) 部门任职，将为客户提供交易和并购过程中的金融建模（Financial Modeling)支持，协助进行公司估值(Valuation) 和财务预测(Financial Planning)。利用Excel作为主要的建模工具，展现出深厚的财务知识基础，精通阅读和分析财务报表。能够高效地将客户的商业模式转化为详细的Excel模型，从而辅助企业客户在财务规划和决策过程中做出更加精确的预测和评估。</div>
            </div>

          </div>
        </div>

        <div className='bg-white'>
          <h1 className='text-4xl text-center pt-12 pb-8'>项目亮点</h1>
          <div style={{backgroundImage: `linear-gradient(to bottom, #008a2708, #008a2719)`}}>
            <div className='container mx-auto flex flex-col md:flex-row h-96 md:w-5/6'>
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
                    <div className='text-sm text-gray-500'>帮助过上百名Entry Level金融专业的同学入行</div>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                    <Image src={sendImg} alt='求职无忧' width={26} />
                    <h1 className='font-bold'>求职无忧</h1>
                    <div className='text-sm text-gray-500'>帮助想转行做FP&A方向的同学添加相关简历经验</div>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                    <Image src={rocketImg} alt='技能提升' width={26} />
                    <h1 className='font-bold'>技能提升</h1>
                    <div className='text-sm text-gray-500'>真实业务场景下学习财务建模核心技能</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


        <div className='bg-white'>
          <h1 className='text-4xl text-center pt-12 pb-8'>项目大纲</h1>

          <div className='container mx-auto flex flex-col md:flex-row md:w-5/6'>
            <Outline data={investmentBankingModelingOutlineData} />
          </div>
        </div>


        <div className='bg-white'>
          <h1 className='text-4xl text-center pt-12 pb-8'>常见问题</h1>

          <div className='container mx-auto flex flex-col justify-center py-12 md:flex-row md:w-5/6'>
            <Accordion data={investmentBankingModelingFAQData}/>
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

