import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import styles from './CampBannerOverlayCard.module.css';
import useScreen from '@/components/useScreen/useScreen';


export const CampBannerOverlayCard = ({...props}: Props) => {
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

const MobileView = ({data, className, cardClassName, contentStyle}: Props) => {
    return (
        <div className={clsx('', className, styles.m_container)}>
            <div className={clsx(styles.m_card, cardClassName)}>
                {data?.map((item: BannerOverlayCardData)=>{
                    if (typeof(item?.content) === 'string' ) {
                        return <div key={item?.id} className='flex-1'>
                            <h1 className='m_internship_banner_card_title'>{item?.title}</h1>
                            <div className='m_internship_banner_card_content'>{item?.content}</div>
                        </div>;
                    } else if (Array.isArray(item?.content)){
                        return <div key={item?.id} className='flex-1'>
                            <h1 className='m_internship_banner_card_title'>{item?.title}</h1>
                            <ul className='m_internship_banner_card_content list'>
                            {item?.content?.map((contentItem)=>{
                                return  <li key={contentItem}><span>{contentItem}</span></li>;
                            })}
                            </ul>
                        </div>
                    }
                })}
            </div>
        </div>
    );
};



const PCView = ({data, className, cardClassName, contentStyle}: Props) => {
    return (
        <div className={clsx('', className, styles.container)}>
            <div className={styles.bg}></div>
            <div className={clsx(styles.card, cardClassName)}>

                {data?.map((item: BannerOverlayCardData, index: number)=>{
                    if (typeof(item?.content) === 'string' ) {
                        return <div key={item?.id} className={clsx({'flex-2': index === 0}, {'flex-3': index === 1})}>
                            <h1 className='internship_banner_card_title'>{item?.title}</h1>
                            <div className={clsx('internship_banner_card_content')} style={contentStyle}>{item?.content}</div>
                        </div>;
                    } else if (Array.isArray(item?.content)){
                        return <div key={item?.id} className='flex-3'>
                            <h1 className='internship_banner_card_title'>{item?.title}</h1>
                            <ul className='internship_banner_card_content list' style={contentStyle}>
                            {item?.content?.map((contentItem)=>{
                                return  <li key={contentItem}><span>{contentItem}</span></li>;
                            })}
                            </ul>
                        </div>
                    }
                })}
            </div>
        </div>
    );
};

export default CampBannerOverlayCard;
export interface Props {
    data: BannerOverlayCardData[],
    className?: string;
    cardClassName?: string;
    contentStyle?: CSSProperties;
}

interface BannerOverlayCardData {
    id: number;
    title: string;
    content: string | Array<string>;
}