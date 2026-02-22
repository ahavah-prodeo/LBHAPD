"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
    Heart,
    CreditCard,
    QrCode,
    MessageCircle,
    ArrowRight,
    CheckCircle2,
    Copy,
} from "lucide-react";
import { useState } from "react";

const bankAccounts = [
    {
        bank: "BANK BCA",
        accountName: "Yayasan GEPSAN",
        accountNumber: "1711237106",
        logo: "/banks/mandiri.png", // We'll use icons if images are missing
    },
];

export default function DonasiContent() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                            Bantu Sesama
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Salurkan <span className="text-gradient">Donasi Anda</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Setiap donasi yang Anda berikan akan sangat berarti untuk mendukung program bantuan hukum gratis bagi masyarakat yang tidak mampu dan membutuhkan keadilan.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Donation Methods */}
            <section className="py-20 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Bank Transfer */}
                        <div className="space-y-8">
                            <AnimatedSection direction="left">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center border border-gold-500/20">
                                        <CreditCard className="text-gold-400" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white font-display">Transfer Bank</h2>
                                </div>

                                <div className="space-y-4">
                                    {bankAccounts.map((acc, index) => (
                                        <div
                                            key={index}
                                            className="p-6 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-300 group"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <p className="text-gold-400 font-bold text-lg mb-1">{acc.bank}</p>
                                                    <p className="text-gray-400 text-sm">{acc.accountName}</p>
                                                </div>
                                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                                                    <CreditCard size={20} className="text-gold-500" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between bg-navy-950/50 p-4 rounded-xl border border-navy-800/50">
                                                <span className="text-white font-mono text-xl tracking-wider">{acc.accountNumber}</span>
                                                <button
                                                    onClick={() => copyToClipboard(acc.accountNumber, index)}
                                                    className="flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors"
                                                >
                                                    {copiedIndex === index ? (
                                                        <>
                                                            <CheckCircle2 size={16} />
                                                            <span>Tersalin</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy size={16} />
                                                            <span>Salin</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="left" delay={0.2}>
                                <div className="p-6 rounded-2xl bg-gold-500/5 border border-gold-500/10">
                                    <div className="flex gap-4">
                                        <Heart className="text-gold-500 shrink-0" size={24} />
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Donasi Anda akan digunakan untuk biaya operasional pendampingan hukum, administrasi perkara, dan program pemberdayaan hukum masyarakat.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* QRIS & Confirmation */}
                        <div className="space-y-8">
                            {/* <AnimatedSection direction="right">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center border border-gold-500/20">
                                        <QrCode className="text-gold-400" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white font-display">QRIS</h2>
                                </div>

                                <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 text-center">
                                    <div className="max-w-[280px] mx-auto bg-white p-6 rounded-2xl mb-6 shadow-2xl shadow-navy-950 flex flex-col items-center justify-center aspect-square">
                                        <div className="w-full h-full border-4 border-navy-900 rounded-lg p-2 flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <div className="w-12 h-12 bg-navy-900 rounded" />
                                                <div className="w-12 h-12 bg-navy-900 rounded" />
                                            </div>
                                            <div className="flex flex-col gap-2 items-center">
                                                <QrCode size={64} className="text-navy-900 opacity-20" />
                                                <span className="text-navy-900 font-bold text-xs">QRIS STANDAR</span>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="w-12 h-12 bg-navy-900 rounded" />
                                                <div className="flex flex-col gap-1 items-end">
                                                    <div className="w-4 h-4 bg-navy-900 rounded" />
                                                    <div className="w-4 h-4 bg-navy-900 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-white font-semibold mb-2">QRIS Yayasan Ahavah Delta Abadi</p>
                                    <p className="text-gray-400 text-sm">Scan menggunakan aplikasi mobile banking atau e-wallet (Gopay, OVO, Dana, dll)</p>
                                </div>
                            </AnimatedSection> */}

                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800/50 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-gold-500/10 transition-colors duration-500" />

                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        Konfirmasi Donasi
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                        Mohon lakukan konfirmasi setelah melakukan transfer agar kami dapat mendata dan mengirimkan tanda terima donasi.
                                    </p>
                                    <a
                                        href="https://wa.me/628152233384?text=Halo%20LBH%20Ahavah%2C%20saya%20ingin%20mengonfirmasi%20donasi%20yang%20telah%20saya%20kirimkan."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:scale-105"
                                    >
                                        <MessageCircle size={20} />
                                        Konfirmasi via WhatsApp
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Section */}
            <section className="py-20 px-4 bg-navy-900/30">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-white mb-12">Mengapa Berdonasi di LBH Ahavah?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Tepat Sasaran",
                                    desc: "Donasi disalurkan langsung untuk membiayai bantuan hukum bagi masyarakat miskin."
                                },
                                {
                                    title: "Transparan",
                                    desc: "Laporan penggunaan dana donasi dicatat secara akuntabel dan profesional."
                                },
                                {
                                    title: "Legal & Terdaftar",
                                    desc: "Yayasan kami memiliki izin resmi dan terdaftar di Kemenkumham RI."
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-navy-950/50 border border-navy-800/50">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-gold-500" size={24} />
                                    </div>
                                    <h3 className="text-white font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
