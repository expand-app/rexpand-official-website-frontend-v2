import React from 'react';
import styles from './StudentExperienceList.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import universityIconImg from '@/assets/icon_university.png';
import Link from 'next/link';

const StudentExperienceList = ({data}: Props) => {

    const onImageClick = (clickedItem: StudentExperienceData) => {
        if (clickedItem) {
        }
    }

    return (
        <div className={clsx('grid grid-cols-4',styles.student_experience_list)}>
            {data?.map((item)=>{
                return <div className={clsx('shadow-sm flex-1 bg-white border border-t-2 flex flex-col radius-8',styles.top_offer_item)}>
                    <div className='overflow-hidden'>
                        <Image src={item.image} 
                            alt={item.userName} 
                            className={clsx('w-full cursor-pointer', styles.header_img)}
                            onClick={()=>onImageClick(item)}/>
                    </div>

                    <div className={clsx('', styles.body)}>
                        <div className={clsx('flex flex-row items-center font-m', styles.usename)}><span >{item.userName}</span> <span className={styles.tag}>{item.major}</span></div>
                        <div className={clsx('flex flex-row items-center font-16', styles.university)}><Image src={universityIconImg} alt='University' width={24} height={24}/>{item.university}</div>
                    </div>
                </div>;
            })}
        </div>
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
}