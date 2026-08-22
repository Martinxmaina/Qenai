import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AssessmentForm } from "./assessment-form";

export const metadata: Metadata = {
    title: "AI Readiness Assessment | QENAI - AI Automation Agency Kenya",
    description: "Answer a few quick questions to see how ready your organization is for AI adoption, and get a personalized read on where automation could help most.",
    keywords: ["AI readiness assessment", "AI adoption quiz", "AI automation agency Kenya"],
    alternates: {
        canonical: "/assessment",
    },
};

export default function AssessmentPage() {
    return (
        <main className="page-shell">
            <Navbar />
            <section className="pt-40 pb-20 px-6 section-container max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 text-center">
                    AI Readiness Assessment
                </h1>
                <p className="body-text mb-12 text-center">
                    Answer a few quick questions to see how ready your organization is for AI adoption.
                </p>
                <AssessmentForm />
            </section>
            <Footer />
        </main>
    );
}
