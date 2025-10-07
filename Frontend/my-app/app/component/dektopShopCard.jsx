import men from '../assets/9da5ab42c0357746eb27e42fff6279478e2c8a48.jpg'
import men2 from '../assets/edfcad0dba1967435dad649ed91c2e00be5f640f.jpg'
import women from '../assets/b384eba608bd8616723a95d25fce7dcb8f25ba9d.jpg'
import women2 from '../assets/5077f785cbfd4a6cf9efad13d9b5d66b1b7cbf4f.jpg'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const DesktopShopCard=()=>{

    return(<>

<div className='bg-[#FAFAFA] w-full h-full lg:bg-[#FAFAFA] lg:w-full lg:h-[375px] '>

 <div className='flex flex-col justify-center items-center pt-6  lg:flex lg:flex-col lg:justify-center lg:items-center lg:pt-6'>

 <p className='font-semibold text-xl  '>EDITOR’S PICK</p>
  <p className='text-[#737373] text-sm text-center w- '>Problems trying to resolve the conflict between </p>
   </div>

<div className='bg-blue- flex flex-col items-center gap-4 pt-4  lg:flex-row lg:justify-center lg:gap-4 lg:pt-4'>
 

<Card className='w-56 h-80 md:w-60 md:h-64 lg:w-60 lg:h-64 '>    

<Image
src={men}
alt="Hero"
className='w-full h-full lg:w-full lg:h-full'
/>
</Card>



<Card className='w-56 h-80 md:w-32 md:h-64 lg:w-32 lg:h-64'>

<Image
src={women}
alt="Hero"
className='w-full h-full lg:w-full lg:h-full'
/>
</Card>



<div className='space-y-3 lg:space-y-2'>

<Card className='w-56 h-40 md:w-32 md:h-[125px] lg:w-32 lg:h-[125px]'>

<Image
src={women2}
alt="Hero"
className='w-full h-full lg:w-full lg:h-full'
/>
</Card>



<Card className='w-56 h-40 md:w-32 md:h-[123px] lg:w-32 lg:h-[123px]'>

<Image
src={men2}
alt="Hero"
className='w-full h-full lg:w-full lg:h-full'
/>
</Card>
</div>


</div>

</div>

    </>)
}
export default DesktopShopCard