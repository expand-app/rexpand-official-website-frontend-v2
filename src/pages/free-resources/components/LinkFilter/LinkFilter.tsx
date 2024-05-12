import React from 'react';
import styles from './LinkFilter.module.css';
import clsx from 'clsx';
import useScreen from '@/components/useScreen/useScreen';

export const LinkFilter = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <>
          <div>
              {isMobile?.()? 
              <MobileView {...props}/>
              :
              <PCView {...props}/>
              }
          </div>
        </>
    );
}

const MobileView = ({current, data,className, onChange}: Props) => {
    const handleClick = (index: number) => {
        onChange?.(index);
    }

    const combinedClassName = clsx('flex flex-row', styles.m_link_filter, className);
    return (
        <div className={combinedClassName}>
            {data?.map((item, index)=> {
                return <div key={index} 
                    className={clsx(
                        styles.m_link,
                        {[styles.m_active]: current === index})}
                onClick={()=>handleClick(index)}>
                    {item}
                </div>
            })}
        </div>
    );
}

const PCView = ({current, data,className, onChange}: Props) => {
    const handleClick = (index: number) => {
        onChange?.(index);
    }

    const combinedClassName = clsx('flex flex-row gap-12', styles.link_filter, className);
    return (
        <div className={combinedClassName}>
            {data?.map((item, index)=> {
                return <div key={index} className={clsx('text-black cursor-pointer', {[styles.active]: current === index})}
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
    className?: string;
    onChange: (index: number) => void; 
}