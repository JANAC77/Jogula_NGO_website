import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedImage from "../common/AnimatedImage";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about-us" },
    { name: "VOLUNTEER", path: "/volunteer" },
    { name: "ACTIVITIES", path: "/activities" },
  ];

  const dropdownLinks = [
    { name: "SPONSOR EDUCATION", path: "/sponser-education" },
    { name: "SPONSOR FOOD", path: "/sponser-food" },
  ];

  const additionalLinks = [
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header className="w-full relative z-50 flex flex-col lg:flex-row">

        {/* Left Slanted Logo Block */}
        <div
          className="bg-brand-500 lg:w-[350px] xl:w-[400px] flex justify-center items-center py-4 lg:py-0 relative z-20 shrink-0"
          style={{
            clipPath: window.innerWidth >= 1024 ? 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' : 'none'
          }}
        >
          <Link to="/" onClick={closeMenu} className="flex items-center justify-center lg:pr-10">
            <div className="bg-white rounded-full p-2 w-28 h-28 flex items-center justify-center shadow-lg">
              <AnimatedImage
                className="w-24 h-24 object-contain rounded-full"
                src="/images/jogula_ngo_foundation_logo.png"
                alt="Jogula Foundation"
                animationType="fade"
              />
            </div>
          </Link>

          {/* Mobile Menu Toggle inside the logo block for mobile layout */}
          <button
            onClick={toggleMenu}
            className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white p-2 rounded focus:outline-none"
          >
            {showMenu ? <FaTimes className="w-7 h-7" /> : <FaAlignJustify className="w-7 h-7" />}
          </button>
        </div>

        {/* Right Side (Top Bar + Main Nav) */}
        <div className="flex-1 flex flex-col relative z-10 lg:-ml-[60px]">

          {/* Top Bar */}
          <div className="bg-[#1f1f1f] text-gray-300 py-3 px-6 hidden lg:flex justify-end items-center gap-10">

            <div className="flex items-center gap-3">
              <FiPhoneCall className="text-gray-400 text-3xl" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-wide">+91 9611295969</span>
                <span className="text-xs text-gray-400">Talk to us!</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-gray-400 text-3xl" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-wide">jogulafoundation@gmail.com</span>
                <span className="text-xs text-gray-400">Email Us!</span>
              </div>
            </div>

            <Link
              to="/sponser-education"
              className="border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-2 rounded-full uppercase font-bold text-xs tracking-wider transition-colors ml-4"
            >
              DONATE NOW
            </Link>
          </div>

          {/* Main Navbar */}
          <div className="bg-[#181818] flex-1 flex items-center px-4 lg:px-10 hidden lg:flex">
            <nav className="flex items-center space-x-2 relative">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[13px] font-bold uppercase tracking-wider px-5 py-6 border-b-2 transition-colors ${isActive
                      ? "text-brand-500 border-brand-500"
                      : "text-gray-300 border-transparent hover:text-brand-500"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Your Help Dropdown */}
              <div
                className="relative group px-5 py-6 cursor-pointer border-b-2 border-transparent"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="text-[13px] font-bold uppercase tracking-wider text-gray-300 hover:text-brand-500 transition-colors">
                  YOUR HELP
                </span>

                {showDropdown && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-[#1f1f1f] border-t-2 border-brand-500 shadow-xl z-50 flex flex-col">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="px-5 py-4 text-[13px] font-bold uppercase tracking-wider text-gray-300 hover:text-brand-500 hover:bg-[#181818] transition-colors border-b border-gray-800 last:border-0"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {additionalLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[13px] font-bold uppercase tracking-wider px-5 py-6 border-b-2 transition-colors ${isActive
                      ? "text-brand-500 border-brand-500"
                      : "text-gray-300 border-transparent hover:text-brand-500"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#181818] w-full relative z-40 overflow-hidden"
          >
            <div className="flex flex-col border-t border-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-gray-800 ${location.pathname === link.path ? "text-brand-500" : "text-gray-300 hover:text-brand-500"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-6 py-4 border-b border-gray-800 text-gray-500 text-sm font-bold uppercase tracking-wider">
                YOUR HELP
              </div>
              <div className="pl-10">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-gray-800 ${location.pathname === link.path ? "text-brand-500" : "text-gray-300 hover:text-brand-500"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {additionalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-gray-800 ${location.pathname === link.path ? "text-brand-500" : "text-gray-300 hover:text-brand-500"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="p-6 bg-[#1f1f1f]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <FiPhoneCall className="text-gray-400 text-xl" />
                    <span className="text-white font-bold text-sm">+91 9611295969</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-gray-400 text-xl" />
                    <span className="text-white font-bold text-sm">jogulafoundation@gmail.com</span>
                  </div>
                  <Link
                    to="/sponser-education"
                    onClick={closeMenu}
                    className="border-2 border-brand-500 text-brand-500 text-center py-3 mt-2 rounded-full uppercase font-bold text-sm tracking-wider"
                  >
                    DONATE NOW
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
