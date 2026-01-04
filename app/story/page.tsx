import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const MILESTONES = [
  {
    year: "2025",
    location: "Nairobi, Kenya",
    title: "Founded QEN AI",
    description: "Two operators recognized the gap between enterprise AI expertise and African business realities. QEN AI is born with a mission to make enterprise-grade AI accessible for African organizations.",
    color: "blue"
  },
  {
    year: "2025",
    location: "First Client Success",
    title: "QEN AI Core v1.0",
    description: "Our first client transformation proves the model: combining deep listening with technical expertise delivers measurable results. Word spreads across East Africa.",
    color: "green"
  },
  {
    year: "2026",
    location: "Rapid Growth",
    title: "Building Track Record Across Sectors",
    description: "From manufacturing to financial services, from NGOs to professional services firms—we prove AI transformation works for African businesses of all sizes.",
    color: "purple"
  },
  {
    year: "2027",
    location: "Continental Vision",
    title: "Trusted AI Partner Across Africa",
    description: "Becoming the go-to AI transformation partner for businesses across the continent, expanding our reach while maintaining our deep understanding of local contexts.",
    color: "orange"
  }
];

const STATS = [
  { value: "2025", label: "Year Founded" },
  { value: "50+", label: "Enterprise Partners" },
  { value: "75+", label: "AI Experts" },
  { value: "3", label: "Global Hubs" }
];

export default function StoryPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            <span>Why QENAI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up">
            Built to Bridge the Gap Between <span className="text-primary">AI Potential and African Reality</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We are building the bridge between complex artificial intelligence and practical enterprise value for African businesses. This is our journey of innovation, resilience, and impact.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                It started with a simple question.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  In 2025, two operators recognized something critical: African businesses face unique operational challenges that off-the-shelf AI tools simply don't address. While enterprise AI expertise existed, it lacked deep understanding of local business contexts—the infrastructure realities, regulatory environments, market dynamics, and resource constraints that define how African organizations actually operate.
                </p>
                <p>
                  They saw too many businesses struggling with either too much complexity—enterprise solutions that required teams of PhDs and massive budgets—or too little capability—basic tools that couldn't handle the nuanced needs of growing African companies.
                </p>
                <p>
                  That insight sparked QEN AI. Our mission from day one has been clear: make enterprise-grade AI accessible, practical, and impactful for African organizations. We combine deep technical expertise with genuine understanding of how businesses operate across East Africa and beyond.
                </p>
                <p>
                  From our first client to building a track record across sectors—from manufacturing to financial services, from NGOs to professional services firms—we've proven that AI transformation doesn't require massive teams or budgets. It requires the right approach: listening first, understanding context, and building solutions that actually work in African business environments.
                </p>
                <p>
                  Today, we're becoming the trusted AI transformation partner for businesses across the continent. We're not just implementing technology—we're building organizational capability, establishing governance, and ensuring that AI adoption delivers real, measurable value.
                </p>
                <p>
                  <span className="text-foreground font-medium">Where we're headed:</span> We envision a future where every African business, regardless of size or sector, can leverage enterprise-grade AI to solve their unique challenges. We're building that future, one successful transformation at a time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: "lightbulb",
                  iconBg: "bg-blue-50 text-primary",
                  title: "Our Vision",
                  description: "A world where AI augments human potential without compromising privacy or control. We believe in tools that empower, not replace. A future where every African business can leverage enterprise-grade AI to solve their unique challenges."
                },
                {
                  icon: "flag",
                  iconBg: "bg-purple-50 text-purple-600",
                  title: "Our Mission",
                  description: "To make enterprise-grade AI accessible, practical, and impactful for African organizations. We combine deep technical expertise with genuine understanding of how businesses operate across East Africa and beyond."
                },
                {
                  icon: "security",
                  iconBg: "bg-teal-50 text-teal-600",
                  title: "Our Pledge",
                  description: "We commit to radical transparency in how our models process data and make decisions. Trust is our currency."
                }
              ].map((item, i) => (
                <Card key={i} className="shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.iconBg}`}>
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <h3 className="font-semibold leading-none tracking-tight text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Key Milestones</h2>
            <p className="text-muted-foreground mt-4 text-lg">The defining moments that shaped who we are today.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2 z-0"></div>

            {/* Milestones */}
            <div className="space-y-12 relative z-10">
              {MILESTONES.map((milestone, index) => (
                <div key={index} className={`relative md:flex items-center justify-between group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`md:w-[45%] mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <Card className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className={`mb-3 border-${milestone.color}-200 bg-${milestone.color}-50 text-${milestone.color}-700`}>
                          {milestone.location}
                        </Badge>
                        <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-background shadow-sm z-20"></div>

                  {/* Year */}
                  <div className={`pl-12 md:pl-0 md:w-[45%] md:flex md:items-center ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <span className="text-5xl font-black text-slate-100 select-none">{milestone.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="p-6">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Be Part of the <span className="text-primary">Next Chapter</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We are always looking for visionary partners and talent to help us write the future of ethical AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-11 px-8 rounded-md text-base font-medium shadow" asChild>
              <Link href="/team">View Career Openings</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-8 rounded-md text-base font-medium" asChild>
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>
      </section>
    </main>
  );
}
