import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CHALLENGES = [
  {
    title: "Regulatory Compliance",
    description: "Financial institutions must comply with strict regulations, requiring automated compliance monitoring and reporting."
  },
  {
    title: "Risk Assessment & Fraud Detection",
    description: "Real-time risk evaluation and fraud detection are critical for protecting customers and maintaining trust."
  },
  {
    title: "Customer Onboarding",
    description: "Complex KYC processes, document verification, and compliance checks make onboarding time-consuming."
  },
  {
    title: "Operational Efficiency",
    description: "Financial services require high accuracy and efficiency in processing transactions, loans, and customer requests."
  }
];

const SOLUTIONS = [
  {
    icon: "security",
    title: "Compliance Automation",
    description: "Automated compliance monitoring, reporting, and regulatory documentation systems.",
    href: "/services/automation"
  },
  {
    icon: "shield",
    title: "Risk & Fraud Detection",
    description: "AI-powered risk assessment and real-time fraud detection systems.",
    href: "/services/custom-models"
  },
  {
    icon: "person_add",
    title: "Customer Onboarding",
    description: "Streamlined KYC processes with automated document verification and compliance checks.",
    href: "/services/automation"
  }
];

const USE_CASES = [
  {
    title: "Financial Services Client Onboarding",
    challenge: "3-5 day onboarding process with 30+ documents, compliance verification, and KYC requirements",
    solution: "Intelligent multi-step forms, automated document collection, AI-powered compliance checks, KYC integration",
    impact: "Onboarding time reduced to 4-8 hours, 100% compliance, 80% reduction in communications, 3x client capacity"
  },
  {
    title: "Financial Analysis & Risk Assessment",
    challenge: "General AI models lack context on African markets, economic dynamics, and regulatory environment",
    solution: "Fine-tuned model on proprietary research, market data, regulatory frameworks, automated analysis reports",
    impact: "70% faster research reports, consistent analytical framework, analysts focus on insights, competitive advantage"
  }
];

export default function FinancialSolutionsPage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Financial Services</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Solutions for <span className="text-primary">Financial Institutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Enhance compliance, automate risk assessment, streamline customer onboarding, and improve operational efficiency with AI solutions built for financial services.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Built for Financial Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Financial institutions operate in a highly regulated environment where accuracy, compliance, and security 
              are paramount. QEN AI helps financial services organizations automate compliance monitoring, enhance 
              risk assessment and fraud detection, streamline customer onboarding with KYC automation, and improve 
              operational efficiency. Our solutions are designed with financial services requirements in mind, including 
              data security, audit trails, and regulatory compliance. We understand the unique context of African 
              financial markets and design solutions that account for local regulations, payment systems, and market dynamics.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for Financial Services</h2>
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
                <div className="text-5xl font-bold text-primary mb-2">99.7%</div>
                <CardTitle>Accuracy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">In compliance and risk assessment systems</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">4-8</div>
                <CardTitle>Hours Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduced from 3-5 days with automation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <CardTitle>Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Document collection and verification compliance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Choose QEN AI for Financial Services</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">security</span>
                    Security & Compliance First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every solution is designed with financial services security standards and regulatory compliance in mind.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    High Accuracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our systems maintain the high accuracy standards required for financial operations, with human oversight built in.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">public</span>
                    African Market Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understanding of local regulations, payment systems (M-Pesa, etc.), and African financial market dynamics.
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
              <Link href="/solutions/professional-services">Professional Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/solutions/ecommerce">E-commerce</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI automation can help your institution enhance compliance, reduce risk, and improve efficiency.
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




