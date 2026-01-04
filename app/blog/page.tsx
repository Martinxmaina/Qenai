import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FEATURED_POST = {
  title: "Understanding AI Readiness: A Guide for African Businesses",
  excerpt: "A practical framework for assessing your organization's readiness for AI adoption, with specific considerations for businesses operating in East Africa and across the continent.",
  author: "Glory Munoru",
  authorRole: "Co-Founder & Chief Strategy Officer",
  date: "January 15, 2025",
  readTime: "10 min read",
  category: "AI Readiness",
  image: "from-blue-500 to-indigo-500"
};

const BLOG_POSTS = [
  {
    title: "Workflow Automation: Where to Start",
    excerpt: "How to identify high-impact automation opportunities in your organization and build a roadmap for implementation.",
    author: "Martin Main",
    authorRole: "Co-Founder & Chief Solutions Architect",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Automation"
  },
  {
    title: "AI-Powered Customer Experience in East Africa",
    excerpt: "Exploring how AI chatbots and customer support automation can transform customer experience for businesses across Kenya and East Africa.",
    author: "QEN AI Team",
    authorRole: "",
    date: "January 5, 2025",
    readTime: "7 min read",
    category: "Customer Experience"
  },
  {
    title: "Knowledge Management Systems for Growing Organizations",
    excerpt: "How RAG-based knowledge systems can help your team access information faster and preserve critical knowledge as you scale.",
    author: "Martin Main",
    authorRole: "Co-Founder & Chief Solutions Architect",
    date: "December 28, 2024",
    readTime: "9 min read",
    category: "Knowledge Management"
  },
  {
    title: "Custom AI Models: When to Build vs. Buy",
    excerpt: "A practical guide to deciding whether to use off-the-shelf AI models or invest in custom fine-tuned solutions for your specific use case.",
    author: "QEN AI Team",
    authorRole: "",
    date: "December 20, 2024",
    readTime: "11 min read",
    category: "Technical"
  },
  {
    title: "Automation ROI: Measuring the Real Impact",
    excerpt: "How to quantify the return on investment for workflow automation projects, with real examples from African businesses.",
    author: "Glory Munoru",
    authorRole: "Co-Founder & Chief Strategy Officer",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Business"
  },
  {
    title: "AI for NGOs: Transforming Field Operations",
    excerpt: "Case studies and best practices for using automation and AI to improve efficiency in humanitarian and development organizations.",
    author: "QEN AI Team",
    authorRole: "",
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "Industry Insights"
  }
];

const CATEGORIES = ["All", "AI Readiness", "Automation", "Customer Experience", "Knowledge Management", "Technical", "Business", "Industry Insights", "African Market Focus"];

export default function BlogPage() {
    return (
        <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Blog & Insights</Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Latest in <span className="text-primary">AI Innovation</span>
                    </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights, research, and practical guidance from the QEN AI team on AI adoption, automation, and building smarter systems for African businesses.
                    </p>
                </div>
            </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`h-64 lg:h-full bg-gradient-to-br ${FEATURED_POST.image} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-8xl text-white">auto_awesome</span>
              </div>
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">{FEATURED_POST.category}</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">{FEATURED_POST.title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{FEATURED_POST.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{FEATURED_POST.author}</span>
                      {FEATURED_POST.authorRole && <span className="text-xs">• {FEATURED_POST.authorRole}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{FEATURED_POST.date}</span>
                      <span>•</span>
                      <span>{FEATURED_POST.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-6" asChild>
                  <Link href="/contact">
                    Read Article
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category, i) => (
              <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
                                    </div>
                                </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-3">{post.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">person</span>
                        <span className="font-medium text-foreground">{post.author}</span>
                      </div>
                      {(post as any).authorRole && (
                        <span className="text-xs ml-6">{(post as any).authorRole}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                                        <span>{post.readTime}</span>
                                    </div>
                  </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-primary mb-6 block">mail</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
            Subscribe to Our Newsletter
                    </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest AI insights, research, and product updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
                    </form>
          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
                </div>
            </section>
        </main>
    );
}
