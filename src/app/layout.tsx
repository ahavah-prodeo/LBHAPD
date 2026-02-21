import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LBH Ahavah Pro Deo | Bantuan Hukum Profesional & Terpercaya",
    template: "%s | LBH Ahavah Pro Deo",
  },
  description:
    "LBH Ahavah Pro Deo menyediakan layanan konsultasi dan pendampingan hukum profesional. Hukum Perdata, Pidana, Keluarga, Bisnis, Sengketa Tanah, dan Bantuan Hukum Gratis.",
  keywords: [
    "LBH Ahavah Pro Deo",
    "bantuan hukum",
    "konsultasi hukum",
    "advokat",
    "pengacara",
    "hukum perdata",
    "hukum pidana",
    "hukum keluarga",
    "hukum bisnis",
    "sengketa tanah",
    "bantuan hukum gratis",
    "firma hukum",
    "lawyer indonesia",
  ],
  authors: [{ name: "LBH Ahavah Pro Deo" }],
  creator: "LBH Ahavah Pro Deo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lbh-hukum.id",
    siteName: "LBH Ahavah Pro Deo",
    title: "LBH Ahavah Pro Deo | Bantuan Hukum Profesional & Terpercaya",
    description:
      "Menyediakan layanan konsultasi dan pendampingan hukum profesional untuk masyarakat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased bg-navy-950 text-white overflow-x-hidden">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
