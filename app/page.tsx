"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Heart } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/50 text-slate-900 flex flex-col justify-between items-center px-4 py-8 relative overflow-hidden font-sans">
      {/* Background Subtle Soft Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header / Brand Badge */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between z-10 pt-2">
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-cyan-600/30 shadow-md bg-white p-0.5">
            <Image
              src="/images/logo.png"
              alt="Quantum Minds Africa Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-slate-900">
              Quantum Minds Africa
            </h1>
            <p className="text-[11px] text-cyan-700 font-mono font-medium">
              quantummindsafrica.org
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/donate"
            className="flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Donate / Support (₦)</span>
          </Link>

          <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full shadow-sm">
            NGO Platform
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="w-full max-w-2xl mx-auto my-auto py-12 z-10 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200 px-4 py-1.5 rounded-full text-xs text-slate-700 mb-8 shadow-md backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
          </span>
          <span className="font-semibold tracking-wide">Website Under Construction</span>
        </div>

        {/* Hero Title */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Something Great Is <br />
          <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
            Under Construction
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
          Empowering youth across Africa with quantum science literacy, physics education, and frontier AI innovation.
        </p>

        {/* Dedicated Support QMAI Highlight Box */}
        <div className="bg-gradient-to-br from-slate-900 to-cyan-950 text-white p-6 rounded-2xl border border-cyan-500/30 mb-8 shadow-xl max-w-md mx-auto text-left relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
              <Heart className="w-5 h-5 fill-rose-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">
                Support Quantum Minds Africa
              </h3>
              <p className="text-[11px] text-cyan-300">
                Help us bring hands-on physics to underserved students.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            Every contribution in Nigerian Naira (₦) provides science kits, workshop materials, and outreach programs for young African minds.
          </p>
          <Link
            href="/donate"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Go to Official Donation Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Simple Email Subscription */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl text-center flex items-center justify-center space-x-2 text-emerald-800 text-sm font-medium shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you! We will notify you when we launch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates..."
                  className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 shrink-0"
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto z-10 text-center text-xs text-slate-500 pt-6 pb-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          &copy; {new Date().getFullYear()} Quantum Minds Africa NGO (quantummindsafrica.org)
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/donate" className="text-rose-600 font-bold hover:underline">
            Donate (₦)
          </Link>
          <span>&bull;</span>
          <a
            href="mailto:qmaigroup1@gmail.com"
            className="text-cyan-700 font-medium hover:underline"
          >
            qmaigroup1@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}

