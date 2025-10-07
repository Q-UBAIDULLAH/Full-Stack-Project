"use client";
import { Eye } from "lucide-react";
import { useState } from "react";
import DetailBestseller from './detailBestseller'

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState("yellow");

  const colors = [
    { id: "yellow", class: "bg-yellow-400" },
    { id: "green", class: "bg-green-500" },
    { id: "blue", class: "bg-blue-500" },
    { id: "black", class: "bg-black" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left - Images */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZfWMWqTxZcZJVCP0Q2w9s4lW_7luNaEo_A&s"
            alt="Product"
            className="w-full rounded-lg shadow-md"
          />
          <div className="flex gap-3 mt-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jOXNLH1ueohsVB28UO_wb1-UlpS5trENwA&s"
              className="w-24 h-24 rounded-lg border cursor-pointer"
              alt="thumb"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH38eTSp_Wt-Qw_PTUnbbxii_C33lnHCLaA&s"
              className="w-24 h-24 rounded-lg border cursor-pointer"
              alt="thumb"
            />
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h2 className="text-2xl font-bold">Floating Phone</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-gray-600 text-sm">10 Reviews</span>
          </div>

          <p className="text-3xl font-semibold text-gray-800 mt-4">$1,139.33</p>
          <p className="text-green-600 mt-1 font-medium">In Stock</p>

          <p className="text-gray-600 mt-4 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          {/* Colors */}
          <div className="flex items-center gap-3 mt-6">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedColor(c.id)}
                className={`w-7 h-7 rounded-full border-2 ${
                  selectedColor === c.id
                    ? "border-gray-800"
                    : "border-transparent"
                } ${c.class}`}
              ></button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-3   md:px-6 md:py-3 bg-blue-600 text-white md:font-semibold rounded-lg hover:bg-blue-700">
              Select Options
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-100">
              ❤️
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-100">
              🛒
            </button>
            <button className=" p-3 border rounded-lg hover:bg-gray-100">
              <Eye></Eye>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 border-t pt-6">
        <div className="flex gap-6 border-b pb-2">
          <button className="font-medium text-gray-800 border-b-2 border-black pb-1">
            Description
          </button>
          <button className="font-medium text-gray-500 hover:text-gray-800">
            Additional Information
          </button>
          <button className="font-medium text-gray-500 hover:text-gray-800">
            Reviews (0)
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-6 bg-slate-500">
            <div className="w-full h-full">
              <img className="w-full h-full"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauGZrMuTbsWtxLRGCW3QYnUctpVYyRmuSVg&s" alt="" />
            </div>
          {/* Left Text */}
          <div>
            
            <h3 className="text-xl font-semibold mb-3">
              the quick fox jumps over
            </h3>
            <p className="text-gray-600 mb-3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 mb-3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
          </div>

          {/* Right List */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              the quick fox jumps over
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>➡ the quick fox jumps over the lazy dog</li>
              <li>➡ the quick fox jumps over the lazy dog</li>
              <li>➡ the quick fox jumps over the lazy dog</li>
              <li>➡ the quick fox jumps over the lazy dog</li>
              <li>➡ the quick fox jumps over the lazy dog</li>
              <li>➡ the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
        </div>
      </div>
          <DetailBestseller></DetailBestseller>
    </div>
  );
}
