"use client";

import Image from "next/image";
import Countdown from "./Countdown";
import { Cpu, Atom, Sparkles, ArrowRight, ShieldCheck, Users } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
  onScrollToForm: () => void;
}

export default function Hero({ onOpenModal, onScrollToForm }: HeroProps) {
  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-cyan-500/30 px-4 py-2 rounded-full mb-6 shadow-xl backdrop-blur-md">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
            Official NGO Platform Construction In Progress
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
          Empowering Africa&apos;s Future Through{" "}
          <span className="gradient-text-cyan">Quantum Science</span> &amp;{" "}
          <span className="gradient-text-gold">Frontier AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2.5xl mx-auto leading-relaxed mb-8">
          <strong className="text-white">Quantum Minds Africa</strong> is a non-governmental organization 
          building accessible quantum computing education, high-impact youth research labs, 
          and tech leadership networks across the African continent.
        </p>

        {/* Launch Countdown Component */}
        <Countdown />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <span>Notify Me &amp; Early Access</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center space-x-2"
          >
            <Users className="w-5 h-5 text-amber-400" />
            <span>Join as Sponsor or Volunteer</span>
          </button>
        </div>

        {/* Quick Highlights Pill Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center space-x-2 glass-pill py-2.5 px-3 rounded-lg">
            <Atom className="w-4 h-4 text-cyan-400" />
            <span>Quantum Education</span>
          </div>
          <div className="flex items-center justify-center space-x-2 glass-pill py-2.5 px-3 rounded-lg">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>AI Innovation Labs</span>
          </div>
          <div className="flex items-center justify-center space-x-2 glass-pill py-2.5 px-3 rounded-lg">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Pan-African Network</span>
          </div>
          <div className="flex items-center justify-center space-x-2 glass-pill py-2.5 px-3 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Ethical Governance</span>
          </div>
        </div>
      </div>

      {/* Hero Showcase Image Frame */}
      <div className="mt-14 relative max-w-5xl mx-auto rounded-2xl p-2 glass-card border border-white/15 shadow-2xl overflow-hidden group">
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Quantum Minds Africa Innovation Hub Conceptual Artwork"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 gap-3">
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Pan-African Youth Quantum &amp; AI Research Labs</span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Connecting top minds across Nairobi, Lagos, Accra, Kigali, Cape Town, &amp; Cairo.
              </p>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full whitespace-nowrap">
              STATUS: PRE-LAUNCH Hub Operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
