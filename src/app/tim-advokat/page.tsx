import type { Metadata } from "next";
import TimContent from "./TimContent";

export const metadata: Metadata = {
    title: "Tim Advokat",
    description:
        "Kenali tim advokat profesional dan berpengalaman kami yang siap memperjuangkan hak hukum Anda.",
};

export default function TimAdvokatPage() {
    return <TimContent />;
}
