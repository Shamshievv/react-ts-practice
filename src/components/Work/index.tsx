import React from 'react';
import waveLine from "../../Image/wave-line.svg"
import first from "../..//Image/work-first-image.png"
import second from "../..//Image/work-second-image.png"
import third from "../..//Image/work-third-image.png"
import fourth from "../..//Image/work-fourth-image.png"
import last from "../..//Image/work-last-image.png"
import {FiArrowUpRight} from "react-icons/fi";
const Work = () => {
    return (
        <div>
          <div className="container">
              <div className="work pt-20 pb-16">
                  <div className="flex">
                      <img src={waveLine} alt="img"/>
                      <span className="text-blue-700 ml-5">Work</span>
                  </div>
                  <h5 className="text-3xl pb-16 pt-6">Bringing stellar results <br/> for every client.</h5>
                  <div className="flex xl:gap-24">
                      <div>
                          <img src={first} alt="img"/>
                          <h6 className="mt-4 flex text-2xl">Maize Website Design <span className="sm:ml-64"><FiArrowUpRight/></span></h6>
                          <p className="text-1xs">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet.<br/> Nulla  facilisi.</p>
                      </div>

                      <div>
                          <img src={second} alt="img"/>
                          <h6 className="mt-4 flex text-3xl">Maize Website Design <span className="sm:ml-64"><FiArrowUpRight/></span></h6>
                          <p className="text-1xs">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. <br/> Nulla facilisi..</p>
                      </div>
                  </div>
                  <div className="flex items-center justify-center pt-20 xl:ml-16">
                      <div>
                          <img src={third} alt="img"/>
                          <h6 className="mt-4 flex text-4xl">Joggr Website Design <span className="sm:ml-64"><FiArrowUpRight/></span></h6>
                          <p className="text-1xs">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet.<br/> Nulla  facilisi.</p>
                      </div>

                  </div>
                  <div className="flex xl:gap-24 pt-10">
                      <div>
                          <img src={fourth} alt="img"/>
                          <h6 className="mt-4 flex text-2xl">Maize Website Design <span className="sm:ml-64"><FiArrowUpRight/></span></h6>
                          <p className="text-1xs">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet.<br/> Nulla  facilisi.</p>
                      </div>

                      <div>
                          <img src={last} alt="img"/>
                          <h6 className="mt-4 flex text-2xl">Maize Website Design <span className="sm:ml-64"><FiArrowUpRight/></span></h6>
                          <p className="text-1xs">Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. <br/> Nulla facilisi..</p>

                          <div className="w-32 h-36 bg-[#4543E8] cursor-pointer mt-14">
                             <h3 className="text-center pt-10 text-white cursor-pointer"> view all <br/> projects</h3>
                          </div>
                      </div>
                  </div>

              </div>


          </div>
        </div>
    );
};

export default Work;