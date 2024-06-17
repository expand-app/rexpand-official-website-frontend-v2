import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import clsx from 'clsx';
import closeImg from '@/assets/close.svg';
import Image from 'next/image';

const Modal = ({
  open = false, 
  onClose,
  className = '', 
  children=<>No Content</>}: Props) => {
    let containerClassNames = '';

    containerClassNames = clsx(containerClassNames, className);

    const handleCloseClick = () => {
      onClose?.();
    }

    return <div className={containerClassNames}>
        {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className={clsx('relative text-black m-2 z-10 w-auto', styles.modal)} >
            <button
              onClick={handleCloseClick}
              className="absolute top-4 right-4 flex items-center justify-center w-5 h-5 hover:scale-105 focus:outline-none">
              <Image src={closeImg} alt="关闭" />
            </button>
            <div>
            {children}
            </div>
          </div>
          
        </div>
      )}
    </div>;
}

export default Modal;

interface Props {
    open: boolean;
    onClose: Function,
    className?: string;
    children: JSX.Element;
}
