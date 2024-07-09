import React from 'react'

const Cardwrapper = ({children}) => {
  return (
    <div className='group w-auto px-4 rounded-lg py-4 border hover:bg-indigo-500 hover:text-white'>
        {children}
    </div>
  )
}

export default Cardwrapper