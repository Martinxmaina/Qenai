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
  title: "Enterprise AI Solutions | QENAI - AI Automation Agency Kenya",
  description: "Scale decisions, not headcount. QENAI helps corporate enterprises integrate AI across departments, cut decision cycles, and reduce operational costs.",
  keywords: ["enterprise AI Kenya", "corporate AI automation", "AI for large organizations", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/corporate",
  },
};

const BENEFITS = [
  "Integrate AI across departments without disrupting existing systems",
  "Cut decision-making cycles from weeks to days",
  "Reduce operational costs with intelligent process automation",
];

const SERVICE_CARDS = [
  {
    icon: "hub",
    title: "Enterprise Workflow Automation",
    description: "Connect disparate systems and automate cross-departmental processes end-to-end.",
    href: "/services/automation",
  },
  {
    icon: "psychology",
    title: "Custom AI Models",
    description: "Purpose-built models trained on your enterprise data for forecasting, risk, and operations.",
    href: "/services/custom-models",
  },
  {
    icon: "insights",
    title: "Strategic Advisory",
    description: "AI readiness audits and rollout roadmaps built for multi-stakeholder organizations.",
    href: "/services/advisory",
  },
];

export default function CorporatePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#E0E5EC]">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://qenai.com" },
            { name: "Solutions", url: "https://qenai.com/solutions" },
            { name: "Corporate Enterprises", url: "https://qenai.com/solutions/corporate" },
          ]}
        />

        {/* Hero Section */}
        <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
          <NeuTag className="mb-6 text-lg text-primary">Corporate Enterprises</NeuTag>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
            Scale Decisions, <span className="text-primary italic">Not Headcount.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Large organizations run on complex, interlocking workflows. AI helps you move faster across departments, cut operational drag, and make decisions with real-time data instead of quarterly reports.
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
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Built For How Enterprises Operate</h2>
            <p className="text-gray-500">Where AI moves the needle at scale</p>
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
              Your Competitors Are Already Scaling With AI.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s find where AI moves the needle fastest in your organization.
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
