import clsx from 'clsx';
import React from 'react';
import styles from './Tag.module.css';

const Tag = ({text, theme = TagTheme.GREEN}: Props) => {
    let combinedClassName = 'inline-block py-1 px-2 rounded-md';

    if (theme === TagTheme.GREEN) {
        combinedClassName = clsx(combinedClassName, 'bg-primary-green text-white', styles.tag)
    } else if (theme === TagTheme.WHITE) {
        combinedClassName = clsx(combinedClassName, 'bg-white text-primary-green', styles.tag)
    }
    return <div className={combinedClassName}>
        {text}
    </div>
}

export default Tag;

export interface Props {
    text: string;
    theme?: TagTheme;
}

export enum TagTheme {
    GREEN,
    WHITE,
}