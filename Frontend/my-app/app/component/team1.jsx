import Image from "next/image";
import teamimage from '../assets/5c2a4592b5f3cb754566bde7b62ef5da4222383b.jpg'
import teamimage2 from '../assets/4ead0629924f04ede9b2a5224dec41b501dbaa4c.jpg'
import teamimage3 from '../assets/12516b52a12de21bbd956c34ab16e5b1e48eeefe.jpg'
import Redimage from '../assets/fashionable-smiling-girl-playing-with-her-red-skirt.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import team from '../assets/0a05d6ce0fd1eeff9355b162a7e7c01605dd3c55.jpg'
import team2 from '../assets/young-girl-with-hands-front-her-beige-shirt-jeans-looking-charming-front-view.jpg'
import team3 from '../assets/24a6b8d9efd1b9c2401fb0702dc41f18a42ed89c.jpg'

const TeamSection = () => {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-16 ">
      {/* Top Text Section */}
      <div className="text-center mb-10">
        <p className="uppercase text-sm text-gray-500 tracking-wide">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Innovation tailored for you
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          <span className="font-semibold text-black">Home</span> &gt; Team
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="md:flex md:justify-center md:items-center grid grid-cols-1 md:flex-cols-3 gap-2 ">
        {/* Left Large Image */}
        <div className="md:col-span-1 ">
          <Image
            src={Redimage}
            alt="Main Model"
         
            className="w-full h-96 object-cover  rounded- shadow-md"
          />
        </div>

        {/* Right Grid of 4 Images */}
        <div className="md:col-span- grid grid-cols-2 gap-1 ">
          <Image
            src={teamimage}
            alt="Model 1"
            className="w-52 h-48 object-cover rounded- shadow-sm"
          />
          <Image
            src={teamimage2}
            alt="Model 2"
    
            className="w-52 h-48 object-cover rounded- shadow-sm"
          />
          <Image
            src={teamimage3}
            alt="Model 3"
      
            className="w-52 h-48 object-cover rounded- shadow-sm"
          />
          <Image
            src={teamimage}
            alt="Model 4"
         
            className="w-52 h-48 object-cover rounded- shadow-sm"
          />
        </div>
      </div>
    </section>


<section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-10">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Username",
              role: "Profession",
              img: team,
            },
            {
              name: "Username",
              role: "Profession",
              img: team2,
            },
            {
              name: "Username",
              role: "Profession",
              img: team3,
            },
               {
              name: "Username",
              role: "Profession",
              img: team2,
            },
                {
              name: "Username",
              role: "Profession",
              img: team3,
            },
                {
              name: "Username",
              role: "Profession",
              img: team,
            },
                   {
              name: "Username",
              role: "Profession",
              img: team3,
            },
                   {
              name: "Username",
              role: "Profession",
              img: team,
            },
                  {
              name: "Username",
              role: "Profession",
              img: team3,
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white w-  shadow-lg rounded- p- flex flex-col   items-center "
            >
              <Image
                src={member.img}
                alt={member.name}
                className="w- h- rounded- mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex gap-4 mt-4 text-blue-600">
                <FaFacebookF className="cursor-pointer hover:text-blue-800" />
                <FaTwitter className="cursor-pointer hover:text-blue-400" />
                <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          ))}
        </div>
      </section>
<section className="bg-white py-16 text-center">
  {/* Top Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Start your 14 days free trial
  </h2>

  {/* Description */}
  <p className="mt-4 text-gray-500 max-w-md mx-auto">
    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
  </p>

  {/* Button */}
  <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
    Try it free now
  </button>

  {/* Social Icons */}
  <div className="flex justify-center gap-6 mt-8">
    <a href="#" className="text-blue-800 hover:scale-110 transition">
        <FaFacebookF className="cursor-pointer hover:text-blue-800" />
    </a>
    <a href="#" className="text-blue-400 hover:scale-110 transition">
     <FaTwitter className="cursor-pointer hover:text-blue-400" />
    </a>
    <a href="#" className="text-blue-600 hover:scale-110 transition">
         <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
    </a>
    <a href="#" className="text-black hover:scale-110 transition">
        <FaInstagram className="cursor-pointer hover:text-blue-800" />
    </a>
  </div>

  {/* Footer */}
  <footer className="mt-16   pt-6 flex flex-col md:flex-row justify-start items-start md:justify-between px-6 text-gray-700 text-sm">
    <p className="font-semibold">Bandage</p>
    <div className="flex gap-4 mt-4 md:mt-0">
      <a href="#" className="text-blue-500 text-lg"><FaFacebookF className="cursor-pointer hover:text-blue-400" /></a>
      <a href="#" className="text-blue-400 text-lg"><FaInstagram className="cursor-pointer hover:text-blue-700" /></a>
      <a href="#" className="text-blue-400 text-lg"> <FaTwitter className="cursor-pointer hover:text-blue-800" /></a>
    </div>
  </footer>
</section>

    </div>
  );
};

export default TeamSection;
