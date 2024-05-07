import React from 'react';
import styles from './FreeResourceList.module.css';
import Image, { StaticImageData } from 'next/image';
import timeIconImg from '@/assets/icon_time.png';
import clsx from 'clsx';
import Link from 'next/link';

const FreeResourceList = ({data}: Props) => {
    return (
        <div className={clsx('flex flex-wrap',styles.free_resource_list)}>
            {data?.map((item)=>{
                return <div className={clsx('lg:w-1/3 sm:w-1/2', styles.card)}>
                    <Link href='/free-resources/1'>
                        <div className="rounded shadow-md hover:shadow-lg relative pb-5 bg-white p-1 cursor-pointer">
                            <Image src={item.image} alt={item.title} className='w-full'/>
                            <div className={styles.bottom}>
                                <div className={clsx('h-12 ', styles.title)}>{item.title}</div>
                                <div className={clsx('', styles.summary)}>{item.summary}</div>
                                <div className='flex flex-row items-center gap-2'>
                                    <Image src={timeIconImg} alt='发布时间' />
                                    <div>发布时间：{item.publishDate}</div>    
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>;
            })}
        </div>
    );
}
export default FreeResourceList;

export interface Props {
    data: FreeResourceData[];
}

export interface FreeResourceData {
    id: number;
    image: StaticImageData;
    title: string;
    summary: string;
    publishDate: string;
}