import React, { useState } from 'react';
import styles from './StudentExperienceList.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import universityIconImg from '@/assets/icon_university.png';
import Link from 'next/link';
import playIcon from '@/assets/icon_play_circle.png';
import VideoModal from '@/components/VideoModal/VideoModal';

const StudentExperienceList = ({data}: Props) => {
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
                return <div key={item.id} className={clsx('shadow-sm flex-1 bg-white border border-t-2 flex flex-col radius-8',styles.top_offer_item)}>
                    <div className='overflow-hidden relative'>
                        <Image src={item.image} 
                            alt={item.userName} 
                            className={clsx('w-full cursor-pointer', styles.header_img)}
                            onClick={()=>onImageClick(item)}/>

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