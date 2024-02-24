import React from 'react'
import Howitworks from '../Components/Howitworks'
import Footer from '../Components/Footer'
import Secthree from '../Components/Secthree'
import Secthreehowitworks from '../Components/Secthreehowitworks'
import Changeimghiw from '../Components/Changeimghiw'

const Howitworksp = () => {
  return (
    <div className='pt-20'>
        <Howitworks />
        <Changeimghiw />
        <Secthreehowitworks />
        <Secthree />
        <Footer />
    </div>
  )
}

export default Howitworksp