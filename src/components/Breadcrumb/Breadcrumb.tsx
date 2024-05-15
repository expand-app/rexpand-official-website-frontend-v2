import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';
import clsx from 'clsx';

export default function Breadcrumb({items, className}: Props) {
    if (!items) {
        return null;
    }
    const combinedClass = clsx('', className);

    return <nav className={combinedClass} style={{color: '#333333'}} aria-label="Breadcrumb">
        <span>您所在的位置是：</span>
        <ol className="inline-flex">
            {items?.map((item, index)=>{
                if (index < items.length - 1) {
                    // 不是最后一个
                    return <li key={item.title} className={`flex items-center ${styles.separator}`}>
                        <Link href={item.path} >{item.title}</Link>
                    </li>;
                } else {
                    // 最后一个
                    return <span key={item.title}>{item.title}</span>;
                }
            })}
        </ol>
    </nav>;
}

export interface Props {
    readonly items: BreadCrumbItem[];
    className?: string;
}

export interface BreadCrumbItem {
    title: string;
    path: string;
}