import React, { useEffect, useRef, useState } from 'react';
import styles from './PersonalizedCourse.module.css';
import useScreen from '@/components/useScreen/useScreen';
import clsx from 'clsx';
import curveImg from '@/assets/job/offer-guarantee/personalized_course_curve.svg';
import Image from 'next/image';
import Indicator from './Indicator/Indicator';

export const PersonalizedCourse = () => {
    const { isMobile } = useScreen();
   
    return (
        <>
          <div>
              {isMobile?.()? 
              <MobileView />
              :
              <PCView />
              }
          </div>
        </>
    );
}

const MobileView = () => {
    return (
        <div className={clsx(styles.container)}>
            <svg width="315" height="899" viewBox="-20 0 350 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M105.984 13.1108L94.4947 2.11077C93.7502 1.39792 92.7592 1 91.7284 1H5.00122C2.79208 1 1.00122 2.79086 1.00122 5V27C1.00122 29.2091 2.79208 31 5.00122 31H91.7284C92.7592 31 93.7502 30.6021 94.4947 29.8892L105.984 18.8892C107.629 17.3143 107.629 14.6857 105.984 13.1108Z" stroke="#EEEEEE"/>
                <path d="M115.482 166H239C280.421 166 314 132.421 314 91V91C314 49.5786 280.421 16 239 16H108" stroke="#DCDCDC"/>
                <path d="M200.482 316H76C34.5787 316 1.00001 282.421 1.00001 241V241C1.00001 199.579 34.5786 166 76 166H208" stroke="#DCDCDC"/>
                <path d="M115.482 467H238.5C280.197 467 314 433.197 314 391.5V391.5C314 349.803 280.197 316 238.5 316H108" stroke="#DCDCDC"/>
                <path d="M200.482 618H76.5C34.8025 618 1.00001 584.197 1.00001 542.5V542.5C1.00001 500.803 34.8025 467 76.5 467H208" stroke="#DCDCDC"/>
                <path d="M115.482 767H239.5C280.645 767 314 733.645 314 692.5V692.5C314 651.355 280.645 618 239.5 618H108" stroke="#DCDCDC"/>
                <path d="M127 883H59.0002C26.9677 883 1.00023 857.033 1.00023 825V825C1.00023 792.967 26.9677 767 59.0002 767H208" stroke="#DCDCDC"/>
                <path d="M128.018 880.111L139.507 869.111C140.251 868.398 141.242 868 142.273 868H229C231.209 868 233 869.791 233 872V894C233 896.209 231.209 898 229 898H142.273C141.242 898 140.251 897.602 139.507 896.889L128.018 885.889C126.373 884.314 126.373 881.686 128.018 880.111Z" stroke="#EEEEEE"/>

                <foreignObject x="24" y="4" width="50" height="50">
                    <div style={{fontSize: `16px`, color: '#616163', textAlign:'center'}}>
                        起航
                    </div>
                </foreignObject>
                <foreignObject x="90" y="818" width="190" height="100">
                    <div style={{color: '#616163', textAlign:'center'}}>
                        <div style={{
                            color: '#616163',
                            textAlign: 'center',
                        }}>
                            <div style={{fontSize: '12px', marginBottom: 17}}>陪伴学生走完求职全程，直至拿到满意的Offer</div>
                            <div style={{fontSize: '14px', fontFamily: 'PingFang_Medium' }}>斩获Offer</div>
                        </div>
                    </div>
                </foreignObject>

                <foreignObject x="15" y="8" width="310" height="160">
                    <Indicator 
                            type='left'
                            sn='1'
                            text='求职规划'
                            description='深度理解学生需求，定制职业规划，制定合理有效的求职策略' 
                        />
                </foreignObject>

                <foreignObject x="-8" y="158" width="310" height="160">
                    <Indicator 
                        type='right'
                        sn='2'
                        text='导师匹配'
                        description='根据学员具体情况，选择最合适的行业导师，实现专业性最高匹配度' 
                        />
                    
                </foreignObject>

                <foreignObject x="15" y="310" width="310" height="160">
                    <Indicator 
                        type='left'
                        sn='3'
                        text='背景提升'
                        description='提供个性化的背景提升服务，通过专业培训、实习机会等多种方式提升职业技能' 
                        />
                </foreignObject>


                <foreignObject x="-8" y="458" width="310" height="160">
                    <Indicator 
                        type='right'
                        sn='4'
                        text='1对1 辅导'
                        description='导师一对一辅导，配合丰富求职资料，全面提升简历质量、丰富面试技巧等' 
                        />
                </foreignObject>

                <foreignObject x="15" y="612" width="310" height="160">
                    <Indicator 
                        type='left'
                        sn='5'
                        text='职位推荐'
                        description='根据个人能力和职业规划，为学生推荐最匹配的实习或全职职位' 
                        />
                </foreignObject>
            </svg>

        </div>

    );
}


const PCView = () => {
   
    return (
        <div className={clsx(styles.container)}>
            <svg width="100%" height="auto" viewBox="0 0 1439 641" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M220.129 24H1286.97C1370.38 24 1438 91.6177 1438 175.028V175.028C1438 258.439 1370.38 326.057 1286.97 326.057H147.972C66.8014 326.057 0.999977 391.858 0.999977 473.028V473.028C0.999977 554.198 66.8015 620 147.972 620H1038.17" stroke="#3EB761" stroke-width="2"/>
                <path d="M220.527 20.8981L197.19 1.89808C196.477 1.31718 195.585 1 194.665 1H33.5943C31.3852 1 29.5943 2.79086 29.5943 5V43C29.5943 45.2091 31.3852 47 33.5944 47H194.665C195.585 47 196.477 46.6828 197.19 46.1019L220.527 27.1019C222.493 25.5013 222.493 22.4987 220.527 20.8981Z" stroke="#EEEEEE" stroke-width="2"/>
                <path d="M1039.42 614.141L1058.83 595.141C1059.58 594.41 1060.59 594 1061.63 594H1194.5C1196.71 594 1198.5 595.791 1198.5 598V636C1198.5 638.209 1196.71 640 1194.5 640H1061.63C1060.59 640 1059.58 639.59 1058.83 638.859L1039.42 619.859C1037.82 618.29 1037.82 615.71 1039.42 614.141Z" stroke="#EEEEEE" stroke-width="2"/>
            
            
                <foreignObject x="95" y="10" width="50" height="50">
                    <div style={{fontSize: `20px`, color: '#616163', textAlign:'center', fontFamily: 'PingFang_Medium'}}>
                        起航
                    </div>
                </foreignObject>
                <foreignObject x="980" y="602" width="295" height="100">
                    <div style={{fontSize: `20px`, color: '#616163', textAlign:'center'}}>
                        <div style={{
                            color: '#616163',
                            textAlign: 'center',
                        }}>
                            <div style={{fontSize: '20px', marginBottom: 19, fontFamily: 'PingFang_Medium' }}>斩获offer</div>
                            <div style={{fontSize: '16px'}}>陪伴学生走完求职全程，直至拿到满意的Offer</div>
                        </div>
                    </div>
                </foreignObject>

                <foreignObject x="380" y="14" width="315" height="180">
                    <Indicator 
                        sn='1'
                        text='求职规划'
                        description='深度理解学生需求，定制职业规划，制定合理有效的求职策略' 
                    />
                </foreignObject>

                <foreignObject x="870" y="14" width="315" height="180">
                    <Indicator 
                        sn='2'
                        text='导师匹配'
                        description='根据学员具体情况，选择最合适的行业导师，实现专业性最高匹配度' 
                        />
                    
                </foreignObject>

                <foreignObject x="1050" y="317" width="315" height="180">
                    <Indicator 
                        sn='3'
                        text='背景提升'
                        description='提供个性化的背景提升服务，通过专业培训、实习机会等多种方式提升职业技能' 
                        />
                </foreignObject>


                <foreignObject x="140" y="317" width="315" height="180">
                    <Indicator 
                        sn='4'
                        text='1对1 辅导'
                        description='导师一对一辅导，配合丰富求职资料，全面提升简历质量、丰富面试技巧等' 
                        />
                </foreignObject>

                <foreignObject x="550" y="341" width="315" height="290">
                    <Indicator 
                        type='bottom'
                        sn='5'
                        text='职位推荐'
                        description='根据个人能力和职业规划，为学生推荐最匹配的实习或全职职位' 
                        />
                </foreignObject>
            </svg>

        </div>
    );
}

export default PersonalizedCourse;