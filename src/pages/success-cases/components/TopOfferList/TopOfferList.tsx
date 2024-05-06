import React from 'react';
import Image, { StaticImageData } from "next/image";
import styles from './TopOfferList.module.css';
import clsx from "clsx";
import Avatar from '@/components/Avatar/Avatar';
import Pagination from '@/components/Pagination/Pagination';

const TopOfferList = ({data}: Props) => {
    return (
        <div className={styles.top_offer_list}>
            <div className="flex flex-col md:flex-row gap-4">
                {data?.map((item)=>{
                    return <div className={clsx('shadow-lg relative flex-1 bg-white border border-t-2 border-t-green-400 flex flex-col',styles.top_offer_item)}>
                        <div className='px-0 flex flex-col items-center justify-center h-44'>
                            <Image src={item.companyLogo} alt={item.companyName} />
                            <div className='text-sm mt-2 font-bold'>{item.companyName}</div>
                            <div className='text-sm'>{item.jobTitle}</div>
                        </div>

                        <div className={clsx('w-full flex-1 relative px-2', styles.bottom)}>
                            <Avatar className={styles.avatar} data={{userName: item.userName}} />
                        
                            <div className='pt-8 pb-4 text-sm'>
                                <div className='font-bold'>{item.university}</div>
                                <div className='text-gray-500'>{item.major}</div>
                            </div>
                        </div>
                    </div>;
                })}
            </div>

            <div className='flex justify-center py-12'>
                <Pagination page={1} pageSize={6} totalCount={6} />
            </div>
        </div>
    );
}

export default TopOfferList;

export interface Props {
    data: TopOfferData[];
}

export interface TopOfferData {
    id: number;
    companyName: string;            // 公司名称
    companyLogo: StaticImageData;   // 公司LOGO
    jobTitle: string;               // 职位
    userName: string;               // 用户名
    university: string;             // 学校
    major: string;                  // 专业
}