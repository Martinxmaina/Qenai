import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI for NGOs & Non-Profits | QENAI - AI Automation Agency Kenya",
  description: "More impact, less reporting burden. QENAI helps NGOs automate M&E reporting, donor documentation, and program data analysis.",
  keywords: ["AI for NGOs Kenya", "non-profit automation", "M&E reporting AI", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/ngos",
  },
};

const BENEFITS = [
  "Automate M&E reporting and donor documentation",
  "Turn field data into clear insight, faster",
  "Free staff time from repetitive administrative work",
];

const SERVICE_CARDS = [
  {
    icon: "sync",
    title: "Workflow Automation",
    description: "Automate data collection, report generation, and donor communication.",
    href: "/services/automation",
  },
  {
    icon: "query_stats",
    title: "Data & Analytics",
    description: "Dashboards that turn field and program data into clear, actionable insight.",
    href: "/services/knowledge-systems",
  },
  {
    icon: "insights",
    title: "Strategic Advisory",
    description: "AI readiness assessments tailored to program and grant-funded contexts.",
    href: "/services/advisory",
  },
];

export default function NGOsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#E0E5EC]">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://qenai.com" },
            { name: "Solutions", url: "https://qenai.com/solutions" },
            { name: "NGOs & Non-Profits", url: "https://qenai.com/solutions/ngos" },
          ]}
        />

        {/* Hero Section */}
        <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
          <NeuTag className="mb-6 text-lg text-primary">NGOs & Non-Profits</NeuTag>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
            More Impact, <span className="text-primary italic">Less Reporting Burden.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Development work generates enormous data and enormous reporting overhead. AI helps your team spend less time compiling reports and more time on the work that matters.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/audit">
              <NeuButton variant="primary" size="lg">
                Get Your Free AI Audit
              </NeuButton>
            </Link>
            <Link href="/consultation">
              <NeuButton variant="secondary" size="lg">
                Book Free Consultation
              </NeuButton>
            </Link>
          </div>
        </section>

        {/* Benefits Checklist */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <NeuCard className="p-8 md:p-10">
            <ul className="space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-600 text-lg">
                  <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </NeuCard>
        </section>

        {/* Service Cards */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Built For Program & Grant-Funded Work</h2>
            <p className="text-gray-500">Where AI gives time back to the mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card) => (
              <NeuCard key={card.title} className="p-8 flex flex-col">
                <NeuIconContainer size="sm" className="mb-4">
                  <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                </NeuIconContainer>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{card.description}</p>
                <Link href={card.href} className="mt-auto">
                  <NeuButton variant="secondary" size="sm">
                    Learn More →
                  </NeuButton>
                </Link>
              </NeuCard>
            ))}
          </div>
        </section>

        {/* CTA Footer Band */}
        <section className="w-full bg-primary py-16 md:py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Peer Organizations Are Already Automating Their Reporting.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s find where AI frees up the most staff time for your programs.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/audit"
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Your Free AI Audit
              </Link>
              <Link
                href="/consultation"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
