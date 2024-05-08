import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './WhyJoinList.module.css';
import clsx from 'clsx';

const WhyJoinList = ({data, className}: Props) => {
    return (
        <div className={clsx('flex flex-col md:flex-row gap-4', className,styles.why_join_list)}>

            {data?.map((item)=>{
                return <div key={item.id} className='flex flex-col gap-2 bg-white rounded-md px-4 py-6 md:w-1/4'>
                    <div className={clsx('mb-6',styles.icon_container)}>
                        <Image src={item.icon} alt='' />
                    </div>
                    <h1 className={clsx('text-primary-green font-bold text-base', styles.title)}>{item.title}</h1>
                    <div className={clsx('text-gray-600 text-base', styles.title)}>{item.description}</div>
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