import type { Metadata } from "next";
import LayananContent from "./LayananContent";

export const metadata: Metadata = {
    title: "Layanan",
    description:
        "Berbagai layanan hukum profesional: Hukum Perdata, Pidana, Keluarga, Bisnis, Sengketa Tanah, dan Bantuan Hukum Gratis.",
};

export default function LayananPage() {
    return <LayananContent />;
}
