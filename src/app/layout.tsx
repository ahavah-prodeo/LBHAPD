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
    default: "Yayasan Ahavah delta abadi | Bantuan Hukum Profesional & Terpercaya",
    template: "%s | Yayasan Ahavah delta abadi",
  },
  description:
    "Yayasan Ahavah delta abadi menyediakan layanan konsultasi dan pendampingan hukum profesional. Hukum Perdata, Pidana, Keluarga, Bisnis, Sengketa Tanah, dan Bantuan Hukum Gratis.",
  keywords: [
    "Yayasan Ahavah delta abadi",
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
  authors: [{ name: "Yayasan Ahavah delta abadi" }],
  creator: "Yayasan Ahavah delta abadi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://lbh-hukum.id",
    siteName: "Yayasan Ahavah delta abadi",
    title: "Yayasan Ahavah delta abadi | Bantuan Hukum Profesional & Terpercaya",
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
