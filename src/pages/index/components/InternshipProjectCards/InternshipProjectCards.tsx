
import React from 'react';
import styles from './InternshipProjectCards.module.css';


const InternshipProjectCards = ({data}: Props) => {
    return (
        <div className={`${styles.cards} flex flex-col md:flex-row gap-4`}>
            {data?.map((item)=>{
                return <div key={item.title} className={`${styles.card} flex-1`}>
                    <div className={`${styles.header} relative py-20 text-center text-white`}>
                        <div>
                            <div className='text-2xl mb-2'>{item.title}</div>
                            <div className='text-xs font-normal'>{item.subtitle}</div>
                        </div>
                        <a href='#' className={`${styles.more} text-xs`}>了解更多 &gt;</a>
                    </div>
                    <div className={`${styles.footer} text-xs px-5 py-6`}>
                        {item.description}
                    </div>
                </div>;
            })}
        </div>
    );
}

export default InternshipProjectCards;


export interface Props { 
    data: CardItem[];
}

export interface CardItem {
    title: string;
    subtitle: string;
    description: string;
}