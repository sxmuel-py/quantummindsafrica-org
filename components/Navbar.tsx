"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Menu, X, Heart } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="Quantum Minds Africa Logo"
            width={180}
            height={52}
            className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
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
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-full text-xs flex items-center space-x-1.5 shadow-sm"
          >
            <Heart className="w-3.5 h-3.5 fill-slate-950" />
            <span>Donate</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonation();
              }}
              className="w-full carenest-btn-primary justify-center text-sm py-3"
            >
              <span>Donate Now</span>
              <span className="carenest-btn-icon">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
