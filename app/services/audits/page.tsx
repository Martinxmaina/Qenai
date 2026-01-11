import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PHASES = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1-2",
    activities: [
      "Stakeholder interviews (leadership, operations, IT, end users)",
      "Workflow observation and documentation",
      "Current systems and data flow mapping",
      "Pain point and bottleneck identification"
    ]
  },
  {
    number: "02",
    title: "Analysis",
    duration: "Week 2-3",
    activities: [
      "Automation opportunity identification across all workflows",
      "Technical feasibility assessment for each opportunity",
      "ROI estimation (time saved, cost reduction, revenue impact)",
      "Risk and change management considerations"
    ]
  },
  {
    number: "03",
    title: "Strategic Roadmap",
    duration: "Week 3-4",
    activities: [
      "Prioritization framework (impact vs. effort)",
      "Phased implementation plan (quick wins to complex transformations)",
      "Budget allocation recommendations",
      "Technology recommendations"
    ]
  },
  {
    number: "04",
    title: "Presentation",
    duration: "Week 4",
    activities: [
      "Executive presentation of findings and recommendations",
      "Technical deep-dive session with IT/operations teams",
      "Q&A and refinement based on feedback",
      "Next-step planning and project scoping"
    ]
  }
];

export default function AuditsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-serif leading-tight tracking-tight mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            AI Readiness & Workflow Audits
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Comprehensive evaluation of your current systems and processes to identify 
            high-impact AI integration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-8" asChild>
              <Link href="/audit">Book Free Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/cases">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">How We Work</h2>
          </div>

          {/* Large Feature Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="md:col-span-2 rounded-xl bg-primary text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="p-3 bg-white/10 rounded-lg text-white w-fit mb-6">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Comprehensive Evaluation</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  We don&apos;t just look at your technology—we examine your entire operational ecosystem. 
                  Our audit covers people, processes, and platforms to identify the highest-impact 
                  automation opportunities.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-3xl font-bold">73%</span>
                    <span className="text-xs text-blue-200 block">Avg. Time Savings</span>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                    <span className="text-3xl font-bold">4 weeks</span>
                    <span className="text-xs text-blue-200 block">Typical Duration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASES.map((phase, i) => (
              <Card key={i} className="border-slate-200 hover:shadow-lg transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-primary/20">{phase.number}</span>
                    <span className="text-xs text-slate-500 font-medium">{phase.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.activities.slice(0, 3).map((activity, idx) => (
                      <li key={idx} className="text-sm text-slate-500 flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">What You&apos;ll Receive</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                Every audit culminates in a comprehensive package of deliverables designed 
                to guide your AI transformation journey.
              </p>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: "description",
                  title: "Detailed Process Maps",
                  description: "Visual documentation of your current workflows with identified bottlenecks and inefficiencies."
                },
                {
                  icon: "analytics",
                  title: "Opportunity Matrix",
                  description: "Prioritized list of automation opportunities ranked by impact, effort, and ROI potential."
                },
                {
                  icon: "route",
                  title: "Implementation Roadmap",
                  description: "Phased plan for rolling out automation, from quick wins to complex transformations."
                },
                {
                  icon: "present_to_all",
                  title: "Executive Presentation",
                  description: "Board-ready presentation summarizing findings and recommendations."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white group hover:shadow-lg transition-all">
                  <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Ready to discover your AI potential?</h2>
          <p className="text-slate-500 text-lg">
            Book a free consultation to discuss your operational challenges and learn how our audit can help.
          </p>
          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-10 py-6 h-auto rounded-lg text-lg font-bold" asChild>
            <Link href="/audit">Book Free Audit</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
