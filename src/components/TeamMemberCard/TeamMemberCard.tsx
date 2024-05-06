import Image, {StaticImageData} from 'next/image';
import styles from './TeamMemberCard.module.css';

const TeamMemberCard = ({data}: Props) => {
    return (
        <div className="max-w-sm rounded overflow-visible shadow-lg relative mt-24 pb-16 bg-white px-8">
            <Image className={styles.avatar} src={data?.avatar} alt={data?.name} />
            <div className="mt-14 text-center">
                <div className="text-base mb-1">{data?.name}</div>
                <p className="text-gray-600 text-xs">{data?.jobTitle}</p>
            </div>

            <div className='mt-6'>
                <h1 className='text-sm font-bold mb-4'>专攻领域</h1>
                <ul className='list-disc pl-5 text-sm'>
                    {data?.majorArea?.map((item)=>{
                        return <li>{item}</li>;
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