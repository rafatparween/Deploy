import React from 'react';

const ExpertInHomeService = () => {
  return (
    <div className="bg-white text-[#0f766e] py-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Expert Nationwide Service
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.hellotech.com/client-assets/trusted-techs_2420b019cc76b09a4c1ef8572528f31d.svg"
              alt="Trusted Techs"
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Trusted Techs</h4>
            <p className="text-gray-700">
              Professional techs. Each expert is hand-selected,
              background-checked, and insured.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.hellotech.com/client-assets/convenient-booking_c796047a9ec10a6ad8363f93e4a4aaed.svg"
              alt="Convenient Booking"
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Convenient Booking</h4>
            <p className="text-gray-700">
              In-home service from 9am-9pm. Book online or by phone in minutes
              for service as soon as today.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.hellotech.com/client-assets/ht-guarantee_9ca4df64eb510caf178f2ccb2e9aea46.svg"
              alt="HelloTech Guarantee"
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">HelloTech Guarantee</h4>
            <p className="text-gray-700">
              We're committed to your complete satisfaction with our service. If
              you're not 100% happy, we'll do whatever it takes to make it
              right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertInHomeService;
