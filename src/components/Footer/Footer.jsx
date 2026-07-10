import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AnimatedImage from "../common/AnimatedImage";

const Footer = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full font-sans">
      


      {/* Main Footer */}
      <footer className="relative bg-[#181818] text-white overflow-hidden">
        
        {/* Desktop Layout - absolute slanted background for left column */}
        <div 
          className="hidden lg:block absolute top-0 bottom-0 left-0 w-[45%] bg-brand-500 z-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        ></div>

        <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row">
          
          {/* Left Column - Contact Info (Sits on top of the slanted blue bg on desktop, gets blue bg on mobile) */}
          <div className="lg:w-[45%] bg-brand-500 lg:bg-transparent py-16 px-6 sm:px-12">
            <h3 className="text-xl font-bold uppercase mb-8 tracking-wider">Contact Info</h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-white mt-1 shrink-0 text-lg" />
                <p className="leading-relaxed font-medium">
                  #30, 3rd Cross, Thulasinagar, Hosahalli Main Road,<br />
                  Doddagollarahatti, Magadi Road,<br />
                  Bengaluru - 560091
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-white shrink-0 text-lg" />
                <p className="font-medium">+91 9611295969</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-white shrink-0 text-lg" />
                <p className="font-medium">jogulafoundation@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Links & Logo */}
          <div className="lg:w-[55%] py-16 px-6 sm:px-12 flex flex-col sm:flex-row justify-between gap-12 lg:pl-20">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-brand-500 text-xl font-bold uppercase mb-8 tracking-wider">Quick Links</h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about-us' },
                  { name: 'Our Activities', path: '/activities' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      onClick={handleExploreClick}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo area */}
            <div className="flex justify-center sm:justify-end items-center">
              <div className="bg-white p-4 rounded-xl shadow-2xl">
                <AnimatedImage
                  className="w-48 object-contain"
                  src="/images/jogula_ngo_foundation_logo.png"
                  alt="Jogula Foundation Logo"
                  animationType="fade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-[#111] py-5 relative z-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>Copyright © {new Date().getFullYear()} Jogula Foundation | Website By: Innomatrics Tech Banglore</p>
            <button 
              onClick={handleExploreClick}
              className="mt-4 md:mt-0 bg-[#1f1f1f] hover:bg-gray-800 p-3 rounded transition-colors text-white"
              aria-label="Scroll to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
