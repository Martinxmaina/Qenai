import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Knowledge Systems & Productivity | QENAI - AI Automation Agency Kenya",
  description: "Build AI-powered knowledge management systems that make your team's expertise searchable and actionable. Reduce time spent searching for information.",
  keywords: ["AI knowledge management", "productivity AI", "enterprise knowledge systems", "AI automation agency Kenya", "corporate knowledge base"],
  alternates: {
    canonical: "/services/knowledge-systems",
  },
  openGraph: {
    title: "AI Knowledge Systems & Productivity | QENAI",
    description: "AI-powered knowledge management that makes your team's expertise instantly accessible.",
    url: "https://qenai.com/services/knowledge-systems",
  },
};

const KNOWLEDGE_FEATURES = [
  {
    icon: "search",
    title: "Intelligent Search",
    description: "Natural language search across all your documents, emails, and data sources."
  },
  {
    icon: "auto_awesome",
    title: "AI Summarization",
    description: "Get instant summaries of long documents, meeting recordings, and email threads."
  },
  {
    icon: "question_answer",
    title: "Q&A Systems",
    description: "Ask questions in plain English and get answers from your company's knowledge base."
  },
  {
    icon: "edit_document",
    title: "Content Generation",
    description: "Generate reports, proposals, and documentation based on your existing content."
  },
  {
    icon: "integration_instructions",
    title: "System Integration",
    description: "Connect to SharePoint, Google Drive, Confluence, and other platforms."
  },
  {
    icon: "security",
    title: "Access Control",
    description: "Ensure sensitive information is only accessible to authorized team members."
  }
];

export default function KnowledgeSystemsPage() {
  return (
    <>
      <Navbar />
    <main className="flex-1 bg-[#E0E5EC]">
      <ServiceSchema
        name="AI Knowledge Systems & Productivity"
        description="AI-powered knowledge management and productivity tools for enterprise teams"
        url="https://qenai.com/services/knowledge-systems"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Services", url: "https://qenai.com/services" },
          { name: "Knowledge Systems", url: "https://qenai.com/services/knowledge-systems" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Knowledge & Productivity</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Knowledge <span className="text-primary italic">Systems</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Your team&apos;s knowledge is scattered across emails, documents, and people&apos;s heads. 
          Our AI knowledge systems make that expertise searchable, shareable, and actionable - so 
          answers are always just a question away.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Build Your Knowledge System
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
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              alt="AI Knowledge Systems - Team collaboration"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Stop Losing Time to Information Hunts
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Your team spends hours searching for information that already exists somewhere 
              in your organization. Our AI knowledge systems surface the right information 
              at the right time - no more digging through folders or asking around.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Ask questions in plain language
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Get answers from across all your systems
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Preserve knowledge when employees leave
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Knowledge Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">System Capabilities</h2>
          <p className="text-gray-500">What your AI knowledge system can do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KNOWLEDGE_FEATURES.map((feature, i) => (
            <NeuCard key={i} className="p-6">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
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
          <Link href="/services/customer-experience">
            <NeuButton variant="secondary">Customer Experience AI →</NeuButton>
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
            Your Team&apos;s Knowledge Is Your Competitive Advantage
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let valuable expertise stay locked in silos. Let&apos;s discuss how AI can 
            make your organization&apos;s knowledge work harder.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Build Your Knowledge System
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
      <Footer />
    </>
  );
}
