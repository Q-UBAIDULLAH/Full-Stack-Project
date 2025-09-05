import Image from "next/image"
import hero from '../assets/96c86912d491d421800e62998b9af7c838cc25d1.jpg'
const Hero=()=>{

    return(<>
    <section className=" relative  w-full h-[75vh] flex  justify-start items-center bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero} // replace with your image
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-right-bottom"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute  bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 left-16 text-white px-6 max-w-2xl bg-slate-">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg- text-start">
          NEW COLLECTION 2025
        </h1>
        <p className="text-lg md:text-xl mb-6 w-96 text-justify">
        We know how large objects will act, 
but things on a small scale.
        </p>
        <button className="text-left px-6 py-3 bg-[#2DC071] text-[#FFFFFF] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          SHOP NOW
        </button>
      </div>
    </section>
    </>)
}

export default Hero