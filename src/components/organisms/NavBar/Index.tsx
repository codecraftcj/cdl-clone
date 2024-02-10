import  { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const userName = "Vendor 1 Dashboard"; // You can dynamically set this based on user data

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and user name */}
          <div className="flex items-center space-x-4">
            {/* Company logo */}
            <a href="#" className="flex items-center">
              <img src="/path-to-your-logo.png" alt="Company Logo" className="h-10 w-10 rounded-full" />
            </a>
            {/* User name */}
            <span className="font-bold">{userName}</span>
          </div>
          
          {/* Menu options aligned to the right */}
          <div className="flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-2 px-3 hover:text-gray-400">Home</a>
              <a href="#" className="py-2 px-3 hover:text-gray-400">Programs</a>
              <a href="#" className="py-2 px-3 hover:text-gray-400">Services</a>
              <a href="#" className="py-2 px-3 hover:text-gray-400">Location</a>
              <a href="#" className="py-2 px-3 hover:text-gray-400">Company Details</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
