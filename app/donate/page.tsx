"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Send,
  Atom,
  ChevronRight,
  BookOpen,
  Award,
  Globe,
  ExternalLink,
} from "lucide-react";

// Preset Donation Amounts in Naira
const PRESET_AMOUNTS = [
  {
    amount: 5000,
    label: "₦5,000",
    impact: "Provides a basic STEM science kit & learning workbook for 1 student.",
  },
  {
    amount: 10000,
    label: "₦10,000",
    impact: "Supplies hands-on physics experiment materials for a classroom team.",
  },
  {
    amount: 25000,
    label: "₦25,000",
    impact: "Sponsors a full STEM & Quantum Science outreach workshop in a rural school.",
  },
  {
    amount: 50000,
    label: "₦50,000",
    impact: "Equips an underserved school with lab demonstration kits and equipment.",
  },
  {
    amount: 100000,
    label: "₦100,000",
    impact: "Funds a comprehensive youth quantum research & mentorship initiative.",
  },
];

export default function DonatePage() {
  // Step 1 vs Step 2 state
  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [selectedAmount, setSelectedAmount] = useState<number>(25000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorNote, setDonorNote] = useState("");

  // Copy Feedback State
  const [copiedAccNum, setCopiedAccNum] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // In-page Confirmation State
  const [showConfirmationForm, setShowConfirmationForm] = useState(false);
  const [senderBank, setSenderBank] = useState("");
  const [transferRef, setTransferRef] = useState("");
  const [confirmationSent, setConfirmationSent] = useState(false);

  // Calculate final amount in Naira
  const finalAmountNaira = isCustom
    ? parseFloat(customAmount) || 0
    : selectedAmount;

  const formattedAmountNaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(finalAmountNaira);

  // Handle Proceed to Step 2
  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmountNaira <= 0) {
      alert("Please select or enter a valid donation amount in Naira.");
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Copy Account Number
  const handleCopyAccNumber = () => {
    navigator.clipboard.writeText("1309870501");
    setCopiedAccNum(true);
    setTimeout(() => setCopiedAccNum(false), 2500);
  };

  // Copy All Details
  const handleCopyAllDetails = () => {
    const details = `Quantum Minds Africa Initiative Donation Details:
Account Name: Quantum Physics Enlightenment Initiative
Bank: PROVIDUS Bank
Account Number: 1309870501
Currency: Nigerian Naira (NGN)`;
    navigator.clipboard.writeText(details);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  // Generate WhatsApp confirmation message link
  const getWhatsAppLink = () => {
    const phone = "2349027295832";
    const text = encodeURIComponent(
      `Hello Debola Oyelami,\n\nI have made a donation to Quantum Minds Africa Initiative (QMAI).\n\n` +
        `• Donation Amount: ${formattedAmountNaira}\n` +
        `• Donor Name: ${donorName || "Supporter"}\n` +
        `• Email: ${donorEmail || "Not provided"}\n` +
        `• Phone: ${donorPhone || "Not provided"}\n` +
        (donorNote ? `• Message: ${donorNote}\n` : "") +
        `\nThank you for inspiring Africa's next generation of scientists!`
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  // Generate Email confirmation link
  const getEmailLink = () => {
    const email = "qmaigroup1@gmail.com";
    const subject = encodeURIComponent(
      `Donation Confirmation - ${donorName || "Supporter"} (${formattedAmountNaira})`
    );
    const body = encodeURIComponent(
      `Dear Debola Oyelami,\n\nI am writing to confirm my donation to Quantum Minds Africa Initiative (QMAI).\n\n` +
        `Donation Details:\n` +
        `--------------------\n` +
        `• Amount Donated: ${formattedAmountNaira}\n` +
        `• Bank Account: PROVIDUS Bank (1309870501)\n` +
        `• Account Name: Quantum Physics Enlightenment Initiative\n` +
        `• Donor Name: ${donorName || "Anonymous Supporter"}\n` +
        `• Contact Email: ${donorEmail || "N/A"}\n` +
        `• Contact Phone: ${donorPhone || "N/A"}\n` +
        (donorNote ? `• Note: ${donorNote}\n` : "") +
        `\nWarm regards,\n${donorName || "QMAI Supporter"}`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // Handle in-page confirmation submission
  const handleConfirmationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationSent(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-x-hidden selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background Soft Cosmic Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform hover:scale-[1.01]"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-cyan-500/40 shadow-lg bg-slate-900 p-0.5">
              <Image
                src="/images/logo.png"
                alt="Quantum Minds Africa Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                  Quantum Minds Africa
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  QMAI NGO
                </span>
              </div>
              <p className="text-xs text-cyan-400 font-mono">
                quantummindsafrica.org
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white glass-pill px-3.5 py-2 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 mb-4 shadow-lg backdrop-blur-md">
            <Heart className="w-4 h-4 text-rose-400 animate-pulse fill-rose-400" />
            <span>Empower Africa&apos;s Future Scientists</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Support <span className="gradient-text-cyan">Quantum Minds</span>{" "}
            Africa Initiative
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Your generous contribution expands access to hands-on physics, STEM
            education, and quantum science for students in underserved African
            communities.
          </p>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Founder's Official Message */}
          <div className="lg:col-span-5 space-y-6">
            {/* Founder Message Card */}
            <div className="glass-card p-6 sm:p-8 border border-white/15 rounded-2xl relative shadow-2xl overflow-hidden bg-slate-900/80 backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

              {/* Founder Header */}
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/10">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-cyan-500/50 shadow-md bg-cyan-950 flex items-center justify-center text-cyan-300 font-bold text-xl">
                  <span>DO</span>
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white">
                    Debola Oyelami
                  </h2>
                  <p className="text-xs text-cyan-400 font-medium">
                    Founder, Quantum Minds Africa (QMAI)
                  </p>
                  <div className="flex items-center space-x-2 mt-1 text-[11px] text-slate-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Official Founder Message</span>
                  </div>
                </div>
              </div>

              {/* Founder Letter Content */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p className="font-semibold text-slate-200">Good day,</p>

                <p>
                  Thank you for taking the time to read about{" "}
                  <strong className="text-white">
                    Quantum Minds Africa Initiative (QMAI)
                  </strong>{" "}
                  and our mission to make physics and quantum science accessible to
                  students in underserved communities.
                </p>

                <p>
                  Every contribution, regardless of size, will help us provide
                  hands-on science experiences, educational materials, and
                  outreach programs to students who may otherwise have limited
                  access to STEM opportunities.
                </p>

                <p className="bg-cyan-950/40 border-l-2 border-cyan-400 p-3 rounded-r-lg text-cyan-100 italic">
                  &ldquo;If you make a donation, we would be grateful if you could
                  kindly send a confirmation message so we can acknowledge your
                  support.&rdquo;
                </p>

                <p>
                  Thank you once again for helping us inspire the next generation
                  of African scientists, innovators, and problem-solvers.
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-slate-400 mb-1">Warm regards,</p>
                  <p className="font-bold text-white text-base">Debola Oyelami</p>
                  <p className="text-xs text-cyan-400 font-medium">
                    Founder, Quantum Minds Africa (QMAI)
                  </p>

                  <div className="mt-4 space-y-2 text-xs font-mono bg-slate-950/70 p-3 rounded-xl border border-white/10">
                    <a
                      href="tel:+2349027295832"
                      className="flex items-center space-x-2.5 text-slate-300 hover:text-cyan-300 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>+234 902 729 5832</span>
                    </a>
                    <a
                      href="mailto:qmaigroup1@gmail.com"
                      className="flex items-center space-x-2.5 text-slate-300 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>qmaigroup1@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Highlights Card */}
            <div className="glass-card p-6 border border-white/10 rounded-2xl bg-slate-900/60">
              <h3 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Where Your Contribution Goes</span>
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start space-x-2.5">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hands-on Science Kits:</strong> Physical physics kits
                    delivered directly to rural secondary schools.
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Atom className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Quantum Literacy Workshops:</strong> Outreach programs
                    demystifying quantum physics for young innovators.
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Student Mentorship:</strong> Direct guidance connecting
                    African youth with frontier scientists.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Donation Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border border-white/20 rounded-2xl shadow-2xl bg-slate-900/90 relative overflow-hidden">
              {/* Step Tracker Indicator Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      step === 1
                        ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                        : "bg-emerald-500 text-slate-950"
                    }`}
                  >
                    {step === 1 ? "1" : <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-cyan-400 block">
                      Step 1
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Select Amount &amp; Details
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-slate-600" />

                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                      step === 2
                        ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                        : "bg-slate-800 text-slate-400 border border-white/10"
                    }`}
                  >
                    2
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
                      Step 2
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        step === 2 ? "text-white" : "text-slate-500"
                      }`}
                    >
                      Providus Bank Details
                    </span>
                  </div>
                </div>
              </div>

              {/* ==================== STEP 1: AMOUNT & DONOR DETAILS ==================== */}
              {step === 1 && (
                <form onSubmit={handleProceed} className="space-y-6">
                  {/* Currency Badge */}
                  <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                        ₦
                      </div>
                      <span className="text-xs font-semibold text-slate-200">
                        Donation Currency:
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/30">
                      Nigerian Naira (NGN / ₦)
                    </span>
                  </div>

                  {/* Preset Amounts Grid */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Select Donation Amount (₦)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {PRESET_AMOUNTS.map((preset) => {
                        const isSelected =
                          !isCustom && selectedAmount === preset.amount;
                        return (
                          <button
                            key={preset.amount}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(preset.amount);
                              setIsCustom(false);
                            }}
                            className={`p-3.5 rounded-xl border text-center transition-all flex flex-col justify-center items-center ${
                              isSelected
                                ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/15 ring-2 ring-cyan-500/50"
                                : "bg-slate-950/60 border-white/10 text-slate-300 hover:border-slate-500 hover:text-white"
                            }`}
                          >
                            <span className="font-bold text-base sm:text-lg font-mono">
                              {preset.label}
                            </span>
                          </button>
                        );
                      })}

                      {/* Custom Amount Preset Button */}
                      <button
                        type="button"
                        onClick={() => setIsCustom(true)}
                        className={`p-3.5 rounded-xl border text-center transition-all flex flex-col justify-center items-center ${
                          isCustom
                            ? "bg-amber-500/20 border-amber-400 text-amber-200 shadow-lg shadow-amber-500/15 ring-2 ring-amber-500/50"
                            : "bg-slate-950/60 border-white/10 text-slate-300 hover:border-slate-500 hover:text-white"
                        }`}
                      >
                        <span className="font-bold text-sm">Custom Amount</span>
                      </button>
                    </div>
                  </div>

                  {/* Custom Amount Numeric Input */}
                  {isCustom && (
                    <div className="animate-fade-in bg-slate-950/90 p-4 rounded-xl border border-amber-500/40 space-y-2">
                      <label className="block text-xs font-semibold text-amber-300">
                        Enter Custom Amount in Naira (₦)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-amber-400 text-lg">
                          ₦
                        </span>
                        <input
                          type="number"
                          min="100"
                          step="500"
                          required={isCustom}
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="e.g. 15000"
                          className="w-full bg-slate-900 border border-amber-500/40 rounded-xl pl-10 pr-4 py-3 text-white text-base font-mono focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>
                    </div>
                  )}

                  {/* Selected Amount Impact Statement */}
                  {!isCustom && (
                    <div className="bg-slate-950/80 p-3.5 rounded-xl border border-cyan-500/20 flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-cyan-200">
                        {
                          PRESET_AMOUNTS.find(
                            (p) => p.amount === selectedAmount
                          )?.impact
                        }
                      </p>
                    </div>
                  )}

                  {/* Donor Contact Form Fields */}
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Your Contact Information
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="e.g. Dr. Samuel Adebayo"
                        className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          placeholder="samuel@example.com"
                          className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          placeholder="+234..."
                          className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Message / Words of Support (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={donorNote}
                        onChange={(e) => setDonorNote(e.target.value)}
                        placeholder="Keep up the great work inspiring young minds..."
                        className="w-full bg-slate-950 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* PROCEED BUTTON */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to Account Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}

              {/* ==================== STEP 2: PROVIDUS BANK DETAILS ==================== */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  {/* Back to Edit Button */}
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center space-x-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors mb-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to edit amount / details</span>
                  </button>

                  {/* Chosen Amount Badge */}
                  <div className="bg-cyan-950/60 border border-cyan-500/30 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs text-cyan-300 font-semibold block">
                        Selected Donation Target:
                      </span>
                      <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                        {formattedAmountNaira}
                      </span>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-cyan-400 hover:underline font-semibold"
                    >
                      Change
                    </button>
                  </div>

                  {/* Direct User Instruction Callout */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-white/10">
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      If you would like to support this initiative, donations can be
                      made to the account below:
                    </p>
                  </div>

                  {/* PROVIDUS BANK ACCOUNT DETAILS CARD */}
                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 rounded-2xl border-2 border-cyan-500/50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-white pointer-events-none select-none">
                      PROVIDUS
                    </div>

                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl border border-cyan-500/30">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 block">
                          Official Direct Bank Transfer
                        </span>
                        <h4 className="text-base font-bold text-white">
                          PROVIDUS Bank Account
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Account Name */}
                      <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                          Account Name
                        </span>
                        <p className="font-bold text-white text-sm sm:text-base tracking-wide">
                          Quantum Physics Enlightenment Initiative
                        </p>
                      </div>

                      {/* Bank Name */}
                      <div className="bg-slate-900/90 p-4 rounded-xl border border-white/10">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                          Bank Name
                        </span>
                        <p className="font-bold text-amber-400 text-sm sm:text-base tracking-wide font-mono">
                          PROVIDUS Bank
                        </p>
                      </div>

                      {/* Account Number with Copy Tool */}
                      <div className="bg-cyan-950/80 p-4 rounded-xl border border-cyan-500/40 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-cyan-300 font-semibold block mb-1">
                            Account Number
                          </span>
                          <p className="font-extrabold text-white text-2xl sm:text-3xl font-mono tracking-wider">
                            1309870501
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyAccNumber}
                          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md ${
                            copiedAccNum
                              ? "bg-emerald-500 text-slate-950"
                              : "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                          }`}
                        >
                          {copiedAccNum ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy Number</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Copy All Details Button */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                      <button
                        type="button"
                        onClick={handleCopyAllDetails}
                        className="text-xs text-slate-300 hover:text-white flex items-center space-x-1.5 font-medium transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5 text-cyan-400" />
                        <span>
                          {copiedAll
                            ? "All Details Copied to Clipboard!"
                            : "Copy All Bank Details"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* ==================== CONFIRMATION SECTION ==================== */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          Send Donation Confirmation
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          As requested by Founder Debola Oyelami, please send us a
                          quick confirmation message so we can acknowledge your
                          support and send your official receipt.
                        </p>
                      </div>
                    </div>

                    {/* Action Channels */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {/* WhatsApp Button */}
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-900/30"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirm via WhatsApp</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>

                      {/* Email Button */}
                      <a
                        href={getEmailLink()}
                        className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs transition-all shadow-lg shadow-cyan-900/30"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Confirm via Email</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                      </a>
                    </div>

                    {/* Toggle In-App Form */}
                    <div className="text-center pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmationForm(!showConfirmationForm)
                        }
                        className="text-xs text-amber-400 hover:underline font-medium"
                      >
                        {showConfirmationForm
                          ? "Hide website confirmation form"
                          : "Or submit confirmation directly on this page"}
                      </button>
                    </div>

                    {/* In-Page Confirmation Submission Form */}
                    {showConfirmationForm && (
                      <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                        {confirmationSent ? (
                          <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-xl text-center space-y-2">
                            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                            <h5 className="font-bold text-white text-sm">
                              Confirmation Submitted!
                            </h5>
                            <p className="text-xs text-slate-300">
                              Thank you,{" "}
                              <strong className="text-cyan-300">
                                {donorName || "Supporter"}
                              </strong>
                              . Debola Oyelami and the QMAI team will review and
                              acknowledge your support.
                            </p>
                          </div>
                        ) : (
                          <form
                            onSubmit={handleConfirmationSubmit}
                            className="space-y-3"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                                  Your Bank Name / App Used
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={senderBank}
                                  onChange={(e) => setSenderBank(e.target.value)}
                                  placeholder="e.g. GTBank / Access / Kuda"
                                  className="w-full bg-slate-900 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                                  Transfer Reference / Transaction ID
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={transferRef}
                                  onChange={(e) => setTransferRef(e.target.value)}
                                  placeholder="e.g. REF-892341..."
                                  className="w-full bg-slate-900 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                                />
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span>Submit Confirmation Directly</span>
                            </button>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Official Footer */}
      <footer className="w-full max-w-7xl mx-auto z-10 text-center text-xs text-slate-500 pt-8 pb-6 border-t border-white/10 px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          &copy; {new Date().getFullYear()} Quantum Minds Africa NGO
          (quantummindsafrica.org). All Rights Reserved.
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-cyan-300 transition-colors">
            Home
          </Link>
          <span>&bull;</span>
          <a
            href="mailto:qmaigroup1@gmail.com"
            className="hover:text-cyan-300 transition-colors"
          >
            Contact Founder
          </a>
        </div>
      </footer>
    </main>
  );
}
