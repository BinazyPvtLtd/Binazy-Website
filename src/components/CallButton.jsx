import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const phonenumber = "+919616185503";
  return (
    <a
      href={`tel:${phonenumber}`}
      className="group fixed bottom-20 right-5 z-50 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 hover:scale-110 hover:shadow-2xl transition-all duration-300">
      <FaPhoneAlt className="text-white" size={20} />
    </a>
  );
};

export default CallButton;
