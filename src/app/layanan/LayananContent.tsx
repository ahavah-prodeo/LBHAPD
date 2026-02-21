"use client";

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Scale,
    Gavel,
    Heart,
    Building2,
    LandPlot,
    HandHeart,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const layananDetail = [
    {
        icon: Scale,
        title: "Hukum Perdata",
        slug: "hukum-perdata",
        image: "https://ik.imagekit.io/bzq0b2kjq/hukum-perdata.webp",
        desc: "Penanganan sengketa perdata, perjanjian, dan hak-hak keperdataan secara profesional dan menyeluruh.",
        features: [
            "Sengketa kontrak dan perjanjian",
            "Wanprestasi",
            "Perbuatan melawan hukum",
            "Ganti kerugian",
            "Eksekusi putusan pengadilan",
        ],
    },
    {
        icon: Gavel,
        title: "Hukum Pidana",
        slug: "hukum-pidana",
        image: "https://ik.imagekit.io/bzq0b2kjq/hukum-pidana-1024x683-1200x800-1.webp",
        desc: "Pendampingan dan pembelaan dalam perkara pidana di seluruh tingkat peradilan Indonesia.",
        features: [
            "Pendampingan BAP di kepolisian",
            "Pembelaan di pengadilan",
            "Banding dan kasasi",
            "Peninjauan kembali",
            "Praperadilan",
        ],
    },
    {
        icon: Heart,
        title: "Hukum Keluarga",
        slug: "hukum-keluarga",
        image: "https://ik.imagekit.io/bzq0b2kjq/lt609aa33ae281d.webp",
        desc: "Konsultasi dan penanganan masalah perceraian, hak asuh anak, waris, dan masalah keluarga lainnya.",
        features: [
            "Perceraian (cerai gugat / cerai talak)",
            "Hak asuh anak",
            "Pembagian harta gono-gini",
            "Hukum waris",
            "Adopsi anak",
        ],
    },
    {
        icon: Building2,
        title: "Hukum Bisnis",
        slug: "hukum-bisnis",
        image: "https://ik.imagekit.io/bzq0b2kjq/hukum-bisnis%20(1).webp",
        desc: "Pendampingan hukum korporasi, kontrak bisnis, pendirian usaha, dan investasi.",
        features: [
            "Pendirian PT and CV",
            "Drafting kontrak bisnis",
            "Due diligence hukum",
            "Merger dan akuisisi",
            "Perlindungan kekayaan intelektual",
        ],
    },
    {
        icon: LandPlot,
        title: "Sengketa Tanah",
        slug: "sengketa-tanah",
        image: "https://ik.imagekit.io/bzq0b2kjq/gugatan-sengketa-tanah-r4hq6tknhy7cgypari8g9ghdmzx2ghww2k1k0ygtxk.webp",
        desc: "Penyelesaian sengketa properti, sertifikat, izin, dan hak atas tanah.",
        features: [
            "Sengketa kepemilikan tanah",
            "Sertifikat ganda",
            "Pembebasan lahan",
            "Izin pemanfaatan tanah",
            "Pendaftaran hak atas tanah",
        ],
    },
    {
        icon: HandHeart,
        title: "Bantuan Hukum Gratis",
        slug: "bantuan-hukum-gratis",
        image: "https://ik.imagekit.io/bzq0b2kjq/Bantuan-Hukum-Gratis-dari-Pemerintah-Ini-Syaratnya.jpg",
        desc: "Layanan bantuan hukum pro bono bagi masyarakat kurang mampu yang membutuhkan keadilan.",
        features: [
            "Konsultasi hukum gratis",
            "Pendampingan di pengadilan",
            "Penyuluhan hukum",
            "Mediasi dan negosiasi",
            "Pembuatan dokumen hukum",
        ],
    },
];

export default function LayananContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                            Layanan Kami
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Bidang Keahlian <span className="text-gradient">Hukum</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Kami menyediakan berbagai layanan hukum profesional untuk membantu
                            Anda menghadapi tantangan hukum secara efektif.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto space-y-16">
                    {layananDetail.map((item, i) => (
                        <AnimatedSection key={item.slug} delay={0.1}>
                            <div
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""
                                    }`}
                            >
                                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400/10 to-gold-600/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6">
                                        <item.icon className="text-gold-400" size={32} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {item.features.map((f) => (
                                            <li key={f} className="flex items-center gap-3">
                                                <CheckCircle2
                                                    className="text-gold-400 shrink-0"
                                                    size={18}
                                                />
                                                <span className="text-gray-300 text-sm">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <Link
                                        href={`/layanan/${item.slug}`}
                                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
                                    >
                                        Pelajari Selengkapnya
                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </Link> */}
                                </div>

                                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="aspect-[4/3] rounded-2xl overflow-hidden bg-navy-900/50 border border-navy-800/50 group relative"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                                    </motion.div>
                                </div>
                            </div>

                            {i < layananDetail.length - 1 && (
                                <div className="mt-16 border-b border-navy-800/30" />
                            )}
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </>
    );
}
