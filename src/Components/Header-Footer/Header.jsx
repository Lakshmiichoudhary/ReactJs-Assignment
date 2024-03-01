import React from 'react'
import { src } from '../../Utils/Constants'

const Header = () => {
  return (
    <div className='md:flex md:p-4 bg-gray-800 text-white justify-center' >
        <div className='flex md:border-2 hover:border-blue-600 rounded-lg mx-16'>
            <img className='h-11 rounded-l-md mt-2 md:mt-0'
                src={src}
                alt='search' />
            <input className='focus:outline-none p-2 w-40 md:w-56 text-black rounded-r-md md:mt-0 mt-2' 
            type='text' />
        </div>
        <div className='flex p-2 cursor-pointer'>
        <h1 className='md:mx-6 mx-4 hover:underline'>Categories</h1>
        <h1 className='md:mx-6 mx-4 hover:underline'>Web Builder</h1>
        <h1 className='md:mx-6 mx-4 hover:underline'>Today's Deals</h1>
        </div>
    </div>
  )
}

export default Header
