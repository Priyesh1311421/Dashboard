import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-around p-4 items-center'>
        <div>
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <span className="absolute left-3">
                    <Search size={18}/>
                </span>
                <input
                    type="text"
                    className="pl-10 pr-4 py-2 w-auto border-2 rounded-[25px] focus:outline-none focus:border-blue-500"
                    placeholder="Search"
                />
            </div>
        </div>
        <div className=''>
            <img 
            className='h-10 w-auto rounded-full '
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s' />
        </div>
    </div>
  )
}

export default Header