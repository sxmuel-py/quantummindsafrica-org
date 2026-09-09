"use client";

import { useState } from "react";
import { X, Heart, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [selectedTier, setSelectedTier] = useState<number | "custom">(35);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [donorInfo, setDonorInfo] = useState({ name: "", email: "" });

  if (!isOpen) return null;

  const tiers = [
    { amount: 15, impact: "Provides STEM textbooks for 2 primary pupils in Nigeria" },
    { amount: 35, impact: "Equips a child with a solar digital learning tablet" },
    { amount: 75, impact: "Funds 1 complete desktop station in a school computer lab" },
    { amount: 200, impact: "Sponsors classroom learning supplies & internet for 1 month" },
  ];

  const currentAmount = selectedTier === "custom" ? Number(customAmount) || 0 : selectedTier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount > 0 && donorInfo.email) {
      setIsSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in-up">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-white p-2 rounded-full border border-slate-200 shadow-sm transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="inline-flex items-center space-x-1.5 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Empower Children in Nigeria</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Donate to Quantum Minds Africa</h3>
          <p className="text-xs text-slate-500 mt-1">
            100% of donations directly equip Nigerian public school classrooms with books & computer labs.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">Thank You for Your Gift!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Pledge receipt sent to <span className="text-slate-900 font-semibold">{donorInfo.email}</span>. Your ${currentAmount} {frequency} support brings life-changing education to children.
              </p>
              <button
                onClick={resetAndClose}
                className="carenest-btn-primary px-8 py-3 text-sm justify-center"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Frequency Toggle */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency("one-time")}
                  className={`py-2 text-xs font-bold rounded-xl transition-all ${
                    frequency === "one-time"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Give One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`py-2 text-xs font-bold rounded-xl transition-all ${
                    frequency === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Give Monthly
                </button>
              </div>

              {/* Amount Tiers */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">Select Donation Amount ($USD)</label>
                <div className="grid grid-cols-4 gap-2">
                  {tiers.map((tier) => (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => {
                        setSelectedTier(tier.amount);
                        setCustomAmount("");
                      }}
                      className={`py-3 rounded-2xl text-center text-sm font-extrabold border transition-all ${
                        selectedTier === tier.amount
                          ? "bg-slate-900 text-white border-slate-900 shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      ${tier.amount}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <input
                  type="number"
                  min="1"
                  placeholder="Or enter custom amount in USD..."
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier("custom");
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors mt-2"
                />
              </div>

              {/* Impact Banner */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start space-x-3 text-xs">
                <Heart className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-500" />
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Direct Impact: </span>
                  {selectedTier === "custom"
                    ? `Your custom gift of $${currentAmount || 0} supports localized school education in Nigeria.`
                    : tiers.find((t) => t.amount === selectedTier)?.impact}
                </p>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full carenest-btn-primary py-4 text-sm justify-center"
              >
                <span>Proceed to Pledge (${currentAmount || 0})</span>
                <span className="carenest-btn-icon">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SSL Encrypted • Registered Non-Profit Educational NGO</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
