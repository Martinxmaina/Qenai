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
            {/* Vision & Mission — dark background */}
            <section className="section-padding bg-qen-dark text-white px-6">
                <div className="section-container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="heading-2 text-blue-400 mb-4">
                                Vision
                            </h2>
                            <p className="body-text text-white/80">
                                A future where African organizations operate on intelligent, ethical automation tailored to their unique realities.
                            </p>
                        </div>
                        <div>
                            <h2 className="heading-2 text-blue-400 mb-4">
                                Mission
                            </h2>
                            <p className="body-text text-white/80">
                                To design and deploy automation systems that enable organizations to operate smarter, faster, and at scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values — light background */}
            <section className="section-padding bg-blue-50 text-gray-900 px-6">
                <div className="section-container mx-auto">
                    <h2 className="heading-2 text-blue-600 mb-12 text-center md:text-left">
                        Core Values
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((val, i) => (
                            <div
                                key={i}
                                className="card-primary p-7"
                            >
                                <div className="w-8 h-1 bg-blue-600 rounded mb-5" />
                                <h4 className="heading-4 mb-3 text-gray-900">{val.title}</h4>
                                <p className="subtext">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
