import React from 'react'
import Cardwrapper from './Cardwrapper'

const ShowCard = ({views,title,icon}) => {
  return (
    <Cardwrapper>
        <div className='max-w-xs mx-auto flex justify-between'>
            <div className='py-4 flex flex-col items-center group-hover:text-white'>
                <div className="text-4xl md:text-6xl font-bold p-4 text-indigo-600 group-hover:text-white">{views}</div>
                <div className='text-gray-400 md:text-2xl group-hover:text-white'>{title}</div>
            </div>
            <div className='text-gray-500 flex items-center group-hover:text-white'>
                {icon}
            </div>
        </div>
    </Cardwrapper>
  )
}

export default ShowCard