import '@/styles/SupplierCard.css'

const SupplierCard = ({ text }: { text: string }) => {
  return (
    <div className='supplier-card'>
      <div className='supplier-card-img'>
        {/* TODO research for proper use of next IMAGE */}
        {/* <div>{img}</div> */}
      </div>
      <div className='supplier-card-text'>{text}</div>
    </div>
  );
};

export default SupplierCard;