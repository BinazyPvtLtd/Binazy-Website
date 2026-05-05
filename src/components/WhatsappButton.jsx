import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappButton = () => {
  const phoneNumber = "919616185503";
  const message = "Hello! I want to connect with you";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&hl=en`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-5 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 hover:shadow-2xl transition-all duration-300">
      <IoLogoWhatsapp className="text-white" size={28} />
    </a>
  );
};

export default WhatsappButton;
