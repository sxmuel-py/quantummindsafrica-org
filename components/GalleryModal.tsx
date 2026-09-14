"use client";

import Image from "next/image";
import { X, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0c1020] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/80 p-2.5 rounded-full backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1020] via-transparent to-transparent opacity-90" />
        </div>

        <div className="p-6 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30 flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>{item.category}</span>
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
