'use client'
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

const LightNavbar=()=>{
return(<>
<nav className="bg-[#FFFFFF] p-4">
<div className="flex justify-between">


<div className="lg:flex  lg:justify-between lg:space-x-32 w-full lg:w-0">

<div><p className="font-bold lg:font-bold ">Bandage</p></div>


<ul className="  mt-8 lg:mt-0 text-center md:flex lg:flex lg:space-x-6  pl-24 lg:pl-0 space-y-4 lg:space-y-0">
           <li>
            <a href="/" className=" lg:text-black lg:hover:underline text-[#737373]">Home</a>
          </li>
           <li className="hidden md:block lg:flex">
            <a href="/" className="lg:text-black lg:hover:underline">Shop</a>
            <select className="lg:bg-[#FFFFFF]">
                 <option className=""></option>
         
            </select>
          </li>
           <li>
             <a href="/about" className="lg:text-black lg:hover:underline text-[#737373]">About</a>
           </li>
           <li>
             <a href="/services" className="hidden md:block lg:text-black lg:hover:underline">Blog</a>
           </li>
           <li>
             <a href="/services" className="lg:text-black lg:hover:underline text-[#737373]">Pages</a>
           </li>
           <li>
             <a href="/contact" className="lg:text-black lg:hover:underline text-[#737373]">Contact</a>      
          </li>
         </ul>

</div>



 



  

 <div className="lg:flex lg:space-x-6 flex space-x-4">


{/* <div className="hidden md:block "><CiUser fontSize={20}  color="white"/> </div> */}
<p className="hidden lg:flex lg:text-[#23A6F0]"><CiUser fontSize={20}  color="#23A6F0"/>Login / Register</p>
<div className=" md:block text-[#23A6F0]"><CiSearch fontSize={20} /> </div>
<div className=" md:block"><LuShoppingCart  fontSize={20}  color="#23A6F0"/></div>
<div className=""><CiHeart  fontSize={20}  color="#23A6F0"/></div>



</div>

</div>


    </nav>

</>)
}
export default LightNavbar