import Image from "next/image"
import hero from '../assets/c7a19f43aa4437b65bb40c3e3edb92e61a4d6184.png'
const Hero2=()=>{
return(<>

<section className="relative w-full h-auto  md:h-[75vh] flex flex-col md:flex-row items-center bg-[#23856D] overflow-hidden">
  {/* Content */}
  <div className="relative z-10 text-white px-6 py-10 max-w-lg md:ml-16 flex-1 bg-slate- ">
    <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center md:text-start">
      Vita Classic Product
    </h1>
    <p className=" text-center md:text-xl mb-6 md:text-justify">
We know how large objects 
will act, but things on a 
small scale.
    </p>

    <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:justify-start md:flex md:items-center  md:gap-6 bg-slate-">
      <p className="text-white text-lg font-semibold">$15.99</p>
      <button className="px-6 py-2 bg-[#2DC071] text-white font-semibold rounded-lg shadow-md hover:bg-[#28a45d] transition">
        SHOP NOW
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="flex-1 w-full h-[300px] md:h-full flex justify-center items-center  bg-slate-">
    <Image
      src={hero} // apni image ka path daalo
      alt="Hero Product"
      className="h-96 w-96 lg:h-full md:w-auto "
    />
  </div>
</section>

</>)
}
export default Hero2
// 0fb1de