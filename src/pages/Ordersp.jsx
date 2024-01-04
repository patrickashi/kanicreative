import React from 'react'
import SideBar from '../Components/SideBar'
import Orders from '../Components/Orders'

const Ordersp = () => {
  return (
    <div className='flex flex-row'>
        <SideBar />
        <div className='body_container'>
         <Orders />
        </div>
    </div>
  )
}

export default Ordersp