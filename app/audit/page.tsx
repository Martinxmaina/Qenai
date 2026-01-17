import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuInput } from "@/components/ui/neu-input";
import { NeuTextArea } from "@/components/ui/neu-textarea";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Free AI Audit | QENAI - AI Automation Agency Kenya",
  description: "Book your free AI readiness audit. Discover where AI automation will have the biggest impact on your business operations.",
  keywords: ["free AI audit", "AI readiness assessment", "AI consultation Kenya", "AI automation agency Kenya"],
  alternates: {
    canonical: "/audit",
  },
};

const AUDIT_BENEFITS = [
  {
    icon: "search",
    title: "Identify Opportunities",
    description: "Discover which processes are prime candidates for AI automation."
  },
  {
    icon: "calculate",
    title: "Estimate ROI",
    description: "Get a clear picture of potential time and cost savings."
  },
  {
    icon: "route",
    title: "Get a Roadmap",
    description: "Receive a prioritized plan for implementing AI in your organization."
  },
  {
    icon: "lightbulb",
    title: "No Obligation",
    description: "Learn what's possible with no commitment required."
  }
];

export default function AuditPage() {
    return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Free AI Audit", url: "https://qenai.com/audit" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Free Consultation</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Book Your Free <span className="text-primary italic">AI Audit</span>
                            </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Not sure where to start with AI? Our free audit helps you identify the highest-impact 
          opportunities for automation in your business. No commitment, just actionable insights.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIT_BENEFITS.map((benefit, i) => (
            <NeuCard key={i} className="p-6 text-center">
              <NeuIconContainer size="sm" className="mx-auto mb-4">
                <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </NeuCard>
                                ))}
                            </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <NeuCard className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Request Your Free Audit
          </h2>
          <form className="space-y-0 max-w-xl mx-auto">
            <NeuInput label="Full Name" placeholder="John Doe" />
            <NeuInput label="Email" type="email" placeholder="john@company.com" />
            <NeuInput label="Company" placeholder="Your Company Ltd" />
            <NeuInput label="Role/Title" placeholder="Operations Manager" />
            <NeuInput label="Phone" type="tel" placeholder="+254 7XX XXX XXX" />
            <NeuTextArea 
              label="What Challenges Are You Facing?" 
              rows={4} 
              placeholder="Tell us about the manual processes or inefficiencies you'd like to address..."
            />
            <div className="pt-4">
              <NeuButton variant="primary" className="w-full">
                Request Free Audit
              </NeuButton>
                                </div>
          </form>
          <p className="text-center text-xs text-gray-400 mt-6">
            We&apos;ll respond within 24 hours to schedule your consultation.
          </p>
        </NeuCard>
            </section>

      {/* What to Expect */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Initial Call</h3>
              <p className="text-sm text-gray-500">
                30-minute call to understand your business and challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
                    </div>
              <h3 className="font-bold text-gray-800 mb-2">Analysis</h3>
              <p className="text-sm text-gray-500">
                We review your workflows and identify automation opportunities
              </p>
                                </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
                            </div>
              <h3 className="font-bold text-gray-800 mb-2">Recommendations</h3>
              <p className="text-sm text-gray-500">
                Receive a summary of opportunities with estimated ROI
              </p>
                    </div>
                </div>
        </NeuCard>
            </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Want to Learn More First?</h2>
                    </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/audits">
            <NeuButton variant="secondary">Full Audit Services →</NeuButton>
          </Link>
          <Link href="/faq">
            <NeuButton variant="secondary">Read FAQs →</NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary">Case Studies →</NeuButton>
          </Link>
                </div>
            </section>
        </main>
    );
}
