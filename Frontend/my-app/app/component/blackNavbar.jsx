'use client'

import Link from "next/link";
import { useState } from "react";


import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

import { MdOutlineMail } from "react-icons/md";


const BlackNavbar=()=>{



    return(<>

<nav className="bg-[#0c0220] p-4">
<div className="flex justify-between">


<div className="flex justify-center items-center gap-5">

<div className="flex items-center gap-1"><IoCallOutline  fontSize={20}  color="white"/><p className="text-white  text-sm">(225) 555-0118</p>
</div>

<div className="flex items-center gap-1"><MdOutlineMail   fontSize={20}  color="white"/><p className="text-white text-sm">michelle.rivera@example.com</p>
</div>

</div>


<div><p className="text-white">Follow Us  and get a chance to win 80% off</p></div>

 



  

 <div className="flex space-x-6 ">



<p className="text-white ">Follow Us  :</p>
<div className="hidden md:block"><FaInstagram fontSize={20}  color="white"/> </div>
<div className="hidden md:block"><FaYoutube  fontSize={20}  color="white"/></div>
<div><FaFacebook  fontSize={20}  color="white"/></div>
<div><FaTwitter   fontSize={20}  color="white"/></div>


</div>

</div>


    </nav>

    </>)
}
export default BlackNavbar