import React from "react";
import intro from "../assets/intro.png";

const OverviewSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 pt-24 bg-center bg-cover md:flex-row">
      {/* Text Column */}
      <div className="w-full max-w-screen-sm mb-8 text-center md:text-left md:w-1/2 md:mb-0">
        <h2 className="mb-4 text-4xl font-bold text-blue-950 md:text-5xl">
          Maksimalkan Kinerja Rumah Sakit atau Klinik Anda dengan ERP Inovatif
          yang Terintegrasi
        </h2>
        <p className="text-lg text-gray-800 md:text-xl">
          Sistem Informasi Manajemen Kesehatan Berbasis Aplikasi ERP
          Terintegrasi untuk Rumah Sakit dan Klinik, dengan Fitur Lengkap: Rekam
          Medis, Pelayanan Pasien, Laboratorium, Farmasi, Inventori, dan
          Pengelolaan Sumber Daya Manusia.
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
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img src={intro} alt="Overview" className="w-full max-w-2xl" />
      </div>
    </section>
  );
};

export default OverviewSection;
