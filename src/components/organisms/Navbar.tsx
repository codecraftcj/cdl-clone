import { useState } from 'react';


interface MenuItem {
  label: string;
  link: string;
}
const Navbar = ({ userType }: { userType: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  let userDisplayName = '';
  let userMenuItems: MenuItem[] = [];

  // Set user-related content based on the user type
  switch (userType) {
    case 'student':
      userDisplayName = 'Student Dashboard';
      userMenuItems = [
        { label: 'Home', link: '#' },
        { label: 'Courses', link: '#' },
        { label: 'Grades', link: '#' },
        { label: 'Profile', link: '#' },
      ];
      break;
    case 'vendor':
      userDisplayName = 'Vendor Dashboard';
      userMenuItems = [
        { label: 'Home', link: '#' },
        { label: 'Products', link: '#' },
        { label: 'Orders', link: '' },
        { label: 'Profile', link: '#' },
      ];
      break;
    case 'power':
      userDisplayName = 'Power User Dashboard';
      userMenuItems = [
        { label: 'Home', link: '#' },
        { label: 'Admin Panel', link: '#' },
        { label: 'Reports', link: '#' },
        { label: 'Settings', link: '#' },
      ];
      break;
    case 'nouser':
      userDisplayName = 'PWA-dev';
      userMenuItems = [
        { label: 'Home', link: '#' },
        { label: 'Login', link: '/' },
        { label: 'Register', link: '/register' },
      ];
      break;
    default:
      
      break;
  }

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
            <span className="font-bold">{userDisplayName}</span>
          </div>

          {/* Menu options aligned to the right */}
          <div className="flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-1">
              {userMenuItems.map((menuItem, index) => (
                <a key={index} href={menuItem.link} className="py-2 px-3 hover:text-gray-400">
                  {menuItem.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        {userMenuItems.map((menuItem, index) => (
          <a key={index} href={menuItem.link} className="block py-2 px-4 text-sm hover:bg-gray-700">
            {menuItem.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
