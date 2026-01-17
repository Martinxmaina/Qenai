import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";

export const metadata: Metadata = {
  title: "QENAI - AI Automation Agency Kenya | Quest for the Next AI",
  description: "Kenya's premier AI automation agency. Transform your business with AI workflow automation, AI readiness audits, and custom AI models built for African enterprises.",
  keywords: ["AI automation agency Kenya", "AI workflow automation", "AI readiness audit", "Custom AI models Africa", "Business process automation AI"],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 leading-tight">
          Quest for the <span className="text-primary italic">Next AI</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Kenya&apos;s leading <strong>AI automation agency</strong>. We deliver enterprise-grade 
          <Link href="/services/automation" className="text-primary hover:underline"> AI workflow automation</Link> and 
          <Link href="/services/custom-models" className="text-primary hover:underline"> custom AI models</Link> built 
          specifically for African businesses ready to scale.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/services/audits">
            <NeuButton variant="primary" size="lg">
              Get Your Free AI Audit
            </NeuButton>
          </Link>
          <a href="https://calendly.com/martin-qenai/30min" target="_blank" rel="noopener noreferrer">
            <NeuButton variant="secondary" size="lg">
              Book a Consultation
            </NeuButton>
          </a>
        </div>
      </section>

      {/* Stats Section - No generic numbers, benefit-focused */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NeuCard className="flex flex-col items-center justify-center py-12 px-6">
            <NeuIconContainer>
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </NeuIconContainer>
            <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">Rapid Deployment</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
              From audit to automation in weeks, not months
            </p>
          </NeuCard>

          <NeuCard className="flex flex-col items-center justify-center py-12 px-6">
            <NeuIconContainer>
              <span className="material-symbols-outlined text-3xl">speed</span>
            </NeuIconContainer>
            <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">Measurable ROI</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
              Track every hour saved and cost reduced
            </p>
          </NeuCard>

          <NeuCard className="flex flex-col items-center justify-center py-12 px-6">
            <NeuIconContainer>
              <span className="material-symbols-outlined text-3xl">support_agent</span>
            </NeuIconContainer>
            <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">Local Expertise</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
              Built for African markets, supported locally
            </p>
          </NeuCard>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        {/* AI Workflow Automation Feature */}
        <NeuCard className="p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="AI Workflow Automation - Team collaborating with AI tools"
              width={800}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <NeuTag className="mb-4">AI Automation</NeuTag>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              AI Workflow Automation That Works While You Sleep
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 pr-4">
              Stop losing hours to repetitive tasks. Our <strong>business process automation AI</strong> handles 
              invoices, reports, customer responses, and data entry - so your team can focus on growth.
            </p>
            <Link href="/services/automation">
              <NeuButton variant="primary">
                Explore Automation
              </NeuButton>
            </Link>
          </div>
        </NeuCard>

        {/* AI Readiness Audit Feature */}
        <NeuCard className="p-4 md:p-6 mb-12 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="AI Readiness Audit - Data analysis dashboard"
              width={800}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <NeuTag className="mb-4">AI Audit</NeuTag>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Know Exactly Where AI Will Save You Time and Money
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 pr-4">
              Our comprehensive <Link href="/services/audits" className="text-primary hover:underline">AI readiness audit</Link> maps 
              your workflows and identifies the highest-impact automation opportunities. No guesswork - just data-driven decisions.
            </p>
            <Link href="/services/audits">
              <NeuButton variant="primary">
                Get Your Free Audit
              </NeuButton>
            </Link>
          </div>
        </NeuCard>

        {/* Custom AI Models Feature */}
        <NeuCard className="p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
              alt="Custom AI Models - Neural network visualization"
              width={800}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <NeuTag className="mb-4">Custom AI</NeuTag>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Custom AI Models Built for African Markets
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 pr-4">
              Generic AI doesn&apos;t understand your context. Our <strong>custom AI models Africa</strong> specialists 
              build solutions that work with local languages, data patterns, and business practices.
            </p>
            <Link href="/services/custom-models">
              <NeuButton variant="primary">
                Build Your Model
              </NeuButton>
            </Link>
          </div>
        </NeuCard>
      </section>

      {/* Solutions by Industry Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Solutions for Every Business</h2>
          <p className="text-gray-500">Tailored AI automation for your specific industry needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NeuCard className="p-8">
            <NeuIconContainer size="sm" className="mb-4">
              <span className="material-symbols-outlined text-2xl">business</span>
            </NeuIconContainer>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Corporate Enterprises</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Scale operations and accelerate decision-making with enterprise AI integration.
            </p>
            <Link href="/solutions/corporate" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </NeuCard>

          <NeuCard className="p-8">
            <NeuIconContainer size="sm" className="mb-4">
              <span className="material-symbols-outlined text-2xl">storefront</span>
            </NeuIconContainer>
            <h3 className="font-bold text-lg text-gray-800 mb-2">SMEs & Startups</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Compete with bigger players using AI tools that level the playing field.
            </p>
            <Link href="/solutions/smes" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </NeuCard>

          <NeuCard className="p-8">
            <NeuIconContainer size="sm" className="mb-4">
              <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
            </NeuIconContainer>
            <h3 className="font-bold text-lg text-gray-800 mb-2">NGOs & Non-Profits</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Maximize impact with AI that stretches every dollar and hour further.
            </p>
            <Link href="/solutions/ngos" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </NeuCard>
        </div>
      </section>

      {/* FOMO CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Competitors Are Already Automating
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Every day without AI automation is a day your competitors get ahead. 
            Book a free consultation and discover what&apos;s possible for your business.
          </p>
          <div className="flex justify-center">
            <a href="https://calendly.com/martin-qenai/30min" target="_blank" rel="noopener noreferrer">
              <NeuButton variant="primary" size="lg">
                Book Free Consultation
              </NeuButton>
            </a>
          </div>
        </NeuCard>
      </section>
    </main>
  );
}
