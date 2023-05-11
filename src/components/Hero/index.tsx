import React from 'react';
import heroIMG from "../../Image/hero-image.png"
import {HiOutlineMail} from "react-icons/hi";
import heroSUB from "../../Image/hero-sub-image.png"
const Hero = () => {
    return (
        <div className="bg-blue-900">
          <div className="container">
              <div className="flex justify-around items-center">
                  <div className="hero-title">
                      <h4 className="text-7xl  text-amber-50 ">I design digital <br/> products that <br/> make an impact.</h4>
                      <p className="text-3xl text-blue-300 pt-6">Hi! I’m Alex, a product designer based in Oakland. I <br/> create user-friendly interfaces for fast-growing <br/> startups.</p>
                      <button className=" mt-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                           <span
                               className=" flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                                group-hover:bg-opacity-0">Hire me!<HiOutlineMail className="ml-2 mt-0.5"/>
                           </span>
                      </button>
                      <div className="flex items-center mt-20">
                          <img src={heroSUB} alt="img"/>
                          <h3 className="ml-3 text-amber-50">Independent Of The Year <br/> <span className="text-blue-950">Annual Awards 2020 • awwwards.com</span></h3>
                      </div>
                  </div>
                  <div>
                      <img src={heroIMG} alt="img"/>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Hero;