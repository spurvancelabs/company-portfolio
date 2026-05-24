/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */

import Footer from '@/components/Footer/Footer';
import "./globals.css"
import NavbarWithErrorBoundary  from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";
import  SmoothScrollProvider  from "@/components/SmoothScrollProvider";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://spurvancelabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Spurvance Labs | Engineering Excellence in Pakistan",
    template: "%s | Spurvance Labs"
  },
  description: "Open-source infrastructure, enterprise solutions, and world-class engineering talent built in Pakistan for the world.",
  keywords: [
    "DevOps",
    "Cloud Engineering",
    "Open Source",
    "Pakistan Tech",
    "Software Development",
    "Security",
    "AI/ML",
    "Web Development"
  ],
  authors: [{ name: "Spurvance Labs" }],
  creator: "Spurvance Labs",
  publisher: "Spurvance Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Spurvance Labs",
    title: "Spurvance Labs | Engineering Excellence in Pakistan",
    description: "Open-source infrastructure, enterprise solutions, and world-class engineering talent built in Pakistan for the world.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Spurvance Labs",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spurvancelabs",
    creator: "@spurvancelabs",
    title: "Spurvance Labs | Engineering Excellence in Pakistan",
    description: "Open-source infrastructure, enterprise solutions, and world-class engineering talent built in Pakistan for the world.",
    images: [`${baseUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: baseUrl,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
         <BackToTop />
       <NavbarWithErrorBoundary/>
        <main>{children}</main>
        <Footer />
      </SmoothScrollProvider>
      </body>
    </html>
  );
}