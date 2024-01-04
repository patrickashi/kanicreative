import React from 'react'
import SideBar from '../Components/SideBar'
import Ordernav from '../Components/Ordernav'
import Orders from '../Components/Orders'
import Specialoffer from '../Components/Specialoffer'

const Dashhome = () => {
  return (
    <div className='flex flex-row'>
        <SideBar />
        <Specialoffer />
        
    </div>
  )
}

export default Dashhome