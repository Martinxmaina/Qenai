import Link from "next/link";

export function CTASection() {
    return (
        <section id="contact" className="section-padding bg-qen-dark text-white text-center border-t border-white/10">
            <div className="section-container max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold font-serif tracking-tight text-white mb-8">
                    We design clarity.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                    <Link
                        href="/audit"
                        className="btn-secondary"
                    >
                        Start with an AI Audit
                    </Link>
                    <Link
                        href="/consultation"
                        className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors shadow-sm"
                    >
                        Talk to our team
                    </Link>
                </div>

                <div className="mt-16 text-white/70 flex flex-col items-center gap-3">
                    <p className="text-sm uppercase tracking-widest font-semibold text-white/50 mb-1">Direct Contact</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                        <a href="mailto:martin@qenai.co" className="hover:text-white transition-colors text-lg font-medium">martin@qenai.co</a>
                        <a href="mailto:glory@qenai.co" className="hover:text-white transition-colors text-lg font-medium">glory@qenai.co</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
