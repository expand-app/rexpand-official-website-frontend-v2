
import React from 'react';
import styles from './InternshipProjectCards.module.css';
import Link from 'next/link';
import internshipProjHeader1 from '@/assets/home/internship_proj_header1.png';
import internshipProjHeader2 from '@/assets/home/internship_proj_header2.png';
import internshipProjHeader3 from '@/assets/home/internship_proj_header3.png';
import internshipProjHeader4 from '@/assets/home/internship_proj_header4.png';



const headerImgs = [internshipProjHeader1, internshipProjHeader2, internshipProjHeader3, internshipProjHeader4];
const InternshipProjectCards = ({data}: Props) => {
    return (
        <div className={`${styles.cards} flex flex-col md:flex-row gap-4`}>
            {data?.map((item, index)=>{
                return <div key={item.title} className={`${styles.card} flex-1`}>
                    <div className={`${styles.header} relative flex items-center justify-center text-center text-white`}
                        style={{
                            backgroundImage: `url(${headerImgs?.[index]?.src})`
                        }}>

                        <div>
                            <div className='mb-2 font-36'>{item.title}</div>
                            <div className='text-xs font-16'>{item.subtitle}</div>
                        </div>
                        <Link href={item.link} className={`${styles.more} text-xs`}>了解更多 &gt;</Link>
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
    title: string;
    subtitle: string;
    description: string;
    link: string;
}