import clsx from 'clsx';
import React from 'react';
import styles from './SocialLinks.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const SocialLinks = ({data, className}: Props) => {

    const combinedClassname = clsx('flex flex-row', styles.social_link, className);
    return (
        <ul className={combinedClassname}>
            {data?.map((item)=>{
                return <li key={item.id}>
                    <Link href={item.link}><Image src={item.icon} alt={item.name} className={styles.icon}/></Link>
                </li>
            })}
        </ul>
    );
}

export default SocialLinks;

export interface Props {
    data: SocialLinkData[],
    className?: string;
}

export interface SocialLinkData {
    id: number;
    name: string;
    icon: StaticImageData;
    link: string;
}