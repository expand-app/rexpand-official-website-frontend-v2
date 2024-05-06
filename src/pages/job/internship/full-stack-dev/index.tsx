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
import FloatMenu from '@/components/FloatMenu/FloatMenu';
import { internshipMenusData } from '@/data/internship';
import Outline from '@/pages/job/components/Outline/Outline';
import { fullStackDevFAQData, fullStackDevOutlineData } from '@/data/full_stack_dev_internship';

export const DataAnalysisPage: NextPage = () => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();

  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex)

    
  };

  return (
    <div>
      <Head>
        <title>全栈开发实习 - 求职项目 - Rexpand</title>
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
              <div className="z-10 pt-0">
                  <h1 className='text-4xl text-white z-10 mb-3'>全栈开发实习</h1>
                  <h2 className='text-base text-white opacity-70 z-10  mb-16'>从前后端编写到云部署的全流程，使用JavaScript、Python、Java，以及MySQL和PostgreSQL数据库，依托AWS和Azure平台，提供全面的现代应用开发经验</h2>

                  <Button
                      className="z-10"
                      type={ButtonType.BORDERED} 
                      size={ButtonSize.MIDDLE} 
                      text="咨询项目" />
              </div>
              <VideoCard 
                image={bannerVideoImage} 
                videoPath='https://xxx.com/test.mp4'/>

              <div className={clsx('bg-white md:w-5/6 flex flex-col md:flex-row gap-24 px-20 py-12 rounded-lg -ml-2 -mb-32', styles.banner_overlay)}>
                <div className='flex-1'>
                  <h1 className='font-base font-bold mb-2'>项目时长</h1>
                  <div className='text-gray-600 text-sm'>10周 / 40小时</div>
                </div>

                <div className='flex-1'>
                  <h1 className='font-base font-bold mb-2'>适合学员</h1>
                  <div className='text-gray-600 text-sm'>求职SDE方向且缺少美国实习经验的留学生</div>
                </div>

                <div className='flex-1'>
                  <h1 className='font-base font-bold mb-2'>项目特色</h1>
                  <ul className='list-disc pl-6 text-sm'>
                    <li>进行真实移动端软件开发</li>
                    <li>提升前后端-编程能力</li>
                    <li>增加在美实习经验</li>
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
              <div>实习生在一家科技公司任职，参与开发一个与小红书相似的食物分享应用的移动端项目。此职位涵盖了全面的项目开发流程，包括前后端代码的编写、优化和最终部署到云平台。您将负责设计数据结构，参与DevOps相关工作，确保项目从概念到发布的每个阶段都高效、顺利进行。在技术选型方面，项目将采用JavaScript、Python和Java作为主要开发语言，使用MySQL和PostgreSQL作为数据库解决方案，同时，云基础设施将主要依托于AWS和Azure平台。此岗位旨在为实习生提供一个全面深入了解和参与现代应用开发的机会。</div>
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
                    <div className='text-sm text-gray-500'>助力上百名Entry Level computer science专业同学入行</div>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                    <Image src={sendImg} alt='求职无忧' width={26} />
                    <h1 className='font-bold'>求职无忧</h1>
                    <div className='text-sm text-gray-500'>帮助想转行做SDE方向的同学添加相关简历经验</div>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div className='rounded-md bg-white flex flex-col py-5 px-6  m-1 min-h-36'>
                    <Image src={rocketImg} alt='技能提升' width={26} />
                    <h1 className='font-bold'>技能提升</h1>
                    <div className='text-sm text-gray-500'>真实业务场景下应用全栈开发技术</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


        <div className='bg-white'>
          <h1 className='text-4xl text-center pt-12 pb-8'>项目大纲</h1>

          <div className='container mx-auto flex flex-col md:flex-row md:w-5/6'>
            <Outline data={fullStackDevOutlineData} />
          </div>
        </div>


        <div className='bg-white'>
          <h1 className='text-4xl text-center pt-12 pb-8'>常见问题</h1>

          <div className='container mx-auto flex flex-col justify-center py-12 md:flex-row md:w-5/6'>
            <Accordion data={fullStackDevFAQData}/>
          </div>
        </div>

        <FloatMenu 
          className='fixed right-2 top-1/2' 
          data={internshipMenusData} 
          activeIndex={activeFloatMenuIndex}
          onChange={onFloatMenuChange}/>
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

