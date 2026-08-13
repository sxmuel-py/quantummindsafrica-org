"use client";

import { useState } from "react";
import { GraduationCap, Rocket, Users2, ShieldAlert, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function MissionPillars() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "education",
      icon: GraduationCap,
      title: "Quantum & AI Education",
      subtitle: "University Curricula & Open Access Workshops",
      badge: "Target: 25,000+ Students",
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-400",
      description:
        "Democratizing quantum computing and artificial intelligence knowledge across African universities through subsidized open-access bootcamps, hardware simulator labs, and expert mentorship.",
      highlights: [
        "Interactive Qiskit & Cirq hands-on developer workshops",
        "Subsidized certification grants for African undergraduate & graduate students",
        "Open-source textbook localized for African research context",
        "Faculty training programs with global quantum computing institutes",
      ],
    },
    {
      id: "innovation",
      icon: Rocket,
      title: "Youth Tech Incubators",
      subtitle: "African Frontier Science & Startup Labs",
      badge: "Target: 50+ African Startups",
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-400",
      description:
        "Incubating young African engineers and researchers building practical quantum algorithms, climate science optimizations, financial modeling tools, and AI solutions tailored to local challenges.",
      highlights: [
        "Non-equity seed funding and cloud GPU / QPU compute credits",
        "Direct access to global quantum hardware provider testbeds",
        "Bespoke mentorship from leading Diaspora scientists",
        "Annual Pan-African Quantum Hackathon & Expo",
      ],
    },
    {
      id: "diversity",
      icon: Users2,
      title: "Women in Quantum & AI",
      subtitle: "Closing the Gender Gap in Frontier Tech",
      badge: "Target: 50% Female Leadership",
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-400",
      description:
        "Building dedicated fellowship tracks, leadership grants, and research stipends specifically designed to empower African female scientists and innovators in computational physics & AI.",
      highlights: [
        "Specialized postgraduate research fellowships for female scholars",
        "1-on-1 career shadowing with senior tech executive mentors",
        "Safe collaborative learning communities and peer networks",
        "Travel stipends for international quantum physics symposiums",
      ],
    },
    {
      id: "policy",
      icon: ShieldAlert,
      title: "Digital Ethics & Governance",
      subtitle: "Post-Quantum Security & Tech Policy",
      badge: "Target: Policy Advisory Across 15+ Nations",
      color: "from-purple-500 to-indigo-600",
      textColor: "text-purple-400",
      description:
        "Advising regional policy leaders and institutions on preparing infrastructure for Post-Quantum Cryptography (PQC), ethical AI deployment, and data sovereignty across Africa.",
      highlights: [
        "Post-Quantum Cryptography preparedness frameworks for financial systems",
        "Policy whitepapers on ethical AI alignment for African governance",
        "Cybersecurity readiness audits for national digital infrastructure",
        "Roundtable forums uniting tech founders, legal scholars, & policymakers",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
          Our Strategic Focus
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-4">
          Core Pillars of <span className="gradient-text-cyan">Quantum Minds Africa</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-3">
          Discover how our NGO is laying the foundational infrastructure for Africa&apos;s leadership in the quantum era.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const isSelected = activeTab === index;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(index)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-900 border-cyan-500/70 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40"
                  : "glass-card border-white/10 hover:border-white/20 text-slate-400 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`p-2.5 rounded-lg ${
                    isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">0{index + 1}</span>
              </div>
              <div>
                <h3 className={`font-bold text-sm sm:text-base ${isSelected ? "text-white" : ""}`}>
                  {pillar.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tab Details Display */}
      {(() => {
        const pillar = pillars[activeTab];
        const Icon = pillar.icon;
        return (
          <div className="glass-card p-6 sm:p-10 border border-white/15 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color}`} />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-slate-900 border border-white/10 ${pillar.textColor}`}>
                    {pillar.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Vertical Initiative</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mb-4">{pillar.subtitle}</p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2.5">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Card Side */}
              <div className="lg:col-span-5 bg-slate-950/60 p-6 rounded-xl border border-white/10 flex flex-col justify-between h-full min-h-[220px]">
                <div className="flex items-center justify-between">
                  <Icon className={`w-10 h-10 ${pillar.textColor}`} />
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded">
                    QMA NGO Vertical
                  </span>
                </div>

                <div className="my-6">
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Impact Goal</div>
                  <div className="text-2xl font-bold text-white">{pillar.badge}</div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${pillar.color} w-3/4 rounded-full`} />
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center justify-between pt-3 border-t border-white/10">
                  <span>Launching Q4 2026</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
