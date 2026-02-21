"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Scale,
    Phone,
    ChevronDown,
    MessageCircle
} from "lucide-react";

const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/layanan", label: "Layanan" },
    { href: "/artikel", label: "Artikel" },
    { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Top bar */}
            <div className="bg-navy-900 text-sm py-2 hidden md:block border-b border-navy-800">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6 text-gray-400">
                        <a
                            href="tel:+628152233384"
                            className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                        >
                            <Phone size={14} />
                            +62 815-2233-384
                        </a>
                        <span>|</span>
                        <a
                            href="mailto:deltaabadiahavah@gmail.com"
                            className="hover:text-gold-400 transition-colors"
                        >
                            deltaabadiahavah@gmail.com
                        </a>
                    </div>
                    <div className="text-gray-400">
                        Senin - Jumat: 08:00 - 17:00 WIB
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-navy-950/80 backdrop-blur-xl shadow-2xl shadow-navy-950/50 border-b border-navy-800/50"
                    : "bg-navy-950/40 backdrop-blur-md"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-shadow duration-300 overflow-hidden p-1">
                                    <img src="/logo.webp" alt="Logo Yayasan Ahavah" className="w-full h-full object-contain" />
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                            </div>
                            <div>
                                <span className="text-sm font-bold tracking-tight text-white block leading-tight">
                                    Yayasan Ahavah Delta Abadi
                                </span>
                                <p className="text-[8px] text-gray-400 mt-0.5 tracking-tighter uppercase font-medium">
                                    SK Kemenkumham AHU-0015730.AH.01.04.Tahun 2024
                                </p>
                            </div>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA + Mobile toggle */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://wa.me/628152233384"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold text-sm rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105"
                            >
                                <MessageCircle size={16} />
                                Konsultasi Gratis
                            </a>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-gray-300 hover:text-gold-400 transition-colors"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-navy-950 shadow-2xl overflow-y-auto"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden p-1">
                                            <img src="/logo.webp" alt="Logo Yayasan Ahavah" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-white block leading-tight">Yayasan Ahavah <br /> delta abadi</span>
                                            <p className="text-[7px] text-gray-400 tracking-tighter uppercase">SK Kemenkumham AHU-0015730.AH.01.04.Tahun 2024</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-gray-400 hover:text-white"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="space-y-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block w-full px-4 py-3 text-gray-300 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-navy-800">
                                    <a
                                        href="https://wa.me/628152233384"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-lg"
                                    >
                                        <MessageCircle size={18} />
                                        Konsultasi Gratis
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
