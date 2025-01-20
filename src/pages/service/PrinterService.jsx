import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Link } from 'react-router-dom';

const PrinterService = () => {
  return (
    <main className="bg-[#f5f5f5] py-6 px-6">
      <h2 className="text-[#0f766e] text-2xl font-semibold mb-4">Printers</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-6 bg-white h-80">
        <ul className="py-10">
          <h3 className="text-lg font-bold mb-2">Installation & Setup</h3>
          <Link to="/printersetup" className="flex gap-4">
            <PrintIcon sx={{ color: '#0f766e' }} />
            <p>Printer Setup</p>
          </Link>
        </ul>

        <ul className="py-10">
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <Link to="/printersetup" className="flex gap-4">
            <SettingsBrightnessIcon sx={{ color: '#0f766e' }} />
            <p>Printer Troubleshooting & Repair</p>
          </Link>
        </ul>

        <ul
          className="py-10 bg-cover bg-no-repeat bg-center p-6 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/workspace-with-office-supplies_140725-23298.jpg?t=st=1717218301~exp=1717221901~hmac=457b601f00e2a55fdf87f9c6ca09db18bd4f3e24e0b550924d8fde6a58b6eddb&w=360")`,
          }}
        >
          <li className="text-center bg-white bg-opacity-75 p-4 rounded-lg">
            <p className="mb-4">
              Get 24/7 unlimited printer support with HelloTech Home
            </p>
            <Link to="/membership">
              <button className="bg-[#0f766e] text-white px-4 py-2 rounded-lg hover:bg-[#0d6155]">
                Join Now
              </button>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PrinterService;
