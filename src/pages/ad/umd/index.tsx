import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import clsx from "clsx";
import styles from "./index.module.css";
import logo_green from "@/assets/logo_green.svg";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head/index.en";
import Footer from "@/components/Footer/en-us/Footer";
import NYUSvg from "@/assets/ad/university/University of Maryland.svg";
import {
  AD_LINK,
  COMPANY_LIST,
  COMPANY_LIST_MIN,
  REFERRALS_DATA,
} from "./data";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import ArrowRight from "../SvgComponent/ArrowRight";
import ArrowLeft from "../SvgComponent/ArrowLeft";

interface ColumbiaProps {}

const PCView = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isSwiperSlideEnd, setIsSwiperSlideEnd] = useState(false);
  const [isSwiperSlideStart, setIsSwiperSlideStart] = useState(true);
  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsSwiperSlideEnd(swiperRef.current.swiper.isEnd);

      setIsSwiperSlideStart(swiperRef.current.swiper.isBeginning);
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <Box
        className="overflow-hidden"
        component={"main"}
        sx={{ lineHeight: 1.3 }}
      >
        <Box sx={{ pt: 8, pb: 50 }} className={clsx(styles.topBg)}>
          <Box sx={{ px: 8 }}>
            <Image alt="logo" src={logo_green}></Image>
          </Box>
          <Box className={styles.container}>
            <Box
              className={clsx(
                "pt-52 w-full flex items-center justify-between gap-14  "
              )}
            >
              <Box fontFamily={"Poppins_Bold"} sx={{ flex: 1 }}>
                <Box component="h1" fontSize={60} color={"#333"}>
                  Private invitation to University of Maryland alumni group
                </Box>

                <Box
                  component={"ul"}
                  sx={{ fontFamily: "Poppins_Regular" }}
                  className="list-disc mt-20 flex flex-col gap-6 text-xl ml-6 "
                >
                  <Box component={"li"}>Wechat based community</Box>
                  <Box component={"li"}>
                    Exclusive for Chinese young professionals developing career
                    in US
                  </Box>
                  <Box component={"li"}>
                    Top alumni network sharing career and referral opportunities
                  </Box>
                </Box>
                <Box component={"a"} href={AD_LINK} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      width: 180,
                      height: 60,
                      mt: 20,
                      textTransform: "initial",
                      fontSize: 18,
                      borderRadius: 2,
                      boxShadow: "none",
                    }}
                  >
                    Join
                  </Button>
                </Box>
              </Box>
              <Stack
                direction={"column"}
                alignItems={"center"}
                className="relative w-[400px] h-[400px]   xl-custom:w-[550px]  xl-custom:h-[500px]  "
              >
                <Image
                  src={NYUSvg}
                  alt="ar_code"
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pt: 38, pb: 10, bgcolor: "#fff" }}>
          <Box className={styles.container}>
            <Box
              component={"h2"}
              fontSize={56}
              className={styles.secondTitle}
              sx={{ textAlign: "center" }}
            >
              Executive level alumni participation
            </Box>
            <Box sx={{ mt: 20, height: 114, width: "100%" }}>
              <Box className={styles.logos}>
                <Box className={styles.logosSlide}>
                  {COMPANY_LIST.map((item, index) => {
                    return <Image alt="company" key={index} src={item}></Image>;
                  })}
                  {COMPANY_LIST.map((item, index) => {
                    return <Image alt="company" key={index} src={item}></Image>;
                  })}
                </Box>
              </Box>
            </Box>
            <Box sx={{ pt: 25, pb: 25 }}>
              <Swiper
                slidesPerView={4}
                touchStartPreventDefault={false}
                allowTouchMove={true}
                spaceBetween={30}
                freeMode={true}
                pagination={false}
                ref={swiperRef}
                modules={[FreeMode, Pagination]}
                className={clsx("mySwiper")}
                onSlideChange={handleSlideChange} // Listen to slide change events
                onSliderMove={handleSlideChange}
              >
                {REFERRALS_DATA.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className={styles.referralCard}>
                      <Stack
                        direction={"row"}
                        spacing={4}
                        alignItems={"center"}
                      >
                        <Avatar
                          alt={item.name}
                          sx={{ width: 50, height: 50 }}
                          src={
                            item.avatar ||
                            "https://resources.rexpandcareer.com/image/avatar_empty.png"
                          }
                        >
                          {item.name}
                        </Avatar>
                        <Stack fontSize={16}>
                          <Box fontWeight={600}>{item.name}</Box>
                          <Box className="line-clamp-2" title={item.headLine}>
                            {item.headLine}
                          </Box>
                        </Stack>
                      </Stack>
                      <Box sx={{ mt: 5 }} fontSize={15}>
                        {item.bioIntro}
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Stack
                sx={{
                  mt: 11,
                  color: "#008A27",
                }}
                spacing={10}
                direction={"row"}
                justifyContent={"flex-end"}
              >
                <IconButton onClick={handlePrevSlide}>
                  <ArrowLeft
                    svgColor={isSwiperSlideStart ? "#999999" : "#008A27"}
                  ></ArrowLeft>
                </IconButton>
                <IconButton onClick={handleNextSlide}>
                  <ArrowRight
                    svgColor={isSwiperSlideEnd ? "#999999" : "#008A27"}
                  ></ArrowRight>
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

const MobileView = () => {
  return (
    <main className="m-main">
      <Box
        className="overflow-hidden"
        component={"main"}
        sx={{ lineHeight: 1.3 }}
      >
        <Box sx={{ pb: 16 }} className={clsx(styles.m_topBg)}>
          <Box sx={{ py: 3, px: 8, borderBottom: "1px solid #D9D9D9" }}>
            <Image alt="logo" src={logo_green} width={112} height={24}></Image>
          </Box>
          <Box className={"container mx-auto "} sx={{ px: 8 }}>
            <Stack className={clsx("pt-14 w-full  ")}>
              <Box
                component="h1"
                fontSize={30}
                color={"#333"}
                fontFamily={"Poppins_Bold"}
              >
                Private invitation to University of Maryland alumni group
              </Box>
              <Box
                component={"ul"}
                className="list-disc mt-7 flex flex-col gap-1 text-xs ml-4"
              >
                <Box component={"li"}>Wechat based community</Box>
                <Box component={"li"}>
                  Exclusive for Chinese young professionals developing career in
                  US
                </Box>
                <Box component={"li"}>
                  Top alumni network sharing career and referral opportunities
                </Box>
              </Box>

              <Stack
                direction={"column"}
                alignItems={"center"}
                className="relative"
                sx={{ mt: 14 }}
              >
                <Image src={NYUSvg} alt="ar_code" width={230} height={204} />

                <Box component={"a"} href={AD_LINK} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      width: 124,
                      height: 44,
                      mt: 6,
                      textTransform: "initial",
                      fontSize: 14,
                      borderRadius: 1,
                      boxShadow: "none",
                    }}
                  >
                    Join
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ pt: 16, pb: 10, bgcolor: "#fff", px: 8 }}>
          <Box className={"container mx-auto "}>
            <Box
              component={"h2"}
              fontSize={28}
              fontWeight={"bolder"}
              className={styles.secondTitle}
              sx={{ textAlign: "center" }}
            >
              Executive level alumni participation
            </Box>
            <Box sx={{ mt: 20, width: "100%" }}>
              <Box className={styles.logos}>
                <Box className={styles.logosSlide} sx={{ opacity: "0.4" }}>
                  {COMPANY_LIST_MIN.map((item, index) => {
                    return <Image alt="company" key={index} src={item}></Image>;
                  })}
                  {COMPANY_LIST_MIN.map((item, index) => {
                    return <Image alt="company" key={index} src={item}></Image>;
                  })}
                </Box>
              </Box>
            </Box>
            <Stack sx={{ pt: 14 }} spacing={4}>
              {REFERRALS_DATA.map((item) => {
                return (
                  <Box key={item.id} className={styles.m_referralCard}>
                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
                      <Avatar
                        alt={item.name}
                        sx={{ width: 50, height: 50 }}
                        src={
                          item.avatar ||
                          "https://resources.rexpandcareer.com/image/avatar_empty.png"
                        }
                      >
                        {item.name}
                      </Avatar>
                      <Stack>
                        <Box fontWeight={600}>{item.name}</Box>
                        <Box className="line-clamp-2" title={item.headLine}>
                          {item.headLine}
                        </Box>
                      </Stack>
                    </Stack>
                    <Box sx={{ mt: 5 }}>{item.bioIntro}</Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </main>
  );
};

const Columbia: React.FC<ColumbiaProps> = () => {
  const { isMobile } = useScreen();

  return (
    <Box>
      <Head />
      {isMobile?.() ? <MobileView /> : <PCView />}
    </Box>
  );
};

export default Columbia;
