import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-4">
      {/* Enquiry Form Button */}
      <Link 
        to="/contact" 
        className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-500/40 hover:bg-brand-600 hover:scale-110 transition-all cursor-pointer relative group"
      >
        <FaEnvelope size={22} />
        {/* Tooltip */}
        <span className="absolute left-16 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Enquiry Form
        </span>
      </Link>

      {/* Call Button */}
      <a 
        href="tel:+919611295969" 
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/40 hover:bg-blue-700 hover:scale-110 transition-all cursor-pointer relative group"
      >
        <FaPhoneAlt size={22} />
        {/* Tooltip */}
        <span className="absolute left-16 bg-white text-slate-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
