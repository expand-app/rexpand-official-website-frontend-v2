import React, { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer/en-us/Footer";
import Header, { Theme } from "@/components/Header/en-us/Header";
import { GetStaticProps, NextPage } from "next";
import styles from "./index.module.css";
import Image from "next/image";
import bannerRightImage from "@/assets/interview-camp/banner_right.png";
import bannerBgImage from "@/assets/interview-camp/banner_bg.png";
import mBannerBgImage from "@/assets/interview-camp/m_banner_bg.png";
import Button, {
  ButtonRadius,
  ButtonSize,
  ButtonType,
} from "@/components/Button/Button";
import courceBgImg from "@/assets/interview-camp/course_bg.png";
import mCourceBgImg from "@/assets/interview-camp/m_course_bg.png";
import clsx from "clsx";
import Accordion from "@/components/Accordion/Accordion";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { daysToNow, formatDate } from "@/utils/Utils";
import {
  courceArrangementData,
  interviewCampFAQData,
  whyJoinData,
} from "@/data/en-us/interview_camp";
import WhyJoinList from "@/pages/job/interview-camp/WhyJoinList/WhyJoinList";
import CourseArrangement from "./CourseArrangement/CourseArrangement";
import BannerOverlayCard from "@/components/BannerOverlayCard/BannerOverlayCard";
import useScreen from "@/components/useScreen/useScreen";
import CampBannerOverlayCard from "./CampBannerOverlayCard/CampBannerOverlayCard";
import Link from "next/link";
import JobConsultModal from "@/components/JobConsultModal/JobConsultModal";
import { campConsultModalDataEnUs } from "@/data/job_consult";
import Head from "next/head";
import {
  TRAINING_CAMP_DATE,
  daysUntilDate,
  getClosestDate,
} from "@/utils/Utils";

export interface InterviewCampPageProps {
  nextCourseTime: string;
}

export const InterviewCampPage: NextPage<InterviewCampPageProps> = () => {
  const [jobConsultModalOpen, setJobConsultModalOpen] =
    useState<boolean>(false);
  const { isMobile } = useScreen();

  const onBannerBtnClick = () => {
    setJobConsultModalOpen(true);
  };
  const nextCourceTime = useMemo(() => {
    return getClosestDate(TRAINING_CAMP_DATE);
  }, []);

  return (
    <>
      <Head>
        <title>
          9 Years of Focus on Chinese International Student Job Search
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <meta
          name="description"
          content="9 Years of Focus on Chinese International Student Job Search"
        />
        <meta property="og:title" content="Rexpand" />
        <meta
          property="og:description"
          content="9 Years of Focus on Chinese International Student Job Search"
        />
        <meta property="og:url" content="https://rexpandcareer.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rexpandcareer.com/about" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.ico"
        ></link>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "睿思班",
            url: "https://rexpandcareer.com",
            logo: "https://rexpandcareer.com/_next/static/media/logo_green.e3921224.svg",
          })}
        </script>
      </Head>
      <div>
        {isMobile?.() ? (
          <MobileView
            onBannerBtnClick={onBannerBtnClick}
            nextCourseTime={nextCourceTime}
          />
        ) : (
          <PCView
            onBannerBtnClick={onBannerBtnClick}
            nextCourseTime={nextCourceTime}
          />
        )}

        <JobConsultModal
          open={jobConsultModalOpen}
          onClose={() => setJobConsultModalOpen(false)}
          qrImage={campConsultModalDataEnUs.qrImage}
          content={campConsultModalDataEnUs.content}
        />
      </div>
    </>
  );
};

export const MobileView = ({ onBannerBtnClick, nextCourseTime }: Props) => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();
  // const [courseDaysLeft, setCourseDaysLeft] = useState<number>(0);

  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex);
  };

  return (
    <div>
      <Header theme={Theme.TRANSPARENT} />
      <main className="">
        <div
          className={`${styles.m_banner_container} m_internship_banner_container flex flex-col items-center relative`}
          style={{
            backgroundImage: `url(${mBannerBgImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 -70px",
            maxHeight: 453,
          }}
        >
          <div className="flex flex-col items-center justify-center px-22px">
            <div className={styles.m_banner_text}>
              <h1 className={clsx(styles.m_banner_title)}>
                Interview Boot Camp
              </h1>
              <h2 className={clsx(styles.m_banner_subtitle1)}>
                Master North American Interview Skills in 5 Days for Only 99 RMB
              </h2>
              <h3 className={clsx(styles.m_banner_subtitle2)}>
                Next Session:
                <span className="font-w500 font-m mr-1">{nextCourseTime}</span>
                <div>
                  Countdown:
                  <span className={clsx(styles.m_count_down_num, "ml-1")}>
                    {daysUntilDate(nextCourseTime)}
                  </span>
                  {Number(daysUntilDate(nextCourseTime)) > 0 ? "days" : "day"}
                </div>
              </h3>

              <Button
                className={styles.m_banner_btn}
                type={ButtonType.SOLID}
                size={ButtonSize.MIDDLE}
                radius={ButtonRadius.ROUNDED}
                text="Register Now"
                onClick={onBannerBtnClick}
              />
            </div>
            {/* <div className='flex-1'>
                <Image src={bannerRightImage} alt="Banner" className={clsx('',styles.banner_img)}/>
              </div> */}
          </div>

          <BannerOverlayCard
            cardClassName="w-p85"
            data={[
              {
                id: 1,
                title: "Course Duration:",
                content:
                  "5 days to quickly master key North American job interview skills, from Hirevue to classic BQ questions",
              },
              {
                id: 2,
                title: "Target Audience",
                content:
                  "Entry-level Chinese international students seeking jobs in North America, unfamiliar with North American interviews, and needing a quick skill boost",
              },
              {
                id: 3,
                title: "Directions",
                content: [
                  "Open to all directions",
                  "including Data, Finance, Technology, Software Development, etc",
                ],
              },
            ]}
            className={clsx("", styles.m_banner_overlay)}
          />
        </div>

        <div
          className="bg-white pb-24 section"
          style={{
            background: "linear-gradient(180deg, #EEFFFC00 0%, #7DD19366 100%)",
            paddingTop: 390,
          }}
        >
          <div className="px-12px">
            <SectionTitle title="Why Join Us?" className="mb-37px" />

            <WhyJoinList data={whyJoinData} />
          </div>
        </div>

        <div
          className="bg-white section"
          style={{
            backgroundImage: `url(${mCourceBgImg.src})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "0,0",
            padding: "67px 0 66px 0",
          }}
        >
          <SectionTitle
            title={
              <>
                <span style={{ color: "#008A27" }}>Interview Boot Camp </span>
                Schedule
              </>
            }
          />

          <div className={styles.m_course_arra_content}>
            <CourseArrangement data={courceArrangementData} />
          </div>
        </div>

        <div className="bg-white section m_internship_faq_section">
          <div className="px-12px">
            <SectionTitle
              title="Frequently Asked Questions"
              className="internship_faq_title"
            />
            <Accordion data={interviewCampFAQData} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const PCView = ({ onBannerBtnClick, nextCourseTime }: Props) => {
  const [activeFloatMenuIndex, setActiveFloatMenuIndex] = useState<number>();
  // const [courseDaysLeft, setCourseDaysLeft] = useState<number>(0);

  const onFloatMenuChange = (newIndex: number) => {
    setActiveFloatMenuIndex(newIndex);
  };

  return (
    <div>
      <Header theme={Theme.TRANSPARENT} />
      <main className="">
        <div
          className={`${styles.banner_container} flex items-center relative min-h-[812px]`}
          style={{
            backgroundImage: `url(${bannerBgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={clsx(
              "container mx-auto flex flex-col md:flex-row items-center justify-center w-p85",
              styles.container
            )}
          >
            <div className="z-10 pt-0 flex-1">
              <h1
                className={clsx(
                  "text-white mb-6 banner_text font-sb",
                  styles.banner_title
                )}
              >
                Interview Boot Camp
              </h1>
              <h2
                className={clsx(
                  "text-base text-white mb-1 font-m font-22 font-w500 mb-7px",
                  styles.banner_subtitle1
                )}
              >
                Master North American Interview Skills in 5 Days for Only 99 RMB
              </h2>
              <h3
                className={clsx(
                  " text-white font-16 font-w400",
                  styles.banner_subtitle2
                )}
              >
                Next Session:
                <span className="font-w500 mr-1"> {nextCourseTime}</span>
              </h3>
              <h3>
                Countdown:
                <span className={clsx(styles.count_down_num, "ml-1")}>
                  {daysUntilDate(nextCourseTime)}
                </span>
                {Number(daysUntilDate(nextCourseTime)) > 0 ? "days" : "day"}
              </h3>

              <Button
                className={styles.banner_btn}
                type={ButtonType.SOLID}
                size={ButtonSize.MIDDLE}
                text="Register Now"
                onClick={onBannerBtnClick}
              />
            </div>
            <div className="flex-1">
              <Image
                src={bannerRightImage}
                alt="Banner"
                className={clsx("", styles.banner_img)}
              />
            </div>
          </div>
          <CampBannerOverlayCard
            cardClassName="w-p85"
            data={[
              {
                id: 1,
                title: "Course Duration:",
                content:
                  "5 days to quickly master key North American job interview skills, from Hirevue to classic BQ questions",
              },
              {
                id: 2,
                title: "Target Audience",
                content:
                  "Entry-level Chinese international students seeking jobs in North America, unfamiliar with North American interviews, and needing a quick skill boost",
              },
              {
                id: 3,
                title: "Directions",
                content: [
                  "Open to all directions",
                  "including Data, Finance, Technology, Software Development, etc",
                ],
              },
            ]}
            className={clsx("", styles.banner_overlay)}
          />
        </div>

        <div
          className="bg-white pb-24 section"
          style={{
            background: "linear-gradient(180deg, #EEFFFC00 0%, #7DD19366 100%)",
            paddingTop: 290,
          }}
        >
          <div className="container mx-auto w-3/4">
            <SectionTitle title="Why Join Us?" className="mb-60px" />

            <WhyJoinList data={whyJoinData} />
          </div>
        </div>

        <div
          className="bg-white py-24 section"
          style={{
            backgroundImage: `url(${courceBgImg.src})`,
            backgroundSize: "100% auto",
            backgroundPosition: "0,0",
          }}
        >
          <div className="container mx-auto w-2/3">
            <SectionTitle
              title={
                <>
                  <span style={{ color: "#008A27", marginRight: 12 }}>
                    Interview Boot Camp
                  </span>
                  Schedule
                </>
              }
              className="mb-12"
            />

            <CourseArrangement data={courceArrangementData} />
          </div>
        </div>

        <div
          className={clsx("bg-white section internship_faq_section")}
          style={{ paddingBottom: 188 }}
        >
          <SectionTitle
            title="Frequently Asked Questions"
            className="internship_faq_title"
          />
          <div className="container mx-auto flex flex-col justify-center md:w-5/6">
            <Accordion data={interviewCampFAQData} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export interface Props {
  onBannerBtnClick: () => void;
  nextCourseTime: string;
}

export default InterviewCampPage;

// DataAnalysisPage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <InternshipLayout>
//         {page}
//     </InternshipLayout>
//   )
// }
