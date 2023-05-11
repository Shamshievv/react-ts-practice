import React from 'react';
import waveLine from  "../../Image/wave-line.svg"

const Contact = () => {
    return (
        <div className="bg-[#010032]">
            <div className="container">
                <div className="pt-10">
                    <p className="text-white flex"><img src={waveLine} alt="img"/> <span className="ml-5">Contact</span></p>
                    <p className="text-[50.5px]  right-36 text-white relative   ">Have something in mind? <span className="ml-16">Let's connect.</span> <span className="ml-8">Have something</span></p>

                    <div className="flex gap-36 ml-11 text-white text-[17px] pt-10">

                        <p>alexsmith@example.com</p>

                        <p className="">
                            <span>Blog</span>
                            <br/>
                            <span>About</span>
                            <br/>
                            <span>Shop</span>
                            <br/>
                            <span>Blog</span>
                            <br/>
                            <span>Contact</span>

                        </p>
                        <p>
                            <span>Twitter</span>
                            <br/>
                            <span>LinkedIn</span>
                            <br/>
                            <span>Behance</span>
                            <br/>
                            <span>GitHub</span>
                            <br/>
                            <span>Dribbble</span>

                        </p>

                        <p>

                            Subscribe to my weekly newsletter
                            <br/>
                            <div className="flex mt-4">
                                <input type="text" className="h-[48px] rounded-[248px] bg-transparent border-b-2 border-t-2 "  />
                                <p className="bg-blue-900 w-[140px] ml-11 h-[48px] rounded-[24px]"></p>
                            </div>

                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;