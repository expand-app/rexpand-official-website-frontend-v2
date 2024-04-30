import React from 'react';

const SectionTitle = ({title, subtitle}: Props) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className='text-2xl font-bold'>{title}</h1>
            <h2 className='text-base text-gray-500'>{subtitle}</h2>
        </div>
    );
}

export default SectionTitle;

interface Props {
    title: string;
    subtitle: string;
}