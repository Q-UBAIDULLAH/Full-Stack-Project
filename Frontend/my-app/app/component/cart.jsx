"use client";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "LCD Monitor", price: 650, qty: 1, img: "https://via.placeholder.com/80x80.png?text=LCD" },
    { id: 2, name: "H1 Gamepad", price: 550, qty: 2, img: "https://via.placeholder.com/80x80.png?text=Gamepad" },
  ]);

  const handleQtyChange = (id, value) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: parseInt(value) } : item
      )
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home / <span className="text-gray-700">Cart</span>
      </p>

      {/* Cart Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4 flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-md" />
                  <span>{item.name}</span>
                </td>
                <td className="py-4 px-4">${item.price}</td>
                <td className="py-4 px-4">
                  <select
                    value={item.qty}
                    onChange={(e) => handleQtyChange(item.id, e.target.value)}
                    className="border rounded-md px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q < 10 ? `0${q}` : q}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-4 px-4">${item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100">
          Return To Shop
        </button>
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100">
          Update Cart
        </button>
      </div>

      {/* Coupon + Cart Total */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Coupon */}
        <div className="md:flex-col  gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="md:mr-2 mr-2  px-4 py-3 border rounded-md focus:outline-none w-40 md:w-60"
          />
          <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border rounded-md p-6">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Shipping:</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between py-2 font-semibold">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
