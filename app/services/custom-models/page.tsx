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
  title: "Custom AI Models for African Businesses | QENAI - AI Automation Agency Kenya",
  description: "Get custom AI models built specifically for African markets. Our AI specialists develop solutions that understand local languages, data patterns, and business contexts.",
  keywords: ["Custom AI models Africa", "AI model development Kenya", "machine learning Africa", "AI automation agency Kenya", "bespoke AI solutions"],
  alternates: {
    canonical: "/services/custom-models",
  },
  openGraph: {
    title: "Custom AI Models for African Businesses | QENAI",
    description: "Bespoke AI model development that understands your context and solves your specific business challenges.",
    url: "https://qenai.com/services/custom-models",
  },
};

const USE_CASES = [
  {
    icon: "translate",
    title: "Local Language Processing",
    description: "AI models trained on Swahili, Sheng, and other local languages for customer service and content analysis."
  },
  {
    icon: "image_search",
    title: "Document Intelligence",
    description: "Extract data from local document formats, handwritten forms, and non-standard paperwork."
  },
  {
    icon: "insights",
    title: "Predictive Analytics",
    description: "Forecast demand, churn, and market trends using models trained on your historical data."
  },
  {
    icon: "record_voice_over",
    title: "Voice & Speech",
    description: "Voice assistants and transcription services that understand local accents and dialects."
  },
  {
    icon: "verified_user",
    title: "Fraud Detection",
    description: "Custom fraud models trained on local transaction patterns and fraud signatures."
  },
  {
    icon: "recommend",
    title: "Recommendation Systems",
    description: "Product and content recommendations based on local preferences and behavior patterns."
  }
];

const DEVELOPMENT_PROCESS = [
  { step: "01", title: "Discovery", description: "We understand your business problem and data landscape" },
  { step: "02", title: "Data Preparation", description: "Collect, clean, and prepare training data" },
  { step: "03", title: "Model Development", description: "Build and train custom models for your use case" },
  { step: "04", title: "Testing & Validation", description: "Rigorous testing with your real-world scenarios" },
  { step: "05", title: "Deployment", description: "Integration with your systems and workflows" },
  { step: "06", title: "Monitoring", description: "Ongoing performance tracking and model updates" },
];

export default function CustomModelsPage() {
  return (
    <>
      <Navbar />
    <main className="flex-1 bg-[#E0E5EC]">
      <ServiceSchema
        name="Custom AI Model Development"
        description="Bespoke AI model development for African businesses including NLP, computer vision, and predictive analytics"
        url="https://qenai.com/services/custom-models"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Services", url: "https://qenai.com/services" },
          { name: "Custom AI Models", url: "https://qenai.com/services/custom-models" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Custom AI Development</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Custom AI Models for <span className="text-primary italic">African Businesses</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Generic AI doesn&apos;t understand your context. Our <strong>custom AI models Africa</strong> specialists 
          build solutions that work with local languages, data patterns, and business practices - delivering 
          results that off-the-shelf tools simply can&apos;t match.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Discuss Your AI Project
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
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
              alt="Custom AI Models - Neural network and machine learning"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              AI Built for Your Reality
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Western AI models often fail in African contexts. They don&apos;t understand Swahili, 
              they haven&apos;t seen your document formats, and they weren&apos;t trained on your data patterns. 
              We build <strong>custom AI models</strong> that actually work for your business.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Trained on your actual data and use cases
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Understands local languages and contexts
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Continuously improved based on performance
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Model Development Use Cases</h2>
          <p className="text-gray-500">Common applications we build for African businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, i) => (
            <NeuCard key={i} className="p-6">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{useCase.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {useCase.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Development Process</h2>
          <p className="text-gray-500">How we build custom AI models</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DEVELOPMENT_PROCESS.map((phase, i) => (
            <NeuCard key={i} className="p-4 text-center" hover={false}>
              <span className="text-2xl font-bold text-primary/30">{phase.step}</span>
              <h3 className="font-bold text-gray-800 mt-2 mb-1 text-sm">{phase.title}</h3>
              <p className="text-xs text-gray-500">{phase.description}</p>
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
          <Link href="/services/audits">
            <NeuButton variant="secondary">AI Readiness Audit →</NeuButton>
          </Link>
          <Link href="/services/automation">
            <NeuButton variant="secondary">AI Workflow Automation →</NeuButton>
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
            Ready to Build AI That Actually Works Here?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your use case and explore how <strong>custom AI models</strong> can 
            solve problems that generic solutions can&apos;t touch.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Start Your AI Project
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
      <Footer />
    </>
  );
}
