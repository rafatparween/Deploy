// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import CustomerReview from '../sections/CustomerReview';
// import HelpPage from '../sections/HelpPage';
// import PeaceOfMindGuarantee from '../sections/PeaceOfMindGuarantee';

// const Home = () => {
//   return (
//     <>
//       <div className="bg-teal-50 min-h-screen flex items-center justify-center">
//         <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20">
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 p-4">
//               <h1 className="text-[30px] font-bold text-blue-600 mb-4">
//                 Welcome to Hewlett Hub solutions{' '}
//               </h1>
//               <p className="text-gray-700 text-lg mb-4 ">
//                 At Hewlett Hub Solutions LLC, we are your trusted specialists for resolving printer issues across all brands and models. With a strong focus on restoring your printers to full functionality, we ensure that your devices are up and running smoothly, minimizing downtime and frustration.
//               </p>
//               <p className="text-gray-700 text-lg mb-4">
//                 In addition to printer repairs, we offer a comprehensive range of tech services, including new computer setup, operating system installations or re-installations, and software configuration. Our expert team also provides thorough support for computer repair, data backup and transfer, and virus removal and cleanup.

//                 Our mission is to deliver reliable and efficient solutions to all your tech challenges, so you can enjoy a hassle-free experience with your technology.
//               </p>
//             </div>
//             <div className="md:w-1/2 p-4 flex items-center justify-center">
//               <img
//                 src="https://img.freepik.com/premium-photo/close-up-office-table-with-printer-it_93675-81686.jpg?w=826"
//                 alt="Refurbished Printer"
//                 className="rounded-lg shadow-xl h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------- */}
//       <section className="bg-teal-50 py-4 flex justify-center items-center">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
//           <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
//             <BuildIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
//             <p className="text-[#0f766e] mt-2">Thousands of Techs Nationwide</p>
//           </div>

//           <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
//             <AccessTimeIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
//             <p className="text-[#0f766e] mt-2">Service as Soon as Today</p>
//           </div>

//           <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
//             <CheckCircleOutlineIcon
//               style={{ color: '#1e3a8a', marginTop: '8px' }}
//             />
//             <p className="text-[#0f766e] mt-2">Don’t Pay Until It’s Done</p>
//           </div>
//         </div>
//       </section>
//       <PeaceOfMindGuarantee />
//       <CustomerReview />
//       <HelpPage />
//     </>
//   );
// };

// export default Home;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import Peace from '../components/Peace';
// import Testimonials from '../components/Testimonials';
// import Technicians from '../components/Technicians';
// import HelpPage from '../sections/HelpPage';
// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import exampleImage from '../assets/mic.png';
// import PopularServices from './Popularservice';


// const Slider = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
//   const navigate = useNavigate(); // Use navigate for routing

//   const handleNavigation = (path) => {
//     navigate(path); // Navigate programmatically
//     setDropdownOpen(false); // Close the dropdown after navigation
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
//   };
//   return (
//     <>
//       {dropdownOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-30"
//           onClick={() => setDropdownOpen(false)} // Close dropdown on clicking outside
//         ></div>
//       )}
//       <div className="min-h-screen flex items-center justify-center xl:mt-[-153px] 2xl:mt-[-153px]">
//         <header className="bg-blue-500 h-[600px] xl:w-[1836px] 2xl:w-[1836px] relative flex items-center">
//           <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//             <div className="text-white lg:w-1/2 p-8 ml-[203px]">
//               <h1 className="text-4xl lg:text-5xl font-semibold mb-4 font-sans">
//                 Get Online Support for your{' '}
//                 <span className="font-bold font-sans">Streaming Device</span>
//               </h1>
//               <p className="mb-6 font-sans">
//                 The best tech solution, ready to help you - anytime, anywhere.
//               </p>
//               <div className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4">
//                 <button className="flex items-center justify-between w-full font-sans">
//                   I need help with...
//                   {dropdownOpen && (
//                   <ul className="absolute top-full mt-2 left-0 bg-white shadow-md w-full z-50">
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/mobile')}
//                     >
//                       <MobileFriendlyIcon className="mr-2 1" /> {/* Mobile Icon */}
//                       Mobile
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/wifi')}
//                     >
//                       <WifiIcon className="mr-2" /> {/* WiFi Icon */}
//                       WiFi
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/computer')}
//                     >
//                       <ComputerIcon className="mr-2" /> {/* Computer Icon */}
//                       Computer
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/printer')}
//                     >
//                       <PrintIcon className="mr-2" /> {/* Printer Icon */}
//                       Printer
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/audio-video')}
//                     >
//                       <AudiotrackIcon className="mr-2" /> {/* Audio & Video Icon */}
//                       Audio & Video
//                     </li>
//                   </ul>
//                 )}
//                   <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
// //           <svg
//             width="2194"
//             height="1228"
//             viewBox="0 0 2194 1228"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="absolute inset-0 w-full h-full object-cover"
//           >
//             <path
//               opacity="0.1"
//               d="M1661.18 4.10852C2177.74 -85.3354 2513.48 1316.27 1726.79 1223.6C940.096 1130.92 1020.29 934.64 388.984 1154.04C-242.321 1373.45 -66.4286 -150.289 637.244 168.376C1340.92 487.042 1144.62 93.5524 1661.18 4.10852Z"
//               fill="white"
//             />
//           </svg>
//         </div>
//                 </button>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <img
//                 src={exampleImage}
//                 alt="Support Staff"
//                 className="max-w-full w-[370] h-[460px] mt-[90px] object-cover"
//               />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Thousands of Techs Nationwide
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Service as Soon as Today
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <CheckCircleOutlineIcon
//                 className="mr-2"
//                 style={{ color: '#1e3a8a' }}
//               />
//               Don't Pay Until It’s Done
//             </div>
//           </div>
//         </header>
//       </div>

//       <section className="">
//       </section>


//       <PopularServices />
//       <Peace />
//       <Testimonials />
//       <Technicians />
//       <HelpPage />
//     </>
//   );
// };

// export default Slider;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Peace from '../components/Peace';
// import Testimonials from '../components/Testimonials';
// import Technicians from '../components/Technicians';
// import HelpPage from '../sections/HelpPage';
// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import WifiIcon from '@mui/icons-material/Wifi';
// import ComputerIcon from '@mui/icons-material/Computer';
// import PrintIcon from '@mui/icons-material/Print';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
// import TabletIcon from '@mui/icons-material/Tablet';
// import exampleImage from '../assets/mic.png';
// import PopularServices from './Popularservice';

// const Slider = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
//   const navigate = useNavigate(); // Use navigate for routing

//   const handleNavigation = (path) => {
//     navigate(path); // Navigate programmatically
//     setDropdownOpen(false); // Close the dropdown after navigation
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
//   };

//   return (
//     <>
//       {dropdownOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-30"
//           onClick={() => setDropdownOpen(false)} // Close dropdown on clicking outside
//         ></div>
//       )}
//       <div className="min-h-screen flex items-center justify-center xl:mt-[-153px] 2xl:mt-[-153px]">
//         <header className="bg-blue-500 h-[600px] xl:w-[1836px] 2xl:w-[1836px] relative flex items-center">
//           <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//             <div className="text-white lg:w-1/2 p-8 ml-[203px]">
//               <h1 className="text-[44px] lg:text-5xl font-semibold mb-4 font-sans">
//                 Get Online Support for your{' '}
//                 <span className="font-bold font-sans">Streaming Device</span>
//               </h1>
//               <p className="mb-6 font-sans">
//                 The best tech solution, ready to help you - anytime, anywhere.
//               </p>
//               <div className="relative">
//                 <button
//                   className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4 flex justify-between items-center font-sans xl:w-[616px] 2xl:w-[616px] text-[24px]"
//                   onClick={toggleDropdown} // Toggle the dropdown
//                 >
//                   I need help with...
//                   <ArrowDropDownIcon className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
//                 {dropdownOpen && (
//                   <ul className="absolute left-0 right-0 bg-white shadow-md mt-2 z-50 rounded-md text-[#384c5e] text-[20px] font-sans">
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Sprinters')}
//                     >
//                       <PrintIcon className="mr-2" />
//                       Printer
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Scomputer')}
//                     >
//                       <ComputerIcon className="mr-2" />
//                       Computer
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Stab')}
//                     >
//                       <TabletIcon className="mr-2" />
//                       Tab
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Swifi')}
//                     >
//                       <WifiIcon className="mr-2" />
//                       WiFi & Network
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center h-[64px] w-[616px]"
//                       onClick={() => handleNavigation('/Smobile')}
//                     >
//                       <MobileFriendlyIcon className="mr-2" />
//                       Mobile
//                     </li>


//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Saudio')}
//                     >
//                       <AudiotrackIcon className="mr-2" />
//                       Audio & Video
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <img
//                 src={exampleImage}
//                 alt="Support Staff"
//                 className="max-w-full w-[370] h-[460px] mt-[90px] object-cover"
//               />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Thousands of Techs Nationwide
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Service as Soon as Today
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <CheckCircleOutlineIcon
//                 className="mr-2"
//                 style={{ color: '#1e3a8a' }}
//               />
//               Don't Pay Until It’s Done
//             </div>
//           </div>
//         </header>
//       </div>

//       <section className="">
//       </section>

//       <PopularServices />
//       <Peace />
//       <Testimonials />
//       <Technicians />
//       <HelpPage />
//     </>
//   );
// };

// export default Slider;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Peace from '../components/Peace';
// import Testimonials from '../components/Testimonials';
// import Technicians from '../components/Technicians';
// import HelpPage from '../sections/HelpPage';
// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import WifiIcon from '@mui/icons-material/Wifi';
// import ComputerIcon from '@mui/icons-material/Computer';
// import PrintIcon from '@mui/icons-material/Print';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import TabletIcon from '@mui/icons-material/Tablet';
// import exampleImage from '../assets/mic.png';
// import PopularServices from './Popularservice';
// import PrinterProductList from './product/ProductsListing';
// import Goodlooking from '../components/Goodlooking';

// const Slider = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
//   const navigate = useNavigate(); // Use navigate for routing

//   const handleNavigation = (path) => {
//     navigate(path); // Navigate programmatically
//     setDropdownOpen(false); // Close the dropdown after navigation
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
//   };

//   return (
//     <>
//       {dropdownOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-30"
//           onClick={() => setDropdownOpen(false)} // Close dropdown on clicking outside
//         ></div>
//       )}
//       <div className="2xl:h-[600px] flex items-center justify-center ">
//         <header className="bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366] h-[600px] xl:w-[1836px] 2xl:w-[1836px] relative flex items-center">
//           <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//             <div className="text-white lg:w-1/2 p-8 ml-[203px]">
//               <h1 className="text-[44px] lg:text-5xl font-semibold mb-4 font-sans">
//               Get Online Support for All{' '}
//                 <span className="font-bold font-sans">Your Streaming Device</span>
//               </h1>
//               <p className="mb-6 font-sans text-[20px]">
//                 The best tech solution, ready to help you - anytime, anywhere.
//               </p>
//               <div className="relative">
//                 <button
//                   className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4 flex justify-between items-center font-sans xl:w-[616px] 2xl:w-[616px] text-[24px]"
//                   onClick={toggleDropdown} // Toggle the dropdown
//                 >
//                   I need help with...
//                   <ArrowDropDownIcon className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
//                 {dropdownOpen && (
//                   <ul className="absolute left-0 right-0 bg-white shadow-md mt-2 z-50 rounded-md text-[#384c5e] text-[20px] font-sans">
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Sprinters')}
//                     >
//                       <div className="mr-2 flex items-center justify-center w-8 h-8">
//                         <PrintIcon className="mr-2" />
//                       </div>
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'>Printer</p>
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Scomputer')}
//                     >
//                       <ComputerIcon className="mr-2" />
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'>Computer</p>
                      
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Stab')}
//                     >
//                       <TabletIcon className="mr-2" />
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'>Tab</p>
                      
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Swifi')}
//                     >
//                       <WifiIcon className="mr-2" />
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'> WiFi & Network</p>
                     
//                     </li>
//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center h-[64px] w-[616px]"
//                       onClick={() => handleNavigation('/Smobile')}
//                     >
//                       <MobileFriendlyIcon className="mr-2" />
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'>Mobile</p>
                      
//                     </li>


//                     <li
//                       className="p-2 hover:bg-blue-100 cursor-pointer flex items-center"
//                       onClick={() => handleNavigation('/Saudio')}
//                     >
//                       <AudiotrackIcon className="mr-2" />
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'> Audio & Video</p>
                     
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <img
//                 src={exampleImage}
//                 alt="Support Staff"
//                 className="max-w-full w-[370] h-[460px] mt-[90px] object-cover"
//               />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Thousands of Techs Nationwide
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Service as Soon as Today
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <CheckCircleOutlineIcon
//                 className="mr-2"
//                 style={{ color: '#1e3a8a' }}
//               />
//               Don't Pay Until It’s Done
//             </div>
//           </div>
//         </header>
//       </div>

//       <section className="">
//       </section>

//       <PopularServices />
//       <Peace />
//       <Goodlooking />

//       <PrinterProductList />

//       <Testimonials />

//       <Technicians />
//     </>
//   );
// };

// export default Slider;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Peace from '../components/Peace';
// import Testimonials from '../components/Testimonials';
// import Technicians from '../components/Technicians';
// import BuildIcon from '@mui/icons-material/Build';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
// import WifiIcon from '@mui/icons-material/Wifi';
// import ComputerIcon from '@mui/icons-material/Computer';
// import PrintIcon from '@mui/icons-material/Print';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import TabletIcon from '@mui/icons-material/Tablet';
// import exampleImage from '../assets/mic.png';
// import PopularServices from './Popularservice';
// import PrinterProductList from './product/ProductsListing';
// import Goodlooking from '../components/Goodlooking';

// const deviceNames = [
//   "Streaming Device",
//   "Printer",
//   "Audio & Video",
//   "WiFi & Network",
// ];

// const Slider = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//     setDropdownOpen(false);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDeviceIndex((prevIndex) => (prevIndex + 1) % deviceNames.length);
//     }, 3000); // Change device every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {dropdownOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-30 z-30"
//           onClick={() => setDropdownOpen(false)}
//         ></div>
//       )}
//       <div className="2xl:h-[600px] flex items-center justify-center">
//         <header className="bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366] h-[600px] xl:w-[1836px] 2xl:w-[1836px] relative flex items-center">
//           <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
//             <div className="text-white lg:w-1/2 p-8 ml-[203px]">
//               <h1 className="text-[44px] lg:text-5xl font-semibold mb-4 font-sans">
//                 Get Online Support for All{' '}
//                 <span className="font-bold font-sans">
//                   Your
//                 </span>
//                 <span
//                   style={{ padding: '14px' }}
//                   className={`font-bold font-sans transition-transform duration-700 inline-block ${currentDeviceIndex === 0 ? "animate-out" : "animate-in"}`}
//                 >
//                   {deviceNames[currentDeviceIndex]}
//                 </span>
//               </h1>
//               <p className="mb-6 font-sans text-[20px]">
//                 The best tech solution, ready to help you - anytime, anywhere.
//               </p>
//               <div className="relative">
//                 <button
//                   className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4 flex justify-between items-center font-sans xl:w-[616px] 2xl:w-[616px] text-[24px]"
//                   onClick={toggleDropdown}
//                 >
//                   I need help with...
//                   <ArrowDropDownIcon className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
//                 {dropdownOpen && (
//                   <ul className="absolute left-0 right-0 bg-white shadow-md mt-2 z-50 rounded-md text-[#384c5e] text-[20px] font-sans">
//                     <li className="p-2 hover:bg-blue-100 cursor-pointer flex items-center" onClick={() => handleNavigation('/Sprinters')}>
//                       <div className="mr-2 flex items-center justify-center w-8 h-8">
//                         <PrintIcon className="mr-2" />
//                       </div>
//                       <p className='text-[24px] font-semibold font-sens text-[#191970]'>Printer</p>
//                     </li>
//                     {/* Other list items... */}
//                   </ul>
//                 )}
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <img src={exampleImage} alt="Support Staff" className="max-w-full w-[370] h-[460px] mt-[90px] object-cover" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Thousands of Techs Nationwide
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Service as Soon as Today
//             </div>
//             <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
//               <CheckCircleOutlineIcon className="mr-2" style={{ color: '#1e3a8a' }} />
//               Don't Pay Until It’s Done
//             </div>
//           </div>
//         </header>
//       </div>

//       <PopularServices />
//       <Peace />
//       <Goodlooking />
//       <PrinterProductList />
//       <Testimonials />
//       <Technicians />
//     </>
//   );
// };

// export default Slider;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Peace from '../components/Peace';
import Testimonials from '../components/Testimonials';
import Technicians from '../components/Technicians';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import WifiIcon from '@mui/icons-material/Wifi';
import ComputerIcon from '@mui/icons-material/Computer';
import PrintIcon from '@mui/icons-material/Print';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TabletIcon from '@mui/icons-material/Tablet';
import exampleImage from '../assets/mic.png';
import PopularServices from './Popularservice';
import PrinterProductList from './product/ProductsListing';
import Goodlooking from '../components/Goodlooking';
// import './index.css'; // Make sure to import your CSS file

const deviceNames = [
  "Printer",
  "Streaming Device",
  "Streaming Device",
  "Audio & Video",
  "WiFi & Network",
  "Computer",
  "Mobile",
  "Tab"
];

const Slider = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeviceIndex((prevIndex) => (prevIndex + 1) % deviceNames.length);
    }, 3000); // Change device every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}
      <div className="2xl:h-[600px] flex items-center justify-center">
        <header className="bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366] h-[600px] xl:w-[1836px] 2xl:w-[1836px] relative flex items-center">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="text-white lg:w-1/2 p-8 ml-[203px]">
              <h1 className="text-[44px] lg:text-5xl font-semibold mb-4 font-sans">
                Get Online Support for All{' '}
                <span className="font-bold font-sans">Your </span>
                <span
                  style={{ padding: '5px' }}
                  className={`font-bold font-sans transition-transform duration-700 inline-block ${
                    currentDeviceIndex === 0 ? "animate-out" : "animate-in"
                  }`}
                >
                  {deviceNames[currentDeviceIndex]}
                </span>
              </h1>
              <p className="mb-6 font-sans text-[20px]">
                The best tech solution, ready to help you - anytime, anywhere.
              </p>
              <div className="relative">
                <button
                  className="bg-white text-blue-500 rounded-lg shadow-lg w-full lg:w-2/3 p-4 flex justify-between items-center font-sans xl:w-[616px] 2xl:w-[616px] text-[24px]"
                  onClick={toggleDropdown}
                >
                  I need help with...
                  <ArrowDropDownIcon className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 right-0 bg-white shadow-md mt-2 z-50 rounded-md text-[#384c5e] text-[20px] font-sans">
                    <li className="p-2 hover:bg-blue-100 cursor-pointer flex items-center" onClick={() => handleNavigation('/Sprinters')}>
                      <div className="mr-2 flex items-center justify-center w-8 h-8">
                        <PrintIcon className="mr-2" />
                      </div>
                      <p className='text-[24px] font-semibold font-sens text-[#191970]'>Printer</p>
                    </li>
                    <li className="p-2 hover:bg-blue-100 cursor-pointer flex items-center" onClick={() => handleNavigation('/Saudio')}>
                      <AudiotrackIcon className="mr-2" />
                      <p className='text-[24px] font-semibold font-sens text-[#191970]'>Audio & Video</p>
                    </li>
                    <li className="p-2 hover:bg-blue-100 cursor-pointer flex items-center" onClick={() => handleNavigation('/Swifi')}>
                      <WifiIcon className="mr-2" />
                      <p className='text-[24px] font-semibold font-sens text-[#191970]'>WiFi & Network</p>
                    </li>
                    <li className="p-2 hover:bg-blue-100 cursor-pointer flex items-center" onClick={() => handleNavigation('/Scomputer')}>
                      <ComputerIcon className="mr-2" />
                      <p className='text-[24px] font-semibold font-sens text-[#191970]'>Computer</p>
                    </li>
                    <li className="p-2 hover:bg-blue-100 cursor-pointer flex items-center" onClick={() => handleNavigation('/Smobile')}>
                      <MobileFriendlyIcon className="mr-2" />
                      <p className='text-[24px] font-semibold font-sens text-[#191970]'>Mobile</p>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={exampleImage} alt="Support Staff" className="max-w-full w-[370] h-[460px] mt-[90px] object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-100 py-4">
            <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
              <BuildIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Thousands of Techs Nationwide
            </div>
            <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
              <AccessTimeIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Service as Soon as Today
            </div>
            <div className="text-[#0992E9] flex items-center text-[20px] font-sans">
              <CheckCircleOutlineIcon className="mr-2" style={{ color: '#1e3a8a' }} />
              Don't Pay Until It’s Done
            </div>
          </div>
        </header>
      </div>

      <PopularServices />
      <Peace />
      <Goodlooking />
      <PrinterProductList />
      <Testimonials />
      <Technicians />
    </>
  );
};

export default Slider;

