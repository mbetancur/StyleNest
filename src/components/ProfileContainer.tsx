import '@/styles/ProfileContainer.css'
import '@/styles/CommonTopStyles.css'
import ProfileCard from './ProfileCard';

const ProfileContainer = ({ data }: { data: Array<{ created_at: string; description: string; id: number; imageUrl: string; name: string; supplyList: string }> }) => {
    return (
        <div className='container'>
            <div className='container-title '>
                <h2>Top Profiles</h2>
            </div>
            <div className='container-list profile-list'>
                {/* {data.map((profile, index) => {
                    console.log(profile)
                    return (
                        <ProfileCard key={index} profile={profile} />
                        )
                    }
                )} */}
                {/* This is content for testing */}
                <ProfileCard key={100} profile={data[0]} />
                <ProfileCard key={101} profile={data[0]} />
            </div>
            
        </div>
    );
};

export default ProfileContainer;