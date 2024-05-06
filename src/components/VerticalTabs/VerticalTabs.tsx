import clsx from "clsx";
import { useState } from "react";
import styles from './VerticalTabs.module.css';
import Image, { StaticImageData } from "next/image";

const VerticalTabs = ({data = [],}: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    if (!data) {
        return null;
    }

    function handleTabClick(item: TabItem, index: number) {
        setActiveIndex(index);
    }

    return (<div className={`${styles.vertical_tabs} flex flex-row w-full`}>
        <ul className={styles.tabs}>
            {data?.map((item, index)=>{
                return <li key={item.title}
                    onClick={()=>(handleTabClick(item,index))} 
                    className={clsx(styles.tab_item,'px-4 py-6',{[styles.active]: activeIndex === index})}>
                    <div className='text-base mb-1'>{item.title}</div>
                    <div className='text-sm text-gray-500'>{item.subtitle}</div>
                </li>
            })}            
        </ul>
        <ul className={clsx('flex items-center justify-center', styles.contents)}>
            {data?.map((item, index)=>{
                return <li key={item.title} 
                    className={clsx(styles.content_item, 'px-4 py-4',{[styles.active]: activeIndex === index})}>
                    <Image 
                        src={item.image} 
                        alt={item.title} 
                        layout='reposive'
                    />
                </li>
            })}     
        </ul>
    </div>
    );
}

export default VerticalTabs;

export interface Props {
    data: TabItem[];
}

export interface TabItem {
    title: string;
    subtitle: string;
    image: StaticImageData;
    // content: JSX.Element;
}