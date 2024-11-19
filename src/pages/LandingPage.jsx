import React from "react";
import {
  FaEye,
  FaBullseye,
  FaBoxOpen,
  FaInfinity,
  FaClipboardList,
  FaLock,
  FaCheckCircle,
  FaLightbulb,
  FaUserTie,
} from "react-icons/fa";
import intro from "../assets/intro.png";
import hospital from "../assets/hospital.png";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      {/* Overview Section */}
      <section
        id="overview"
        className="flex flex-col items-center justify-center min-h-screen p-8 bg-center bg-cover md:flex-row pt-24"
      >
        {/* Text Column */}
        <div className="w-full max-w-screen-sm mb-8 text-center md:text-left md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Maksimalkan Kinerja Rumah Sakit atau Klinik Anda dengan ERP Inovatif
            yang Terintegrasi
          </h2>
          <p className="text-lg text-gray-800 md:text-xl">
            Sistem Informasi Manajemen Kesehatan Berbasis Aplikasi ERP
            Terintegrasi untuk Rumah Sakit dan Klinik, dengan Fitur Lengkap:
            Rekam Medis, Pelayanan Pasien, Laboratorium, Farmasi, Inventori, dan
            Pengelolaan Sumber Daya Manusia.
          </p>
          {/* Button under the paragraph */}
          <div className="flex justify-center mt-6">
            <button className="px-6 py-3 text-white bg-[#002244] rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300">
              Konsultasikan
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={intro} alt="Overview Image" className="w-full max-w-2xl" />
        </div>
      </section>

      {/* Vision Section */}
      <div
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
          className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto max-w-screen-lg relative z-10"
        >
          {/* Header with GCG and Salus */}
          <h1 className="mb-8 text-5xl sm:text-6xl md:text-7xl font-bold">
            <span className="text-[#259DC5]">GCG</span>
            <span className="text-white"> Salus</span>
          </h1>

          {/* Paragraph */}
          <p className="mb-10 text-lg sm:text-xl md:text-2xl text-center text-white">
            Solusi inovatif untuk mengelola Sistem Informasi Manajemen Fasilitas
            Kesehatan, menyederhanakan proses kompleks di Rumah Sakit dan
            Klinik, serta meningkatkan kualitas pelayanan secara optimal. Dengan
            fokus pada efisiensi dan kualitas, GCG Salus membawa teknologi
            kesehatan ke tingkat yang lebih baik.
          </p>
        </section>
      </div>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto bg-white max-w-screen-2xl"
      >
        <h2 className="mb-4 text-3xl font-bold text-center">
          Kelebihan Gema Cendekia Gemilang
        </h2>
        <p className="mb-12 text-center">
          Nikmati akses kelebihan kami untuk solusi dalam meningkatkan efisiensi
          perusahaan Anda.
        </p>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-1">
          {/* Benefit Card 1: Unlimited */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaInfinity size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Tanpa Batas</h3>
                <p className="text-gray-600">
                  Akses tanpa batas user (unlimited user) tanpa tambahan biaya.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 2: Service */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaClipboardList size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Layanan</h3>
                <p className="text-gray-600">
                  Layanan yang terbuka bersama tim marketing kami untuk melayani
                  kebutuhan bisnis anda.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 3: Security */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaLock size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Keamanan</h3>
                <p className="text-gray-600">
                  Gema Cendekia Gemilang memiliki keamanan yang terjamin dengan
                  terbukti dalam standar verifikasi bisnis.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 4: Trusted */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaCheckCircle size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Terpercaya</h3>
                <p className="text-gray-600">
                  Gema Cendekia Gemilang sudah terpercaya dan terbukti di
                  banyaknya pembisnis dengan terjamin akan keamanan data bersama
                  kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-gray-100">
        <section
          id="contact"
          className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto max-w-screen-2xl"
        >
          <div className="flex flex-col w-full lg:flex-row">
            {/* Left Column */}
            <div className="flex flex-col w-full p-4 lg:w-1/2">
              <h1 className="mb-4 text-3xl font-bold text-blue-950">
                Tingkatkan Efisiensi Bisnis Anda dengan Aplikasi ERP Terdepan!
              </h1>
              <p className="mb-4 text-lg text-gray-800">
                Temukan efisiensi, integrasi, dan pertumbuhan - Jadilah pionir
                dalam bisnis cerdas bersama Gema Cendekia Gemilang
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20berkonsultasi%20tentang%20GCG"
                className="inline-block px-6 py-3 text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700"
              >
                Hubungi Sekarang!
              </a>
            </div>
            {/* Right Column - Google Map */}
            <div className="flex justify-center w-full p-4 lg:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15857.533168763743!2d106.8502657!3d-6.4730382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c364bf366913%3A0x5b0fce620bb69f57!2sPT%20Gema%20Cendekia%20Gemilang!5e0!3m2!1sen!2sid!4v1730799492015!5m2!1sen!2sid" // Replace with your Google Map link
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
