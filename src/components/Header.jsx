import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sansaran-logo.png";
import { Sling as Hamburger } from "hamburger-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-[#0a0a0a] text-white relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 h-full">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-full gap-6 text-sm font-medium relative">
          <Link to="/" className="hover:text-blue-400 h-full flex items-center">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 h-full flex items-center">
            About
          </Link>

          {/* Services dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-blue-400 h-full flex items-center">
              Services
            </button>

            {/* Animated dropdown */}
            <div
              className={`absolute left-0 top-full w-52 bg-white text-gray-800 shadow-lg rounded-b-md overflow-hidden transition-all duration-300 ease-out z-50 ${
                isServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul>
                <li>
                  <Link
                    to="/services/network-support"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Network Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/project-management"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/cyber-security"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cyber Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/contact" className="hover:text-blue-400 h-full flex items-center">
            Contact Us
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <a
            href="tel:03333356402"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <i className="fas fa-phone text-md"></i>
            <span>0333 335 6402</span>
          </a>
          <a
            href="http://linkedin.com/in/ian-withington"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>

        {/* iPad Icons */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <a
            href="http://linkedin.com/in/ian-withington"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="tel:03333356402" className="hover:text-green-500">
            <i className="fas fa-phone text-md"></i>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger size={22} toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-[#0a0a0a] border-t-2 border-t-[#1f5175] px-4 pb-4 overflow-hidden transform transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <nav className="flex flex-col gap-3 mt-2">
          <Link to="/" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>

          {/* Mobile Services dropdown */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="hover:text-blue-400 w-full text-left flex gap-2 items-center"
            >
              <span>Services</span>
              <i className={`mt-1 text-xs fas fa-chevron-down transition-transform duration-300 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}></i>
            </button>
            {isServicesOpen && (
              <ul className="pl-4 mt-1 flex flex-col gap-2">
                <li>
                  <Link
                    to="/services/network-support"
                    className="hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Network Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/project-management"
                    className="hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/cyber-security"
                    className="hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cyber Security
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
