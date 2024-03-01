import React from 'react'

const Login = () => {
  return (
    <div className='p-2 md:mt-7 md:flex justify-center'>
        <h1 className='p-2 text-2xl md:text-3xl md:w-96'>
            Sign up and get exclusive special deals
        </h1>
        <div className='p-2 mt-3 md:ml-11 flex'>
           <input className='p-3 md:w-60 focus:outline-none rounded-l-md border-2 hover:border-blue-600' 
                type='text' />
           <button className='p-3 bg-blue-500 rounded-r-md text-white'>Sign up</button>
        </div>
    </div>
  )
}

export default Login
