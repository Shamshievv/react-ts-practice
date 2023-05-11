import React from 'react';
import waveLine from  "../../Image/wave-line.svg"
import {RxArrowRight} from "react-icons/rx";
import first from "../../Image/blog-first-image.png"
import second from "../../Image/blog-second-image.png"
import last from "../../Image/blog-last-image.png"

const Blog = () => {
    return (
        <div className="pt-10 pb-16">
            <div className="container">
                <div className="blog">
                   <p className="text-blue-700 flex"><img src={waveLine} alt="img"/> <span className="ml-3">Blog</span></p>
                    <div className="flex items-center justify-between">
                        <p className="text-4xl">Words On Design, Tech <br/> & Other Things I Love</p>
                        <button type="button"
                                className="text-blue-700 flex  items-center hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Explore all posts <span className="ml-3 text-blue-950"><RxArrowRight/></span>
                        </button>

                    </div>

                    <div className="pt-5 ">

                        <div className="flex border-b-blue-800 border-b-2 mt-10 pb-10 ">
                            <img src={first} alt="img"/>
                            <h1 className="ml-10">

                                <span className="text-blue-700 flex justify-between">Design • 6 Oct, 2021 <span className="flex items-center ml-96 border-b-blue-500 border-b-2 ">View post <RxArrowRight className="ml-5 "/></span></span>

                                <br/>
                                On our obsession with circles
                                <br/>
                                <br/>
                                <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla <br/> facilisi.</p>

                            </h1>
                        </div>
                        <div className="flex border-b-blue-800 border-b-2 mt-10 pb-10">
                            <img src={second} alt="img"/>
                            <h1 className="ml-10">

                                <span className="text-blue-700 flex justify-between">Design • 6 Oct, 2021 <span className="flex items-center ml-96 border-b-blue-500 border-b-2 ">View post <RxArrowRight className="ml-5 "/></span></span>

                                <br/>
                                On our obsession with circles
                                <br/>
                                <br/>
                                <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla <br/> facilisi.</p>

                            </h1>
                        </div>
                        <div className="flex border-b-blue-800 border-b-2 mt-10 pb-10">
                            <img src={last} alt="img"/>
                            <h1 className="ml-10">

                                <span className="text-blue-700 flex justify-between">Design • 6 Oct, 2021 <span className="flex items-center ml-96 border-b-blue-500 border-b-2 ">View post <RxArrowRight className="ml-5 "/></span></span>

                                <br/>
                                On our obsession with circles
                                <br/>
                                <br/>
                                <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla <br/> facilisi.</p>

                            </h1>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;