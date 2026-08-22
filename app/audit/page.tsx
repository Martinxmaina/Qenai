import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AuditForm } from "./audit-form";

export const metadata: Metadata = {
    title: "Get Your Free AI Audit | QENAI - AI Automation Agency Kenya",
    description: "Request a free AI readiness audit from QENAI. Tell us about your organization and we'll identify where AI and automation can cut costs, save time, and unlock new capabilities.",
    keywords: ["free AI audit Kenya", "AI readiness audit", "AI automation assessment", "AI automation agency Kenya"],
    alternates: {
        canonical: "/audit",
    },
};

export default function AuditPage() {
    return (
        <main className="page-shell">
            <Navbar />
            <section className="pt-40 pb-20 px-6 section-container max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 text-center">
                    Get Your Free AI Audit
                </h1>
                <p className="body-text mb-12 text-center">
                    Tell us a little about your organization and we&apos;ll identify opportunities where AI and automation can improve efficiency, reduce costs, and unlock new capabilities.
                </p>
                <AuditForm />
            </section>
            <Footer />
        </main>
    );
}
