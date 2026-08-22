const coreValues = [
    {
        title: "Deep Understanding",
        desc: "Effective solutions start with understanding. We invest time in learning how organizations actually operate—their workflows, constraints, and stakeholder needs—before implementing any technology.",
    },
    {
        title: "Practical Impact",
        desc: "We focus on solving real operational pain points. Our success is measured by tangible improvements in efficiency, clarity, and outcomes rather than complexity or technological hype.",
    },
    {
        title: "Contextual Intelligence",
        desc: "Our systems are designed with local realities in mind. By accounting for on-the-ground constraints and opportunities, we deliver solutions that are relevant, usable, and sustainable.",
    },
    {
        title: "Integrity & Responsibility",
        desc: "Trust underpins everything we build. We operate transparently, safeguard data, and recommend only what serves our clients' long-term operational and ethical interests.",
    },
];

export function VisionMission() {
    return (
        <>
            <section className="section-padding rounded-[2rem] border border-blue-950 bg-blue-900 text-white px-6 shadow-[0_1.5rem_4rem_rgba(2,11,26,0.28)]">
                <div className="section-container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="heading-2 text-cyan-400 mb-4">
                                Vision
                            </h2>
                            <p className="body-text text-slate-300">
                                A future where African organizations operate on intelligent, ethical automation tailored to their unique realities.
                            </p>
                        </div>
                        <div>
                            <h2 className="heading-2 text-cyan-400 mb-4">
                                Mission
                            </h2>
                            <p className="body-text text-slate-300">
                                To design and deploy automation systems that enable organizations to operate smarter, faster, and at scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white text-slate-900 px-6">
                <div className="section-container mx-auto">
                    <h2 className="heading-2 text-cyan-600 mb-12 text-center md:text-left">
                        Core Values
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((val, i) => (
                            <div
                                key={i}
                                className="bg-blue-900 border border-blue-800 rounded-lg p-7 hover:bg-blue-800 transition-colors"
                            >
                                <div className="w-8 h-1 bg-cyan-400 rounded mb-5" />
                                <h3 className="heading-4 mb-3 text-white">{val.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
