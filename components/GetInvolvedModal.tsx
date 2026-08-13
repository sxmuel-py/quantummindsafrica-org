"use client";

import { useState } from "react";
import { X, HeartHandshake, Send, CheckCircle2, Building, Mail, Phone, MessageSquare } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetInvolvedModal({ isOpen, onClose }: ModalProps) {
  const [inquiryType, setInquiryType] = useState("Sponsorship");
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      // Auto close after showing success
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-card max-w-xl w-full p-6 sm:p-8 border border-white/20 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-lg">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Partner With QMA NGO
            </h3>
            <p className="text-xs text-slate-300">
              Institutional Grants, Hardware Credits, Mentorship &amp; Advisory
            </p>
          </div>
        </div>

        {isSent ? (
          <div className="bg-slate-900/90 border border-emerald-500/40 p-8 rounded-2xl text-center my-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="font-bold text-white text-lg mb-1">Inquiry Received</h4>
            <p className="text-xs text-slate-300 mb-4">
              Our executive partnerships director will respond to <strong className="text-cyan-400">{email}</strong> within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSent(false);
                onClose();
              }}
              className="px-6 py-2 bg-cyan-600 text-white rounded-lg text-xs font-semibold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Inquiry Focus Area
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Sponsorship">Corporate Sponsorship &amp; Grants</option>
                <option value="University">University Chapter Collaboration</option>
                <option value="Hardware">Quantum Hardware Compute Provision</option>
                <option value="Mentorship">Volunteer Speaker / Mentorship</option>
                <option value="Media">Media &amp; Press Inquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Organization / University
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. University of Nairobi"
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Sarah Okafor"
                  className="w-full bg-slate-950/80 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Official Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@institution.org"
                  className="w-full bg-slate-950/80 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Message / Partnership Goals
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us briefly how your organization would like to partner with Quantum Minds Africa..."
                className="w-full bg-slate-950/80 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Partnership Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
