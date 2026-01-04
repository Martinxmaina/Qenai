import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CHALLENGES = [
  {
    title: "Knowledge Management",
    description: "Professional services firms struggle with capturing, organizing, and accessing institutional knowledge across teams."
  },
  {
    title: "Client Onboarding Complexity",
    description: "Complex onboarding processes with multiple documents, compliance checks, and coordination across departments."
  },
  {
    title: "Document Processing",
    description: "Time-consuming document review, analysis, and processing that takes professionals away from high-value work."
  },
  {
    title: "Time Tracking & Billing",
    description: "Manual time tracking and billing processes that are error-prone and time-consuming."
  }
];

const SOLUTIONS = [
  {
    icon: "database",
    title: "Knowledge Management Systems",
    description: "AI-powered knowledge bases that make organizational expertise instantly accessible to your team.",
    href: "/services/knowledge-systems"
  },
  {
    icon: "person_add",
    title: "Client Onboarding Automation",
    description: "Streamlined onboarding workflows with automated document collection and compliance verification.",
    href: "/services/automation"
  },
  {
    icon: "description",
    title: "Document Processing",
    description: "AI-powered document analysis, review, and processing for faster turnaround times.",
    href: "/services/custom-models"
  }
];

const USE_CASES = [
  {
    title: "Professional Services Knowledge Base",
    challenge: "Scattered information across documents, difficulty finding past project insights and best practices",
    solution: "RAG-based knowledge system with semantic search, automated documentation, team-wide access",
    impact: "70-80% time reduction in information searches, 40-60% faster onboarding, consistent knowledge access"
  },
  {
    title: "Legal Document Analysis",
    challenge: "Reviewing contracts takes 4-6 hours per document, high cost, risk of missing critical clauses",
    solution: "Fine-tuned AI model for contract analysis, key term identification, structured reports",
    impact: "Review time reduced from 4-6 hours to 45 minutes, higher consistency, junior associates freed for analysis"
  }
];

export default function ProfessionalServicesPage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Professional Services</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Solutions for <span className="text-primary">Service Firms</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Streamline operations, enhance knowledge management, and automate routine tasks so your team can focus on delivering exceptional client service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/cases">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Optimize Your Service Delivery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional services firms—law firms, consultancies, accounting practices, and advisory firms—rely on 
              knowledge, expertise, and efficient processes. QEN AI helps these organizations capture and leverage 
              institutional knowledge, streamline client onboarding, automate document processing, and free professionals 
              from routine tasks so they can focus on high-value client work. Our solutions are designed to integrate 
              seamlessly with professional workflows while maintaining the quality and accuracy standards your clients expect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Challenges We Solve</h2>
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

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for Professional Services</h2>
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

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Success Stories</h2>
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

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Business Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">70-80%</div>
                <CardTitle>Time Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduction in information search time</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">40-60%</div>
                <CardTitle>Faster Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">New employee time-to-productivity</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">90%</div>
                <CardTitle>Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduction in manual document review time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Choose QEN AI for Professional Services</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">database</span>
                    Knowledge Preservation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Capture and leverage institutional knowledge so expertise is accessible to your entire team.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    Quality & Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our solutions maintain the high standards your clients expect, with human oversight built into every process.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">work</span>
                    Focus on High-Value Work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automate routine tasks so professionals can focus on strategic client work and relationship building.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Explore Other Industries</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button variant="outline" asChild>
              <Link href="/solutions/corporate">Corporate</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/smes">SMEs & Startups</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/ngos">NGOs</Link>
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

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Optimize Your Practice?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI automation can help your firm operate more efficiently and deliver better client service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/audit">Request Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


