import React from 'react';
import styles from './Arrow.module.css';
import Image from 'next/image';
import clsx from 'clsx';

const Arrow = ({dir}: Props) => {
    return <>
        <Image src={require('@/assets/icon_arrow_down.png')} alt=''
            className={clsx(styles.icon, {[styles.reverse]:dir === ArrowDir.UP})}
        />
    </>;
}

export default Arrow;

export enum ArrowDir {
    UP,
    DOWN,
}

interface Props {
    dir: ArrowDir;
}