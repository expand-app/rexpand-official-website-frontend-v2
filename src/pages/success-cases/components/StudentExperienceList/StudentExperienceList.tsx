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
        <div className={clsx('grid grid-cols-4 gap-8',styles.student_experience_list)}>
            {data?.map((item)=>{
                return <div className={clsx('shadow-sm flex-1 bg-white border border-t-2 flex flex-col',styles.top_offer_item)}>
                    <Image src={item.image} 
                        alt={item.userName} 
                        className='w-full cursor-pointer'
                        onClick={()=>onImageClick(item)}/>

                    <div className='p-4'>
                        <div className={clsx('flex flex-row items-center', styles.usename)}><span >{item.userName}</span> <span className={styles.tag}>{item.major}</span></div>
                        <div className={clsx('flex flex-row items-center', styles.university)}><Image src={universityIconImg} alt='University' width={24} height={24}/>{item.university}</div>
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