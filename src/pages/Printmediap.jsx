import React from 'react'
import Ourworknav from '../Components/Ourworknav'
import Printmedia from '../Components/Printmedia'
import Footer from '../Components/Footer'

const Printmediap = () => {
  return (
    <div className='w-full h-screen bg-yellow-emerald-100'>
        <div className=''>
            <Ourworknav />
            <Printmedia />
            <Footer />
        </div>
    </div>
  )
}

export default Printmediap