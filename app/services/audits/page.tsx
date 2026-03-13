import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Readiness Audit Services | QENAI - AI Automation Agency Kenya",
  description: "Get a comprehensive AI readiness audit for your business. Our expert team identifies high-impact automation opportunities and creates a strategic roadmap for AI workflow automation in Kenya and Africa.",
  keywords: ["AI readiness audit", "AI workflow automation", "business process audit", "AI automation agency Kenya", "workflow assessment Africa"],
  alternates: {
    canonical: "/services/audits",
  },
  openGraph: {
    title: "AI Readiness Audit Services | QENAI",
    description: "Comprehensive AI readiness audits that identify your highest-impact automation opportunities.",
    url: "https://qenai.com/services/audits",
  },
};

const PHASES = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1-2",
    activities: [
      "Stakeholder interviews with leadership and operations teams",
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
      "ROI estimation for time saved and cost reduction",
      "Risk and change management considerations"
    ]
  },
  {
    number: "03",
    title: "Strategic Roadmap",
    duration: "Week 3-4",
    activities: [
      "Prioritization framework based on impact vs effort",
      "Phased implementation plan from quick wins to transformations",
      "Budget allocation recommendations",
      "Technology stack recommendations"
    ]
  },
  {
    number: "04",
    title: "Presentation",
    duration: "Week 4",
    activities: [
      "Executive presentation of findings and recommendations",
      "Technical deep-dive session with your IT team",
      "Q&A and refinement based on feedback",
      "Next-step planning and project scoping"
    ]
  }
];

export default function AuditsPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <ServiceSchema
        name="AI Readiness Audit"
        description="Comprehensive evaluation of business processes to identify AI automation opportunities"
        url="https://qenai.com/services/audits"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Services", url: "https://qenai.com/services" },
          { name: "AI Readiness Audits", url: "https://qenai.com/services/audits" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">AI Audit Services</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Readiness Audit <span className="text-primary italic">Services</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Know exactly where AI will deliver the biggest impact. Our comprehensive 
          <strong> AI readiness audit</strong> maps your workflows and identifies high-ROI 
          automation opportunities - no guesswork, just data-driven decisions.
        </p>
        <div className="flex justify-center">
          <a href="https://calendly.com/martin-qenai/30min" target="_blank" rel="noopener noreferrer">
            <NeuButton variant="primary" size="lg">
              Book Your Free Audit
            </NeuButton>
          </a>
        </div>
      </section>

      {/* What We Assess Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">What We Assess</h2>
          <p className="text-gray-500">A holistic view of your operations, not just technology</p>
        </div>

        <NeuCard className="p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <NeuIconContainer className="mx-auto md:mx-0 mb-4">
                <span className="material-symbols-outlined text-3xl">group</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">People & Processes</h3>
              <p className="text-sm text-gray-500">
                We interview stakeholders at every level to understand how work actually gets done, 
                not just how it&apos;s supposed to work.
              </p>
            </div>
            <div className="text-center md:text-left">
              <NeuIconContainer className="mx-auto md:mx-0 mb-4">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Systems & Data</h3>
              <p className="text-sm text-gray-500">
                We map your current technology stack, data flows, and integration points to 
                identify automation-ready processes.
              </p>
            </div>
            <div className="text-center md:text-left">
              <NeuIconContainer className="mx-auto md:mx-0 mb-4">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Opportunities & ROI</h3>
              <p className="text-sm text-gray-500">
                Every recommendation comes with estimated time savings, cost reduction, 
                and implementation complexity.
              </p>
            </div>
          </div>
        </NeuCard>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Process</h2>
          <p className="text-gray-500">A structured approach that delivers results in weeks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHASES.map((phase, i) => (
            <NeuCard key={i} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-primary/20">{phase.number}</span>
                <span className="text-xs text-gray-400 font-medium">{phase.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.activities.slice(0, 3).map((activity, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Results You Can Expect Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Results You Can Expect</h2>
          <p className="text-gray-500">Deliverables that guide your AI transformation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              description: "Board-ready presentation summarizing findings and recommendations for stakeholders."
            }
          ].map((item, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </NeuIconContainer>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Related Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/automation">
            <NeuButton variant="secondary">AI Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/advisory">
            <NeuButton variant="secondary">Strategic Advisory →</NeuButton>
          </Link>
          <Link href="/services/custom-models">
            <NeuButton variant="secondary">Custom AI Models →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Discover Your AI Potential?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Every day you delay is a day your competitors get ahead. Book your free 
            <strong> AI readiness audit</strong> consultation today.
          </p>
          <a href="https://calendly.com/martin-qenai/30min" target="_blank" rel="noopener noreferrer">
            <NeuButton variant="primary" size="lg">
              Book Free Consultation
            </NeuButton>
          </a>
        </NeuCard>
      </section>
    </main>
  );
}
