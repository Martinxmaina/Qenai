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
  title: "AI for SMEs & Startups | QENAI - AI Automation Agency Kenya",
  description: "Level the playing field with AI. Our SME-focused solutions help small and medium businesses automate operations and compete with larger players.",
  keywords: ["AI for SMEs Kenya", "startup AI solutions", "small business automation", "AI automation agency Kenya", "affordable AI solutions"],
  alternates: {
    canonical: "/solutions/smes",
  },
};

const SME_BENEFITS = [
  {
    icon: "rocket_launch",
    title: "Faster Growth",
    description: "Automate manual processes so you can focus on what actually grows your business."
  },
  {
    icon: "savings",
    title: "Cost Efficiency",
    description: "Get enterprise-level capabilities without enterprise-level costs or complexity."
  },
  {
    icon: "trending_up",
    title: "Competitive Edge",
    description: "Respond to market changes faster than competitors still doing things manually."
  },
  {
    icon: "scale",
    title: "Scalable Operations",
    description: "Build systems that grow with you instead of breaking when you scale."
  }
];

export default function SMEsPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
          { name: "SMEs & Startups", url: "https://qenai.com/solutions/smes" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">SME Solutions</NeuTag>
        <Logo size="lg" className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI for SMEs & <span className="text-primary italic">Startups</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          You don&apos;t need a massive budget to leverage AI. Our SME solutions help ambitious 
          businesses punch above their weight - automating operations, delighting customers, and 
          scaling efficiently.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              See What&apos;s Possible
            </NeuButton>
          </Link>
          <Link href="/services/audits">
            <NeuButton variant="secondary" size="lg">
              Get a Free Audit
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              alt="AI for SMEs - Small team working efficiently"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Big Company Capabilities, Small Company Agility
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              While large competitors are stuck in endless planning cycles, you can move fast. 
              Our SME-focused approach gets you from idea to implementation in weeks, not months - with 
              solutions that actually fit your budget.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Start small, scale as you grow
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                No massive upfront investment
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Rapid deployment and ROI
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Why SMEs Choose Us</h2>
          <p className="text-gray-500">AI that makes sense for growing businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SME_BENEFITS.map((benefit, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Popular Services for SMEs</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/automation">
            <NeuButton variant="secondary">Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/customer-experience">
            <NeuButton variant="secondary">Customer Experience AI →</NeuButton>
          </Link>
          <Link href="/services/audits">
            <NeuButton variant="secondary">AI Readiness Audit →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Don&apos;t Let Size Hold You Back
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            The best time to start automating was yesterday. The second best time is now. 
            Let&apos;s talk about what AI can do for your business.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Get Started
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
