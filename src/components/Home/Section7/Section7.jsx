import React from "react";
import { Link } from "react-router-dom";
import { FadeIn, AnimatedButton } from "../../common/AnimationWrappers";

const Section7 = () => {
  return (
    <div className="relative w-full py-24 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 border-[60px] border-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <FadeIn>
          <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-8 leading-tight">
            Be the change you want <br className="hidden md:block" /> to see in the world.
          </h2>
          <p className="text-lg md:text-xl text-brand-50 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are always looking for passionate volunteers to help us in our mission. 
            Join our community today and make a real difference in a child's life.
          </p>
          
          <Link to="/volunteer">
            <AnimatedButton className="bg-white text-brand-700 hover:bg-slate-50 hover:text-brand-800 border-none px-10 py-4 text-lg shadow-xl shadow-brand-900/20">
              Become a Volunteer Today
            </AnimatedButton>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default Section7;
