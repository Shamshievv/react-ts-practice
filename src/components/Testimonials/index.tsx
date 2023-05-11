import React, {useState} from 'react';
import waveLine from "../../Image/wave-line.svg"
import {AiFillStar} from "react-icons/ai";
import user from "../../Image/profile-image.png"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";

const Testimonials = () => {


    return (
        <div className="bg-[#D8D8EB] pb-20">
            <div className="container">
                <div className="testimonials pt-10 bg-[#D8D8EB]">
                   <div className="text-center">
                       <p className="flex items-center justify-center gap-5 text-[#4543E8] text-xl"><img src={waveLine} alt="img"/>Testimonials <img src={waveLine} alt="img"/></p>
                       <span className="text-4xl mt-3">Hear it directly from <br/> my clients.</span>
                   </div>
                    <div className="flex gap-28 pt-10 items-center justify-center">
                        <div className="w-1/3 h-64 bg-white pt-5 rounded-md ">
                            <span className="flex ml-4">
                            <AiFillStar className="text-yellow-500"/>
                            <AiFillStar className="text-yellow-500 ml-2"/>
                            <AiFillStar className="text-yellow-500 ml-2"/>
                            <AiFillStar className="text-yellow-500 ml-2"/>
                            <AiFillStar className="text-yellow-500 ml-2"/></span>
                            <h2 className="pt-3 pb-3 ml-4">Highly professional</h2>
                            <p className="ml-4">Alex was in control throughout the project. They <br/> delivered on the promised deadlines and we love the <br/> work they did!</p>
                            <div className="flex pt-3 items-center ml-4">
                                <img src={user} alt="img"/>
                                <h3 className="ml-4">
                                    Steve McQuillen <br/>
                                    <span>Marketing Manager, Vowels</span>
                                </h3>
                            </div>
                        </div>
                        <div className="w-1/3 h-64 bg-white pt-5 rounded-md">
                            <span className="flex ml-4">
                            <AiFillStar className="text-yellow-500"/>
                            <AiFillStar className="text-yellow-500 ml-2"/>
                            <AiFillStar className="text-yellow-500 ml-2"/>
                            <AiFillStar className="text-yellow-500 ml-2"/>
                            <AiFillStar className="text-yellow-500 ml-2"/></span>
                            <h2 className="pt-3 pb-3 ml-4">Highly professional</h2>
                            <p className="ml-4">Alex was in control throughout the project. They <br/> delivered on the promised deadlines and we love the <br/> work they did!</p>
                            <div className="flex pt-3 items-center ml-4">
                                <img src={user} alt="img"/>
                                <h3 className="ml-4">
                                    Steve McQuillen <br/>
                                    <span>Marketing Manager, Vowels</span>
                                </h3>
                            </div>
                        </div>



                    </div>
                    <div className="flex items-center justify-center pt-16">
                        <BsArrowLeft className="text-blue-700 text-2xl"/>
                        <BsArrowRight className="ml-5 text-blue-700 text-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;