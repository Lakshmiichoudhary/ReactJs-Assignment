import React from 'react'
import { src } from '../../Utils/Constants'

const Header = () => {
  return (
    <div className='flex p-4 bg-gray-800 text-white justify-center' >
        <div className='flex border-2 hover:border-blue-600 rounded-lg'>
            <img className='h-11 rounded-l-md'
                src={src}
                alt='search' />
            <input className='focus:outline-none p-2 w-56 text-black rounded-r-md' 
            type='text' />
        </div>
        <div className='flex p-2 cursor-pointer'>
        <h1 className='mx-6'>Categories</h1>
        <h1 className='mx-6'>Web Builder</h1>
        <h1 className='mx-6'>Today's Deals</h1>
        </div>
    </div>
  )
}

export default Header
