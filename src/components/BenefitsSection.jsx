import React from "react";
import { FaRegHandshake, FaCloud, FaRegClock, FaFileAlt } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaRegHandshake size={24} />,
      title: "Fleksibel dan Responsif",
      description:
        "Sistem kami dirancang untuk menjadi fleksibel dan responsif, menyesuaikan dengan kebutuhan dinamis di Rumah Sakit atau Klinik.",
    },
    {
      icon: <FaCloud size={24} />,
      title: "Akses Dimana Saja",
      description:
        "Dengan teknologi berbasis cloud, Anda dapat mengakses sistem kami kapan saja dan di mana saja, memudahkan manajemen fasilitas kesehatan.",
    },
    {
      icon: <FaRegClock size={24} />,
      title: "Menghemat Waktu dan Biaya",
      description:
        "Solusi kami membantu menghemat waktu dan biaya operasional, memberikan efisiensi dalam setiap proses manajerial di fasilitas kesehatan.",
    },
    {
      icon: <FaFileAlt size={24} />,
      title: "Laporan Mudah dan Akurat",
      description:
        "Dapatkan laporan yang mudah diakses dan akurat, memungkinkan pengambilan keputusan yang lebih cepat dan tepat.",
    },
  ];

  return (
    <section
      id="benefits"
      className="flex flex-col items-center justify-center min-h-screen p-8 mx-auto bg-white max-w-screen-2xl"
    >
      <h2 className="mb-4 text-3xl font-bold text-center">
        Keunggulan GCG Salus
      </h2>
      <p className="mb-12 text-center">
        Nikmati akses keunggulan kami untuk solusi dalam meningkatkan efisiensi
        rumah sakit atau klinik Anda.
      </p>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-1">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col justify-between h-full p-6 transition-shadow duration-200 border rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
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
  );
};

export default BenefitsSection;
