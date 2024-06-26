import React, {useEffect, useState} from 'react';
import styles from './FloatMenu.module.css';
import clsx from 'clsx';

const FloatMenu = ({data, activeIndex, className, onChange}: Props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const combinedClassName = clsx(styles.float_menu, className, 'flex flex-col', {[styles.show]: visible});

    useEffect(() => {  
        const handleScroll = () => {  
          const x = window.scrollX;
          const y = window.scrollY;
    
          if (y > 500) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        };  
      
        window.addEventListener('scroll', handleScroll);  
      
        return () => {  
          window.removeEventListener('scroll', handleScroll);  
        };  
      }, []);
    
    return <div className={combinedClassName}>
        {data?.map((item, index)=>{
            let combinedMenuItemClassName = clsx('py-6 px-10 cursor-pointer',styles.menu_item);
            if (activeIndex === index) {
                combinedMenuItemClassName = clsx(combinedMenuItemClassName, styles.active);
            }
            
            return <div key={item.id} 
                onClick={()=>onChange(index)}
                className={combinedMenuItemClassName}>{item.text}</div>;
        })}
    </div>
}

export default FloatMenu;

export interface Props {
    data: FloatMenuItemData[];
    activeIndex?: number;
    className?: string;
    onChange: (newIndex:number) => void;
}

export interface FloatMenuItemData {
    id: number;
    text: string;
    anchor: string;
}