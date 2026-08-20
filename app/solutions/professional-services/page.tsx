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
  title: "AI for Professional Services | QENAI - AI Automation Agency Kenya",
  description: "Bill less time to admin, more to expertise. QENAI helps legal, accounting, and consulting firms automate document work and client intake.",
  keywords: ["AI for law firms Kenya", "AI for accounting firms", "professional services automation", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/professional-services",
  },
};

const BENEFITS = [
  "Cut document review and drafting time significantly",
  "Automate client onboarding and intake",
  "Reduce errors in repetitive, high-volume paperwork",
];

const SERVICE_CARDS = [
  {
    icon: "description",
    title: "Document Processing",
    description: "AI-powered extraction, review, and drafting for contracts, filings, and reports.",
    href: "/services/knowledge-systems",
  },
  {
    icon: "sync",
    title: "Workflow Automation",
    description: "Automate client intake, scheduling, and status updates.",
    href: "/services/automation",
  },
  {
    icon: "psychology",
    title: "Custom AI Models",
    description: "Models trained on your firm's historical work to speed up research and drafting.",
    href: "/services/custom-models",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#E0E5EC]">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://qenai.com" },
            { name: "Solutions", url: "https://qenai.com/solutions" },
            { name: "Professional Services", url: "https://qenai.com/solutions/professional-services" },
          ]}
        />

        {/* Hero Section */}
        <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
          <NeuTag className="mb-6 text-lg text-primary">Professional Services</NeuTag>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
            Bill Less Time to Admin. <span className="text-primary italic">More to Expertise.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Legal, accounting, and consulting firms run on billable hours — every hour lost to manual document work is revenue left on the table. AI helps you handle the routine work faster, so your team&apos;s time goes where it&apos;s worth the most.
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
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Built For Billable-Hour Businesses</h2>
            <p className="text-gray-500">Where AI protects your team's most valuable time</p>
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
              Your Competitors Are Already Billing More, Admin-ing Less.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s find where AI buys back the most billable time for your firm.
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
