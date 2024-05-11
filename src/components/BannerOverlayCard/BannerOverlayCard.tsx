import clsx from 'clsx';
import React from 'react';
import styles from './BannerOverlayCard.module.css';

const BannerOverlayCard = ({data, className, cardClassName}: Props) => {
    return (
        <div className={clsx('', className, styles.container)}>
            <div className={styles.bg}></div>
            <div className={clsx(styles.card, cardClassName)}>

                {data?.map((item: BannerOverlayCardData)=>{
                    if (typeof(item?.content) === 'string' ) {
                        return <div key={item?.id} className='flex-1'>
                            <h1 className='internship_banner_card_title'>{item?.title}</h1>
                            <div className='internship_banner_card_content'>{item?.content}</div>
                        </div>;
                    } else if (Array.isArray(item?.content)){
                        return <div key={item?.id} className='flex-1'>
                            <h1 className='internship_banner_card_title'>{item?.title}</h1>
                            <ul className='internship_banner_card_content list'>
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

export default BannerOverlayCard;
export interface Props {
    data: BannerOverlayCardData[],
    className?: string;
    cardClassName?: string;
}

interface BannerOverlayCardData {
    id: number;
    title: string;
    content: string | Array<string>;
}