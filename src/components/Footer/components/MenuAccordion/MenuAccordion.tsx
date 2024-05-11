import React, { useState } from 'react';
import styles from './MenuAccordion.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

const MenuAccordion = ({data, className}: Props) => {
    const [openIds, setOpenIds] = useState<Array<number>>([]);

    const combinedClassName = clsx('w-full',styles.accordion, className);

    const onLevel1Click = (id: number) => {
        if (openIds?.indexOf(id) == -1) {
            setOpenIds([...openIds, id]);
        } else {
            const newOpenIds = openIds.filter(item => item !== id);

            setOpenIds(newOpenIds);
        }
    }

    return (
        <ul className={styles.accordion_menu}>
            {
                data?.map((item, index)=>{
                    return <li key={item.id} className={clsx('',{[styles.open]: openIds?.indexOf(item.id) != -1})}>
                        <div className={styles.dropdownlink}
                            onClick={()=>onLevel1Click(item.id)}>
                            <div className='flex-1'>{item.title}</div>
                            <Image src={require('@/assets/icon_arrow_down_gray.png')} alt="" className={styles.arrow_icon}/>
                        </div>
                        <ul className={clsx(styles.submenu_items,{[styles.expand]: openIds?.indexOf(item.id) != -1})}>
                            {item?.children?.map((childItem)=>{
                                return <li key={childItem.id}><Link href={childItem?.link ?? ''}>{childItem.title}</Link></li>;
                            })}
                        </ul>
                    </li>;
                })
            }
        </ul>
    );
}

export default MenuAccordion;

export interface Props {
    data: MenuData[];
    className?: string;
}

export interface MenuData {
    id: number;
    title: string;
    link?: string | null;
    children?: MenuData[] | null;
}