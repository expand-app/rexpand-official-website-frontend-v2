import React, { useEffect, useState } from "react";
import styles from "./VideoModal.module.css";
import clsx from "clsx";
import closeImg from "@/assets/close_white.svg";
import Image from "next/image";
import useScreen from "../useScreen/useScreen";

const VideoModal = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <div>
      {isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}
    </div>
  );
};

const MobileView = ({
  videoPath,
  config = {
    videoWidth: "100vw",
  },
  open = false,
  onClose,
  className = "",
}: Props) => {
  let containerClassNames = "";

  containerClassNames = clsx(containerClassNames, className);

  const handleCloseClick = () => {
    onClose?.();
  };

  return (
    <div className={containerClassNames}>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black"></div>
          <div
            className={clsx("", styles.m_modal_content)}
            style={{ backgroundColor: "transparent" }}
          >
            <button
              onClick={handleCloseClick}
              className="absolute top-4 right-4 flex w-7 h-7 hover:scale-105 focus:outline-none z-10"
            >
              <Image src={closeImg} alt="关闭" />
            </button>
            <div>
              {videoPath == null ? (
                <div>未指定视频</div>
              ) : (
                <div
                  className={clsx("", styles.m_video_container)}
                  style={{
                    width: config?.videoWidth,
                    position: "relative",
                    left: config?.videoLeft,
                  }}
                >
                  <video className="" src={videoPath} autoPlay controls />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const PCView = ({
  videoPath,
  config = {
    videoWidth: "70vw",
    videoLeft: "0px",
    maskOpacity: 0.5,
  },
  open = false,
  onClose,
  className = "",
}: Props) => {
  let containerClassNames = "";

  containerClassNames = clsx(containerClassNames, className);

  const handleCloseClick = () => {
    onClose?.();
  };

  return (
    <div className={containerClassNames}>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={clsx("fixed inset-0 bg-black")}
            style={{
              opacity: config?.maskOpacity,
            }}
          ></div>
          <div
            className={clsx("", styles.modal_content)}
            style={{
              backgroundColor: "transparent",
              borderRadius: config.videoWidth === "100vw" ? 0 : 8,
            }}
          >
            <button
              onClick={handleCloseClick}
              className="absolute top-4 right-4 flex w-7 h-7 hover:scale-105 focus:outline-none z-10"
            >
              <Image src={closeImg} alt="关闭" />
            </button>
            <div>
              {videoPath == null ? (
                <div>未指定视频</div>
              ) : (
                <div
                  className={clsx("", styles.video_container)}
                  style={{
                    width: config?.videoWidth,
                  }}
                >
                  <video className="" src={videoPath} autoPlay controls />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;

export interface Props {
  videoPath?: string;
  config?: VideoModalConfig;
  open: boolean;
  onClose: Function;
  className?: string;
}

export interface VideoModalConfig {
  videoWidth?: string;
  videoLeft?: string;
  maskOpacity?: number;
}
