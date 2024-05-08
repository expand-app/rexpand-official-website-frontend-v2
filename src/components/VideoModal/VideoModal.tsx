import React, { useEffect, useState } from 'react';
import styles from './VideoModal.module.css';
import clsx from 'clsx';
import Modal from '../Modal/Modal';

const VideoModal = ({videoPath, open = false, onClose, className = ''}: Props) => {
    
    let containerClassNames = '';

    containerClassNames = clsx(containerClassNames, className);

    useEffect(()=>{

    },[]);
    return (
        <Modal open={open} onClose={onClose}>
            {videoPath == null ? 
                <div>未指定视频</div>:
                <div className={clsx('', styles.video_container)}>
                    <video className='border' src={videoPath} autoPlay/>
                </div>
            }
        </Modal>
    );
}

export default VideoModal;

interface Props {
    videoPath?: string;
    open: boolean;
    onClose: Function;
    className?: string;
}
