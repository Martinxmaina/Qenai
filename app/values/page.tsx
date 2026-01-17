import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Values & Approach | QENAI - AI Automation Agency Kenya",
  description: "Discover the principles that guide QENAI's work. We build AI solutions with integrity, impact, and a deep commitment to African business success.",
  keywords: ["QENAI values", "AI ethics Kenya", "AI automation agency Kenya", "responsible AI Africa"],
  alternates: {
    canonical: "/values",
  },
};

const VALUES = [
  {
    icon: "lightbulb",
    title: "Innovation with Purpose",
    description: "We don't pursue technology for its own sake. Every solution we build solves a real problem for real businesses."
  },
  {
    icon: "handshake",
    title: "Integrity in Everything",
    description: "We're honest about what AI can and can't do. We make recommendations based on client benefit, not our revenue."
  },
  {
    icon: "target",
    title: "Impact Over Impressiveness",
    description: "A simple solution that works beats a sophisticated one that doesn't. We optimize for results, not complexity."
  },
  {
    icon: "public",
    title: "Local Understanding",
    description: "We build for African contexts because we understand them. Our solutions work with local realities, not against them."
  },
  {
    icon: "diversity_3",
    title: "Client Partnership",
    description: "We succeed when our clients succeed. We're invested in your outcomes, not just deliverables."
  },
  {
    icon: "school",
    title: "Knowledge Transfer",
    description: "We build your capabilities, not just your systems. Your team should understand and own the AI we implement."
  }
];

const APPROACH_PRINCIPLES = [
  {
    title: "Start with Business Problems",
    description: "We don't lead with technology. We start by understanding your challenges and work backward to the right solution."
  },
  {
    title: "Prove Value Early",
    description: "We structure projects to deliver quick wins before major investments. You'll see ROI before you're deeply committed."
  },
  {
    title: "Build for Sustainability",
    description: "Our solutions are designed to be maintained and evolved by your team, not to create permanent dependency on us."
  },
  {
    title: "Stay Technology Agnostic",
    description: "We recommend the best tools for your situation, not the ones that make us the most money."
  }
];

export default function ValuesPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "About", url: "https://qenai.com/story" },
          { name: "Values & Approach", url: "https://qenai.com/values" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Our Principles</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Values & <span className="text-primary italic">Approach</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          How we work matters as much as what we deliver. These principles guide every 
          decision we make - from which projects to take on to how we build and deploy solutions.
        </p>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Core Values</h2>
          <p className="text-gray-500">What we stand for</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{value.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Approach</h2>
          <p className="text-gray-500">How we deliver results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPROACH_PRINCIPLES.map((principle, i) => (
            <NeuCard key={i} className="p-8" hover={false}>
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-primary/20">0{i + 1}</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{principle.title}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Responsible AI</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            AI is powerful, and power requires responsibility. We design our solutions with 
            transparency, fairness, and accountability built in. We help clients understand 
            how our systems make decisions and ensure they can be audited and explained.
          </p>
        </NeuCard>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Learn More About Us</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/story">
            <NeuButton variant="secondary">Our Story →</NeuButton>
          </Link>
          <Link href="/team">
            <NeuButton variant="secondary">Our Team →</NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary">Case Studies →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience Our Values in Action
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            The best way to understand how we work is to work with us. Let&apos;s discuss 
            how we can help your organization.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Start a Conversation
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
