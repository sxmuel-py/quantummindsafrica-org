"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Quantum Minds Africa (quantummindsafrica.org)?",
      answer:
        "Quantum Minds Africa (QMA) is a Pan-African non-governmental organization (NGO) created to democratize access to quantum science, artificial intelligence, and high-performance computing education across the African continent.",
    },
    {
      question: "When is the official platform launching?",
      answer:
        "Our full learning portal, seed grants, and university hardware hub program will officially open in Q4 2026. However, pre-launch community bootcamps and early partner registration are open right now.",
    },
    {
      question: "Are QMA educational resources free for African students?",
      answer:
        "Yes! 100% of QMA's foundational quantum computing bootcamps, simulator access tools, and learning materials are fully non-profit and free for students and university scholars across Africa.",
    },
    {
      question: "How can universities or student clubs collaborate with QMA?",
      answer:
        "Universities and STEM clubs can register to become an accredited QMA Campus Hub. We provide curriculum materials, hardware compute credits, guest lecture mentorship, and event funding.",
    },
    {
      question: "How can corporate sponsors or donors support QMA?",
      answer:
        "Sponsors can support student scholarship funds, sponsor cloud quantum compute credits, donate lab hardware, or sponsor regional hackathons. Click 'Get Involved / Partner' in the header to connect with our team.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          Frequently Asked Questions
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-3 flex items-center justify-center space-x-2">
          <HelpCircle className="w-7 h-7 text-amber-400" />
          <span>Everything You Need To Know</span>
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-card border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between hover:text-cyan-400 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-white/5 pt-3 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
