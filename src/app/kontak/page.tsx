import type { Metadata } from "next";
import KontakContent from "./KontakContent";

export const metadata: Metadata = {
    title: "Kontak",
    description:
        "Hubungi Lembaga Bantuan Hukum kami untuk konsultasi hukum. Kami siap membantu memperjuangkan hak hukum Anda.",
};

export default function KontakPage() {
    return <KontakContent />;
}
