import Image, {StaticImageData} from 'next/image';
import styles from './TeamMemberCard.module.css';
import clsx from 'clsx';
import useScreen from '../useScreen/useScreen';


const TeamMemberCard = ({...props}: Props) => {
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

const MobileView = ({data}: Props) => {
    return (
        <div className={clsx("max-w-sm overflow-visible relative  bg-white px-8",styles.m_card)}>
            <Image className={styles.m_avatar} src={data?.avatar} alt={data?.name} />
            <div className={styles.m_header}>
                <div className={clsx('font-m font-16 font-w500 mb-12px', styles.m_username)}>{data?.name}</div>
                <p className={clsx('font-14 font-w400 opacity-60', styles.m_job_title)}>{data?.jobTitle}</p>
            </div>

            <div>
                <h1 className={styles.m_field_title}>专攻领域</h1>
                <ul className={clsx('list-disc pl-5 text-16', styles.m_field)}>
                    {data?.majorArea?.map((item)=>{
                        return <li key={item}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

const PCView = ({data}: Props) => {
    return (
        <div className={clsx("max-w-sm overflow-visible relative pb-16 bg-white px-8",styles.card)} style={{height:390}}>
            <Image className={styles.avatar} src={data?.avatar} alt={data?.name} />
            <div className="pt-16 text-center">
                <div className={clsx('font-m font-16 font-w500 mb-12px', styles.username)}>{data?.name}</div>
                <p className={clsx('font-14 font-w400 opacity-60', styles.job_title)}>{data?.jobTitle}</p>
            </div>

            <div className='mt-6'>
                <h1 className='font-m font-w500 font-16 mb-10px'>专攻领域</h1>
                <ul className={clsx('list-disc pl-5 text-16', styles.field)}>
                    {data?.majorArea?.map((item)=>{
                        return <li key={item}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TeamMemberCard;


export interface Props {
    data: MemberData;
}

export interface MemberData {
    id: number;
    name: string;
    avatar: StaticImageData;
    jobTitle: string;
    majorArea: Array<string>;
}