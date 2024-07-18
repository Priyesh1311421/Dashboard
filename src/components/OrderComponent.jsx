const OrderComponent = ({name,price,payment,status}) => {
  let colorClasses;
  switch(status){
    case 'Pending':
      colorClasses = 'bg-yellow-500 text-white rounded p-1 w-[90px] ';
      break;
    case 'In Progress':
      colorClasses = 'bg-indigo-500 text-white rounded p-1 w-[90px]';
      break;
    case 'Return':
      colorClasses = 'bg-red-500 text-white rounded p-1 w-[90px]';
      break;
    case 'Delivered':
      colorClasses = 'bg-green-500 text-white rounded p-1 w-[90px]';
      break;
  }
  return (
      <div className='grid grid-cols-4 gap-4 p-4 border-b '>
        <div className='' >{name}</div>
        <div className=''>{price} </div>
        <div className=''>{payment} </div>
        <button className={`${colorClasses}`}>{status}</button>
      </div>
  )
}

export default OrderComponent