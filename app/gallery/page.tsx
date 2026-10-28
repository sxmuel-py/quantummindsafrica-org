"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DonationModal from "@/components/DonationModal";
import GalleryModal from "@/components/GalleryModal";
import {
  Camera,
  ArrowLeft,
  Heart,
  Sparkles,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

export default function DedicatedGalleryPage() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "qm_1",
      title: "Interactive School Outreach & Science Demonstration",
      category: "School Outreach",
      description:
        "Quantum Minds Africa Initiative (QMAI) team conducting hands-on physics and chemistry demonstrations in a Nigerian public school classroom.",
      imageSrc: "/images/gallery/qm_1.jpg",
    },
    {
      id: "qm_2",
      title: "Hands-on Physics Experiment Session",
      category: "Hands-on STEM",
      description:
        "Students observing and participating in interactive physics experiments designed to make complex science simple and engaging.",
      imageSrc: "/images/gallery/qm_2.jpg",
    },
    {
      id: "qm_3",
      title: "Simplified Science Learning Materials Distribution",
      category: "Learning Kits",
      description:
        "Distributing simplified science guidebooks and learning kits to eager students across underserved school communities.",
      imageSrc: "/images/gallery/qm_3.jpg",
    },
    {
      id: "qm_4",
      title: "Student Mentorship & Critical Thinking Workshop",
      category: "Mentorship",
      description:
        "Engaging students in group discussions to nurture problem-solving, critical thinking, and curiosity in frontier science.",
      imageSrc: "/images/gallery/qm_4.jpg",
    },
    {
      id: "qm_5",
      title: "Public School Science Outreach in Nigeria",
      category: "School Outreach",
      description:
        "Bringing engaging physics and STEM demonstrations directly to students in local government public schools.",
      imageSrc: "/images/gallery/qm_5.jpg",
    },
    {
      id: "qm_6",
      title: "Classroom Physics & Chemistry Demonstration",
      category: "Hands-on STEM",
      description:
        "Interactive experiments showing fundamental principles of energy, motion, and matter in an approachable classroom environment.",
      imageSrc: "/images/gallery/qm_6.jpg",
    },
    {
      id: "qm_7",
      title: "Empowering Young Female Innovators in STEM",
      category: "Mentorship",
      description:
        "Inspiring young Nigerian girls to excel in physics, chemistry, and mathematics through active mentorship.",
      imageSrc: "/images/gallery/qm_7.jpg",
    },
    {
      id: "qm_8",
      title: "Student Engagement & Interactive Science Quiz",
      category: "School Outreach",
      description:
        "Rewarding student participation and curiosity during interactive QMAI science workshops.",
      imageSrc: "/images/gallery/qm_8.jpg",
    },
    {
      id: "qm_9",
      title: "Collaborative Science Problem Solving",
      category: "Hands-on STEM",
      description:
        "Students working in groups to solve practical physics puzzles using simplified learning aids.",
      imageSrc: "/images/gallery/qm_9.jpg",
    },
    {
      id: "qm_10",
      title: "Documented Impact & School Outreach Session",
      category: "School Outreach",
      description:
        "Documented photographs from our ongoing educational outreach across public school districts in Nigeria.",
      imageSrc: "/images/gallery/qm_10.jpg",
    },
    {
      id: "qma_flyer",
      title: "Quantum Minds Africa Initiative Official Banner",
      category: "Official Platform",
      description:
        "Official launching and program outline for Quantum Minds Africa Initiative (QMAI).",
      imageSrc: "/images/gallery/qma_flyer.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Navbar */}
      <Navbar onOpenDonation={() => setIsDonationOpen(true)} />

      {/* Modals */}
      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
      <GalleryModal item={selectedGalleryItem} onClose={() => setSelectedGalleryItem(null)} />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center space-x-3 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Camera className="w-4 h-4" />
            <span>Documented Outreach Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Quantum Minds Africa In Action
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Explore authentic documented photography from Quantum Minds Africa Initiative (QMAI) school outreach sessions, hands-on physics experiments, and learning material distributions across Nigerian public schools.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryItem(item)}
              className="carenest-card cursor-pointer overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold text-[10px] uppercase px-3 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-amber-600 group-hover:underline">
                  <span>Inspect High-Res Photo</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>&copy; {new Date().getFullYear()} Quantum Minds Africa Initiative (QMAI). All rights reserved.</div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Transparent NGO Educational Outreach</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
