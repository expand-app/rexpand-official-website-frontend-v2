import React from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import clsx from 'clsx';
import useScreen from '@/components/useScreen/useScreen';

export const UserServiceAgreementPage: NextPage = () => {
  const { isMobile } = useScreen();

  const content: JSX.Element = (
    <>
       <h1 className='text-2xl text-center my-8'>欢迎你成为Rexpand的导师</h1>
        <div>
        以下是我们的导师服务协议（以下简称“协议”），请仔细阅读并确认你同意受其约束。<br />

        <span className='font-bold'>导师服务描述</span><br />
        Rexpand是一家提供求职辅导服务的机构，为学员提供职业咨询、职业生涯规划、简历修改、面试指导、Networking技能及背景项目提升等。 导师的角色是为学员提供个人指导和辅导，分享求职经验、提供专业建议，并帮助学员提升求职能力。<br />

        <span className='font-bold'>导师资格</span><br />
        导师应具备相关的职业经验和专业知识，并能够有效地传授和指导学员。 导师应具备良好的沟通能力、耐心和责任心，并以学员的利益为优先考虑。<br />

        <span className='font-bold'>导师责任</span><br />
        导师应尽最大努力为学员提供专业、准确和有用的求职建议和指导。 导师应根据学员的需求和情况，制定个性化的学习计划和目标，并帮助学员实现这些目标。 导师应保护学员的隐私和个人信息的机密性，不得将学员的信息披露给任何第三方，除非获得学员的明确授权或根据法律要求。<br />

        <span className='font-bold'>导师报酬</span><br />
        导师服务的报酬将根据双方协商达成的协议确定。 导师应按照约定的报酬方式和时间收取报酬，并及时向公司提供相关的支付信息。<br />

        <span className='font-bold'>知识产权</span><br />
        导师在提供服务过程中创作的任何文字、图像、视频或其他形式的作品均属于导师的知识产权。导师保留其作品的所有权利。 导师同意授予公司免费、全球范围内的非独家许可，以便公司在推广和宣传服务的目的下使用、复制、传播、展示和修改导师的作品。<br />

        <span className='font-bold'>服务终止和违约</span><br />
        双方均有权根据合理的事先通知终止本协议。在终止协议后，导师不再享有提供导师服务的权利，且不得以任何方式冒用公司的名义提供类似的服务。 如导师违反本协议的任何规定，包括但不限于泄露学员信息、提供虚假信息或故意误导学员等行为，公司有权立即终止本协议，并保留追究导师责任的权利。<br />

        <span className='font-bold'>保密条款</span><br />
        导师应对在提供导师服务过程中接触到的学员信息和公司机密保密，并不得向任何第三方透露或使用该信息，除非获得学员或公司的明确授权或法律要求。 导师应采取合理的措施保护学员信息的安全性，防止未经授权的访问、使用或泄露。<br />

        <span className='font-bold'>协议的变更和适用法律</span><br />
        公司有权随时修改本协议的内容，并在公司官网上公布更新后的协议。导师应定期查阅协议的变更情况。对于协议的重大变更，公司将通过适当的方式通知导师。 本协议的解释、有效性、执行和争议解决均适用于适用法律。如发生本协议条款与适用法律相抵触的情况，应以适用法律为准。<br />
        请注意，本导师服务协议仅为展示目的，不构成导师与Rexpand之间的合同。如你决定成为我们的导师，请遵守实际签署的具有法律约束力的协议。<br />
        如果你对本协议或我们的服务有任何疑问或意见，请联系我们的客户服务团队。<br />
        更新日期：2024年5月1日

        </div>
    </>

  );
  return (
    <>
      <Head>
        <title>导师服务协议 - Rexpand</title>
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
          <MobileView >
            {content}
          </MobileView>
          :
          <PCView >
            {content}
          </PCView>
          }
      </div>
    </>
  );
};

const MobileView = ({children}: Props) => {
  return (
    <div>
      <Header theme={Theme.LIGHT}/>
      <main className={clsx('',styles.m_main)}>
        
        <div className="container mx-auto max-w-screen-lg">
          <div className={styles.m_breadcrumb_box}>
          <Breadcrumb items={[{
              title: '首页',
              path: '/',
            },{
              title: '导师服务协议',
              path: '/mentor-service-agreement',
            }]}
            className={styles.breadcrumb}/>
          </div>

          <div className={clsx('', styles.m_box)} >
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const PCView = ({children}: Props) => {
  return (
    <div>
      <Header theme={Theme.LIGHT}/>
      <main className={clsx('mt-24 mb-12',styles.main)}>
        
        <div className="container mx-auto max-w-screen-lg">
          <div className={styles.breadcrumb_box}>
          <Breadcrumb items={[{
              title: '首页',
              path: '/',
            },{
              title: '导师服务协议',
              path: '/mentor-service-agreement',
            }]}
            className={styles.breadcrumb}/>
          </div>

          <div className={clsx('', styles.box)} >
          {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default UserServiceAgreementPage;


interface Props {
  children: JSX.Element;
}