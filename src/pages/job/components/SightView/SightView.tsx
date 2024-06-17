import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './SightView.module.css';
import useScreen from '@/components/useScreen/useScreen';


const SightView = ({...props}: Props) => {
    const { screenType, isMobile } = useScreen();
   
    return (
        <>
            {isMobile?.()? 
            <MobileView {...props}/>
            :
            <PCView {...props} />
            }
        </>
    );
}


const MobileView = ({data,}: Props) => {

    return (
        <div className='flex-1 flex leading-8 items-center flex-wrap content-center'>
            {data?.map((item)=>{
                return <div key={item.title} className={clsx('w-full md:w-1/2 overflow-auto')}>
                    <div className={clsx('', styles.m_sight_item)}>
                        <Image src={item.image} alt={item.title} width={33} />
                        <div>
                            <h1 className='m_sight_title'>{item.title}</h1>
                            <div className='m_sight_subtitle'>{item.subtitle}</div>
                        </div>
                    </div>
                </div>;
            })}

        </div>
    );
}
const PCView = ({data,}: Props) => {

    return (
        <div className='flex-1 flex leading-8 items-center flex-wrap content-center'>
            {data?.map((item)=>{
                return <div key={item.title} className={clsx('w-full md:w-1/2 overflow-auto')}>
                    <div className={clsx('bg-white flex flex-col', styles.sight_item)}>
                        <Image src={item.image} alt={item.title} width={33} />
                        <h1 className='sight_title'>{item.title}</h1>
                        <div className='sight_subtitle'>{item.subtitle}</div>
                    </div>
                </div>;
            })}

        </div>
    );
}

export default SightView;

interface Props {
    data: SightViewData[],
}

export interface SightViewData {
    image: StaticImageData;
    title: string;
    subtitle: string;
}