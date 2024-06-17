import clsx from 'clsx';
import React from 'react';
import styles from './Tag.module.css';
import useScreen from '../useScreen/useScreen';

export const Tag = ({...props}: Props) => {
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

const MobileView = ({text, theme = TagTheme.GREEN}: Props) => {
    let combinedClassName = '';

    if (theme === TagTheme.GREEN) {
        combinedClassName = clsx(combinedClassName, 'bg-primary-green text-white', styles.m_tag)
    } else if (theme === TagTheme.WHITE) {
        combinedClassName = clsx(combinedClassName, 'bg-white text-primary-green', styles.m_tag)
    }
    return <div className={combinedClassName}>
        {text}
    </div>
}

const PCView = ({text, theme = TagTheme.GREEN}: Props) => {
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