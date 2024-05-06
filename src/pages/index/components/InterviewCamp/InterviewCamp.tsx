import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './InterviewCamp.module.css';

const InterviewCamp = ({data, className}: Props) => {

    
    const combinedClassName = `flex flex-row ${className ?? ''}`;
    return (
        <div className={combinedClassName}>
            {data?.map((item)=>{
                return <div key={item.title} className='flex-1 relative' style={{
                    // backgroundImage: `url(${item.image.src})`,
                    // backgroundSize: '100% auto',
                    // backgroundRepeat: 'no-repeat',
                    // height: 500,
                }}>
                    <div className={styles.title}>
                        <h1 className='text-md font-bold'>{item.title}</h1>
                        <h2 className='text-sm text-gray-500 mt-3'>{item.subtitle}</h2>
                    </div>
                    <img className={styles.bg} src={item.image.src} alt={item.title}/>
                </div>
            })}
        </div>
    );
}

export default InterviewCamp;

export interface Props {
    data: InterviewCampData[],
    className?: string;
}

export interface InterviewCampData {
    title: string;
    subtitle: string;
    image: StaticImageData;
}