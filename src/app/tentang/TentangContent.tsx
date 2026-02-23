"use client";

import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    Target,
    Eye,
    Scale,
    Users,
    BookOpen,
    Shield,
    Lightbulb,
    Search,
    UserCheck,
    Building,
    Hash,
    Calendar,
    ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const membersData = [
    {
        kta: "24263001",
        name: "Denny Febrianus Nafi",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Direktur LBH",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "24263002",
        name: "Radiaman Purba",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Kepala Divisi Litigasi",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "24263003",
        name: "Carolina Sambara",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Pembina",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "24263004",
        name: "Dwi Desta Miya Kurnia",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Sekretaris",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "24263005",
        name: "Katharina",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Bendahara",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "24263006",
        name: "Rogansiano Tarang",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Kepala Divisi Non Litigasi",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "24263007",
        name: "Endi Febrianto",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Kepala Divisi IT & Edukasi",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263008",
        name: "Dewi Lestari",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Sekretaris Wilayah",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263009",
        name: "Rieky",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Koordinator Aset",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263010",
        name: "Osher Khen Tamus Sedi",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Administrasi",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263011",
        name: "Daud Yefri Nafi",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Sekretaris Wilayah",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263012",
        name: "Andoni Pradella",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Anggota Utama",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263013",
        name: "Resa Rutmayati",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Ketua DPD",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263014",
        name: "Yulita",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Sekretaris Wilayah",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "25263015",
        name: "Novianti",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Anggota Utama",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "26263016",
        name: "Adelino Afonso Pereira",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Ketua DPD",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "26263017",
        name: "Yeremia",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Sekretaris Wilayah",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "26263018",
        name: "Martini",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Anggota Utama",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "26263019",
        name: "Paskalino Sading",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Ketua DPD",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "26263020",
        name: "Egidius Yogi",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Sekretaris Wilayah",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
    {
        kta: "26263021",
        name: "Albein Kowaas",
        institution: "Lembaga Bantuan Hukum AHAVAH PRO DEO",
        role: "Anggota Utama",
        period: "2026 - 2030",
        status: "Terverifikasi",
    },
];
const values = [
    {
        icon: Scale,
        title: "Keadilan",
        desc: "Kami berkomitmen memperjuangkan keadilan bagi setiap klien tanpa diskriminasi.",
    },
    {
        icon: Shield,
        title: "Integritas",
        desc: "Menjalankan profesi dengan standar etika tertinggi dan kejujuran.",
    },
    {
        icon: Users,
        title: "Kolaborasi",
        desc: "Bekerja sama dengan klien untuk mencapai hasil terbaik secara bersama.",
    },
    {
        icon: Lightbulb,
        title: "Inovasi",
        desc: "Menggunakan pendekatan hukum modern dan strategi terkini.",
    },
];

const milestones = [
    { year: "2024", title: "Yayasan Didirikan & Penerbitan SK", desc: "Memulai perjalanan sebagai lembaga bantuan hukum independen & SK Kemenkumham AHU-0015730.AH.01.04.Tahun 2024 resmi diterbitkan." },
    { year: "2025", title: "100 Kasus Pertama", desc: "Berhasil menyelesaikan 100 kasus dengan tingkat keberhasilan tinggi." },
    { year: "2026", title: "Ekspansi Tim", desc: "Tim berkembang menjadi 30+ advokat profesional." },
    { year: "2026", title: "Layanan Digital", desc: "Meluncurkan layanan konsultasi online untuk akses hukum lebih luas." },
];

export default function TentangContent() {
    const [searchKta, setSearchKta] = useState("");
    const [foundMember, setFoundMember] = useState<typeof membersData[0] | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const member = membersData.find(m => m.kta.toLowerCase() === searchKta.toLowerCase());
        setFoundMember(member || null);
        setHasSearched(true);
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <AnimatedSection>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                            Tentang Kami
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Berdedikasi untuk <span className="text-gradient">Keadilan</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Sejak 2009, kami telah menjadi pendamping hukum terpercaya bagi
                            ribuan klien di seluruh Indonesia.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <AnimatedSection direction="left">
                            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 h-full">
                                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6">
                                    <Eye className="text-navy-950" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Visi Kami</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Menjadi lembaga bantuan hukum terkemuka di Indonesia yang
                                    diakui atas komitmennya dalam memperjuangkan keadilan,
                                    melindungi hak asasi manusia, dan memberikan akses keadilan
                                    bagi seluruh lapisan masyarakat.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 h-full">
                                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6">
                                    <Target className="text-navy-950" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Misi Kami</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                                        Memberikan layanan hukum berkualitas tinggi secara profesional
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                                        Menyediakan bantuan hukum gratis bagi masyarakat kurang mampu
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                                        Meningkatkan kesadaran hukum masyarakat melalui edukasi
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                                        Mendorong reformasi hukum yang berkeadilan
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-4 bg-navy-900/30">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        badge="Nilai-Nilai"
                        title="Nilai yang Kami"
                        highlight="Pegang Teguh"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <AnimatedSection key={v.title} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-300 text-center"
                                >
                                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-4">
                                        <v.icon className="text-navy-950" size={26} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {v.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{v.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <SectionTitle
                        badge="Perjalanan"
                        title="Sejarah"
                        highlight="Kami"
                    />
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 via-gold-500 to-navy-800 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {milestones.map((m, i) => (
                                <AnimatedSection
                                    key={m.year}
                                    delay={i * 0.15}
                                    direction={i % 2 === 0 ? "left" : "right"}
                                >
                                    <div
                                        className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        <div className="hidden md:block md:w-1/2" />
                                        {/* Dot */}
                                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-navy-950 -translate-x-1/2 z-10" />
                                        <div className="ml-12 md:ml-0 md:w-1/2">
                                            <div
                                                className={`p-6 rounded-2xl bg-navy-900/50 border border-navy-800/50 ${i % 2 === 0 ? "md:ml-8" : "md:mr-8"
                                                    }`}
                                            >
                                                <span className="text-gold-400 font-bold text-lg">
                                                    {m.year}
                                                </span>
                                                <h3 className="text-white font-bold text-lg mt-1">
                                                    {m.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mt-2">{m.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEARCH MEMBER SECTION */}
            <section className="py-24 px-4 bg-navy-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl -z-0" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <SectionTitle
                        badge="Verifikasi"
                        title="Cek Database"
                        highlight="Anggota"
                        description="Pastikan keanggotaan advokat atau pengurus melalui sistem pencarian data resmi kami."
                    />

                    <div className="mt-12">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1 group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-400 transition-colors" size={20} />
                                <input
                                    type="text"
                                    value={searchKta}
                                    onChange={(e) => setSearchKta(e.target.value)}
                                    placeholder="Masukkan Nomor Anggota (Contoh: 24263001)"
                                    className="w-full bg-navy-900/50 border border-navy-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 active:scale-95"
                            >
                                Cari Data
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 min-h-[300px] h-auto"> {/* Responsive height */}
                        <AnimatePresence mode="wait">
                            {foundMember ? (
                                <motion.div
                                    key={foundMember.kta}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="glass rounded-3xl p-6 md:p-8 border border-gold-500/20 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="md:absolute md:top-8 md:right-8 mb-6 md:mb-0">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                                            <ShieldCheck size={14} />
                                            {foundMember.status}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                                    <UserCheck size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Nama Lengkap</p>
                                                    <p className="text-white font-bold text-lg">{foundMember.name}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                                    <Building size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Lembaga</p>
                                                    <p className="text-gray-300 text-sm leading-relaxed">{foundMember.institution}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                                    <Hash size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Nomor Anggota / KTA</p>
                                                    <p className="text-white font-bold text-lg tracking-wider">{foundMember.kta}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                                    <Calendar size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Periode Keanggotaan</p>
                                                    <p className="text-gray-300 text-sm">{foundMember.period}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : hasSearched && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 text-center"
                                >
                                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                                        <Search size={24} />
                                    </div>
                                    <h4 className="text-white font-bold mb-2">Data Tidak Ditemukan</h4>
                                    <p className="text-gray-400 text-sm">Maaf, nomor KTA "{searchKta}" tidak terdaftar dalam database kami. Pastikan nomor yang dimasukkan sudah benar.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    );
}
