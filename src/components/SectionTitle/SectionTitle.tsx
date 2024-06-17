import React from 'react';
import styles from './SectionTitle.module.css';
import useScreen from '../useScreen/useScreen';

export const SectionTitle = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <>
          <div>
              {isMobile?.()? 
              <MobileView {...props}/>
              :
              <PCView {...props}/>
              }
          </div>
        </>
    );
}

const MobileView = ({title, subtitle, className}: Props) => {
    
    const baseClassName = 'flex flex-col items-center';
    const combinedClassName = `${baseClassName} ${className ?? ''}`;

    return (
        <div className={combinedClassName}>
            <h1 className={styles.m_title}>{title}</h1>
            {subtitle? <h2 className={styles.m_subtitle}>{subtitle}</h2>: null}
        </div>
    );
}
const PCView = ({title, subtitle, className}: Props) => {
    
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