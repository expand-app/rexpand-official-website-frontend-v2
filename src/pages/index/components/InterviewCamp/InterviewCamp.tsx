import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './InterviewCamp.module.css';

const InterviewCamp = ({data, className}: Props) => {

    
    const combinedClassName = `flex flex-row ${className ?? ''}`;
    return (
        <div className={combinedClassName}>
            {data?.map((item)=>{
                return <div key={item.id} className='relative' style={{
                    // backgroundImage: `url(${item.image.src})`,
                    // backgroundSize: '100% auto',
                    // backgroundRepeat: 'no-repeat',
                    // height: 500,
                }}>
                    <div className={styles.title_container}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <h2 className={styles.subtitle}>{item.subtitle}</h2>
                    </div>
                    <img className={styles.bg} src={item.image.src} alt={'background'} />
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
    id: number;
    title: JSX.Element;
    subtitle: string;
    image: StaticImageData;
}