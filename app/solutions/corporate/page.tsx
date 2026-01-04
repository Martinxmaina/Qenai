import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CHALLENGES = [
  {
    title: "Complex Multi-Department Workflows",
    description: "Large organizations struggle with coordinating processes across multiple departments, leading to bottlenecks and inefficiencies."
  },
  {
    title: "Enterprise System Integration",
    description: "Integrating AI solutions with existing enterprise systems (ERP, CRM, legacy systems) requires specialized expertise."
  },
  {
    title: "Compliance & Security Requirements",
    description: "Corporate environments demand strict compliance with regulations and robust security frameworks for AI implementations."
  },
  {
    title: "Scale & Performance",
    description: "Enterprise solutions must handle high volumes, maintain performance, and scale seamlessly as operations grow."
  }
];

const SOLUTIONS = [
  {
    icon: "workflow",
    title: "AI Readiness & Workflow Audits",
    description: "Comprehensive assessment of enterprise operations to identify high-impact automation opportunities.",
    href: "/services/audits"
  },
  {
    icon: "settings",
    title: "AI Automation Design & Deployment",
    description: "End-to-end automation solutions that integrate seamlessly with enterprise systems.",
    href: "/services/automation"
  },
  {
    icon: "support_agent",
    title: "AI-Powered Customer Experience",
    description: "Enterprise-grade customer support automation with multi-channel deployment.",
    href: "/services/customer-experience"
  },
  {
    icon: "database",
    title: "Productivity & Knowledge Systems",
    description: "Enterprise knowledge management systems for large-scale organizations.",
    href: "/services/knowledge-systems"
  }
];

const USE_CASES = [
  {
    title: "Financial Services Client Onboarding",
    challenge: "3-5 day onboarding process with 30+ documents and compliance verification",
    solution: "Intelligent multi-step forms, automated document collection, AI-powered compliance checks",
    impact: "Onboarding time reduced to 4-8 hours, 100% compliance, 3x client capacity"
  },
  {
    title: "Invoice Processing Automation",
    challenge: "200+ vendor invoices monthly requiring manual data entry and approval routing",
    solution: "AI-powered data extraction, automatic PO matching, smart approval routing",
    impact: "90% reduction in manual entry, 3 days to 4 hours processing time, significant annual savings"
  },
  {
    title: "Enterprise Knowledge Management",
    challenge: "Distributed team of 120+ employees with inconsistent information access",
    solution: "AI-powered internal chatbot, automated documentation, smart search across systems",
    impact: "85% of routine questions answered instantly, 15 hours/week leadership time saved"
  }
];

export default function CorporateSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Corporate Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Enterprise-Grade AI Solutions for <span className="text-primary">Large Organizations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Transform complex, multi-department operations with AI automation designed for enterprise scale, security, and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Enterprise Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/cases">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Built for Enterprise Scale</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Corporate enterprises face unique challenges: complex workflows spanning multiple departments, 
              integration with legacy systems, strict compliance requirements, and the need for solutions that 
              scale with organizational growth. QEN AI specializes in enterprise-grade AI implementations that 
              account for these realities, delivering automation that integrates seamlessly with your existing 
              infrastructure while maintaining the security and compliance standards your organization requires.
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Common Enterprise Challenges</h2>
            <p className="text-lg text-muted-foreground">
              We understand the complexities large organizations face and design solutions accordingly.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for Corporate Enterprises</h2>
            <p className="text-lg text-muted-foreground">
              Our enterprise-focused services address the unique needs of large organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Enterprise Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real examples of how we've helped large organizations transform their operations.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Enterprise Business Impact</h2>
            <p className="text-lg text-muted-foreground">
              Measurable results from our corporate implementations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">400%</div>
                <CardTitle>Average ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Typical return on investment for enterprise automation projects</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">50-80%</div>
                <CardTitle>Time Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average reduction in processing time for automated workflows</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Significant Annual Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ongoing operational cost reduction depending on scale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose QEN AI */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Choose QEN AI for Enterprise Solutions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">security</span>
                    Enterprise Security & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We design every solution with enterprise security standards in mind, ensuring compliance 
                    with industry regulations and your organization's security policies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">integration_instructions</span>
                    Seamless Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our solutions integrate with your existing enterprise systems—ERP, CRM, legacy systems—without 
                    disrupting current operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    Proven at Scale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We've implemented solutions for large organizations handling high volumes, ensuring 
                    performance and scalability from day one.
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
              <Link href="/solutions/smes">SMEs & Startups</Link>
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
            Ready to Transform Your Enterprise Operations?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how QEN AI can address your enterprise challenges with scalable, secure AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/audit">Request Enterprise Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

