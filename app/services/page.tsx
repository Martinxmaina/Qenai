import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Bot, GraduationCap, LayoutDashboard, Workflow } from "lucide-react";
import Navbar from "@/components/navbar";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBackgroundMesh } from "@/components/hero-background-mesh";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
    title: "AI Automation Services | QENAI - AI Automation Agency Kenya",
    description: "Workflow automation, custom AI models, customer experience AI, data systems, and strategic advisory — the practical menu of what QENAI builds once an Audit identifies the right fit.",
    keywords: ["AI automation services Kenya", "workflow automation", "custom AI models", "customer experience AI", "AI advisory Kenya", "AI automation agency Kenya"],
    alternates: {
        canonical: "/services",
    },
};

const capabilities = [
    {
        title: "Workflow & Process Automation",
        description: "Document processing, data entry elimination, and intelligent routing agents that take repetitive work off your team's plate.",
        icon: Workflow,
        learnMore: { label: "Learn more", href: "/services/automation" },
    },
    {
        title: "Custom AI Models & Predictive Analytics",
        description: "Forecasting and anomaly detection built on models trained for your local data — not a template built for another market.",
        icon: BrainCircuit,
        learnMore: { label: "Learn more", href: "/services/custom-models" },
    },
    {
        title: "Customer Experience AI",
        description: "WhatsApp agents, multilingual chat support, and voice AI designed for how African customers actually communicate.",
        icon: Bot,
        learnMore: { label: "Learn more", href: "/services/customer-experience" },
    },
    {
        title: "Data Systems & Dashboards",
        description: "Clean up messy data, build BI dashboards your team will actually use, and automate the reports that used to eat a day a week.",
        icon: LayoutDashboard,
        learnMore: { label: "See it for enterprises", href: "/solutions/corporate" },
    },
    {
        title: "Strategic Advisory & Training",
        description: "AI readiness assessments, hands-on staff training, and fractional AI advisory for teams who need guidance, not just software.",
        icon: GraduationCap,
        learnMore: { label: "Learn more", href: "/services/advisory" },
    },
];

const industries = [
    { name: "Corporate Enterprises", href: "/solutions/corporate" },
    { name: "SMEs & Startups", href: "/solutions/smes" },
    { name: "NGOs & Non-Profits", href: "/solutions/ngos" },
    { name: "Professional Services", href: "/solutions/professional-services" },
    { name: "E-commerce & Retail", href: "/solutions/ecommerce" },
    { name: "Financial Services", href: "/solutions/financial" },
];

export default function ServicesPage() {
    return (
        <main className="page-shell bg-blue-900">
            <ServiceSchema
                name="AI Automation Services"
                description="Workflow automation, custom AI models, customer experience AI, data systems and dashboards, and strategic advisory for African businesses."
                url="https://qenai.com/services"
            />
            <Navbar />

            {/* ─── Hero ─── */}
            <section className="page-hero relative overflow-hidden pt-[calc(10rem+2cm+3rem)]">
                <HeroBackgroundMesh />
                <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
                    <p className="text-[0.375rem] font-semibold uppercase tracking-[.22em] text-cyan-400">
                        Our Capabilities
                    </p>
                    <div className="mt-4 mb-6 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    <h1 className="text-lg md:text-3xl font-bold font-serif tracking-tight mb-6 leading-tight text-white">
                        What We <span className="text-cyan-400">Build</span>
                    </h1>
                    <p className="text-[0.5rem] md:text-[0.5625rem] leading-relaxed max-w-2xl mx-auto text-slate-300">
                        The practical menu of what QENAI delivers once an Audit identifies the right fit for your operation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <Link
                            href="/audit"
                            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors text-center whitespace-nowrap"
                        >
                            Get Your Free AI Audit
                        </Link>
                        <Link
                            href="/consultation"
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-center whitespace-nowrap"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Capabilities ─── */}
            <section id="capabilities" className="section-padding scroll-mt-44 bg-white">
                <div className="section-container max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-16">
                        <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-600 mb-4">What We Deliver</p>
                        <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-4">
                            Five ways we put AI to work
                        </h2>
                        <p className="text-lg text-slate-600">
                            Every engagement starts with an Audit. These are the systems we build once it tells us what your business actually needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap) => {
                            const Icon = cap.icon;
                            return (
                                <div
                                    key={cap.title}
                                    className="flex flex-col rounded-3xl border border-blue-800 bg-blue-900 p-8 shadow-lg shadow-black/20 transition-colors hover:bg-blue-800"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
                                        <Icon className="size-6 text-cyan-400" />
                                    </div>
                                    <h3 className="heading-4 text-lg mb-3">{cap.title}</h3>
                                    <p className="text-base leading-relaxed text-white/80 mb-6">
                                        {cap.description}
                                    </p>
                                    <Link
                                        href={cap.learnMore.href}
                                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                                    >
                                        {cap.learnMore.label} <ArrowRight className="size-4" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── See It By Industry ─── */}
            <section id="by-industry" className="section-padding scroll-mt-44 border-t border-slate-200 bg-white">
                <div className="section-container max-w-6xl mx-auto">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-600 mb-4">See It By Industry</p>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-slate-900 mb-4">
                            Capability in context
                        </h2>
                        <p className="text-lg text-slate-600">
                            Every capability above looks different depending on the business. See how it plays out in your industry.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {industries.map((industry) => (
                            <Link
                                key={industry.href}
                                href={industry.href}
                                className="group flex items-center justify-between rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-sm transition hover:border-cyan-400 hover:shadow-md"
                            >
                                <span className="font-semibold text-slate-900">{industry.name}</span>
                                <ArrowRight className="size-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-500" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700">
                            View all industries <ArrowRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── How Services Work Together ─── */}
            <section id="process" className="section-padding scroll-mt-44 bg-[#0a0940] px-6">
                <div className="section-container max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-cyan-400 mb-3">
                        How Our Services Work Together
                    </h2>
                    <p className="body-text text-slate-300 mb-16 max-w-2xl mx-auto">
                        A simple but intentional flow. Each step builds on the last. Nothing is skipped.
                    </p>

                    <div className="grid sm:grid-cols-5 gap-0 relative">
                        {/* Connector line */}
                        <div className="hidden sm:block absolute top-[2.3rem] left-10 right-10 h-px bg-blue-800 z-0" />

                        {[
                            { step: "Audit", desc: "Identify high-ROI processes" },
                            { step: "Develop", desc: "Build tailored AI workflows" },
                            { step: "Integrate", desc: "Connect with existing systems" },
                            { step: "Automate", desc: "Scale functional capabilities" },
                            { step: "Integrate", desc: "Train and continuously optimize" },
                        ].map((item, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center px-2 py-8">
                                <div className="relative z-10 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="heading-4 text-lg text-white mb-2">{item.step}</h3>
                                <p className="subtext text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
