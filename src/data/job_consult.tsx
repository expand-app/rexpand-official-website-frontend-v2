import { StaticImageData } from "next/image";
import Link from "next/link";


export const jobConsultModalData: ConsultModalData = {
    qrImage: require('@/assets/job_qr_consult.png'),
    content: <>
        <div className='mb-1'>扫描二维码或者 <Link href='https://work.weixin.qq.com/ca/cawcde59d081df809d' target='_blank' style={{color: '#008A27'}}>点击这里</Link></div>
        <div>联系Rexpand课程顾问立即报名</div>
    </>,
} ;



export const consultModalData: ConsultModalData = {
    qrImage: require('@/assets/qr_consult.png'),
    content: <>
        <div className='mb-1'>扫描二维码或者 <Link href='https://work.weixin.qq.com/ca/cawcde59d081df809d' target='_blank' style={{color: '#008A27'}}>点击这里</Link></div>
        <div>联系Rexpand课程顾问咨询求职</div>
    </>,
} ;


export interface ConsultModalData {
    qrImage: StaticImageData;
    content: JSX.Element;
}