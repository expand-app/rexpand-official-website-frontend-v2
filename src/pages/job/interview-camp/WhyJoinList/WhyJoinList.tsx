import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './WhyJoinList.module.css';
import clsx from 'clsx';

const WhyJoinList = ({data, className}: Props) => {
    return (
        <div className={clsx('flex flex-col md:flex-row', className,styles.why_join_list)}>

            {data?.map((item)=>{
                return <div key={item.id} 
                    className={clsx('flex flex-col gap-2 bg-white px-4 md:w-1/4', styles.card)}>
                    <div className={clsx(styles.icon_container)}>
                        <Image src={item.icon} alt='' width={89} height={89}/>
                    </div>
                    <h1 className={clsx('', styles.title)}>{item.title}</h1>
                    <div className={clsx('', styles.description)}>{item.description}</div>
                </div>
            })}
        </div>
    );
}

export default WhyJoinList;

export interface Props {
    data: WhyJoinData[];
    className?: string;
}

export interface WhyJoinData {
    id: number;
    icon: StaticImageData;
    title: string;
    description: string;
}