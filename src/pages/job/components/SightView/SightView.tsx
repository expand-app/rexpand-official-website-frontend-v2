import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './SightView.module.css';

const SightView = ({data,}: Props) => {

    return (
        <div className='flex-1 flex leading-8 items-center flex-wrap content-center'>
            {data?.map((item)=>{
                return <div className={clsx('w-full md:w-1/2 overflow-auto')}>
                    <div className={clsx('bg-white flex flex-col', styles.sight_item)}>
                        <Image src={item.image} alt={item.title} width={33} />
                        <h1 className='sight_title'>{item.title}</h1>
                        <div className='sight_subtitle'>{item.subtitle}</div>
                    </div>
                </div>;
            })}



            {/* <div className={clsx('w-full md:w-1/2 overflow-auto')}>
            <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                <Image src={arrowUpImg} alt='增加经验' width={33} />
                <h1 className='sight_title'>增加经验</h1>
                <div className='sight_subtitle'>简历上一份实习/全职工作经验</div>
            </div>
            </div>

            <div className={clsx('w-full md:w-1/2')}>
            <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                <Image src={consultImg} alt='全流程顾问式服务' width={33} />
                <h1 className='sight_title'>全流程顾问式服务</h1>
                <div className='sight_subtitle'>助力上百Entry Level数据专业同学入行</div>
            </div>
            </div>

            <div className={clsx('w-full md:w-1/2')}>
            <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                <Image src={sendImg} alt='求职无忧' width={33} />
                <h1 className='sight_title'>求职无忧</h1>
                <div className='sight_subtitle'>助力转行数据方向的同学添加相关经验</div>
            </div>
            </div>

            <div className={clsx('w-full md:w-1/2')}>
            <div className={clsx('rounded-md bg-white flex flex-col py-5 px-6', styles.sight_item)}>
                <Image src={rocketImg} alt='技能提升' width={33} />
                <h1 className='sight_title'>技能提升</h1>
                <div className='sight_subtitle'>真实业务场景下学习数据分析核心技能SQL</div>
            </div>
            </div> */}
        </div>
    );
}

export default SightView;

interface Props {
    data: SightViewData[],
}

export interface SightViewData {
    image: StaticImageData;
    title: string;
    subtitle: string;
}