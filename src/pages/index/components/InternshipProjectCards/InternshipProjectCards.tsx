
import React from 'react';
import styles from './InternshipProjectCards.module.css';
import Link from 'next/link';
import internshipProjHeader1 from '@/assets/home/internship_proj_header1.png';
import internshipProjHeader2 from '@/assets/home/internship_proj_header2.png';
import internshipProjHeader3 from '@/assets/home/internship_proj_header3.png';
import internshipProjHeader4 from '@/assets/home/internship_proj_header4.png';
import clsx from 'clsx';
import Image from 'next/image';



const headerImgs = [internshipProjHeader1, internshipProjHeader2, internshipProjHeader3, internshipProjHeader4];
const InternshipProjectCards = ({data}: Props) => {
    return (
        <div className={`${styles.cards} flex flex-col md:flex-row`}>
            {data?.map((item, index)=>{
                return <div key={index} className={`${styles.card} flex-1`}>
                    <div className={`${styles.header}`}
                        style={{
                            backgroundImage: `url(${headerImgs?.[index]?.src})`
                        }}>

                        <div>
                            <div className={clsx('mb-2', styles.title)}>{item.title}</div>
                            <div className={clsx('text-xs', styles.subtitle)}>{item.subtitle}</div>
                        </div>
                        <Link href={item.link} className={`${styles.more} text-xs`}>了解更多 <span><Image alt="" src={require('@/assets/icon_arrow_r.png')} width={8} height={14} style={{width:8, height:14}}/></span></Link>
                    </div>
                    <div className={`${styles.footer} text-xs`}>
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
    title: JSX.Element;
    subtitle: string;
    description: string;
    link: string;
}