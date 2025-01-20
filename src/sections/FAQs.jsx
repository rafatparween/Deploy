import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'What services does Hewlett Hub solutions offer?',
    answer:
      'Hewlett Hub solutions offers a wide range of services including printer setup, troubleshooting, repair, and maintenance for all types of printers.',
  },
  {
    question: 'Can Hewlett Hub solutions help with wireless printer setup?',
    answer:
      'Yes, our technicians are experts in setting up wireless printers. We can help you connect your printer to your Wi-Fi network and ensure it is working properly.',
  },
  {
    question: 'What should I do if my printer is not printing?',
    answer:
      "If your printer is not printing, our technicians can diagnose and fix the issue. This may involve checking the printer's connection, drivers, and settings, as well as troubleshooting any hardware problems.",
  },
  {
    question:
      'How much does Hewlett Hub solutions charge for a service call?',
    answer:
      'Our service charges vary depending on the type of service required. Basic printer setup starts at $79, while more complex troubleshooting and repair services may have additional charges. We also offer membership pricing for regular customers.',
  },
  {
    question: 'Do you offer same-day service?',
    answer:
      "Yes, we offer same-day service for urgent printer issues. Please contact us to schedule an appointment and we'll do our best to accommodate your needs.",
  },
  {
    question: 'Is there a warranty on the services provided?',
    answer:
      "Yes, we offer a satisfaction guarantee on all our services. If you're not completely satisfied with our service, we'll work with you to make it right.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white text-[#0C71C3] p-6">
      <section className="max-w-6xl mx-auto">
        <h4 className="text-3xl font-bold mb-6">Frequently Asked Questions</h4>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-[#0C71C3]"
                onClick={() => handleToggle(index)}
              >
                <h5 className="text-lg font-medium">{faq.question}</h5>
                <ChevronRightIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-90' : ''
                  }`}
                  style={{ color: '#0C71C3' }}
                />
              </div>
              {openIndex === index && (
                <div className="p-4 bg-white text-[#0C71C3]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQAccordion;
