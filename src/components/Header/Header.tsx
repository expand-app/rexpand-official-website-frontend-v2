import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Button, { ButtonColor, ButtonSize, ButtonType } from "../Button/Button";
import Image from "next/image";
import whiteLogoImg from "@/assets/logo_white.svg";
import greenLogoImg from "@/assets/logo_green.svg";
import clsx from "clsx";
import JobConsultModal from "../JobConsultModal/JobConsultModal";
import Link from "next/link";
import { useRouter } from "next/router";
import useScreen from "../useScreen/useScreen";
import mArrowUp from "@/assets/m_icon_menu_arrow_up.png";
import { consultModalData } from "@/data/job_consult";

const jobMenuLinks = [
  "/job/offer-guarantee",
  "/job/interview-camp",
  "/job/internship/data-analysis",
  "/job/internship/quantitative-investment",
  "/job/internship/investment-banking-modeling",
  "/job/internship/full-stack-dev",
];

const Header = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <>{isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}</>
  );
};

const MobileView = ({ className, theme = Theme.TRANSPARENT }: Props) => {
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [initialTheme, setInitialTheme] = useState<Theme>(theme);
  const [lastTheme, setLastTheme] = useState<Theme>(theme);
  const [headerTheme, setHeaderTheme] = useState<Theme>(theme);

  const [expand, setExpand] = useState<boolean>(false);

  const router = useRouter();
  const currentPath = router.pathname;
  let combinedClassName = `fixed w-full z-30 top-0 transition ${
    className ?? ""
  }`;

  if (headerTheme === Theme.TRANSPARENT) {
    combinedClassName = clsx(combinedClassName, styles.transparent);
  } else if (headerTheme === Theme.LIGHT) {
    combinedClassName = clsx(combinedClassName, "shadow-sm", styles.light);
  }

  const handleJobConsultClick = () => {
    setConsultModalOpen(true);
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTheme]);

  const onMouseEnterParent = () => {
    setHeaderTheme(Theme.LIGHT);
  };

  const onMouseOutParent = () => {
    const y = window.scrollY;
    if (y <= 100) {
      setHeaderTheme(initialTheme);
    }
  };
  const onMenuBtnClick = () => {
    if (menuOpen === true) {
      // restore init theme
      setHeaderTheme(lastTheme);
    } else {
      setLastTheme(headerTheme);
      setHeaderTheme(Theme.LIGHT);
    }
    setMenuOpen(!menuOpen);
  };

  const onLevel1MenuClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setExpand(!expand);
  };

  const onMenuLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (
      currentPath &&
      event?.currentTarget?.pathname &&
      currentPath === event.currentTarget.pathname
    ) {
      router.reload();
    }
  };

  return (
    <nav className={combinedClassName}>
      <div
        className={clsx(
          "w-full flex flex-row items-center mr-23px",
          styles.m_header_container
        )}
      >
        <Link href="/" className="flex-1">
          <Image
            src={
              headerTheme === Theme.TRANSPARENT ? whiteLogoImg : greenLogoImg
            }
            width={130}
            height={37}
            alt="logo"
            style={{ height: 24 }}
          />
        </Link>

        <div className="mr-12px z-10 flex flex-row">
          <Button
            text="求职咨询"
            className={styles.m_consult_btn}
            type={ButtonType.SOLID}
            size={ButtonSize.SMALL}
            color={
              headerTheme === Theme.LIGHT
                ? ButtonColor.GREEN
                : ButtonColor.WHITE
            }
            onClick={handleJobConsultClick}
          ></Button>
          <button
            onClick={onMenuBtnClick}
            className="flex items-center p-1 text-black hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {menuOpen === true ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_286_8888)">
                  <path
                    d="M17.3331 1.05283C17.549 1.26872 17.6702 1.56149 17.6702 1.86676C17.6702 2.17203 17.549 2.4648 17.3331 2.68069L10.8205 9.1933L17.3331 15.7059C17.5428 15.923 17.6589 16.2138 17.6563 16.5157C17.6536 16.8175 17.5326 17.1063 17.3191 17.3197C17.1057 17.5332 16.8169 17.6543 16.5151 17.6569C16.2132 17.6595 15.9224 17.5435 15.7053 17.3338L9.19266 10.8212L2.68006 17.3338C2.46195 17.5383 2.17283 17.6499 1.87387 17.6451C1.57491 17.6402 1.28957 17.5193 1.07822 17.3078C0.866872 17.0963 0.746099 16.8108 0.741456 16.5119C0.736813 16.2129 0.848664 15.9239 1.05334 15.7059L7.5648 9.1933L1.05219 2.68069C0.847667 2.46259 0.73602 2.17347 0.740875 1.87451C0.745729 1.57555 0.866705 1.29021 1.0782 1.07886C1.2897 0.867509 1.57513 0.746735 1.87409 0.742092C2.17306 0.737449 2.4621 0.849301 2.68006 1.05398L9.19266 7.56543L15.7053 1.05283C15.9212 0.837003 16.2139 0.715759 16.5192 0.715759C16.8245 0.715759 17.1172 0.837003 17.3331 1.05283Z"
                    fill="#1B1B1B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_286_8888">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : headerTheme === Theme.LIGHT ? (
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="3" rx="1.5" fill="#1B1B1B" />
                <rect y="7" width="24" height="3" rx="1.5" fill="#1B1B1B" />
                <rect y="14" width="24" height="3" rx="1.5" fill="#1B1B1B" />
              </svg>
            ) : (
              <svg
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="3" rx="1.5" fill="white" />
                <rect y="7" width="24" height="3" rx="1.5" fill="white" />
                <rect y="14" width="24" height="3" rx="1.5" fill="white" />
              </svg>
            )}
          </button>
        </div>

        <div className={clsx(styles.m_menu_box, { [styles.open]: menuOpen })}>
          <div className={styles.m_menu_content}>
            <ul className={styles.m_menu}>
              <li>
                <Link href="/" onClick={onMenuLinkClick}>
                  首页
                </Link>
              </li>
              <li className={clsx({ [styles.m_expand]: expand })}>
                <Link href="/job/offer-guarantee" onClick={onLevel1MenuClick}>
                  求职项目
                  <i>
                    <Image
                      alt=""
                      className={styles.m_arrow}
                      src={mArrowUp}
                      width={15}
                      height={15}
                    />
                  </i>
                </Link>
                <ul>
                  <li>
                    <Link href="/job/offer-guarantee" onClick={onMenuLinkClick}>
                      保offer项目
                    </Link>
                  </li>
                  <li>
                    <Link href="/job/interview-camp" onClick={onMenuLinkClick}>
                      面试集训营
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/data-analysis"
                      onClick={onMenuLinkClick}
                    >
                      数据分析实习
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/quantitative-investment"
                      onClick={onMenuLinkClick}
                    >
                      量化投资实习
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/investment-banking-modeling"
                      onClick={onMenuLinkClick}
                    >
                      投行建模实习
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/full-stack-dev"
                      onClick={onMenuLinkClick}
                    >
                      全栈开发实习
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/success-cases" onClick={onMenuLinkClick}>
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/free-resources" onClick={onMenuLinkClick}>
                  免费资源
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={onMenuLinkClick}>
                  关于我们
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}

      <JobConsultModal
        open={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        qrImage={consultModalData.qrImage}
        content={consultModalData.content}
      />
    </nav>
  );
};

const PCView = ({ className, theme = Theme.TRANSPARENT }: Props) => {
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [initialTheme, setInitialTheme] = useState<Theme>(theme);
  const [headerTheme, setHeaderTheme] = useState<Theme>(theme);

  const router = useRouter();
  const currentPath = router.pathname;
  let combinedClassName = `fixed w-full z-30 top-0 transition ${
    className ?? ""
  }`;

  if (headerTheme === Theme.TRANSPARENT) {
    combinedClassName = clsx(combinedClassName, styles.transparent);
  } else if (headerTheme === Theme.LIGHT) {
    combinedClassName = clsx(combinedClassName, "shadow-sm", styles.light);
  }

  const handleJobConsultClick = () => {
    setConsultModalOpen(true);
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTheme]);

  const onMouseEnterParent = () => {
    setHeaderTheme(Theme.LIGHT);
  };

  const onMouseOutParent = () => {
    const y = window.scrollY;
    if (y <= 100) {
      setHeaderTheme(initialTheme);
    }
  };
  const onMenuLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (
      currentPath &&
      event?.currentTarget?.pathname &&
      currentPath === event.currentTarget.pathname
    ) {
      router.reload();
    }
  };

  return (
    <nav
      className={combinedClassName}
      onMouseOver={onMouseEnterParent}
      onMouseOut={onMouseOutParent}
    >
      <div
        className={clsx(
          "w-full mx-auto flex flex-wrap items-center justify-between mt-0",
          styles.header_container
        )}
      >
        <div className="pl-4 flex items-center" style={{ flexBasis: 186 }}>
          <Link
            href="/"
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <Image
              src={
                headerTheme === Theme.TRANSPARENT ? whiteLogoImg : greenLogoImg
              }
              width={170}
              height={37}
              alt="logo"
              priority={true}
            />
          </Link>
        </div>
        {/* <div className="block lg:hidden pr-4">
        <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}

        <div className="flex-grow flex items-center w-auto mt-0 bg-transparent text-black p-0 flex-1">
          <ul
            className={clsx(
              "list-reset flex justify-center flex-1 items-center",
              styles.menu
            )}
          >
            <li className={clsx("mr-3 relative", styles.menu_item_box)}>
              <Link
                className={clsx(
                  "inline-block py-2 px-4 no-underline transition text-nowrap",
                  styles.menu_item,
                  { "text-white": headerTheme === Theme.TRANSPARENT },
                  {
                    [styles.menu_item_active]:
                      jobMenuLinks.indexOf(currentPath) != -1,
                  }
                )}
                href="/job/offer-guarantee"
                onClick={onMenuLinkClick}
              >
                求职项目
              </Link>
              <div className={clsx("", styles.submenu_container)}>
                <ul className={clsx("", styles.submenu)}>
                  <li>
                    <Link href="/job/offer-guarantee" onClick={onMenuLinkClick}>
                      保offer项目
                    </Link>
                  </li>
                  <li>
                    <Link href="/job/interview-camp" onClick={onMenuLinkClick}>
                      面试集训营
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/data-analysis"
                      onClick={onMenuLinkClick}
                    >
                      数据分析实习
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/quantitative-investment"
                      onClick={onMenuLinkClick}
                    >
                      量化投资实习
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/investment-banking-modeling"
                      onClick={onMenuLinkClick}
                    >
                      投行建模实习
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/job/internship/full-stack-dev"
                      onClick={onMenuLinkClick}
                    >
                      全栈开发实习
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={clsx("mr-3", styles.menu_item_box)}>
              <Link
                className={clsx(
                  "inline-block no-underline py-2 px-4 transition text-nowrap",
                  { "text-white": headerTheme === Theme.TRANSPARENT },
                  styles.menu_item,
                  {
                    [styles.menu_item_active]: currentPath === "/success-cases",
                  }
                )}
                href="/success-cases"
              >
                成功案例
              </Link>
            </li>
            <li className={clsx("mr-3", styles.menu_item_box)}>
              <Link
                className={clsx(
                  "inline-block no-underline py-2 px-4 transition text-nowrap",
                  { "text-white": headerTheme === Theme.TRANSPARENT },
                  styles.menu_item,
                  {
                    [styles.menu_item_active]:
                      currentPath.startsWith("/free-resources"),
                  }
                )}
                href="/free-resources"
              >
                免费资源
              </Link>
            </li>
            <li className={clsx("mr-3", styles.menu_item_box)}>
              <Link
                className={clsx(
                  "inline-block no-underline py-2 px-4 transition text-nowrap",
                  { "text-white": headerTheme === Theme.TRANSPARENT },
                  styles.menu_item,
                  { [styles.menu_item_active]: currentPath === "/about" }
                )}
                href="/about"
              >
                关于我们
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.consult_btn_container}>
          <Button
            text="求职咨询"
            className={styles.consult_btn}
            type={ButtonType.SOLID}
            size={ButtonSize.SMALL}
            color={ButtonColor.GREEN}
            onClick={handleJobConsultClick}
          ></Button>
        </div>
      </div>
      {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}

      <JobConsultModal
        open={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        qrImage={consultModalData.qrImage}
        content={consultModalData.content}
      />
    </nav>
  );
};

export default Header;

interface Props {
  className?: string;
  theme?: Theme;
}

export enum Theme {
  LIGHT,
  TRANSPARENT,
}
