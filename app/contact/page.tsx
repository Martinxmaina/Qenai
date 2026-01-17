import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import { Logo } from "@/components/icons/Logo";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Us | QENAI - AI Automation Agency Kenya",
  description: "Get in touch with QENAI. Book a free consultation to discuss AI workflow automation, readiness audits, and custom AI solutions for your African business.",
  keywords: ["contact QENAI", "AI consultation Kenya", "AI automation contact", "AI automation agency Kenya"],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Contact", url: "https://qenai.com/contact" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Let&apos;s Talk</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Get Started with <span className="text-primary italic">AI Automation</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Whether you&apos;re ready to transform your operations or just exploring what&apos;s possible, 
          we&apos;d love to hear from you. Book a free consultation and let&apos;s discuss your AI journey.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Calendly Booking */}
          <NeuCard className="flex-1 p-8 md:p-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Book a Consultation</h2>
            <p className="text-gray-500 mb-6">
              Schedule a 30-minute consultation to discuss your AI automation needs. 
              We&apos;ll explore opportunities and answer your questions.
            </p>
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/martin-qenai/30min?hide_landing_page_details=1&hide_gdpr_banner=1" 
              style={{minWidth: '320px', height: '700px'}}
            ></div>
            <Script 
              src="https://assets.calendly.com/assets/external/widget.js" 
              strategy="lazyOnload"
            />
            {/* Calendly inline widget end */}
          </NeuCard>

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <NeuCard className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </NeuIconContainer>
              <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm">team@qenai.co</p>
              <p className="text-gray-400 text-xs mt-2">We respond within 24 hours</p>
            </NeuCard>

            <NeuCard className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">phone</span>
              </NeuIconContainer>
              <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-500 text-sm">+254 705951082</p>
              <p className="text-gray-400 text-xs mt-2">Mon - Fri: 9am - 6pm EAT</p>
            </NeuCard>

            <NeuCard className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </NeuIconContainer>
              <h3 className="font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
              <p className="text-gray-400 text-xs mt-2">Available for in-person meetings</p>
            </NeuCard>

            <NeuCard className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">schedule</span>
              </NeuIconContainer>
              <h3 className="font-bold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-500 text-sm">Mon - Fri: 9am - 6pm EAT</p>
              <p className="text-gray-400 text-xs mt-2">We&apos;re flexible for different time zones</p>
            </NeuCard>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Not Ready for a Call Yet?</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/audits">
            <NeuButton variant="secondary">Learn About AI Audits →</NeuButton>
          </Link>
          <Link href="/resources">
            <NeuButton variant="secondary">Browse Resources →</NeuButton>
          </Link>
          <Link href="/faq">
            <NeuButton variant="secondary">Read FAQs →</NeuButton>
          </Link>
        </div>
      </section>

      {/* FOMO CTA */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Competitors Are Already Automating
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Every day without AI automation is a day you&apos;re falling behind. 
            The consultation is free - the insights are invaluable.
          </p>
          <p className="text-primary font-medium">
            Average response time: Under 24 hours
          </p>
        </NeuCard>
      </section>
    </main>
  );
}
