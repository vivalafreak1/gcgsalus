import React from "react";
import FeatureCard from "./FeatureCard";
import {
  FaCalendarAlt,
  FaCapsules,
  FaWallet,
  FaUserCog,
  FaWarehouse,
  FaCogs,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaCalendarAlt,
      title: "Appointment & Lab Clinics",
      description:
        "Mengelola janji temu dan lab test berdasarkan jadwal yang diajukan, pencatatan hasil tes, serta pengelolaan alur kerja proses laboratorium.",
      gradientFrom: "blue-500",
      gradientTo: "teal-500",
    },
    {
      icon: FaCapsules,
      title: "Pharmacy Management",
      description:
        "Melacak dan mengelola persediaan obat, mulai dari penerimaan, penyimpanan, hingga distribusi, untuk memastikan ketersediaan obat tepat waktu dan mencegah kehabisan stok atau kadaluarsa.",
      gradientFrom: "purple-600",
      gradientTo: "pink-600",
    },
    {
      icon: FaWallet,
      title: "Financial Accounting",
      description:
        "Mengelola semua aspek keuangan fasilitas kesehatan, termasuk: pengeluaran, pendapatan, dan transaksi lainnya.",
      gradientFrom: "yellow-400",
      gradientTo: "red-500",
    },
    {
      icon: FaUserCog,
      title: "HR Management System",
      description:
        "Mengelola data pegawai dan tenaga kesehatan, penggajian, tunjangan, kompensasi, pola kerja, absensi, serta menghasilkan laporan analitik untuk setiap unit layanan kesehatan.",
      gradientFrom: "indigo-600",
      gradientTo: "blue-500",
    },
    {
      icon: FaWarehouse,
      title: "Inventory Management",
      description:
        "Mengelola persediaan terkait dengan fasilitas kesehatan, memastikan bahwa pasokan yang tepat tersedia pada waktu yang tepat dalam memberikan kepada pasien.",
      gradientFrom: "orange-500",
      gradientTo: "pink-500",
    },
    {
      icon: FaCogs,
      title: "System Configuration",
      description:
        "Mengelola modul aplikasi sesuai alur bisnis Rumah Sakit atau Klinik, serta menyesuaikan tampilan seperti ikon, menu, dan pengaturan lainnya.",
      gradientFrom: "purple-600",
      gradientTo: "blue-500",
    },
  ];

  return (
    <div className="bg-[#002244]">
      <section
        id="fitur"
        className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto max-w-screen-2xl"
      >
        <h1 className="mb-16 text-5xl font-bold text-center text-white">
          Fitur Utama GCG Salus
        </h1>

        <div className="grid max-w-screen-xl grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradientFrom={feature.gradientFrom}
              gradientTo={feature.gradientTo}
            />
          ))}
        </div>

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
  );
};

export default FeaturesSection;
