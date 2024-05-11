import React from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import clsx from 'clsx';

export const PrivacyPolicyPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>隐私条款 - Rexpand</title>
        <meta
          name="description"
          content="Learn more about My Company, our mission, and what we do."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
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
      <main className={clsx('mt-24 mb-12',styles.main)}>
        
        <div className="container mx-auto max-w-screen-lg">
          <div className={styles.breadcrumb_box}>
            <Breadcrumb items={[{
              title: '首页',
              path: '/',
            },{
              title: '隐私政策',
              path: '/privacy-policy',
            }]} 
            className={styles.breadcrumb}/>
          </div>

          <div className={clsx('', styles.box)} >
            <h1 className={styles.title}>欢迎来到Rexpand</h1>

            <div>
            “我们”，“我们的”，或“Rexpand”。我们尊重你的隐私，并承诺保护你的个人信息。以下隐私政策（“政策”）解释了我们如何收集、使用、披露和保护你通过我们的网站和服务提供的信息。<br />
            在使用Rexpand的服务或访问我们的网站时，请确认你已阅读、理解并同意本政策中描述的数据处理行为。<br />
            
            <span className='font-bold'>信息收集</span><br />
            我们可能会收集和处理以下信息：<br />
            <ul className='list-disc pl-5'>
              <li>你向我们提供的信息，如在注册或求职辅导服务中提供的信息（例如，姓名，电子邮件地址，电话号码，邮寄地址，职业背景和教育信息）。</li>
              <li>我们自动收集的技术信息，包括IP地址，浏览器类型，访问时间等。</li>
              <li>使用cookies和其他追踪技术收集的信息。</li>
            </ul>
            
            <span className='font-bold'>信息使用</span><br />
            我们可能会将收集到的信息用于以下目的：
            <ol className='list-decimal pl-5'>
              <li>提供，改进和个性化我们的服务；</li>
              <li>管理你的帐户并处理付款；</li>
              <li>与你沟通，例如回应你的查询；</li>
              <li>遵守法律要求和防止非法活动。</li>
            </ol>
            
            <span className='font-bold'>信息共享和披露</span><br/>
            
            除非本政策另有规定，否则我们不会与第三方分享你的个人信息。我们可能会在以下情况下分享或披露你的信息：
            
            <ul className='list-disc pl-5'>
              <li>获得你的同意后；</li>
              <li>法律要求，或为了保护我们的权利和财产；</li>
            </ul>
            
            
            <span className='font-bold'>数据安全</span><br />
            我们致力于保护你的个人信息的安全。我们使用各种安全技术和程序来保护你的个人信息免受未经授权的访问、使用或披露。<br />
            <span className='font-bold'>政策更改</span><br />
            我们保留随时修改此政策的权利。任何更改将在我们的网站上公布，并附上最新的生效日期。请定期查阅，以了解我们的最新隐私政策。<br />
            <span className='font-bold'>Cookie政策</span><br />
            我们可能使用cookies和类似技术来改进和个性化你的用户体验，如果你的浏览器设置允许cookies，我们将视为你接受我们的cookies使用。<br />
            <span className='font-bold'>数据存储和转移</span><br />
            你的信息可能会存储并在全球范围内处理，这可能包括通过云基础设施进行存储和处理。在这些地方的数据保护法可能与你所在国家/地区的法律不同。如果我们将你的个人数据转移到其他国家/地区，我们将采取措施保护你的个人信息，以确保符合适用的法律。<br />
            <span className='font-bold'>第三方链接</span><br />
            我们的网站可能包含指向其他网站的链接。请注意，我们对这些网站的内容或隐私政策不负任何责任。我们建议你阅读这些网站的隐私政策。<br />
            <span className='font-bold'>你的权利</span> <br />
            根据适用的法律，你可能有权访问、更正、删除你的个人信息，以及限制或反对我们使用你的信息。如果你希望行使这些权利，或者有任何关于你的信息如何被我们处理的问题，请联系我们。<br />
            <span className='font-bold'>联系我们</span> <br />
            感谢你花时间阅读我们的隐私政策。同时，我们鼓励你在使用我们的服务前，了解我们如何处理你的信息以及你可以如何行使你的权利。如果你对我们的隐私政策有任何问题或疑虑，或者想要更新、更正或删除你的个人信息，请通过以下方式联系我们：
            电子邮箱：info@rexpandco.com<br />
            更新日期：2024年5月1日

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
