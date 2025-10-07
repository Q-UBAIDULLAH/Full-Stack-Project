import Image from "next/image"
import hero from '../assets/0becd76fb529bdb1f9ac06ee979d8665aade6757.png'
const Hero=()=>{

    return(<>
    <section className="relative w-full h-[75vh] flex items-center justify-between bg-[#0fb1de] overflow-hidden  md:px-16">
  {/* Content Left */}
  <div className="z-10 flex-1  max-w-sm sm:max-w-md text-white ">
    <h1 className="text-center md:text-left text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
      NEW COLLECTION
    </h1>
    <p className="text-sm text-center md:text-left sm:text-base md:text-xl mb-6">
      We know how large objects will act, but things on a small scale.
    </p>
    <button className=" px-4 sm:px-6 py-2 sm:py-3 ml-4  md:ml-0 bg-[#2DC071] text-white font-semibold rounded-lg shadow-md hover:bg-[#28a45d] transition">
      SHOP NOW
    </button>
  </div>

  {/* Image Right */}
  <div className="flex-1 flex justify-center items-center ">
    <Image
      src={hero} // transparent PNG best
      alt="Hero Product"
      className=" w- sm:w-[220px] md:w-[350px] lg:w-[450px] md:h-[470px]  h-96 object-cover md:object-cover bg-slate-"
    />
  </div>
</section>


    </>)
}

export default Hero