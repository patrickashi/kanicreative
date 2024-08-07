import React, { useState, useEffect } from 'react';
import utech from "../assets/utech.png";
import yantex from "../assets/yantex.png";

const Changeimg = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [utech, yantex];

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentImageIndex( (prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);

    }, [images.length]);


  return (
    <div className=' flex justify-center items-center w-full h-[400px]'>
        <img src={images[currentImageIndex]} alt="img" className='w-full h-[400px] object-cover object-center 2xl:object-left' />
    </div>

          // <div className='relative'>
          //   {images.map((image, index) => (
          //       <img
          //           key={index}
          //           src={image}
          //           alt="img"
          //           className={`w-full h-[500px] object-cover object-center absolute top-0 left-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          //           style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
          //       />
          //   ))}
          //   <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          //       {images.map((_, index) => (
          //           <span
          //               key={index}
          //               className={`w-4 h-4 bg-gray-400 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-gray-700' : ''}`}
          //               onClick={() => setCurrentImageIndex(index)}
          //           ></span>
          //       ))}
          //   </div>
          // </div>
  )
}

export default Changeimg