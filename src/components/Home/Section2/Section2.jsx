import React from "react";
import "../Section2/Section2.css";
import AboutImg from "../../../assets/Images/BannerImages/aboutUsHome.webp";
import { Link } from "react-router-dom";
import AnimatedImage from "../../common/AnimatedImage";
import { SlideUp, HoverCard } from "../../common/AnimationWrappers";

const Section2 = () => {
  return (
    <div className="flex w-[90%] mx-auto flex-col gap-24 py-16">
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <HoverCard className="flex-1 bg-gradient-to-br from-brand-500 to-brand-700 p-10 flex flex-col items-center justify-center text-center !border-none">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Join Hands</h2>
          <p className="text-brand-100 mb-8 max-w-sm">
            Together we can make a difference. Join our community of supporters and help us reach more children.
          </p>
          <Link
            to="/sponser-education"
            className="bg-white text-brand-600 px-8 py-3 rounded-full font-bold hover:bg-brand-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Sponsor a Child
          </Link>
        </HoverCard>

        <HoverCard className="flex-1 p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-display font-bold text-slate-800 mb-6">Get Started</h2>
          <p className="text-slate-500 mb-8 max-w-sm">
            Take the first step towards changing a life. Your contribution ensures a child's bright future.
          </p>
          <Link
            to="/volunteer"
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Become a Volunteer
          </Link>
        </HoverCard>
      </div>

      {/* About Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <SlideUp delay={0.1}>
            <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 self-start">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              JOGULA NGO
            </h1>
            <div className="w-20 h-1.5 bg-brand-500 rounded-full my-4"></div>
          </SlideUp>
          
          <SlideUp delay={0.2}>
            <p className="text-lg text-slate-600 leading-relaxed">
              Jogula NGO Foundation warmly welcomes you. We are a beacon of hope
              for children in need of basic necessities.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.3}>
            <p className="text-lg text-slate-600 leading-relaxed">
              Since our inception in 2019-20, we have grown from nurturing a
              mere four children to building a strong family of 30 children today.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.4}>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our founding members were a group of passionate youngsters who
              came together with a shared goal of empowering children in need to
              become self-reliant and independent as early as possible in life.
            </p>
          </SlideUp>
          
          <SlideUp delay={0.5}>
            <Link to="/about-us" className="text-brand-500 font-bold mt-4 hover:text-brand-600 flex items-center gap-2 group w-max hover:translate-x-2 transition-transform">
              Read Our Story
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </SlideUp>
        </div>
        <div className="lg:w-[40%] flex justify-center lg:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 relative group">
              <AnimatedImage 
                src={AboutImg} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                alt="Children at Jogula NGO" 
                animationType="zoom"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
