import Link from "next/link";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroBackgroundMesh } from "@/components/hero-background-mesh";

export default function ServicesPage() {
    return (
        <main className="page-shell">
            <Navbar />

            {/* ─── Hero ─── */}
            <section className="page-hero relative overflow-hidden pt-[calc(10rem+2cm+3rem)]">
                <HeroBackgroundMesh />
                <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight mb-6 leading-tight text-white">
                        How We Help Organizations Make AI Work
                    </h1>
                    <p className="body-text max-w-2xl mx-auto text-slate-300">
                        We help organizations move from AI curiosity to operational capability through tailored, done-for-you automation solutions.
                    </p>
                </div>
            </section>

            {/* ─── Service 1: Workflow Audit and Automation Strategy ─── */}
            <section id="workflow-audit" className="section-padding scroll-mt-44 bg-white">
                <div className="section-container max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-2">Workflow Audit and Automation Strategy</h2>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 mb-10">
                        Analyze operations to identify high-ROI automation opportunities.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Process Mapping</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Identify repetitive tasks suitable for automation.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">AI Consulting</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Tailored strategy for integrating AI tools to achieve your goals.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">ROI Assessment</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Determine the potential return on investment for automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Service 2: Custom AI and Automation Development ─── */}
            <section id="custom-ai" className="section-padding scroll-mt-44 bg-white">
                <div className="section-container max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-2">Custom AI &amp; Automation Development</h2>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 mb-10">
                        Intelligent systems built specifically for your business operations.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">AI Agents &amp; Chatbots</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Build 24/7 autonomous agents to handle service and queries.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Generative AI</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Automated content production and image generation tools.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Custom Software</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Tailored AI solutions using Python and LLM frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Service 3: System Integration ─── */}
            <section id="system-integration" className="section-padding scroll-mt-44 bg-white">
                <div className="section-container max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-2">System Integration</h2>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 mb-10">
                        Connecting apps and AI to ensure seamless data flow.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">API Integration</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Connect business tools to sync CRM, email, and projects effortlessly.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Legacy Connections</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Integrate modern AI solutions with existing enterprise infrastructure.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Data Synchronization</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Ensure smooth data flow across systems without manual entry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Service 4: Specialized Functional Automation ─── */}
            <section id="functional-automation" className="section-padding border-b border-slate-200 bg-white scroll-mt-44">
                <div className="section-container max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-2">Specialized Functional Automation</h2>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 mb-10">
                        End-to-end automation for core business functions.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Sales &amp; Marketing</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Automate lead generation, outreach sequences, and CRM updates.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Customer Service</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Implement conversational AI and automated ticketing systems.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Internal Operations</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Streamline onboarding, invoice processing, and documentation.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Data Analytics</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Deploy predictive analytics for sales forecasting and reports.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Service 5: Implementation, Training, and Support ─── */}
            <section id="implementation-support" className="section-padding scroll-mt-44 bg-white">
                <div className="section-container max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-slate-900 mb-2">Implementation, Training, and Support</h2>
                    <p className="text-xl md:text-2xl font-medium text-slate-600 mb-10">
                        We don&apos;t just build it, we ensure your team knows how to use it.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Deployment</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Setup and thorough testing in a controlled environment.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Training</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Equip your staff to trust and fully integrate AI workflows.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-blue-950/20">
                            <h3 className="heading-4 text-lg mb-3">Optimization</h3>
                            <p className="text-base leading-relaxed text-white/80">
                                Monitor system performance and refine functionality over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── How Services Work Together ─── */}
            <section className="section-padding bg-slate-950 px-6">
                <div className="section-container max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-cyan-400 mb-3">
                        How Our Services Work Together
                    </h2>
                    <p className="body-text text-slate-300 mb-16 max-w-2xl mx-auto">
                        A simple but intentional flow. Each step builds on the last. Nothing is skipped.
                    </p>

                    <div className="grid sm:grid-cols-5 gap-0 relative">
                        {/* Connector line */}
                        <div className="hidden sm:block absolute top-[2.3rem] left-10 right-10 h-px bg-slate-700 z-0" />

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
                                <h4 className="heading-4 text-lg text-white mb-2">{item.step}</h4>
                                <p className="subtext text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Who This Is For ─── */}
            <section className="section-padding border-t border-slate-200 bg-white">
                <div className="section-container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-slate-900 mb-4">
                        Who This Is For
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5 text-left">
                        {[
                            "Growth-stage companies scaling up",
                            "Enterprises needing AI clarity",
                            "Teams aiming for smooth adoption",
                            "Leaders driving real efficiency",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 rounded-3xl border border-slate-700 bg-slate-900 px-6 py-6 shadow-lg shadow-blue-950/20">
                                <p className="font-medium text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Start With Clarity CTA ─── */}
            <section className="section-padding bg-qen-dark text-white text-center px-6">
                <div className="section-container max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-white mb-4">
                        Start With Clarity
                    </h2>
                    <p className="body-text text-white/60 mb-10">
                        Most AI projects fail before they start — because the wrong problems are being solved.
                        Start with the right questions.
                    </p>
                    <Link
                        href="mailto:audit@qenai.co"
                        className="btn-secondary"
                    >
                        Book an AI Readiness Audit
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
