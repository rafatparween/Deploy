import React from 'react';
import MonitorIcon from '@mui/icons-material/Monitor';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import WifiIcon from '@mui/icons-material/Wifi';
import RadioIcon from '@mui/icons-material/Radio';

const HelpPage = () => {
  return (
    <main className="bg-blue-500 flex items-center justify-center py-6">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-6xl mx-auto text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-[#0C71C3]">
          How Can We Help?
        </h2>
        <p className="text-lg mb-2 text-gray-700">
          We offer contactless online support and services
        </p>
        <p className="text-lg mb-8 text-gray-700">Book a service today!</p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <MonitorIcon style={{ color: '#0C71C3' }} fontSize="large" />
            <p className="text-lg text-gray-700 ml-4">Computer and Printers</p>
          </div>

          <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <StayCurrentPortraitIcon
              style={{ color: '#0C71C3' }}
              fontSize="large"
            />
            <p className="text-lg text-gray-700 ml-4">Mobile Devices</p>
          </div>

          <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <WifiIcon style={{ color: '#0C71C3' }} fontSize="large" />
            <p className="text-lg text-gray-700 ml-4">WiFi & Networks</p>
          </div>

          <div className="flex items-center justify-center p-4 bg-[#f5f5f5] rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <RadioIcon style={{ color: '#0C71C3' }} fontSize="large" />
            <p className="text-lg text-gray-700 ml-4">Audio & Video</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HelpPage;
