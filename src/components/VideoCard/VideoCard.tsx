import React, { MouseEventHandler } from 'react';
import styles from './VideoCard.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import playIconImg from '@/assets/icon_video_play.png';
import useScreen from '../useScreen/useScreen';


export const VideoCard = ({...props}: Props) => {
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
const MobileView = ({image, description, videoPath, className, onClick}: Props) => {
    const combinedClassName = clsx('rounded-xl overflow-visible shadow-md relative', className, styles.video_card);
    return (
        <div className={combinedClassName} onClick={()=>onClick?.()}>
            <Image src={image} alt='点击播放' />

            <Image src={playIconImg} alt="点击播放" className={styles.m_icon_play} />
        </div>
    );
}

const PCView = ({image, description, videoPath, className, onClick}: Props) => {
    const combinedClassName = clsx('rounded-xl overflow-visible shadow-md relative', className, styles.video_card);
    return (
        <div className={combinedClassName} onClick={()=>onClick?.()}>
            <Image src={image} alt='点击播放' />

            <Image src={playIconImg} alt="点击播放" className={styles.icon_play} />
        </div>
    );
}

export default VideoCard;

export interface Props {
    image: StaticImageData;
    description?: string;
    videoPath: string;
    className?: string;
    onClick?: Function;
}