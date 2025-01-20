// import React from 'react';

// const Slider = () => {
//   return (
//     <header className="bg-blue-500 h-[700px] relative flex items-center">
//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//         <div className="text-white lg:w-1/2 p-8 ml-[203px]">
//           <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
//             In-Home & Online Support for your <span className="font-bold">Streaming Device</span>
//           </h1>
//           <p className="mb-6">
//             The best tech solution, ready to help you - anytime, anywhere.
//           </p>
//           <div className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4">
//             <button className="flex items-center justify-between w-full">
//               I need help with...
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div className="lg:w-1/2">
//           <img
//             src="https://img.freepik.com/free-photo/smiling-young-customer-service-girl-with-headset-her-workplace_231208-9605.jpg"
//             alt="Support Staff"
//             className="max-w-full h-auto mt-[112px]"
//           />
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-[white] py-4">
//         <div className="text-[#0C71C3] flex items-center">
//           <span className="icon-wrench mr-2"></span>
//           Thousands of Techs Nationwide
//         </div>
//         <div className="text-[#0C71C3] flex items-center">
//           <span className="icon-clock mr-2"></span>
//           Service as Soon as Today
//         </div>
//         <div className="text-[#0C71C3] flex items-center">
//           <span className="icon-check-circle mr-2"></span>
//           Don't Pay Until It’s Done
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Slider;


import React from 'react';

const Slider = () => {
  return (
    <header className="bg-blue-500 h-[524px] relative flex items-center xl:mt-[-230px] 2xl:mt-[-283px] mt-[-283px]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="text-white lg:w-1/2 p-8 ml-[203px]">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
            Get Online Support for your <span className="font-bold">Streaming Device</span>
          </h1>
          <p className="mb-6">
            The best tech solution, ready to help you - anytime, anywhere.
          </p>
          <div className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4">
            <button className="flex items-center justify-between w-full">
              I need help with...
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg> */}
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          {/* <img
            src="https://img.freepik.com/free-photo/smiling-young-customer-service-girl-with-headset-her-workplace_231208-9605.jpg"
            alt="Support Staff"
            className="max-w-full h-auto mt-[50px] lg:-mt-[-50px]" // Adjusted the negative margin for large screens
          /> */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
        <div className="text-[#0C71C3] flex items-center">
          <span className="icon-wrench mr-2"></span>
          Thousands of Techs Nationwide
        </div>
        <div className="text-[#0C71C3] flex items-center">
          <span className="icon-clock mr-2"></span>
          Service as Soon as Today
        </div>
        <div className="text-[#0C71C3] flex items-center">
          <span className="icon-check-circle mr-2"></span>
          Don't Pay Until It’s Done
        </div>
      </div>
    </header>
  );
};

export default Slider;

