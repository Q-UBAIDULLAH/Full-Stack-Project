import Image from "next/image"
import hero from '../assets/5f8ce73d1a41b674cbd12f927c7ea9a6ca0ce76c.png'
const Hero3=()=>{
return(<>
<section className="relative w-full h-auto md:h-[75vh] flex flex-col md:flex-row items-center bg-[white] overflow-hidden">


 

    {/* Content */}
  <div className="relative z-10 text-white px-6 py-10 max-w-lg md:ml-16 flex-1">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-start text-black">
    Part of the Neural 
Universe
    </h1>
    <p className="text-base md:text-xl mb-6 text-justify text-black">
      We know how large objects will act, but things on a small scale.
    </p>

    <div className="flex items-center gap-6">
  
      <button className="md:px-6 md:py-2 px-4 py-2 bg-[#2DC071] text-white font-semibold rounded-lg shadow-md hover:bg-[#28a45d] transition">
        BUY NOW
      </button>
      <button className="md:px-6 md:py-2 px-3 py-2 border  font-semibold rounded-lg shadow-md text-[#2DC071] transition">
    READ MORE
      </button>
    </div>
  </div>

   {/* Image */}
  <div className="flex-1 -mt-9 md:-mt-0 h-[300px] md:h-full flex justify-center items-center ">
    <Image
      src={hero} // apni image ka path daalo
      alt="Hero Product"
      className="h-  lg:h-full w-auto object-"
    />
  </div>
</section>
</>)

}
export default Hero3