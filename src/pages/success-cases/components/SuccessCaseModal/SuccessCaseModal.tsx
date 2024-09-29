import React, { useEffect, useState } from "react";
import styles from "./SuccessCaseModal.module.css";
import clsx from "clsx";
import Modal from "@/components/Modal/Modal";
import Image, { StaticImageData } from "next/image";
import consultQrImg from "@/assets/qr_consult.png";
import Link from "next/link";
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
  content,
  open = false,
  onClose,
  className = "",
}: Props) => {
  let containerClassNames = "";

  containerClassNames = clsx(containerClassNames, className);

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
          style={{ width: "100%", objectFit: "contain" }}
        />
        {content && (
          <div className={clsx("text-sm text-center mt-8", styles.text)}>
            {content}
          </div>
        )}
      </div>
    </Modal>
  );
};

const PCView = ({
  imageInfo,
  content,
  open = false,
  onClose,
  className = "",
}: Props) => {
  let containerClassNames = "";

  containerClassNames = clsx(containerClassNames, className);

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
          style={{ width: "100%", objectFit: "contain" }}
        />
        {content && <div className="text-sm text-center mt-8">{content}</div>}
      </div>
    </Modal>
  );
};

export default JobConsultModal;

interface Props {
  imageInfo: ImageInfo;
  content?: JSX.Element;
  open: boolean;
  onClose: Function;
  className?: string;
}
