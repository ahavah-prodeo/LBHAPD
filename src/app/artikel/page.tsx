import type { Metadata } from "next";
import ArtikelContent from "./ArtikelContent";

export const metadata: Metadata = {
    title: "Artikel & Blog",
    description:
        "Baca artikel dan berita hukum terbaru dari tim advokat profesional Lembaga Bantuan Hukum.",
};

export default function ArtikelPage() {
    return <ArtikelContent />;
}
