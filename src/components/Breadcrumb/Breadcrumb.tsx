import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({items}: Props) {
    if (!items) {
        return null;
    }
    return <nav className="text-sm" aria-label="Breadcrumb">
        <span>您所在的位置是：</span>
        <ol className="inline-flex">
            {items?.map((item, index)=>{
                if (index < items.length - 1) {
                    // 不是最后一个
                    return <li key={item.path} className={`flex items-center ${styles.separator}`}>
                        <Link href={item.path} className="text-gray-500 hover:text-gray-700">{item.title}</Link>
                    </li>;
                } else {
                    // 最后一个
                    return <span className="text-gray-800">{item.title}</span>;
                }
            })}
        </ol>
    </nav>;
}

export interface Props {
    readonly items: BreadCrumbItem[];
}

export interface BreadCrumbItem {
    title: string;
    path: string;
}