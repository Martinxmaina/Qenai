export function AdoptFocus() {
    return (
        <section className="section-padding bg-white text-center">
            <div className="container-wide max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Adoption is where value is created.</h2>
                <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
                    AI only delivers ROI when people trust and use it. We support the human side of transformation.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-qen-light rounded-2xl border border-border hover:border-primary/20 transition-colors">
                        <h3 className="text-lg font-serif font-medium mb-3">Training & Enablement</h3>
                        <p className="text-sm text-muted-foreground">Upgrading team skills to work alongside intelligent systems.</p>
                    </div>
                    <div className="p-8 bg-qen-light rounded-2xl border border-border hover:border-primary/20 transition-colors">
                        <h3 className="text-lg font-serif font-medium mb-3">Change Management</h3>
                        <p className="text-sm text-muted-foreground">Navigating the cultural shifts that come with automation.</p>
                    </div>
                    <div className="p-8 bg-qen-light rounded-2xl border border-border hover:border-primary/20 transition-colors">
                        <h3 className="text-lg font-serif font-medium mb-3">Continuous Optimization</h3>
                        <p className="text-sm text-muted-foreground">Monitoring performance and refining models over time.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
