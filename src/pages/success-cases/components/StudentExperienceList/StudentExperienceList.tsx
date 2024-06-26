import React, { useState, useEffect } from 'react';
import styles from './StudentExperienceList.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import universityIconImg from '@/assets/icon_university.png';
import Link from 'next/link';
import playIcon from '@/assets/icon_play_circle.png';
import VideoModal from '@/components/VideoModal/VideoModal';
import useScreen from '@/components/useScreen/useScreen';

const StudentExperienceList = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <div>
            {isMobile?.()? 
            <MobileView {...props}/>
            :
            <PCView  {...props}/>
            }
        </div>
    );
}


function MobileView({data}: Props) {
    const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
    const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
    const [videoModalPath, setVideoModalPath] = useState<string | undefined>();

    const onImageClick = (clickedItem: StudentExperienceData) => {
        if (clickedItem) {
            setVideoModalPath(clickedItem.videoUrl);
            setVideoModalOpen(true);
        }

        // const video = document.createElement('video');
        // video.src = clickedItem.videoUrl;
        // video.autoplay = true;
    
        // video.addEventListener('loadedmetadata', () => {
        //   if (video.requestFullscreen) {
        //     video.requestFullscreen();
        //   }
        // });
    
        // setVideoElement(video);
        // document.body.appendChild(video);
    }

    // useEffect(() => {
    //     const exitFullscreenHandler = () => {
    //       if (document.fullscreenElement === null && videoElement) {
    //         document.body.removeChild(videoElement);
    //       }
    //     };
    
    //     document.addEventListener('fullscreenchange', exitFullscreenHandler);
    
    //     return () => {
    //       document.removeEventListener('fullscreenchange', exitFullscreenHandler);
    //     };
    // }, [videoElement]);


    return (
        <>
        <div className={clsx(styles.m_student_experience_list)}>
            
            {data?.map((item)=>{
                return <div key={item.id} 
                className={clsx('flex-1 bg-white flex flex-col',styles.m_top_offer_item)}
                onClick={()=>onImageClick(item)}>
                    <div className='overflow-hidden relative'>
                        <Image src={item.image} 
                            alt={item.userName} 
                            className={clsx('w-full cursor-pointer', styles.header_img)}
                            />

                        <Image src={playIcon} alt='Play' className={styles.m_img_play}/>
                    </div>

                    <div className={clsx('', styles.m_body)}>
                        <div className={clsx('flex flex-row items-center font-m', styles.m_usename)}>
                            <span>{item.userName}</span>
                            <span className={styles.m_tag}>{item.major}</span></div>
                        <div className={clsx('flex flex-row items-center font-16', styles.m_university)}><Image src={universityIconImg} alt='University' width={24} height={24}/>{item.university}</div>
                    </div>
                </div>;
            })}
        </div>
        <VideoModal
          videoPath={videoModalPath} 
          open={videoModalOpen} 
          onClose={()=>{
            setVideoModalOpen(false);
          }}/>

        </>
    );
}


function PCView({data}: Props) {
    const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
    const [videoModalPath, setVideoModalPath] = useState<string | undefined>();

    const onImageClick = (clickedItem: StudentExperienceData) => {
        if (clickedItem) {
            setVideoModalPath(clickedItem.videoUrl);
            setVideoModalOpen(true);
        }
    }

    return (
        <>
        <div className={clsx('grid grid-cols-4',styles.student_experience_list)}>
            {data?.map((item)=>{
                return <div key={item.id} 
                className={clsx('flex-1 bg-white flex flex-col radius-8',styles.top_offer_item)}
                onClick={()=>onImageClick(item)}>
                    <div className='overflow-hidden relative'>
                        <Image src={item.image} 
                            alt={item.userName} 
                            className={clsx('w-full cursor-pointer', styles.header_img)}
                            />

                        <Image src={playIcon} alt='Play' className={styles.img_play}/>
                    </div>

                    <div className={clsx('', styles.body)}>
                        <div className={clsx('flex flex-row items-center font-m', styles.usename)}><span >{item.userName}</span> <span className={styles.tag}>{item.major}</span></div>
                        <div className={clsx('flex flex-row items-center font-16', styles.university)}><Image src={universityIconImg} alt='University' width={24} height={24}/>{item.university}</div>
                    </div>
                </div>;
            })}
        </div>
        <VideoModal
          videoPath={videoModalPath} 
          open={videoModalOpen} 
          onClose={()=>{
            setVideoModalOpen(false);
          }}/>

        </>
    );
}




export default StudentExperienceList;





export interface Props {
    data: StudentExperienceData[];
}

export interface StudentExperienceData {
    id: number;
    userName: string;
    image: StaticImageData;
    university: string;
    major: string;
    videoUrl: string;
}