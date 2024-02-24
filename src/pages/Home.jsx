import React from 'react'
import Navbar from '../Components/Navbar'
import Secone from '../Components/Secone'
import Sectwo from '../Components/Sectwo'
import Secthree from '../Components/Secthree'
import Footer from '../Components/Footer'
import Changeimg from '../Components/Changeimg'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Changeimg />
        <Secone />
        <Sectwo />
        <Secthree />
        <Footer />
    </div>
  )
}

export default Home