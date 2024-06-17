import Button, {
  ButtonColor,
  ButtonRadius,
  ButtonSize,
  ButtonType,
} from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import clsx from "clsx";
import { NextPage } from "next";
import bannerImg from "@/assets/home/banner.png";
import mBannerImg from "@/assets/home/m_banner.png";
import offer1Img from "@/assets/home/offer_1.svg";
import styles from "./index.module.css";
import Image from "next/image";
import VerticalTabs from "@/components/VerticalTabs/VerticalTabs";
import {
  offerGuaranteeTabsData,
  internshipProjectCardsData,
  interviewCampData,
} from "@/data/home";
import internshipProjectBgImg from "@/assets/home/bg_internship_project.png";
import mInternshipProjectBgImg from "@/assets/home/m_bg_internship_project.png";

import InternshipProjectCards from "./index/components/InternshipProjectCards/InternshipProjectCards";
import InterviewCamp from "./index/components/InterviewCamp/InterviewCamp";
import Link from "next/link";
import Head from "@/components/Head";
import OfferGuarantee from "./project/offer-guarantee";
import OfferGuaranteeView from "./index/components/OfferGuaranteeView/OfferGuaranteeView";
import useScreen from "@/components/useScreen/useScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const HomePage: NextPage = () => {
  const { isMobile } = useScreen();

  return (
    <>
      <Head />
      <div>{isMobile?.() ? <MobileView /> : <PCView />}</div>
    </>
  );
};

export const MobileView = () => {
  return (
    <>
      <div>
        <Header />
        <>
          {/* <div className={`flex flex-col items-center justify-center page-banner ${styles.m_banner_container}`}  
          style={{backgroundImage: `url(${mBannerImg.src})`}}>*/}

          <div
            className={`flex flex-col items-center justify-start ${styles.m_banner_container}`}
          >
            <div className={styles.m_swiper_container}>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className={styles.m_swiper}
              >
                <SwiperSlide>
                  <Image
                    src={mBannerImg}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={mBannerImg}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={mBannerImg}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className={styles.m_banner_text}>
              <h1 className={clsx(styles.m_banner_title)}>
                北美留学生
                <br />
                求职一站式服务
              </h1>

              <Link
                href="/job/offer-guarantee"
                className="z-10"
                style={{ zIndex: 999 }}
              >
                <Button
                  className={styles.m_banner_btn}
                  type={ButtonType.BORDERED}
                  size={ButtonSize.MIDDLE}
                  color={ButtonColor.WHITE}
                  radius={ButtonRadius.NONE}
                  text="了解更多"
                />
              </Link>
            </div>
          </div>

          <div className={clsx("bg-white section", styles.m_section1)}>
            <div className="px-12px overflow-auto text-center">
              <SectionTitle
                className={styles.m_section1_title}
                title="保offer求职项目"
                subtitle="锁定心仪offer，拿不到offer退款"
              />

              <OfferGuaranteeView data={offerGuaranteeTabsData} />

              <Link href="/job/offer-guarantee">
                <Button
                  type={ButtonType.SOLID}
                  size={ButtonSize.MIDDLE}
                  color={ButtonColor.GREEN}
                  radius={ButtonRadius.NONE}
                  text="查看详情"
                  className={styles.section1_btn}
                />
              </Link>
            </div>
          </div>

          <div
            className={clsx(
              "bg-white relative section",
              styles.m_section2,
              styles.m_internship_project_section
            )}
            style={{
              backgroundImage: `url(${mInternshipProjectBgImg.src})`,
            }}
          >
            <div className="px-12px overflow-auto">
              <SectionTitle
                className={styles.m_section2_title}
                title="实习项目"
                subtitle="超多机会，领航职业起点"
              />
              <InternshipProjectCards data={internshipProjectCardsData} />
            </div>

            {/* <div className={'absolute top-0 left-0 w-full h-full z-0 grayscale'} style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div> */}
          </div>

          <div
            className={clsx("bg-white text-center section", styles.m_section)}
          >
            <div className="px-12px overflow-auto">
              <SectionTitle
                className={styles.m_section3_title}
                title="面试集训营"
                subtitle="超强指导，助力每个机会"
              />

              <InterviewCamp
                className={styles.interview_camp_cards}
                data={interviewCampData}
              />

              <Link href="/job/interview-camp" className="z-10">
                <Button
                  text="查看详情"
                  type={ButtonType.GRADIENT}
                  size={ButtonSize.MIDDLE}
                  radius={ButtonRadius.NONE}
                  className={styles.section3_btn}
                />
              </Link>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
};

export const PCView = () => {
  return (
    <>
      <div>
        <Header />
        <>
          {/* <div className={`flex flex-col items-center  justify-center page-banner ${styles.banner_container}`} style={{backgroundImage: `url(${bannerImg.src})`}}> */}
          <div
            className={`flex flex-col items-center  justify-center page-banner ${styles.banner_container}`}
          >
            <div className={styles.swiper_container}>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className={styles.swiper}
              >
                <SwiperSlide>
                  <Image
                    src={bannerImg}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bannerImg}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={bannerImg}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <h1 className={clsx("text-white z-10", styles.banner_text)}>
              北美留学生求职一站式服务
            </h1>
            <Link href="/job/offer-guarantee" className="z-10">
              <Button
                type={ButtonType.SOLID}
                size={ButtonSize.MIDDLE}
                color={ButtonColor.WHITE}
                radius={ButtonRadius.NONE}
                text="了解更多"
              />
            </Link>
          </div>

          <div className={clsx("bg-white section", styles.section)}>
            <div className="container mx-auto flex flex-col items-center">
              <SectionTitle
                className={styles.section_title}
                title="保offer求职项目"
                subtitle="锁定心仪offer，拿不到offer退款"
              />

              <OfferGuaranteeView data={offerGuaranteeTabsData} />

              <Link href="/job/offer-guarantee" className="z-10">
                <Button
                  type={ButtonType.BORDERED}
                  size={ButtonSize.MIDDLE}
                  color={ButtonColor.GREEN}
                  radius={ButtonRadius.NONE}
                  text="查看详情"
                />
              </Link>
            </div>
          </div>

          <div
            className={clsx(
              "bg-white relative section",
              styles.section,
              styles.internship_project_section
            )}
            style={{
              backgroundImage: `url(${internshipProjectBgImg.src})`,
            }}
          >
            <div className="container mx-auto overflow-auto">
              <SectionTitle
                className={styles.section_title}
                title="实习项目"
                subtitle="超多机会，领航职业起点"
              />
              <InternshipProjectCards data={internshipProjectCardsData} />
            </div>

            {/* <div className={'absolute top-0 left-0 w-full h-full z-0 grayscale'} style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${internshipProjectBgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}></div> */}
          </div>

          <div className={clsx("bg-white text-center section", styles.section)}>
            <div className="container mx-auto overflow-auto">
              <SectionTitle
                className={styles.section_title}
                title="面试集训营"
                subtitle="超强指导，助力每个机会"
              />

              <InterviewCamp
                className={styles.interview_camp_cards}
                data={interviewCampData}
              />
              <Link href="/job/interview-camp" className="z-10">
                <Button
                  text="查看课程"
                  type={ButtonType.GRADIENT}
                  size={ButtonSize.MIDDLE}
                  radius={ButtonRadius.NONE}
                />
              </Link>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
