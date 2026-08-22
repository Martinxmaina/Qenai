import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ConsultationForm } from "./consultation-form";

export const metadata: Metadata = {
    title: "Book an AI Strategy Consultation | QENAI - AI Automation Agency Kenya",
    description: "Schedule a short consultation with QENAI to discuss your organization's goals and how AI automation could support them.",
    keywords: ["AI strategy consultation Kenya", "book AI consultation", "AI automation agency Kenya"],
    alternates: {
        canonical: "/consultation",
    },
};

export default function ConsultationPage() {
    return (
        <main className="page-shell">
            <Navbar />
            <section className="pt-40 pb-20 px-6 section-container max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 text-center">
                    Book an AI Strategy Consultation
                </h1>
                <p className="body-text mb-12 text-center">
                    Schedule a short consultation with our team to discuss your organization&apos;s goals and how AI automation could support them.
                </p>
                <ConsultationForm />
            </section>
            <Footer />
        </main>
    );
}
