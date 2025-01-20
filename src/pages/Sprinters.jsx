import React from "react";
import Testimonials from "../components/Testimonials";

const Sprinters = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <header className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-[44px] font-sans text-[#263746] font-medium">
              Printer
            </h1>
            <div className="flex mt-4">
              <div className="mr-8">
                <button className="text-[#263746] text-[16px] border-b-2 border-blue-500 font-sans">
                  Routers
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-10">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div>
              <h2 className="text-[24px] font-sans text-[#263746] font-semibold mb-6">Installation & Setup</h2>
              <div className="p-4 bg-white rounded-lg shadow-md w-[310px] h-[184px] flex flex-col items-center justify-center">
                <img
                  src="https://icons.veryicon.com/png/o/business/colorful-office-icons/printer-88.png"
                  alt="WiFi Setup"
                  className="w-[70px] h-[70px] mb-2"
                />
                <p className="text-gray-700 font-sans text-[16px] text-center">
                  New Printer Connection Setup
                </p>
              </div>

            </div>

            {/* Right Section with Images */}
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/5de2db6d3719a1e2f3e4454c/64f29c9188ced1d23f099a1f_9%20Best%20Printers%20for%20Graphic%20Design%20in%202023%20(1).webp"
                alt="Router"
                className="w-100 h-auto mt-[-114px]"
              />
            </div>
          </section>

          {/* Support Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 w-1/2">Support</h2>

            {/* Wrapper div to align the boxes in a row */}
            <div className="flex space-x-4">
              {/* First Box */}
              <div className="p-4 bg-white rounded-lg shadow-md w-[310px] h-[184px] flex flex-col items-center justify-center">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-printer-icon-download-in-svg-png-gif-file-formats--print-copier-document-iconhub-pack-miscellaneous-icons-1093488.png"
                  alt="WiFi Setup"
                  className="w-[100px] h-[100px] mb-2"
                />
                <p className="text-gray-700 font-sans text-[16px] text-center">
                  Printer Connectivity Support

                </p>
              </div>

              {/* Second Box */}
              <div className="p-4 bg-white rounded-lg shadow-md w-[310px] h-[184px] flex flex-col items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1670/1670718.png"
                  alt="Example Alt Text"
                  className="w-[100px] h-[100px] mb-2"
                />
                <p className="text-gray-700 font-sans text-[16px] text-center">
                  Printer Signal Extension
                </p>
              </div>
            </div>
          </section>

        </main>
      </div>
      <div>
        <div className="h-[204px] w-full bg-blue-500 flex flex-col justify-center items-center">
          <h1 className="text-white font-sans text-[56px]">33,601</h1>
          <h2 className="text-white text-[16px] font-sans">Printer Services Completed</h2>
        </div>
      </div>
      <div className="bg-blue-100 h-[700px] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20 xl:mt-[-5px] 2xl:mt-[-5px]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 mt-[76px]">
              <h1 className="text-[30px] font-bold mb-4 font-sans">
                Service as soon as today{' '}
              </h1>
              <p className="text-[#263746] text-[16px] mb-4 font-sans w-[480px] ">
                Enjoy the convenience of professional in-home service available throughout the day, from morning until evening. You can easily schedule an appointment online or give us a call, and we’ll ensure that your service is arranged within minutes. In many cases, we can provide same-day service to address your needs as quickly as possible!

              </p>
            </div>
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <img
                src="https://sm.pcmag.com/pcmag_me/photo/default/printer-used-by-people1779640_9zx8.jpg"
                alt="Refurbished Printer"
                className="rounded-lg shadow-xl h-full object-cover h-[500px] w-[900px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className="h-[700px] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20 xl:mt-[-72px] 2xl:mt-[-72px]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <img
                src="https://img.freepik.com/premium-photo/printer-computer-office-table_93675-38449.jpg"
                alt="Refurbished Printer"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-4 mt-[143px]">
              <h1 className="text-[30px] font-bold mb-4 font-sans">
                Ready to book your service?{' '}
              </h1>
              <button className="w-[145px] h-[50px] bg-blue-500">
                <h1 className="text-white text-[16px] font-sans">Get Started</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sprinters;
