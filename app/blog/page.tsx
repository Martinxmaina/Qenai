import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { BlogCard } from "@/components/blog/blog-card";
import { Metadata } from "next";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI Blog | QENAI - AI Automation Agency Kenya",
  description: "Insights on AI automation, machine learning, and business transformation.",
  alternates: {
    canonical: "/blog",
  },
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await fetchQuery(api.posts.list, {});

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-gray-500">
                No published articles yet. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
