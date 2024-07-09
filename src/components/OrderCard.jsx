import React from 'react'
import OrderComponent from './OrderComponent'
import Cardwrapper from './Cardwrapper'

const OrderCard = () => {
  const items = [{name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'In Progress' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'In Progress' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Pending' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Return' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'In Progress' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Return' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'In Progress'},
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Return' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
    {name:'Refrigerator', price:'$1200' ,payment:'Paid', status:'Delivered' },
  ]
  return (
    <div className='p-3 w-auto m-auto'>
      <div className='border-t-2 mt-2 rounded-md py-4 px-2 flex justify-between'>
        <div className='grtext-2xl font-bold text-indigo-500'>Recent </div>
        <div>
          <button className='bg-indigo-500 rounded-lg p-1 text-white'>View all</button>
        </div>
      </div>
      
      <Cardwrapper>
        <div className='flex justify-between'>
          <div className='ml-6 flex justify-between flex-grow-[2.5] basis-5/9 mr-10'>
            <div className='font-bold mx-3'>Name</div>
            <div className='font-bold mx-1'>Price</div>
            <div className='font-bold mx-1'>Payment</div>
          </div>
          <div className='flex pl-3 flex-grow-1 basis-1/4 justify-center'>
            <div className='font-bold'>Progress</div>
          </div>
        </div>
      </Cardwrapper>
      <div className='flex flex-col'>
          {items.map((item, index) => (
              <OrderComponent
                  key={index}
                  name={item.name}
                  price={item.price}
                  payment = {item.payment}
                  status={item.status}
              />
          ))}
      </div>
    </div>
  )
}

export default OrderCard