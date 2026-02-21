"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const articles = [
    {
        slug: "panduan-lengkap-hukum-perceraian",
        title: "Panduan Lengkap Hukum Perceraian di Indonesia",
        excerpt:
            "Memahami prosedur, hak, dan kewajiban dalam proses perceraian menurut hukum Indonesia, termasuk pembagian harta dan hak asuh anak.",
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
        date: "15 Februari 2026",
        readTime: "8 menit",
        category: "Hukum Keluarga",
    },
    {
        slug: "perlindungan-hukum-umkm",
        title: "Perlindungan Hukum untuk UMKM: Strategi & Tips",
        excerpt:
            "Tips dan strategi perlindungan hukum bagi pelaku usaha mikro, kecil, dan menengah agar bisnis tetap aman dan berkembang.",
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
        date: "10 Februari 2026",
        readTime: "6 menit",
        category: "Hukum Bisnis",
    },
    {
        slug: "hak-atas-tanah",
        title: "Mengenal Jenis-Jenis Hak Atas Tanah di Indonesia",
        excerpt:
            "Penjelasan lengkap mengenai hak milik, HGB, HGU, hak pakai, dan jenis-jenis hak atas tanah lainnya beserta dasar hukumnya.",
        image:
            "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=600&auto=format&fit=crop",
        date: "5 Februari 2026",
        readTime: "10 menit",
        category: "Sengketa Tanah",
    },
    {
        slug: "proses-praperadilan",
        title: "Memahami Proses Praperadilan dalam Hukum Pidana",
        excerpt:
            "Panduan lengkap mengenai mekanisme praperadilan, syarat permohonan, dan hak-hak tersangka dalam sistem peradilan pidana.",
        image:
            "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=600&auto=format&fit=crop",
        date: "1 Februari 2026",
        readTime: "7 menit",
        category: "Hukum Pidana",
    },
    {
        slug: "kontrak-bisnis-yang-baik",
        title: "Cara Membuat Kontrak Bisnis yang Kuat Secara Hukum",
        excerpt:
            "Elemen penting dalam pembuatan kontrak bisnis yang sah, mengikat, dan melindungi kepentingan semua pihak.",
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
        date: "25 Januari 2026",
        readTime: "5 menit",
        category: "Hukum Bisnis",
    },
    {
        slug: "bantuan-hukum-gratis-masyarakat",
        title: "Cara Mendapatkan Bantuan Hukum Gratis di Indonesia",
        excerpt:
            "Informasi lengkap tentang hak bantuan hukum gratis, syarat pengajuan, dan lembaga yang menyediakan layanan pro bono.",
        image:
            "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=600&auto=format&fit=crop",
        date: "20 Januari 2026",
        readTime: "6 menit",
        category: "Bantuan Hukum",
    },
];

export default function ArtikelContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                            Blog & Artikel
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Berita & Artikel <span className="text-gradient">Hukum</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Wawasan hukum terbaru dari tim advokat profesional kami untuk
                            meningkatkan pemahaman Anda tentang hukum.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <AnimatedSection key={article.slug} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group rounded-2xl overflow-hidden bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/20 transition-all duration-500 h-full flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-500/90 text-navy-950 text-xs font-semibold">
                                                <Tag size={12} />
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <Link
                                            href={`/artikel/${article.slug}`}
                                            className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all"
                                        >
                                            Baca Selengkapnya
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
