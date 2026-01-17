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
  title: "AI for Professional Services | QENAI - AI Automation Agency Kenya",
  description: "Transform legal, accounting, and consulting firms with AI. Automate research, document processing, and client communications while maintaining quality.",
  keywords: ["AI for professional services", "legal AI Kenya", "accounting automation", "consulting firm AI", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/professional-services",
  },
};

const PROFESSIONAL_APPLICATIONS = [
  {
    icon: "gavel",
    title: "Legal Document Analysis",
    description: "Review contracts, extract key terms, and identify risks in a fraction of the time."
  },
  {
    icon: "calculate",
    title: "Financial Processing",
    description: "Automate reconciliations, audit procedures, and compliance checks."
  },
  {
    icon: "content_paste_search",
    title: "Research & Analysis",
    description: "AI-powered research that synthesizes information from multiple sources."
  },
  {
    icon: "edit_note",
    title: "Document Generation",
    description: "Create first drafts of reports, proposals, and client communications."
  }
];

export default function ProfessionalServicesPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
          { name: "Professional Services", url: "https://qenai.com/solutions/professional-services" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Professional Services</NeuTag>
        <Logo size="lg" className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI for Professional <span className="text-primary italic">Services</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Your clients pay for your expertise, not your admin time. Our professional services 
          AI solutions handle document processing, research, and routine tasks - so you can focus 
          on high-value advisory work.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              See a Demo
            </NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary" size="lg">
              View Case Studies
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="AI for Professional Services - Business professional"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Bill for Thinking, Not for Typing
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              AI handles the first draft, the research summary, the document review. 
              You provide the judgment, the strategy, the client relationship. 
              That&apos;s how professional services should work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Maintain quality while increasing throughput
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Client confidentiality and data security
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Integration with professional tools
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">AI Applications</h2>
          <p className="text-gray-500">Transform how your firm delivers value</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROFESSIONAL_APPLICATIONS.map((app, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{app.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{app.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {app.description}
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
          <Link href="/services/knowledge-systems">
            <NeuButton variant="secondary">Knowledge Systems →</NeuButton>
          </Link>
          <Link href="/services/automation">
            <NeuButton variant="secondary">Workflow Automation →</NeuButton>
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
            Work Smarter, Bill Better
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI can help your firm deliver more value while improving 
            your margins.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Schedule a Consultation
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
