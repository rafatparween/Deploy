// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Sanaya khan.",
//       location: "Kashmeer,Hemis",
//       date: "03/29/2024",
//       review: "I recently bought a refurbished laser printer from Hewlett Hub Solutions, and it works like new. Great print quality and excellent customer service. Highly recommend.",
//       rating: 5,
//       verified: true,
//     },
//     {
//       name: "Darryl S.",
//       location: "Columbia, MD",
//       date: "08/28/2024",
//       review: "Hewlett Hub Solutions surpassed my expectations. The refurbished inkjet printer I purchased was in top-notch condition, and the price couldn't be beat. Their team offered excellent support every step of the way.",
//       rating: 5,
//       verified: true,
//     },
//     {
//       name: "Michael P.",
//       location: "Rancho Cucamonga, CA",
//       date: "08/30/2024",
//       review: "The multifunction printer I purchased from Hewlett hub solutions is an incredible find. It looks and works just like new. I'm really impressed with their quality control and meticulous attention to detail. I’d definitely buy from them again.",
//       rating: 5,
//       verified: true,
//     },
//   ];

//   return (
//     <div className="bg-white py-10">
//       <h2 className="text-center text-3xl font-bold mb-6 text-[#0C71C3] mt-[30px]">What our customers say</h2>
//       <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
//             <div className="flex items-center justify-between">
//               <div className="text-yellow-500">
//                 {"★".repeat(testimonial.rating)}
//               </div>
//               <div className="text-gray-500 text-sm">{testimonial.date}</div>
//             </div>
//             <p className="mt-4">{testimonial.review}</p>
//             <div className="mt-4">
//               <p className="font-bold">{testimonial.name}</p>
//               <p className="text-gray-500 text-sm">{testimonial.location}</p>
//               {testimonial.verified && (
//                 <p className="text-blue-500 text-sm">Verified ✓</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



import React, { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  const scroll = (direction) => {
    if (testimonialsRef.current) {
      const { scrollLeft, clientWidth } = testimonialsRef.current;
      const cardWidth = 436; // Width of each testimonial card
      const gap = 16; // Space between cards
      const cardsToScroll = 3; // Number of visible cards
      const scrollAmount = direction === "left"
        ? scrollLeft - (cardWidth + gap) * cardsToScroll
        : scrollLeft + (cardWidth + gap) * cardsToScroll;
      testimonialsRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Sanaya Khan",
      location: "Kashmeer, Hemis",
      date: "03/29/2024",
      review: "Sanaya Khan did an outstanding job with my printer installation. She took the time to explain every step of the setup process, including the features that were new to me. She also helped me understand how to maintain the printer and avoided installing unnecessary software. Her attention to detail and willingness to ensure I was comfortable with the setup made this experience exceptional.",
      rating: 5,
      verified: true,
    },
    {
      name: "Raj K.",
      location: "Toronto, ON",
      date: "09/18/2024",
      review: "Raj K. was fantastic in setting up my mobile device. He walked me through the setup process and pointed out essential features that I hadn’t used before. He also transferred my contacts and data from my old phone efficiently and removed redundant apps. The extra tips on managing battery life were particularly useful.",
      rating: 5,
      verified: true,
    },
    {
      name: "Clara N.",
      location: "Boston, MA",
      date: "09/30/2024",
      review: "Clara N. went above and beyond with my WiFi system installation. She not only set up the network but also customized the settings to improve signal strength throughout my home. She took the time to explain how to use the router’s features and provided tips on optimizing my network. Her thoroughness has significantly enhanced my internet experience.",
      rating: 5,
      verified: true,
    },
    {
      name: "Marcus T.",
      location: "Denver, CO",
      date: "09/25/2024",
      review: "Marcus T. was incredibly helpful with my audio and video system installation. He not only set up the equipment but also adjusted the settings to match my room's acoustics. He took the time to explain how to use the advanced features and provided advice on maintaining optimal sound and picture quality. His expertise made a huge difference in my overall experience.",
      rating: 5,
      verified: true,
    },
    {
      name: "Jasmine L.",
      location: "Philadelphia, PA",
      date: "09/27/2024",
      review: "Jasmine L. delivered exceptional service with my computer setup. She explained each part of the process and removed unnecessary software that was affecting performance. She also showed me how to use built-in tools to keep my computer running smoothly. Her detailed explanations and personalized advice were invaluable, making this a top-notch experience.",
      rating: 5,
      verified: true,
    },
    {
      name: "Ava S.",
      location: "San Francisco, CA",
      date: "09/22/2024",
      review: "Ava S. provided excellent service with my tablet setup. She carefully explained each step, including the features I might not have known about. She also made sure to uninstall unnecessary apps that were slowing down my device. I appreciated her detailed guidance and the thorough setup process, which has made using my tablet a breeze.",
      rating: 5,
      verified: true,
    },
  ];

  return (
    <div className="bg-white py-10 relative 2xl:w-[1431px] 2xl:ml-[231px] xl:w-[1414px] xl:ml-[52px]">
      <h2 className="text-center text-3xl font-bold mb-6 text-[#0C71C3] mt-[30px]">What our customers say</h2>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform text-black p-2 rounded-full shadow-md focus:outline-none ml-[-55px] transition-colors duration-300 z-10"
          onClick={() => scroll("left")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowBackIosIcon style={{ fontSize: '20px' }} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform  text-black p-2 rounded-full shadow-md focus:outline-none transition-colors duration-300 z-10"
          onClick={() => scroll("right")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowForwardIosIcon style={{ fontSize: '20px' }} />
        </button>
        <div
          ref={testimonialsRef}
          className="flex overflow-x-hidden"
          style={{ width: 'calc(100% - 64px)', padding: '0 16px' }}
        >
          <div className="flex" style={{ gap: '16px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex-shrink-0"
                style={{ width: '436px' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-yellow-500">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
                <p className="mt-4">{testimonial.review}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  {testimonial.verified && (
                    <p className="text-blue-500 text-sm">Verified ✓</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
