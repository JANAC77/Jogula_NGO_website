import React from "react";
import AboutUsBanner from "../../assets/Images/About_Us/AboutUsNew.webp";
import Section2Img from "../../assets/Images/About_Us/JOGULA_N_1.jpg";
import AnimatedImage from "../common/AnimatedImage";
import { FadeIn, SlideUp, AnimatedButton } from "../common/AnimationWrappers";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-surface-light min-h-screen">
      {/* Section 1 - Premium Hero Side-by-Side */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[35vh]">
        <div className="w-full md:w-2/5 bg-brand-600 flex flex-col justify-center items-center p-8 md:p-12 text-center">
          <SlideUp>
            <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
              Our Story
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-display font-bold tracking-tight">ABOUT US</h1>
            <div className="w-16 h-1 bg-brand-300 mx-auto mt-6 rounded-full shadow-sm"></div>
          </SlideUp>
        </div>
        <div className="w-full md:w-3/5 h-48 md:h-full">
          <AnimatedImage className="w-full h-full object-cover object-right" src={AboutUsBanner} alt="About Us" animationType="fade" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section 2 - Foundation Details */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <FadeIn delay={0.2} className="w-full lg:w-5/12">
            <div className="relative p-4 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <AnimatedImage
                className="w-full h-auto rounded-2xl object-cover"
                src={Section2Img}
                alt="Jogula NGO Bangalore"
                animationType="slide"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-500 rounded-3xl -z-10 blur-xl opacity-50"></div>
            </div>
          </FadeIn>
          
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            <SlideUp>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 border-b border-brand-100 pb-4 inline-block">
                JOGULA NGO FOUNDATION
              </h2>
            </SlideUp>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <FadeIn delay={0.1}>
                <p>
                  Jogula NGO Foundation is a non-profit organization dedicated to
                  improving the lives of children in need across India. Our
                  organization was founded in 2019-20 with a mission to provide
                  access to basic necessities, education, and healthcare services to
                  children who need it the most.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  Since our inception, we have been working tirelessly to create a
                  positive impact on the lives of children in need. We provide
                  comprehensive child care services, including access to nutritious
                  food, safe and comfortable living conditions, quality education,
                  and healthcare services. We also provide emotional and
                  psychological support to children who have experienced trauma or
                  loss.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  At Jogula, we believe that every child deserves a chance to
                  succeed and reach their full potential. We strive to provide a
                  nurturing and supportive environment where children can feel safe,
                  loved, and cared for. Our team of caregivers, teachers, and
                  counselors are dedicated to creating a family-like atmosphere
                  where children can thrive and grow.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Our organization relies on the generosity of donors to continue
                  providing vital services to children in need. We are grateful to
                  all of our supporters who share our commitment to improving the
                  lives of children in need.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="font-medium text-slate-800 bg-brand-50 p-4 rounded-xl border border-brand-100">
                  If you would like to learn more about Jogula NGO Foundation and
                  our work, please visit our website or contact us directly.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Section 3 - Founders */}
        <div className="max-w-4xl mx-auto mb-32">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              About the Founders
            </h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
          </SlideUp>
          
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
              <p>
                Harini, Meena, and Hanumanatharaya are the dedicated founders and
                trustees of Jogula NGO Child Foundation. Together, they work
                tirelessly to improve the lives of underprivileged children in
                their community.
              </p>
              <p>
                Harini is a passionate and driven individual who started Jogula
                NGO Child Foundation with the vision of creating a better future
                for children in need. Her commitment to the cause is evident in
                her tireless efforts to fundraise, manage operations, and build
                partnerships to support the organization’s mission.
              </p>
              <p>
                Meena is a dedicated and enthusiastic trustee who brings a wealth
                of experience and expertise to the organization. Her skills in
                finance, administration, and project management have been
                invaluable in helping Jogula NGO Child Foundation grow and expand
                its impact over the years.
              </p>
              <p>
                Hanumanatharaya is a compassionate and empathetic trustee who is
                deeply committed to making a positive difference in the lives of
                children. He plays a key role in driving the organization’s
                programs and initiatives, ensuring that the needs of the children
                are always at the forefront.
              </p>
              <p className="font-medium text-slate-800 bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-500">
                Together, Harini, Meena, and Hanumanatharaya are a formidable team
                of individuals who are deeply committed to creating a brighter
                future for children in need. Their tireless efforts and unwavering
                dedication are an inspiration to all who know them, and they
                continue to make a positive impact on the lives of countless
                children through their work with Jogula NGO Child Foundation.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Section 4 - CTA */}
      <FadeIn delay={0.2} className="w-full">
        <div className="bg-brand-600 py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <SlideUp>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  PLEASE RAISE YOUR HAND
                </h2>
                <p className="text-xl text-brand-100 font-medium italic">
                  “You must be the change You want to see in the world.”
                </p>
              </SlideUp>
            </div>
            <AnimatedButton>
              <Link to="/sponser-education" className="inline-block bg-white text-brand-600 px-10 py-4 font-bold text-lg rounded-full hover:bg-slate-900 hover:text-white transition-colors duration-300 shadow-xl">
                DONATE NOW
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
