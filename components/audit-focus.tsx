export function AuditFocus() {
    return (
        <section id="audit1" className="section-padding bg-white relative overflow-hidden">
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Audit before you automate.</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Most organizations don't know where AI fits. They buy tools hoping for magic.
                        <br /><br />
                        An AI Audit removes the guesswork. We assess your readiness, data quality, and operational bottlenecks to create a strategic roadmap.
                    </p>

                    <ul className="space-y-4 border-l-2 border-primary/20 pl-6">
                        <li className="text-foreground font-medium">Clear operational priorities</li>
                        <li className="text-foreground font-medium">Reduced implementation risk</li>
                        <li className="text-foreground font-medium">Strategic investment roadmap</li>
                    </ul>

                    <div className="mt-10">
                        <a href="#contact" className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2">
                            Learn about AI Audits <span>→</span>
                        </a>
                    </div>
                </div>

                {/* Abstract Visual - Diagrammatic */}
                <div className="order-1 lg:order-2 bg-qen-light p-10 rounded-2xl border border-border relative">
                    {/* Simple CSS diagram representing clarity/audit */}
                    <div className="grid grid-cols-2 gap-4 opacity-50">
                        <div className="h-24 bg-blue-100 rounded-lg"></div>
                        <div className="h-24 bg-blue-50 rounded-lg"></div>
                        <div className="h-24 bg-blue-50 rounded-lg"></div>
                        <div className="h-24 bg-blue-100 rounded-lg"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-border text-sm font-medium text-foreground">
                            Readiness Assessment
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
