import React from "react";
import sehatLogo from "../assets/satusehat-logo.png";
import satusehat from "../assets/satusehat.svg";

const IntegrationSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-center bg-cover md:flex-row pt-24">
      {/* Text Column */}
      <div className="w-full max-w-screen-sm mb-8 text-center md:text-left md:w-1/2 md:mb-0">
        {/* Logo with optimized width and center alignment */}
        <div className="flex justify-center mb-6">
          <img
            src={sehatLogo}
            alt="SatuSehat Logo"
            className="w-40 md:w-56 lg:w-64"
          />
        </div>
        <h2 className="mb-4 text-4xl font-bold text-green-800 md:text-5xl">
          Sistem Terintegrasi dengan SatuSehat
        </h2>
        <p className="text-lg text-gray-800 md:text-xl">
          Sistem Informasi Manajemen Kesehatan Berbasis Aplikasi ERP GCG Salus
          Sudah Terintegrasi dengan SatuSehat, yaitu ekosistem digital kesehatan
          nasional yang menghubungkan berbagai sistem informasi kesehatan di
          Indonesia.
        </p>
        {/* Button under the paragraph */}
        <div className="flex justify-center mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white bg-[#002244] rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300"
          >
            Konsultasikan
          </a>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src={satusehat} alt="Overview" className="w-full max-w-2xl" />
      </div>
    </section>
  );
};

export default IntegrationSection;
