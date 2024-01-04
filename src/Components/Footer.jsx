import React from "react"
import newmoon from "../assets/newmoon.png";

import logo1 from "../assets/logo1.jpg";

const Footer = () => {
    return ( 
        <div className="w-full bg-black py-16 pb-0 px-4 text-xl text-white font-Montserrat">
            <div className="lg:w-[800px] grid mx-auto">
                <div>
                    <img className="w-20 mx-auto py-2" src={logo1} alt="" />
                    <p className="text-center text-gray-300">
                        Kani creative is a design agency that helps
                        companies and businesses get a design solution
                    </p>
                </div>
                <div className="flex mx-auto gap-3 py-2">
                    <img className="w-4" src={newmoon} alt="/" />
                    <img className="w-4" src={newmoon} alt="/" />
                    <img className="w-4" src={newmoon} alt="/" />
                    <img className="w-4" src={newmoon} alt="/" /> 
                </div>
                
                <div>
                    <p className="text-center text-lg text-gray-200"> ©2023 Copyright Kani Creative</p>
                    <ul className="flex text-center justify-center text-lg text-gray-200 gap-2">
                        <li>Terms & Conditions |</li>
                        <li >Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;