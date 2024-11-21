import React from "react";
import hospital from "../assets/hospital.png";

const VisionSection = () => {
  return (
    <div
      id="tentang"
      className="relative bg-[#002244]"
      style={{
        backgroundImage: `url(${hospital})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#002244] opacity-85"></div>

      <section
        id="vision"
        className="relative z-10 flex flex-col items-center justify-center max-w-screen-lg min-h-screen p-8 mx-auto"
      >
        {/* Header with GCG and Salus */}
        <h1 className="mb-8 text-5xl font-bold sm:text-6xl md:text-7xl">
          <span className="text-[#259DC5]">GCG</span>
          <span className="text-white"> Salus</span>
        </h1>

        {/* Paragraph */}
        <p className="mb-10 text-lg text-center text-white sm:text-xl md:text-2xl">
          Solusi inovatif untuk mengelola Sistem Informasi Manajemen Fasilitas
          Kesehatan, menyederhanakan proses kompleks di Rumah Sakit dan Klinik,
          serta meningkatkan kualitas pelayanan secara optimal. Dengan fokus
          pada efisiensi dan kualitas, GCG Salus membawa teknologi kesehatan ke
          tingkat yang lebih baik.
        </p>

        {/* Consult Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white transition-colors duration-300 border-2 border-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Konsultasikan
          </a>
        </div>
      </section>
    </div>
  );
};

export default VisionSection;
