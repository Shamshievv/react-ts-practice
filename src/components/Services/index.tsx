import React from 'react';
import waveLine from "../../Image/wave-line.svg"
import vector from "../../Image/services-vector-cicle.svg"
import  light from  "../../Image/services-light.svg"
import  third from "../../Image/services-third-image.svg"
import row from "../../Image/services-row-image.svg"
import line from "../../Image/services-line-big.svg"

const Services = () => {
    return (
        <div className="bg-[#010032]">
            <div className="container">
                <div className="services pt-10 pb-16">
                    <p className="flex"><img src={waveLine} alt="img"/> <span className="ml-6 text-white">services</span></p>
                    <div className="flex justify-between  items-start flex-wrap ">
                        <p className="text-5xl text-white pt-3">Pushing the <br/> boundaries of <br/> your potential</p>

                        <div className="w-960 ml-24 ">
                            <img src={vector}  alt="img"/>
                            <h3 className="text-white">
                                <br/>
                                Branding
                                <br/>
                                <br/>
                                <span className="text-white">Refresh your logo, revamp your <br/> website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</span>
                            </h3>
                        </div>
                        <div className="w-96 ml-2 ">
                            <img src={light}  alt="img"/>
                            <h3 className="text-white">
                                <br/>
                                Packaging
                                <br/>
                                <br/>
                                <span className="text-white">Refresh your logo, revamp your <br/> website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</span>
                            </h3>
                        </div>
                        <div className="w-96 ml-32 pt-10 ">
                            <img src={third}  alt="img"/>
                            <h3 className="text-white">
                                <br/>
                                Memorabilia
                                <br/>
                                <br/>
                                <span className="text-white">Refresh your logo, revamp your <br/> website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</span>
                            </h3>
                        </div>
                        <div className="w-5/12 pt-10">
                            <img src={row}  alt="img"/>
                            <h3 className="text-white">
                                <br/>
                                Visual Aids
                                <br/>
                                <br/>
                                <span className="text-white">Refresh your logo, revamp your <br/> website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</span>
                            </h3>
                        </div>
                        <div className="pt-36 mr-9">
                            <button className="w-56  h-10  bg-amber-50">Start a project</button>
                            <div className="mt-12 ml-20">
                                <img src={line} alt="img"/>
                                <img className="ml-24 pt-3" src={waveLine} alt="img"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;