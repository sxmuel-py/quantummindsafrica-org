"use client";

import Image from "next/image";
import { Globe, Mail, Heart, Twitter, Linkedin, Github, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-white/10 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-cyan-500/50">
                <Image
                  src="/images/logo.png"
                  alt="QMA Emblem Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Quantum Minds Africa
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              A Pan-African Non-Governmental Organization dedicated to advancing quantum computing, 
              frontier AI literacy, and youth innovation hubs across Africa.
            </p>
            <div className="flex items-center space-x-2 text-xs text-cyan-400 font-mono">
              <Globe className="w-3.5 h-3.5" />
              <span>Official Domain: quantummindsafrica.org</span>
            </div>
          </div>

          {/* Direct Contact & Social */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Contact &amp; Governance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:contact@quantummindsafrica.org" className="hover:text-cyan-400 transition-colors">
                  contact@quantummindsafrica.org
                </a>
              </li>
              <li className="text-slate-400">
                HQ Focus: Pan-African Operations (Nairobi &bull; Lagos &bull; Kigali &bull; Cape Town)
              </li>
              <li className="text-slate-500">
                Non-Profit Registration Pending Final Institutional Audits
              </li>
            </ul>
          </div>

          {/* Social Media Channels */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Official Channels
            </h4>
            <div className="flex items-center space-x-3 mb-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Quantum Minds Africa NGO (quantummindsafrica.org). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>for Africa&apos;s Next Generation of Innovators.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
