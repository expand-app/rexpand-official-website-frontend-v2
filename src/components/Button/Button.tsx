import React, { MouseEventHandler } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({text, size,type,color = ButtonColor.WHITE, radius = ButtonRadius.ROUNDED, className, onClick }: Props) => {

    let buttonClassName = clsx(
        styles.button,
        {[styles.small]: ButtonSize.SMALL === size},
        {[styles.middle]: ButtonSize.MIDDLE === size},
        {[styles.large]: ButtonSize.LARGE === size},
        {[styles.bordered]: ButtonType.BORDERED === type},
        {[styles.gradient]: ButtonType.GRADIENT === type},
        {[styles.solid]: ButtonType.SOLID === type},

        {'radius-8': ButtonRadius.ROUNDED === radius},
    );
    if (type === ButtonType.BORDERED) {
        buttonClassName = clsx(
            buttonClassName,
            {[styles.border_white]: ButtonColor.WHITE === color},
            {[styles.border_green]: ButtonColor.GREEN === color},
        );
    } else if (type === ButtonType.SOLID) {
        buttonClassName = clsx(
            buttonClassName,
            {[styles.solid_white]: ButtonColor.WHITE === color},
            // {[styles.border_green]: ButtonColor.GREEN === color},
        );
    }

    const combinedClassName = `${buttonClassName} ${className ?? ''} font-m`;
    return (
        <button className={combinedClassName} onClick={onClick}>
            {text}
        </button>
    );
}
export default Button;

export enum ButtonColor {
    WHITE,
    GREEN,
}
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

export enum ButtonRadius {
    NONE,
    ROUNDED,
}

export interface Props { 
    text: string;
    size: ButtonSize;
    type: ButtonType;
    color?: ButtonColor;
    className?: string;
    radius?:ButtonRadius;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}