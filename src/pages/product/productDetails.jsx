// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { printerProducts, addToCart } = useContext(CartContext);

//   const product = printerProducts.find((item) => item.id === parseInt(id));

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="p-5 flex flex-col items-center">
//       <img src={product.imageUrl} alt={product.name} className="h-48 w-48 mb-4" />
//       <h2 className="text-blue-600 text-lg">{product.name}</h2>
//       <button
//         className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={() => addToCart(product)}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetail;





// import React, { useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { CartContext } from './CartContext';
// // import printerProducts from '../src/pages/productData.js' 

// const ProductDetail = () => {
//     const { productID } = useParams();
//     const { addToCart } = useContext(CartContext);

//     // Find the product based on the productID
//     const product = printerProducts.find(item => item.id === parseInt(productID));

//     if (!product) {
//         return <p>Product not found</p>;
//     }

//     // State for the image gallery
//     const [images] = useState({
//         img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//         img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//         img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
//         img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
//     });

//     const [activeImg, setActiveImage] = useState(images.img1);
//     const [amount, setAmount] = useState(1);

//     // Handle adding product to cart
//     const handleAddToCart = () => {
//         addToCart(product, amount);
//     };

//     return (
//         <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
//             <div className='flex flex-col gap-6 lg:w-2/4'>
//                 <img src={activeImg} alt={product.name} className='w-full h-full aspect-square object-cover rounded-xl' />
//                 <div className='flex flex-row justify-between h-24'>
//                     <img src={images.img1} alt="Image 1" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
//                     <img src={images.img2} alt="Image 2" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
//                     <img src={images.img3} alt="Image 3" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
//                     <img src={images.img4} alt="Image 4" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />
//                 </div>
//             </div>
//             {/* Product Details */}
//             <div className='flex flex-col gap-4 lg:w-2/4'>
//                 <div>
//                     <span className='text-violet-600 font-semibold'>{product.category}</span>
//                     <h1 className='text-3xl font-bold'>{product.name}</h1>
//                 </div>
//                 <p className='text-gray-700'>{product.description}</p>
//                 <h6 className='text-2xl font-semibold'>${product.price}</h6>
//                 <div className='flex flex-row items-center gap-12'>
//                     <div className='flex flex-row items-center'>
//                         <button
//                             className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl'
//                             onClick={() => setAmount(prev => (prev > 1 ? prev - 1 : 1))}>
//                             -
//                         </button>
//                         <span className='py-4 px-6 rounded-lg'>{amount}</span>
//                         <button
//                             className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl'
//                             onClick={() => setAmount(prev => prev + 1)}>
//                             +
//                         </button>
//                     </div>
//                     <button
//                         className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'
//                         onClick={handleAddToCart}>
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;



// ProductDetail.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ProductDetailSingle = () => {
  const location = useLocation();
  const { product } = location?.state;
  
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="mt-20 p-5 flex flex-col items-center min-h-screen bg-blue-500">
      <h1 className="text-2xl font-bold text-center">{product.name}</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
        
          
            <div
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ width: '350px', height: '350px' }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}

                className="h-48 w-48 mb-4"
              />
              <h2 className="text-blue-600 text-lg text-center">{product.name} </h2>
              <h2 className="text-blue-600 text-lg text-center">{product.description} </h2>
              <h2 className="text-blue-600 text-lg text-center">{product.price} </h2>

            </div>

          
    
      </section>
              <button  style={{
                backgroundColor: '#533567',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              
              onClick={()=>handleAddToCart(product)}
              
              >Add to cart</button>
      
    </div>
  );
};

export default ProductDetailSingle;

