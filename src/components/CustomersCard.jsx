import React from 'react'
import Cardwrapper from './Cardwrapper'
const items = [{ img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s',name:'Emly Watson',country:'Austrelia'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s',name:'Emly Watson',country:'Austrelia'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s',name:'Emly Watson',country:'Austrelia'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s',name:'Emly Watson',country:'Austrelia'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s',name:'Emly Watson',country:'Austrelia'},
]
const CustomersCardItem = ({img,name,country}) => {
  return (
    
        <div className='flex mt-6 pl-8'>
            <div>
                <img src={img} className='h-14 w-auto rounded-full mr-2 group-hover:text-white'/>
            </div>
            <div>
                <h3 className='font-bold group-hover:text-white'>
                    {name}
                </h3>
                <p className='group-hover:text-white'>
                    {country}
                </p>
            </div>
        </div>
    
  )
}

const CustomersCard = () =>{
    return (
        <>
        <div className='flex flex-col w-auto mt-4'>
            <div className='text-2xl font-bold text-indigo-500'>
             Recent Customers
            </div>
            {items.map((item) => (
                <CustomersCardItem

                    name={item.name}
                    country = {item.country}
                    img = {item.img}
                />
            ))}
        </div>
        </>
    )
}

export default CustomersCard