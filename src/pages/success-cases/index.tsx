import { NextPage } from "next";
import styles from "./index.module.css";
import Button, {
  ButtonColor,
  ButtonRadius,
  ButtonSize,
  ButtonType,
} from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import mBannerImg from "@/assets/success-cases/m_banner_img.png";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import greenGradientBgImg from "@/assets/success-cases/green_gradient.svg";
import TopOfferList from "./components/TopOfferList/TopOfferList";
import { studentExperienceListData } from "@/data/success_cases";
import StudentExperienceList from "./components/StudentExperienceList/StudentExperienceList";
import Footer from "@/components/Footer/Footer";
import clsx from "clsx";
import { useImmer } from "use-immer";
import successCaseAPI from "@/services/successCase";
import SuccessCaseModal from "./components/SuccessCaseModal/SuccessCaseModal";
import useScreen from "@/components/useScreen/useScreen";
import { useRef, useState } from "react";
import VideoModal from "@/components/VideoModal/VideoModal";
import Head from "@/components/Head";
import { ImageInfo, StudentDataAPIData } from "./type";

interface SuccessCasesPageProps {
  students: StudentDataAPIData;
  onStudentOfferClick: (image: ImageInfo) => void;
}

const SuccessCasesPage: NextPage<SuccessCasesPageProps> = (props) => {
  const { isMobile } = useScreen();
  const [jobConsultModal, setJobConsultModal] = useImmer<{
    open: boolean;
    imageInfo: ImageInfo;
  }>({
    open: false,
    imageInfo: {
      url: "",
      width: undefined,
      height: undefined,
    },
  });
  const onStudentOfferClick = (imageInfo: ImageInfo) => {
    setJobConsultModal((draft) => {
      draft.open = true;
      draft.imageInfo = imageInfo;
    });
  };
  return (
    <>
      <Head />
      <div>
        {isMobile?.() ? (
          <MobileView {...props} onStudentOfferClick={onStudentOfferClick} />
        ) : (
          <PCView {...props} onStudentOfferClick={onStudentOfferClick} />
        )}
      </div>
      {jobConsultModal.open && jobConsultModal.imageInfo && (
        <SuccessCaseModal
          open={jobConsultModal.open}
          onClose={() =>
            setJobConsultModal((draft) => {
              draft.open = false;
            })
          }
          imageInfo={jobConsultModal.imageInfo}
        />
      )}
    </>
  );
};

const bannerVideoUrl =
  "https://resources.rexpandcareer.com/videos/cases/successful-cases.mov";
const MobileView: React.FC<SuccessCasesPageProps> = ({
  students,
  onStudentOfferClick,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [videoModalPath, setVideoModalPath] = useState<string | undefined>(
    bannerVideoUrl
  );

  function onBannerBtnClick() {
    setVideoModalPath(bannerVideoUrl);
    setVideoModalOpen(true);
  }

  return (
    <main className="m-main">
      <Header />
      <>
        <div
          className={`py-0 flex flex-col justify-center relative ${styles.m_banner_container}`}
          style={{
            backgroundImage: `url(${mBannerImg.src})`,
            height: 750,
          }}
        >
          <video className={styles.m_banner_video} autoPlay muted loop>
            <source src={bannerVideoUrl} type="video/mp4" />
          </video>
          {/* <Image className={styles.banner_img} src={bannerImage} alt='Banner'/> */}
          {/* <div className={styles.m_banner_img_box}>
                        <Image alt="" src={require('@/assets/success-cases/m_banner_img.png')} className={styles.m_banner_img}/>
                    </div> */}
          <div className={styles.m_banner_content}>
            <h1 className="font-m font-w600 font-48 text-white mb-20 z-10 m-banner-text">
              看Claire如何斩获
              <br />
              上市公司FA offer
            </h1>
            <Button
              className={styles.m_banner_btn}
              type={ButtonType.SOLID}
              size={ButtonSize.MIDDLE}
              radius={ButtonRadius.NONE}
              color={ButtonColor.GREEN}
              text="点击查看"
              onClick={onBannerBtnClick}
            />
          </div>
        </div>

        <div className={clsx("bg-white section", styles.m_section1)}>
          <div className="container mx-auto">
            <SectionTitle
              className={styles.m_section_title1}
              title="学员offer榜"
              subtitle="恭喜学员们斩获金融、咨询、数据等多个领域的offer"
            />
          </div>
          <div className={styles.m_top_offer_content}>
            <TopOfferList
              data={students}
              onStudentOfferClick={onStudentOfferClick}
            />
          </div>
        </div>

        <div
          className={clsx("section", styles.m_section2)}
          style={{
            background: `linear-gradient(to bottom, rgba(238, 255, 252,0.3) , rgba(125, 209, 147, 0.2)), white`,
          }}
        >
          <SectionTitle className={styles.m_section_title2} title="学员心得" />
          <div className={styles.m_stu_exp_content}>
            <StudentExperienceList data={studentExperienceListData} />
          </div>
        </div>
      </>

      <Footer />

      <VideoModal
        videoPath={videoModalPath}
        config={{
          videoWidth: "120vw",
          videoLeft: "-40px",
        }}
        open={videoModalOpen}
        onClose={() => {
          setVideoModalOpen(false);
        }}
      />
    </main>
  );
};

const PCView: React.FC<SuccessCasesPageProps> = ({
  students,
  onStudentOfferClick,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [videoModalPath, setVideoModalPath] = useState<string | undefined>();
  const [isBannerVideoPlaying, setBannerVideoPlaying] = useState<boolean>(true);

  const bannerVideo = useRef<HTMLVideoElement>(null);
  function onBannerBtnClick() {
    // stop banner video
    if (bannerVideo.current) {
      if (isBannerVideoPlaying) {
        bannerVideo.current.pause();
        setBannerVideoPlaying(false);
      }
    }

    // open video modal
    setVideoModalPath(bannerVideoUrl);
    setVideoModalOpen(true);
  }

  return (
    <main className={"main"}>
      <Header />
      <>
        <div
          className={`py-0 flex flex-col justify-center relative ${styles.banner_container}`}
          style={{
            backgroundImage: `linear-gradient(to right, #007722, #96D8BA)`,
          }}
        >
          {/* <Image className={styles.banner_img} src={bannerImage} alt='Banner'/> */}
          <video
            ref={bannerVideo}
            className={styles.banner_video}
            autoPlay
            muted
            loop
          >
            <source
              src="https://resources.rexpandcareer.com/videos/cases/successful-cases.mov"
              type="video/mp4"
            />
          </video>
          <div className="text-center z-10 pt-36">
            <h1 className="font-m font-w600 font-48 text-white mb-20 z-10 banner_text">
              看Claire如何斩获上市公司FA offer
            </h1>
            <Button
              className="z-10 rounded-none"
              type={ButtonType.SOLID}
              size={ButtonSize.MIDDLE}
              radius={ButtonRadius.NONE}
              color={ButtonColor.GREEN}
              text="点击查看"
              onClick={onBannerBtnClick}
            />
          </div>
        </div>

        <div className={clsx("bg-white section", styles.section1)}>
          <div className="container mx-auto">
            <SectionTitle
              className={styles.section_title1}
              title="学员offer榜"
              subtitle="恭喜学员们斩获金融、咨询、数据等多个领域的offer"
            />
          </div>
          <div
            className="pt-20"
            style={{
              backgroundImage: `url(${greenGradientBgImg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="container mx-auto">
              <TopOfferList
                data={students}
                onStudentOfferClick={onStudentOfferClick}
              />
            </div>
          </div>
        </div>

        <div
          className={clsx("section", styles.section2)}
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(125, 209, 147, 0.2)), white`,
          }}
        >
          <div className="container mx-auto">
            <SectionTitle className={styles.section_title2} title="学员心得" />
            <div className="">
              <StudentExperienceList data={studentExperienceListData} />
            </div>
          </div>
        </div>
      </>

      <Footer />

      <VideoModal
        videoPath={videoModalPath}
        config={{
          videoWidth: "100vw",
          maskOpacity: 1,
        }}
        open={videoModalOpen}
        onClose={() => {
          setVideoModalOpen(false);

          if (bannerVideo.current) {
            if (!isBannerVideoPlaying) {
              bannerVideo.current.play();
              setBannerVideoPlaying(true);
            }
          }
        }}
      />
    </main>
  );
};

export async function getStaticProps({ params }: any) {
  // 从 Strapi 自定义 API 获取数据
  const res = await successCaseAPI.getAllData();
  const students = res.data;

  return {
    props: {
      students,
    },
  };
}

export default SuccessCasesPage;
