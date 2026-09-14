"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import DonationModal from "@/components/DonationModal";
import DemoBadge from "@/components/DemoBadge";
import Footer from "@/components/Footer";
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
  ExternalLink,
  Users,
} from "lucide-react";

// Preset Donation Amounts in Naira
const PRESET_AMOUNTS = [
  {
    amount: 5000,
    label: "₦5,000",
    impact: "Provides a basic STEM physics workbook & learning kit for 1 public school pupil.",
  },
  {
    amount: 10000,
    label: "₦10,000",
    impact: "Supplies hands-on science experiment materials for a classroom student team.",
  },
  {
    amount: 25000,
    label: "₦25,000",
    impact: "Sponsors an interactive physics & chemistry outreach session in a public school.",
  },
  {
    amount: 50000,
    label: "₦50,000",
    impact: "Equips an underserved school with lab demonstration apparatus and experiment kits.",
  },
  {
    amount: 100000,
    label: "₦100,000",
    impact: "Funds a comprehensive STEM outreach package & mentorship program for a whole school.",
  },
];

export default function DonatePage() {
  // Modal state for Navbar "Donate" triggers
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  // Multi-step flow state (1: Select Amount & Contact, 2: Account Details & Confirmation)
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
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  // Copy Account Number
  const handleCopyAccNumber = () => {
    navigator.clipboard.writeText("1309870501");
    setCopiedAccNum(true);
    setTimeout(() => setCopiedAccNum(false), 2500);
  };

  // Copy All Details
  const handleCopyAllDetails = () => {
    const details = `Quantum Minds Africa Initiative (QMAI) Bank Donation Details:
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
        `• Bank Account: PROVIDUS Bank (1309870501)\n` +
        `• Account Name: Quantum Physics Enlightenment Initiative\n` +
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 selection:bg-amber-400 selection:text-slate-950 font-sans flex flex-col justify-between">
      {/* Official Top Navbar */}
      <Navbar onOpenDonation={() => setIsDonationModalOpen(true)} />

      {/* Floating Demo Badge & Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
      <DemoBadge />

      {/* Main Content Area */}
      <div className="flex-grow">
        {/* Top Breadcrumb & Page Banner Header */}
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-amber-400 font-bold">Donate (NGN / ₦)</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Support Educational STEM Outreach</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Support <span className="text-amber-400">Quantum Minds</span> Africa Initiative
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Every contribution directly equips Nigerian public school classrooms with hands-on physics kits, experiment apparatus, and simplified learning guidebooks.
                </p>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <Link
                  href="/"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-all border border-white/20 flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ========================================================================= */}
            {/* LEFT COLUMN: FOUNDER'S LETTER & IMPACT HIGHLIGHTS */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 space-y-6">
              {/* Founder Letter Card */}
              <div className="carenest-card p-6 sm:p-8 bg-white border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="flex items-center space-x-4 pb-6 border-b border-slate-100">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-amber-500/30 shadow-md bg-slate-900 shrink-0">
                    <Image
                      src="/images/founder.jpg"
                      alt="Debola Oyelami - Founder, Quantum Minds Africa Initiative"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                      Debola Oyelami
                    </h2>
                    <p className="text-xs font-bold text-amber-600">
                      Founder, Quantum Minds Africa (QMAI)
                    </p>
                    <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-slate-500 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Official Founder Message</span>
                    </div>
                  </div>
                </div>

                {/* Founder Message Body */}
                <div className="space-y-4 pt-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  <p className="font-bold text-slate-900">Good day,</p>

                  <p>
                    Thank you for taking the time to read about{" "}
                    <strong className="text-slate-900 font-extrabold">
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

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl text-amber-950 font-medium text-xs leading-relaxed italic shadow-sm">
                    &ldquo;If you make a donation, we would be grateful if you could
                    kindly send a confirmation message so we can acknowledge your
                    support.&rdquo;
                  </div>

                  <p>
                    Thank you once again for helping us inspire the next generation
                    of African scientists, innovators, and problem-solvers.
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div>
                      <p className="text-xs text-slate-400">Warm regards,</p>
                      <p className="font-extrabold text-slate-900 text-base">
                        Debola Oyelami
                      </p>
                      <p className="text-xs font-bold text-amber-600">
                        Founder, Quantum Minds Africa (QMAI)
                      </p>
                    </div>

                    <div className="space-y-2 text-xs font-mono bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <a
                        href="tel:+2349027295832"
                        className="flex items-center space-x-2.5 text-slate-700 hover:text-amber-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="font-bold">+234 902 729 5832</span>
                      </a>
                      <a
                        href="mailto:qmaigroup1@gmail.com"
                        className="flex items-center space-x-2.5 text-slate-700 hover:text-amber-600 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="font-bold">qmaigroup1@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authentic School Outreach Photo Banner */}
              <div className="carenest-card overflow-hidden bg-slate-900 text-white relative shadow-lg">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/gallery/qm_1.jpg"
                    alt="QMAI Interactive Public School Science Session"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md">
                      Verified Outreach Photo
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm">
                      Public School Classroom Outreach in Nigeria
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: MULTI-STEP NAIRA DONATION & PROVIDUS BANK CARD */}
            {/* ========================================================================= */}
            <div className="lg:col-span-7">
              <div className="carenest-card p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                        step === 1
                          ? "bg-slate-900 text-white shadow-md"
                          : "bg-emerald-500 text-white"
                      }`}
                    >
                      {step === 1 ? "1" : <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-600 block">
                        Step 1
                      </span>
                      <span className="text-sm font-extrabold text-slate-900">
                        Donation Amount &amp; Details
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-300" />

                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                        step === 2
                          ? "bg-amber-500 text-slate-950 font-extrabold shadow-md"
                          : "bg-slate-100 text-slate-400 border border-slate-200"
                      }`}
                    >
                      2
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block">
                        Step 2
                      </span>
                      <span
                        className={`text-sm font-extrabold ${
                          step === 2 ? "text-slate-900" : "text-slate-400"
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
                    {/* Currency Banner */}
                    <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm border border-emerald-300">
                          ₦
                        </div>
                        <span className="text-xs font-bold text-slate-800">
                          Donation Currency:
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 font-mono bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-300">
                        Nigerian Naira (NGN / ₦)
                      </span>
                    </div>

                    {/* Preset Amount Grid */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
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
                              className={`p-4 rounded-2xl border text-center transition-all flex flex-col justify-center items-center ${
                                isSelected
                                  ? "bg-slate-900 border-slate-900 text-white shadow-lg ring-2 ring-slate-900/20"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50"
                              }`}
                            >
                              <span className="font-extrabold text-base sm:text-lg font-mono">
                                {preset.label}
                              </span>
                            </button>
                          );
                        })}

                        {/* Custom Amount Button */}
                        <button
                          type="button"
                          onClick={() => setIsCustom(true)}
                          className={`p-4 rounded-2xl border text-center transition-all flex flex-col justify-center items-center ${
                            isCustom
                              ? "bg-amber-500 border-amber-500 text-slate-950 font-extrabold shadow-lg"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-400 hover:bg-amber-50/50"
                          }`}
                        >
                          <span className="font-bold text-sm">Custom Amount</span>
                        </button>
                      </div>
                    </div>

                    {/* Custom Amount Field */}
                    {isCustom && (
                      <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-300 space-y-2 animate-fade-in-up">
                        <label className="block text-xs font-bold text-amber-900">
                          Enter Custom Amount in Naira (₦)
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-extrabold text-amber-600 text-lg">
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
                            className="w-full bg-white border border-amber-300 rounded-2xl pl-10 pr-4 py-3 text-slate-900 text-base font-mono focus:outline-none focus:border-amber-500 shadow-sm"
                          />
                        </div>
                      </div>
                    )}

                    {/* Direct Impact Banner */}
                    {!isCustom && (
                      <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start space-x-3 text-xs">
                        <Heart className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-500" />
                        <p className="text-slate-800 leading-relaxed">
                          <strong className="text-slate-900 font-bold">
                            Direct Impact:{" "}
                          </strong>
                          {
                            PRESET_AMOUNTS.find(
                              (p) => p.amount === selectedAmount
                            )?.impact
                          }
                        </p>
                      </div>
                    )}

                    {/* Donor Contact Form */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        Your Contact Information
                      </h3>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name / Organization
                        </label>
                        <input
                          type="text"
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          placeholder="e.g. Dr. Samuel Adebayo"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                            placeholder="samuel@example.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            value={donorPhone}
                            onChange={(e) => setDonorPhone(e.target.value)}
                            placeholder="+234..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Message / Note of Support (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={donorNote}
                          onChange={(e) => setDonorNote(e.target.value)}
                          placeholder="Keep up the great work inspiring young minds..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 resize-none"
                        />
                      </div>
                    </div>

                    {/* Primary Button */}
                    <button
                      type="submit"
                      className="w-full carenest-btn-primary py-4 text-sm justify-center shadow-lg"
                    >
                      <span>Proceed to Bank Account Details</span>
                      <span className="carenest-btn-icon">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </form>
                )}

                {/* ==================== STEP 2: PROVIDUS BANK DETAILS ==================== */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors mb-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to edit amount / donor details</span>
                    </button>

                    {/* Chosen Target Summary */}
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <span className="text-xs text-amber-900 font-bold block">
                          Selected Donation Amount:
                        </span>
                        <span className="text-2xl font-extrabold font-mono text-slate-900">
                          {formattedAmountNaira}
                        </span>
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-amber-700 hover:underline"
                      >
                        Change Amount
                      </button>
                    </div>

                    {/* Official User Callout Notice */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      If you would like to support this initiative, donations can be
                      made to the account below:
                    </div>

                    {/* OFFICIAL PROVIDUS BANK DETAILS CARD */}
                    <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-500 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-white pointer-events-none select-none">
                        PROVIDUS
                      </div>

                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-3 bg-amber-500 text-slate-950 rounded-2xl shadow-md">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-400 block">
                            Direct Bank Transfer Details
                          </span>
                          <h4 className="text-lg font-extrabold text-white">
                            PROVIDUS Bank Account
                          </h4>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Account Name */}
                        <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                            Account Name
                          </span>
                          <p className="font-extrabold text-white text-sm sm:text-base tracking-wide">
                            Quantum Physics Enlightenment Initiative
                          </p>
                        </div>

                        {/* Bank Name */}
                        <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                            Bank Name
                          </span>
                          <p className="font-extrabold text-amber-400 text-sm sm:text-base tracking-wide font-mono">
                            PROVIDUS Bank
                          </p>
                        </div>

                        {/* Account Number with Copy Button */}
                        <div className="bg-slate-950 p-4 rounded-2xl border border-amber-500/50 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                              Account Number
                            </span>
                            <p className="font-extrabold text-white text-2xl sm:text-3xl font-mono tracking-wider">
                              1309870501
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopyAccNumber}
                            className={`flex items-center space-x-2 px-4 py-2.5 rounded-full font-extrabold text-xs transition-all shadow-md ${
                              copiedAccNum
                                ? "bg-emerald-500 text-white"
                                : "bg-amber-500 hover:bg-amber-400 text-slate-950"
                            }`}
                          >
                            {copiedAccNum ? (
                              <>
                                <Check className="w-4 h-4 stroke-[3]" />
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
                      <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end">
                        <button
                          type="button"
                          onClick={handleCopyAllDetails}
                          className="text-xs text-slate-300 hover:text-white flex items-center space-x-1.5 font-bold transition-colors"
                        >
                          <Copy className="w-3.5 h-3.5 text-amber-400" />
                          <span>
                            {copiedAll
                              ? "All Details Copied!"
                              : "Copy All Bank Details"}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* CONFIRMATION SECTION */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                      <div className="flex items-start space-x-3">
                        <MessageSquare className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            Send Donation Confirmation
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Kindly send a quick confirmation message so Founder Debola Oyelami and the QMAI team can acknowledge your support.
                          </p>
                        </div>
                      </div>

                      {/* Action Channels */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition-all shadow-md"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Confirm via WhatsApp</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>

                        <a
                          href={getEmailLink()}
                          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow-md"
                        >
                          <Mail className="w-4 h-4 text-amber-400" />
                          <span>Confirm via Email</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                        </a>
                      </div>

                      <div className="text-center pt-2">
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmationForm(!showConfirmationForm)
                          }
                          className="text-xs font-bold text-amber-600 hover:underline"
                        >
                          {showConfirmationForm
                            ? "Hide website confirmation form"
                            : "Or submit confirmation directly on this page"}
                        </button>
                      </div>

                      {/* In-Page Confirmation Submission Form */}
                      {showConfirmationForm && (
                        <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in-up">
                          {confirmationSent ? (
                            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
                              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                              <h5 className="font-extrabold text-slate-900 text-sm">
                                Confirmation Submitted!
                              </h5>
                              <p className="text-xs text-slate-600">
                                Thank you,{" "}
                                <strong className="text-slate-900">
                                  {donorName || "Supporter"}
                                </strong>
                                . Debola Oyelami and the QMAI team will acknowledge your support.
                              </p>
                            </div>
                          ) : (
                            <form
                              onSubmit={handleConfirmationSubmit}
                              className="space-y-3"
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Your Bank Name / App Used
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={senderBank}
                                    onChange={(e) => setSenderBank(e.target.value)}
                                    placeholder="e.g. GTBank / Access / Kuda"
                                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                                  />
                                </div>

                                <div>
                                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Transfer Reference / Transaction ID
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    value={transferRef}
                                    onChange={(e) => setTransferRef(e.target.value)}
                                    placeholder="e.g. REF-892341..."
                                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                                  />
                                </div>
                              </div>

                              <button
                                type="submit"
                                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs transition-colors flex items-center justify-center space-x-2 shadow-sm"
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
      </div>

      {/* Official Site Footer */}
      <Footer />
    </div>
  );
}
