import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckIcon from '@mui/icons-material/Check';

const Facilities = () => {
  const items = [
    'Safety & Security',
    'Convenience',
    'Unlimited Support',
    'Reliability',
    'Peace of mind',
  ];

  return (
    <main>
      <section className="bg-blue-100 p-8 shadow-inner">
        <div className="flex gap-6 items-center justify-center  flex-col">
          <h2 className="text-3xl font-semibold text-center text-[#0C71C3]">
            Everything you get, in a nutshell
          </h2>

          <ul className="flex gap-5 bg-white px-5 py-2 shadow-2xl rounded">
            {items.map((value, index) => (
              <li key={index} className="flex items-center text-[#0C71C3]">
                <CheckIcon sx={{ color: '#0C71C3' }} />
                <span className="ml-2">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex justify-center items-center p-5">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8  w-[90%] ">
          <div className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <SupportAgentIcon sx={{ fontSize: '4.5rem', color: '#0C71C3' }} />
            <p className="text-center mt-2 text-lg font-bold text-[#0C71C3]">
              Online Tech Specialist
            </p>
            <p className="text-center text-[#0C71C3]">
              Unlimited, instant help with any connected device. No appointments
              needed.
            </p>
          </div>

          <div className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <ChatIcon sx={{ fontSize: '4rem', color: '#0C71C3' }} />
            <p className="text-center mt-2 text-lg font-bold text-[#0C71C3]">
              Unlimited 24/7 Online Support
            </p>
            <p className="text-center text-[#0C71C3]">
              Get free 'round-the-clock' support for computers, printers, and
              more.
            </p>
          </div>

          <div className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
            <VerifiedUserIcon sx={{ fontSize: '4rem', color: '#0C71C3' }} />
            <p className="text-center mt-2 text-lg font-bold text-[#0C71C3]">
              Premium Password Manager
            </p>
            <p className="text-center text-[#0C71C3]">
              Manage passwords securely, effortlessly, and across all devices
              with Dashlane.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Facilities;
