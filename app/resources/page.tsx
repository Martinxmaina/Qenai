import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RESOURCES = {
  whitepapers: [
    { title: "AI Readiness for African Businesses", description: "A comprehensive guide to assessing and preparing your organization for AI adoption in the African market context", pages: "42 pages" },
    { title: "Workflow Automation Best Practices", description: "Practical strategies for identifying and automating high-impact workflows in your organization", pages: "38 pages" },
    { title: "AI Implementation ROI Guide", description: "How to measure and maximize return on investment for AI and automation projects", pages: "35 pages" }
  ],
  ebooks: [
    { title: "The QEN AI Automation Playbook", description: "Step-by-step guide to implementing automation solutions that deliver measurable results", pages: "110 pages" },
    { title: "AI Readiness Assessment Guide", description: "Complete framework for evaluating your organization's readiness for AI transformation", pages: "88 pages" }
  ],
  webinars: [
    { title: "Getting Started with AI Automation", description: "Introduction to workflow automation and how to identify opportunities in your business", duration: "55 min" },
    { title: "AI for African Businesses: Opportunities & Challenges", description: "Exploring how AI can transform operations for businesses across East Africa", duration: "60 min" },
    { title: "Customer Experience Automation", description: "How to implement AI-powered customer support that scales with your business", duration: "50 min" }
  ],
  tools: [
    { title: "AI Readiness Assessment Tool", description: "Interactive assessment to evaluate your organization's AI maturity and readiness", icon: "calculate", href: "/assessment" },
    { title: "ROI Calculator", description: "Estimate potential return on investment for automation and AI projects", icon: "payments", href: "/contact" },
    { title: "Automation Opportunity Finder", description: "Identify high-impact automation opportunities in your workflows", icon: "search", href: "/audit" }
  ]
};

export default function ResourcesPage() {
    return (
        <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Resources</Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Knowledge to <span className="text-primary">Accelerate</span> Your AI Journey
                    </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Free guides, tools, and insights to help African businesses navigate AI adoption and automation.
          </p>
                </div>
            </section>

      {/* Whitepapers */}
      <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Whitepapers</h2>
              <p className="text-lg text-muted-foreground">In-depth research and analysis on AI adoption, automation, and best practices for African businesses.</p>
            </div>
                            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.whitepapers.map((paper, i) => (
              <Card key={i} className="hover:shadow-lg transition-all group border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">description</span>
                                </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{paper.title}</CardTitle>
                  <CardDescription>{paper.description}</CardDescription>
                            </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{paper.pages}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact">Download</Link>
                      </Button>
                    </div>
                </CardContent>
                        </Card>
            ))}
          </div>
        </div>
      </section>

      {/* eBooks */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">eBooks</h2>
              <p className="text-lg text-muted-foreground">Comprehensive guides covering AI strategy, automation, and implementation for growing businesses.</p>
                            </div>
                                </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.ebooks.map((book, i) => (
              <Card key={i} className="hover:shadow-lg transition-all group border-2 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-24 h-32 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-5xl text-white">menu_book</span>
                            </div>
                                <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{book.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{book.pages}</span>
                          <Button variant="default" size="sm" asChild>
                            <Link href="/contact">Download</Link>
                                    </Button>
                                </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
            ))}
          </div>
                                    </div>
      </section>

      {/* Webinars */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
                                    <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Webinars & Recordings</h2>
              <p className="text-lg text-muted-foreground">Learn from our experts through recorded sessions and live events.</p>
                                    </div>
                                </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.webinars.map((webinar, i) => (
              <Card key={i} className="hover:shadow-lg transition-all group border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">play_circle</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{webinar.title}</CardTitle>
                  <CardDescription>{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{webinar.duration}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact">Watch</Link>
                                </Button>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
                        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Free Tools</h2>
              <p className="text-lg text-muted-foreground">Interactive calculators and assessment tools.</p>
                                        </div>
                                    </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.tools.map((tool, i) => (
              <Card key={i} className="hover:shadow-lg transition-all group border-2 hover:border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-3xl">{tool.icon}</span>
                                    </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{tool.description}</p>
                  <Button className="w-full" asChild>
                    <Link href={tool.href || "/assessment"}>Try It Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
                    </div>
                </div>
            </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Need More <span className="text-primary">Guidance?</span>
                    </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our team is here to help you navigate your AI journey with personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/audit">Free AI Audit</Link>
            </Button>
          </div>
                </div>
            </section>
        </main>
    );
}
