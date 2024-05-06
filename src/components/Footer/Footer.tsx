import React from 'react';
import styles from './Footer.module.css';
import qrRexpandImg from '@/assets/qr_rexpand.png';
import qrDaeImg from '@/assets/qr_dae.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return <footer className={styles.footer}>
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1">
            <p className="text-black md:mb-6 font-bold text-base">求职课程及服务</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="text-sm no-underline text-gray-500 hover:text-green-500">求职项目</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href='/success-cases' className="text-sm no-underline text-gray-500 hover:text-green-500">成功案例</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/free-resources" className="text-sm no-underline text-gray-500 hover:text-green-500">免费资源</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/about" className="text-sm no-underline text-gray-500 hover:text-green-500">关于我们</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="text-black md:mb-6 font-bold text-base">条款与政策</p>
            <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/privacy-policy" className="text-sm no-underline text-gray-500 hover:text-green-500">隐私条款</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/user-service-agreement" className="text-sm no-underline text-gray-500 hover:text-green-500">用户服务协议</Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="/mentor-service-agreement" className="text-sm no-underline text-gray-500 hover:text-green-500">导师服务协议</Link>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="text-black md:mb-6 font-bold text-base">关于我们</p>
            <ul className="list-reset flex flex-row gap-10">
              <li className="mt-2 mr-2 md:block md:mr-0 w-20 text-center">
                <Image
                  src={qrRexpandImg} 
                  alt='微信公众号' 
                  />
                <div className='text-xs'>微信公众号</div>
              </li>
              <li className="mt-2 mr-2 md:block md:mr-0 w-20 text-center">
                <Image
                  src={qrDaeImg} 
                  alt='微信公众号' 
                  />
                  <div className='text-xs'>求职咨询联系Dae老师</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.copy_right} py-4 text-sm`}>© 2022-2024 Rexpand  All rights reserved.  <a href="#">京ICP备2022032082号-1</a></div>
    </footer>;
}

export default Footer;
