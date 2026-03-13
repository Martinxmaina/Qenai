import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Solutions by Industry | QENAI - AI Automation Agency Kenya",
  description: "Explore QENAI's industry-specific AI solutions. From corporate enterprises to NGOs, we deliver tailored AI automation for African businesses.",
  keywords: ["AI solutions Kenya", "industry AI solutions", "AI automation agency Kenya", "business AI Africa"],
  alternates: {
    canonical: "/solutions",
  },
};

const SOLUTIONS = [
  {
    icon: "business",
    title: "Corporate Enterprises",
    description: "Scale operations and accelerate decision-making with enterprise AI integration.",
    href: "/solutions/corporate"
  },
  {
    icon: "storefront",
    title: "SMEs & Startups",
    description: "Compete with bigger players using AI tools that level the playing field.",
    href: "/solutions/smes"
  },
  {
    icon: "volunteer_activism",
    title: "NGOs & Non-Profits",
    description: "Maximize impact with AI that stretches every dollar and hour further.",
    href: "/solutions/ngos"
  },
  {
    icon: "gavel",
    title: "Professional Services",
    description: "Transform legal, accounting, and consulting with AI-powered efficiency.",
    href: "/solutions/professional-services"
  },
  {
    icon: "shopping_cart",
    title: "E-commerce & Retail",
    description: "Personalize experiences and optimize operations with retail AI.",
    href: "/solutions/ecommerce"
  },
  {
    icon: "account_balance",
    title: "Financial Services",
    description: "Innovate safely with AI for fraud detection, KYC, and customer service.",
    href: "/solutions/financial"
  }
];

export default function SolutionsPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">By Industry</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Solutions for <span className="text-primary italic">Every Business</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Every industry has unique challenges. We deliver AI solutions tailored to your 
          specific context - whether you&apos;re a corporate enterprise, a growing startup, 
          or a mission-driven NGO.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{solution.icon}</span>
              </NeuIconContainer>
              <h2 className="font-bold text-xl text-gray-800 mb-2">{solution.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                {solution.description}
              </p>
              <Link href={solution.href}>
                <NeuButton variant="secondary" size="sm">
                  Learn More →
                </NeuButton>
              </Link>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Cross-selling Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Our AI readiness audit helps you identify the best opportunities for your specific 
            industry and business context.
          </p>
          <Link href="/services/audits">
            <NeuButton variant="primary">
              Learn About AI Audits
            </NeuButton>
          </Link>
        </NeuCard>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Let&apos;s Discuss Your Industry
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Schedule a consultation and let&apos;s explore how AI 
            can address your specific challenges.
          </p>
          <a href="https://calendly.com/martin-qenai/30min" target="_blank" rel="noopener noreferrer">
            <NeuButton variant="primary" size="lg">
              Book Consultation
            </NeuButton>
          </a>
        </NeuCard>
      </section>
    </main>
  );
}
