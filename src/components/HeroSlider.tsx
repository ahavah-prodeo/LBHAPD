"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop",
        title: "Yayasan Ahavah",
        subtitle: "delta abadi",
        description:
            "Memberikan pendampingan hukum terbaik dengan integritas dan profesionalisme tinggi untuk memperjuangkan keadilan Anda.",
    },
    {
        image:
            "https://ik.imagekit.io/bzq0b2kjq/hukum-pidana-1024x683-1200x800-1.webp",
        title: "Konsultasi Hukum",
        subtitle: "Solusi Tepat & Cepat",
        description:
            "Tim advokat berpengalaman siap membantu menyelesaikan permasalahan hukum Anda dengan strategi terbaik.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop",
        title: "Perlindungan Hukum",
        subtitle: "Untuk Semua Kalangan",
        description:
            "Berdedikasi memberikan akses keadilan hukum bagi seluruh lapisan masyarakat Indonesia.",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [heroHeight, setHeroHeight] = useState("100vh");

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    useEffect(() => {
        const updateHeight = () => {
            if (sectionRef.current) {
                const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
                setHeroHeight(`calc(100vh - ${top}px)`);
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{ height: heroHeight }}
            className="relative min-h-[500px] overflow-hidden"
        >
            {/* Background slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
                </motion.div>
            </AnimatePresence>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gold-500/3 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="min-h-[300px] flex flex-col justify-center"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-5 w-fit"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                                <span className="text-gold-400 text-xs font-medium">
                                    Yayasan Ahavah delta abadi
                                </span>
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4">
                                <span className="text-white">
                                    {slides[currentSlide].title}
                                </span>
                                <br />
                                <span className="text-gradient">
                                    {slides[currentSlide].subtitle}
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-7 max-w-md">
                                {slides[currentSlide].description}
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/kontak"
                                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105"
                                >
                                    Konsultasi Sekarang
                                    <ArrowRight
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                                <Link
                                    href="/layanan"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:border-gold-400 hover:text-gold-400 transition-all duration-300 hover:bg-white/5"
                                >
                                    Layanan Kami
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full ${currentSlide === index
                            ? "w-10 h-3 bg-gradient-to-r from-gold-400 to-gold-600"
                            : "w-3 h-3 bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
}
