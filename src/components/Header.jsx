import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between p-4 mx-auto max-w-screen-2xl">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-blue-950">
          <a href="#overview" className="hover:text-blue-500">
            Fitur
          </a>
          <a href="#vision" className="hover:text-blue-500">
            Kontak
          </a>
          <a href="#about" className="hover:text-blue-500">
            FAQ
          </a>
          <a
            href="#clients"
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:shadow-md transition-transform transform hover:scale-105"
          >
            Daftar
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-950 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-4 text-blue-950">
            <a
              href="#overview"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-500"
            >
              Overview
            </a>
            <a
              href="#vision"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-500"
            >
              Vision
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#clients"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 hover:shadow-md transition-transform transform hover:scale-105"
            >
              Daftar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
