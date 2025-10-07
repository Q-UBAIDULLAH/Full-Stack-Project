"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import AboutImage from '../assets/vertical-two-cheerful-girls-sweaters-with-packages-rejoices-white-wall.png'
import AboutImage2 from '../assets/cute-young-female-holding-hands-waist-shirt-looking-cheerful-front-view.jpg'
import videoimage from '../assets/bf5361f308dd0c5a04f10121bc68f6cb9ff0d63d.jpg'
import teamimage from '../assets/0a05d6ce0fd1eeff9355b162a7e7c01605dd3c55.jpg'
import teamimage2 from '../assets/young-girl-with-hands-front-her-beige-shirt-jeans-looking-charming-front-view.jpg'
import teamimage3 from '../assets/24a6b8d9efd1b9c2401fb0702dc41f18a42ed89c.jpg'
import { FaHooli } from "react-icons/fa";
import { LiaLyft } from "react-icons/lia";
import { GiFallingLeaf } from "react-icons/gi";
import { FaStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";

import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 " >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-  items-center ">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:px-16">
          <p className="uppercase text-sm font-semibold text-black hidden md:block">
            About Company
          </p>
          <h1 className="text-4xl  font-bold mt-2">ABOUT US</h1>
          <p className="mt-4 text-gray-600 md:w-72 text-center md:text-left">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-6 py-3    bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
            Get Quote Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center max-w-md w-full  ">
          <Image
            src={AboutImage}
            alt="About Us"
            className="rounded w-full h-[450px] object-cover "
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-3xl font-bold">15K</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">150K</h2>
          <p className="text-gray-600">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">15</h2>
          <p className="text-gray-600">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-gray-600">Top Partners</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="md:max-w-3xl mx-auto px-6 py-16 flex justify-center bg-slate-">
        <div className="relative w-full">
          <Image
            src={videoimage}
            alt="Video"
            className="w-full rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg">
              ▶
            </div>
          </button>
        </div>
      </section>

      {/* Team Section */}
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
              img: teamimage,
            },
            {
              name: "Username",
              role: "Profession",
              img: teamimage2,
            },
            {
              name: "Username",
              role: "Profession",
              img: teamimage3,
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white w-  shadow-lg rounded-lg p- flex flex-col  items-center"
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

      {/* Companies Section */}
      {/* <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Big Companies Are Here</h2>
          <p className="text-gray-600 mb-10">
            Endeavors trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {["hooli", "lyft", "stripe", "aws", "reddit" ].map((logo, i) => (
              <img
                key={i}
                src='https://www.svgrepo.com/show/333504/aws.svg'
                alt={logo}
                className="h-12"
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="bg-[#FAFAFA] py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Big Companies Are Here
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

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

      {/* CTA Section */}
  <section className="bg-[#2A7CC7] text-white py- flex  h-[75vh]">
  <div className="w-full  mx-auto px- grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
    
    {/* Left - Text */}
    <div className="text-center md:text-left flex flex-col justify-center items-center">
      <h6 className=" font-medium mb-4">WORK WITH US</h6>
      <h2 className="text-3xl w-44 md:w-full text-center font-bold">Now Let’s Grow Yours</h2>
      <p className="max-w-md mt-4 w-56 md:w-full  text-blue-100">
        The gradual accumulation of information about atomic and small-scale
        behavior during the first quarter of the 20th
      </p>
      <button className=" mt-6 px-6 py-3 bg-white text-blue-600  font-semibold rounded-lg shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>

    {/* Right - Image */}
    <div className="md:flex  md:justify-end   hidden ">
      <Image
        src={AboutImage2}
        alt="CTA Illustration"
        className="w-  h-[75vh] object-cover  max-w-sm rounded- shadow-lg"
      />
    </div>

  </div>
</section>

    </div>
  );
}
