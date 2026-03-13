import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Strategic Advisory & Capacity Building | QENAI - AI Automation Agency Kenya",
  description: "Expert AI strategy consulting for African businesses. We help you develop AI governance frameworks, build internal capabilities, and create long-term AI roadmaps.",
  keywords: ["AI strategic advisory", "AI consulting Kenya", "AI governance", "AI capacity building", "AI automation agency Kenya"],
  alternates: {
    canonical: "/services/advisory",
  },
  openGraph: {
    title: "AI Strategic Advisory & Capacity Building | QENAI",
    description: "Expert guidance on AI strategy, governance, and building internal AI capabilities.",
    url: "https://qenai.com/services/advisory",
  },
};

const ADVISORY_SERVICES = [
  {
    icon: "strategy",
    title: "AI Strategy Development",
    description: "Define your AI vision, prioritize initiatives, and create a multi-year transformation roadmap."
  },
  {
    icon: "gavel",
    title: "AI Governance Frameworks",
    description: "Establish ethical guidelines, risk management protocols, and decision-making structures."
  },
  {
    icon: "school",
    title: "Team Training & Upskilling",
    description: "Build AI literacy across your organization - from executives to front-line staff."
  },
  {
    icon: "diversity_3",
    title: "Change Management",
    description: "Navigate the human side of AI adoption with communication and transition planning."
  },
  {
    icon: "verified",
    title: "Vendor Evaluation",
    description: "Independent assessment of AI vendors and solutions to ensure you make the right choices."
  },
  {
    icon: "trending_up",
    title: "Performance Optimization",
    description: "Review and improve existing AI implementations for better results and ROI."
  }
];

export default function AdvisoryPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <ServiceSchema
        name="AI Strategic Advisory & Capacity Building"
        description="Expert AI strategy consulting, governance frameworks, and team training for African businesses"
        url="https://qenai.com/services/advisory"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Services", url: "https://qenai.com/services" },
          { name: "Strategic Advisory", url: "https://qenai.com/services/advisory" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Advisory Services</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Strategic <span className="text-primary italic">Advisory</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          AI adoption isn&apos;t just about technology - it&apos;s about strategy, people, and governance. 
          Our advisory services help you navigate the complexity of AI transformation with 
          expert guidance tailored to African business contexts.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Schedule a Strategy Session
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="AI Strategic Advisory - Business strategy meeting"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Navigate AI Transformation with Confidence
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              AI hype is everywhere, but clarity is rare. We cut through the noise to help 
              you make informed decisions about where to invest, what to build, and how to 
              bring your team along on the journey.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Vendor-agnostic recommendations
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Deep understanding of African contexts
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Practical, implementation-focused advice
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Advisory Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Advisory Services</h2>
          <p className="text-gray-500">Expert guidance for every stage of your AI journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVISORY_SERVICES.map((service, i) => (
            <NeuCard key={i} className="p-6">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Capacity Building */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Capacity Building Programs</h2>
          <p className="text-gray-500">Build lasting AI capabilities within your organization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NeuCard className="p-8">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Executive AI Literacy</h3>
            <p className="text-gray-500 mb-4">
              Half-day workshops for leadership teams covering AI fundamentals, strategic implications, 
              and decision-making frameworks.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                What AI can and cannot do
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                Evaluating AI opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                Risk and governance considerations
              </li>
            </ul>
          </NeuCard>

          <NeuCard className="p-8">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Technical Team Training</h3>
            <p className="text-gray-500 mb-4">
              Multi-day hands-on training for IT and data teams on implementing and maintaining 
              AI solutions.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                AI/ML fundamentals
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                Integration best practices
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check</span>
                Monitoring and maintenance
              </li>
            </ul>
          </NeuCard>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Related Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/audits">
            <NeuButton variant="secondary">AI Readiness Audit →</NeuButton>
          </Link>
          <Link href="/services/automation">
            <NeuButton variant="secondary">AI Workflow Automation →</NeuButton>
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
            Get Expert Guidance for Your AI Journey
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re just starting to explore AI or looking to optimize existing 
            implementations, our advisory team can help.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Book a Strategy Session
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
