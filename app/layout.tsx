import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantummindsafrica.org"),
  title: "Quantum Minds Africa (QMA) NGO — Official Launching Soon",
  description:
    "Official coming soon portal for Quantum Minds Africa (quantummindsafrica.org). Empowering youth, researchers, and innovators across Africa with quantum science & AI literacy.",
  keywords: [
    "Quantum Minds Africa",
    "quantummindsafrica.org",
    "African Quantum Computing",
    "AI Education Africa",
    "Pan-African NGO",
    "STEM Youth Empowerment",
  ],
  authors: [{ name: "Quantum Minds Africa NGO" }],
  openGraph: {
    title: "Quantum Minds Africa (QMA) NGO — Under Construction",
    description:
      "Unlocking Africa's Technological Potential Through Quantum Innovation & Frontier Science.",
    url: "https://quantummindsafrica.org",
    siteName: "Quantum Minds Africa NGO",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 675,
        alt: "Quantum Minds Africa NGO Innovation Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Minds Africa NGO — Launching Q4 2026",
    description: "Building Africa's Quantum & AI Future.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
