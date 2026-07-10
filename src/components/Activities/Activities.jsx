import React from "react";
import image11 from "../../assets/Images/Gallery/image6.jpg"
import AnimatedImage from "../common/AnimatedImage";
import { FadeIn, SlideUp } from "../common/AnimationWrappers";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div className="bg-surface-light min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            What We Do
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            ACTIVITIES
          </h1>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        <FadeIn delay={0.1} className="w-full flex justify-center mb-16">
          <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-100 p-2 bg-white">
            <AnimatedImage src={image11} alt="Activities" className="w-full h-auto rounded-2xl object-cover" animationType="zoom" />
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <p className="text-lg md:text-xl leading-relaxed text-slate-700">
                Our India, a country with 1.2 billion people with growing needs and a
                dependent economy, often finds that government efforts to reach the
                needy can be challenging. We, at Jogula NGO Foundation in Bengaluru, as
                citizens of this nation, can join hands to restore glory and make India
                hunger-free. Our organization takes care of the children, ensuring they
                have a brighter future.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-brand-50 p-8 md:p-10 rounded-3xl border-l-8 border-brand-500 shadow-md">
              <p className="italic text-lg md:text-xl leading-relaxed text-brand-900 font-medium">
                Jogula NGO Foundation in Bengaluru provides education, food, clothing,
                and shelter to children in need. "Communication is a skill that you can
                learn. It's like riding a bicycle or typing. If you're willing to work
                at it, you can rapidly improve the quality of every part of your life."
                - Brian Tracy While only a lucky few inherit soft skills, it is not
                impossible for others to gain them. Jogula NGO Foundation trains
                aspirants in soft skills for better employability.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 text-brand-600 border-b border-slate-100 pb-4">
                We, at Jogula Foundation:
              </h3>
              <ul className="space-y-4 text-slate-700 text-lg md:text-xl list-none">
                {[
                  "provide literacy to the illiterate",
                  "provide job oriented in house training programs depending up on individuals aptitude and interest.",
                  "encourage pursuit of school and college education upto diploma, degree and also post graduate level.",
                  "offer counseling services to the mentally disturbed.",
                  "give vocational guidance to the underprivileged.",
                  "Periodical excursions are arranged to educate and entertain.",
                  "Trust service to instill self respect and self confidence in order to enable the children's to become dignified citizens of the society.",
                  "to assist the destitute, widows, old, orphans, physically handicapped, blind, deaf, dumb, lepers and mentally retarded.",
                  "to make and give free food, clothing, and other necessaries to the poor, deserving, and needy."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>

    </div>
  );
};

export default Activities;
