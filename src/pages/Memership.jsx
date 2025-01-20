import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Facilities from '../sections/Facilities';
import CustomerReview from '../sections/CustomerReview';

const includedFeatures = [
  'Unlimited 24/7 Online Support',
  'Premium Antivirus Software',
  'Premium Password Manager',
  'Only $69 for In-Home Services',
];

export default function Membership() {
  const [billingOption, setBillingOption] = useState('annually');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSelectMembership = () => {
    if (billingOption === '') {
      alert('Please select a billing option.');
    } else {
      setResponseMessage('Response sent!');
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="relative bg-blue-600 text-white py-16 mt-[60px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
          Hewlett Hub solutions, technology just works
          </h1>
          <p className="mt-4">
            The support you need for any smart home device, all in one package.
          </p>
          <a href="#" className="underline mt-2 inline-block">
            Learn More
          </a>
          <div className="flex justify-center items-center mt-4">
            <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="ml-2 text-white">4.7 Google Rating</span>
          </div>
        </div>
      </div>

      {/* Membership Selection */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
        <div className="bg-white shadow-xl rounded-xl ring-1 ring-gray-200">
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Choose your membership:
              </h3>
              <div className="space-y-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="billingOption"
                    value="annually"
                    checked={billingOption === 'annually'}
                    onChange={() => setBillingOption('annually')}
                    className="mr-3"
                  />
                  <span className="text-lg">Pay Annually - Save 20%</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="billingOption"
                    value="monthly"
                    checked={billingOption === 'monthly'}
                    onChange={() => setBillingOption('monthly')}
                    className="mr-3"
                  />
                  <span className="text-lg">Pay Monthly</span>
                </label>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What’s Included:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Membership Cards */}
            <div className="space-y-6">
              {billingOption === 'annually' && (
                <div className="rounded-lg border border-gray-300 p-6 text-center shadow-sm">
                  <p className="text-sm font-semibold text-blue-600 mb-4">
                  Hewlett Hub solutions - Annual Plan
                  </p>
                  <p className="text-3xl font-bold text-gray-900">$199.99</p>
                  <p className="text-gray-500 line-through">$199 / month</p>
                  <p className="text-gray-500">$16.67 billed annually</p>
                  <button
                    onClick={handleSelectMembership}
                    className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all"
                  >
                    Select Membership
                  </button>
                </div>
              )}

              {billingOption === 'monthly' && (
                <div className="rounded-lg border border-gray-300 p-6 text-center shadow-sm">
                  <p className="text-sm font-semibold text-blue-600 mb-4">
                  Hewlett Hub solutions - Monthly Plan
                  </p>
                  <p className="text-3xl font-bold text-gray-900">$20.00</p>
                  <p className="text-gray-500">$240 / month</p>
                  <p className="text-gray-500">Billed monthly</p>
                  <button
                    onClick={handleSelectMembership}
                    className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all"
                  >
                    Select Membership
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Facilities />
    </>
  );
}
