import React, { useState } from "react";
import "./index.css";

const products = [
  {
    id: 1,
    name: "Lux Soap",
    price: 40,
    image: "https://cdn.pixabay.com/photo/2017/06/20/20/57/soap-2428473_1280.jpg",
  },
  {
    id: 2,
    name: "Oreo Biscuits",
    price: 30,
    image: "https://images.unsplash.com/photo-1614000052112-7c8b1b2a2bd3?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Frooti Juice",
    price: 25,
    image: "https://images.unsplash.com/photo-1601041195156-cb92d8d7a7e1?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Dove Shampoo (100ml)",
    price: 85,
    image: "https://images.unsplash.com/photo-1614548532085-52b3db7f8a5c?auto=format&fit=crop&w=500&q=60",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setCart([]);
    setShowCheckout(false);
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center text-3xl font-bold mb-6 text-green-700">
        EasyPeasy FMCG Store 🛒
      </header>

      {orderPlaced && (
        <div className="bg-green-200 text-green-900 text-center p-4 rounded-xl mb-6">
          ✅ Order placed successfully!
        </div>
      )}

      {!showCheckout ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-green-600 font-bold mt-1">
                  ₹{product.price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {cart.length > 0 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowCheckout(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Proceed to Checkout ({cart.length} items)
              </button>
            </div>
          )}
        </>
      ) : (
        <form
          onSubmit={handleOrder}
          className="bg-white max-w-xl mx-auto p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            🧾 Checkout Details
          </h2>
          <label className="block mb-2 font-medium">Name</label>
          <input
            required
            type="text"
            className="w-full mb-4 px-4 py-2 border rounded-xl"
          />
          <label className="block mb-2 font-medium">Address</label>
          <textarea
            required
            className="w-full mb-4 px-4 py-2 border rounded-xl"
          ></textarea>
          <label className="block mb-2 font-medium">Phone</label>
          <input
            required
            type="tel"
            className="w-full mb-4 px-4 py-2 border rounded-xl"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}
