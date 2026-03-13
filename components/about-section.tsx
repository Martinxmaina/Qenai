export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Why we exist.
                    </h2>

                    <div className="h-1 w-16 bg-blue-600 mb-8 rounded-full" />

                    <p className="text-lg text-black/70 mb-6 leading-relaxed">
                        Most AI initiatives fail because they start with tools, not problems.
                        Successful AI adoption is an operational challenge, not just a technical one.
                    </p>

                    <p className="text-lg text-black/70 leading-relaxed">
                        QENAI bridges the gap between executive strategy and technical implementation.
                        We don’t just build models—we build the organizational capability to use them.
                    </p>
                </div>

                {/* Right Card */}
                <div className="bg-blue-50 border border-blue-100 p-10 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-6 text-blue-700">
                        Our Philosophy
                    </h3>

                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <span className="text-blue-600 font-semibold">01.</span>
                            <span className="text-black/80">
                                Audit before you build. Understand the risk and readiness.
                            </span>
                        </li>

                        <li className="flex items-start gap-4">
                            <span className="text-blue-600 font-semibold">02.</span>
                            <span className="text-black/80">
                                People before pixels. Technology must serve operations.
                            </span>
                        </li>

                        <li className="flex items-start gap-4">
                            <span className="text-blue-600 font-semibold">03.</span>
                            <span className="text-black/80">
                                Adoption is the metric. If it isn’t used, it doesn’t count.
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
