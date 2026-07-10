import React from "react";
import { StaggerContainer, StaggerItem, SlideUp } from "../../common/AnimationWrappers";

const Section4 = () => {
  const stats = [
    { number: "5000+", label: "Children Helped", icon: "❤️" },
    { number: "25+", label: "Active Campaigns", icon: "🌟" },
    { number: "150+", label: "Volunteers", icon: "🤝" },
    { number: "10+", label: "Cities Reached", icon: "📍" },
  ];

  return (
    <div className="w-full bg-[#181818] py-20 border-y border-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide mb-4">
            Our Impact
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-800">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="flex flex-col items-center text-center px-4">
              <div className="text-4xl mb-4 transform hover:scale-110 transition-transform cursor-default">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {stat.number}
              </h3>
              <div className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Section4;
