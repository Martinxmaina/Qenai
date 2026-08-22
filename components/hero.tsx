import Link from "next/link";
import { AnimatedSphere } from "./animated-sphere";
import { HeroBackgroundMesh } from "./hero-background-mesh";

export function Hero() {
    return (
        <>
            <section className="relative min-h-[82vh] bg-blue-900 overflow-hidden pt-[calc(2rem+3cm)] pb-16">
                <HeroBackgroundMesh nodes="home" />

                <div className="relative z-10 flex items-center justify-center h-full">
                    {/* Two-column layout: ~55% text, ~45% visual */}
                    <div className="w-full max-w-7xl px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center">
                            {/* Left column: text content */}
                            <div>
                                {/* Eyebrow label */}
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-5">
                                    AI Automation for African Businesses
                                </p>

                                {/* Headline with controlled line breaks */}
                                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white mb-7" style={{ lineHeight: "1.05", maxWidth: "90%" }}>
                                    Scale Faster With <span className="text-cyan-400">AI Automation</span>
                                </h1>

                                {/* Paragraph */}
                                <p className="text-lg md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-10" style={{ maxWidth: "520px" }}>
                                    From lead generation to customer support and operations, we build AI systems
                                    that save time, cut costs, and drive growth.
                                </p>

                                {/* CTA buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
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

                            {/* Right column: animated sphere */}
                            <div className="hidden md:flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
                                <div className="w-full max-w-md lg:max-w-lg">
                                    <AnimatedSphere />
                                </div>
                            </div>
                        </div>

                        {/* Mobile: sphere below text, scaled down */}
                        <div className="md:hidden flex justify-center items-center mt-8 mb-4">
                            <div className="w-full max-w-xs scale-75 origin-center">
                                <AnimatedSphere />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-900 border-t border-blue-800/80 py-6 px-6">
                <div className="mx-auto max-w-7xl px-2 lg:px-12">
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-[0.16em] text-white">
                        <span>NGOs</span>
                        <span className="text-slate-400">•</span>
                        <span>Real Estate</span>
                        <span className="text-slate-400">•</span>
                        <span>Law Firms</span>
                        <span className="text-slate-400">•</span>
                        <span>Medical Clinics</span>
                        <span className="text-slate-400">•</span>
                        <span>Logistics</span>
                        <span className="text-slate-400">•</span>
                        <span>Recruitment Firms</span>
                    </div>
                </div>
            </section>
        </>
    );
}
