import React, { useState } from 'react';
import CustomerReview from '../../sections/CustomerReview';
import ComputerService from './ComputerService';
import PrinterService from './PrinterService';

const Services = () => {
  const [activeService, setActiveService] = useState('computers');

  return (
    <>
      <main>
        <div className="relative bg-blue-500 py-12 mt-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900')",
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
              Computer & Printers
            </p>
          </div>
        </div>

        {/* ----------------------------------------- */}
        <div className="bg-white">
          <div className="flex justify-center items-center gap-10 p-4">
            <button
              className={`px-9 py-2 shadow-2xl font-bold ${
                activeService === 'computers'
                  ? 'border-b-2 border-[#0C71C3] text-[#0C71C3]'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveService('computers')}
            >
              Computers
            </button>
            <button
              className={`px-9 py-2 shadow-2xl font-bold ${
                activeService === 'printers'
                  ? 'border-b-2 border-[#0C71C3] text-[#0C71C3]'
                  : 'text-[#0C71C3]'
              }`}
              onClick={() => setActiveService('printers')}
            >
              Printers
            </button>
          </div>
        </div>
        {/* ----------------------------------------- */}

        {activeService === 'computers' && <ComputerService />}
        {activeService === 'printers' && <PrinterService />}

        {/* --------------- SOON SERVICE -------------  */}

        <section className="bg-gray-100 shadow-inner py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left ml-10">
              <p className="text-3xl font-bold text-[#0C71C3] mb-4">
                Support Available 24/7
              </p>
              <p className="text-lg text-gray-700">
                Get online support anytime, day or night. Connect with us online
                or by phone in minutes for immediate assistance!
              </p>
            </div>
            <div className="flex-1">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://img.freepik.com/free-photo/smiley-couple-home-sofa-with-laptop_23-2148560944.jpg?t=st=1717153174~exp=1717156774~hmac=8e66e53f64cc2a2be7a3119aaba39edd67357fbf5e899b17ebb597a93833cb2c&w=826"
                alt="Online support"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
