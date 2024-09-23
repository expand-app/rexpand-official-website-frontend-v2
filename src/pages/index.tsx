import Button, {
  ButtonColor,
  ButtonRadius,
  ButtonSize,
  ButtonType,
} from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import clsx from "clsx";
import { NextPage } from "next";
import bannerImg from "@/assets/home/banner.png";
import mBannerImg from "@/assets/home/m_banner.png";
import styles from "./index.module.css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
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
import OfferGuaranteeView from "./index/components/OfferGuaranteeView/OfferGuaranteeView";
import useScreen from "@/components/useScreen/useScreen";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { HomeDatas, META_DATA, getHomeData } from "@/constant";
import { Box, Stack, Typography } from "@mui/material";

export interface ViewProps {
  honeData: HomeDatas;
}

export const HomePage: NextPage = () => {
  const { isMobile } = useScreen();
  const honeData = getHomeData(isMobile());
  return (
    <>
      <Head {...META_DATA.index} />
      <div>
        {isMobile?.() ? (
          <MobileView honeData={honeData} />
        ) : (
          <PCView honeData={honeData} />
        )}
      </div>
    </>
  );
};

export const MobileView: React.FC<ViewProps> = (props) => {
  const { honeData } = props;
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
                modules={[Pagination, Autoplay]}
                className={styles.m_swiper}
                autoplay={{
                  delay: 5000,
                }}
                speed={600}
                loop={true}
                slidesPerView={1}
              >
                {honeData.map((item, index) => (
                  <SwiperSlide key={item.url} className="relative">
                    <Image
                      src={item.src}
                      alt={"banner_img"}
                      style={{ width: "100%", objectFit: "contain" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "18%",
                        px: 6,
                        width: "100%",
                        color: "#fff",
                      }}
                    >
                      <Typography
                        component={"h1"}
                        sx={{ fontSize: 30, fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                      <Stack sx={{ mt: 4 }} spacing={1}>
                        <Box
                          sx={{ fontSize: 16, fontWeight: 600 }}
                          key={item.subTilte[0]}
                        >
                          {item.subTilte[0]}
                        </Box>
                        <Box
                          sx={{ fontSize: 14, fontWeight: 400 }}
                          key={item.subTilte[1]}
                        >
                          {item.subTilte[1]}
                        </Box>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "12%",
                        px: 6,
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      <Link href={item.url}>
                        <Button
                          className={styles.m_banner_btn_home}
                          type={ButtonType.SOLID}
                          size={ButtonSize.MIDDLE}
                          color={ButtonColor.WHITE}
                          radius={ButtonRadius.NONE}
                          text="了解更多"
                        />
                      </Link>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
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

export const PCView: React.FC<ViewProps> = (props) => {
  const { honeData } = props;
  return (
    <>
      <div>
        <Header />
        <>
          {/* <div className={`flex flex-col items-center  justify-center page-banner ${styles.banner_container}`} style={{backgroundImage: `url(${bannerImg.src})`}}> */}
          <div
            className={`flex flex-col items-center  justify-center page-banner ${styles.banner_container}`}
          >
            <div className="w-full">
              <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
                speed={600}
                slidesPerView={1}
                className={styles.swiper}
              >
                {honeData.map((item, index) => (
                  <SwiperSlide key={item.url} className="relative">
                    <Image
                      src={item.src}
                      alt=""
                      style={{ width: "100%", objectFit: "contain" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "22%",
                        left: "12%",
                        color: "#fff",
                      }}
                    >
                      <Typography
                        component={"h1"}
                        sx={{ fontSize: 60, fontWeight: 600 }}
                      >
                        {item.title}
                      </Typography>
                      <Stack sx={{ mt: 8 }} spacing={1}>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 500 }}
                          key={item.subTilte[0]}
                        >
                          {item.subTilte[0]}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 400 }}
                          key={item.subTilte[1]}
                        >
                          {item.subTilte[1]}
                        </Typography>
                      </Stack>

                      <Link href={item.url}>
                        <Button
                          className="mt-40"
                          type={ButtonType.SOLID}
                          size={ButtonSize.MIDDLE}
                          color={ButtonColor.WHITE}
                          radius={ButtonRadius.NONE}
                          text="了解更多"
                        />
                      </Link>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
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
