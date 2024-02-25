import React from 'react'
import webdesign1 from "../assets/webdesign1.jpg";
import webdesign2 from "../assets/webdesign2.jpg";

const About = () => {
  return (
    <div className='font-Montserrat'>
        <div>
            <h1 className='py-12 bg-black text-white text-center 2xl:text-6xl xl:text-6xl lg:text-5xl 
            md:text-4xl sm:text:3xl mobile:text-3xl '>ABOUT US!</h1>

            <div className='2xl:mx-16 xl:mx-16 lg:mx-16 my-16 text-lg mobile:mx-4 2xl:text-left xl:text-left
            lg:text-left md:text-left mobile:text-center'>
                <p>
                    We are a ream of creative professionals who are passionate about design and dedicated to
                    delivering exceptional results to our clients. Our agency was founded with the vision
                    of providing top-quality design services that help businesses and organizations achieve
                    thier goals and stand out in a crowded marketplace.
                </p>

                <p  className='my-12'>
                    At our agency, we believe that design is more than just aesthetics - it's About
                    creating effective communication and memorable experiences. Whether it's a logo,
                    a flyer, or a brand identity, our team works closely with our clients to understand
                    thier needs and goals and then develops customized solutions that are tailored to
                    their unique requirements.
                </p>

                <p>
                    Our team is made up of talented designers, strategists, and project managers who
                    bring a wealth of experience and expertise to every project. We pride ourselves
                    on our collaborative approach, and we work closely with our clients throughout the
                    design process to ensure that we are delivering the best possible outcomes.
                </p>
            </div>
        </div>

        <div className='w-full h-[500px]'>
            <img src={webdesign2} alt="img" size={20}  className='w-full h-full object-cover' />
        </div>

            <div className='2xl:mx-16 xl:mx-16 lg:mx-16 my-16 text-lg mobile:mx-4 2xl:text-left xl:text-left
                            lg:text-left md:text-left mobile:text-center'>
                <p>
                    We are a ream of creative professionals who are passionate about design and dedicated to
                    delivering exceptional results to our clients. Our agency was founded with the vision
                    of providing top-quality design services that help businesses and organizations achieve
                    thier goals and stand out in a crowded marketplace.
                </p>

                <p  className='my-12'>
                    At our agency, we believe that design is more than just aesthetics - it's About
                    creating effective communication and memorable experiences. Whether it's a logo,
                    a flyer, or a brand identity, our team works closely with our clients to understand
                    thier needs and goals and then develops customized solutions that are tailored to
                    their unique requirements.
                </p>

                <p>
                    Our team is made up of talented designers, strategists, and project managers who
                    bring a wealth of experience and expertise to every project. We pride ourselves
                    on our collaborative approach, and we work closely with our clients throughout the
                    design process to ensure that we are delivering the best possible outcomes.
                </p>
            </div>

            <div className='2xl:mx-16 xl:mx-16 lg:mx-16 my-16 py-12 text-lg mobile:mx-4 2xl:text-left xl:text-left
            lg:text-left md:text-left mobile:text-center border-t-2 broder-gray-600'>
                <h1 className='text-[#059669] text-2xl font-bold'>Our Vision</h1>
                <p>
                    Providing top-quality design services that help businesses and organizations achieve
                    their goals and stand out in a crowded marketplace.
                </p>

                <h1  className='mt-12 text-[#059669] text-2xl font-bold'>Our Mission </h1>
                <p className='mb-12'>
                    Our mission is to exceed our client's expectations by delivering high-quality,
                    customized designs that effectively capture their brand's essence and resonate with
                    their target audience.
                </p>
                    
                

                <h1 className='text-[#059669] text-2xl font-bold'>Our Values</h1>
                <p>
                    Creativity: We value creativity above all else. Our ability to think outside the box
                    and create unique, visually stunning designs is what sets them apart from the competition.
                </p>
            </div>



    </div>
  )
}

export default About