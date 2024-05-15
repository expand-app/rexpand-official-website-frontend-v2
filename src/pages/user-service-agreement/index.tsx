import React from 'react';
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import Head from "next/head";
import styles from './index.module.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import useScreen from '@/components/useScreen/useScreen';
import clsx from 'clsx';

const UserServiceAgreementPage: NextPage = () => {
  const { isMobile } = useScreen();
 
  const content: JSX.Element = (
    <>
      <h1 className={styles.title}>欢迎使用Rexpand的服务</h1>

      <div>
      以下用户服务协议（“协议”）规定了你与Rexpand（“我们”，“我们的”或“Rexpand”）之间的法律关系。<br />
      在使用我们的服务之前，请仔细阅读本协议。如果你使用我们的服务，就表示你接受本协议的条款。<br />

      <h2>服务描述</h2>
      Rexpand提供全方位求职辅导服务，包括但不限于职业咨询、职业生涯规划、简历修改、面试指导、Networking技能及背景项目提升等。<br />

      <h2>使用规定</h2>
      你同意遵守所有适用的法律，并且你只能为合法目的使用我们的服务。你不得在使用我们的服务时从事任何可能对我们的运营造成干扰的活动，也不得传送任何非法、威胁、诽谤、诋毁、淫秽、令人反感或其他类型的信息。<br />

      <h2>用户责任</h2>
      用户承诺在使用我们的服务时遵守所有适用的法律法规和本协议。你不得利用本服务从事非法活动、侵犯他人权益或损害我们的利益。<br />
      用户应保证提供给我们的个人信息真实、准确和完整，并及时更新。我们将依据你提供的信息为你提供相应的服务。<br />
      用户应自行负责保管账户和密码，并对其在账户下发生的所有活动负全责。如发现未经授权使用账户的情况，应立即通知我们。<br />

      <h2>知识产权</h2>
      我们在提供服务过程中所使用的所有知识产权（包括但不限于著作权、商标权、专利权等）均归我们所有或授权给我们使用。未经我们事先书面同意，用户不得复制、修改、传播、展示、使用或以其他方式利用这些知识产权。<br />
      用户在使用我们的服务时所提供的内容（包括但不限于简历、个人陈述等）应当是合法、真实、准确和完整的。用户对其所提供的内容享有相应的知识产权，但同时授予我们免费、不可撤销、非独家和全球范围内的许可，以便我们在提供服务的过程中使用、复制、传播、展示和修改该内容。<br />

      <h2>免责声明</h2>
      我们将尽力保证服务的安全性和可靠性，但不对服务的连续性、准确性、可靠性、安全性和适用性提供任何明示或暗示的担保。<br />
      用户理解并同意，使用我们的服务所产生的风险由用户自行承担。在适用法律下允许的最大范围内，我们对因使用或无法使用我们的服务而导致的任何直接或间接损失或损害不承担任何责任，包括但不限于利润损失、数据损失、业务中断或其他经济损失。<br />

      <h2>隐私保护</h2>
      我们将按照适用的法律法规和隐私政策保护用户的个人信息。我们的隐私政策详细说明了我们如何收集、使用、披露和保护用户的个人信息，请你仔细阅读并理解隐私政策的内容。<br />
      用户理解并同意，为了提供更好的服务，我们可能会收集和使用用户的个人信息，并可能与第三方合作伙伴共享用户的个人信息。我们将采取合理的措施保护用户的个人信息安全。<br />

      <h2>协议的变更和适用法律</h2>
      我们有权随时修改本协议的内容，并在我们的官网公布更新后的协议。用户应定期查看协议的变更情况。对于协议的重大变更，我们将通过适当的方式通知用户。<br />
      本协议的解释、有效性、执行和争议解决均适用于适用法律。如发生本协议条款与适用法律相抵触的情况，应以适用法律为准。<br />
      请注意，本用户服务协议仅为展示目的，不构成用户与Rexpand之间的合同。如你决定使用我们的服务，请遵守实际签署的具有法律约束力的协议。<br />
      如果你对本协议或我们的服务有任何疑问或意见，请联系我们的客户服务团队。感谢你选择Rexpand提供的求职辅导服务。<br />
      更新日期：2024年5月1日
      </div>
    </>
  );

  return (
      <>
        <Head>
        <title>用户服务协议 - Rexpand</title>
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
}
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
              title: '用户服务协议',
              path: '/privacy-policy',
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
        
        <div className=" container mx-auto max-w-screen-lg px-4">
          <div className={styles.breadcrumb_box}>
            <Breadcrumb items={[{
              title: '首页',
              path: '/',
            },{
              title: '用户服务协议',
              path: '/user-service-agreement',
            }]}/>
          </div>
          <div className={clsx('', styles.box)} >
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserServiceAgreementPage;

interface Props {
  children: JSX.Element;
}