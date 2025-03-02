import '@/styles/SupplierContainer.css'
import SupplierCard from './SupplierCard'

const SupplierContainer = ({ data }: { data: Array<{ img: string; text: string; }>}) => {

    return (
        <div className='container'>
            <div className='container-title'>
                <h2>Top Services</h2>
            </div>
            <div className='container-list supplier-list'>
                {data.map((supplier,index) => (
                    <SupplierCard key={index} img={supplier.img} text={supplier.text} />
                ))}
            </div>
        </div>
    );
};

export default SupplierContainer;