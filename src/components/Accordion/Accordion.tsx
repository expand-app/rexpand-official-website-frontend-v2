import React, { ChangeEventHandler, useState } from 'react';
import styles from './Accordion.module.css';
import clsx from 'clsx';
import arrowDownImg from '@/assets/icon_arrow_down.png';
import Image from 'next/image';
import useScreen from '../useScreen/useScreen';

const Accordion = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <div>
            {isMobile?.()? 
            <MobileView {...props} />
            :
            <PCView {...props} />
            }
        </div>
    );
}
const MobileView = ({data, className, checkedIndxs = [],}: Props) => {
    const [checkedIndexes, setCheckedIndexes] = useState<Array<number>>(checkedIndxs);

    const combinedClassName = clsx('w-full',styles.m_accordion, className);
    
    const onCheckboxChange = (index: number, checkedValue: boolean) => {
        if (checkedValue === true ) {
            if (checkedIndexes.indexOf(index) === -1) {
                const newCheckedIndexes = [...checkedIndexes];
                newCheckedIndexes.push(index);

                setCheckedIndexes(newCheckedIndexes);
            }
        } else {
            if (checkedIndexes.indexOf(index) !== -1) {
                const indexInAry = checkedIndexes.indexOf(index);
                const newCheckedIndexes = [...checkedIndexes];
                
                newCheckedIndexes.splice(indexInAry, 1);

                setCheckedIndexes(newCheckedIndexes);
            }
        }
    };

    const onTitleEnter = (index: number)=>{
        setCheckedIndexes([index]);
    };

    return (
        <ul className={combinedClassName}>
            {data?.map((item, index)=>{
                return <li key={item.id} onMouseEnter={()=>onTitleEnter(index)} className={clsx('', styles.m_accordion_item, {[styles.m_active]: checkedIndexes.indexOf(index) !== -1})}>
                    <input type='checkbox' 
                        checked={checkedIndexes.indexOf(index) !== -1}
                        
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                            onCheckboxChange(index, event.target.checked)
                        }}
                        ></input>
                    <i></i>
                    <div className={styles.m_title_container}>
                        <h2 className={clsx('font-m',styles.m_title)}>{item.title}</h2>
                        <Image src={arrowDownImg} alt="展开/收起" width={20} height={20} className={styles.m_arrow_icon} />
                    </div>
                    <div className={clsx( styles.m_content)}>{item.content}</div>
                
                
                </li>;
            })}
        </ul>
    );
}

const PCView = ({data, className}: Props) => {
    const [checkedIndexes, setCheckedIndexes] = useState<Array<number>>([]);

    const combinedClassName = clsx('w-full',styles.accordion, className);
    
    const onCheckboxChange = (index: number, checkedValue: boolean) => {
        if (checkedValue === true ) {
            if (checkedIndexes.indexOf(index) === -1) {
                const newCheckedIndexes = [...checkedIndexes];
                newCheckedIndexes.push(index);

                setCheckedIndexes(newCheckedIndexes);
            }
        } else {
            if (checkedIndexes.indexOf(index) !== -1) {
                const indexInAry = checkedIndexes.indexOf(index);
                const newCheckedIndexes = [...checkedIndexes];
                
                newCheckedIndexes.splice(indexInAry, 1);

                setCheckedIndexes(newCheckedIndexes);
            }
        }
    };

    const onTitleEnter = (index: number)=>{
        setCheckedIndexes([index]);
    };

    return (
        <ul className={combinedClassName}>
            {data?.map((item, index)=>{
                return <li key={item.id} onMouseEnter={()=>onTitleEnter(index)} className={clsx('', styles.accordion_item, {[styles.active]: checkedIndexes.indexOf(index) !== -1})}>
                    <input type='checkbox' 
                        checked={checkedIndexes.indexOf(index) !== -1}
                        
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                            onCheckboxChange(index, event.target.checked)
                        }}
                        ></input>
                    <i></i>
                    <div className={styles.title_container}>
                        <h2 className={clsx('font-m',styles.title)}>{item.title}</h2>
                        <Image src={arrowDownImg} alt="展开/收起" width={20} height={20} className={styles.arrow_icon} />
                    </div>
                    <div className={clsx('py-6', styles.content)}>{item.content}</div>
                
                
                </li>;
            })}
        </ul>
    );
}

export default Accordion;

export interface Props {
    data: AccordionData[];
    className?: string;
    checkedIndxs?: number[];
}

export interface AccordionData {
    id: number;
    title: string;
    content: JSX.Element;
}