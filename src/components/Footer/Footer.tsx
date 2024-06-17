import React from 'react';
import styles from './Footer.module.css';
import qrRexpandImg from '@/assets/qr_rexpand.png';
import qrDaeImg from '@/assets/qr_dae.png';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import SocialLinks from '../SocialLinks/SocialLinks';
import { socialLinksData } from '@/data/social_link';
import useScreen from '../useScreen/useScreen';
import MenuAccordion from './components/MenuAccordion/MenuAccordion';

const Footer = () => {
  const { isMobile } = useScreen();
 
  return (
      <div>
          {isMobile?.()? 
          <MobileView  />
          :
          <PCView  />
          }
      </div>
  );
}

const MobileView = () => {
  return <footer className={clsx('overflow-auto',styles.m_footer)}>
      <div className={clsx('flex flex-col')}>

        <MenuAccordion data={[{
            id: 1,
            title: '求职课程及服务',
            children: [{
              id: 11,
              title: '求职项目',
              link: '/job/offer-guarantee',
            },{
              id: 12,
              title: '成功案例',
              link: '/success-cases',
            },{
              id: 13,
              title: '免费资源',
              link: '/free-resources',
            },{
              id: 14,
              title: '关于我们',
              link: '/about',
            }],
        },{
          id: 2,
          title: '条款与政策',
          children: [{
            id: 21,
            title: '隐私条款',
            link: '/privacy-policy',
          },{
            id: 22,
            title: '用户服务协议',
            link: '/user-service-agreement',
          },{
            id: 23,
            title: '导师服务协议',
            link: '/mentor-service-agreement',
          }],
      }]}/>
       
      <div className={styles.m_about_box}>
        <h1>关于我们</h1>

        <ul className={clsx('list-reset flex flex-row', styles.m_qr_list)}>
          <li className="text-center">
            <Image
              src={qrRexpandImg} 
              alt='微信公众号' 
              />
            <div className={styles.qr_text}>微信公众号</div>
          </li>
          <li className="text-center">
            <Image
              src={qrDaeImg} 
              alt='微信公众号' 
              />
              <div className={styles.qr_text}>求职咨询联系Dae老师</div>
          </li>
        </ul>
      </div>

        
        <SocialLinks data={socialLinksData} className={styles.m_social_links}/>
      </div>

      <div className={`${styles.m_copy_right} py-4 text-sm`}>© 2022-2024 Rexpand  All rights reserved.  <br/><a href="#">京ICP备2022032082号-1</a></div>
    </footer>;
}

const PCView = () => {
  return <footer className={clsx('overflow-auto',styles.footer)}>
      <div className={clsx('container mx-auto flex flex-col items-center', styles.container)}>
        <div className={clsx('w-full flex flex-col md:flex-row', styles.content)}>
          <div className="flex-1">
            <p className={clsx('text-black', styles.menu)}>求职课程及服务</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/job/offer-guarantee" className={styles.submenu}>求职项目</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href='/success-cases' className={styles.submenu}>成功案例</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/free-resources" className={styles.submenu}>免费资源</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/about" className={styles.submenu}>关于我们</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className={clsx('text-black ', styles.menu)}>条款与政策</p>
            <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/privacy-policy" className={styles.submenu}>隐私条款</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/user-service-agreement" className={styles.submenu}>用户服务协议</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/mentor-service-agreement" className={styles.submenu}>导师服务协议</Link>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className={styles.menu}>关于我们</p>
            <ul className="list-reset flex flex-row gap-10">
              <li className="mt-2 mr-2 md:block md:mr-0 w-20 text-center">
                <Image
                  src={qrRexpandImg} 
                  alt='微信公众号' 
                  />
                <div className={styles.qr_text}>微信公众号</div>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0 w-20 text-center">
                <Image
                  src={qrDaeImg} 
                  alt='微信公众号' 
                  />
                  <div className={styles.qr_text}>求职咨询联系Dae老师</div>
              </li>
            </ul>
          </div>
        </div>

        
        <SocialLinks data={socialLinksData} className='mb-36px'/>
      </div>

      <div className={`${styles.copy_right} py-4 text-sm`}>© 2022-2024 Rexpand  All rights reserved.  <a href="#">京ICP备2022032082号-1</a></div>
    </footer>;
}

export default Footer;
