import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bannerImage1 from "../../..//assets/Images/BannerImages/Banner_Images_1.webp";
import bannerImage2 from "../../..//assets/Images/BannerImages/Banner_Images_2.webp";
import bannerImage3 from "../../..//assets/Images/BannerImages/Banner_Images_3.webp";
import bannerImage4 from "../../..//assets/Images/BannerImages/Banner_Images_4.webp";

const slideImages = [
  { url: bannerImage1 },
  { url: bannerImage2 },
  { url: bannerImage3 },
  { url: bannerImage4 },
];

const Section1 = () => {
  const buttonStyle = {
    width: "50px",
    height: "50px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: "0 20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const properties = {
    prevArrow: (
      <button style={buttonStyle} className="hover:bg-white/40 hover:scale-110 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={buttonStyle} className="hover:bg-white/40 hover:scale-110 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path fillRule="evenodd" d="M8.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L14.586 12 8.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    ),
    indicators: (i) => (
      <div className="indicator-dot w-3 h-3 mx-1.5 rounded-full bg-white/50 cursor-pointer transition-all duration-300 hover:bg-white/80"></div>
    ),
    duration: 5000,
    transitionDuration: 800,
    infinite: true,
  };

  return (
    <div className="relative w-full bg-slate-900 group">
      {/* Custom Styles for active indicators */}
      <style>{`
        .indicators {
          position: absolute !important;
          bottom: 20px !important;
          left: 0 !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          z-index: 20 !important;
        }
        .indicators .active .indicator-dot {
          background-color: white !important;
          width: 32px !important;
          border-radius: 9999px !important;
        }
      `}</style>
      
      <Fade {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="w-full">
            <div
              className="w-full h-[30vh] md:h-[45vh] lg:h-[55vh] flex items-center justify-center relative"
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              {/* Optional dark overlay for better contrast if text is added later */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Section1;
