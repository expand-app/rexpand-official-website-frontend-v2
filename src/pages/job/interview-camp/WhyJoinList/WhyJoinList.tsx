import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './WhyJoinList.module.css';
import clsx from 'clsx';
import useScreen from '@/components/useScreen/useScreen';


export const WhyJoinList = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <div>
            {isMobile?.()? 
            <MobileView {...props}/>
            :
            <PCView {...props}/>
            }
        </div>
    );
}


const MobileView = ({data, className}: Props) => {
    return (
        <div className={clsx('flex flex-col md:flex-row', className,styles.m_why_join_list)}>

            {data?.map((item)=>{
                return <div key={item.id} 
                    className={clsx('flex flex-row gap-2 px-4 ', styles.m_card)}>
                    <div className={clsx(styles.m_icon_container)}>
                        <Image src={item.icon} alt='' width={89} height={89}/>
                    </div>
                    <div>
                        <h1 className={clsx('', styles.m_title)}>{item.title}</h1>
                        <div className={clsx('', styles.m_description)}>{item.description}</div>
                    </div>
                </div>
            })}
        </div>
    );
}


const PCView = ({data, className}: Props) => {
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