import React from 'react'
import Tasks from '../Components/Tasks'
import SideBar from '../Components/SideBar'

const Tasksp = () => {
  return (
    <div className='flex flex-row'>
        <SideBar />
        <Tasks />
    </div>
  )
}

export default Tasksp