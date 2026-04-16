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