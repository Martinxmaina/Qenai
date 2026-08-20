import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuTag } from "@/components/ui/neu-tag";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Workflow Automation Services | QENAI - Business Process Automation AI",
  description: "Transform your operations with AI workflow automation. Our business process automation AI handles invoices, reports, customer responses, and data entry - saving your team hours every day.",
  keywords: ["AI workflow automation", "business process automation AI", "workflow automation Kenya", "AI automation agency", "process automation Africa"],
  alternates: {
    canonical: "/services/automation",
  },
  openGraph: {
    title: "AI Workflow Automation Services | QENAI",
    description: "Automate repetitive tasks and free your team to focus on growth with our AI workflow automation solutions.",
    url: "https://qenai.com/services/automation",
  },
};

export default function AutomationPage() {
  return (
    <>
      <Navbar />
    <main className="flex-1 bg-[#E0E5EC]">
      <ServiceSchema
        name="AI Workflow Automation"
        description="Business process automation using AI to streamline operations and reduce manual work"
        url="https://qenai.com/services/automation"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Services", url: "https://qenai.com/services" },
          { name: "AI Workflow Automation", url: "https://qenai.com/services/automation" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Automation Services</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Workflow <span className="text-primary italic">Automation</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Stop losing hours to repetitive tasks. Our <strong>business process automation AI</strong> handles 
          the mundane work - invoices, reports, customer responses, data entry - so your team can focus on 
          what actually grows your business.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Automate Your Workflows
            </NeuButton>
          </Link>
          <Link href="/services/audits">
            <NeuButton variant="secondary" size="lg">
              Get an AI Audit First
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="AI Workflow Automation - Team working efficiently"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Automation That Works While You Sleep
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our <strong>AI workflow automation</strong> solutions run around the clock, processing 
              tasks that would take your team hours. From document processing to customer communications, 
              we build systems that scale without adding headcount.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Reduce manual data entry by up to 90%
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Eliminate human error in repetitive tasks
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Free your team for high-value work
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Integration Options */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Integration Options</h2>
          <p className="text-gray-500">We connect with your existing tools and systems</p>
        </div>

        <NeuCard className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {["Google Workspace", "Microsoft 365", "Salesforce", "SAP", "QuickBooks", "Slack", "WhatsApp", "Custom APIs"].map((tool, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/50 shadow-neu-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">link</span>
                </div>
                <span className="text-sm text-gray-600 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </NeuCard>
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
          <Link href="/services/custom-models">
            <NeuButton variant="secondary">Custom AI Models →</NeuButton>
          </Link>
          <Link href="/services/customer-experience">
            <NeuButton variant="secondary">Customer Experience AI →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Free Your Team to Do the Work That Actually Moves the Needle.
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            We handle the automation, so your team can handle what matters.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Start Automating Today
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
      <Footer />
    </>
  );
}
