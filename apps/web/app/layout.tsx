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

export const metadata: Metadata = {
  title: "Spurvance Labs",
  description: "Building Digital Pakistan",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <NavbarWithErrorBoundary/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}