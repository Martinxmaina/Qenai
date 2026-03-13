import Image from "next/image";

export function BuildFocus() {
    return (
        <section className="section-padding bg-qen-light">
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">

                {/* Abstract Visual */}
                <div className="bg-white p-12 rounded-2xl border border-border shadow-sm">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-qen-light rounded-lg border border-border/50">
                            <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-600 font-bold">1</div>
                            <div className="text-sm font-medium">Workflow Analysis</div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-qen-light rounded-lg border border-border/50 translate-x-4">
                            <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-600 font-bold">2</div>
                            <div className="text-sm font-medium">Custom Model Integration</div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-qen-light rounded-lg border border-border/50 translate-x-8">
                            <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-600 font-bold">3</div>
                            <div className="text-sm font-medium">Operational Deployment</div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Build systems,<br />not experiments.</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Once clarity exists, we design and build.
                        <br /><br />
                        This isn't about connecting a chatbot to your website. It's about deep integration with your existing tools, data, and processes. We focus on reliability, governance, and scalability from day one.
                    </p>

                    <div className="mt-10">
                        <a href="#contact" className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2">
                            Explore how we build <span>→</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
