import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI for Financial Services | QENAI - AI Automation Agency Kenya",
  description: "Transform financial operations with AI. From fraud detection to customer onboarding, our fintech AI solutions help banks and financial institutions innovate safely.",
  keywords: ["AI for financial services", "fintech AI Kenya", "banking automation", "fraud detection AI", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/financial",
  },
};

const FINTECH_FEATURES = [
  {
    icon: "security",
    title: "Fraud Detection",
    description: "Real-time anomaly detection that catches fraud while minimizing false positives."
  },
  {
    icon: "verified_user",
    title: "KYC Automation",
    description: "Streamline customer onboarding with AI-powered document verification and risk assessment."
  },
  {
    icon: "analytics",
    title: "Credit Scoring",
    description: "Alternative credit scoring models that reach underserved populations."
  },
  {
    icon: "support_agent",
    title: "Customer Service",
    description: "AI-powered support for balance inquiries, transaction disputes, and product questions."
  }
];

export default function FinancialPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
          { name: "Financial Services", url: "https://qenai.com/solutions/financial" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6 text-lg text-primary">Financial Services</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI for Financial <span className="text-primary italic">Services</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Financial services face unique challenges - regulatory compliance, fraud risk, and the
          need for trust. Our fintech AI solutions help you innovate while maintaining the
          security and compliance your customers and regulators expect.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/audit">
            <NeuButton variant="primary" size="lg">
              Get Your Free AI Audit
            </NeuButton>
          </Link>
          <Link href="/consultation">
            <NeuButton variant="secondary" size="lg">
              Book Free Consultation
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              alt="AI for Financial Services - Digital finance"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Innovate Without Compromising Security
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In financial services, trust is everything. Our AI solutions are built with 
              security, compliance, and auditability at their core - so you can move fast 
              without taking unnecessary risks.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Regulatory compliance built-in
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Explainable AI for audit trails
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Bank-grade security standards
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Fintech AI Applications</h2>
          <p className="text-gray-500">Where AI drives financial innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FINTECH_FEATURES.map((feature, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Relevant Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/custom-models">
            <NeuButton variant="secondary">Custom AI Models →</NeuButton>
          </Link>
          <Link href="/services/automation">
            <NeuButton variant="secondary">Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/advisory">
            <NeuButton variant="secondary">Strategic Advisory →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Financial Operations?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI can help you serve customers better while managing 
            risk effectively.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Schedule a Discussion
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
      </main>
      <Footer />
    </>
  );
}
