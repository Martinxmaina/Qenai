import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Resources & Guides | QENAI - AI Automation Agency Kenya",
  description: "Free AI resources for African businesses. Download whitepapers, guides, and templates to help you understand and implement AI automation effectively.",
  keywords: ["AI resources", "AI guides Kenya", "AI whitepaper", "AI automation guide", "AI automation agency Kenya"],
  alternates: {
    canonical: "/resources",
  },
};

const WHITEPAPERS = [
  {
    title: "AI Readiness Assessment Framework",
    description: "A structured approach to evaluating your organization's readiness for AI adoption.",
    type: "Whitepaper",
    icon: "description"
  },
  {
    title: "ROI Calculator for Workflow Automation",
    description: "Estimate the potential returns from automating your key business processes.",
    type: "Tool",
    icon: "calculate"
  },
  {
    title: "AI Governance Best Practices",
    description: "Guidelines for implementing AI responsibly in your organization.",
    type: "Guide",
    icon: "gavel"
  }
];

const GUIDES = [
  {
    title: "Getting Started with AI Automation",
    description: "A beginner's guide to understanding what AI can do for your business.",
    readTime: "10 min read"
  },
  {
    title: "Choosing the Right AI Use Cases",
    description: "How to identify which processes are best suited for AI automation.",
    readTime: "8 min read"
  },
  {
    title: "Building an AI-Ready Team",
    description: "Skills and structures needed to successfully adopt AI in your organization.",
    readTime: "12 min read"
  }
];

export default function ResourcesPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Resources", url: "https://qenai.com/resources" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Learning Center</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI Resources & <span className="text-primary italic">Guides</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Knowledge is the first step to transformation. Explore our collection of free resources 
          designed to help African businesses understand and leverage AI automation.
        </p>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto" id="whitepapers">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Whitepapers & Tools</h2>
          <p className="text-gray-500">In-depth resources for strategic planning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHITEPAPERS.map((paper, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{paper.icon}</span>
              </NeuIconContainer>
              <NeuTag variant="primary" className="mb-4">{paper.type}</NeuTag>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{paper.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {paper.description}
              </p>
              <Link href="/contact">
                <NeuButton variant="secondary" size="sm">
                  Download →
                </NeuButton>
              </Link>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Quick Guides</h2>
          <p className="text-gray-500">Easy-to-digest articles on key AI topics</p>
        </div>

        <div className="space-y-4">
          {GUIDES.map((guide, i) => (
            <NeuCard key={i} className="p-6" hover={false}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{guide.title}</h3>
                  <p className="text-sm text-gray-500">{guide.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">{guide.readTime}</span>
                  <Link href="/blog">
                    <NeuButton variant="secondary" size="sm">
                      Read →
                    </NeuButton>
                  </Link>
                </div>
              </div>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Explore More</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/blog">
            <NeuButton variant="secondary">Blog Articles →</NeuButton>
          </Link>
          <Link href="/assessment">
            <NeuButton variant="secondary">AI Assessment Tool →</NeuButton>
          </Link>
          <Link href="/faq">
            <NeuButton variant="secondary">FAQs →</NeuButton>
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated on AI Trends
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Get monthly insights on AI automation, case studies, and practical tips delivered 
            to your inbox.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Subscribe to Newsletter
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
