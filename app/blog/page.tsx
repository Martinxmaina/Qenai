import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Blog | QENAI - AI Automation Agency Kenya",
  description: "Insights on AI automation for African businesses. Read articles on workflow automation, AI readiness, custom AI models, and business transformation.",
  keywords: ["AI blog Kenya", "AI automation insights", "business AI articles", "AI automation agency Kenya"],
  alternates: {
    canonical: "/blog",
  },
};

const BLOG_POSTS = [
  {
    title: "Why Your Business Needs an AI Readiness Audit Before Anything Else",
    excerpt: "Before investing in AI tools, you need to understand where AI will actually deliver value. Here's why an audit should be your first step.",
    category: "Strategy",
    date: "Coming Soon"
  },
  {
    title: "The Real Cost of Not Automating: A Kenya Business Perspective",
    excerpt: "Every manual process has a hidden cost. We break down what inefficiency is really costing Kenyan businesses.",
    category: "Automation",
    date: "Coming Soon"
  },
  {
    title: "Building AI That Works in African Contexts",
    excerpt: "Why off-the-shelf AI often fails in African markets and how to build solutions that actually work.",
    category: "Technology",
    date: "Coming Soon"
  },
  {
    title: "5 Signs Your Business is Ready for AI Workflow Automation",
    excerpt: "Not sure if your organization is ready for AI? Here are the indicators that suggest you're primed for automation.",
    category: "Assessment",
    date: "Coming Soon"
  }
];

export default function BlogPage() {
    return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Resources", url: "https://qenai.com/resources" },
          { name: "Blog", url: "https://qenai.com/blog" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Insights</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          QENAI <span className="text-primary italic">Blog</span>
                    </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Practical insights on AI automation, business transformation, and building technology 
          that works for African markets.
                    </p>
            </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Latest Articles</h2>
          <p className="text-gray-500">Fresh perspectives on AI automation</p>
                    </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <NeuCard key={i} className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <NeuTag variant="primary">{post.category}</NeuTag>
                <span className="text-xs text-gray-400">{post.date}</span>
                                    </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <NeuButton variant="secondary" size="sm" disabled>
                Coming Soon
              </NeuButton>
            </NeuCard>
                        ))}
                    </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Explore Resources</h2>
                    </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/resources">
            <NeuButton variant="secondary">Whitepapers →</NeuButton>
          </Link>
          <Link href="/faq">
            <NeuButton variant="secondary">FAQs →</NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary">Case Studies →</NeuButton>
          </Link>
                </div>
            </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get Updates When We Publish
                    </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know when new articles drop.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Subscribe
            </NeuButton>
          </Link>
        </NeuCard>
            </section>
        </main>
    );
}
