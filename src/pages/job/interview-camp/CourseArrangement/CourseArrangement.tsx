import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './CourseArrangement.module.css';
import courseArraBannerImage from '@/assets/interview-camp/banner_course_arrangement.png';
import circlePlayIconImg from '@/assets/interview-camp/icon_play_circle.png';
import Image from 'next/image';
import { numberToChinese } from '@/utils/Utils';

const CourseArrangement = ({data, className, }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
        <div className={clsx('bg-white p-8 rounded-md flex flex-row', styles.course_arrangement)}>
            
            <div className={clsx('flex-1 rounded-md relative', styles.left)}>
                <Image src={courseArraBannerImage} 
                    alt='banner'
                    width={400}
                    height={300}
                    sizes="100vw"
                    style={{
                        //objectFit: 'contain',
                        width: '100%'
                      }}
                    />
            </div>
            
            <div className={clsx('', styles.right)}>
                <ul>
                    {data?.map((item, index)=>{
                        return <li key={item.id} className={clsx('flex flex-row cursor-pointer', styles.box, {[styles.active]: activeIndex === index})}
                            onClick={()=>setActiveIndex(index)}
                            >
                            <div className={clsx('text-primary-green', styles.day_title)}>{`第${numberToChinese(index+1)}天直播`}</div>
                            <div className='flex flex-row gap-2 items-start flex-1'>
                                <Image src={circlePlayIconImg} alt='play' className='w-5 h-fit' style={{marginRight: 24}}/>
                                <div className={clsx('')}>
                                    <h1 className={clsx('', styles.course_title)}>{item.title}</h1>
                                    <h2 className={clsx('',styles.course_subtitle)}>{item.content?.map((contentItem)=>{
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
