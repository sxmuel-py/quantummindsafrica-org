"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import DonationModal from "@/components/DonationModal";
import GalleryModal from "@/components/GalleryModal";
import DemoBadge from "@/components/DemoBadge";
import {
  Heart,
  BookOpen,
  Laptop,
  GraduationCap,
  Users,
  CheckCircle2,
  Mail,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  Sparkles,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Star,
  Camera,
  Award,
  BookMarked,
  Atom,
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

export default function Home() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const featuredGalleryItems: GalleryItem[] = [
    {
      id: "qm_1",
      title: "Interactive School Outreach & Science Session",
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
  ];

  const faqs = [
    {
      question: "What is the core mission of Quantum Minds Africa Initiative (QMAI)?",
      answer:
        "Founded by Debola Oyelami (top IGCSE Physics & Chemistry scholar in Africa), QMAI is dedicated to making physics, STEM, and quantum science simple, engaging, and accessible for students in underserved public schools across Nigeria.",
    },
    {
      question: "How do your interactive school outreach sessions work?",
      answer:
        "We visit public schools with hands-on experiment kits, simplified study materials, and interactive demonstrations that demystify physics and ignite scientific curiosity among young learners.",
    },
    {
      question: "How can I support or sponsor a school outreach program?",
      answer:
        "You can contribute directly through our 'Donate Now' portal. Gifts fund experiment kits ($15), student learning packages ($35), and classroom science stations ($75) delivered directly to Nigerian schools.",
    },
    {
      question: "Are public donations 100% transparent and direct?",
      answer:
        "Yes, 100% of donor funds directly purchase science learning materials, experiment supplies, and outreach equipment for underserved schools in Nigeria.",
    },
    {
      question: "Can schools or organizations request a QMAI outreach visit?",
      answer:
        "Yes! Public schools and educational partners can contact our team directly at +234 902 729 5832 or via contact@quantummindsafrica.org to schedule an outreach session.",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-700 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Top Navbar */}
      <Navbar onOpenDonation={() => setIsDonationOpen(true)} />

      {/* Modals & Demo Badge */}
      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
      <GalleryModal item={selectedGalleryItem} onClose={() => setSelectedGalleryItem(null)} />
      <DemoBadge />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery/qm_1.jpg"
              alt="Quantum Minds Africa Interactive Science Outreach"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 p-5 sm:p-12 lg:p-16 max-w-2xl text-white space-y-4 sm:space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Atom className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">Making Physics & Science Simple</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Making Science Simple <br />
              <span className="text-amber-400">For Nigerian Students</span>
            </h1>

            {/* Paragraph */}
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed max-w-xl">
              Quantum Minds Africa Initiative (QMAI) bridges the STEM education gap through interactive school outreach, hands-on physics experiments, and simplified study materials for public school students across Nigeria.
            </p>

            {/* Pill CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Link
                href="/donate"
                className="carenest-btn-primary text-xs sm:text-sm shadow-xl hover:scale-[1.02] justify-center py-3.5 active:scale-95 transition-transform flex items-center"
              >
                <span>Donate Now (₦)</span>
                <span className="carenest-btn-icon">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <a
                href="#founder"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-xs transition-all border border-white/20 text-center active:bg-white/30"
              >
                Meet Our Founder
              </a>
            </div>

            {/* Floating Donor Avatars Badge */}
            <div className="pt-6 flex items-center space-x-3 text-xs text-slate-200">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-amber-500 flex items-center justify-center font-bold text-slate-950 text-[10px]">
                  DO
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-teal-500 flex items-center justify-center font-bold text-white text-[10px]">
                  QMA
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">
                  NG
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-slate-700 flex items-center justify-center font-bold text-amber-400 text-[10px]">
                  +12k
                </div>
              </div>
              <div className="font-medium text-slate-200">
                Over <span className="font-bold text-white">12,000+ students</span> reached in Nigeria
              </div>
            </div>

          </div>

          {/* Floating Quote Overlay */}
          <div className="hidden lg:block absolute bottom-8 right-8 z-10 max-w-sm bg-slate-950/85 backdrop-blur-md border border-white/15 p-5 rounded-2xl text-white shadow-2xl space-y-3">
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-200 leading-relaxed italic">
              "Through hands-on experiments and simplified learning materials, we spark interest in physics and nurture the next generation of African innovators."
            </p>
            <div className="flex items-center space-x-3 pt-1">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                DO
              </div>
              <div>
                <div className="text-xs font-bold text-white">Debola Oyelami</div>
                <div className="text-[10px] text-amber-400">Founder & Lead Visionary, QMAI</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. NUMBERED PROCESS 01-04 */}
      {/* ========================================================================= */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-mono">
            / Work Process /
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Bridge the STEM Gap in Schools
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-3 p-2">
            <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              01
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Identify Schools in Need
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collaborate with public school administrators and teachers across Nigeria to identify classrooms lacking science equipment.
            </p>
          </div>

          <div className="space-y-3 p-2">
            <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              02
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Simplify Physics & STEM
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We break down complex physics and chemistry concepts into engaging, interactive modules and visual study guides.
            </p>
          </div>

          <div className="space-y-3 p-2">
            <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              03
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Deliver Outreach & Experiments
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our team conducts live classroom science demonstrations and equips pupils with hands-on experiment materials.
            </p>
          </div>

          <div className="space-y-3 p-2">
            <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              04
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Inspire Long-Term STEM Interest
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We mentor students and provide ongoing support to build critical thinking and nurture future African scientists.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT OUR NGO */}
      {/* ========================================================================= */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image Feature */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
            <Image
              src="/images/gallery/qm_2.jpg"
              alt="Hands-on Physics Experiment Session"
              fill
              className="object-cover"
            />
            
            {/* Clean Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200 shadow-2xl flex items-center space-x-4">
              <div className="bg-amber-500 text-slate-950 font-extrabold text-base sm:text-lg px-4 py-3 rounded-2xl shrink-0 shadow-sm flex items-center justify-center font-sans tracking-tight leading-none">
                100%
              </div>
              <div className="space-y-0.5">
                <div className="text-base font-extrabold text-slate-900 leading-tight">Direct School Funding</div>
                <div className="text-xs text-slate-600 leading-relaxed">Every donation goes straight into local Nigerian classroom physics & science tools.</div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-mono">
              / About Us /
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Making Physics & STEM Simple, Engaging, and Accessible
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Quantum Minds Africa Initiative (QMAI) was established to ignite curiosity and bridge the gap in science education across Nigeria. We believe every student deserves to experience the wonder of physics and science through simple explanations and interactive learning.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm text-slate-900 font-bold">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Interactive Public School Science Outreach Programs</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-900 font-bold">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Hands-on Physics & Chemistry Experiment Kits</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-900 font-bold">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Simplified Study Materials & Visual Science Guides</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-900 font-bold">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Nurturing Critical Thinking & Future Innovators</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsDonationOpen(true)}
                className="carenest-btn-primary text-xs"
              >
                <span>Support Our Mission</span>
                <span className="carenest-btn-icon">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MEET OUR FOUNDER - DEBOLA OYELAMI */}
      {/* ========================================================================= */}
      <section id="founder" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 bg-white rounded-3xl my-12 border shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Founder Photo & Academic Medals */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[3/4]">
              <Image
                src="/images/founder.jpg"
                alt="Debola Oyelami - Founder of Quantum Minds Africa"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white shadow-2xl space-y-0.5">
                <h3 className="text-xl font-extrabold !text-white tracking-tight">Debola Oyelami</h3>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Founder & Lead Visionary, QMAI
                </p>
              </div>
            </div>

            {/* Academic Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl space-y-1">
                <div className="flex items-center space-x-1.5 text-amber-600 font-extrabold">
                  <Award className="w-4 h-4" />
                  <span>#1 in Africa</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Highest Mark in Africa (2025 IGCSE Physics & Chemistry)
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl space-y-1">
                <div className="flex items-center space-x-1.5 text-amber-600 font-extrabold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>#2 in Nigeria</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  2nd Highest Mark in Nigeria (2025 IGCSE Mathematics)
                </p>
              </div>
            </div>
          </div>

          {/* Founder Bio & Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-mono">
                / Meet Our Founder /
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                "Igniting Curiosity & Empowering Africa’s Next Generation of Scientists."
              </h2>
            </div>

            {/* Academic Badges Bar */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full flex items-center space-x-1">
                <Atom className="w-3.5 h-3.5 text-amber-700" />
                <span>Harvard Pre-College Quantum Physics</span>
              </span>
              <span className="bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 rounded-full flex items-center space-x-1">
                <GraduationCap className="w-3.5 h-3.5 text-slate-700" />
                <span>Rugby School Nigeria (A-Levels)</span>
              </span>
              <span className="bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 rounded-full flex items-center space-x-1">
                <BookMarked className="w-3.5 h-3.5 text-slate-700" />
                <span>Children’s International School Alum</span>
              </span>
            </div>

            {/* Letter Content */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <p>
                My name is <strong>Debola Oyelami</strong> and I am the founder of <strong>Quantum Minds Africa Initiative (QMAI)</strong>, an initiative dedicated to making physics and quantum science simple, engaging, and accessible for students—particularly in underserved public schools across Nigeria.
              </p>

              <p>
                I finished from Children’s International School and achieved the highest mark in Africa in the 2025 IGCSE examinations in both Physics and Chemistry, and second highest mark in Nigeria in Mathematics. I am currently enrolled in pre-college courses in quantum physics at Harvard University while also rounding off my A-level studies at Rugby School Nigeria.
              </p>

              <p>
                This academic journey, combined with my passion for physics, inspired me to establish Quantum Minds Africa to bridge the gap in STEM education and ignite curiosity among young learners.
              </p>

              <p>
                Through interactive school outreach programs, hands-on experiments, and simplified learning materials, we are working to spark interest in science, build critical thinking skills, and nurture the next generation of African innovators.
              </p>

              <p className="font-medium text-slate-900 italic pt-2">
                "With your support, we aim to deliver impactful science sessions that not only improve understanding but also inspire long-term interest in STEM across many underserved schools in Nigeria."
              </p>
            </div>

            {/* Direct Founder Contact Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900 text-white p-5 rounded-2xl">
              <div>
                <div className="text-sm font-extrabold">Debola Oyelami</div>
                <div className="text-xs text-amber-400">Founder & Visionary, Quantum Minds Africa Initiative</div>
              </div>
              <a
                href="tel:+2349027295832"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center space-x-2 shrink-0 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+234 902 729 5832</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PROGRAMS GRID */}
      {/* ========================================================================= */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-mono">
              / Programs /
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Key Educational Initiatives
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mt-4 md:mt-0">
            High-impact science outreach and learning materials delivered directly to public schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="carenest-card overflow-hidden group">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/qm_1.jpg"
                alt="Interactive School Outreach"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-[10px] uppercase px-3 py-1 rounded-full">
                Interactive Outreach
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                Public School Science Outreach
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live interactive demonstrations making physics, chemistry, and STEM simple and fun for students across Nigeria.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-100">
                <span>Primary & Secondary Schools</span>
                <span className="flex items-center space-x-1 text-amber-600 hover:underline">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="carenest-card overflow-hidden group">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/qm_2.jpg"
                alt="Hands-on Experiment Kits"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-slate-900 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full">
                Hands-on Experiments
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                Physics & Science Experiment Kits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Providing accessible physics and chemistry lab experiment kits to classrooms lacking laboratory facilities.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-100">
                <span>Practical STEM Kits</span>
                <span className="flex items-center space-x-1 text-amber-600 hover:underline">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="carenest-card overflow-hidden group">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/gallery/qm_3.jpg"
                alt="Simplified Study Guides"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-teal-600 text-white font-bold text-[10px] uppercase px-3 py-1 rounded-full">
                Simplified Study Guides
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                Simplified Physics Study Guides
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distributing visual science guides that break complex topics into intuitive, easy-to-digest concepts for learners.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-100">
                <span>Free Study Books</span>
                <span className="flex items-center space-x-1 text-amber-600 hover:underline">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED DOCUMENTED GALLERY SECTION (LINKING TO DEDICATED /gallery PAGE) */}
      {/* ========================================================================= */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs uppercase font-extrabold tracking-widest text-slate-500 font-mono">
              <Camera className="w-3.5 h-3.5 text-amber-500" />
              <span>/ Documented Photo Gallery /</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Outreach Photos Across Nigerian Public Schools
            </h2>
          </div>
          
          <Link
            href="/gallery"
            className="carenest-btn-primary text-xs mt-4 md:mt-0 shrink-0"
          >
            <span>View Full Photo Gallery ({featuredGalleryItems.length}+ Photos)</span>
            <span className="carenest-btn-icon">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGalleryItems.map((item) => (
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
              <div className="p-5 space-y-2">
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center space-x-1 text-xs font-bold text-amber-600 group-hover:underline">
                  <span>Inspect Documented Photo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 font-mono">
            / FAQ /
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions About QMAI Outreach
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="carenest-card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base font-extrabold text-slate-900">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-900 font-bold">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4 text-amber-600" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SEAMLESS INFINITE ROTATING TICKER BANNER */}
      {/* ========================================================================= */}
      <div className="bg-amber-500 text-slate-950 py-3.5 font-extrabold text-xs sm:text-sm uppercase tracking-wider overflow-hidden w-full border-y border-amber-600 shadow-inner">
        <div className="animate-marquee">
          <span className="mx-4">★ Quantum Minds Africa Initiative (QMAI)</span>
          <span className="mx-4">★ Making Physics Simple & Fun</span>
          <span className="mx-4">★ Public School Science Outreach</span>
          <span className="mx-4">★ Sparking Curiosity In African Youth</span>
          <span className="mx-4">★ Empowering Future Innovators</span>
          <span className="mx-4">★ Quantum Minds Africa Initiative (QMAI)</span>
          <span className="mx-4">★ Making Physics Simple & Fun</span>
          <span className="mx-4">★ Public School Science Outreach</span>
          <span className="mx-4">★ Sparking Curiosity In African Youth</span>
          <span className="mx-4">★ Empowering Future Innovators</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 9. FOOTER */}
      {/* ========================================================================= */}
      <footer id="contact" className="bg-[#0f172a] text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4 md:col-span-1">
            <div className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-xl shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Quantum Minds Africa Logo"
                width={150}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quantum Minds Africa Initiative (QMAI) is an educational NGO dedicated to making physics, STEM, and quantum science simple and accessible for students in underserved public schools across Nigeria.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#founder" className="hover:text-white transition-colors">Meet Our Founder</Link></li>
              <li><Link href="/#programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">Work Process</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Dedicated Gallery</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Founder</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="font-bold text-white">Debola Oyelami</div>
              <div>Email: <a href="mailto:contact@quantummindsafrica.org" className="text-amber-400 hover:underline">contact@quantummindsafrica.org</a></div>
              <div>Phone: <a href="tel:+2349027295832" className="text-amber-400 hover:underline">+234 902 729 5832</a></div>
              <div>Location: Lagos & Regions Across Nigeria</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-slate-400">Subscribe for school outreach & impact updates.</p>

            {newsletterSubmitted ? (
              <div className="text-xs text-amber-400 font-bold">Subscribed successfully!</div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; {new Date().getFullYear()} Quantum Minds Africa Initiative (QMAI). All rights reserved.</div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Transparent NGO Platform</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
