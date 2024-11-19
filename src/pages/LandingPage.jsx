import React from "react";
import {
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaTiktok,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import OverviewSection from "../components/OverviewSection";
import FeaturesSection from "../components/FeaturesSection";
import VisionSection from "../components/VisionSection";
import BenefitsSection from "../components/BenefitsSection";
import IntegrationSection from "../components/IntegrationSection";
import ContactSection from "../components/ContactSection";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      {/* Overview Section */}
      <OverviewSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Integration Section */}
      <IntegrationSection />

      {/* Feature Section */}
      <FeaturesSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
