import React from "react";
import Footer from "@/components/Footer/Footer";
import Header, { Theme } from "@/components/Header/Header";
import { NextPage } from "next";
import styles from "./index.module.css";
import bannerImg from "@/assets/about/banner.png";
import mBannerImg from "@/assets/about/m_banner.png";
import bannerTextImg from "@/assets/about/banner_text.png";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import leftQuoteIamge from "@/assets/about/left_quote.png";
import rightQuoteIamge from "@/assets/about/right_quote.png";
import groupImage from "@/assets/about/icon_group.png";
import aiImage from "@/assets/about/icon_ai.png";
import studentImage from "@/assets/about/icon_student.png";
import xpqnBgImage from "@/assets/about/bg_xpqn.png";
import mXpqnBgImage from "@/assets/about/m_bg_xpqn.png";
import pushImage from "@/assets/about/icon_push.png";
import starImage from "@/assets/about/icon_star.png";
import userCardImage from "@/assets/about/icon_user_card.png";
import TeamMemberCard from "@/components/TeamMemberCard/TeamMemberCard";
import { membersData } from "@/data/about";
import clsx from "clsx";
import useScreen from "@/components/useScreen/useScreen";
import Head from "@/components/Head";

export const AboutPage: NextPage = () => {
  const { isMobile } = useScreen();

  return (
    <>
      <Head />
      <div>{isMobile?.() ? <MobileView /> : <PCView />}</div>
    </>
  );
};

function MobileView() {
  return (
    <div>
      <Header theme={Theme.LIGHT} />
      <main className="m-main mt-45px">
        <div className="">
          <div
            className={clsx("relative m-page-banner")}
            style={{
              backgroundImage: `url(${mBannerImg.src})`,
              height: 482,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                src={bannerTextImg}
                alt="让内推引领求职"
                className={styles.m_banner_title_img}
              />
              <div
                className={clsx("text-white mt-12", styles.m_banner_subtitle)}
              >
                「 9年专注留学生求职 」
              </div>
            </div>
          </div>

          <div className={clsx("bg-white m-section", styles.m_section1)}>
            <div
              className={clsx(
                "container mx-auto text-center",
                styles.m_advantage_container
              )}
            >
              <SectionTitle
                title="我们的优势"
                subtitle="以内推为服务核心，顶级辅导团队"
              />

              <div
                className={clsx(
                  "flex items-center",
                  styles.m_advantage_text_container
                )}
              >
                {/* 左侧引号图片 */}
                <Image
                  src={leftQuoteIamge}
                  alt="Left Quote"
                  className={styles.m_left_quote}
                />

                {/* 文字 */}
                <p className={styles.m_advantage_text}>
                  Rexpand求职（睿思班求职）是一家技术驱动的留学生求职咨询公司，核心团队来自于高盛、亚马逊、安永等国际知名企业，拥有1000+来自于九大投资银行、MBB咨询公司、FAANG等科技企业的资深导师。我们利用AI技术驱动求职服务，帮助过超过2000+的同学拿到过包括高盛、谷歌等顶级名企的offer，致力于帮助每一位美国留学生实现自己的职场梦想。
                </p>

                {/* 右侧引号图片 */}
                <Image
                  src={rightQuoteIamge}
                  alt="Right Quote"
                  className={styles.m_right_quote}
                />
              </div>
            </div>
          </div>

          <div
            className={clsx("bg-white m-section", styles.m_section2)}
            style={{ backgroundColor: "#F2F9F4" }}
          >
            <div className="mx-auto flex flex-col gap-55px">
              <div className={styles.m_section2_card}>
                <Image src={groupImage} alt="资深导师" width={38} height={38} />
                <h1>资深导师</h1>
                <h2>自于高盛、亚马逊、安永等国际知名企业</h2>
              </div>

              <div className={styles.m_section2_card}>
                <Image src={aiImage} alt="AI技术驱动" width={38} height={38} />
                <h1>AI技术驱动</h1>
                <h2>用AI技术驱动求职服务</h2>
              </div>

              <div className={styles.m_section2_card}>
                <Image
                  src={studentImage}
                  alt="2000+学员"
                  width={38}
                  height={38}
                />
                <h1>2000+学员</h1>
                <h2>帮助每一位美国留学生实现自己的职场梦想</h2>
              </div>
            </div>
          </div>

          <div
            className={clsx("m-section", styles.m_section3)}
            style={{
              backgroundImage: `url(${mXpqnBgImage.src})`,
            }}
          >
            <div className={styles.m_section3_card_list}>
              <div className={styles.m_section3_card}>
                <div className="flex flex-row items-center gap-12px mb-12px">
                  <Image
                    src={pushImage}
                    alt="独一无二的内推服务"
                    style={{ width: 19, height: 19 }}
                  />
                  <h1 className="flex-1">独一无二的内推服务</h1>
                </div>
                <h2>利用AI技术驱动内推，保证每周不低于20次的内推</h2>
              </div>

              <div className={styles.m_section3_card}>
                <div className="flex flex-row gap-2 items-center gap-12px mb-12px">
                  <Image
                    src={starImage}
                    alt="9年深耕北美求职"
                    style={{ width: 19, height: 19 }}
                  />
                  <h1 className="flex-1">9年深耕北美求职</h1>
                </div>
                <h2>自2015年起辅导北美求职，专注于数据、金融和科技方向</h2>
              </div>
              <div className={styles.m_section3_card}>
                <div className="flex flex-row gap-2 items-center gap-12px mb-12px">
                  <Image
                    src={userCardImage}
                    alt="双师体制offer保障"
                    style={{ width: 19, height: 19 }}
                  />
                  <h1 className="flex-1">双师体制offer保障</h1>
                </div>

                <h2>
                  专业辅导老师负责1v1教学，提升技能。班主任负责内推、简历投递、日常答疑，保障求职
                </h2>
              </div>
            </div>
          </div>

          <div
            className={clsx("m-section", styles.m_section4)}
            style={{
              background: `linear-gradient(180deg, rgba(238, 255, 252, 0.3) 0%, rgba(125, 209, 147, 0.3) 100%) white`,
            }}
          >
            <div className="container mx-auto">
              <SectionTitle
                title="专业导师团队"
                subtitle="导师均来自于北美顶级企业，平均5年+求职辅导经验"
                className="mb-82px"
              />

              <div className="grid grid-cols-2" style={{ gap: 10 }}>
                {membersData?.map((item) => {
                  return <TeamMemberCard key={item.id} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PCView() {
  return (
    <div>
      <Header theme={Theme.LIGHT} />
      <main className="mt-20">
        <div className="">
          {" "}
          {/*container mx-auto max-w-screen-lg px-4*/}
          <div
            className={clsx("relative page-banner")}
            style={{ backgroundImage: `url(${bannerImg.src})` }}
          >
            {/* <div className="absolute inset-0 bg-black opacity-30 "></div> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image src={bannerTextImg} alt="让内推引领求职" />
              <div className={clsx("text-white mt-12", styles.banner_subtitle)}>
                「 9年专注留学生求职 」
              </div>
            </div>

            {/* 图片
            <Image src={bannerImg} alt="让内推引领求职" layout="reponsive" className='w-full h-auto'/> */}
          </div>
          <div className={clsx("bg-white section", styles.section1)}>
            <div
              className={clsx(
                "container mx-auto text-center",
                styles.advantage_container
              )}
            >
              <SectionTitle
                title="我们的优势"
                subtitle="以内推为服务核心，顶级辅导团队"
              />

              <div
                className={clsx(
                  "flex items-center",
                  styles.advantage_text_container
                )}
              >
                {/* 左侧引号图片 */}
                <Image
                  src={leftQuoteIamge}
                  alt="Left Quote"
                  className="self-start -mt-16"
                />

                {/* 文字 */}
                <p className={styles.advantage_text}>
                  Rexpand求职（睿思班求职）是一家技术驱动的留学生求职咨询公司，核心团队来自于高盛、亚马逊、安永等国际知名企业，拥有1000+来自于九大投资银行、MBB咨询公司、FAANG等科技企业的资深导师。我们利用AI技术驱动求职服务，帮助过超过2000+的同学拿到过包括高盛、谷歌等顶级名企的offer，致力于帮助每一位美国留学生实现自己的职场梦想。
                </p>

                {/* 右侧引号图片 */}
                <Image
                  src={rightQuoteIamge}
                  alt="Right Quote"
                  className="self-end -mb-10"
                />
              </div>
            </div>
          </div>
          <div
            className={clsx("bg-white section", styles.section2)}
            style={{ backgroundColor: "#F2F9F4" }}
          >
            <div className=" mx-auto flex flex-col md:flex-row gap-12 md:gap-0">
              <div className="flex-1 flex flex-col items-center gap-16px">
                <Image src={groupImage} alt="资深导师" width={38} height={38} />
                <h1 className="text-primary-green font-40 font-w500 mt-6 font-m">
                  资深导师
                </h1>
                <h2 className="font-16 font-w400 opacity-60">
                  自于高盛、亚马逊、安永等国际知名企业
                </h2>
              </div>

              <div className="flex-1 flex flex-col items-center gap-16px">
                <Image src={aiImage} alt="AI技术驱动" width={38} height={38} />
                <h1 className="text-primary-green font-40 font-w500 mt-6 font-m">
                  AI技术驱动
                </h1>
                <h2 className="font-16 font-w400 opacity-60">
                  用AI技术驱动求职服务
                </h2>
              </div>

              <div className="flex-1 flex flex-col items-center gap-16px">
                <Image
                  src={studentImage}
                  alt="2000+学员"
                  width={38}
                  height={38}
                />
                <h1 className="text-primary-green  font-40 font-w500 mt-6 font-m ">
                  2000+学员
                </h1>
                <h2 className="font-16 font-w400 opacity-60">
                  帮助每一位美国留学生实现自己的职场梦想
                </h2>
              </div>
            </div>
          </div>
          <div
            className={clsx("section", styles.section3)}
            style={{ backgroundImage: `url(${xpqnBgImage.src})` }}
          >
            <div className="container mx-auto flex flex-col md:flex-row gap-12">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-row items-center gap-2 mb-16px">
                  <Image
                    src={pushImage}
                    alt="独一无二的内推服务"
                    width={30}
                    height={30}
                  />
                  <h1 className="text-white font-22 flex-1 font-sb">
                    独一无二的内推服务
                  </h1>
                </div>
                <h2 className="font-16 font-w300 text-white pl-8 font-l">
                  利用AI技术驱动内推，保证每周不低于20次的内推
                </h2>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex flex-row gap-2 items-center mb-16px">
                  <Image
                    src={starImage}
                    alt="9年深耕北美求职"
                    width={30}
                    height={30}
                    style={{ width: 26, height: 26 }}
                  />
                  <h1 className="text-white font-22 flex-1 font-sb">
                    9年深耕北美求职
                  </h1>
                </div>
                <h2 className="font-16 font-w300 text-white pl-8 font-l">
                  自2015年起辅导北美求职，专注于数据、金融和科技方向
                </h2>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex flex-row gap-2 items-center  mb-16px">
                  <Image
                    src={userCardImage}
                    alt="双师体制offer保障"
                    style={{ width: 26, height: 26 }}
                  />
                  <h1 className="text-white font-22 flex-1 font-sb ">
                    双师体制offer保障
                  </h1>
                </div>

                <h2 className="font-16 font-w300 text-white pl-8 font-l">
                  专业辅导老师负责1v1教学，提升技能。班主任负责内推、简历投递、日常答疑，保障求职
                </h2>
              </div>
            </div>
          </div>
          <div
            className={clsx("section", styles.section4)}
            style={{
              background: `linear-gradient(180deg, rgba(238, 255, 252, 0.3) 0%, rgba(125, 209, 147, 0.3) 100%) white`,
            }}
          >
            <div className="container mx-auto">
              <SectionTitle
                title="专业导师团队"
                subtitle="导师均来自于北美顶级企业，平均5年+求职辅导经验"
                className="mb-37px"
              />

              <div className="grid grid-cols-4" style={{ gap: 39 }}>
                {membersData?.map((item) => {
                  return <TeamMemberCard key={item.id} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
