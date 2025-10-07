import men from '../assets/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing.jpg'
import men2 from '../assets/2650d8d792d83e3292df63340b2a44fd9763c159.jpg'
import men3 from '../assets/0a05d6ce0fd1eeff9355b162a7e7c01605dd3c55.jpg'
import women from '../assets/6e722a25b740dd4eea5b5580d5e1601a818f98c2.jpg'
import women2 from '../assets/c9a64276a14f623312021f83a598c945b5165068.jpg'
import { Button } from "@/components/ui/button"
import {   ShoppingCart } from "lucide-react"
import { FaHooli } from "react-icons/fa";
import { LiaLyft } from "react-icons/lia";
import { GiFallingLeaf } from "react-icons/gi";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const ProductListPage=()=>{

    return(<>
    <div className='flex flex-col items-center md:flex md:flex-row   w-full  md:gap-96 md:w-full md:justify-around   md:items-center mt-8 mb-6 bg-slate-200 '>
{/* <p>Featured Products</p> */}
 <p className=' font-extrabold '>Shop</p>
  <p className='text-[#737373] text-sm   '>Home-shop </p>
   </div>
  <div className="grid grid-cols-1   md:grid-cols-5 mx-auto justify-items-center bg-slate-    lg:w-9/12 bg-">
 
      
       
       <Card className="m-  border-none  lg:w-44 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-48 object-cover " src={women2} alt="" />
    <div className="absolute -top-1.5 inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-lg font-bold">
      <p>Cloths</p>
      <p className="text-sm">Item 5</p>
    </div>
   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
  

   </CardContent>

  </div>
      </Card>
       <Card className="m-  border-none  lg:w-44 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-48 object-cover " src={men3} alt="" />
    <div className="absolute -top-1.5 inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-lg font-bold">
      <p>Cloths</p>
      <p className="text-sm">Item 5</p>
    </div>
   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
  

   </CardContent>

  </div>
      </Card>
      
    
       <Card className="m-  border-none  lg:w-44 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-48 object-cover " src={women} alt="" />

    <div className="absolute -top-1.5 inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-lg font-bold">
      <p>Cloths</p>
      <p className="text-sm">Item 5</p>
    </div>
   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
   

   </CardContent>

  </div>
      </Card>
       <Card className="m-  border-none  lg:w-44 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-48 object-cover " src={men2} alt="" />
    <div className="absolute -top-1.5 inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-lg font-bold">
      <p>Cloths</p>
      <p className="text-sm">Item 5</p>
    </div>
   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
    

   </CardContent>

  </div>
      </Card>
       <Card className="m-  border-none  lg:w-44 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-48 object-cover " src={men3} alt="" />
    <div className="absolute -top-1.5 inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-lg font-bold">
      <p>Cloths</p>
      <p className="text-sm">Item 5</p>
    </div>
   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
    

   </CardContent>

  </div>
      </Card>
    


</div>
   <section className="bg-[#FAFAFA] py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* <h2 className="text-3xl font-bold text-gray-800">
          Big Companies Are Here
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p> */}

        {/* Logos */}
        <div className="mt-10 flex flex-col md:flex-row flex-wrap  justify-center items-center gap-5 md:gap-16">
<FaHooli color='#737373' fontSize={60} className="size-24 md:size-16"/>
<LiaLyft color='#737373' fontSize={60}  className="size-24 md:size-16"/>
<GiFallingLeaf color='#737373' fontSize={60}  className="size-24 md:size-16"/>
<FaStripe color='#737373' fontSize={60}  className="size-24 md:size-16"/>
<FaAws color='#737373' fontSize={60}  className="size-24 md:size-16"/>
<SlSocialReddit color='#737373' fontSize={60}  className="size-24 md:size-16"/>

          {/* <img src="https://www.svgrepo.com/show/333504/aws.svg" alt="Hooli" className="w-24 opacity-70 hover:opacity-100 transition " />
          <img src="https://www.svgrepo.com/show/314168/hooli.svg" alt="Lyft" className="w-20 opacity-70 hover:opacity-100 transition" />
          <img src="https://img.freepik.com/premium-vector/leaf-vector-icon-leaves-icon_564974-1324.jpg" alt="Leaf" className=" w-20 opacity-70 hover:opacity-100 transition" />
          <img src="https://www.openbanking.org.uk/wp-content/uploads/Stripe_Logo_revised_2016.png" alt="Stripe" className="w-24 opacity-70 hover:opacity-100 transition" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHzppW3VyWFDE35ZarfGKBZE6MdPrE0lPpQ&s" alt="AWS" className="w-20 opacity-70 hover:opacity-100 transition" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCqqbGLbf_8uSpAOi9QxLLpCmj2XVRueFbkTFoTBlHklcCp7jNGCfodjQEUuTEcaJR0M&usqp=CAU" alt="Reddit" className="w-20 opacity-70 hover:opacity-100 transition" /> */}
        </div>
      </div>
    </section>
    </>)
}
export default ProductListPage