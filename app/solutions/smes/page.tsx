import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CHALLENGES = [
  {
    title: "Limited Budget & Resources",
    description: "SMEs and startups need cost-effective solutions that deliver quick ROI without large upfront investments."
  },
  {
    title: "Rapid Growth & Scaling",
    description: "Growing businesses need solutions that scale with them, avoiding costly re-implementations as they expand."
  },
  {
    title: "Time to Value",
    description: "Startups and SMEs can't wait months for results—they need solutions that deliver impact quickly."
  },
  {
    title: "Limited Technical Expertise",
    description: "Small teams often lack dedicated IT resources, requiring solutions that are easy to adopt and maintain."
  }
];

const SOLUTIONS = [
  {
    icon: "speed",
    title: "Quick-Win Automation",
    description: "Fast implementation of high-impact automations that deliver results in weeks, not months.",
    href: "/services/automation"
  },
  {
    icon: "assessment",
    title: "Rapid AI Readiness Assessment",
    description: "Affordable audits that identify the best automation opportunities for your budget and stage.",
    href: "/services/audits"
  },
  {
    icon: "trending_up",
    title: "Scalable Solutions",
    description: "Automation designed to grow with your business, avoiding costly re-implementations.",
    href: "/services/automation"
  }
];

const USE_CASES = [
  {
    title: "E-commerce Marketing Automation",
    challenge: "50,000+ customer database with manual campaign management and inconsistent segmentation",
    solution: "Automated customer segmentation, AI-powered content generation, multi-channel campaigns",
    impact: "3x campaign velocity, 67% email open rate improvement, 28% conversion increase, significant additional revenue"
  },
  {
    title: "Startup Sales Pipeline Automation",
    challenge: "Growing sales team struggling with manual lead management and follow-up processes",
    solution: "Automated lead capture, intelligent routing, follow-up sequences, CRM integration",
    impact: "40% faster response times, 25% conversion improvement, sales team capacity doubled"
  }
];

export default function SMESolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">SME & Startup Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Solutions for <span className="text-primary">Growing Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Cost-effective AI automation designed for SMEs and startups—quick implementation, fast ROI, and solutions that scale with your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/assessment">Take Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Built for Growth, Priced for Startups</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SMEs and startups face unique challenges: limited budgets, rapid growth, and the need for quick wins. 
              QEN AI specializes in cost-effective automation solutions that deliver measurable impact quickly, 
              without requiring large upfront investments. Our solutions are designed to scale with your business, 
              so you won't need to rebuild as you grow. We understand that every dollar counts, and we focus on 
              delivering the highest ROI automation opportunities first.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Challenges We Solve</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the unique needs of growing businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHALLENGES.map((challenge, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for SMEs & Startups</h2>
            <p className="text-lg text-muted-foreground">
              Fast, affordable automation that delivers quick wins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTIONS.map((solution, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl text-primary">{solution.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                    <Link href={solution.href}>
                      Learn More
                      <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real examples from growing businesses we've helped.
            </p>
          </div>
          <div className="space-y-6">
            {USE_CASES.map((useCase, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Challenge</h4>
                    <p className="text-foreground">{useCase.challenge}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Solution</h4>
                    <p className="text-foreground">{useCase.solution}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Impact</h4>
                    <p className="text-foreground font-medium">{useCase.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Quick Time to Value</h2>
            <p className="text-lg text-muted-foreground">
              Results that matter for growing businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">5-8</div>
                <CardTitle>Months to ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Most clients see positive ROI within 5-8 months</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">4-6</div>
                <CardTitle>Weeks to Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Simple solutions deployed in 4-6 weeks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Flexible Investment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Affordable solutions for growing businesses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose QEN AI */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Choose QEN AI for SMEs & Startups</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">attach_money</span>
                    Cost-Effective Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We focus on high-ROI automation opportunities that fit your budget, avoiding over-engineering 
                    and unnecessary complexity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">speed</span>
                    Quick Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fast deployment means you see results quickly. Simple solutions can be live in 4-6 weeks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    Built to Scale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our solutions grow with your business, so you won't need to rebuild as you scale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Explore Other Industries</h2>
            <p className="text-lg text-muted-foreground">
              See how we serve different sectors with tailored solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button variant="outline" asChild>
              <Link href="/solutions/corporate">Corporate</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/ngos">NGOs</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/professional-services">Professional Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/ecommerce">E-commerce</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/financial">Financial Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's identify the automation opportunities that will deliver the biggest impact for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/assessment">Take Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

