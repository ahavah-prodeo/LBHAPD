"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    badge?: string;
    title: string;
    highlight?: string;
    description?: string;
    center?: boolean;
    light?: boolean;
}

export default function SectionTitle({
    badge,
    title,
    highlight,
    description,
    center = true,
    light = false,
}: SectionTitleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${center ? "text-center" : ""}`}
        >
            {badge && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-4">
                    {badge}
                </span>
            )}
            <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-navy-900" : "text-white"
                    }`}
            >
                {title}{" "}
                {highlight && <span className="text-gradient">{highlight}</span>}
            </h2>
            {description && (
                <p
                    className={`text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""
                        } ${light ? "text-gray-600" : "text-gray-400"}`}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
