import React, { useEffect, useState } from 'react';
import styles from './VideoModal.module.css';
import clsx from 'clsx';
import closeImg from '@/assets/close.svg';
import Image from 'next/image';

const VideoModal = ({
    videoPath,
    open = false, 
    onClose,
    className = '',}: Props) => {
    let containerClassNames = '';

    containerClassNames = clsx(containerClassNames, className);

    const handleCloseClick = () => {
      onClose?.();
    }

    return <div className={containerClassNames}>
        {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white text-black overflow-hidden m-2 z-10 w-auto" style={{backgroundColor: 'rgba(255,255,255,0.9)'}}>
            <button
              onClick={handleCloseClick}
              className="absolute top-4 right-4 flex w-5 h-5 hover:scale-105 focus:outline-none z-10">
              <Image src={closeImg} alt="关闭" />
            </button>
            <div>
                {videoPath == null ? 
                    <div>未指定视频</div>:
                    <div className={clsx('', styles.video_container)}>
                        <video className='' src={videoPath} autoPlay muted/>
                    </div>
                }
            </div>
          </div>
          
        </div>
      )}
    </div>;
}

export default VideoModal;

interface Props {
    videoPath?: string;
    open: boolean;
    onClose: Function;
    className?: string;
}

