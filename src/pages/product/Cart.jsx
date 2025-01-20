import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="mt-20 p-5 flex flex-col md:flex-row bg-blue-100">
      {/* Shopping Cart Section */}
      <div className="w-full md:w-3/4 pr-0 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border border-gray-200"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-medium mb-1 text-gray-700">{item.name}</h2>
                  <p className="text-lg font-semibold text-gray-500">
                    ${item.price} <span className="text-sm text-gray-400">x {item.quantity}</span>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Billing Information Section */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Billing Information</h2>
        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">Name:</label>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">Email:</label>
            <input
              type="email"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">Address:</label>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">City:</label>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-600 font-medium">Zip Code:</label>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>
          <div className="flex items-center justify-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Order
            </button>
          </div>
        </form>
        <div className="mt-8">
          <p className="text-xl font-semibold text-gray-700">
            Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;



// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const handleRemoveFromCart = (productId) => {
//     removeFromCart(productId);
//   };

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="mt-20 p-5 flex flex-col md:flex-row bg-blue-100">
//       <div className="w-full md:w-3/4 pr-0 md:pr-8 mb-8 md:mb-0">
//         <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Shopping Cart</h1>
//         {cartItems.length === 0 ? (
//           <p className="text-lg text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="flex flex-col space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out border border-gray-200"
//               >
//                 <img
//                   src={item.imageUrl}
//                   alt={item.name}
//                   className="w-28 h-28 object-cover rounded-lg mr-6"
//                 />
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-medium mb-1 text-gray-700">{item.name}</h2>
//                   <p className="text-lg font-semibold text-gray-500">
//                     ${item.price} <span className="text-sm text-gray-400">x {item.quantity}</span>
//                   </p>
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => handleRemoveFromCart(item.id)}
//                     className="text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="w-full md:w-1/2 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Billing Information</h2>
//         <div className="mt-8">
//           <p className="text-xl font-semibold text-gray-700">
//             Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

