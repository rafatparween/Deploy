// import React from 'react';

// const Slider = () => {
//   return (
//     <header className="bg-[white] h-screen relative flex items-center h-[630px]">
//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//         <div className="text-white lg:w-1/2 p-8 ml-[203px]">
//           <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-[black]">
//             Your Peace of mind <span className="font-bold">is our mission</span>
//           </h1>
//           <p className="mb-6 text-[black]">
//           We're committed to your complete satisfaction with our service. If you're not 100% happy, we'll do whatever it takes to make it right.
//           </p>
          
//         </div>
//         <div className="lg:w-1/2">
//           <img
//             src="https://uploads-ssl.webflow.com/5fece0d001923a6386f248d6/65f0e7930cb8628fba598720_lady-on-couch-with-phone-4-cropped%20(1).jpg"
//             alt="Support Staff"
//             className="max-w-full h-auto mt-[112px]"
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Slider;


// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CustomerReview from '../sections/CustomerReview';
import HelpPage from '../sections/HelpPage';
// import PeaceOfMindGuarantee from '../sections/PeaceOfMindGuarantee';

const Peace = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366] h-[700px] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h1 className="text-[30px] font-bold text-[#0C71C3] mb-4 font-sans">
              Your peace of mind is our mission{' '}
              </h1>
              <p className="text-gray-700 text-lg mb-4 font-sans ">
              We're committed to your complete satisfaction with our service. If you're not 100% happy, we'll do whatever it takes to make it right. </p>
              <p className="text-gray-700 text-lg mb-4 font-sans">
              At Hewlett hub solutions, We believe in building long-term relationships with our clients by offering dependable solutions and ensuring that your technology works seamlessly. Our team of experts is dedicated to your success, working tirelessly to resolve any tech issues you may encounter.             </p>
            </div>
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <img
                src="https://www.coding-girls.com/sites/default/files/styles/cms_bootstrap_12_12/public/blog/images/beautiful-blur-casual-935756.jpg?itok=-DKboL5W"
                alt="Refurbished Printer"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- */}
      {/* <section className="bg-teal-50 py-4 flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <BuildIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-[#0f766e] mt-2">Thousands of Techs Nationwide</p>
          </div>

          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <AccessTimeIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-[#0f766e] mt-2">Service as Soon as Today</p>
          </div>

          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <CheckCircleOutlineIcon
              style={{ color: '#1e3a8a', marginTop: '8px' }}
            />
            <p className="text-[#0f766e] mt-2">Don’t Pay Until It’s Done</p>
          </div>
        </div>
      </section> */}

      {/* <HelpPage /> */}
    </>
  );
};

export default Peace;

