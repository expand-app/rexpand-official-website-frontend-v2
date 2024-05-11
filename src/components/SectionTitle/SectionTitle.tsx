import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({title, subtitle, className}: Props) => {
    
    const baseClassName = 'flex flex-col items-center';
    const combinedClassName = `${baseClassName} ${className ?? ''}`;

    return (
        <div className={combinedClassName}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle? <h2 className={styles.subtitle}>{subtitle}</h2>: null}
        </div>
    );
}

export default SectionTitle;

interface Props {
    title: string | JSX.Element;
    subtitle?: string;
    className?: string;
}