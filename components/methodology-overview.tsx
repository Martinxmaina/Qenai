import Image from "next/image";

export function MethodologyOverview() {
    const cards = [
        {
            title: "Audit",
            desc: `Understand how work really happens. We map workflows, data, and decisions before writing a single line of code.`,
            icon: "/icons/audit.png",
        },
        {
            title: "Build",
            desc: `Design and implement fit-for-purpose AI systems. No generic templates—only what your operation actually needs.`,
            icon: "/icons/build.png",
        },
        {
            title: "Adopt",
            desc: `Ensure AI is used, trusted, and sustained. Technology without adoption is just a cost center.`,
            icon: "/icons/adopt.png",
        },
    ];

    return (
        <section className="py-24 bg-white border-t border-blue-100">
            <div className="container-wide">
                <div className="grid md:grid-cols-3 gap-10">
                    {cards.map((c) => (
                        <div
                            key={c.title}
                            className="bg-white rounded-3xl border border-blue-100 shadow-lg overflow-hidden hover:shadow-xl transition"
                        >
                            {/* Top header band */}
                            <div className="bg-blue-700 px-8 pt-10 pb-8">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-6">
                                    <div className="relative w-8 h-8">
                                        <Image
                                            src={c.icon}
                                            alt={`${c.title} icon`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-white">
                                    {c.title}
                                </h3>
                            </div>

                            {/* Body */}
                            <div className="px-8 py-8">
                                <p className="text-[16px] leading-relaxed text-slate-600">
                                    {c.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
