import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import { FadeIn, SlideUp, HoverCard, AnimatedButton } from "../common/AnimationWrappers";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_015niaa",
        "template_m217c3z",
        e.target,
        "cWgrspUo4bPeXc8ky"
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
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-surface-light min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Reach Out
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </SlideUp>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Section */}
          <FadeIn delay={0.2} className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="text-brand-500">📍</span> Ashrama Address:
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                #30, 3rd Cross, Thulasinagar, Hosahalli Main Road,
                Doddagollarahatti, Magadi Road, Bengaluru - 560091
              </p>
            </div>
            
            <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
              <h3 className="text-2xl font-bold text-brand-900 mb-4 flex items-center gap-3">
                <span className="text-brand-500">📞</span> Contact:
              </h3>
              <div className="space-y-2 text-brand-800 font-medium text-lg">
                <p>Ph no: +91 9611295969</p>
                <p>Email-id: jogulafoundation@gmail.com</p>
              </div>
            </div>

            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-100">
              <iframe
                src="https://maps.google.com/maps?q=12.9926202%2C77.4756731&z=17&hl=en&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jogula Foundation Location"
                className="filter hover:brightness-110 transition-all duration-300"
              ></iframe>
            </div>
          </FadeIn>

          {/* Form Section */}
          <FadeIn delay={0.4} className="w-full lg:w-1/2">
            <HoverCard className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Send us a Message</h3>
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
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all h-32 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <AnimatedButton className="w-full mt-4">
                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-brand-500 transition-colors duration-300"
                  >
                    Send Message
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

export default Contact;
