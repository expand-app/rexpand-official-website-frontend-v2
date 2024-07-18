import { StaticImageData } from "next/image";
import Link from "next/link";

export const offerGuaranteeConsultModalData: ConsultModalData = {
  qrImage: require("@/assets/job/offer-guarantee/consult_qr_offer_guarantee.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcde59d081df809d"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问立即报名</div>
    </>
  ),
};

export const campConsultModalData: ConsultModalData = {
  qrImage: require("@/assets/interview-camp/consult_qr_camp.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcde49bb005d5c7d"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问立即报名</div>
    </>
  ),
};

export const campConsultModalDataEnUs: ConsultModalData = {
  qrImage: require("@/assets/interview-camp/consult_qr_camp.png"),
  content: (
    <>
      <div className="mb-1">
        Scan the QR code or&nbsp;
        <Link
          href="https://work.weixin.qq.com/ca/cawcde49bb005d5c7d"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          click here
        </Link>
      </div>
      <div>Add Wechat to register for class</div>
    </>
  ),
};

export const daConsultModalData: ConsultModalData = {
  qrImage: require("@/assets/job/consult_qr_internship_da.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcdeb6941b88b03e"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问立即报名</div>
    </>
  ),
};

export const qiConsultModalData: ConsultModalData = {
  qrImage: require("@/assets/job/consult_qr_internship_qi.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcdec5b629f54ba9"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问立即报名</div>
    </>
  ),
};

export const imConsultModalData: ConsultModalData = {
  qrImage: require("@/assets/job/consult_qr_internship_im.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcde400d65e0859e"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问立即报名</div>
    </>
  ),
};

export const fsdConsultModalData: ConsultModalData = {
  qrImage: require("@/assets/job/consult_qr_internship_fsd.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcdefb3aa5b5a6c1"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问立即报名</div>
    </>
  ),
};

export const consultModalData: ConsultModalData = {
  qrImage: require("@/assets/qr_consult.png"),
  content: (
    <>
      <div className="mb-1">
        扫描二维码或者{" "}
        <Link
          href="https://work.weixin.qq.com/ca/cawcdefe06cca86b8b"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          点击这里
        </Link>
      </div>
      <div>联系Rexpand课程顾问咨询求职</div>
    </>
  ),
};

export const consultModalDataEnUs: ConsultModalData = {
  qrImage: require("@/assets/qr_consult.png"),
  content: (
    <>
      <div className="mb-1">
        Scan the QR code or&nbsp;
        <Link
          href="https://work.weixin.qq.com/ca/cawcdefe06cca86b8b"
          target="_blank"
          style={{ color: "#008A27" }}
        >
          click here
        </Link>
      </div>
      <div>Add Wechat to register for class</div>
    </>
  ),
};

export interface ConsultModalData {
  qrImage: StaticImageData;
  content: JSX.Element;
}
