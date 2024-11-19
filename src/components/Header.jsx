import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle logo click
  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between p-4 mx-auto max-w-screen-2xl">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-blue-950">
          <a href="#fitur" className="hover:text-blue-500">
            Fitur
          </a>
          <a href="#kontak" className="hover:text-blue-500">
            Kontak
          </a>
          <a href="#faq" className="hover:text-blue-500">
            FAQ
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
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
              href="#fitur"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-500"
            >
              Fitur
            </a>
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-500"
            >
              Kontak
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-500"
            >
              FAQ
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
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
