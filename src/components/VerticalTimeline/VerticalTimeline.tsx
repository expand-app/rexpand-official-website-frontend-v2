import React from 'react';
import styles from './VerticalTimeline.module.css';
import clsx from 'clsx';

const VerticalTimeline = ({data,}: Props) => {
    return (
        <ul className={styles.timeline}>
            {data?.map((item)=>{
                return <li key={item.title}>
                    <div className={clsx('', styles.timeline_content)}>
                    <h3 className={clsx('font-m',styles.title)}>{item.title}</h3>
                    <ul className={clsx('leading-6 pl-6', styles.content)}>
                        {item?.content?.map((contentItem, index)=>{
                            return <li key={index}>{contentItem}</li>
                        })}
                    </ul>
                    </div>
                </li>;
            })}
        </ul>
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