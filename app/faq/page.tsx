import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "FAQs | QENAI - AI Automation Agency Kenya",
  description: "Get answers to common questions about AI automation, our services, and how QENAI helps African businesses transform with artificial intelligence.",
  keywords: ["AI FAQ", "AI automation questions", "AI consulting FAQ", "AI automation agency Kenya"],
  alternates: {
    canonical: "/faq",
  },
};

const FAQS = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is AI workflow automation?",
        a: "AI workflow automation uses artificial intelligence to handle repetitive business tasks automatically. This includes processing documents, responding to emails, generating reports, and routing requests - without human intervention."
      },
      {
        q: "How do I know if my business is ready for AI?",
        a: "If you have documented processes with repeatable steps, digital data sources, and pain points around manual work, you're likely ready for AI. Our free AI readiness audit can help you identify specific opportunities."
      },
      {
        q: "How long does it take to implement AI automation?",
        a: "Simple automations can be deployed in weeks. More complex solutions involving custom models or deep integrations typically take 2-4 months. We always start with quick wins to demonstrate value early."
      }
    ]
  },
  {
    category: "Services & Process",
    questions: [
      {
        q: "What does an AI readiness audit involve?",
        a: "We interview stakeholders, observe workflows, map your systems, and identify automation opportunities. You receive a detailed report with prioritized recommendations, ROI estimates, and a suggested implementation roadmap."
      },
      {
        q: "Do you build custom AI models or use existing tools?",
        a: "Both. We assess what's needed for your use case. Many problems can be solved with existing tools; others require custom models trained on your data. We recommend the approach that delivers the best results at the right cost."
      },
      {
        q: "How do you ensure AI solutions work in African contexts?",
        a: "We build and train solutions with local data, test with real African use cases, and design for the infrastructure realities of the region. Our team has deep experience implementing technology in African markets."
      }
    ]
  },
  {
    category: "Cost & ROI",
    questions: [
      {
        q: "How much does AI automation cost?",
        a: "Costs vary based on complexity. Simple automations start in the thousands of dollars; comprehensive transformations can be larger investments. We always structure projects to prove ROI before major commitments."
      },
      {
        q: "What kind of ROI can I expect?",
        a: "Typical clients see significant time savings on automated processes, reduced error rates, and freed capacity for higher-value work. We provide specific ROI projections during the audit phase based on your situation."
      },
      {
        q: "Is there a free consultation available?",
        a: "Yes. We offer free initial consultations to understand your challenges and explore whether we're a good fit. No obligation, no pressure."
      }
    ]
  },
  {
    category: "Security & Support",
    questions: [
      {
        q: "How do you handle data security?",
        a: "Data security is paramount. We follow industry best practices for encryption, access control, and data handling. For sensitive industries, we can deploy solutions in your own infrastructure."
      },
      {
        q: "What support do you provide after implementation?",
        a: "We offer ongoing support packages that include monitoring, maintenance, and optimization. We also provide training to ensure your team can manage day-to-day operations."
      },
      {
        q: "Will you train our team to use the AI systems?",
        a: "Absolutely. Knowledge transfer is part of every engagement. We want your team to understand and own the systems we implement, not be dependent on us forever."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Resources", url: "https://qenai.com/resources" },
          { name: "FAQs", url: "https://qenai.com/faq" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Support</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Frequently Asked <span className="text-primary italic">Questions</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Got questions about AI automation? We&apos;ve got answers. If you don&apos;t find what 
          you&apos;re looking for, reach out - we&apos;re happy to help.
        </p>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        {FAQS.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-xl font-bold text-gray-700 mb-6">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((faq, j) => (
                <NeuCard key={j} className="p-6" hover={false}>
                  <h3 className="font-bold text-gray-800 mb-3">{faq.q}</h3>
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </NeuCard>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Explore More</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/resources">
            <NeuButton variant="secondary">Resources →</NeuButton>
          </Link>
          <Link href="/services/audits">
            <NeuButton variant="secondary">AI Readiness Audit →</NeuButton>
          </Link>
          <Link href="/contact">
            <NeuButton variant="secondary">Contact Us →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out and we&apos;ll get back to you with answers.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Contact Us
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
