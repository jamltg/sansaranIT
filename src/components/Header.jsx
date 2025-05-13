import React, { useState } from 'react';
import logo from '../assets/sansaran-logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white w-full shadow-md px-10 relative z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-gray-700 h-full">
          <ul className="flex h-full items-center space-x-8">
            <li className="h-full">
              <a href="/about" className="h-full flex items-center hover:text-blue-500 px-2">
                About
              </a>
            </li>

            {/* Services Menu with Hover Dropdown */}
            <li
              className="relative h-full"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className="h-full flex items-center hover:text-blue-500 px-2 cursor-pointer">
                Services
              </span>

              {isServicesOpen && (
                <ul 
                  className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-b-md py-2 w-52 z-30"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <li>
                    <Link 
                      to="/services/network-support" 
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Network Support
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services/project-management" 
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services/cyber-security" 
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Cyber Security
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="h-full">
              <Link to="/contact" className="h-full flex items-center hover:text-blue-500 px-2">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-20">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30">
          <ul className="flex flex-col space-y-4 p-6 w-full">
            <li>
              <Link 
                to="/about" 
                className="block w-full text-gray-700 hover:text-blue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services/network-support" 
                className="block w-full text-gray-700 hover:text-blue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Network Support
              </Link>
            </li>
            <li>
              <Link 
                to="/services/project-management" 
                className="block w-full text-gray-700 hover:text-blue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Project Management
              </Link>
            </li>
            <li>
              <Link 
                to="/services/cyber-security" 
                className="block w-full text-gray-700 hover:text-blue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Cyber Security
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block w-full text-gray-700 hover:text-blue-500" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
