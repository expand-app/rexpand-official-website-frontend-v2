import React, { useEffect, useState } from "react";
import styles from "./SuccessCaseModal.module.css";
import clsx from "clsx";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import useScreen from "@/components/useScreen/useScreen";
import { ImageInfo } from "../../type";

interface Props {
  imageInfo: ImageInfo;
  open: boolean;
  onClose: () => void;
}

const SuccessCaseModal = (props: Props) => {
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
  imageInfo = { url: "", width: 0, height: 0 },

  open = false,
  onClose,
}: Props) => {
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

const PCView = ({
  imageInfo = { url: "", width: 0, height: 0 },
  open = false,
  onClose,
}: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={clsx("flex flex-col items-center", styles.modal_body)}>
        <Image
          src={imageInfo.url}
          alt="offer_image"
          width={imageInfo.width}
          height={imageInfo.height}
          layout="reponsive"
          className="max-w-[460px] xl-custom:max-w-full "
          style={{ width: 664, objectFit: "contain" }}
        />
      </div>
    </Modal>
  );
};

export default SuccessCaseModal;
