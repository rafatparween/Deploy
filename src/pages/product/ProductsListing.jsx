// import React from 'react'; 

// const PrinterProductList = () => {
//   const printerProducts = [
// {
//   id: 1,
//   name: 'Computer',
//   imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
// },
// {
//   id: 2,
//   name: 'Printer',
//   imageUrl: 'https://i1.adis.ws/i/canon/maxify-gx7050-ambient-reception-03_1920x1080-66d4a17cd389?w=100%&sm=aspect&aspect=16:9&qlt=100&scaleFit=poi&poi=0.4375,0.3888888888888889,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
// },
// {
//   id: 3,
//   name: 'Software setup ',
//   imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
// },
// {
//   id: 1,
//   name: 'Laptop',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d9fdc92a-9998-4561-92c5-9f3c6dbfe5ba.jpg;maxHeight=200;maxWidth=200',
// },
// {
//   id: 2,
//   name: ' Printer Printers, Ink & Home Office',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517854_sd.jpg;maxHeight=178;maxWidth=300',
// },
// {
//   id: 3,
//   name: 'Phone',
//   imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=200;maxWidth=298',
// },




//   ];

//   return (
//     <div className="mt-20 p-5 flex flex-col items-center min-h-screen bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366]">
//       <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">
//         Shop deals by category
//       </h1>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {printerProducts.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             style={{ width: '350px', height: '350px' }} 
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="h-48 w-48 mb-4" // Increased image size
//             />
//             <h2 className="text-blue-600 text-lg text-center">
//               {product.name}
//             </h2>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PrinterProductList;


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext';

// const PrinterProductList = () => {
//   const { addToCart } = useContext(CartContext);

//   const printerProducts = [
//     {
//       id: 1,
//       name: 'Computer',
//       imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
//     },
//     // Other products...
//   ];

//   const handleImageClick = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="mt-20 p-5 flex flex-col items-center min-h-screen">
//       <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">
//         Shop deals by category
//       </h1>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {printerProducts.map((product) => (
//           <Link 
//             key={product.id} 
//             to={`/product/${product.id}`} 
//             onClick={() => handleImageClick(product)}
//           >
//             <div
//               className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               style={{ width: '350px', height: '350px' }}
//             >
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="h-48 w-48 mb-4"
//               />
//               <h2 className="text-blue-600 text-lg text-center">
//                 {product.name}
//               </h2>
//             </div>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PrinterProductList;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const PrinterProductList = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const printerProducts = [
//     // Add related products for each product if needed
//     {
//       id: 1,
//       name: 'Computer',
//       imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
//     },
//     {
//       id: 2,
//       name: 'Printer',
//       imageUrl: 'https://i1.adis.ws/i/canon/maxify-gx7050-ambient-reception-03_1920x1080-66d4a17cd389?w=100%&sm=aspect&aspect=16:9&qlt=100&scaleFit=poi&poi=0.4375,0.3888888888888889,0.125,0.2222222222222222&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
//     },
//     {
//       id: 3,
//       name: 'Software setup ',
//       imageUrl: 'https://preview.redd.it/cozy-software-engineering-setup-v0-0h5drz8nbaea1.jpg?width=640&crop=smart&auto=webp&s=c13e7c8c6deda1b3061c64314ab614c766d6a7da',
//     },
//     {
//       id: 1,
//       name: 'Laptop',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d9fdc92a-9998-4561-92c5-9f3c6dbfe5ba.jpg;maxHeight=200;maxWidth=200',
//     },
//     {
//       id: 2,
//       name: ' Printer Printers, Ink & Home Office',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517854_sd.jpg;maxHeight=178;maxWidth=300',
//     },
//     {
//       id: 3,
//       name: 'Phone',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=200;maxWidth=298',
//     },
//     {
//       id: 1,
//       name: 'TV',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525240_sd.jpg;maxHeight=127;maxWidth=300',
//     },
//     {
//       id: 2,
//       name: 'Drones',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6558/6558798_sd.jpg;maxHeight=167;maxWidth=300',
//     },
//     {
//       id: 3,
//       name: 'Activity Trackers & Smartwatches',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505983_rd.jpg;maxHeight=200;maxWidth=271',
//     },
//     // ... other products
//   ];

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div className="mt-20 p-5 flex flex-col items-center min-h-screen">
//       <h1 className="text-[#0C71C3] text-3xl font-extrabold mb-10">Shop deals by category</h1>
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {printerProducts.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//             style={{ width: '350px', height: '350px' }}
//             onClick={() => handleProductClick(product)}
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="h-48 w-48 mb-4"
//             />
//             <h2 className="text-blue-600 text-lg text-center">{product.name}</h2>
//           </div>
//         ))}
//       </section>

//       {/* Related Products Section */}
//       {selectedProduct && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold text-center">Related Products</h2>
//           <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
//             {selectedProduct.relatedProducts.map((relatedProduct) => (
//               <Link to={`/productdetail/${relatedProduct.id}`} key={relatedProduct.id}>
//                 <div
//                   className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                   style={{ width: '350px', height: '350px' }}
//                 >
//                   <img
//                     src={relatedProduct.imageUrl}
//                     alt={relatedProduct.name}
//                     className="h-48 w-48 mb-4"
//                   />
//                   <h2 className="text-blue-600 text-lg text-center">{relatedProduct.name}</h2>
//                 </div>
//               </Link>
//             ))}
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PrinterProductList;



// PrinterProductList.js

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const PrinterProductList = () => {
//   const navigate = useNavigate();

//   const printerProducts = [
//     {
//       id: 1,
//       name: 'Computers',
//       imageUrl: 'https://image.made-in-china.com/2f0j00ZqlWgMuBgpYI/Computer-All-in-One-PC-Hardware-Software-24-Inch-Latest-Cheap-Ultra-Thin-Desktop-Computer.webp',
//       description: 'All-in-one PC with ultra-thin design, perfect for home and office use.',
//       price: 799.99,
//       relatedProducts: [
//         {
//           id: 201,
//           name: 'Intel Processor N200',
//           imageUrl: 'https://c.media-amazon.com/images/I/61wt6u4yXEL._AC_UY218_.jpg',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 202,
//           name: 'HP Compaq',
//           imageUrl: 'https://c.media-amazon.com/images/I/61SVyNrkDbL._AC_UY218_.jpg',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 203,
//           name: 'HP EliteDesk 19',
//           imageUrl: 'https://c.media-amazon.com/images/I/61rBqHWhl1L._AC_UY218_.jpg',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 204,
//           name: '13th Gen Intel Core i5 27',
//           imageUrl: 'https://c.media-amazon.com/images/I/71pFI90l-aL._AC_UY218_.jpg',
//           description: 'Compact and efficient printer for everyday tasks.',
//           price: 179.99,
//         },
//         {
//           id: 205,
//           name: '12th Gen Intel Core i5 27',
//           imageUrl: 'https://c.media-amazon.com/images/I/71X-bbWtCAL._AC_UY218_.jpg',
//           description: 'Complete printer package for home office needs.',
//           price: 229.99,
//         },
//         {
//           id: 206,
//           name: 'HP ProDesk 600 G2 19',
//           imageUrl: 'https://c.media-amazon.com/images/I/61740WUmL4L._AC_UY218_.jpg',
//           description: 'High-quality printer with easy setup and usage.',
//           price: 199.99,
//         },
//         {
//           id: 207,
//           name: 'HP Ryzen',
//           imageUrl: 'https://c.media-amazon.com/images/I/71CW7r7QcpL._AC_UY218_.jpg',
//           description: 'Specialized thermal inkjet printer for precise printing needs.',
//           price: 259.99,
//         },
//         {
//           id: 208,
//           name: 'HP Computer',
//           imageUrl: 'https://c.media-amazon.com/images/I/61SVyNrkDbL._AC_UY218_.jpg',
//           description: 'Reliable Brother HL printer for professional environments.',
//           price: 299.99,
//         },
//         {
//           id: 209,
//           name: 'HP T630 19',
//           imageUrl: 'https://c.media-amazon.com/images/I/51X70Ct-pmL._AC_UY218_.jpg',
//           description: 'Trackers and smartwatches for monitoring activity and health.',
//           price: 149.99,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Laptop',
//       imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzPHXVnWxUTemMjfeJvXCvuCSqGb85ifyx8hP2nqR762FiQAyAY3cYICqtdwjXQhpyS60SRHeKspOu8pRqdEmhNDFSPN8jRKNmU77z_5vI3RTJs_Cj0_qnj84U8NEY0AFlh-k45g&usqp=CAc',
//       description: 'Complete software setup for optimal performance and usability.',
//       price: 89.99,
//       relatedProducts: [
//         {
//           id: 301,
//           name: 'HP Laptop 15',
//           imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4MRmIJQ0yXv1SKZ9PJ0KoeQQgj7SmjnTO_pbhhN91_3dwcagBJ0mYYijvLkGWFSbTg-rBbJWhFSW5fc2J0oPUSp8a9JQf8hTPnm2AklHGzp5lxHfDn1aKlZ06xK6n10S-otSF37c&usqp=CAc',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 302,
//           name: 'HP Pavilion',
//           imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnQJdwqbwEO6_WoEsOwe6l9Plj5sBCEJDYFF60vrvu9psxN5hHFbskk5o0jEWrsBHNLZXrC0-axFHL1BwYlGn-osSMs-zHqeBqGBr3hXncX3A2Sy1EYGaGvJXVGcYqFzNXNTIzDKA&usqp=CAc',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 303,
//           name: 'HP Victus Gaming',
//           imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_a4Lh6pFryQB_TsedX02qWDZBCkzv7z1v3hNyN1ek_c33iquf_QlHSABuyZNt9LfmQTQTY_I-nxrGWwZeFH5TSqcdSj7RlyDdqP81McjAO9bTP4yuEmTYnWJZoKxrfj12i9BUTQ&usqp=CAc',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 304,
//           name: 'HP Omen Gaming',
//           imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQolTjqsQGB9tPydoprdWwNzUT04Wy1bUaoq2_LukyEtQUQX9Qxnet3woOt_x-FDRzRf5r24aq2Tp8S9pk1Dm8up4tpqX4H2x_NrjUq0NxXnNt2ElP1ZLbBmeCkCOqaz7_wKgMzy68&usqp=CAc',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 305,
//           name: 'HP Envy x360',
//           imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJnxZgSpNYtNEMV3FJRhjbskLEwg7G7PEH-OUY1XC0QT76HbfwibuVL6ft0Pi1jQsnjnX1DplmB8k1GM22ibzNkPMP_kZpaA10QO_LTnL5UolPscGOH-x2u_9mbNZ_CUyb0zZ_flA&usqp=CAc',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 306,
//           name: 'HP Pavilion Plus',
//           imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhug3VKrd_5Y4_-V-wEn5sdHLDqbFM6Bn8joi-uIv7138pbqCdRSJT4M5Dhao_99QsY4MUqmsiGsy6MKmcsr8iXTEViX2SB4EZUb0ipjgzKuzaY24oDx162p5ejeURmmVNb-1ly_5_vEs&usqp=CAc',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 307,
//           name: 'HP Amd Ryzen',
//           imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjeB40FqVAKbJq9BouJXdTzyQoAylVAaFW9GI87NeA3lorlNhMXcZfFRSa_xdW4I9CyQd8ZQRDymYKtV_xu5BtQU8fX-wVaRaKzBxf4qq6gfbYWhVc2xSk',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 308,
//           name: 'HP Elite Book',
//           imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPAIPf4bkSGcghHjndmIHksOSfWupteAY6_Cu6PjgZ6fcfoVRzJgrrewtMh7uAsmH0jfdRtTsIQDwb0sp2jr2IWs1aRANdwl4PKKq5t_SZ',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 309,
//           name: 'HP Laptop 15',
//           imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSckl-RpZ9mCCReyjRnI6M08R_Zu_w-30lUShh5ADrH6DBdQwGsO2b-F_GZTIZtifFW7CgChtLlVBtwA8kdr0pcgo8Tm9DzdUhaM56gSWU_x09TYnqUYRQR',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: 'Printer',
//       imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR388C6c5L58Cgx5sA3yziiDoit5UF3nx56uloY6Xbm15gDkqo4pAdbVw7UB5GMgNjBoccP3kcVAGjr7gCqRXd_lxNHWQ30v5wxfbtbSL_cJVj94IUGM-hssMc&usqp=CAc',
//       description: 'High-quality printer with advanced features and reliable performance.',
//       price: 299.99,
//       relatedProducts: [
//         {
//           id: 201,
//           name: 'Inkjet Printer',
//           imageUrl: 'https://5.imimg.com/data5/PF/QO/MY-10941265/hp-laser-electronic-printer.jpg',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 202,
//           name: 'Laser Printer',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565476_sd.jpg;maxHeight=136;maxWidth=300',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 203,
//           name: 'Software Setup',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9a66ede7-b7ba-4b2f-8feb-6d9812a310c8.jpg;maxHeight=131;maxWidth=300',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 204,
//           name: 'Printer',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6492/6492187cv13d.jpg;maxHeight=200;maxWidth=200',
//           description: 'Compact and efficient printer for everyday tasks.',
//           price: 179.99,
//         },
//         {
//           id: 205,
//           name: 'Printer Printers, Ink & Home Office',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6de0f935-1fa4-4bcd-a14d-1adc485a7b0e.jpg;maxHeight=200;maxWidth=200',
//           description: 'Complete printer package for home office needs.',
//           price: 229.99,
//         },
//         {
//           id: 206,
//           name: 'Printer',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574145cv25d.jpg;maxHeight=111;maxWidth=300',
//           description: 'High-quality printer with easy setup and usage.',
//           price: 199.99,
//         },
//         {
//           id: 207,
//           name: 'Thermal Inkjet Printer',
//           imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKZPi3P3Me5vYp08sr476R_q_sEwSHA6c3A&s',
//           description: 'Specialized thermal inkjet printer for precise printing needs.',
//           price: 259.99,
//         },
//         {
//           id: 208,
//           name: 'Brother HL Printer',
//           imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjomQY7D8nmNN2BzBBKOaN_d7Jj84rWFetA&s',
//           description: 'Reliable Brother HL printer for professional environments.',
//           price: 299.99,
//         },
//         {
//           id: 209,
//           name: 'HP T630 19',
//           imageUrl: 'https://c.media-amazon.com/images/I/51X70Ct-pmL._AC_UY218_.jpg',
//           description: 'Trackers and smartwatches for monitoring activity and health.',
//           price: 149.99,
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: 'Security & Wifi',
//       imageUrl: 'https://c.media-amazon.com/images/I/41fQ5NSkEWL._AC_UL320_.jpg',
//       description: 'Complete software setup for optimal performance and usability.',
//       price: 89.99,
//       relatedProducts: [
//         {
//           id: 301,
//           name: 'D Link DIR 3040',
//           imageUrl: 'https://c.media-amazon.com/images/I/41fQ5NSkEWL._AC_UY218_.jpg',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 302,
//           name: 'Conbre CPE MT-300H',
//           imageUrl: 'https://c.media-amazon.com/images/I/416LEPTegZL._AC_UY218_.jpg',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 303,
//           name: 'D-Link R15 AX1500 Eagle PRO ',
//           imageUrl: 'https://m.media-amazon.com/images/I/61-pxrLNW+L._AC_SR405%2C405_.jpg',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 304,
//           name: 'TP-Link AC750 Wifi Range Extender',
//           imageUrl: 'https://c.media-amazon.com/images/I/61+8YQqHC0L._AC_UY218_.jpg',
//           description: 'Compact and efficient printer for everyday tasks.',
//           price: 179.99,
//         },
//         {
//           id: 305,
//           name: 'TP-Link Archer C50 AC1200 Dual Band Wireless Cable Router',
//           imageUrl: 'https://c.media-amazon.com/images/I/61twu2qHIfL._AC_UY218_.jpg',
//           description: 'Complete printer package for home office needs.',
//           price: 229.99,
//         },
//         {
//           id: 306,
//           name: 'Conbre CPE MT-300H 5G ',
//           imageUrl: 'https://m.media-amazon.com/images/I/416LEPTegZL._AC_SR405%2C405_.jpg',
//           description: 'High-quality printer with easy setup and usage.',
//           price: 199.99,
//         },
//         {
//           id: 307,
//           name: 'TP-link N300 WiFi Wireless Router',
//           imageUrl: 'https://c.media-amazon.com/images/I/41fQ5NSkEWL._AC_UL320_.jpg',
//           description: 'Specialized thermal inkjet printer for precise printing needs.',
//           price: 259.99,
//         },
//         {
//           id: 308,
//           name: 'SimpliSafe - Whole Home Security',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6550/6550576_sd.jpg;maxHeight=191;maxWidth=300',
//           description: 'Reliable Brother HL printer for professional environments.',
//           price: 299.99,
//         },
//         {
//           id: 309,
//           name: 'Trueview Wireless Router ',
//           imageUrl: 'https://c.media-amazon.com/images/I/41prD0VemZL._AC_UY218_.jpg',
//           description: 'Trackers and smartwatches for monitoring activity and health.',
//           price: 149.99,
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: 'Phone',
//       imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6543/6543735_sd.jpg;maxHeight=200;maxWidth=245',
//       description: 'Complete software setup for optimal performance and usability.',
//       price: 89.99,
//       relatedProducts: [
//         {
//           id: 301,
//           name: 'iPhone 13/13 Pro ',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525421_sd.jpg;maxHeight=200;maxWidth=242',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 302,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6561/6561365_sd.jpg;maxHeight=200;maxWidth=234',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 303,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569030_sd.jpg;maxHeight=200;maxWidth=244',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 304,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/df9c78b6-693b-4060-b888-011eb20facb4.jpg;maxHeight=200;maxWidth=259',
//           description: 'Compact and efficient printer for everyday tasks.',
//           price: 179.99,
//         },
//         {
//           id: 305,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6583/6583829_sd.jpg;maxHeight=144;maxWidth=200',
//           description: 'Complete printer package for home office needs.',
//           price: 229.99,
//         },
//         {
//           id: 306,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551222_sd.jpg;maxHeight=200;maxWidth=230',
//           description: 'High-quality printer with easy setup and usage.',
//           price: 199.99,
//         },
//         {
//           id: 307,
//           name: 'Titanic Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=200;maxWidth=298',
//           description: 'Specialized thermal inkjet printer for precise printing needs.',
//           price: 259.99,
//         },
//         {
//           id: 308,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525458_sd.jpg;maxHeight=200;maxWidth=224',
//           description: 'Reliable Brother HL printer for professional environments.',
//           price: 299.99,
//         },
//         {
//           id: 309,
//           name: 'Phone',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6557/6557867_sd.jpg;maxHeight=200;maxWidth=250',
//           description: 'Trackers and smartwatches for monitoring activity and health.',
//           price: 149.99,
//         },
//       ],
//     },
//     {
//       id: 6,
//       name: 'CP PLUS 3MP Smart Wi-fi',
//       imageUrl: 'https://c.media-amazon.com/images/I/516WPkDM-wL._AC_UY218_.jpg',
//       description: 'Complete software setup for optimal performance and usability.',
//       price: 89.99,
//       relatedProducts: [
//         {
//           id: 301,
//           name: 'IMOU 360° 1080P Full HD Security Camera',
//           imageUrl: 'https://c.media-amazon.com/images/I/51EtrQE+x7L._AC_UY218_.jpg',
//           description: 'Versatile inkjet printer suitable for home and office use.',
//           price: 199.99,
//         },
//         {
//           id: 302,
//           name: 'CP PLUS 2MP Smart Wi-fi CCTV Camera',
//           imageUrl: 'https://c.media-amazon.com/images/I/41C5KrsretL._AC_UY218_.jpg',
//           description: 'Fast and efficient laser printer for high-volume printing.',
//           price: 249.99,
//         },
//         {
//           id: 303,
//           name: 'Trueview 3mp 1296p HD',
//           imageUrl: 'https://c.media-amazon.com/images/I/516WPkDM-wL._AC_UY218_.jpg',
//           description: 'Software setup for optimal printer performance and functionality.',
//           price: 99.99,
//         },
//         {
//           id: 304,
//           name: 'Trueview 2MP Smart CCTV Wi-fi Home Security Camera',
//           imageUrl: 'https://c.media-amazon.com/images/I/51E5TaxRvxL._AC_UY218_.jpg',
//           description: 'Compact and efficient printer for everyday tasks.',
//           price: 179.99,
//         },
//         {
//           id: 305,
//           name: 'Imou WiFi Security Camera',
//           imageUrl: 'https://c.media-amazon.com/images/I/71TcO2p6c-L._AC_UY218_.jpg',
//           description: 'Complete printer package for home office needs.',
//           price: 229.99,
//         },
//         {
//           id: 306,
//           name: 'Sony Alpha ILCE-6100Y',
//           imageUrl: 'https://c.media-amazon.com/images/I/81lghf1fdzL._AC_UY218_.jpg',
//           description: 'High-quality printer with easy setup and usage.',
//           price: 199.99,
//         },
//         {
//           id: 307,
//           name: 'Canon - EOS R50',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535120_sd.jpg;maxHeight=150;maxWidth=300',
//           description: 'Specialized thermal inkjet printer for precise printing needs.',
//           price: 259.99,
//         },
//         {
//           id: 308,
//           name: 'Canon - EOS R6 Mark',
//           imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525237_sd.jpg;maxHeight=144;maxWidth=300',
//           description: 'Reliable Brother HL printer for professional environments.',
//           price: 299.99,
//         },
//         {
//           id: 309,
//           name: 'CP PLUS 2MP Smart Wi-fi CCTV Camera',
//           imageUrl: 'https://c.media-amazon.com/images/I/41C5KrsretL._AC_UY218_.jpg',
//           description: 'Trackers and smartwatches for monitoring activity and health.',
//           price: 149.99,
//         },
//       ],
//     },
//   ];
//   const handleProductClick = (product) => {
//     console.log(product);
//     navigate(`/product/${product.id}`, { state: { product } });
//   };

//   return (
//     <section id="serviceSection">
//       <div className=" p-5 flex flex-col items-center min-h-screen bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366]">
//         <h1 className="text-3xl font-extrabold mb-10">Shop deals by category</h1>
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {printerProducts.map((product) => (
//             <div
//               key={product.id}
//               className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               style={{ width: '350px', height: '350px' }}
//               onClick={() => handleProductClick(product)}
//             >
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="h-48 w-48 mb-4 mt-[45px]"
//               />
//               <h2 className="text-lg text-center object-cover">{product.name}</h2>

//             </div>
//           ))}
//         </section>
//       </div>
//     </section>
//   );
// };

// export default PrinterProductList;


import React from 'react';

const PrinterProductList = () => {
  const printerProducts = [
    {
      id: 1,
      name: 'Computer Support',
      imageUrl: 'https://www.shutterstock.com/image-vector/remote-support-online-remotely-access-600nw-1331918702.jpg',
    },
    {
      id: 2,
      name: 'Printer Support',
      imageUrl: 'https://www.shutterstock.com/image-photo/modern-office-pc-printers-copiers-260nw-288643019.jpg',
    },
    {
      id: 3,
      name: 'Audio & video Support',
      imageUrl: 'https://cdn.prod.website-files.com/615243a00511f95546e9f148/62e1a7c07f1cb40f6cc2e666_shutterstock_1540480613_60efe0fcb241534a650546c019092392_2000.jpeg',
    },
    {
      id: 4,
      name: 'Wifi & Network Support',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/754/076/original/internet-of-things-technology-with-wi-fi-compatibility-hand-holding-wifi-connection-with-icon-refers-to-the-technology-of-transmitting-wireless-signals-to-electronic-devices-to-work-as-instructed-vector.jpg',
    },
    {
      id: 5,
      name: 'Printer & Ink Support',
      imageUrl: 'https://t3.ftcdn.net/jpg/06/35/13/92/360_F_635139269_8mwPclNXVLrVTCbC6XZjgP12pNN3V6ov.jpg',
    },
    {
      id: 6,
      name: 'Tab Support',
      imageUrl: 'https://assets.mspimages.in/gear/wp-content/uploads/2024/09/Untitled-design-2024-09-09T180842.291.jpg?tr=h-300,t-true',
    },
    {
      id: 7,
      name: 'Laptop Support',
      imageUrl: 'https://www.humancentric.com/cdn/shop/products/laptopstand_3_2048x.jpg?v=1675101854',
    },
    {
      id: 8,
      name: 'Mobile Support',
      imageUrl: 'https://www.newsx.com/wp-content/uploads/2024/02/credits-19.jpg',
    },
  ];

  return (
    <div className="mt-20 p-5 flex flex-col items-center min-h-screen bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366]">
      <h1 className="text-white text-4xl font-extrabold mb-10 text-center mt-[70px]">
        Schedule a service 
      </h1>
      <h1 className="text-white text-[24px] font-extrabold text-center pb-[50px] pt-[-20px] mt-[-24px] ">
      Book your appointment for repair, installation, troubleshooting.
      </h1>
      <p></p>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {printerProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-[243px] w-[333px] mb-4 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h2 className="text-[#0C71C3] text-lg text-center font-semibold">
              {product.name}
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrinterProductList;





