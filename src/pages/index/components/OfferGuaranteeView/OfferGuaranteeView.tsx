import React, {useState} from 'react';
import styles from './OfferGuaranteeView.module.css';
import VerticalTabs, { TabItem } from '@/components/VerticalTabs/VerticalTabs';
import Image, { StaticImageData } from 'next/image';
import useScreen from '@/components/useScreen/useScreen';
import Arrow, { ArrowDir } from '@/components/Arrow/Arrow';
import clsx from 'clsx';

const OfferGuaranteeView = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    
    return <>
        {isMobile?.()? 
            <MobileView {...props}/>
            :
            <PCView {...props} />
        }
    </>;
}

export default OfferGuaranteeView;


function MobileView ({data, className}: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    
    return <div className={styles.m_cardlist}>
       {data?.map((item, index)=>{
        return <div key={item.id} 
        className={clsx(styles.m_card, {[styles.active]: activeIndex === index})}
        onClick={()=>setActiveIndex(index)}
        >
             <div className={styles.m_title_box}>
                <div className={'flex-1'}>
                    <h1 className={styles.m_title}>{item.title}</h1>
                    <div className={styles.m_subtitle}>{item.subtitle}</div>
                </div>
                {activeIndex===index? <Arrow dir={ArrowDir.UP} className={styles.m_arrow}/>: <Arrow dir={ArrowDir.DOWN}  className={styles.m_arrow}/>}
            </div>
            <Image className={styles.m_offer_img} alt='' src={require(`@/assets/home/m_offer_${index+1}.png`)} />   
        </div>;
       })}
    </div>;
}

function PCView({data, className}: Props) {
    // const combinedClassName = `flex flex-row ${className ?? ''}`;
    return <VerticalTabs data={data} />;
}


export interface Props {
    data:  TabItem[];
    className?: string,
}

export interface OfferGuaranteeViewData {
    id: number,
    title: JSX.Element;
    subtitle: string;
    image: StaticImageData;
    mImage: StaticImageData;
}