"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Side - Billing Details */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name*"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Street Address*"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Apartment, floor, etc. (optional)"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Town/City*"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full border p-3 rounded-md"
          />

          {/* Save info */}
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" defaultChecked className="accent-red-500" />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>
      </div>

      {/* Right Side - Order Summary */}
      <div className="border rounded-md p-6 space-y-4">
        {/* Products */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/50"
              alt="LCD Monitor"
              className="w-12 h-12"
            />
            <span>LCD Monitor</span>
          </div>
          <span className="font-medium">$650</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/50"
              alt="H1 Gamepad"
              className="w-12 h-12"
            />
            <span>H1 Gamepad</span>
          </div>
          <span className="font-medium">$1100</span>
        </div>

        {/* Totals */}
        <hr />
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>$1750</span>
        </div>

        {/* Payment Methods */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
            />
            <span>Bank</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-5"
            />
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <span>Cash on delivery</span>
          </label>
        </div>

        {/* Coupon */}
        <div className="flex space-x-2 mt-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border p-2 rounded-md"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Apply Coupon
          </button>
        </div>

        {/* Place Order */}
        <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-md">
          Place Order
        </button>
      </div>
    </div>
  );
}
