import React from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import bannerImg from '@/assets/about/banner.png';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import leftQuoteIamge from '@/assets/about/left_quote.png';
import rightQuoteIamge from '@/assets/about/right_quote.png';
import groupImage from '@/assets/about/icon_group.png';
import aiImage from '@/assets/about/icon_ai.png';
import studentImage from '@/assets/about/icon_student.png';
import xpqnBgImage from '@/assets/about/bg_xpqn.png';
import pushImage from '@/assets/about/icon_push.png';
import starImage from '@/assets/about/icon_star.png';
import userCardImage from '@/assets/about/icon_user_card.png';
import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard';
import { membersData } from '@/data/about';



export const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>关于我们 - Rexpand</title>
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
        
        <div className="">  {/*container mx-auto max-w-screen-lg px-4*/}
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-white text-8xl font-bold">
                  <div className='mb-8'>让内推</div>
                  <div className='indent-14'>引领求职</div>
                </div>
                <div className='text-white mt-12'>「 9年专注留学生求职 」</div>
              </div>
            
            {/* 图片 */}
            <Image src={bannerImg} alt="让内推引领求职" layout="reponsive" className='w-full h-auto'/>
          </div>    

          <div className='bg-white py-24'>
            <SectionTitle title='我们的优势' subtitle='以内推为服务核心，顶级辅导团队'/>

            <div className='px-4 md:px-12 lg:px-36 mt-16 text-center'>
              <div className="flex items-center">
                {/* 左侧引号图片 */}
                <Image src={leftQuoteIamge} alt="Left Quote" className='self-start -mt-10' />

                {/* 文字 */}
                <p className="text-base text-gray-700 mx-4">
                Rexpand求职（睿思班求职）是一家技术驱动的留学生求职咨询公司，核心团队来自于高盛、亚马逊、安永等国际知名企业，拥有1000+来自于九大投资银行、MBB咨询公司、FAANG等科技企业的资深导师。我们利用AI技术驱动求职服务，帮助过超过2000+的同学拿到过包括高盛、谷歌等顶级名企的Offer，致力于帮助每一位美国留学生实现自己的职场梦想。
                </p>

                {/* 右侧引号图片 */}
                <Image src={rightQuoteIamge} alt="Right Quote" className='self-end -mb-10' />
              </div>
            
            </div>            
          </div>

          <div className='bg-white py-24' style={{backgroundColor: '#F2F9F4'}}>
            <div className='flex flex-col md:flex-row gap-12 md:gap-0'>
              <div className='flex-1 flex flex-col items-center gap-2'>
                <Image src={groupImage} alt='资深导师' width={38} height={38}/>
                <h1 className='text-green-600 text-3xl mt-6'>资深导师</h1>
                <h2 className='text-xs text-gray-500'>自于高盛、亚马逊、安永等国际知名企业</h2>
              </div>

              <div className='flex-1 flex flex-col items-center gap-2'>
                <Image src={aiImage} alt='AI技术驱动' />
                <h1 className='text-green-600 text-3xl mt-6'>AI技术驱动</h1>
                <h2 className='text-xs text-gray-500'>用AI技术驱动求职服务</h2>
              </div>


              <div className='flex-1 flex flex-col items-center gap-2'>
                <Image src={studentImage} alt='2000+学员' />
                <h1 className='text-green-600 text-3xl mt-6'>2000+学员</h1>
                <h2 className='text-xs text-gray-500'>帮助每一位美国留学生实现自己的职场梦想</h2>
              </div>
            </div>
          </div>


          <div className='py-36' style={{backgroundColor: '#008A27', backgroundImage: `url(${xpqnBgImage.src})`, backgroundSize: '100% auto'}}>
            <div className='flex flex-col md:flex-row gap-12 px-12'>
              <div className='flex-1 flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-2'>
                  <Image src={pushImage} alt='独一无二的内推服务' />
                  <h1 className='text-white text-xl flex-1'>独一无二的内推服务</h1>
                </div>
                <h2 className='text-xs text-gray-300 pl-8'>利用AI技术驱动内推，保证每周不低于20次的内推</h2>
              </div>

              <div className='flex-1 flex flex-col gap-2'>
                <div className='flex flex-row gap-2'>
                  <Image src={starImage} alt='9年深耕北美求职' />
                  <h1 className='text-white text-xl flex-1'>9年深耕北美求职</h1>
                </div>
                <h2 className='text-xs text-gray-300 pl-8'>自2015年起辅导北美求职，专注于数据、金融和科技方向</h2>
              </div>
              <div className='flex-1 flex flex-col gap-2'>
                <div className='flex flex-row gap-2'>
                  <Image src={userCardImage} alt='双师体制Offer保障' />
                  <h1 className='text-white text-xl flex-1'>双师体制Offer保障</h1>
                </div>

                <h2 className='text-xs text-gray-300 pl-8'>专业辅导老师负责1v1教学，提升技能。班主任负责内推、简历投递、日常答疑，保障求职</h2>
              </div>
            </div>
          </div>



          <div className='py-16' style={{background: `linear-gradient(to bottom, #ffffff, #008a2719)`}}>
            <SectionTitle title='专业导师团队' subtitle='导师均来自于北美顶级企业，平均5年+求职辅导经验' />

            <div className='grid grid-cols-4 gap-6 px-24'>
              {membersData?.map((item)=>{ 
                return <TeamMemberCard key={item.id} data={item}/>
              })}
            </div>
          </div>
        </div>

        
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

