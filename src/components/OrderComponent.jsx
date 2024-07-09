import React from 'react'
import Cardwrapper from './Cardwrapper'

const RedButton = ({children}) =>{
  return(
    <button className='bg-red-500 text-white'>{children}</button>
  )
}

const OrderComponent = ({name,price,payment,status}) => {
  let colorClasses;
  switch(status){
    case 'Pending':
      colorClasses = 'bg-yellow-500 text-white rounded px-1 ';
      break;
    case 'In Progress':
      colorClasses = 'bg-indigo-500 text-white rounded px-1';
      break;
    case 'Return':
      colorClasses = 'bg-red-500 text-white rounded px-1';
      break;
    case 'Delivered':
      colorClasses = 'bg-green-500 text-white rounded px-1';
      break;
  }
  return (
    <Cardwrapper>
      <div className='flex justify-between'>
        <div className='flex justify-between flex-grow-[2.5] basis-5/9 mr-10'>
          <div className='group-hover:text-white mx-1' >{name}</div>
          <div className='group-hover:text-white mx-1'>{price} </div>
          <div className='group-hover:text-white mx-1'>{payment} </div>
        </div>
        <div className='flex-grow-1 basis-1/4 flex justify-center' >
          <button className={`${colorClasses}`}>{status}</button>
        </div>
      </div>
    </Cardwrapper>
  )
}

export default OrderComponent