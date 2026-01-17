import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | QENAI - AI Automation Agency Kenya",
  description: "Take our free AI readiness assessment to discover your organization's potential for AI automation. Get personalized insights and recommendations.",
  keywords: ["AI readiness assessment", "AI evaluation", "business AI potential", "AI automation agency Kenya"],
  alternates: {
    canonical: "/assessment",
  },
};

const ASSESSMENT_AREAS = [
  {
    icon: "account_tree",
    title: "Process Maturity",
    description: "How documented and standardized are your current business processes?"
  },
  {
    icon: "storage",
    title: "Data Availability",
    description: "Do you have digital data that could train and power AI systems?"
  },
  {
    icon: "groups",
    title: "Team Readiness",
    description: "Is your organization prepared for the changes AI will bring?"
  },
  {
    icon: "dns",
    title: "Technical Infrastructure",
    description: "Can your current systems integrate with AI solutions?"
  }
];

export default function AssessmentPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Resources", url: "https://qenai.com/resources" },
          { name: "AI Assessment", url: "https://qenai.com/assessment" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Self-Assessment</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Readiness <span className="text-primary italic">Assessment</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Not sure if your organization is ready for AI? Our assessment helps you understand 
          your current state and identifies the best opportunities for AI automation.
        </p>
      </section>

      {/* Assessment Areas */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">What We Assess</h2>
          <p className="text-gray-500">Four key dimensions of AI readiness</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ASSESSMENT_AREAS.map((area, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{area.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{area.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {area.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Take the Assessment</h3>
              <p className="text-sm text-gray-500">
                Answer questions about your processes, data, and goals. Takes about 10 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Get Your Results</h3>
              <p className="text-sm text-gray-500">
                Receive a personalized readiness score with specific insights for each dimension.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Review Recommendations</h3>
              <p className="text-sm text-gray-500">
                Get actionable next steps tailored to your current state and goals.
              </p>
            </div>
          </div>
        </NeuCard>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Discover Your AI Potential?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            The full assessment is available as part of our free consultation. 
            Book a call and we&apos;ll walk through it together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://calendly.com/martin-qenai/30min" target="_blank" rel="noopener noreferrer">
              <NeuButton variant="primary" size="lg">
                Book Free Consultation
              </NeuButton>
            </a>
            <Link href="/services/audits">
              <NeuButton variant="secondary" size="lg">
                Learn About Full Audits
              </NeuButton>
            </Link>
          </div>
        </NeuCard>
      </section>
    </main>
  );
}
