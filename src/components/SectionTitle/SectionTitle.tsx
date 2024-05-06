import React from 'react';

const SectionTitle = ({title, subtitle, className}: Props) => {
    
    const baseClassName = 'flex flex-col items-center';
    const combinedClassName = `${baseClassName} ${className ?? ''}`;

    return (
        <div className={combinedClassName}>
            <h1 className='text-4xl mb-3'>{title}</h1>
            {subtitle? <h2 className='text-base text-gray-800'>{subtitle}</h2>: null}
        </div>
    );
}

export default SectionTitle;

interface Props {
    title: string;
    subtitle?: string;
    className?: string;
}