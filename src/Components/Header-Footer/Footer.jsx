import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
    return (
        <footer className='bg-black text-white flex justify-center cursor-pointer'>  
          <div className='p-2 m-4 md:mx-10'>
            <h3 className='font-bold'>Categories</h3>
            <ul>
              <li className='mt-2  hover:underline'>Web Builder</li>
              <li className='mt-2  hover:underline'>Hosting</li>
              <li className='mt-2  hover:underline'>Data center</li>
              <li className='mt-2  hover:underline'>Robotic-Automation</li>
            </ul>
          </div>
          <div className='p-2 m-4 md:mx-10'>
            <h3 className='font-bold'>Contact</h3>
            <ul>
              <li  className='mt-2  hover:underline'>Contact</li> 
              <li  className='mt-2 hover:underline'>Privacy Policy</li>
              <li  className='mt-2  hover:underline'>Terms Of Service</li>
              <li  className='mt-2  hover:underline'>Categories</li>
              <li  className='mt-2  hover:underline'>About</li>
            </ul>
          </div>
          <div className='md:p-2 md:m-4 mt-20'>
            <h1  className='mt-2  hover:underline'>United States <KeyboardArrowDownIcon /></h1>
          </div>
        </footer>
      );
    };
export default Footer
