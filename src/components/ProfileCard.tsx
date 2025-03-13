"use client";

import '@/styles/ProfileCard.css';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const ProfileCard = ({ profile }: { profile: { id: number, created_at: string, name: string, imageUrl: string, supplyList: string, description: string } }) => {
    const router = useRouter();

    const goToProfile = () => {
        sessionStorage.setItem('selectedProfile', JSON.stringify(profile));
        router.push(`/profile/${profile.id}`);
    };

    return (
        <div className='profile-card container-card' onClick={goToProfile}>
            <div className='container-card-img profile-card-img'>
                <Image src={profile.imageUrl} alt={profile.name} width={400} height={400} />
            </div>
            <div className='profile-card-text'>
                <div>{profile.name}</div>
                <div className='light'>{profile.supplyList}</div>
                <div>💲 40</div>
            </div>
        </div>
    );
};

export default ProfileCard;
