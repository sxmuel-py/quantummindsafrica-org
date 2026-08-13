"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, Sparkles, User, Mail, ShieldCheck } from "lucide-react";

export default function InterestForm() {
  const [role, setRole] = useState("Student/Learner");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const roles = [
    { label: "Student / Learner", value: "Student/Learner", desc: "Access free quantum learning courses & bootcamps" },
    { label: "Researcher / Academic", value: "Researcher", desc: "Collaborate on quantum & AI research projects" },
    { label: "Donor / Sponsor", value: "Sponsor", desc: "Fund scholarships, hardware access, & innovation labs" },
    { label: "Volunteer / Mentor", value: "Volunteer", desc: "Mentor African youth & lead regional workshops" },
    { label: "Partner NGO / Institution", value: "Partner", desc: "Institutional collaboration & university programs" },
  ];

  useEffect(() => {
    const savedEmail = localStorage.getItem("qma_registered_email");
    if (savedEmail) {
      setEmail(savedEmail);
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    setIsSubmitting(true);

    // Simulate backend registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      localStorage.setItem("qma_registered_email", email);
      localStorage.setItem("qma_registered_role", role);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    localStorage.removeItem("qma_registered_email");
  };

  return (
    <section id="register-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24">
      <div className="glass-card p-6 sm:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
            Join The Launch Network
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Be First To Experience <span className="gradient-text-cyan">Quantum Minds Africa</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Subscribe for early platform access, launch event invites, and regional fellowship opportunities.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-slate-900/90 border border-emerald-500/40 p-8 rounded-2xl text-center relative z-10 animate-fade-in">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              You&apos;re On The QMA Launch VIP List!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-4">
              Thank you, <strong className="text-white">{fullName || "Innovator"}</strong>! We sent a registration confirmation to <strong className="text-cyan-400">{email}</strong>.
            </p>
            <div className="inline-flex items-center space-x-2 text-xs text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-full border border-amber-500/30 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Registered Role: {role}</span>
            </div>
            <div>
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white underline transition-colors"
              >
                Register another email or update role
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Role Category Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Your Interest / Role
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      role === r.value
                        ? "bg-slate-900 border-cyan-500/70 text-white font-bold shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/30"
                        : "bg-slate-950/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className="font-semibold text-sm mb-0.5">{r.label}</div>
                    <div className="text-[11px] text-slate-400 font-normal leading-tight">{r.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Kwame Mensah"
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="kwame@university.edu"
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="text-xs text-rose-400 bg-rose-950/40 p-3 rounded-lg border border-rose-500/30">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Registering...</span>
                </>
              ) : (
                <>
                  <span>Join Launch Priority List</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>We respect your privacy. No spam — only official QMA NGO launch updates.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
