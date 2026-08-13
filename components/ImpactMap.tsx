"use client";

import { useState } from "react";
import { MapPin, Globe2, Sparkles, Building2 } from "lucide-react";

export default function ImpactMap() {
  const hubs = [
    { city: "Nairobi", country: "Kenya", role: "East Africa Quantum Innovation Hub", status: "Active Setup" },
    { city: "Lagos", country: "Nigeria", role: "West Africa AI & Computing Center", status: "Partnership Phase" },
    { city: "Accra", country: "Ghana", role: "West Africa Student Bootcamp Hub", status: "Planning Phase" },
    { city: "Kigali", country: "Rwanda", role: "Central Africa Frontier Tech Lab", status: "Active Setup" },
    { city: "Cape Town", country: "South Africa", role: "Southern Africa Research & Hardware Hub", status: "Active Setup" },
    { city: "Cairo", country: "Egypt", role: "North Africa Algorithmic Research Hub", status: "Partnership Phase" },
    { city: "Addis Ababa", country: "Ethiopia", role: "Horn of Africa Youth Tech Initiative", status: "Planning Phase" },
  ];

  const [activeHub, setActiveHub] = useState(0);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-card p-6 sm:p-10 border border-white/15 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 mb-4">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Pan-African Operational Footprint</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Regional Quantum &amp; AI <span className="gradient-text-gold">Hub Network</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Quantum Minds Africa is establishing physical &amp; virtual regional hub chapters across 
              leading African innovation ecosystems to ensure equal access to frontier technology education.
            </p>

            {/* City Selection List */}
            <div className="space-y-2 max-h-72 overflow-y-auto pr-2">
              {hubs.map((hub, index) => (
                <button
                  key={hub.city}
                  onClick={() => setActiveHub(index)}
                  className={`w-full p-3 rounded-lg text-left transition-all flex items-center justify-between text-xs sm:text-sm border ${
                    activeHub === index
                      ? "bg-slate-900 border-cyan-500/60 text-white font-bold"
                      : "bg-slate-950/40 border-white/5 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <MapPin
                      className={`w-4 h-4 ${
                        activeHub === index ? "text-amber-400" : "text-slate-500"
                      }`}
                    />
                    <span>
                      {hub.city}, <strong className="font-normal text-slate-300">{hub.country}</strong>
                    </span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                      hub.status === "Active Setup"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {hub.status}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Hub Card Display */}
          <div className="lg:col-span-6 bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-cyan-500/30 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-xs uppercase font-mono text-cyan-400">Selected Regional Node</span>
                <h3 className="font-display text-2xl font-bold text-white flex items-center space-x-2 mt-1">
                  <span>{hubs[activeHub].city}</span>
                  <span className="text-slate-400 text-base font-normal">({hubs[activeHub].country})</span>
                </h3>
              </div>
              <Building2 className="w-8 h-8 text-cyan-400 opacity-80" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">Primary Role</div>
                <div className="text-sm font-semibold text-amber-300 mt-0.5">
                  {hubs[activeHub].role}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">Target Launch Window</div>
                <div className="text-sm text-white font-medium mt-0.5">Phase 1 Rollout (Q4 2026)</div>
              </div>

              <div className="bg-slate-900/90 p-4 rounded-lg border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">University Affiliations:</span>
                  <span className="text-white font-semibold">Local STEM Departments</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hardware Simulator Access:</span>
                  <span className="text-emerald-400 font-semibold">Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Community Workshops:</span>
                  <span className="text-cyan-400 font-semibold">Monthly Virtual &amp; In-Person</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Want to bring QMA to your university city?</span>
              </span>
              <span className="text-cyan-400 font-bold">Apply as Chapter Lead &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
