import React from 'react'
import '../Components/sidebar.css'
import  logo1  from '../assets/logo1.jpg'
import { Link } from 'react-router-dom'
import { MdEventAvailable, MdNoteAdd, MdOutlinePeopleOutline, MdSettings, MdSpaceDashboard } from 'react-icons/md';

const SideBar = () => {
  return (
    <div className='sidebar_container'>
        <div className='side_bar px-8 py-8 flex flex-col gap-9'>
            <Link to='/Dashhome' className='flex gap-2'>
                <MdSpaceDashboard className='w-20'/>
                <p>Dashboard</p>
            </Link>
            <Link to='/Tasksp' className='flex gap-2'>
                <MdNoteAdd className='w-20'/>
                <p>Create Task</p>
            </Link>
            <Link to='/Ordersp' className='flex gap-2'>
                <MdEventAvailable className='w-20'/>
                <p>Orders</p>
            </Link>
            <div className='flex gap-2'>
                <MdOutlinePeopleOutline className='w-20'/>
                <p>Team</p>
            </div>
            <div className='flex gap-2'>
                < MdSettings className='w-20'/>
                <p>Settings</p>
            </div>
            

        </div>
    </div>
  )
}

export default SideBar