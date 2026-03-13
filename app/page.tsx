import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import ServicesGrid from "@/components/services-grid";
import { VisionMission } from "@/components/vision-mission";
import { CTASection } from "@/components/cta-section";
import FAQSection from "@/components/FAQSection";
import { CalendlyCTA } from "@/components/calendly-cta";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
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
