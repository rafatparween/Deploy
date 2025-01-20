// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import { CartContext } from './product/CartContext';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { cartItems } = useContext(CartContext);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-[white] z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[20px]">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center xl:ml-[-188px] 2xl:ml-[-188px]">
//             {/* <img className='h-[76px] w-[83px]' src='https://thumbs.dreamstime.com/b/hhs-letter-logo-design-black-background-creative-initials-concept-247683198.jpg'/> */}
            
//             <Link to="/" className="text-2xl text-[32px] text-[#0C71C3] xl:ml-[-60px] 2xl:ml-[-60px] font-sans">
//             Hewlett Hub solutions 
//             </Link>
//           </div>
//           <div className="hidden lg:flex lg:items-center lg:space-x-8">
//             <Link
//               to="/"
//               className="text-[black] hover:text-[blue] px-3 py-2 rounded-md 
//               hover:border border-[black] text-[22px] font-sans "
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className=" hover:border border-[blue] hover:text-[blue] px-3 py-2 rounded-md  text-[black] text-[22px] font-sans"
//             >
//               About
//             </Link>
//             {/* <Link
//               to="/service"
//               className=" hover:border border-[#1e40af] hover:text-[#0f766e] px-3 py-2 rounded-md text-sm font-medium text-[black]"
//             >
//               Service
//             </Link> */}
//             <Link
//               to="/product"
//               className=" hover:border border-[blue] hover:text-[blue] px-3 py-2 rounded-md text-[black] text-[22px] font-sans"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className=" hover:border border-[blue] hover:text-[blue] px-3 py-2 rounded-md text-[black] text-[22px] font-sans"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/membership"
//               className=" hover:border border-[blue] hover:text-[blue] px-3 py-2 rounded-md text-[black] text-[22px] font-sans"
//             >
//               Membership
//             </Link>

//             <div className="relative">
//               <Link
//                 to="/cart"
//                 className=" hover:border border-[#0f766e] hover:text-[#1e40af] px-3 py-2 rounded-md flex items-center relative text-[blacj] text-[22px] font-sans"
//               >
//                 <LocalMallIcon sx={{ fontSize: '2rem' }} />
//                 {cartItems.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs text-[black]">
//                     {cartItems.length}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center lg:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500 text-[white]"
//               aria-controls="mobile-menu"
//               aria-expanded={isMobileMenuOpen}
//               onClick={toggleMobileMenu}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="red"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//               <svg
//                 className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}
//         id="mobile-menu"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link
//             to="/"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             About
//           </Link>
//           <Link
//             to="/service"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Service
//           </Link>
//           <Link
//             to="/product"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Product
//           </Link>
//           <Link
//             to="/contact"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contact
//           </Link>
//           <Link
//             to="/membership"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Membership
//           </Link>

//           <Link
//             to="/cart"
//             className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] px-3 py-2 rounded-md text-sm font-medium relative"
//           >
//             <LocalMallIcon sx={{ fontSize: '2rem' }} />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from './product/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[120px]">
        {/* <img className='h-[76px] w-[83px]' src='https://www.theexaminer.com/sites/theexaminer.com/files/styles/article_420/public/2022-08/51565990_1813180982127321_4250422175833522176_n.png?itok=DFmEmPkY'/> */}
          <div className="flex items-center">
            <Link to="/" className="text-[39px] text-[#0C71C3] font-sans 2xl:ml-[-225px]">
              Hewlett Hub Solutions
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Center all items vertically */}
            <Link
              to="/"
              className="text-black hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center"
            >
              About
            </Link>
            <ScrollLink
              to="serviceSection"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center cursor-pointer"
            >
              Service
            </ScrollLink>
            <Link
              to="/membership"
              className="hover:text-blue px-3 py-2 rounded-md text-[23px] flex items-center"
            >
              Membership
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            About
          </Link>
          <ScrollLink
            to="serviceSection"
            smooth={true}
            duration={500}
            offset={-70}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue cursor-pointer"
          >
            Service
          </ScrollLink>
          <Link to="/membership" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            Membership
          </Link>
          <Link to="/cart" className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue">
            <LocalMallIcon sx={{ fontSize: '2rem' }} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




