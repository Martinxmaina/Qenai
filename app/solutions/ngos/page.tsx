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
  title: "AI for NGOs & Non-Profits | QENAI - AI Automation Agency Kenya",
  description: "Maximize your impact with AI. Our NGO solutions help humanitarian organizations stretch resources further and reach more people who need help.",
  keywords: ["AI for NGOs", "non-profit AI Kenya", "humanitarian AI solutions", "NGO automation", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/ngos",
  },
};

const NGO_APPLICATIONS = [
  {
    icon: "monitoring",
    title: "Program Monitoring",
    description: "Track program outcomes and impact with AI-powered analytics and reporting."
  },
  {
    icon: "volunteer_activism",
    title: "Donor Relations",
    description: "Automate donor communications and create personalized engagement at scale."
  },
  {
    icon: "assignment",
    title: "Grant Management",
    description: "Streamline grant applications, compliance tracking, and reporting requirements."
  },
  {
    icon: "groups",
    title: "Beneficiary Services",
    description: "Improve service delivery with AI-powered case management and resource allocation."
  }
];

export default function NGOsPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
          { name: "NGOs & Non-Profits", url: "https://qenai.com/solutions/ngos" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">NGO Solutions</NeuTag>
        <Logo size="lg" className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI for NGOs & <span className="text-primary italic">Non-Profits</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Every dollar matters when you&apos;re working to change the world. Our NGO solutions 
          help you maximize impact by automating administrative work, improving program delivery, 
          and making data-driven decisions.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Discuss Your Mission
            </NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary" size="lg">
              See NGO Case Studies
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
              alt="AI for NGOs - Community work and impact"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              More Impact, Less Administration
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Your team joined your organization to change lives, not to fill out spreadsheets. 
              Our AI solutions handle the administrative burden so your people can focus on 
              the work that matters.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Special pricing for registered non-profits
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Integration with common NGO platforms
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Data privacy and compliance built-in
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">AI Applications for NGOs</h2>
          <p className="text-gray-500">Where AI drives the most impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NGO_APPLICATIONS.map((app, i) => (
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
          <Link href="/services/automation">
            <NeuButton variant="secondary">Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/knowledge-systems">
            <NeuButton variant="secondary">Knowledge Systems →</NeuButton>
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
            Let Technology Multiply Your Impact
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            We believe in your mission and want to help you achieve it. Let&apos;s discuss how 
            AI can help you do more with what you have.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Start the Conversation
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
