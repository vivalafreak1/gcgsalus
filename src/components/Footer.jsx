import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => (
  <footer className="w-full text-gray-300 bg-gray-800">
    <div className="px-6 py-8 mx-auto max-w-screen-2xl">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-6 pb-8 border-gray-700 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo and About */}
        <div>
          <img
            src="https://gemacendekia.co.id/wp-content/uploads/2022/12/master_logo_gcg-removebg-preview.png"
            alt="Logo"
            className="h-8"
          />
          <p className="mt-2">
            Gema Cendekia Gemilang mengembangkan aplikasi ERP (Enterprise
            Resource Planning) yang inovatif, dengan fitur yang mencakup
            manajemen keuangan, operasional, logistik dan sumber daya manusia.
          </p>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-2">
            <a
              href="https://www.instagram.com/gcg.id"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full"
            >
              <FaInstagram className="text-gray-800" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full"
            >
              <FaFacebookF className="text-gray-800" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full"
            >
              <FaYoutube className="text-gray-800" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full"
            >
              <FaTiktok className="text-gray-800" />
            </a>
          </div>
        </div>

        {/* Column 2: Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <a
            href="https://api.whatsapp.com/send?phone=6281511001239&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center mt-4">
              <span className="p-2 mr-2 bg-white rounded-full">
                <FaWhatsapp className="text-gray-800" />
              </span>
              <p>WhatsApp : +6281511001239</p>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=622138741038&text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20GCG%20Salus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center mt-4">
              <span className="p-2 mr-2 bg-white rounded-full">
                <FaWhatsapp className="text-gray-800" />
              </span>
              <p>WhatsApp : +622138741038</p>
            </div>
          </a>
          <div className="flex items-center mt-4">
            <span className="p-2 mr-2 bg-white rounded-full">
              <FaEnvelope className="text-gray-800" />
            </span>
            <p>Email : sales@gemacendekia.co.id</p>
          </div>
        </div>

        {/* Column 3: Address */}
        <div>
          <a
            href="https://maps.app.goo.gl/FAUg3EfpUJ4zT6si6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-semibold text-white">Address</h2>
            <div className="flex items-center mt-4">
              <span className="p-2 mr-2 bg-white rounded-full">
                <FaMapMarkerAlt className="text-gray-800" />
              </span>
              <p>
                Graha Cibinong . JL. Raya Jakarta - Bogor Km 43 Blok H No. 08,
                Cirimekar, Kec. Cibinong, Kab. Bogor, Jawa Barat 16917
              </p>
            </div>
          </a>
        </div>

        {/* Column 4: Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold text-white">Recent Posts</h2>
          <ul className="mt-4 space-y-2">
            <li>Our Latest Initiatives</li>
            <li>Community Outreach Events</li>
            <li>Upcoming Programs</li>
          </ul>
        </div>
      </div>

      {/* Row 2 */}
      <div className="py-3 mt-4 text-sm text-center text-gray-400 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Gema Cendekia Gemilang. All rights
        reserved. Created by Arief Taufik Rahman.
      </div>
    </div>
  </footer>
);

export default Footer;
