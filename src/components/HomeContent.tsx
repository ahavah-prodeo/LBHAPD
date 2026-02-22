"use client";

import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Scale,
    Gavel,
    Users,
    Building2,
    LandPlot,
    HandHeart,
    Heart,
    Shield,
    Award,
    Clock,
    CheckCircle2,
    Star,
    ArrowRight,
    Quote,
    Phone,
    Mail,
    MapPin,
    Send,
} from "lucide-react";

/* ─── Data ─── */
const layananData = [
    {
        icon: Scale,
        title: "Hukum Perdata",
        desc: "Penanganan sengketa perdata, perjanjian, dan hak-hak keperdataan secara profesional.",
        href: "/layanan/hukum-perdata",
    },
    {
        icon: Gavel,
        title: "Hukum Pidana",
        desc: "Pendampingan dan pembelaan dalam perkara pidana di seluruh tingkat peradilan.",
        href: "/layanan/hukum-pidana",
    },
    {
        icon: Heart,
        title: "Hukum Keluarga",
        desc: "Konsultasi dan penanganan masalah perceraian, hak asuh anak, dan waris.",
        href: "/layanan/hukum-keluarga",
    },
    {
        icon: Building2,
        title: "Hukum Bisnis",
        desc: "Pendampingan hukum korporasi, kontrak bisnis, dan pendirian usaha.",
        href: "/layanan/hukum-bisnis",
    },
    {
        icon: LandPlot,
        title: "Sengketa Tanah",
        desc: "Penyelesaian sengketa properti, sertifikat, dan hak atas tanah.",
        href: "/layanan/sengketa-tanah",
    },
    {
        icon: HandHeart,
        title: "Bantuan Hukum Gratis",
        desc: "Layanan bantuan hukum pro bono bagi masyarakat kurang mampu.",
        href: "/layanan/bantuan-hukum-gratis",
    },
];

const keunggulanData = [
    {
        icon: Award,
        title: "Advokat Berpengalaman",
        desc: "Tim advokat senior dengan pengalaman lebih dari 15 tahun di berbagai bidang hukum.",
    },
    {
        icon: Shield,
        title: "Kerahasiaan Terjamin",
        desc: "Kami menjaga kerahasiaan data klien dengan standar keamanan tertinggi.",
    },
    {
        icon: Clock,
        title: "Respons Cepat",
        desc: "Konsultasi awal dalam 24 jam dan penanganan kasus yang responsif.",
    },
    {
        icon: CheckCircle2,
        title: "Track Record Terbukti",
        desc: "Tingkat keberhasilan tinggi dengan ribuan kasus yang telah diselesaikan.",
    },
    {
        icon: Users,
        title: "Pendekatan Personal",
        desc: "Setiap klien mendapat perhatian khusus dan strategi hukum terpersonalisasi.",
    },
    {
        icon: HandHeart,
        title: "Biaya Transparan",
        desc: "Struktur biaya yang jelas dan transparan tanpa biaya tersembunyi.",
    },
];

const testimoniData = [
    {
        name: "Budi Santoso",
        role: "Pengusaha",
        text: "LBH membantu saya menyelesaikan sengketa bisnis yang rumit dengan hasil yang sangat memuaskan. Tim advokat mereka sangat profesional dan kompeten.",
        rating: 5,
    },
    {
        name: "Siti Rahmawati",
        role: "Ibu Rumah Tangga",
        text: "Saya sangat terbantu dengan layanan bantuan hukum gratis dari LBH. Mereka memberikan pendampingan yang luar biasa dalam kasus hak asuh anak saya.",
        rating: 5,
    },
    {
        name: "Ahmad Fadillah",
        role: "Wiraswasta",
        text: "Profesionalisme dan integritas LBH tidak perlu diragukan lagi. Mereka berhasil memenangkan kasus sengketa tanah yang sudah bertahun-tahun belum terselesaikan.",
        rating: 5,
    },
];

const statsData = [
    { number: "500+", label: "Kasus Selesai" },
    { number: "50+", label: "Advokat Profesional" },
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "98%", label: "Klien Puas" },
];

const strukturData = [
    {
        role: "Direktur LBH",
        name: "Denny Febrianus Nafi, S.Th., S.H.",
        image: "https://ik.imagekit.io/bzq0b2kjq/WhatsApp%20Image%202026-02-21%20at%2014.49.59.webp",
    },
    {
        role: "Kepala Divisi Litigasi",
        name: "Radiaman Purba, S.H.",
        image: "https://ik.imagekit.io/bzq0b2kjq/WhatsApp%20Image%202026-02-21%20at%2017.06.25.webp",
    },
    {
        role: "Kepala Divisi Non-Litigasi",
        name: "Rogansiano Tarang",
        image: "https://ik.imagekit.io/bzq0b2kjq/WhatsApp%20Image%202026-02-21%20at%2018.44.10.webp",
    },
    {
        role: "Bendahara",
        name: "Katharina",
        image: "https://ik.imagekit.io/bzq0b2kjq/WhatsApp%20Image%202026-02-21%20at%2018.44.10.webp",
    },
];

const contactCards = [
    {
        icon: MapPin,
        title: "Alamat Kantor",
        content: "Jl. Sungai Raya Dalam, Gg. Raya VI, Blok B.20, RT/RW: 003/001, Kubu Raya, Kalimantan Barat",
        href: "https://maps.google.com",
    },
    {
        icon: Phone,
        title: "Telepon / WhatsApp",
        content: "+62 815-2233-384",
        href: "tel:+628152233384",
    },
    {
        icon: Mail,
        title: "Email",
        content: "deltaabadiahavah@gmail.com",
        href: "mailto:deltaabadiahavah@gmail.com",
    },
    {
        icon: Clock,
        title: "Jam Operasional",
        content: "Senin - Jumat: 08:00 - 17:00 WIB",
    },
];

export default function HomeContent() {
    return (
        <>
            {/* ═══════ HERO ═══════ */}
            <HeroSlider />

            {/* ═══════ STATS BAR ═══════ */}
            <section className="py-16 px-4 bg-navy-900/40 border-y border-navy-800/30">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {statsData.map((stat, i) => (
                            <AnimatedSection key={stat.label} delay={i * 0.1}>
                                <div className="glass rounded-2xl p-4 sm:p-8 text-center hover:border-gold-500/30 transition-all duration-300">
                                    <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ TENTANG SINGKAT ═══════ */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection direction="left">
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop"
                                        alt="Tim advokat Yayasan Ahavah sedang berdiskusi"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Floating card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 hidden md:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                                            <Award className="text-navy-950" size={28} />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">15+</div>
                                            <div className="text-gray-400 text-sm">
                                                Tahun Pengalaman
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Decorative border */}
                                <div className="absolute -inset-4 border-2 border-gold-500/10 rounded-2xl -z-10" />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-4">
                                Tentang Kami
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Memperjuangkan{" "}
                                <span className="text-gradient">Keadilan</span> untuk Semua
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                LBH Ahavah Pro Deo (SK Kemenkumham AHU-0015730.AH.01.04.Tahun 2024) adalah institusi hukum terpercaya
                                yang telah berdiri selama lebih dari 15 tahun, berkomitmen
                                memberikan layanan hukum berkualitas tinggi bagi seluruh lapisan
                                masyarakat Indonesia.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Dengan tim advokat berpengalaman dan berdedikasi, kami telah
                                berhasil menangani ribuan kasus di berbagai bidang hukum,
                                termasuk perdata, pidana, keluarga, bisnis, dan sengketa tanah.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/tentang"
                                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
                                >
                                    Selengkapnya
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════ LAYANAN ═══════ */}
            <section className="py-24 px-4 bg-navy-900/30">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        badge="Layanan Kami"
                        title="Bidang Keahlian"
                        highlight="Hukum"
                        description="Kami menyediakan berbagai layanan hukum profesional untuk membantu Anda menghadapi tantangan hukum secara efektif."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {layananData.map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <Link href={item.href}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        className="group relative h-full p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-500 overflow-hidden"
                                    >
                                        {/* Hover glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 bg-gradient-to-br from-gold-400/10 to-gold-600/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-gold-400/20 group-hover:to-gold-600/20 transition-all duration-300">
                                                <item.icon
                                                    className="text-gold-400"
                                                    size={28}
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                            {/* <div className="mt-6 flex items-center gap-2 text-gold-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Pelajari Selengkapnya
                                                <ArrowRight size={16} />
                                            </div> */}
                                        </div>
                                    </motion.div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ KENAPA MEMILIH KAMI ═══════ */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        badge="Keunggulan"
                        title="Mengapa Memilih"
                        highlight="Kami?"
                        description="Kami memahami bahwa memilih bantuan hukum adalah keputusan penting. Berikut alasan mengapa ribuan klien memercayakan kasus mereka kepada kami."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keunggulanData.map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="text-navy-950" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ TESTIMONI ═══════ */}
            <section className="py-24 px-4 bg-navy-900/30">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        badge="Testimoni"
                        title="Apa Kata"
                        highlight="Klien Kami"
                        description="Kepuasan klien adalah prioritas utama kami. Berikut pengalaman nyata dari klien yang telah kami tangani."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimoniData.map((item, i) => (
                            <AnimatedSection key={item.name} delay={i * 0.15}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="relative p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/20 transition-all duration-500"
                                >
                                    {/* Quote icon */}
                                    <Quote className="text-gold-500/20 absolute top-6 right-6" size={40} />

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-6">
                                        {Array.from({ length: item.rating }).map((_, j) => (
                                            <Star
                                                key={j}
                                                size={18}
                                                className="text-gold-400 fill-gold-400"
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                                        &ldquo;{item.text}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 font-bold text-lg">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">
                                                {item.name}
                                            </div>
                                            <div className="text-gray-400 text-sm">{item.role}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ STRUKTUR ORGANISASI ═══════ */}
            <section className="py-24 px-4 bg-navy-900/10">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        badge="Manajemen"
                        title="Struktur"
                        highlight="Organisasi"
                        description="Dipimpin oleh tenaga profesional yang berdedikasi tinggi dalam memperjuangkan keadilan dan kebenaran."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {strukturData.map((person, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative rounded-2xl overflow-hidden bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-300"
                                >
                                    <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1">
                                            {person.role}
                                        </div>
                                        <div className="text-white font-bold text-lg">
                                            {person.name}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ KONTAK ═══════ */}
            <section id="kontak" className="py-24 px-4 overflow-hidden relative">
                {/* Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionTitle
                            badge="Hubungi Kami"
                            title="Mari Berdiskusi"
                            highlight="Tentang Kasus"
                            description="Pintu kami selalu terbuka untuk mendengarkan dan membantu memberikan solusi hukum yang Anda butuhkan."
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Info & Map Column */}
                        <AnimatedSection direction="left">
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {contactCards.map((card, i) => (
                                        <div key={i} className="p-5 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-300">
                                            <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4 text-gold-400">
                                                <card.icon size={20} />
                                            </div>
                                            <h3 className="text-white font-bold text-sm mb-1">{card.title}</h3>
                                            <p className="text-gray-400 text-xs leading-relaxed">{card.content}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Map */}
                                <div className="rounded-2xl overflow-hidden border border-navy-800/50 h-[300px] relative group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5130.541705686209!2d109.36327637754475!3d-0.06705382356142686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59f73f13b9fd%3A0xf8e455f1828a059e!2sJl.%20Sungai%20Raya%20Dalam%20Gg.%20Raya%20VI%20No.20b%2C%20Sungai%20Raya%2C%20Kec.%20Sungai%20Raya%2C%20Kabupaten%20Kubu%20Raya%2C%20Kalimantan%20Barat%2078117!5e0!3m2!1sid!2sid!4v1771664728566!5m2!1sid!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                                    ></iframe>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Form Column */}
                        <AnimatedSection direction="right">
                            <div className="bg-navy-900/50 border border-navy-800/50 rounded-3xl p-8 sm:p-10 h-full">
                                <h3 className="text-2xl font-bold text-white mb-2">Kirim Pesan</h3>
                                <p className="text-gray-400 text-sm mb-8">Silakan isi formulir di bawah ini, tim kami akan segera menghubungi Anda.</p>

                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Nama Lengkap</label>
                                            <input
                                                type="text"
                                                placeholder="Nama Anda"
                                                className="w-full bg-navy-950/50 border border-navy-800 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                                            <input
                                                type="email"
                                                placeholder="email@anda.com"
                                                className="w-full bg-navy-950/50 border border-navy-800 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Subjek / Bidang Kasus</label>
                                        <select className="w-full bg-navy-950/50 border border-navy-800 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all appearance-none cursor-pointer">
                                            <option value="">Pilih Bidang Layanan</option>
                                            <option value="perdata">Hukum Perdata</option>
                                            <option value="pidana">Hukum Pidana</option>
                                            <option value="keluarga">Hukum Keluarga</option>
                                            <option value="bisnis">Hukum Bisnis</option>
                                            <option value="tanah">Sengketa Tanah</option>
                                            <option value="Lainnya">Lainnya</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pesan Anda</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Jelaskan kebutuhan hukum Anda..."
                                            className="w-full bg-navy-950/50 border border-navy-800 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full group flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold py-4 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20"
                                    >
                                        <Send size={18} />
                                        Kirim Sekarang
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════ CTA BANNER ═══════ */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <AnimatedSection>
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Background */}
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-950/95" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                        Butuh Bantuan{" "}
                                        <span className="text-gradient">Hukum?</span>
                                    </h2>
                                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                                        Jangan biarkan masalah hukum menghambat kehidupan Anda.
                                        Konsultasikan dengan tim advokat profesional kami sekarang
                                        juga. Konsultasi awal gratis!
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                                        <Link
                                            href="/kontak"
                                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105"
                                        >
                                            <Phone size={20} />
                                            Hubungi Kami
                                            <ArrowRight
                                                size={18}
                                                className="group-hover:translate-x-1 transition-transform"
                                            />
                                        </Link>
                                        <a
                                            href="https://wa.me/628152233384"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-gold-400 hover:text-gold-400 transition-all duration-300 hover:bg-white/5"
                                        >
                                            Chat WhatsApp
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl" />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
