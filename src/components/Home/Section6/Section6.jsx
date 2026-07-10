import React from "react";
import { FadeIn, SlideUp, HoverCard, StaggerContainer, StaggerItem } from "../../common/AnimationWrappers";

const testimonials = [
  {
    quote: "The foundation provided me with the notebooks and uniforms I needed to stay in school. I am so grateful for their support.",
    name: "Raju",
    role: "Student",
    initial: "R",
    color: "bg-blue-500",
  },
  {
    quote: "Volunteering here has been the most rewarding experience of my life. Seeing the smiles on the children's faces makes it all worth it.",
    name: "Priya Sharma",
    role: "Volunteer",
    initial: "P",
    color: "bg-brand-500",
  },
  {
    quote: "Jogula Day Care gave my child a safe and loving environment while I work. I can't thank the team enough.",
    name: "Lakshmi",
    role: "Parent",
    initial: "L",
    color: "bg-purple-500",
  }
];

const Section6 = () => {
  return (
    <div className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-white shadow-sm text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Stories of Impact
          </h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full p-8 bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-xl shadow-slate-200/50 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-brand-100 opacity-50">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex flex-col h-full z-10 relative">
                  <p className="text-slate-700 italic text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold text-xl shadow-md`}>
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-brand-600 text-sm font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Section6;
