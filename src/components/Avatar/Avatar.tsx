import clsx from 'clsx';
import React from 'react';

const Avatar = ({data, className}: Props) => {
    let combinedClassName = clsx('rounded-full bg-green-700 text-white w-14 h-14 flex items-center justify-center', className);

    return <div className={combinedClassName}>
        {data.userName}
    </div>
}

export default Avatar;

export interface Props {
    data: AvatarData;
    className: string;
}

export interface AvatarData{
    userName: string;
}
