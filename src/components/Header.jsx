import React, { useState } from 'react';
import logo from '../assets/sansaran-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white w-full shadow-md px-10 lg:py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 relative">
        {/* Logo */}
        <a href="/" className="flex items-center z-20">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <ul className="flex space-x-8">
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/services" className="hover:text-blue-500">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden z-20">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu (Toggleable) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-10">
            <ul className="flex flex-col space-y-4 p-6">
              <li><a href="/about" className="text-gray-700 hover:text-blue-500">About</a></li>
              <li><a href="/services" className="text-gray-700 hover:text-blue-500">Services</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* Add the shadow to the bottom of the header */}
      <div className="w-full shadow-lg absolute bottom-0 left-0 right-0"></div>
    </div>
  );
}
