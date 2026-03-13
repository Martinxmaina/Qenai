export function FAQSection() {
    const faqs = [
        {
            question: "Do we really need AI?",
            answer: "Not necessarily. We start with the audit to determine if AI is the right solution for your specific problems. Sometimes the answer is better process, not better tech."
        },
        {
            question: "How long does the process take?",
            answer: "An initial audit typically takes 2-3 weeks. Implementation pilots can be deployed in 4-8 weeks, depending on complexity and data readiness."
        },
        {
            question: "Do you sell specific tools?",
            answer: "No. We are tool-agnostic. We recommend and build what is best for your specific infrastructure and goals, not what we are incentivized to sell."
        },
        {
            question: "Is this only for large enterprises?",
            answer: "We focus on organizations with established operations to optimize. This typically includes mid-market companies and up, but we work with any organization serious about operational efficiency."
        },
        {
            question: "What does adoption actually mean?",
            answer: "Adoption means your team uses the system daily without coercion. We measure success by usage rates and operational impact, not just deployment."
        }
    ];

    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-wide max-w-4xl">
                <h2 className="text-3xl font-serif mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-border/50">
                            <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                            <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
