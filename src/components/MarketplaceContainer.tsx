import React from 'react';
import { ListSuppliersProps } from './ListSuppliers';
import MarketplaceCard from './MarketplaceCard';
import '@/styles/MarketplaceContainer.css';

const MarketplaceContainer: React.FC<ListSuppliersProps> = ({ data }) => {
    console.log(`data: ${JSON.stringify(data?.[0].name)}`)
    return (
        <div className="container">
            <div className="container-title">
                <h2>Marketplace ({data?.length})</h2>
            </div>

            <div className="marketplace-list">
            {data && data.length > 0 ? (
                data.map((profile) => (
                    <MarketplaceCard key={profile.id} profile={profile} />
                ))
                    
            ) : (
                <p className="no-data-message">No hay perfiles disponibles.</p>
            )}
            </div>
        </div>
    );
};

export default MarketplaceContainer;
