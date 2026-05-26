import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Web Dev + AI Engineering Bootcamp | Spurvance Labs",
  description:
    "Live Urdu-medium bootcamp: React, Next.js, Node.js, AI Engineering, Docker & more. Google Meet sessions. 3-month course. PKR 20,000. Installments available.",

  keywords: [
    "full stack bootcamp pakistan",
    "web dev course urdu",
    "react nextjs course",
    "nodejs bootcamp",
    "ai engineering course",
    "spurvance labs",
    "online coding bootcamp pakistan",
  ],

  openGraph: {
    title: "Full Stack Web Dev + AI Engineering Bootcamp | Spurvance Labs",
    description:
      "Live Urdu bootcamp on Google Meet. 3 months. Real projects. Internship certificate. PKR 20,000 or 3 installments.",
    url: "https://spurvancelabs.com/courses/full-stack-web-dev",
    siteName: "Spurvance Labs",
    images: [
      {
        url: "https://spurvancelabs.com/og-fullstack.jpg",
        width: 1200,
        height: 630,
        alt: "Full Stack Web Dev + AI Engineering Bootcamp",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full Stack Web Dev + AI Engineering Bootcamp | Spurvance Labs",
    description:
      "Learn React, Next.js, Node.js & AI Engineering in Urdu with live sessions and real projects.",
    images: ["https://spurvancelabs.com/og-fullstack.jpg"],
  },

  alternates: {
    canonical: "https://spurvancelabs.com/courses/full-stack-web-dev",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FullStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}