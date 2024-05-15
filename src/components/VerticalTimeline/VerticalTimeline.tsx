import React from 'react';
import styles from './VerticalTimeline.module.css';
import clsx from 'clsx';
import useScreen from '../useScreen/useScreen';


export const VerticalTimeline = ({...props}: Props) => {
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
const MobileView = ({data,}: Props) => {
    return (
        <div className='relative'>
            <div className={styles.m_bottom_mask}></div>
            <ul className={styles.m_timeline}>
                {data?.map((item)=>{
                    return <li key={item.title}>
                        <div className={clsx('', styles.m_timeline_content)}>
                        <h3 className={clsx('font-m',styles.m_title)}>{item.title}</h3>
                        <ul className={clsx('', styles.m_content)}>
                            {item?.content?.map((contentItem, index)=>{
                                return <li key={index}>{contentItem}</li>
                            })}
                        </ul>
                        </div>
                    </li>;
                })}
            </ul>
        </div>
    );
}

const PCView = ({data,}: Props) => {
    return (
        <div className='relative'>
            <div className={styles.bottom_mask}></div>
            <ul className={styles.timeline}>
                {data?.map((item)=>{
                    return <li key={item.title}>
                        <div className={clsx('', styles.timeline_content)}>
                        <h3 className={clsx('font-m',styles.title)}>{item.title}</h3>
                        <ul className={clsx('', styles.content)}>
                            {item?.content?.map((contentItem, index)=>{
                                return <li key={index}>{contentItem}</li>
                            })}
                        </ul>
                        </div>
                    </li>;
                })}
            </ul>
        </div>
    );
}

export default VerticalTimeline;

export interface Props {
    data: TimelineData[];
}

export interface TimelineData {
    title: string;
    content: Array<string>;
}