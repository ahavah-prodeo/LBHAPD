"use client";

import Link from "next/link";
import {
    Scale,
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
    layanan: [
        { href: "/layanan", label: "Hukum Perdata" },
        { href: "/layanan", label: "Hukum Pidana" },
        { href: "/layanan", label: "Hukum Keluarga" },
        { href: "/layanan", label: "Hukum Bisnis" },
        { href: "/layanan", label: "Sengketa Tanah" },
        { href: "/layanan", label: "Bantuan Hukum Gratis" },
    ],
    navigasi: [
        { href: "/", label: "Beranda" },
        { href: "/tentang", label: "Tentang Kami" },
        { href: "/tim-advokat", label: "Tim Advokat" },
        { href: "/artikel", label: "Artikel" },
        { href: "/donasi", label: "Donasi" },
        { href: "/kontak", label: "Kontak" },
    ],
};

const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/ahavah.prodeo/", icon: Instagram, label: "Instagram", target= "_blank" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-navy-950 border-t border-navy-800/50">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 font-display">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/20 overflow-hidden p-1">
                                <img src="/logo.webp" alt="Logo Yayasan Ahavah" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <span className="text-base font-bold text-white whitespace-nowrap leading-tight">Yayasan Ahavah Delta Abadi <br /> LBH Ahavah Pro Deo</span>
                                <p className="text-[8px] text-gray-400 mt-0.5 tracking-tighter uppercase font-medium">
                                    SK Kemenkumham AHU-0015730.AH.01.04.Tahun 2024
                                </p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Lembaga Bantuan Hukum yang berkomitmen memberikan layanan hukum
                            profesional, terpercaya, dan berkualitas tinggi untuk seluruh
                            lapisan masyarakat.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-navy-800/50 hover:bg-gold-500 flex items-center justify-center text-gray-400 hover:text-navy-950 transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full" />
                            Layanan Kami
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.layanan.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold-500/50" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full" />
                            Navigasi
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.navigasi.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-gold-400 transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold-500/50" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full" />
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-gray-400 text-sm hover:text-gold-400 transition-colors"
                                >
                                    <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                                    <span>
                                        Jl. Sungai Raya Dalam, Gg. Raya VI, Blok B.20, RT/RW: 003/001, Kubu Raya, Kalimantan Barat
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+628152233384"
                                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold-400 transition-colors"
                                >
                                    <Phone size={18} className="shrink-0 text-gold-500" />
                                    +62 815-2233-384
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:deltaabadiahavah@gmail.com"
                                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold-400 transition-colors"
                                >
                                    <Mail size={18} className="shrink-0 text-gold-500" />
                                    deltaabadiahavah@gmail.com
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <Clock size={18} className="shrink-0 text-gold-500" />
                                    Senin - Jumat, 08:00 - 17:00 WIB
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-navy-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} LBH Ahavah Pro Deo. Seluruh
                        hak dilindungi.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link
                            href="/kebijakan-privasi"
                            className="hover:text-gold-400 transition-colors"
                        >
                            Kebijakan Privasi
                        </Link>
                        <Link
                            href="/syarat-ketentuan"
                            className="hover:text-gold-400 transition-colors"
                        >
                            Syarat & Ketentuan
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 text-navy-950 rounded-xl shadow-lg shadow-gold-500/30 flex items-center justify-center hover:shadow-gold-500/50 transition-shadow z-30"
                aria-label="Scroll to top"
            >
                <ArrowUp size={22} />
            </motion.button>
        </footer>
    );
}
