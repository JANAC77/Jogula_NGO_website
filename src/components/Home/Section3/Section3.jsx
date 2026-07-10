import React from "react";
import jogulaNGO1 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_11.webp";
import jogulaNGO2 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_12.webp";
import jogulaNGO3 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_13.webp";
import jogulaNGO4 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_14.webp";
import AnimatedImage from "../../common/AnimatedImage";
import { StaggerContainer, StaggerItem, HoverCard, SlideUp } from "../../common/AnimationWrappers";

const Section3 = () => {
  const array = [
    {
      img: jogulaNGO1,
      title: "Our Vision",
      desc: "Our vision is to create a society where every child has access to basic necessities, care, and protection, regardless of their background or circumstances.",
    },
    {
      img: jogulaNGO2,
      title: "Our Mission",
      desc: "Our mission is to provide access to basic necessities such as food, shelter, clothing, education, and healthcare to children in need across India.",
    },
    {
      img: jogulaNGO3,
      title: "Our Child Care",
      desc: "We, at Jogula Foundation, understand that every child’s needs are unique, and we strive to provide personalized care and support to each child we serve.",
    },
    {
      img: jogulaNGO4,
      title: "Your Help",
      desc: "Every donation, no matter how small, can make a significant impact on the lives of the children we serve. Support our mission by making a donation today.",
    },
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Our Foundation
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Core Values
          </h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        {/* Values Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {array.map((item, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full overflow-hidden group flex flex-col items-center text-center p-8 border border-slate-100">
                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative shadow-md">
                  <div className="absolute inset-0 bg-brand-500/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <AnimatedImage
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={item.img}
                    alt={item.title}
                    animationType="fade"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-4 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Section3;
