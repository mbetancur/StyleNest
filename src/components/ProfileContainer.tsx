import '@/styles/ProfileContainer.css';
import '@/styles/CommonTopStyles.css';
import ProfileCard from './ProfileCard';
import { ListSuppliersProps } from './ListSuppliers';
import { useRef, useState } from 'react';

const ProfileContainer = ({ data }: ListSuppliersProps) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        if (scrollRef.current) {
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Ajusta la velocidad del desplazamiento
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className='container'>
            <div className='container-title'>
                <h2>Top Profiles</h2>
            </div>
            <div 
                className='container-list profile-list' 
                ref={scrollRef} 
                onMouseDown={handleMouseDown} 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseUp} 
                onMouseUp={handleMouseUp}
                style={{ cursor: isDragging ? 'grabbing' : 'grab', overflowX: 'auto', whiteSpace: 'nowrap' }}
            >
                {data?.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default ProfileContainer;
