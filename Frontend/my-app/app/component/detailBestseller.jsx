import men from '../assets/edfda1c222054dedce3ff32fe480d8fc8eb07474.jpg'
import men2 from '../assets/edfcad0dba1967435dad649ed91c2e00be5f640f.jpg'
import women from '../assets/4a6a10161217dc07ba1cda4632e93a5851162bcb.jpg'
import women2 from '../assets/5077f785cbfd4a6cf9efad13d9b5d66b1b7cbf4f.jpg'
import spoon from '../assets/0bfcbfefc49b63d0071c5ef94c3d4dde5f05172f.jpg'
import cup from '../assets/f454f9ee9a7979dac6cbd7699a260c7deacd7b13.jpg'
import spoon1 from '../assets/685f2d7c3cabc3250d9fd223e5b93cebd2761439.jpg'
import cup2 from '../assets/079b4c5d47938d7b09087b31f361063fb40f9a11.jpg'
import cup3 from '../assets/926bf1d65669af4e049e20ceb30aa6408b6a79f3.jpg'
import chair from '../assets/a93e41b42e460896a15fe5f82a56836939f30577.jpg'
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
const DetailBestseller=()=>{

    return(<>
    <div className='flex  flex-col justify-center items-center mt-8 mb-6'>
{/* <p>Featured Products</p> */}
 <p className=' font-extrabold '>BESTSELLER PRODUCTS</p>
  {/* <p className='text-[#737373] text-sm   '>Problems trying to resolve the conflict between </p> */}
   </div>
  <div className="grid grid-cols-1 gap-2 md:grid-cols-4  mx-auto justify-items-center   lg:w-9/12 bg-[#FAFAFA]">
 
       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={spoon} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-left gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-52 bg-white   lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={cup} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-52 h-52 md:h-64 object-cover " src={spoon1} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={chair} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>

       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-52 h-52 md:h-64 object-cover " src={cup3} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={chair} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={spoon} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-52 bg-white  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={cup} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-left space-y-1 mt-1  p-'> 
        <CardTitle className="text-left text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   <h1 className='text-[#737373] text-left text-sm   '>English Department</h1>
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   {/* <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div> */}

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
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
export default DetailBestseller