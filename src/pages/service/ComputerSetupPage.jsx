import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CheckIcon } from '@heroicons/react/20/solid';
import FAQAccordion from '../../sections/FAQs';
import PeaceOfMindGuarantee from '../../sections/PeaceOfMindGuarantee';
import ExpertInHomeService from './ExpertInHomeService';
import { Link } from 'react-router-dom';

const ComputerSetupPage = () => {
  return (
    <>
      <main className="bg-white text-[#0f766e] p-6 mt-20">
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/premium-photo/happy-multiethnic-couple-formal-clothes-using-laptop-grey-background-copy-space_116547-8265.jpg?w=826"
              alt="computer setup"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Computer Setup</h2>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#fbbf24' }} />
              ))}
              <p className="ml-2 text-lg">1,222</p>
            </div>

            <section className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <p className="flex items-center text-lg">
                  <CheckCircleIcon className="mr-2" /> We Serve 12345!
                </p>
                <p className="text-sm text-gray-500 cursor-pointer hover:underline">
                  Different Zip Code?
                </p>
              </div>

              <div className="flex items-center mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <input
                  type="radio"
                  name="pricing"
                  id="standard-price"
                  className="mr-4"
                />
                <div className="flex-grow">
                  <p className="font-bold">Standard Price</p>
                  <p>$29+ additional fees</p>
                </div>

                <Link to="/computerFormPage">
                  <button className="ml-4 px-4 py-2 bg-[#0f766e] text-white rounded-md hover:bg-[#0d6155]">
                    BOOK NOW
                  </button>
                </Link>
              </div>

              <div className="space-y-2">
                {[
                  'Troubleshoot or setup one active email account',
                  'Configure account settings and features',
                  'Demonstrate webmail functionality',
                  `Depending on the nature of your request we may be able to offer instant support through HelloTech Now! online assistance. An agent will create a secure connection to your computer and troubleshoot the issue right before your eyes.`,
                ].map((text, index) => (
                  <p
                    key={index}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" /> {text}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* ------------------------------------------------------------------------------ */}
        <section className="bg-[#f5f5f5] py-4 flex justify-center items-center mt-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 ">
            <div className="flex justify-center items-center bg-white p-2 gap-3 rounded-lg shadow-lg">
              <BuildIcon style={{ color: '#0f766e', marginTop: '8px' }} />
              <p className="text-[#0f766e] mt-2">
                Thousands of Techs Nationwide
              </p>
            </div>

            <div className="flex justify-center items-center bg-white p-2 gap-3 rounded-lg shadow-lg">
              <AccessTimeIcon style={{ color: '#0f766e', marginTop: '8px' }} />
              <p className="text-[#0f766e] mt-2">Service as Soon as Today</p>
            </div>

            <div className="flex justify-center items-center bg-white p-2 gap-3 rounded-lg shadow-lg">
              <CheckCircleOutlineIcon
                style={{ color: '#0f766e', marginTop: '8px' }}
              />
              <p className="text-[#0f766e] mt-2">Don’t Pay Until It’s Done</p>
            </div>
          </div>
        </section>
        {/* ------------------------------------------------------------------------------ */}
      </main>

      <FAQAccordion />
      <PeaceOfMindGuarantee />
      <ExpertInHomeService />
    </>
  );
};

export default ComputerSetupPage;
