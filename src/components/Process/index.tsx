import React from 'react';
import waveLine from "../../Image/wave-line.svg"
import {IoIosArrowForward} from "react-icons/io";

const Process = () => {
    return (
        <div>
            <div className="container">
                <div className="process pt-16 ">
                    <p className="text-blue-700 flex"> <img src={waveLine} alt="img"/> <span className="ml-4">Process</span></p>
                    <div className="flex items-start justify-between w-11/12">
                        <h4 className="text-3xl ">Getting started <br/> is easy.</h4>
                        <p>I've developed a structure that saves <br/> time (and money) while making the <br/> most of our interactions.</p>
                    </div>
                    <div className="flex pt-16">
                        <div>

                            <h1>
                                <br/>
                                <h2 className="flex items-center justify-between w-56 text-blue-700">  <span className="text-3xl">[1]</span> <span className="flex">

                                    <IoIosArrowForward/>
                                    <IoIosArrowForward/>
                                    <IoIosArrowForward/>

                                </span></h2>
                                <br/>
                                Listen
                                <br/>
                                <br/>
                                <p>I get to know you and your company, your goals and <br/> expectations.</p>

                            </h1>


                        </div>
                        <div className="ml-36">

                            <h1>
                                <br/>
                                <h2 className="flex items-center justify-between w-56 text-blue-700">  <span className="text-3xl">[2]</span> <span className="flex">

                                    <IoIosArrowForward/>
                                    <IoIosArrowForward/>
                                    <IoIosArrowForward/>

                                </span></h2>
                                <br/>
                                Ideate
                                <br/>
                                <br/>
                                <p>I get to know you and your company, your goals and <br/> expectations.</p>

                            </h1>


                        </div>
                        <div className="ml-36">

                            <h1>
                                <br/>
                                <h2 className="flex items-center justify-between w-56 text-blue-700">  <span className="text-3xl">[3]</span></h2>
                                <br/>
                                Execute
                                <br/>
                                <br/>
                                <p>I work on the approved plan while keeping <br/> you in the loop until we have a finished <br/> project.</p>

                            </h1>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Process;