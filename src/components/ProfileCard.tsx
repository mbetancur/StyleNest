"use client"; // Esto lo hace un componente cliente

import '@/styles/ProfileCard.css'
import { useRouter } from 'next/navigation';
import { supplyListMatcher } from '@/lib/db/utils/supplyListConstants'

const Profile = ({ profile }: { profile: { created_at: string; description: string; id: number; imageUrl: string; name: string; supplyList: string } }) => {
    const router = useRouter();

    const goToProfile = () => {
        router.push(`/profile?id=${profile.id}`); // Usa el ID real
    };

    const displaySupplyList = (supplyList: string): JSX.Element[] => {
    const supplyListArray = supplyList.split(',')
    return supplyListArray.map((supply, index) => (
        <li key={index}>{supplyListMatcher(supply)}</li>
    ))
    }


    return (
        <div className='profile-card container-card'>
            <div className='container-card-img profile-card-img'>
                <img src={profile.imageUrl} alt="" />
            </div>
            <div className='profile-card-text'>
                <div>{profile.name}</div>
                <div className='light'>{profile.supplyList}</div>
                <div>$ 40</div>
                
            </div>
        </div>
    );
};

export default Profile;
