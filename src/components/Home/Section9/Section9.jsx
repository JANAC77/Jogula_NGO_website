import React from "react";
import { SlideUp, AnimatedButton } from "../../common/AnimationWrappers";

const Section9 = () => {
  return (
    <div className="bg-surface-light py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SlideUp>
          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <svg className="w-10 h-10 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Stay Updated With Our Progress
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter to receive updates on our campaigns, success stories, and ways you can help. We promise not to spam.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm transition-shadow text-slate-700 bg-white"
              required
            />
            <AnimatedButton type="submit" className="whitespace-nowrap px-8 py-4">
              Subscribe
            </AnimatedButton>
          </form>
        </SlideUp>
      </div>
    </div>
  );
};

export default Section9;
