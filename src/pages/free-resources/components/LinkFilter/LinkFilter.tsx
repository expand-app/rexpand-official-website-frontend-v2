import React from 'react';
import styles from './LinkFilter.module.css';
import clsx from 'clsx';

const LinkFilter = ({current, data, onChange}: Props) => {
    const handleClick = (index: number) => {
        onChange?.(index);
    }
    return (
        <div className='flex flex-row'>
            {data?.map((item, index)=> {
                return <div className={clsx('text-black py-8 mr-12 cursor-pointer', {[styles.active]: current === index})}
                onClick={()=>handleClick(index)}>
                    {item}
                </div>
            })}
        </div>
    );
}
export default LinkFilter;

export interface Props {
    current: number;        // 当前Index
    data: Array<string>;   
    onChange: (index: number) => void; 
}