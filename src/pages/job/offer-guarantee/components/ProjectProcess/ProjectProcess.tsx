import React, { MouseEventHandler, useMemo, useState } from 'react';
import styles from './ProjectProcess.module.css';
import projectProcessImg from '@/assets/job/offer-guarantee/project_process.png';
import logoWhiteImg from '@/assets/logo_white.svg';
import Image from 'next/image';
import clsx from 'clsx';
import { numberToChinese } from '@/utils/Utils';

const ProjectProcess = ({data, className,}: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const combinedClassName = clsx('flex flex-col md:flex-row bg-white radius-8',styles.project_process, className);

    const activeItem: ProjectProcessData = useMemo(()=>{
        return data?.[activeIndex];
    }, [data, activeIndex]);

    const onButtonClick = (index: number) => {
        setActiveIndex(index);
    }

    return <div className={combinedClassName}>
        <div className={clsx('relative h-fit', styles.left)}>
            <Image src={projectProcessImg} alt='项目安排12' />
            <Image src={logoWhiteImg} alt='Rexpand' className={styles.logo}/>
        </div>
    
        <div className={clsx('flex-1 px-16', styles.right)}>
            <div className={clsx('flex flex-row justify-between', styles.steps)}>
                {data?.map((item, index)=>{
                    return <div key={item.id} 
                        className={clsx('px-4 md:px-8 lg:px-12 py-2 rounded-sm text-sm cursor-pointer whitespace-nowrap', styles.step_button, {[styles.step_button_active]: index === activeIndex})}
                        onClick={() => (onButtonClick(index))}
                        >
                            第{numberToChinese(index+1)}阶段</div>;
                })}
            </div>

            <div className={clsx('', styles.step_content)}>
                {activeItem?.processes?.map((item)=>{
                    return <div key={item.title}>
                        <h1 className={clsx(styles.title)}>{item.title}</h1>
                        {item?.content ? 
                        <ul className={clsx(styles.content)}>
                            {item?.content.map((contentItem, index)=>{
                                return <li key={index}>{contentItem}</li>;
                            })}    
                        </ul>
                        :null}
                    </div>;
                })}
            </div>
        </div>
    </div>;
}

export default ProjectProcess;

export interface Props {
    data: ProjectProcessData[],
    className?: string;
}

export interface ProjectProcessData {
    id: number;
    processes: Array<ProcessItem>;
}

export interface ProcessItem {
    title: string;
    content: Array<string>;
}