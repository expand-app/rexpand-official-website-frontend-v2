
import React from 'react';
import styles from './InternshipProjectCards.module.css';
import Link from 'next/link';
import internshipProjHeader1 from '@/assets/home/internship_proj_header1.png';
import internshipProjHeader2 from '@/assets/home/internship_proj_header2.png';
import internshipProjHeader3 from '@/assets/home/internship_proj_header3.png';
import internshipProjHeader4 from '@/assets/home/internship_proj_header4.png';
import mInternshipProjHeader1 from '@/assets/home/m_internship_proj_header1.png';
import mInternshipProjHeader2 from '@/assets/home/m_internship_proj_header2.png';
import mInternshipProjHeader3 from '@/assets/home/m_internship_proj_header3.png';
import mInternshipProjHeader4 from '@/assets/home/m_internship_proj_header4.png';
import clsx from 'clsx';
import Image from 'next/image';
import useScreen from '@/components/useScreen/useScreen';



const headerImgs = [internshipProjHeader1, internshipProjHeader2, internshipProjHeader3, internshipProjHeader4];
const mHeaderImgs = [mInternshipProjHeader1, mInternshipProjHeader2, mInternshipProjHeader3, mInternshipProjHeader4];
const InternshipProjectCards = ({data}: Props) => {
    const {isMobile} = useScreen();

    return (
        <div className={`${styles.cards} flex flex-col md:flex-row`}>
            {data?.map((item, index)=>{
                const headImg = isMobile()? mHeaderImgs?.[index]?.src:headerImgs?.[index]?.src;

                return <div key={item.id} className={`${styles.card} flex-1`}>
                        <Link href={item.link}>
                            <div className={`${styles.header} ${styles['header_border' + (index+1)]}`}
                                style={{
                                    backgroundImage: `url(${headImg})`,
                                    backgroundSize: '100% 100%',
                                }}>

                                <div>
                                    <div className={clsx(styles.title)}>{item.title}</div>
                                    <div className={clsx(styles.subtitle)}>{item.subtitle}</div>
                                </div>
                                <div className={`${styles.more} text-xs`}>了解更多 <span><Image alt="" src={require('@/assets/icon_arrow_r.png')} width={8} height={14} style={{width:8, height:14}}/></span></div>
                            </div>
                            <div className={`${styles.footer} text-xs`}>
                                {item.description}
                            </div>
                        </Link>
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
    id: number;
    title: JSX.Element;
    subtitle: string;
    description: string;
    link: string;
}