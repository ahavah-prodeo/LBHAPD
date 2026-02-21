"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Linkedin, Mail, Award } from "lucide-react";

const teamMembers = [
    {
        name: "Dr. Hendra Wijaya, S.H., M.H.",
        role: "Managing Partner",
        specialty: "Hukum Perdata & Bisnis",
        experience: "20+ Tahun",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&crop=face",
        bio: "Spesialis hukum korporasi dengan pengalaman menangani kasus-kasus multinasional.",
    },
    {
        name: "Sarah Amelia, S.H., LL.M.",
        role: "Senior Partner",
        specialty: "Hukum Pidana",
        experience: "15+ Tahun",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&crop=face",
        bio: "Ahli hukum pidana dengan track record keberhasilan pembelaan luar biasa.",
    },
    {
        name: "Rizki Pratama, S.H., M.Kn.",
        role: "Partner",
        specialty: "Hukum Keluarga",
        experience: "12+ Tahun",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&crop=face",
        bio: "Pendekatan humanis dalam menangani kasus keluarga dan hak asuh anak.",
    },
    {
        name: "Dewi Lestari, S.H., M.H.",
        role: "Partner",
        specialty: "Sengketa Tanah",
        experience: "10+ Tahun",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop&crop=face",
        bio: "Berpengalaman menangani sengketa properti di berbagai wilayah Indonesia.",
    },
    {
        name: "Fajar Nugroho, S.H.",
        role: "Associate",
        specialty: "Hukum Bisnis",
        experience: "8+ Tahun",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&crop=face",
        bio: "Fokus pada hukum startup, kontrak teknologi, dan kekayaan intelektual.",
    },
    {
        name: "Anisa Putri, S.H.",
        role: "Associate",
        specialty: "Bantuan Hukum Gratis",
        experience: "6+ Tahun",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&crop=face",
        bio: "Berdedikasi memberikan bantuan hukum pro bono untuk masyarakat.",
    },
];

export default function TimContent() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                            Tim Kami
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Tim Advokat <span className="text-gradient">Profesional</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Didukung oleh advokat berpengalaman dan berdedikasi tinggi yang
                            siap memperjuangkan hak hukum Anda.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, i) => (
                            <AnimatedSection key={member.name} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="group rounded-2xl overflow-hidden bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="aspect-[3/4] overflow-hidden relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                                        {/* Overlay links */}
                                        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white hover:text-gold-400 transition-colors"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white hover:text-gold-400 transition-colors"
                                            >
                                                <Mail size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-gold-400 text-sm font-medium mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Award size={14} className="text-gold-500" />
                                                {member.specialty}
                                            </span>
                                            <span>•</span>
                                            <span>{member.experience}</span>
                                        </div>
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
