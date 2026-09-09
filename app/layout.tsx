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
  title: "Quantum Minds Africa | Empowering Africa's Next-Gen Scientists & Innovators",
  description:
    "Empowering African youth, researchers, and visionaries through Quantum Science, STEM Labs, AI Literacy, and Community Tech Fellowships.",
  keywords: [
    "Quantum Minds Africa",
    "quantummindsafrica.org",
    "African Quantum Computing",
    "STEM Africa NGO",
    "AI Education Africa",
    "Pan-African Innovation",
    "Youth Science Fellowship",
  ],
  authors: [{ name: "Quantum Minds Africa NGO" }],
  openGraph: {
    title: "Quantum Minds Africa NGO — Innovation & STEM Platform",
    description:
      "Unlocking Africa's Technological Potential Through Quantum Innovation & Frontier Science.",
    url: "https://quantummindsafrica.org",
    siteName: "Quantum Minds Africa NGO",
    images: [
      {
        url: "/images/hero-bg.jpg",
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
    title: "Quantum Minds Africa NGO",
    description: "Building Africa's Quantum & STEM Future.",
    images: ["/images/hero-bg.jpg"],
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
