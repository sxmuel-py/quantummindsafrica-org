"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function DemoBadge() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside className="fixed bottom-4 left-4 z-40 animate-fade-in" aria-label="Demo notice">
      <div className="bg-slate-950/90 backdrop-blur-md text-slate-100 text-xs px-3.5 py-2.5 rounded-2xl border border-slate-800 shadow-2xl flex items-center space-x-3 max-w-[320px] sm:max-w-sm">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <div className="flex-1 text-[11px] sm:text-xs leading-snug">
          <span className="font-bold text-amber-400">Live Demo Preview:</span>{" "}
          <span className="text-slate-300">This site is currently an active showcase demo for Quantum Minds Africa.</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors shrink-0"
          aria-label="Dismiss demo notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
