import React from 'react';
import { FaBell, FaSearch, FaSun } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Added for dynamic route title

const Navbar = () => {
  const location = useLocation();

  // Define page title based on current route
  const getPageTitle = () => {
    if (location.pathname.startsWith('/project/')) return 'Project Details';
    if (location.pathname === '/projects') return 'Projects';
    if (location.pathname === '/clients') return 'Clients';
    if (location.pathname.startsWith('/clients/client-detail')) return 'Client Details';
    return 'Dashboard'; // Default fallback
  };

  const pageTitle = getPageTitle(); // Dynamic page title logic

  return (
    <div className="w-full bg-white border-b border-gray-300 shadow px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/564x/c7/4c/78/c74c78c049af7061319694743ccb0f8e.jpg"
          alt="Logo"
          className="w-10 h-10 object-cover rounded-full"
        />

        <div className="text-gray-700 text-lg font-semibold">
          {pageTitle}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-gray-600 text-xl cursor-pointer hover:text-black transition duration-200">
          <FaBell />
        </span>

        <span className="text-gray-600 text-xl cursor-pointer hover:text-yellow-500 transition duration-200">
          <FaSun />
        </span>

        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search projects, client, tasks..."
            className="bg-transparent outline-none text-sm text-gray-700 w-64 placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
