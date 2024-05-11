import React, { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.css';
import Button, { ButtonColor, ButtonSize, ButtonType } from '../Button/Button';
import Image from 'next/image';
import whiteLogoImg from '@/assets/logo_white.svg';
import greenLogoImg from '@/assets/logo_green.svg';
import clsx from 'clsx';
import JobConsultModal from '../JobConsultModal/JobConsultModal';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useScreen from '../useScreen/useScreen';

const jobMenuLinks = [
  '/job/offer-guarantee',
  '/job/interview-camp',
  '/job/internship/data-analysis',
  '/job/internship/quantitative-investment',
  '/job/internship/investment-banking-modeling',
  '/job/internship/full-stack-dev',
];


const Header = ({...props}: Props) => {
  const { isMobile } = useScreen();
 
  return (
      <div>
          {isMobile?.()? 
          <MobileView {...props} />
          :
          <PCView {...props} />
          }
      </div>
  );
}

const MobileView = ({className, theme = Theme.TRANSPARENT}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [initialTheme, setInitialTheme] = useState<Theme>(theme);
  const [headerTheme, setHeaderTheme] = useState<Theme>(theme);

  const router = useRouter();
  const currentPath = router.pathname;
  let combinedClassName = `fixed w-full z-30 top-0 transition ${className ?? ''}`;

  if (headerTheme === Theme.TRANSPARENT) {
    combinedClassName = clsx(combinedClassName, styles.transparent);
  } else if (headerTheme === Theme.LIGHT) {
    combinedClassName = clsx(combinedClassName,'shadow-sm', styles.light);
  } 

  const handleJobConsultClick = ()=>{
    setOpen(true);
  }

  useEffect(() => {  
    const handleScroll = () => {  
      const x = window.scrollX;
      const y = window.scrollY;

      if (initialTheme === Theme.TRANSPARENT) {
        if (y > 100) {
          setHeaderTheme(Theme.LIGHT);
        } else {
          setHeaderTheme(Theme.TRANSPARENT);
        }
      }
    };  
  
    window.addEventListener('scroll', handleScroll);  
  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, [initialTheme]);

  const onMouseEnterParent = () => {
      setHeaderTheme(Theme.LIGHT);
  }

  const onMouseOutParent = () => {
    const y = window.scrollY;
    if (y <= 100) {
      setHeaderTheme(initialTheme);
    }
  }
  
  return <nav className={combinedClassName} onMouseOver={onMouseEnterParent} onMouseOut={onMouseOutParent}>
    <div className={clsx("w-full  container mx-auto flex flex-wrap items-center justify-between mt-0", styles.m_header_container)}>
      <div className="flex items-center">
        <Link href="/" className="" >
          <Image src={headerTheme === Theme.TRANSPARENT ? whiteLogoImg:greenLogoImg} width={170} height={37} alt='logo'
            style={{height: 24}}/>
        </Link>
      </div>
      <div className="block pr-4">
        <button id="nav-toggle" className="flex items-center p-1 text-black hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul className={clsx('list-reset lg:flex justify-center flex-1 items-center', styles.menu)}>
          <li className={clsx('mr-3 relative', styles.menu_item_box)}>
            <Link className={clsx(
              'inline-block py-2 px-4 no-underline transition', 
              styles.menu_item,
              {'text-white': headerTheme === Theme.TRANSPARENT},
              {[styles.menu_item_active]: jobMenuLinks.indexOf(currentPath) != -1})} href='/job/offer-guarantee'>求职项目</Link>
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
            <Link className={clsx(
              'inline-block no-underline py-2 px-4 transition', 
              {'text-white': headerTheme === Theme.TRANSPARENT},
              {[styles.menu_item_active]: currentPath === '/success-cases'})} href="/success-cases">成功案例</Link>
          </li>
          <li className="mr-3">
            <Link className={clsx(
              'inline-block no-underline py-2 px-4 transition', 
              {'text-white': headerTheme === Theme.TRANSPARENT},
              {[styles.menu_item_active]: currentPath.startsWith('/free-resources')})} href="/free-resources">免费资源</Link>
          </li>
          <li className="mr-3">
            <Link className={clsx(
              'inline-block no-underline py-2 px-4 transition', 
              {'text-white': headerTheme === Theme.TRANSPARENT},
              {[styles.menu_item_active]: currentPath === '/about'})} href="/about">关于我们</Link>
          </li>
        </ul>
        <Button 
          text='求职咨询' 
          className={styles.consult_btn}
          type={ButtonType.SOLID} 
          size={ButtonSize.SMALL} 
          color={ButtonColor.GREEN}
          onClick={handleJobConsultClick}></Button>
      </div>


    </div>
    {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}

    <JobConsultModal open={open} onClose={()=>setOpen(false)}/>
  </nav>;
}


const PCView = ({className, theme = Theme.TRANSPARENT}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [initialTheme, setInitialTheme] = useState<Theme>(theme);
  const [headerTheme, setHeaderTheme] = useState<Theme>(theme);

  const router = useRouter();
  const currentPath = router.pathname;
  console.log('currentPath',currentPath, jobMenuLinks.indexOf(currentPath));
  let combinedClassName = `fixed w-full z-30 top-0 transition ${className ?? ''}`;

  if (headerTheme === Theme.TRANSPARENT) {
    combinedClassName = clsx(combinedClassName, styles.transparent);
  } else if (headerTheme === Theme.LIGHT) {
    combinedClassName = clsx(combinedClassName,'shadow-sm', styles.light);
  } 

  const handleJobConsultClick = ()=>{
    setOpen(true);
  }

  useEffect(() => {  
    const handleScroll = () => {  
      const x = window.scrollX;
      const y = window.scrollY;

      if (initialTheme === Theme.TRANSPARENT) {
        if (y > 100) {
          setHeaderTheme(Theme.LIGHT);
        } else {
          setHeaderTheme(Theme.TRANSPARENT);
        }
      }
    };  
  
    window.addEventListener('scroll', handleScroll);  
  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, [initialTheme]);

  const onMouseEnterParent = () => {
      setHeaderTheme(Theme.LIGHT);
  }

  const onMouseOutParent = () => {
    const y = window.scrollY;
    if (y <= 100) {
      setHeaderTheme(initialTheme);
    }
  }
  
  return <nav className={combinedClassName} onMouseOver={onMouseEnterParent} onMouseOut={onMouseOutParent}>
    <div className={clsx("w-full mx-auto flex flex-wrap items-center justify-between mt-0", styles.header_container)}>
      <div className="pl-4 flex items-center">
        <Link href="/" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" >
          <Image src={headerTheme === Theme.TRANSPARENT ? whiteLogoImg:greenLogoImg} width={170} height={37} alt='logo'/>
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
        <ul className={clsx('list-reset lg:flex justify-center flex-1 items-center', styles.menu)}>
          <li className={clsx('mr-3 relative', styles.menu_item_box)}>
            <Link className={clsx(
              'inline-block py-2 px-4 no-underline transition', 
              styles.menu_item,
              {'text-white': headerTheme === Theme.TRANSPARENT},
              {[styles.menu_item_active]: jobMenuLinks.indexOf(currentPath) != -1})} href='/job/offer-guarantee'>求职项目</Link>
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
          <li className={clsx("mr-3", styles.menu_item_box)}>
            <Link className={clsx(
              'inline-block no-underline py-2 px-4 transition', 
              {'text-white': headerTheme === Theme.TRANSPARENT},
              styles.menu_item,
              {[styles.menu_item_active]: currentPath === '/success-cases'})} href="/success-cases">成功案例</Link>
          </li>
          <li className={clsx("mr-3", styles.menu_item_box)}>
            <Link className={clsx(
              'inline-block no-underline py-2 px-4 transition', 
              {'text-white': headerTheme === Theme.TRANSPARENT},
              styles.menu_item,
              {[styles.menu_item_active]: currentPath.startsWith('/free-resources')})} href="/free-resources">免费资源</Link>
          </li>
          <li className={clsx("mr-3", styles.menu_item_box)}>
            <Link className={clsx(
              'inline-block no-underline py-2 px-4 transition', 
              {'text-white': headerTheme === Theme.TRANSPARENT},
              styles.menu_item,
              {[styles.menu_item_active]: currentPath === '/about'})} href="/about">关于我们</Link>
          </li>
        </ul>
        <Button 
          text='求职咨询' 
          className={styles.consult_btn}
          type={ButtonType.SOLID} 
          size={ButtonSize.SMALL} 
          color={ButtonColor.GREEN}
          onClick={handleJobConsultClick}></Button>
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