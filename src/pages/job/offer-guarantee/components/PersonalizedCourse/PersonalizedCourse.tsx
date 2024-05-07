import React from 'react';
import styles from './PersonalizedCourse.module.css';
import personalizedCourseImg from '@/assets/job/offer-guarantee/personalized_course.png';
import Image from 'next/image';
import clsx from 'clsx';

const PersonalizedCourse = ({className,}: Props) => {
    const combinedClassName = clsx('', className);

    return <div className={combinedClassName}>
        <Image src={personalizedCourseImg} alt='个性化安排课程' />
    </div>;
}

export default PersonalizedCourse;

export interface Props {
    className?: string;
}