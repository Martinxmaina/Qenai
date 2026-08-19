export function ServicesSection() {
    const services = [
        {
            title: "Audit",
            description: "Assess readiness, workflows, data, and risk. We identify real opportunities, not just use cases for tools.",
            outcome: "You get: A comprehensive audit report, risk assessment, and a prioritized roadmap for implementation.",
        },
        {
            title: "Build",
            description: "Design and implement AI & automation systems that integrate seamlessly with your existing tools and processes.",
            outcome: "You get: Reliable, scalable, and governance-compliant AI solutions tailored to your operations.",
        },
        {
            title: "Integrate",
            description: "Change management, team training, and embedding AI into daily operations to ensure long-term value.",
            outcome: "You get: A workforce capable of leveraging AI, with measured adoption and clear ROI.",
        },
    ];

    return (
        <section id="services" className="py-24 bg-white border-t border-blue-100">
            <div className="container-wide">
                <div className="max-w-3xl mb-14">
                    <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase mb-4">
                        Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
                        How we help.
                    </h2>
                    <p className="text-lg text-black/70 leading-relaxed">
                        We guide you through the full lifecycle of AI transformation: audit → build → embed.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-white border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-6xl font-serif text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                                0{index + 1}
                            </div>
                            <h3 className="text-2xl font-serif font-medium mb-4">{service.title}</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="pt-6 border-t border-border/50">
                                <p className="text-sm font-medium text-foreground/80">
                                    {service.outcome}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
