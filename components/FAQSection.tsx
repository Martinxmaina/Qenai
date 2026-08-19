"use client";

import Accordion from "@/components/Accordion";

export default function FAQSection() {
    return (
        <section className="section-container section-padding bg-slate-900" id="faqs">
            <div className="mb-8 text-center sm:text-left">
                <h2 className="heading-2 text-cyan-400">
                    Frequently Asked Questions
                </h2>
            </div>

            <Accordion
                items={[
                    {
                        title: "What does an AI Audit include?",
                        content: (
                            <div className="space-y-4 body-text text-base text-slate-300">
                                <p>
                                    Our AI Audit is a comprehensive deep dive into your organization's operational reality. We don't just look at code—we look at workflows, data maturity, team capabilities, and existing software infrastructure.
                                </p>
                                <p>
                                    The deliverable is a documented roadmap that identifies critical automation opportunities scored by ROI and feasibility, flags potential data governance risks, and provides a clear technical architecture for your first high-impact wins.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "Do you build with Microsoft 365 (SharePoint, Teams) and existing tools?",
                        content: (
                            <div className="space-y-4 body-text text-base text-slate-300">
                                <p>
                                    Absolutely. The best AI solution is often the one that integrates seamlessly into the tools your team already uses daily.
                                </p>
                                <p>
                                    We specialize in integrating intelligent agents and automation layers directly into environments like Microsoft Teams, SharePoint, Slack, and existing ERP/CRM systems, ensuring a near-zero learning curve for your frontline staff.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "How long does it take to deploy something useful?",
                        content: (
                            <div className="space-y-4 body-text text-base text-slate-300">
                                <p>
                                    Speed to value is critical. For scoped functional automations (like a customer service bot or an automated invoice processor), we typically transition from kickoff to a working, integrated pilot within 3 to 6 weeks.
                                </p>
                                <p>
                                    Larger enterprise transformations or custom LLM deployments require comprehensive data structuring and compliance reviews, usually taking 2 to 4 months for a phase-one rollout.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "What makes QEN AI different?",
                        content: (
                            <div className="space-y-4 body-text text-base text-slate-300">
                                <p>
                                    We are practitioners, not just strategists. Many consultancies will hand you a slide deck about AI; we hand you working systems.
                                </p>
                                <p>
                                    Furthermore, we build with the specific realities of African enterprises in mind. We factor in variable infrastructure reliability, prioritize localized context in our models, and focus entirely on measurable operational outcomes rather than speculative hype.
                                </p>
                            </div>
                        ),
                    },
                ]}
            />
        </section>
    );
}