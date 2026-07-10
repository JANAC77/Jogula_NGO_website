import React from "react";
import qrCodeNew from "../../assets/Images/QRCode/qrcode Jogula Foundation.jpg";
import { FiCheckCircle } from "react-icons/fi";
import AnimatedImage from "../common/AnimatedImage";
import { FadeIn, SlideUp, HoverCard } from "../common/AnimationWrappers";

const SponserEducation = () => {
  return (
    <div className="bg-surface-light min-h-screen py-24">
      {/* Header Section */}
      <SlideUp className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
          Sponsor <span className="text-brand-500">Education</span>
        </h1>
        <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Education is a powerful tool to break the cycle of poverty and
          empower future generations. Your sponsorship can provide a child
          with access to quality education, transforming their life forever.
        </p>
      </SlideUp>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Information Column */}
          <FadeIn className="flex flex-col gap-8 justify-center" delay={0.2}>
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="text-brand-500">💡</span> 
                Why Sponsor Education?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                When you sponsor a child's education, you are investing in their
                future. Education empowers children to overcome challenges,
                achieve their dreams, and contribute positively to society.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Your contribution goes directly towards school fees, books,
                uniforms, and other educational materials. Together, we can
                ensure that every child has the opportunity to learn and grow.
              </p>
            </div>
            
            <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
              <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-200 text-brand-700 flex items-center justify-center text-sm">📚</span>
                Requirements of Children
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "School Bags", "Playthings*", "Shoes, Socks, Slippers", "General Knowledge Book",
                  "Note Books", "Drawing Books", "Geometry Box", "Colour Pencils (Crayons)",
                  "Stationeries", "Pencils & Rubbers", "Uniforms", "Pens",
                  "Plates & Glass", "Tables Books", "Blankets & Sweaters", "Towels & Handkerchiefs",
                  "Mat", "Mosquito Net", "Computer & Tables", "Chairs"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-brand-200 shadow-sm hover:shadow">
                    <FiCheckCircle className="text-brand-500 flex-shrink-0" size={18} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-brand-200 text-sm text-slate-500 italic">
                * (Bat & Ball, Volleyball, Carom Board, Badminton set, Chess Board, Skipping)
              </div>
            </div>
          </FadeIn>

          {/* Donation Column */}
          <HoverCard className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 lg:p-10 text-white shadow-2xl flex flex-col items-center border-none">
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-4 text-center">
              Make a Donation
            </h2>
            <p className="text-brand-100 text-center mb-8 max-w-sm">
              Scan the QR code below to contribute directly via UPI. Every contribution counts.
            </p>
            
            <div className="bg-white p-4 rounded-2xl shadow-inner mb-8 w-full max-w-[250px]">
              <AnimatedImage src={qrCodeNew} alt="Donate QR Code" className="w-full h-auto rounded-lg" animationType="zoom" />
            </div>
            
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-center border-b border-white/20 pb-4">ACCOUNT DETAILS</h3>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex justify-between items-start border-b border-white/10 pb-2 gap-4">
                  <span className="text-brand-100 whitespace-nowrap mt-0.5">Holder:</span>
                  <span className="font-bold text-right break-words max-w-[60%]">JOGULA FOUNDATION</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/10 pb-2 gap-4">
                  <span className="text-brand-100 whitespace-nowrap mt-0.5">A/C No:</span>
                  <span className="font-bold text-right tracking-wider break-all">50200117522714</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/10 pb-2 gap-4">
                  <span className="text-brand-100 whitespace-nowrap mt-0.5">IFSC:</span>
                  <span className="font-bold text-right break-all">HDFC0006000</span>
                </div>
                <div className="flex justify-between items-start border-b border-white/10 pb-2 gap-4">
                  <span className="text-brand-100 whitespace-nowrap mt-0.5">Branch:</span>
                  <span className="font-bold text-right break-words max-w-[60%]">HMT LAYOUT BRANCH</span>
                </div>
                <div className="mt-4 pt-4 text-center">
                  <p className="text-xs text-brand-200 mb-1">PhonePe / Google Pay / -</p>
                  <p className="text-sm font-bold tracking-wide break-all">9611295969@hdfcbank</p>
                </div>
              </div>
            </div>
          </HoverCard>

        </div>
      </div>
    </div>
  );
};

export default SponserEducation;
