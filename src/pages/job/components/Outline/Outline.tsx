import React, { MouseEvent, useMemo, useState } from 'react';
import styles from './Outline.module.css';
import clsx from 'clsx';
import { numberToChinese } from '@/utils/Utils';
import iconPlay from '@/assets/icon_play.png';
import arrowUpWhite from '@/assets/icon_arrow_up_solid_white.png';
import arrowDownGreen from '@/assets/icon_arrow_down_solid_green.png';
import Image from 'next/image';
import Tag, { TagTheme } from '@/components/Tag/Tag';
import VerticalTimeline from '@/components/VerticalTimeline/VerticalTimeline';
import { title } from 'process';
import useScreen from '@/components/useScreen/useScreen';


const Outline = ({...props}: Props) => {
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

const MobileView = ({data, className}: Props) => {
    const [activeIndexs, setActiveIndexs] = useState<number[]>([0]);
    
    // const activeItem: OutlineSubjectData = useMemo(()=>{
    //     return data?.subjects?.[activeIndex];
    // },[data, activeIndex]);

    const onButtonClick = (event: MouseEvent<HTMLLIElement>, index: number) => {
        if (activeIndexs.indexOf(index) === -1) {
            setActiveIndexs([...activeIndexs, index]);
        } else {
            const newActiveIndexs = activeIndexs.filter((i)=> i != index);

            setActiveIndexs(newActiveIndexs);
        }
    }

    return (
        <div className={clsx('flex flex-col md:flex-row w-full', styles.outline)}>
            <ul className={clsx('md:w-72 flex flex-col gap-2', styles.m_subject_ul)}>
                {data?.subjects?.map((item: OutlineSubjectData, index: number)=>{
                    let combinedClassName = clsx('flex flex-col');
                    if (activeIndexs.indexOf(index) !== -1) {
                        combinedClassName = clsx(combinedClassName, styles.m_subject_li);
                    }
                    return <li key={item?.subjectName} className={combinedClassName} onClick={(event: MouseEvent<HTMLLIElement>) => onButtonClick(event, index)}>
                        
                        <div className={clsx(styles.m_subject_button, {[styles.active]: activeIndexs.indexOf(index) !== -1})}>
                            <Image src={activeIndexs.indexOf(index) !== -1?arrowUpWhite: arrowDownGreen} alt={`第${numberToChinese(index+1)}部分`}/>
                            <div>{`第${numberToChinese(index+1)}部分`}</div>
                        </div>

                        {activeIndexs.indexOf(index) !== -1 ? 

                            <div className={clsx('flex-1 flex flex-col', styles.m_subject_detail)}>
                                <div className={clsx('', styles.m_detail_header)}>
                                    <div className={clsx('text-lg mb-2', styles.m_subject_name)}>{data?.subjects?.[index]?.subjectName}</div>
                                    <div className={clsx('', styles.m_subject_tags)}>
                                        {data?.subjects?.[index]?.subjectTags?.map((item, index)=>{
                                            return <Tag key={item} text={item} theme={index===0?TagTheme.GREEN: TagTheme.WHITE}/>
                                        })}</div>
                                    <div className={styles.m_description}>{data?.subjects?.[index]?.subjectDescription}</div>
                                </div>

                            
                                <div className={clsx('', styles.m_detail_footer)}>
                                    <VerticalTimeline data={data?.subjects?.[index]?.courseList?.map((item)=>{
                                        return {
                                            title: item.name,
                                            content: item.sections,
                                        }
                                    })} />
                                </div>
                            
                            </div>
                            :null
                        }
                    </li>
                })}
            </ul>
            
        </div>
    );
}


const PCView = ({data, className}: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    const activeItem: OutlineSubjectData = useMemo(()=>{
        return data?.subjects?.[activeIndex];
    },[data, activeIndex]);

    const onButtonClick = (event: MouseEvent<HTMLLIElement>, index: number) => {
        setActiveIndex(index);
    }

    return (
        <div className={clsx('flex flex-col md:flex-row w-full', styles.outline)}>
            <ul className={clsx('md:w-72 flex flex-col gap-2', styles.subject_buttons)}>
                {data?.subjects?.map((item: OutlineSubjectData, index: number)=>{
                    let combinedClassName = clsx('rounded-md flex flex-row items-center', styles.subject_button);
                    if (index === activeIndex) {
                        combinedClassName = clsx(combinedClassName, styles.active);
                    }
                    return <li key={item?.subjectName} className={combinedClassName} onClick={(event: MouseEvent<HTMLLIElement>) => onButtonClick(event, index)}>
                        {index === activeIndex? <Image src={iconPlay} alt={`第${numberToChinese(index+1)}部分`} style={{width: 8,height:14, marginRight: 16}}/>:null}
                    
                        {`第${numberToChinese(index+1)}部分`}
                    </li>;
                })}
            </ul>
            <div className={clsx('flex-1 flex flex-col', styles.subject_detail)}>
                <div className={clsx('rounded-md py-8 px-10', styles.detail_header)}>
                    <div className={clsx('text-lg mb-2', styles.subject_name)}>{activeItem?.subjectName}</div>
                    <div className={clsx('text-base mb-6 flex flex-row gap-2', styles.subject_tags)}>
                        {activeItem?.subjectTags?.map((item, index)=>{
                            return <Tag key={item} text={item} theme={index===0?TagTheme.GREEN: TagTheme.WHITE}/>
                        })}</div>
                    <div className={styles.description}>{activeItem?.subjectDescription}</div>
                </div>

                <div className={clsx('rounded-md px-6 pt-12 pb-8', styles.detail_footer)}>
                    <VerticalTimeline data={activeItem?.courseList?.map((item)=>{
                        return {
                            title: item.name,
                            content: item.sections,
                        }
                    })} />
                </div>
            </div>
        </div>
    );
}

export default Outline;

export interface Props {
    data: OutlineData;
    className?: string;
}

export interface OutlineData {
    subjects: OutlineSubjectData[];
}

export interface OutlineSubjectData {
    subjectName: string;
    subjectTags: Array<string>;
    subjectDescription: string;
    courseList: CourseListItem[];
}

export interface CourseListItem {
    name: string;
    sections: Array<string>;
}