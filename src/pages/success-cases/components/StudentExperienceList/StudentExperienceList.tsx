import React from 'react';
import styles from './StudentExperienceList.module.css';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import universityIconImg from '@/assets/icon_university.png';

const StudentExperienceList = ({data}: Props) => {
    return (
        <div className={clsx('grid grid-cols-4 gap-8',styles.student_experience_list)}>
            {data?.map((item)=>{
                return <div className={clsx('shadow-sm flex-1 bg-white border border-t-2 flex flex-col',styles.top_offer_item)}>
                    <Image src={item.image} alt={item.userName} className='w-full'/>

                    <div className='p-4'>
                        <div><span className='font-bold'>{item.userName}</span> <span className='text-xs text-green-700 bg-green-200 px-3 py-0.5 rounded'>{item.major}</span></div>
                        <div className='flex flex-row text-sm items-center mt-3'><Image src={universityIconImg} alt='University'/>{item.university}</div>
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