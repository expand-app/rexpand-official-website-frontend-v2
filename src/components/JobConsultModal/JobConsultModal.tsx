import React, { useEffect, useState } from "react";
import styles from "./JobConsultModal.module.css";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import Image, { StaticImageData } from "next/image";
import consultQrImg from "@/assets/qr_consult.png";
import Link from "next/link";
import useScreen from "../useScreen/useScreen";

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
  qrImage,
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
          src={qrImage}
          alt=""
          width={172}
          height={172}
          className={styles.qr_img}
        />
        <div className={clsx("text-sm text-center mt-8", styles.text)}>
          {content}
        </div>
      </div>
    </Modal>
  );
};

const PCView = ({
  qrImage,
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
          src={qrImage}
          layout="reponsive"
          alt="Rexpand课程顾问"
          style={{ width: 172, height: 172 }}
        />
        <div className="text-sm text-center mt-8">{content}</div>
      </div>
    </Modal>
  );
};

export default JobConsultModal;

interface Props {
  qrImage: StaticImageData;
  content: JSX.Element;
  open: boolean;
  onClose: Function;
  className?: string;
}
