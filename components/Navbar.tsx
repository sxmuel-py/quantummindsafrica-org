"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Sun, Moon, Globe, Sparkles, HeartHandshake } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isLightMode = document.documentElement.classList.contains("light-theme");
    setIsDark(!isLightMode);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light-theme");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light-theme");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/40 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-cyan-500/40 shadow-lg shadow-cyan-500/10">
            <Image
              src="/images/logo.png"
              alt="Quantum Minds Africa Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
                Quantum Minds Africa
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                NGO
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-cyan-400 font-medium">
              <Globe className="w-3.5 h-3.5" />
              <span>quantummindsafrica.org</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass-pill text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            title={isDark ? "Switch to Light Theme" : "Switch to Cosmic Dark Theme"}
            aria-label="Toggle visual theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Partner CTA */}
          <button
            onClick={onOpenModal}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-105 active:scale-95"
          >
            <HeartHandshake className="w-4 h-4" />
            <span className="hidden sm:inline">Get Involved / Partner</span>
            <span className="sm:hidden">Partner</span>
          </button>
        </div>
      </div>
    </header>
  );
}
