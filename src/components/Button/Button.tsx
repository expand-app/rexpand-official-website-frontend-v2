import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({text, size,type, }: Props) => {
    const buttonClassName = clsx(
        styles.button,
        {[styles.small]: ButtonSize.SMALL === size},
        {[styles.middle]: ButtonSize.MIDDLE === size},
        {[styles.large]: ButtonSize.LARGE === size},
        {[styles.bordered]: ButtonType.BORDERED === type},
        {[styles.gradient]: ButtonType.GRADIENT === type},
        {[styles.solid]: ButtonType.SOLID === type},
    );

    return (
        <button className={buttonClassName}>
            {text}
        </button>
    );
}
export default Button;

export enum ButtonType {
    BORDERED,
    GRADIENT,
    SOLID,
}

export enum ButtonSize {
    SMALL,
    MIDDLE,
    LARGE,
}

export interface Props { 
    text: string;
    size: ButtonSize;
    type: ButtonType;
}