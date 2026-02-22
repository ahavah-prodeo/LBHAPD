import type { Metadata } from "next";
import DonasiContent from "./DonasiContent";

export const metadata: Metadata = {
    title: "Donasi - Yayasan Ahavah Delta Abadi",
    description:
        "Dukung perjuangan kami dalam memberikan bantuan hukum gratis bagi masyarakat yang membutuhkan melalui donasi Anda.",
};

export default function DonasiPage() {
    return <DonasiContent />;
}
