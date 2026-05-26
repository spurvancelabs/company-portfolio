import {
  HeroSection,
  MarqueeSection,
  FeaturesSection,
  ServicesSection,
  // TestimonialsSection,
  CTASection,
} from '@/components/Home/';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Spurvance Labs | Open Source Engineering & Enterprise Solutions",
  description: "Engineering excellence built in Pakistan. Open-source infrastructure, DevOps, cloud engineering, and world-class development talent serving global clients.",
  keywords: [
    "open source",
    "DevOps",
    "cloud engineering",
    "software development",
    "Pakistan tech",
    "enterprise solutions",
    "infrastructure",
    "AI/ML"
  ],
  openGraph: {
    title: "Spurvance Labs | Open Source Engineering & Enterprise Solutions",
    description: "Engineering excellence built in Pakistan. Open-source infrastructure, DevOps, cloud engineering, and world-class development talent.",
    type: "website",
    url: "https://spurvancelabs.com",
    images: [
      {
        url: "https://spurvancelabs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spurvance Labs - Engineering Excellence",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spurvance Labs | Open Source Engineering & Enterprise Solutions",
    description: "Engineering excellence built in Pakistan. Open-source infrastructure, DevOps, cloud engineering, and world-class development talent.",
    images: ["https://spurvancelabs.com/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-white overflow-x-hidden">
      <HeroSection />
      <MarqueeSection />
      <FeaturesSection />
      {/* <ProductsSection /> */}
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </main>
  );
}
