import React from 'react';
import styles from './VerticalTimeline.module.css';
import clsx from 'clsx';

const VerticalTimeline = ({data,}: Props) => {
    return (
        <ul className={styles.timeline}>
            {data?.map((item)=>{
                return <li>
                    <div className={styles.timeline_content}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <ul className={clsx('leading-6 pl-6 text-gray-506', styles.content)}>
                        {item?.content?.map((contentItem)=>{
                            return <li>{contentItem}</li>
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