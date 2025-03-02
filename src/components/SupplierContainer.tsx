// 'use server'

import '@/styles/SupplierContainer.css'

import SupplierCard from './SupplierCard'
import { ListSuppliersProps } from './ListSuppliers';

const SupplierContainer = ({ data }: ListSuppliersProps) => {
  return (
    <div className='supplier'>
      <div className='supplier-title'>
        <h2>Top Services</h2>
      </div>
      <div className='supplier-list'>
        {data?.map((supplier, index) => (
          <SupplierCard key={index} text={supplier.name} />
        ))}
      </div>
    </div>
  );
};

export default SupplierContainer;