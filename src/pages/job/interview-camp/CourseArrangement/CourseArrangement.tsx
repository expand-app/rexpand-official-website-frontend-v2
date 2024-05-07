import React from 'react';
import clsx from 'clsx';
import styles from './CourseArrangement.module.css';
import textureCourseArraImage from '@/assets/interview-camp/texture_course_arrangement.png';
import circlePlayIconImg from '@/assets/interview-camp/icon_play_circle.png';
import Image from 'next/image';
import { numberToChinese } from '@/utils/Utils';

const CourseArrangement = ({data, className, }: Props) => {
    return (
        <div className={clsx('bg-white p-8 rounded-md gap-4 flex flex-row', styles.course_arrangement)}>
            <div className={clsx('flex-1 rounded-md', styles.left)} style={{
                backgroundImage: `url(${textureCourseArraImage.src}),linear-gradient(180deg, #69C983 0%, #42AA60 100%)`
                }}>

            </div>
            <div className={clsx('', styles.right)}>
                <ul>
                    {data?.map((item, index)=>{
                        return <li key={item.id} className='flex flex-row gap-2 py-4 px-6 cursor-pointer'>
                            <div className='text-primary-green text-sm font-bold w-28'>{`第${numberToChinese(index+1)}天直播`}</div>
                            <div className='flex flex-row gap-2 items-start flex-1'>
                                <Image src={circlePlayIconImg} alt='play' className='w-5 h-fit'/>
                                <div className=''>
                                    <h1 className='text-primary-green text-sm font-bold mb-1'>{item.title}</h1>
                                    <h2 className='text-primary-green text-sm'>{item.content?.map((contentItem)=>{
                                        return <div key={contentItem}>{contentItem}</div>;
                                    })}</h2>
                                </div>
                            </div>
                        </li>;
                    })}
                    
                </ul>
            </div>
        </div>
    );
}
export default CourseArrangement;

export interface Props {
    data: CourceArrangement[];
    className?: string;
}
export interface CourceArrangement {
    id: number;
    title: string;
    content: Array<string>;
}
