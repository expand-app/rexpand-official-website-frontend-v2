import React, { ChangeEventHandler, useState } from 'react';
import styles from './Accordion.module.css';
import clsx from 'clsx';

const Accordion = ({data, className}: Props) => {
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

    return (
        <ul className={combinedClassName}>
            {data?.map((item, index)=>{
                return <li className={clsx('', styles.accordion_item, {[styles.active]: checkedIndexes.indexOf(index) !== -1})}>
                    <input type='checkbox' 
                        checked={checkedIndexes.indexOf(index) !== -1}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                            onCheckboxChange(index, event.target.checked)
                        }}
                        ></input>
                    <i></i>
                    <h2 className={clsx('px-12 py-6',styles.title)}>{item.title}</h2>
                    <div className={clsx('px-20 py-6 text-gray-700 text-sm leading-6', styles.content)}>{item.content}</div>
                </li>;
            })}
        </ul>
    );
}

export default Accordion;

export interface Props {
    data: AccordionData[];
    className?: string;
}

export interface AccordionData {
    id: number;
    title: string;
    content: JSX.Element;
}