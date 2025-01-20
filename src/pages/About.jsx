import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBullseye, faListAlt, faShieldAlt, faHandshake, faSmile } from '@fortawesome/free-solid-svg-icons';

const content = [
  {
    id: 2,
    title: 'Who We Are',
    icon: faInfoCircle,
    content:
      'At Hewlett Hub Solutions ,we are your trusted specialists in resolving printer issues across all brands and models. With a strong focus on restoring your printers to full functionality, we ensure that your devices are up and running smoothly, minimizing downtime and frustration. Additionally, we offer a wide range of tech services designed to meet your every need.',
  },
  {
    id: 3,
    title: 'Our Mission',
    icon: faBullseye,
    content:
      'Our mission is to deliver reliable and efficient solutions to all your tech challenges. We aim to simplify your tech experience by providing top-notch support and services, so you can enjoy a hassle-free experience with your technology. Your satisfaction and the seamless functioning of your devices are our top priorities.',
  },
  {
    id: 4,
    title: 'What We Offer',
    icon: faListAlt,
    content:
      'We provide a comprehensive range of services, including Printer Repairs: Expert service for printers of all brands and models.New Computer Setup: Ensuring your new devices are configured and ready to go.Operating System Installations: Smooth installation or re-installation of operating systems.Software Configuration: Customized setup and configuration of software.Computer Repair: Expert repairs to keep your devices running smoothly.Data Backup and Transfer: Secure and efficient data management.Virus Removal and Cleanup: Thorough cleaning of your devices to protect your data and performance.',
  },
  {
    id: 5,
    title: 'Warranty and Returns',
    icon: faShieldAlt,
    content:
      'We stand by the quality of our services and products. All services and products come with a warranty to ensure your satisfaction. If you’re not completely satisfied, we offer easy and hassle-free returns. Our goal is to provide you with peace of mind, knowing that your technology is in good hands.',
  },
  {
    id: 6,
    title: 'Our Commitment',
    icon: faHandshake,
    content:
      'At Hewlett Hub Solutions, we are committed to providing exceptional service and support. We believe in building long-term relationships with our clients by offering dependable solutions and ensuring that your technology works seamlessly. Our team of experts is dedicated to your success, working tirelessly to resolve any tech issues you may encounter.',
  },
  {
    id: 7,
    title: 'Thank You',
    icon: faSmile,
    content:
      'Thank you for choosing Hewlett Hub Solutions as your trusted partner for all your tech needs. We appreciate the opportunity to serve you and are committed to ensuring your satisfaction with our services. Your trust in us drives our dedication to delivering reliable, efficient, and high-quality solutions. We look forward to continuing to support you and helping you navigate your tech challenges with ease.',
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-10">
      <div className="container mx-auto px-4 mt-20 bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-[#0C71C3] text-4xl font-extrabold text-center mb-10">
          Welcome to Hewlett Hub Solutions
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.map((section) => (
            <div
              key={section.id}
              className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {section.title && (
                <h2 className="text-3xl text-[#0C71C3] mb-4 text-center flex items-center justify-center space-x-4">
                  <FontAwesomeIcon icon={section.icon} className="text-[#0C71C3] text-2xl" />
                  <span>{section.title}</span>
                </h2>
              )}
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default About;
