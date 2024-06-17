import React from 'react';
import styles from './PersonalizedCourse.module.css';
import personalizedCourseImg from '@/assets/job/offer-guarantee/personalized_course.png';
import mPersonalizedCourseImg from '@/assets/job/offer-guarantee/m_personalized_course.png';
import Image from 'next/image';
import clsx from 'clsx';
import useScreen from '@/components/useScreen/useScreen';

const PersonalizedCourse = ({...props}: Props) => {
    const { isMobile } = useScreen();
   
    return (
        <div>
            {isMobile?.()? 
            <MobileView {...props} />
            :
            <PCView {...props} />
            }
        </div>
    );
}

const MobileView = ({className,}: Props) => {
    const combinedClassName = clsx('flex justify-center', className);

    return <div className={combinedClassName}>
        <Image src={mPersonalizedCourseImg} alt='个性化安排课程' />
    </div>;
}
const PCView = ({className,}: Props) => {
    const combinedClassName = clsx('', className);

    return <div className={combinedClassName}>
        <Image src={personalizedCourseImg} alt='个性化安排课程' />
    </div>;
}

export default PersonalizedCourse;

export interface Props {
    className?: string;
}