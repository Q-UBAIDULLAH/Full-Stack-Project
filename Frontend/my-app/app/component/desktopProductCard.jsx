import men from '../assets/edfda1c222054dedce3ff32fe480d8fc8eb07474.jpg'
import men2 from '../assets/edfcad0dba1967435dad649ed91c2e00be5f640f.jpg'
import women from '../assets/4a6a10161217dc07ba1cda4632e93a5851162bcb.jpg'
import women2 from '../assets/5077f785cbfd4a6cf9efad13d9b5d66b1b7cbf4f.jpg'
import { Button } from "@/components/ui/button"
import {   ShoppingCart } from "lucide-react"
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const DesktopProductCard=()=>{

    return(<>
    <div className='flex  flex-col justify-center items-center mt-8 mb-6'>
<p>Featured Products</p>
 <p className=' font-extrabold '>BESTSELLER PRODUCTS</p>
  <p className='text-[#737373] text-sm   '>Problems trying to resolve the conflict between </p>
   </div>
  <div className="grid grid-cols-2  md:grid-cols-4 mx-auto justify-items-center   lg:w-7/12 bg-">
 
       <Card className="m-  border-none  lg:w-40 bg-violet-  lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={women} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={men} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={women2} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={men2} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={women2} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={women} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={men2} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>
       <Card className="m-  border-none  lg:w-40 bg-violet- lg:h-">
  <div >
   <CardHeader  className="relative p-0">
  
   <Image  className="w-full h-52 md:h-64 object-cover " src={men} alt="" />

   </CardHeader>
   
   
       
  <CardContent className='text-center space-y-1 mt-1  p-'> 
        <CardTitle className="text-center text-sm">Graphic Design</CardTitle> 
        {/* <CardTitle className="text-left  text-[#737373] lg:text-center w- text-xs">English Department</CardTitle>  */}

   {/* <h1 className='text-[#737373] text-left text-sm   '>English Department</h1> */}
   <h1><span className='text-[#BDBDBD]'>$212 </span><span className='text-[#23856D]'>$212</span></h1>
   <div className="flex justify-center gap-1">
  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
  <div className="w-3 h-3 rounded-full bg-red-500"></div>
  <div className="w-3 h-3 rounded-full bg-green-500"></div>
  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
</div>

   </CardContent>
    {/* <CardFooter className="flex justify-center mt-1 md:mt-3 ">
       <h1>English Department</h1>
  </CardFooter> */}
  </div>
      </Card>


</div>
    </>)
}
export default DesktopProductCard