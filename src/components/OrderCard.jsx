import OrderComponent from './OrderComponent'

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
    <div className='py-3 w-auto m-auto'>
      <div className='border-t-2 mt-2 rounded-md py-4 px-2 flex justify-between'>
        <div className='grtext-2xl font-bold text-indigo-500'>Recent </div>
        <div>
          <button className='bg-indigo-500 rounded-lg p-1 text-white'>View all</button>
        </div>
      </div>
      <div className='grid grid-cols-5 md:grid-cols-4 gap-2 font-bold p-4 pl-9 w-[100%] pr-1 rounded-lg bg-indigo-500'>
        <div className=''>Name</div>
        <div className=''>Price</div>
        <div className=''>Payment</div>
        <div className='col-span-2 md:col-span-1 pl-14 md:pl-0'>Progress</div>
      </div>
      <div className=''>
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