import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import { VisionMission } from "@/components/vision-mission";
import { CTASection } from "@/components/cta-section";
import FAQSection from "@/components/FAQSection";
import { CalendlyCTA } from "@/components/calendly-cta";
import { Footer } from "@/components/footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
  title: "QENAI | AI Automation Agency Kenya - Workflow & Business Process AI",
  description:
    "QENAI helps businesses across Kenya and East Africa save time, cut costs, and scale faster with custom AI systems and workflow automation, built on our Audit, Build, Integrate approach.",
  keywords: [
    "AI automation agency Kenya",
    "AI automation Africa",
    "workflow automation Kenya",
    "business process automation AI",
    "AI consulting Kenya",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <main className="homepage min-h-screen bg-slate-900">
      <OrganizationSchema />
      <Navbar />
      <Hero />
      <ServicesGrid />
      <VisionMission />
      <CTASection />
      <FAQSection />
      <CalendlyCTA />
      <Footer />
    </main>
  );
}
