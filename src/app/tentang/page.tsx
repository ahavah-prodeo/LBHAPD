import type { Metadata } from "next";
import TentangContent from "./TentangContent";

export const metadata: Metadata = {
    title: "Tentang Kami",
    description:
        "Kenali Lembaga Bantuan Hukum (LBH) kami lebih dekat. Berdedikasi memberikan layanan hukum profesional sejak 2009.",
};

export default function TentangPage() {
    return <TentangContent />;
}
