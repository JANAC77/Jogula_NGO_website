import React from "react";
import { FadeIn, SlideUp, HoverCard, StaggerContainer, StaggerItem, AnimatedButton } from "../../common/AnimationWrappers";
import { Link } from "react-router-dom";

const campaigns = [
  {
    title: "Winter Clothes Drive",
    category: "URGENT",
    desc: "Providing warm clothing to children in rural areas before winter hits.",
    impact: "Protecting 200+ kids from the cold",
  },
  {
    title: "Education For All",
    category: "EDUCATION",
    desc: "Supplying notebooks, stationery, and bags to unprivileged students.",
    impact: "Equipping 500 students for success",
  },
  {
    title: "Healthy Meals",
    category: "NUTRITION",
    desc: "Ensuring daily nutritious meals for kids attending our day care centers.",
    impact: "Serving 1,000+ healthy meals monthly",
  }
];

const Section5 = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Active Causes
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Upcoming Campaigns
          </h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full p-8 border border-slate-100 rounded-3xl bg-white shadow-md hover:shadow-2xl transition-shadow flex flex-col group relative overflow-hidden">
                {/* Subtle top border accent */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${campaign.category === 'URGENT' ? 'bg-red-500' : 'bg-brand-500'} opacity-80`}></div>
                
                <div className="flex justify-between items-center mb-6 mt-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${campaign.category === 'URGENT' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-brand-50 text-brand-600 border border-brand-100'}`}>
                    {campaign.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{campaign.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{campaign.desc}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-6 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">❤️</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-snug">
                      {campaign.impact}
                    </span>
                  </div>
                  <Link to="/sponser-education">
                    <AnimatedButton className="w-full justify-center bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/30 border-none font-bold py-3">
                      Donate Now
                    </AnimatedButton>
                  </Link>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Section5;
