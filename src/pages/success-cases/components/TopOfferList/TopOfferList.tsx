import React from 'react';
import Image, { StaticImageData } from "next/image";
import styles from './TopOfferList.module.css';
import clsx from "clsx";
import Avatar from '@/components/Avatar/Avatar';
import Pagination from '@/components/Pagination/Pagination';
import useScreen from '@/components/useScreen/useScreen';

const topBorderStyles = [
    styles.tborder_deloitte,
    styles.tborder_bain,
    styles.tborder_goldmansachs,
    styles.tborder_spotify,
    styles.tborder_oracle,
    styles.tborder_pwc,
]


const TopOfferList = ({...props}: Props) => {

    const { isMobile } = useScreen();
   
    return (
        <div>
            {isMobile?.()? 
            <MobileView {...props} />
            :
            <PCView {...props} />
            }
        </div>
    );

}

const MobileView = ({data}: Props) => {
    return (
        <div className={clsx('overflow-auto', styles.m_top_offer_list)}>
            <div className={styles.m_top_offer_card_scroll_box}>
                <div className={styles.m_top_offer_card_box}>
                    {data?.map((item, index)=>{
                        return <div key={item.id} className={clsx(styles.m_top_offer_item, topBorderStyles[index])}>
                            <div className={clsx('px-0 flex flex-col items-center justify-center', styles.m_top)}>
                                <div className={styles.m_logo_container}>
                                    <Image src={item.companyLogo} alt={item.companyName} width={100}/>
                                </div>
                                <div className={styles.m_company_name}>{item.companyName}</div>
                                <div className={styles.m_job_title}>{item.jobTitle}</div>
                            </div>

                            <div className={clsx('flex-1 relative', styles.m_bottom)}>
                                <Avatar className={styles.avatar} data={{userName: item.userName}} />
                            
                                <div>
                                    <div className={styles.m_university}>{item.university}</div>
                                    <div className={styles.m_major}>{item.major}</div>
                                </div>
                            </div>
                        </div>;
                    })}
                </div>
            </div>
        </div>
    );
}

const PCView = ({data}: Props) => {
    return (
        <div className={clsx('overflow-auto', styles.top_offer_list)}>
            <div className="flex flex-col md:flex-row gap-4">
                {data?.map((item, index)=>{
                    return <div key={item.id} className={clsx('relative flex-1 bg-white flex flex-col',styles.top_offer_item, topBorderStyles[index])}>
                        <div className={clsx('px-0 flex flex-col items-center justify-center', styles.top)}>
                            <div className={styles.logo_container}>
                                <Image src={item.companyLogo} alt={item.companyName} width={100}/>
                            </div>
                            <div className={styles.company_name}>{item.companyName}</div>
                            <div className={styles.job_title}>{item.jobTitle}</div>
                        </div>

                        <div className={clsx('w-full flex-1 relative px-2', styles.bottom)}>
                            <Avatar className={styles.avatar} data={{userName: item.userName}} />
                        
                            <div>
                                <div className={styles.university}>{item.university}</div>
                                <div className={styles.major}>{item.major}</div>
                            </div>
                        </div>
                    </div>;
                })}
            </div>

            <div className={clsx('flex justify-center', styles.pagination)}>
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