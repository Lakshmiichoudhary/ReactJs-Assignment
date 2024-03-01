import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopBar = () => {

  const buttonsType = [
    "Tools","AWS Builder","Start Build","Build Supplies","BlueHosting"
  ]

  const hosting = [
    "Home","Hosting for all ","Hosting ","Hosting5 "
  ]

  return (
    <div>
        <h1 className='p-2 mt-3 mx-4 md:mx-60 text-xl md:text-4xl'>
            Best Website Builders in the US
        </h1>
        <div className='md:flex mx-4 justify-between md:mx-64 mt-3'>
          <div className='flex'>
            <CheckCircleOutlineIcon className='mr-2' />
            <p> Last Update - February 22, 2020</p>
            <ErrorOutlineIcon className='ml-6 mx-2' />
            <h1 className=''>Advertising Disclosure</h1>
          </div>
          <div className='flex mt-3 md:mt-0'>
            <h1>Top Relevant</h1>
            <KeyboardArrowDownIcon className='mx-2' />
          </div>
        </div>
        <div className='md:mx-64 mx-3 mt-3 md:mt-5 flex'>
          {buttonsType.map((button,id) => (
            <button className='md:mr-14 mr-3' key={id}>{button}</button>
          ))}
        </div>
        <div className='md:mx-64 mx-3 mt-4 flex'>
          {hosting.map((host,id) =>(
            <p className='md:mr-4 mr-1' key={id}>{host}{id !== hosting.length - 1 && " >"}</p>
          ))}
        </div>
    </div>
  )
}

export default TopBar
