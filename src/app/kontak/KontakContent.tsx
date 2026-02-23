"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare,
    CheckCircle2,
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Alamat Kantor",
        content: "Jl. Sungai Raya Dalam, Gg. Raya VI, Blok B.20, RT/RW: 003/001, Kubu Raya, Kalimantan Barat",
        href: "https://maps.app.goo.gl/BTWkQPXfyYb3Y14D7",
    },
    {
        icon: Phone,
        title: "Telepon",
        content: "+62 815-2233-384",
        href: "tel:+628152233384",
    },
    {
        icon: Mail,
        title: "Email",
        content: "pengaduan@lbhahavah.org",
        href: "mailto:pengaduan@lbhahavah.org",
    },
    {
        icon: Clock,
        title: "Jam Operasional",
        content: "Senin - Jumat, 08:00 - 17:00 WIB",
        href: null,
    },
];

export default function KontakContent() {
    const [formState, setFormState] = useState({
        nama: "",
        email: "",
        telepon: "",
        subjek: "",
        pesan: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch("https://formspree.io/f/xvzbwyvg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    nama: formState.nama,
                    email: formState.email,
                    telepon: formState.telepon,
                    subjek: formState.subjek,
                    pesan: formState.pesan,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormState({ nama: "", email: "", telepon: "", subjek: "", pesan: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert("Gagal mengirim pesan. Silakan coba lagi.");
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan koneksi. Silakan periksa jaringan Anda.");
        } finally {
            setIsSending(false);
        }
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
                            Hubungi Kami
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Konsultasi <span className="text-gradient">Sekarang</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Kami siap membantu menyelesaikan permasalahan hukum Anda.
                            Hubungi kami untuk konsultasi awal gratis.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, i) => (
                            <AnimatedSection key={info.title} delay={i * 0.1}>
                                <div className="p-6 rounded-2xl bg-navy-900/50 border border-navy-800/50 hover:border-gold-500/30 transition-all duration-300 text-center h-full">
                                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-4">
                                        <info.icon className="text-navy-950" size={26} />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">
                                        {info.title}
                                    </h3>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target={info.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="text-gray-400 text-sm hover:text-gold-400 transition-colors"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-400 text-sm">{info.content}</p>
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <AnimatedSection direction="left">
                            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                                        <MessageSquare className="text-navy-950" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            Kirim Pesan
                                        </h2>
                                        <p className="text-gray-400 text-sm">
                                            Isi formulir di bawah ini
                                        </p>
                                    </div>
                                </div>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 mb-6"
                                    >
                                        <CheckCircle2 size={20} />
                                        <span className="text-sm">
                                            Pesan Anda berhasil dikirim! Kami akan segera menghubungi
                                            Anda.
                                        </span>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.nama}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, nama: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700/50 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                                                placeholder="Nama Anda"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, email: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700/50 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                                                placeholder="email@anda.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Telepon
                                            </label>
                                            <input
                                                type="tel"
                                                value={formState.telepon}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, telepon: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700/50 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                                                placeholder="+62 xxx-xxxx-xxxx"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Subjek *
                                            </label>
                                            <select
                                                required
                                                value={formState.subjek}
                                                onChange={(e) =>
                                                    setFormState({ ...formState, subjek: e.target.value })
                                                }
                                                className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700/50 text-white focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all appearance-none"
                                            >
                                                <option value="" className="bg-navy-900">
                                                    Pilih subjek
                                                </option>
                                                <option value="perdata" className="bg-navy-900">
                                                    Hukum Perdata
                                                </option>
                                                <option value="pidana" className="bg-navy-900">
                                                    Hukum Pidana
                                                </option>
                                                <option value="keluarga" className="bg-navy-900">
                                                    Hukum Keluarga
                                                </option>
                                                <option value="bisnis" className="bg-navy-900">
                                                    Hukum Bisnis
                                                </option>
                                                <option value="tanah" className="bg-navy-900">
                                                    Sengketa Tanah
                                                </option>
                                                <option value="gratis" className="bg-navy-900">
                                                    Bantuan Hukum Gratis
                                                </option>
                                                <option value="lainnya" className="bg-navy-900">
                                                    Lainnya
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">
                                            Pesan *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formState.pesan}
                                            onChange={(e) =>
                                                setFormState({ ...formState, pesan: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700/50 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
                                            placeholder="Jelaskan permasalahan hukum Anda..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSending}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        <Send size={18} />
                                        {isSending ? "Mengirim..." : "Kirim Pesan"}
                                    </motion.button>
                                </form>
                            </div>
                        </AnimatedSection>

                        {/* Map */}
                        <AnimatedSection direction="right">
                            <div className="rounded-2xl overflow-hidden border border-navy-800/50 h-full min-h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5130.541705686209!2d109.36327637754475!3d-0.06705382356142686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59f73f13b9fd%3A0xf8e455f1828a059e!2sJl.%20Sungai%20Raya%20Dalam%20Gg.%20Raya%20VI%20No.20b%2C%20Sungai%20Raya%2C%20Kec.%20Sungai%20Raya%2C%20Kabupaten%20Kubu%20Raya%2C%20Kalimantan%20Barat%2078117!5e0!3m2!1sid!2sid!4v1771664728566!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "500px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi LBH"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
}
