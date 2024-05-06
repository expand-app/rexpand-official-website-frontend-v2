import React, { MouseEventHandler, useMemo, useState } from 'react';
import styles from './ProjectProcess.module.css';
import projectProcessImg from '@/assets/job/offer-guarantee/project_process.png';
import logoWhiteImg from '@/assets/logo_white.svg';
import Image from 'next/image';
import clsx from 'clsx';
import Button, { ButtonSize, ButtonType } from '@/components/Button/Button';
import { numberToChinese } from '@/utils/Utils';

const ProjectProcess = ({data, className,}: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const combinedClassName = clsx('flex flex-col md:flex-row bg-white p-10', className);

    const activeItem: ProjectProcessData = useMemo(()=>{
        return data?.[activeIndex];
    }, [data, activeIndex]);

    const onButtonClick = (index: number) => {
        setActiveIndex(index);
    }

    return <div className={combinedClassName}>
        <div className={clsx('w-1/3 relative h-fit', styles.left)}>
            <Image src={projectProcessImg} alt='项目安排' />
            <Image src={logoWhiteImg} alt='Rexpand' className={styles.logo}/>
        </div>
    
        <div className='w-2/3 px-16 '>
            <div className={clsx('flex flex-row mb-8 gap-2', styles.steps)}>
                {data?.map((item, index)=>{
                    return <div key={item.id} 
                        className={clsx('px-12 py-2 rounded-sm text-sm cursor-pointer', styles.step_button, {[styles.step_button_active]: index === activeIndex})}
                        onClick={() => (onButtonClick(index))}
                        >
                            第{numberToChinese(index+1)}阶段</div>;
                })}
            </div>

            <div className={clsx('', styles.step_content)}>
                {activeItem?.processes?.map((item)=>{
                    return <div key={item.title}>
                        <h1 className='text-base font-bold'>{item.title}</h1>
                        {item?.content ? 
                        <ul className='py-5 text-sm'>
                            {item?.content.map((contentItem)=>{
                                return <li>{contentItem}</li>;
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