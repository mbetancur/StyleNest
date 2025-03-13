import React from 'react';
import '@/styles/MarketplaceCard.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';


const MarketplaceCard = ({ profile } : { profile : { id: number,created_at: string, name: string, imageUrl: string, supplyList: string,description: string  }})=> {
    const router = useRouter();

    const goToProfile = () => {
        router.push(`/profile/${profile.id}`);
    };

    if (!profile) return <h1>No hay datos</h1>;
    return (
        
        <div className="marketplace-card" onClick={goToProfile}>
            <div className="marketplace-card-img container-card-img">
                <Image src={profile.imageUrl} alt="Example" width={250} height={250} />
            </div>
            <div className="marketplace-card-text">
                <h3 className="marketplace-card-name">{profile.name}</h3>
                <p className="marketplace-card-services">{profile.supplyList}</p>
            <p className="marketplace-card-price">💲60</p>
                {/* <p className="card-price">💲{profile.price} promedio</p> */}
            </div>
            
        </div>
    );
};

export default MarketplaceCard;
