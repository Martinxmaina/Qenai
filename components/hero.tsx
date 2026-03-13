import Link from "next/link";

export function Hero() {
    return (
        <section className="pt-48 pb-20 bg-gradient-to-b from-blue-50 to-white border-b border-blue-100">
            <div className="section-container">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-black">
                        Quest for the <span className="text-blue-700">Next AI</span>
                    </h1>

                    <p className="mt-6 body-text md:text-xl max-w-4xl mx-auto">
                        Kenya&apos;s leading AI automation agency, delivering enterprise-grade{" "}
                        <span className="text-blue-700">AI workflow automation</span> and{" "}
                        <span className="text-blue-700">custom AI models</span> built specifically
                        for African businesses ready to scale.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/audit"
                            className="btn-primary"
                        >
                            Get Your Free AI Audit
                        </Link>

                        <Link
                            href="/consultation"
                            className="btn-secondary"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
