import React, { useEffect, useState } from 'react';
import styles from './JobConsultModal.module.css';
import clsx from 'clsx';
import Modal from '../Modal/Modal';
import Image from 'next/image';
import consultQrImg from '@/assets/qr_consult.png';
import Link from 'next/link';
import useScreen from '../useScreen/useScreen';

export const JobConsultModal = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <>
          <div>
              {isMobile?.()? 
              <MobileView {...props}/>
              :
              <PCView {...props}/>
              }
          </div>
        </>
    );
}

const MobileView = ({open = false, onClose, className = ''}: Props) => {
    let containerClassNames = '';

    containerClassNames = clsx(containerClassNames, className);

    useEffect(()=>{

    },[]);
    return (
        <Modal open={open} onClose={onClose}>
            <div className={clsx('flex flex-col items-center', styles.m_modal_body)}>
                <Image 
                    src={consultQrImg} 
                    alt="Rexpand课程顾问"
                    width={172}
                    height={172}
                    className={styles.qr_img}
                    />
                <div className={clsx('text-sm text-center mt-8', styles.text)}>
                    <div className='mb-8px'>扫描二维码或者 <Link href='/' className='text-green-600 underline'>点击这里</Link></div>
                    <div>联系Rexpand课程顾问咨询求职</div>
                </div>
            </div>
        </Modal>
    );
}

const PCView = ({open = false, onClose, className = ''}: Props) => {
    let containerClassNames = '';

    containerClassNames = clsx(containerClassNames, className);

    useEffect(()=>{

    },[]);
    return (
        <Modal open={open} onClose={onClose}>
            <div className={clsx('flex flex-col items-center', styles.modal_body)}>
                <Image src={consultQrImg} layout='reponsive' alt="Rexpand课程顾问"/>
                <div className='text-sm text-center mt-8'>
                    <div className='mb-1'>扫描二维码或者 <Link href='/' className='text-green-600 underline'>点击这里</Link></div>
                    <div>联系Rexpand课程顾问咨询求职</div>
                </div>
            </div>
        </Modal>
    );
}

export default JobConsultModal;

interface Props {
    open: boolean;
    onClose: Function;
    className?: string;
}
