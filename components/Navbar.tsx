"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Menu, X, Heart, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenDonation: () => void;
}

export default function Navbar({ onOpenDonation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About us", href: "/#about" },
    { name: "Founder", href: "/#founder" },
    { name: "Programs", href: "/#programs" },
    { name: "Process", href: "/#process" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 transition-all">
      
      {/* Top Demo Notice Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-950 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center space-x-2">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <span className="text-[11px] sm:text-xs">
          <strong className="text-amber-900 font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px] mr-1">Live Demo Preview:</strong>
          This platform is currently an interactive demonstration preview for Quantum Minds Africa Initiative.
        </span>
      </div>

      {/* Top Contact Bar */}
      <div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <a href="tel:+2349027295832" className="hover:underline">+234 902 729 5832</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <a href="mailto:contact@quantummindsafrica.org" className="hover:underline">contact@quantummindsafrica.org</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 font-medium">
            <span>Non-Governmental Educational NGO • Nigeria</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Quantum Minds Africa Logo"
            width={180}
            height={52}
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenDonation}
            className="carenest-btn-primary text-xs"
          >
            <span>Donate Now</span>
            <span className="carenest-btn-icon">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onOpenDonation}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3.5 py-2 rounded-full text-xs flex items-center space-x-1.5 shadow-sm active:scale-95 transition-transform"
          >
            <Heart className="w-3.5 h-3.5 fill-slate-950" />
            <span>Donate</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-950 active:bg-slate-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[108px] bg-slate-950/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-50 lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2.5 max-h-[calc(100vh-120px)] overflow-y-auto shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonation();
                }}
                className="w-full carenest-btn-primary justify-center text-sm py-3.5 shadow-md"
              >
                <span>Donate Now</span>
                <span className="carenest-btn-icon">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-600 px-2">
                <a href="tel:+2349027295832" className="flex items-center space-x-2 py-1 hover:text-amber-600">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>+234 902 729 5832</span>
                </a>
                <a href="mailto:contact@quantummindsafrica.org" className="flex items-center space-x-2 py-1 hover:text-amber-600">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                  <span>contact@quantummindsafrica.org</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

