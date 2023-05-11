import React, {useState} from 'react';
import waveLine from "../../Image/wave-line.svg"
import first from "../../Image/shop-laptop-image.png"
import phone from "../../Image/shop-phone-image.png"
import last  from "../../Image/shop-lastLapTop-image.png"
import {RxArrowRight} from "react-icons/rx";
interface IOpen{
    block:number
}
const Shop = () => {
    const [open,setOpen] = useState(false)
    function getOpen(){
        if (open === true)
        {
            return setOpen(false)
        } else{
            return  setOpen(true)
        }
    }



    return (
        <div className="pt-10">
            <div className="container">
                <div>

                 <p className="flex items-center justify-center gap-6 text-blue-700"><img src={waveLine} alt="img"/> Shop <img src={waveLine} alt="img"/></p>
                 <p className="text-center text-3xl">
                        In a rush? <br/>
                        Shop ready designs here.
                    </p>

                 <div className="flex justify-between items-center flex-wrap pt-10 ">

                     <div>
                         <img src={first} alt="img"/>
                         <p className="pt-3">Ergonomic Frozen Pants </p>
                         <h5>In et consequ</h5>
                     </div>
                     <div>
                         <img src={phone} alt="img"/>
                         <p className="pt-3">Handmade Fresh Bike </p>
                         <h5>Qui in facere</h5>
                     </div>
                     <div>
                         <img src={last} alt="img"/>
                         <p className="pt-3">Small Soft Pizza </p>
                         <h5>Aspernatur expli</h5>
                     </div>

                    <div className="flex justify-between items-center flex-wrap pt-10 gap-20" style={{
                        display:open === false ? "flex" : "none"
                    }}>
                        <div>
                            <img src={first} alt="img"/>
                            <p className="pt-3">Ergonomic Frozen Pants </p>
                            <h5>In et consequ</h5>
                        </div>
                        <div>
                            <img src={phone} alt="img"/>
                            <p className="pt-3">Handmade Fresh Bike </p>
                            <h5>Qui in facere</h5>
                        </div>
                        <div>
                            <img src={last} alt="img"/>
                            <p className="pt-3">Small Soft Pizza </p>
                            <h5>Aspernatur expli</h5>
                        </div>
                    </div>

                 </div>
                    <p onClick={() => getOpen()}  className="flex cursor-pointer text-blue-700 justify-center items-center pt-5">{open === true ? "View all projects >" : "close projects"}</p>

                </div>
            </div>
        </div>
    );
};

export default Shop;