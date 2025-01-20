import React from "react";

const Technicians = () => {
  const technicians = [
    {
      name: "Glenn H.",
      role: "TV and AV Mounting Specialist",
      quote: "I love helping people solve their tech problems...",
      image: "https://www.zdnet.com/a/img/resize/343ec8ec0682f552b3b41da7e21fabd64d6eaa7e/2022/02/17/ede1e16d-3f42-44e4-834a-dcc5f37104af/software-developer-special-report-coding-programming.jpg?auto=webp&width=1280",
    },
    {
      name: "Jose C.",
      role: "Smart Home Specialist",
      quote: "I've always been interested in technology...",
      image: "https://bairesdev.mo.cloudinary.net/blog/2021/09/software-developer-1.jpg?tx=w_1920,q_auto",
    },
    {
      name: "Katie F.",
      role: "Mobile Specialist",
      quote: "It really makes me happy to see customers so excited...",
      image: "https://www.zdnet.com/a/img/resize/1e8b4068c5066d15a766d0846aafd196528fef5e/2022/10/05/e824d278-e5a1-4d3b-be1c-4d3e3f4cfa1b/developer-coder-woman-office-tech-team-looking-over-desk.jpg?auto=webp&width=1280",
    },
  ];

  return (
    <div className="bg-white py-10">
      <h2 className="text-center text-3xl font-bold mb-6 text-[#0C71C3]">Meet our Technicians</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        {technicians.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tech.image}
              alt={tech.name}
              className="rounded-full w-[201px] h-[198px] h-32 object-cover"
            />
            <p className="mt-4 font-bold text-xl">{tech.name}</p>
            <p className="text-gray-500">{tech.role}</p>
            <p className="text-center mt-2 px-6 text-gray-700">{tech.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technicians;
