import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import "./Volunteer.css";
import { FadeIn, SlideUp, HoverCard, AnimatedButton } from "../common/AnimationWrappers";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_015niaa", // Replace with your EmailJS service ID
        "template_00iqdwk", // Replace with your EmailJS template ID
        e.target,
        "cWgrspUo4bPeXc8ky" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="bg-surface-light min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Make A Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Need Your Heartful Help
          </h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Text Content */}
          <FadeIn delay={0.2} className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-slate-600 text-lg leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              The single funds allow you to advise a smaller number of grants on a
              schedule or as desired, to charitable organizations, causes,
              countries, or regions. This flexibility ensures that your
              contributions have a targeted impact, addressing the specific needs
              you are passionate about.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed bg-brand-50 p-6 rounded-2xl border border-brand-100">
              Our strategy brings win-win survival techniques to the forefront,
              ensuring proactive and effective support for our causes. We aim to
              foster a new normal that resonates with the values and expectations
              of generation X, and beyond. As we move forward, our approach is
              geared towards implementing streamlined cloud solutions that enhance
              efficiency and reach.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              In today's digital age, user-generated content plays a crucial role
              in real-time engagement, providing multiple touchpoints for
              offshoring and broadening our outreach. This dynamic interaction
              helps us stay connected with our donors and beneficiaries, ensuring
              transparency and fostering trust.
            </p>
            <p className="text-white text-lg leading-relaxed font-medium bg-slate-900 p-6 rounded-2xl shadow-lg">
              By leveraging modern technology and strategic planning, we can
              create a sustainable model for charitable giving, empowering
              communities and driving positive change across the globe.
            </p>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.4} className="w-full lg:w-1/2">
            <HoverCard className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-8 text-center">Become a Volunteer</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your address"
                  />
                </div>
                <AnimatedButton className="w-full mt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-slate-900 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </AnimatedButton>
              </form>
            </HoverCard>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
