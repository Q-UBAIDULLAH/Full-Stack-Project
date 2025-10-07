"use client";
import Image from "next/image";
import familyImage from "../assets/0becd76fb529bdb1f9ac06ee979d8665aade6757.png"; // apni image ka path lagao
import { Mail, Phone, ShoppingBag } from "lucide-react";
import { MdLocationPin } from "react-icons/md";

import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";

import { GrInstagram } from "react-icons/gr";

export default function ContactPage() {
  return (
    <>
      {/* --- CONTACT HERO SECTION --- */}
      <section className="py-5 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
          {/* Left Text Section */}
          <div>
            <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Contact Us
            </h5>
            <h2 className="md:text-5xl text-4xl w-72 md:w-full font-bold mt-3 mb-4 text-gray-900">
              Get in touch today!
            </h2>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="space-y-2 text-gray-800">
              <p>
                <strong>Phone:</strong> +451 215 215
              </p>
              <p>
                <strong>Fax:</strong> +451 215 215
              </p>
            </div>
            {/* Social icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook-f">  </i>
              
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600">
                <i className="fab fa-twitter">  <FaFacebookF className="cursor-pointer h-5 hover:text-blue-800" /> </i>
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600">
                <i className="fab fa-instagram"> <FaLinkedinIn className="cursor-pointer h-5 hover:text-blue-700" /></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600">
                <i className="fab fa-linkedin-in">  <FaTwitter className="cursor-pointer h-5 hover:text-blue-400" /></i>
              </a>
              <a href="#" className="text-gray-900 hover:text-blue-600">
                <i className="fab fa-linkedin-in">  <GrInstagram   className="cursor-pointer h-5  hover:text-blue-400" /></i>
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md  bg-slate-">
              <Image
                src={familyImage}
                alt="Happy Family Shopping"
                className="object-cover w-full h-96 md:h-lvh rounded-lg"
              />
              <div className="absolute -z-10 bg-pink-100 rounded-full w-72 h-72 top-10 left-10 blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO CARDS SECTION --- */}
      <section className="py-16 px-2 bg-white text-center">
        <h5 className="uppercase text-gray-500 font-semibold">
          Visit Our Office
        </h5>
        <h2 className="text-2xl md:text-3xl 
         font-bold mt-2 px-2 text-gray-900">
          We help small businesses with big ideas
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-6">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
            <div className=" text-3xl mb-4"><Phone className="text-[#23A6F0] h-9 flex  justify-center items-center w-full"></Phone></div>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-600 mb-4">georgia.young@ple.com</p>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Card 2 (Dark Center) */}
          <div className="bg-[#252B42] text-white rounded-lg p-8 hover:shadow-lg transition">
            <div className="text-3xl mb-4"><MdLocationPin className="text-[#23A6F0] h-9 flex  justify-center items-center w-full"/></div>
            <p className="mb-2">georgia.young@example.com</p>
            <p className="mb-4">georgia.young@ple.com</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Submit Request
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
            <div className="text-blue-  text-3xl mb-4"> <Mail className="text-[#23A6F0] h-9 flex  justify-center items-center w-full"></Mail></div>
            <p className="text-gray-600 mb-2">georgia.young@example.com</p>
            <p className="text-gray-600 mb-4">georgia.young@ple.com</p>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 bg-gray-50 text-center">
        <p className="text-blue-600 font-medium">We can’t wait to meet you</p>
        <h2 className="text-3xl font-bold mt-2 mb-6">Let’s Talk</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Try it free now
        </button>
      </section>
    </>
  );
}
