export function ProofSection() {
    return (
        <section className="py-20 bg-surface-muted border-y border-border/50">
            <div className="container-wide text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
                    Trusted by forward-thinking organizations
                </p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder logos - In a real scenario, these would be SVG/Images */}
                    <div className="text-xl font-serif font-bold text-foreground/40">Acme Corp</div>
                    <div className="text-xl font-serif font-bold text-foreground/40">Global Logistics</div>
                    <div className="text-xl font-serif font-bold text-foreground/40">FinTech Pro</div>
                    <div className="text-xl font-serif font-bold text-foreground/40">HealthSystems</div>
                </div>
            </div>
        </section>
    );
}
