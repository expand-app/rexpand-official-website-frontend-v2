import React from 'react';
import styles from './Arrow.module.css';
import Image from 'next/image';
import clsx from 'clsx';

const Arrow = ({dir, className}: Props) => {
    const combinedClassName = clsx('', className);
    return <div className={combinedClassName}>
        <Image src={require('@/assets/icon_arrow_down.png')} alt=''
            className={clsx(styles.icon, {[styles.reverse]:dir === ArrowDir.UP})}
        />
    </div>;
}

export default Arrow;

export enum ArrowDir {
    UP,
    DOWN,
}

interface Props {
    dir: ArrowDir;
    className?: string;
}