import React from 'react';
import styles from './Indicator.module.css';
import useScreen from '@/components/useScreen/useScreen';
import clsx from 'clsx';

export const Indicator = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <div style={props.style} className={clsx(styles.vertical_indicator_container)}>
            {isMobile?.()? 
            <MobileView {...props}/>
            :
            <PCView {...props}/>
            }
        </div>
    );
}

const MobileView = ({text = '', type,sn, description = '',}: Props) => {
    if (type == null) {
        return null;
    } else {
        if (type === 'left') {
            return <div className={clsx(styles.indicator_left)}>
                <div className={styles.left_indicator_text_box}>
                    <div className={styles.left_label_box}>
                        <div className={styles.left_label_left}>{text}</div>
                        <div className={styles.left_label_right}>{sn}</div>
                    </div>
                    <div className={styles.left_description}>{description}</div>
                </div>
            </div>;
        } else if (type === 'right') {
            return <div className={clsx(styles.indicator_right)}>
                <div className={styles.right_indicator_text_box}>
                    <div className={styles.right_label_box}>
                        <div className={styles.right_label_left}>{text}</div>
                        <div className={styles.right_label_right}>{sn}</div>
                    </div>
                    <div className={styles.right_description}>{description}</div>
                </div>
            </div>;
        } else {
            return null;
        }
    }
}

const PCView = ({text = '', sn, description = '', type = 'top'}: Props) => {

    if (type == null) {
        return null;
    } else {
        if ( type === 'top') {
            return <div className={styles.indicator}>
                <div className={styles.indicator_text_box}>
                    <div className={styles.label_box}>
                        <div className={styles.label_left}>{sn}</div>
                        <div className={styles.label_right}>{text}</div>
                    </div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>;
        } else if (type === 'bottom') {
            return <div className={clsx(styles.indicator)}>
                <div className={styles.indicator_text_box}>
                    <div className={styles.label_box}>
                        <div className={styles.label_left}>{sn}</div>
                        <div className={styles.label_right}>{text}</div>
                    </div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>;
        } else {
            return null;
        }
    }
}

export interface Props {
    text: string;
    sn: string;
    description?: string;
    style?: React.CSSProperties;
    type?: string;
}
export default Indicator;