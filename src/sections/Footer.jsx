import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#191970] via-[#0099CC] to-[#003366] text-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-teal-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-teal-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Customer Services
            </h3>
            <ul>
              <li>
                <Link to="/disclaimer" className="hover:text-teal-200">
                  Disclaimer
                </Link>
              </li>

              <li>
                <Link to="/privacypolicy" className="hover:text-teal-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/return-refundpolicy" className="hover:text-teal-200">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-teal-200">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Get in Touch */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p>+(1) 888-291-3869</p>
            <p>89 Woodland Center, USA</p>
            <p>
              <a
                href="mailto:support@eztechprintersolutions.com"
                className="hover:text-teal-200"
              >
                support@hewlett-hubsolutions.com
              </a>
            </p>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
            <p>Free Delivery on your first order!</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
              />
              <button
                type="submit"
                className="w-full text-[#0f766e] bg-white py-2 rounded-md hover:bg-teal-200 transition duration-300"
              >
                GO
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-100 mt-8">
          &copy; {new Date().getFullYear()} Hewlett Hub solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


