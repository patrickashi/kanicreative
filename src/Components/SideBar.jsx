import React from 'react'
import '../Components/sidebar.css'
import  logo1  from '../assets/logo1.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar_container'>
        <div className='side_bar px-8 py-8 flex flex-col gap-9'>
            <Link to='/Dashhome' className='flex gap-2'>
                <DashboardIcon className='w-20'/>
                <p>Dashboard</p>
            </Link>
            <Link to='/Tasksp' className='flex gap-2'>
                <NoteAddIcon className='w-20'/>
                <p>Create Task</p>
            </Link>
            <Link to='/Ordersp' className='flex gap-2'>
                <EventAvailableIcon className='w-20'/>
                <p>Orders</p>
            </Link>
            <div className='flex gap-2'>
                <PeopleOutlineIcon className='w-20'/>
                <p>Team</p>
            </div>
            <div className='flex gap-2'>
                < SettingsIcon className='w-20'/>
                <p>Settings</p>
            </div>
            

        </div>
    </div>
  )
}

export default SideBar