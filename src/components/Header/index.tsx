import React from 'react';
import headerLogo from "../../Image/header-logo.svg"

const Header = () => {
    return (
        <div className="w-full">
                <div className="bg-blue-950 flex justify-around items-center pt-5 pb-5" >
                    <img src={headerLogo} alt="img"/>
                    <a className="text-amber-50 text-xl"  href="#">Work</a>
                    <a className="text-amber-50 text-xl"  href="#">About</a>
                    <a className="text-amber-50 text-xl"  href="#">Shop</a>
                    <a className="text-amber-50 text-xl"  href="#">Blog</a>
                    <a  className="text-amber-50 text-xl" href="#">Contact</a>
                    <div className="flex ">
                        <a  className="text-amber-50 text-xl" href="#">Cart (0)</a>
                        <span className="pl-3">
                        <div className="w-8 h-1 bg-amber-50 my-2"></div>
                        <div className="w-8 h-1 bg-amber-50 "></div>
                    </span>
                    </div>

                </div>

        </div>
    );
};

export default Header;