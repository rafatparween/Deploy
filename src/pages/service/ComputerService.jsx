import React from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MonitorIcon from '@mui/icons-material/Monitor';
import SettingsIcon from '@mui/icons-material/Settings';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import BuildIcon from '@mui/icons-material/Build';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const ComputerService = () => {
  return (
    <main className="bg-[white] py-6 px-6">
      <h2 className="text-[#0C71C3] text-2xl font-semibold mb-4">Computers</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-6 bg-white h-80">
        <ul className="py-10">
          <h3 className="text-lg font-bold mb-2">Installation & Setup</h3>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <ManageAccountsIcon className="text-[#0C71C3] mr-2" />
              <p>Email or Online Account Setup or Support</p>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <MonitorIcon className="text-[#0C71C3] mr-2" />
              <p>New Computer Setup</p>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <SettingsIcon className="text-[#0C71C3] mr-2" />
              <p>OS (Operating System) Install or Re-install</p>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <InstallDesktopIcon className="text-[#0C71C3] mr-2" />
              <p>Software Install or Re-Install</p>
            </Link>
          </li>
        </ul>

        <ul className="py-10">
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <BuildIcon className="text-[#0C71C3] mr-2" />
              <p>Computer Repair & Help</p>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <SettingsBackupRestoreIcon className="text-[#0C71C3] mr-2" />
              <p>Data Back-up or Transfer</p>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <AcUnitIcon className="text-[#0C71C3] mr-2" />
              <p>Virus Removal & Cleanup</p>
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <Link to="/computersetup" className="flex items-center">
              <SchoolIcon className="text-[#0C71C3] mr-2" />
              <p>Computer Training & Lessons</p>
            </Link>
          </li>
        </ul>

        <ul
          className="py-10 bg-cover bg-no-repeat bg-center p-6 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/workspace-with-office-supplies_140725-23298.jpg?t=st=1717218301~exp=1717221901~hmac=457b601f00e2a55fdf87f9c6ca09db18bd4f3e24e0b550924d8fde6a58b6eddb&w=360")`,
          }}
        >
          <li className="text-center bg-white bg-opacity-75 p-4 rounded-lg">
            <p className="mb-4">
              Get 24/7 unlimited computer support with HelloTech Home
            </p>
            <Link to="/membership">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-[#0C71C3]">
                Join Now
              </button>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ComputerService;
