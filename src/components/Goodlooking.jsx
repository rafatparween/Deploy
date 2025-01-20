import React from 'react';

export default function Goodlooking() {
  return (
    <section className="relative flex items-center justify-between bg-blue-900 text-white py-10 px-6 h-[500px]">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source
          src="https://media.istockphoto.com/id/135906313/video/futuristic-circuit-board-with-moving-electrons-loopable-technology-transparent-blue.mp4?s=mp4-640x640-is&k=20&c=3T2Cy8cSfNTiPaP_ZxD8FNUxAUUaX887t3vXm8r5msQ="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 w-1/2 space-y-6">
        {/* <h2 className="text-xl font-semibold ">Unlock Your Business Potential</h2> */}
        <h1 className="text-4xl font-bold">Buy More. Get More.</h1>
        <p className='text-[24px]'>
          Elevate your business with our cutting-edge printers, tablets, Wi-Fi and networking solutions, as well as mobile audio and video technology. Experience the difference in productivity and performance.
        </p>
        <p>
          Get rewarded on your purchase for your next buy. *Terms and conditions apply.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
}
