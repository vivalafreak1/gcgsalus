import React from "react";
import {
  FaRegHandshake,
  FaCloud,
  FaRegClock,
  FaFileAlt,
  FaCalendarAlt,
  FaCapsules,
  FaWallet,
  FaUserCog,
  FaWarehouse,
  FaCogs,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaTiktok,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import intro from "../assets/intro.png";
import hospital from "../assets/hospital.png";
import satusehat from "../assets/satusehat.svg";
import sehatlogo from "../assets/satusehat-logo.png";

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

          {/* Consult Button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300"
            >
              Konsultasikan
            </a>
          </div>
        </section>
      </div>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto bg-white max-w-screen-2xl"
      >
        <h2 className="mb-4 text-3xl font-bold text-center">
          Keunggulan GCG Salus
        </h2>
        <p className="mb-12 text-center">
          Nikmati akses keunggulan kami untuk solusi dalam meningkatkan
          efisiensi rumah sakit atau klinik Anda.
        </p>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-1">
          {/* Benefit Card 1: Flexible and Responsive */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaRegHandshake size={24} />{" "}
                {/* Changed to more fitting icon */}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Fleksibel dan Responsif
                </h3>
                <p className="text-gray-600">
                  Sistem kami dirancang untuk menjadi fleksibel dan responsif,
                  menyesuaikan dengan kebutuhan dinamis di Rumah Sakit atau
                  Klinik.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 2: Accessible */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaCloud size={24} />{" "}
                {/* Changed to Cloud icon for accessibility */}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Akses Dimana Saja
                </h3>
                <p className="text-gray-600">
                  Dengan teknologi berbasis cloud, Anda dapat mengakses sistem
                  kami kapan saja dan di mana saja, memudahkan manajemen
                  fasilitas kesehatan.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 3: Time and Price Efficiency */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaRegClock size={24} />{" "}
                {/* Changed to Clock icon for time management */}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Menghemat Waktu dan Biaya
                </h3>
                <p className="text-gray-600">
                  Solusi kami membantu menghemat waktu dan biaya operasional,
                  memberikan efisiensi dalam setiap proses manajerial di
                  fasilitas kesehatan.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Card 4: Easy and Accurate to Report */}
          <div className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                <FaFileAlt size={24} />{" "}
                {/* Changed to File icon for reporting */}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Laporan Mudah dan Akurat
                </h3>
                <p className="text-gray-600">
                  Dapatkan laporan yang mudah diakses dan akurat, memungkinkan
                  pengambilan keputusan yang lebih cepat dan tepat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consult Button */}
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
      </section>

      {/* Integration Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-center bg-cover md:flex-row pt-24">
        {/* Text Column */}
        <div className="w-full max-w-screen-sm mb-8 text-center md:text-left md:w-1/2 md:mb-0">
          {/* Logo with optimized width and center alignment */}
          <div className="flex justify-center mb-6">
            <img
              src={sehatlogo}
              alt="SatuSehat Logo"
              className="w-40 md:w-56 lg:w-64" // Adjust width for responsiveness
            />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-green-800 md:text-5xl">
            Sistem Terintegrasi dengan SatuSehat
          </h2>
          <p className="text-lg text-gray-800 md:text-xl">
            Sistem Informasi Manajemen Kesehatan Berbasis Aplikasi ERP GCG Salus
            Sudah Terintegrasi dengan SatuSehat, yaitu ekosistem digital
            kesehatan nasional yang menghubungkan berbagai sistem informasi
            kesehatan di Indonesia.
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
          <img
            src={satusehat}
            alt="Overview Image"
            className="w-full max-w-2xl"
          />
        </div>
      </section>

      {/* Feature Section */}
      <div className="bg-[#002244]">
        <section
          id="fitur"
          className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto max-w-screen-2xl"
        >
          <h1 className="mb-16 text-5xl font-bold text-center text-white">
            Fitur Utama GCG Salus
          </h1>

          <div className="grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            {/* Card 1: Appointment and Lab Clinics */}
            <div className="flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-teal-500 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
                <FaCalendarAlt className="text-3xl text-white" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Appointment & Lab Clinics
              </h2>
              <p className="text-center text-white">
                Mengelola janji temu dan lab test berdasarkan jadwal yang
                diajukan, pencatatan hasil tes, serta pengelolaan alur kerja
                proses laboratorium.
              </p>
            </div>

            {/* Card 2: Pharmacy Management */}
            <div className="flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br from-purple-600 to-pink-600 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
                <FaCapsules className="text-3xl text-white" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Pharmacy Management
              </h2>
              <p className="text-center text-white">
                Melacak dan mengelola persediaan obat, mulai dari penerimaan,
                penyimpanan, hingga distribusi, untuk memastikan ketersediaan
                obat tepat waktu dan mencegah kehabisan stok atau kadaluarsa.
              </p>
            </div>

            {/* Card 3: Financial Accounting */}
            <div className="flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br from-yellow-400 to-red-500 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
                <FaWallet className="text-3xl text-white" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Financial Accounting
              </h2>
              <p className="text-center text-white">
                Mengelola semua aspek keuangan fasilitas kesehatan, termasuk:
                pengeluaran, pendapatan, dan transaksi lainnya.
              </p>
            </div>

            {/* Card 4: HR Management System */}
            <div className="flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br from-indigo-600 to-blue-500 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
                <FaUserCog className="text-3xl text-white" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                HR Management System
              </h2>
              <p className="text-center text-white">
                Mengelola data pegawai dan tenaga kesehatan, penggajian,
                tunjangan, kompensasi, pola kerja, absensi, serta menghasilkan
                laporan analitik untuk setiap unit layanan kesehatan.
              </p>
            </div>

            {/* Card 5: Inventory Management */}
            <div className="flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br from-orange-500 to-pink-500 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
                <FaWarehouse className="text-3xl text-white" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Inventory Management
              </h2>
              <p className="text-center text-white">
                Mengelola persediaan terkait dengan fasilitas kesehatan,
                memastikan bahwa pasokan yang tepat tersedia pada waktu yang
                tepat dalam memberikan kepada pasien.
              </p>
            </div>

            {/* Card 6: System Configuration */}
            <div className="flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
                <FaCogs className="text-3xl text-white" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                System Configuration
              </h2>
              <p className="text-center text-white">
                Mengelola modul aplikasi sesuai alur bisnis Rumah Sakit atau
                Klinik, serta menyesuaikan tampilan seperti ikon, menu, dan
                pengaturan lainnya.
              </p>
            </div>
          </div>
          {/* Consultation Button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white border-2 border-white rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300"
            >
              Konsultasikan
            </a>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="flex items-center justify-center min-h-screen py-10 bg-gray-50">
        <section
          id="kontak"
          className="flex flex-col w-full max-w-screen-xl px-4 space-y-8 md:flex-row md:space-y-0 md:space-x-8"
        >
          {/* Contact Info */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-3xl font-bold">Hubungi Kami Sekarang!</h1>
            <p className="mb-6">
              Bergabunglah bersama GCG Salus dalam Memaksimalkan Kinerja dan
              Layanan Rumah Sakit atau Klinik Anda
            </p>

            <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-blue-950">
              Kontak Kami
            </h2>
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center p-2 text-white rounded bg-blue-950">
                <FaWhatsapp />
              </div>
              <span>Whatsapp: +6281511001239</span>
            </div>
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center p-2 text-white rounded bg-blue-950">
                <FaEnvelope />
              </div>
              <span>Email: sales@gcgsalus.id</span>
            </div>

            <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-blue-950">
              Sosial Media
            </h2>
            <div className="flex mb-4 space-x-4">
              <a
                href="https://www.instagram.com/gcgsalus.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl text-blue-950" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-4xl text-blue-950" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-4xl text-blue-950" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-4xl text-blue-950" />
              </a>
            </div>

            <h2 className="pb-2 mb-4 text-2xl font-bold border-b-2 border-blue-950">
              Alamat Kami
            </h2>
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center p-2 text-white rounded bg-blue-950">
                <FaMapMarkerAlt />
              </div>
              <span>
                Graha Cibinong . JL. Raya Jakarta - Bogor Km 43 Blok H No. 08,
                Cirimekar, Kec. Cibinong, Kab. Bogor, Jawa Barat 16917
              </span>
            </div>

            {/* Embedded Google Maps */}
            <div className="h-64 overflow-hidden rounded">
              <iframe
                title="Google Maps"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.383292373008!2d106.84539478516056!3d-6.473038176807272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c364bf366913%3A0x5b0fce620bb69f57!2sPT%20Gema%20Cendekia%20Gemilang!5e0!3m2!1sid!2sid!4v1731987100041!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-3xl font-bold">Get in Touch</h1>
            <form className="space-y-4">
              <div>
                <label className="block mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-lg"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white transition rounded-lg bg-blue-950 hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
