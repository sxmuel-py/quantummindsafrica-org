"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

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

        <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full shadow-sm">
          NGO Platform
        </span>
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
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-10 leading-tight">
          Something Great Is <br />
          <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
            Under Construction
          </span>
        </h2>

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
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 shrink-0"
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
        <div>
          Inquiries:{" "}
          <a
            href="mailto:contact@quantummindsafrica.org"
            className="text-cyan-700 font-medium hover:underline"
          >
            contact@quantummindsafrica.org
          </a>
        </div>
      </footer>
    </main>
  );
}
