import React from "react";
import sponser_food from "../../assets/Images/BannerImages/sponser_food.jpeg";
import AnimatedImage from "../common/AnimatedImage";
import { Link } from "react-router-dom";
import { SlideUp, FadeIn, HoverCard, AnimatedButton } from "../common/AnimationWrappers";

const SponserFood = () => {
  const foodOptions = [
    { title: "BREAKFAST", price: "1500", icon: "🍳" },
    { title: "LUNCH", price: "2000", icon: "🍱" },
    { title: "HOLLIGE DINNER", price: "2500", icon: "🍲" },
    { title: "LUNCH AND DINNER", price: "4500", icon: "🍽️" },
    { title: "FULL DAY MEALS", price: "6000", icon: "🌟" },
  ];

  return (
    <div className="bg-surface-light min-h-screen py-24">
      {/* Hero Section */}
      <SlideUp className="text-center mb-16 px-4">
        <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
          Nourish a Child
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
          SPONSOR FOOD
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Every contribution can make a significant difference in the lives of these children.
        </p>
      </SlideUp>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Information & Main Image */}
          <FadeIn delay={0.2} className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h2 className="text-2xl font-display font-bold text-slate-800 mb-4 relative z-10">Why Sponsor Food?</h2>
              <p className="text-slate-600 mb-4 relative z-10">
                Sponsoring food for the children is an excellent way to make a direct impact on the lives of underprivileged children.
              </p>
              <p className="text-slate-600 font-medium relative z-10">
                Donors and sponsors can choose to sponsor a specific meal plan that suits their capacity.
              </p>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-100">
              <AnimatedImage src={sponser_food} alt="Children eating" className="w-full h-full object-cover aspect-square" animationType="fade" />
            </div>
          </FadeIn>

          {/* Donation Options Grid */}
          <FadeIn delay={0.4} className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {foodOptions.map((option, index) => (
              <HoverCard 
                key={index}
                className={`flex flex-col items-center text-center justify-between p-8 ${index === 4 ? 'md:col-span-2 bg-gradient-to-br from-brand-50 to-white border-brand-100' : ''}`}
              >
                <div>
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-800 mb-2">{option.title}</h3>
                  <div className="text-3xl font-display font-bold text-brand-500 mb-6">
                    <span className="text-lg text-slate-400 font-sans mr-1">INR</span>
                    {option.price}
                  </div>
                </div>
                
                <AnimatedButton className="w-full mt-4">
                  <Link 
                    to="/sponser-education"
                    className="block w-full bg-slate-900 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    Donate Now
                    <span className="text-lg">→</span>
                  </Link>
                </AnimatedButton>
              </HoverCard>
            ))}
          </FadeIn>

        </div>
      </div>
    </div>
  );
};

export default SponserFood;
