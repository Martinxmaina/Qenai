import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import { Logo } from "@/components/icons/Logo";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | QENAI - AI Automation Agency Kenya",
  description: "Transform your enterprise with AI. Scale operations, accelerate decision-making, and drive efficiency with our corporate AI solutions tailored for large organizations.",
  keywords: ["Enterprise AI solutions", "corporate AI Kenya", "AI automation agency Kenya", "large business AI", "enterprise workflow automation"],
  alternates: {
    canonical: "/solutions/corporate",
  },
};

const TRANSFORMATION_AREAS = [
  {
    icon: "analytics",
    title: "Data-Driven Decision Making",
    description: "Turn your data into actionable insights with AI analytics that surface patterns humans miss."
  },
  {
    icon: "account_tree",
    title: "Process Optimization",
    description: "Identify and automate inefficient processes across departments with intelligent workflow analysis."
  },
  {
    icon: "groups",
    title: "Employee Productivity",
    description: "Equip your workforce with AI tools that handle routine tasks and surface relevant information."
  },
  {
    icon: "support_agent",
    title: "Customer Operations",
    description: "Scale customer service without proportionally scaling costs using AI-powered support."
  }
];

export default function CorporatePage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
          { name: "Corporate Enterprises", url: "https://qenai.com/solutions/corporate" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Enterprise Solutions</NeuTag>
        <Logo size="lg" className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Enterprise AI <span className="text-primary italic">Solutions</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Large organizations face unique challenges - complex processes, siloed data, and the need to 
          coordinate change across thousands of people. Our enterprise AI solutions are built to handle 
          that complexity while delivering measurable results.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Request Enterprise Demo
            </NeuButton>
          </Link>
          <Link href="/services/audits">
            <NeuButton variant="secondary" size="lg">
              Start With an Audit
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Enterprise AI - Modern corporate office"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              AI That Scales With Your Complexity
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Enterprise AI isn&apos;t about point solutions - it&apos;s about transformation at scale. 
              We help you identify the highest-impact opportunities, build a strategic roadmap, 
              and execute with precision.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Integration with existing enterprise systems
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Enterprise-grade security and compliance
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Change management and training included
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Transformation Areas */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Transformation Areas</h2>
          <p className="text-gray-500">Where we drive enterprise impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRANSFORMATION_AREAS.map((area, i) => (
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

      {/* Relevant Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Recommended Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/audits">
            <NeuButton variant="secondary">AI Readiness Audit →</NeuButton>
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
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your enterprise AI strategy and identify the highest-impact opportunities 
            for your organization.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Schedule Executive Briefing
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
