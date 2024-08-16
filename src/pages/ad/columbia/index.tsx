import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import clsx from "clsx";
import styles from "./index.module.css";
import logo_green from "@/assets/logo_green.svg";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";
import Footer from "@/components/Footer/Footer";
import qr_rexpand from "@/assets/qr_rexpand.png";
import theme from "@/utils/theme";
import circle_green from "@/assets/ad/circle_green.svg";
import circle_orange from "@/assets/ad/circle_orange.svg";
import { COMPANY_LIST, REFERRALS_DATA } from "./data";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import arrow_unactive from "@/assets/ad/arrow_unactive.svg";
import arrow_active from "@/assets/ad/arrow_active.svg";

import { FreeMode, Pagination } from "swiper/modules";
import { useRef } from "react";

interface ColumbiaProps {}

const PCView = () => {
  const swiperCompanyRef = useRef<SwiperRef>(null);
  const swiperRef = useRef<SwiperRef>(null);
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
      <main className="overflow-hidden">
        <Box sx={{ pt: 8, px: 9, pb: 50 }} className={clsx(styles.topBg)}>
          <Image alt="logo" src={logo_green}></Image>
          <Box className={"container mx-auto "}>
            <Box className={clsx("pt-52 w-full flex items-center  ")}>
              <Box>
                <Box
                  component="h1"
                  fontSize={60}
                  color={"#333"}
                  fontWeight={"bolder"}
                >
                  Private invitation to Columbia alumni group
                </Box>
                <Box
                  component={"ul"}
                  className="list-disc mt-20 flex flex-col gap-6 text-xl font-medium ml-6"
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
                <Button
                  variant="contained"
                  sx={{
                    width: 180,
                    height: 60,
                    mt: 20,
                    textTransform: "initial",
                    fontSize: 18,
                    borderRadius: 2,
                  }}
                >
                  Join
                </Button>
              </Box>
              <Stack
                direction={"column"}
                alignItems={"center"}
                className="relative"
              >
                <Image
                  src={qr_rexpand}
                  alt="ar_code"
                  width={400}
                  height={400}
                ></Image>
                <Image
                  alt="green_img"
                  className="absolute bottom-20 -right-32 "
                  src={circle_green}
                ></Image>
                <Image
                  alt="green_img"
                  className="absolute -top-16 right-8"
                  src={circle_orange}
                ></Image>
                <Box
                  sx={{
                    mt: 8,
                    p: theme.spacing(2, 6),
                    borderRadius: 2,
                    bgcolor: "#fff",
                    width: "auto",
                    color: "#636363",
                  }}
                >
                  Scan the QR code 
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pt: 38, pb: 10, bgcolor: "#fff" }}>
          <Box className={"container mx-auto "}>
            <Box
              component={"h2"}
              fontSize={56}
              fontWeight={"bolder"}
              className={styles.secondTitle}
              sx={{ textAlign: "center" }}
            >
              Executive level alumni participation
            </Box>
            <Box sx={{ mt: 20, height: 114, width: "100%" }}>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={false}
                ref={swiperRef}
                autoplay={{
                  delay: 5000,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiperCompany"
              >
                {COMPANY_LIST.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Image alt="company" src={item}></Image>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
            <Box sx={{ mt: 25 }}>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={false}
                ref={swiperRef}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                {REFERRALS_DATA.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className={styles.referralCard}>
                      <Stack direction={"row"} spacing={4}>
                        <Avatar
                          alt="item.name"
                          src={
                            item.avatar ||
                            "https://resources.rexpandcareer.com/image/avatar_empty.png"
                          }
                        >
                          {item.name}
                        </Avatar>
                        <Box>{item.name}</Box>
                      </Stack>
                      <Box sx={{ mt: 7 }}>{item.bioIntro}</Box>
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
                  <Image
                    style={{ color: "#008A27" }}
                    src={arrow_active}
                    alt="next"
                  ></Image>
                </IconButton>
                <IconButton onClick={handleNextSlide}>
                  <Image src={arrow_unactive} alt="prev"></Image>
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
};

const MobileView = () => {
  return 11;
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
