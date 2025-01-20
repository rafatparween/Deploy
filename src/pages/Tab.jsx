import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Frequently from './Frequently';
import { TabTwoTone } from '@mui/icons-material';
import PeaceOfMindGuarantee from '../sections/PeaceOfMindGuarantee';
import Testimonials from '../components/Testimonials';

const Tab = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center mt-[-193px]">
        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">

            {/* Left Image Section */}
            <div className="lg:w-1/2">
              <img
                src="https://img.freepik.com/premium-photo/business-people-using-digital-tablet_53419-7986.jpg"
                alt="TV Mounting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content Section */}
            <div className="lg:w-1/2 p-8 ml-[23px]">
              <h1 className="text-[32px] mb-2 font-sans">Tab</h1>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-gray-500 ml-2">(28,308)</span>
              </div>

              {/* Pricing Form */}
              <div className="bg-gray-100 p-6 rounded-md mb-4 w-[552px] h-[215px]">
                <h2 className="text-[16px] font-sans mb-2">Check local pricing</h2>
                <h2 className="text-[16px] font-sans mb-2 text-gray-400">Zip Code</h2>

                {/* Flexbox for Zip Code and Button */}
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="border border-blue-500 p-2 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-teal-500 w-[139px] h-[46px]"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-1/2 xl:w-[321px] 2xl:w-[321px] h-[48px] xl:ml-[100px] 2xl:ml-[100px]">
                    Get Your Price
                  </button>
                </div>

                <p className="mt-4 text-[16px] font-sans">
                  Questions? <a href="#" className="text-blue-500">Chat with us</a> or call <a href="tel:1-833-647-2456" className="text-blue-500">1-833-647-2456</a> for help 24/7.
                </p>
              </div>

              {/* Service List */}
              <ul className="text-gray-700 text-[14px] space-y-2 font-sans">
                <li>✓ Install a bracket and mount a tablet between 7" - 12" in size.</li>
                <li>✓ Connect all necessary video and basic audio components</li>
                <li>✓ Neatly dress wires</li>
                <li>✓ Configure any necessary peripheral devices</li>
                <li>✓ In-wall or external cord concealment is available for additional cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-blue-500 py-4 mb-[150px]">
        <div className="text-[white] flex items-center text-[20px] font-sans">
          <BuildIcon className="mr-2" style={{ color: 'white' }} />
          Thousands of Techs Nationwide
        </div>
        <div className="text-[white] flex items-center text-[20px] font-sans">
          <AccessTimeIcon className="mr-2" style={{ color: 'white' }} />
          Service as Soon as Today
        </div>
        <div className="text-[white] flex items-center text-[20px] font-sans">
          <CheckCircleOutlineIcon
            className="mr-2"
            style={{ color: 'white' }}
          />
          Don't Pay Until It’s Done
        </div>
      </div>
      <Frequently/>
      <PeaceOfMindGuarantee/>
      <Testimonials/>

    </>
  );
};

export default Tab;
