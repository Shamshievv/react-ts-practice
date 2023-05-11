import React, {useEffect, useState} from 'react';
import waveLine  from "../../Image/wave-line.svg"
import {AiFillStar} from "react-icons/ai";
import profile from "../../Image/profile-image.png"
import first from "../..//Image/logoIpsum.svg"
import second from "../..//Image/second-ipsum.svg"
import  third from "../../Image/third-ipsum.svg"
import last from "../../Image/last-ipsum.svg"
interface INum {
    num:number
}

const About = () => {


    return (
        <div className="pt-40">
          <div className="container">
              <div className="about flex justify-around">
                  <div>
                     <div className="flex text-blue-700">
                         <img src={waveLine} alt="img"/>
                         <span className="ml-3">About</span>
                     </div>
                     <div className="flex pt-32">
                         <AiFillStar className="fill-blue-600"/>
                         <AiFillStar className="fill-blue-600 ml-3" />
                         <AiFillStar className="fill-blue-600 ml-3" />
                         <AiFillStar className="fill-blue-600 ml-3" />
                         <AiFillStar className="fill-blue-600 ml-3" />
                     </div>
                      <p>Working with Alex was interesting. He <br/> went above and beyond what I've asking <br/> for and provided such an amazing design <br/> for my mobile application.</p>
                      <div className="flex items-center mt-3">
                          <img src={profile} alt="img"/>
                          <h4 className="ml-3" >Steve McQuillen <br/> <span>CEO @ Vencortex</span></h4>
                      </div>
                  </div>
                  <div>
                      <p className="text-5xl">Trusted by the fastest growing <br/> digital startups</p>
                      <div className="flex pt-10">
                        <h5 className="text-5xl text-blue-700 cursor-pointer ">7 + <br/>
                            <span className="text-2xl text-blue-950">Years of experience</span>
                        </h5>
                        <h5 className="text-5xl text-blue-700 ml-5">50 + <br/>
                            <span className="text-2xl text-blue-950">Years of experience</span>
                        </h5>
                        <h5 className="text-5xl text-blue-700 ml-5">30 + <br/>
                            <span className="text-2xl text-blue-950">Years of experience</span>
                        </h5>
                    </div>
                      <div className="flex mt-11 gap-5">
                          <img src={first} alt="img"/>
                          <img src={second} alt="img"/>
                          <img src={third} alt="img"/>
                          <img src={last} alt="img"/>
                      </div>
                  </div>

              </div>
          </div>
        </div>
    );
};

export default About;