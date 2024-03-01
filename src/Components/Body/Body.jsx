import React from 'react'
import TopBar from './TopBar'
import Products from './Products'
import MoreDeals from './MoreDeals'
import Login from './Login'

const Body = () => {
  return (
    <div>
      <TopBar />
      <Products />
      <MoreDeals />
      <Login />
    </div>
  )
}

export default Body
