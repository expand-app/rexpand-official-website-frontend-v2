import Image, { StaticImageData } from 'next/image';
import React,{useEffect} from 'react';
import styles from './InterviewCamp.module.css';
import useScreen from '@/components/useScreen/useScreen';

const InterviewCamp = ({...props}: Props) => {
    const { screenType, isMobile } = useScreen();
   
    return (
        <>
            {isMobile?.()? 
            <MobileView />
            :
            <PCView {...props} />
            }
        </>
    );
}

function MobileView () {
    return <div className={styles.m_container}>
        <div>
            <Image alt="" src={require('@/assets/home/m_interview_1.png')} className={styles.m_banner} />
        </div>
        <div>
            <Image alt="" src={require('@/assets/home/m_interview_2.png')} className={styles.m_banner} />
        </div>
        <div>
            <Image alt="" src={require('@/assets/home/m_interview_3.png')} className={styles.m_banner} />
        </div>
    </div>
}

function PCView({data, className}: Props) {
    const combinedClassName = `flex flex-row ${className ?? ''}`;
    return <div className={combinedClassName}>
        {data?.map((item)=>{
            return <div key={item.id} className='relative' style={{
                // backgroundImage: `url(${item.image.src})`,
                // backgroundSize: '100% auto',
                // backgroundRepeat: 'no-repeat',
                // height: 500,
            }}>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <h2 className={styles.subtitle}>{item.subtitle}</h2>
                </div>
                <img className={styles.bg} src={item.image.src} alt={'background'} />
            </div>
        })}
    </div>;
}

export default InterviewCamp;

export interface Props {
    data: InterviewCampData[],
    className?: string;
}

export interface InterviewCampData {
    id: number;
    title: JSX.Element;
    subtitle: string;
    image: StaticImageData;
}