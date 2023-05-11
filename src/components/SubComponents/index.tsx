import React from 'react';
import {RxArrowRight} from "react-icons/rx";
import workBg from "../../Image/work-bg.png"
import h from "../../Image/work-bg.png"

const SubComponents = () => {

    return (
        <div>
            <div className=" flex">
                <div className="h-[420px] w-[720px]" style={{
                    backgroundImage:`url("${h}")`
                }}>
                   <p className="flex flex-col items-center justify-center pt-20">
                       <span className="text-[24px] text-white flex items-center justify-center">Work</span>
                       <br/>
                       <br/>
                       <span className="text-[14px] text-white">Favorite projects, award-winning campaigns and more.</span>
                       <br/>
                       <br/>
                       <span className="flex items-center text-white">View all<span className="ml-5"><RxArrowRight/></span></span>

                   </p>
                </div>

                <div className="bg-[#4543E8] w-[820px] ">
                    <p className="flex flex-col items-center justify-center pt-20">
                        <span className="text-[24px] text-white">About</span>
                        <br/>
                        <br/>
                        <span className="text-[14px] text-white">My journey, career highlights and everything else you need to <br/> know.</span>
                        <br/>
                        <br/>
                        <span className="flex items-center text-white">Get to know me <span className="ml-5"><RxArrowRight/></span></span>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubComponents;