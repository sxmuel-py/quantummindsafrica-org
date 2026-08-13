"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-12-01T00:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto my-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="glass-card p-4 text-center border border-white/10 animate-pulse h-28 flex flex-col justify-center"
          >
            <div className="h-8 bg-cyan-500/20 rounded w-16 mx-auto mb-2"></div>
            <div className="h-4 bg-slate-500/20 rounded w-12 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days, color: "from-cyan-500 to-blue-600" },
    { label: "Hours", value: timeLeft.hours, color: "from-amber-500 to-orange-600" },
    { label: "Minutes", value: timeLeft.minutes, color: "from-emerald-500 to-teal-600" },
    { label: "Seconds", value: timeLeft.seconds, color: "from-purple-500 to-indigo-600" },
  ];

  return (
    <div className="my-8">
      <div className="text-center mb-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
          Estimated Target Launch Date: Dec 1, 2026
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="glass-card relative overflow-hidden p-5 text-center transition-all duration-300 hover:scale-[1.03] hover:border-cyan-500/40 group"
          >
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${unit.color}`}
            />
            <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform duration-200">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-2">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
