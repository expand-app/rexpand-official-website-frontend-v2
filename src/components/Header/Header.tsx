import React, { useState } from 'react';
import styles from './Header.module.css';
import Button, { ButtonSize, ButtonType } from '../Button/Button';
import Image from 'next/image';
import whiteLogoImg from '@/assets/logo_white.svg';
import greenLogoImg from '@/assets/logo_green.svg';
import clsx from 'clsx';
import JobConsultModal from '../JobConsultModal/JobConsultModal';
import Link from 'next/link';

const Header = ({className, theme = Theme.TRANSPARENT}: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  let combinedClassName = `absolute w-full z-30 top-0 text-white shadow-md ${className ?? ''}`;

  if (theme === Theme.LIGHT) {
    combinedClassName = clsx(combinedClassName, ['bg-white'])
  }

  const handleJobConsultClick = ()=>{
    setOpen(true);
  }

  return <nav className={combinedClassName}>
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 h-20">
      <div className="pl-4 flex items-center">
        <Link href="/" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" >
          <Image src={theme === Theme.TRANSPARENT ? whiteLogoImg:greenLogoImg} width={140} height={42} alt='logo'/>
        </Link>
      </div>
      <div className="block lg:hidden pr-4">
        <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul className={clsx('list-reset lg:flex justify-center flex-1 items-center text-base', styles.menu)}>
          <li className="mr-3 relative">
            <a className={clsx('inline-block py-2 px-4 no-underline', {'text-white': theme === Theme.TRANSPARENT})} href="#">求职项目</a>
            <div className={clsx('', styles.submenu_container)}>
              <ul className={clsx('', styles.submenu)}>
                <li><Link href='/job/offer-guarantee'>保Offer项目</Link></li>
                <li><Link href='/job/interview-camp'>面试集中营</Link></li>
                <li><Link href='/job/internship/data-analysis'>数据分析实习</Link></li>
                <li><Link href='/job/internship/quantitative-investment'>量化投资实习</Link></li>
                <li><Link href='/job/internship/investment-banking-modeling'>投行建模实习</Link></li>
                <li><Link href='/job/internship/full-stack-dev'>全栈开发实习</Link></li>
              </ul>
            </div>
          </li>
          <li className="mr-3">
            <a className={clsx('inline-block no-underline py-2 px-4', {'text-white': theme === Theme.TRANSPARENT})} href="/success-cases">成功案例</a>
          </li>
          <li className="mr-3">
            <Link className={clsx('inline-block no-underline py-2 px-4', {'text-white': theme === Theme.TRANSPARENT})} href="/free-resources">免费资源</Link>
          </li>
          <li className="mr-3">
            <Link className={clsx('inline-block no-underline py-2 px-4', {'text-white': theme === Theme.TRANSPARENT})} href="/about">关于我们</Link>
          </li>
        </ul>
        <Button text='求职咨询' type={ButtonType.SOLID} size={ButtonSize.SMALL} onClick={handleJobConsultClick}></Button>
      </div>


    </div>
    {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}

    <JobConsultModal open={open} onClose={()=>setOpen(false)}/>
  </nav>;
}

export default Header;

interface Props {
  className?: string;
  theme?: Theme;
}

export enum Theme {
  LIGHT,
  TRANSPARENT,
}