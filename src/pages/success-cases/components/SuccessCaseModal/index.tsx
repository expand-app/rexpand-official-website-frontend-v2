import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import { ImageInfo } from "../..";

export const JobConsultModal = ({ ...props }: Props) => {
  const { isMobile } = useScreen();

  return (
    <>
      <div>
        {isMobile?.() ? <MobileView {...props} /> : <PCView {...props} />}
      </div>
    </>
  );
};

const MobileView = ({
  imageInfo,

  open = false,
  onClose,
}: Props) => {
  let containerClassNames = "";

  containerClassNames = clsx(containerClassNames);

  useEffect(() => {}, []);
  return (
    <Modal open={open} onClose={onClose}>
      <div className={clsx("flex flex-col items-center", styles.m_modal_body)}>
        <Image
          src={imageInfo.url}
          alt="offer_image"
          width={imageInfo.width}
          height={imageInfo.height}
          layout="reponsive"
          style={{ width: 320, objectFit: "contain" }}
        />
      </div>
    </Modal>
  );
};

const PCView = ({ imageInfo, open = false, onClose }: Props) => {
  let containerClassNames = "";

  containerClassNames = clsx(containerClassNames);

  useEffect(() => {}, []);
  return (
    <Modal open={open} onClose={onClose}>
      <div className={clsx("flex flex-col items-center", styles.modal_body)}>
        <Image
          src={imageInfo.url}
          alt="offer_image"
          width={imageInfo.width}
          height={imageInfo.height}
          layout="reponsive"
          className="max-w-[400px] xl-custom:max-w-full "
          style={{ width: 664, objectFit: "contain" }}
        />
      </div>
    </Modal>
  );
};

export default JobConsultModal;

interface Props {
  imageInfo: ImageInfo;
  open: boolean;
  onClose: Function;
}
