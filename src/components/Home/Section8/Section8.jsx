import React, { useState } from "react";
import { SlideUp, FadeIn } from "../../common/AnimationWrappers";

const faqs = [
  {
    question: "How can I donate to Jogula Foundation?",
    answer: "You can donate securely through our website via UPI, bank transfer, or by scanning the QR code in the 'Sponsor Education' section. Every contribution goes directly towards our active causes."
  },
  {
    question: "Are my donations tax-deductible?",
    answer: "Yes! Jogula Foundation is a registered NGO. All donations made to us are eligible for tax exemption under section 80G of the Income Tax Act."
  },
  {
    question: "Can I volunteer if I don't live nearby?",
    answer: "Absolutely. While we have on-ground volunteering for local events, we also offer remote volunteering opportunities such as social media management, content writing, and digital fundraising."
  },
  {
    question: "How do you ensure transparency with funds?",
    answer: "We publish annual reports detailing exactly how funds are utilized. We maintain a strict 100% transparency policy, ensuring your money goes directly to those in need."
  }
];

const Section8 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white py-24 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SlideUp className="text-center mb-16">
          <div className="inline-block bg-brand-50 border border-brand-100 text-brand-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Learn More
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </SlideUp>

        <FadeIn delay={0.2} className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-colors duration-300 ${openIndex === index ? 'border-brand-300 bg-brand-50/30' : 'border-slate-200 bg-white hover:border-brand-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${openIndex === index ? 'bg-brand-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-6 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </FadeIn>

      </div>
    </div>
  );
};

export default Section8;
