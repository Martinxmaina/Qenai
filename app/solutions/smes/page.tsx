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
  title: "AI for SMEs & Startups | QENAI - AI Automation Agency Kenya",
  description: "Compete like you've got a bigger team. QENAI helps SMEs and startups automate customer service, sales, and admin without hiring.",
  keywords: ["AI for SMEs Kenya", "startup automation", "small business AI Kenya", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/smes",
  },
};

const BENEFITS = [
  "Automate customer service, admin, and follow-ups without hiring",
  "Launch AI tools in weeks, not months",
  "Pay only for what moves the needle — no bloated enterprise packages",
];

const SERVICE_CARDS = [
  {
    icon: "smart_toy",
    title: "Customer Experience AI",
    description: "WhatsApp and chat agents that handle inquiries and bookings around the clock.",
    href: "/services/customer-experience",
  },
  {
    icon: "campaign",
    title: "Sales & Outreach Automation",
    description: "AI-powered lead generation and follow-up sequences that punch above your headcount.",
    href: "/services/automation",
  },
  {
    icon: "task_alt",
    title: "Workflow Automation",
    description: "Automate invoicing, scheduling, and repetitive admin tasks.",
    href: "/services/automation",
  },
];

export default function SMEsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#E0E5EC]">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://qenai.com" },
            { name: "Solutions", url: "https://qenai.com/solutions" },
            { name: "SMEs & Startups", url: "https://qenai.com/solutions/smes" },
          ]}
        />

        {/* Hero Section */}
        <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
          <NeuTag className="mb-6 text-lg text-primary">SMEs & Startups</NeuTag>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
            Compete Like You&apos;ve Got <span className="text-primary italic">a Bigger Team.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Small teams can&apos;t afford to spend hours on work AI can do in minutes. We help SMEs and startups automate the busywork so lean teams can focus on growth.
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
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Built For Lean Teams</h2>
            <p className="text-gray-500">Where AI does the work of a bigger headcount</p>
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
              Your Competitors Are Already Automating the Busywork.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s find the quickest wins for your team — no bloated rollout required.
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
