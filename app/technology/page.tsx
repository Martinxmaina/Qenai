import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Technology | QENAI - AI Automation Agency Kenya",
  description: "Explore QENAI's AI technology stack. We use cutting-edge machine learning, NLP, and automation tools built for African business contexts.",
  keywords: ["AI technology Kenya", "machine learning Africa", "NLP Kenya", "AI automation agency Kenya", "AI tools"],
  alternates: {
    canonical: "/technology",
  },
};

const TECH_STACK = [
  {
    category: "AI & Machine Learning",
    items: ["Large Language Models", "Computer Vision", "Predictive Analytics", "Natural Language Processing"]
  },
  {
    category: "Integration",
    items: ["REST APIs", "Webhooks", "Database Connectors", "Enterprise System Integration"]
  },
  {
    category: "Automation",
    items: ["Workflow Orchestration", "Document Processing", "RPA Integration", "Scheduled Tasks"]
  },
  {
    category: "Infrastructure",
    items: ["Cloud Deployment", "On-Premise Options", "Hybrid Solutions", "Secure Data Handling"]
  }
];

const CAPABILITIES = [
  {
    icon: "psychology",
    title: "Natural Language Understanding",
    description: "Process and understand text in English, Swahili, and local variants."
  },
  {
    icon: "document_scanner",
    title: "Document Intelligence",
    description: "Extract data from invoices, forms, and unstructured documents."
  },
  {
    icon: "analytics",
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven recommendations."
  },
  {
    icon: "hub",
    title: "System Integration",
    description: "Connect with your existing tools and databases seamlessly."
  }
];

export default function TechnologyPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Technology", url: "https://qenai.com/technology" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Our Stack</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Our <span className="text-primary italic">Technology</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We combine cutting-edge AI with practical engineering to build solutions that work 
          reliably in African business environments. No hype - just technology that delivers.
        </p>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
              alt="QENAI Technology - Server infrastructure"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Built for African Markets
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our technology is designed with African realities in mind. We optimize for 
              variable connectivity, local language support, and the specific data patterns 
              found in African businesses.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Works with intermittent connectivity
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Local language support built-in
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Data residency compliance
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Core Capabilities</h2>
          <p className="text-gray-500">What our technology can do for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((capability, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{capability.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{capability.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {capability.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 max-w-6xl mx-auto" id="integrations">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Technology Stack</h2>
          <p className="text-gray-500">The tools and frameworks we use</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((stack, i) => (
            <NeuCard key={i} className="p-6" hover={false}>
              <h3 className="font-bold text-gray-800 mb-4">{stack.category}</h3>
              <ul className="space-y-2">
                {stack.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Explore Our Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/automation">
            <NeuButton variant="secondary">Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/custom-models">
            <NeuButton variant="secondary">Custom AI Models →</NeuButton>
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
            See Our Technology in Action
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Book a demo and see how our AI technology can solve your specific business challenges.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Book a Demo
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
