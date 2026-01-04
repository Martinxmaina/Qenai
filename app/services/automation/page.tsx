import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PHASES = [
  {
    id: "design",
    title: "Solution Design",
    duration: "1-2 weeks",
    activities: [
      "Detailed requirements gathering and workflow documentation",
      "Technical architecture planning",
      "Integration mapping (APIs, databases, tools)",
      "Error handling and fallback strategy design",
      "Security and data protection review",
      "Timeline and milestone planning"
    ],
    deliverable: "Technical specification document and architecture diagrams"
  },
  {
    id: "development",
    title: "Development",
    duration: "2-6 weeks",
    activities: [
      "Workflow construction using appropriate platforms",
      "API integration development",
      "Custom logic implementation",
      "Database design and setup (if needed)",
      "AI model integration",
      "Error handling and notification systems"
    ],
    deliverable: "Functional automation workflow in staging environment"
  },
  {
    id: "testing",
    title: "Testing & Optimization",
    duration: "1-2 weeks",
    activities: [
      "Quality assurance testing across scenarios",
      "Performance optimization",
      "Edge case handling verification",
      "Load testing (for high-volume workflows)",
      "Security review and penetration testing",
      "Client feedback incorporation"
    ],
    deliverable: "Production-ready system with test results documentation"
  },
  {
    id: "deployment",
    title: "Deployment",
    duration: "1 week",
    activities: [
      "Production environment setup",
      "Data migration (if applicable)",
      "System monitoring configuration",
      "Documentation (technical and user-facing)",
      "Team training sessions",
      "Go-live support"
    ],
    deliverable: "Live system with complete documentation"
  },
  {
    id: "stabilization",
    title: "Stabilization & Support",
    duration: "4 weeks post-launch",
    activities: [
      "Daily monitoring and rapid response to any issues",
      "Performance tracking against defined KPIs",
      "User feedback collection and minor adjustments",
      "Knowledge transfer to your team"
    ],
    deliverable: "Performance report and optimized system"
  }
];

const USE_CASES = [
  {
    title: "Sales Pipeline Automation",
    challenge: "Manual lead management, inconsistent follow-up, lost opportunities",
    solution: "Automated lead capture, intelligent routing, follow-up sequences, CRM integration",
    impact: "40% faster response times, 25% conversion improvement, sales team capacity doubled"
  },
  {
    title: "Client Onboarding Automation",
    challenge: "3-5 day onboarding process with 30+ documents and compliance verification",
    solution: "Intelligent multi-step forms, automated document collection, AI-powered compliance checks",
    impact: "Onboarding time reduced to 4-8 hours, 100% compliance, 3x client capacity"
  },
  {
    title: "Invoice Processing & Financial Automation",
    challenge: "200+ vendor invoices monthly requiring manual data entry and approval routing",
    solution: "AI-powered data extraction, automatic PO matching, smart approval routing",
    impact: "90% reduction in manual entry, 3 days to 4 hours processing time, significant annual savings"
  },
  {
    title: "Marketing Campaign Orchestration",
    challenge: "50,000+ customer database with manual campaign management",
    solution: "Automated segmentation, AI content generation, multi-channel campaigns",
    impact: "3x campaign velocity, 67% email open rate improvement, 28% conversion increase, significant additional revenue"
  },
  {
    title: "Internal Knowledge Management & Support Automation",
    challenge: "Repetitive questions consuming leadership time, inconsistent information access",
    solution: "AI-powered internal chatbot, automated documentation, smart search",
    impact: "85% of routine questions answered instantly, 15 hours/week leadership time saved, 40% faster onboarding"
  }
];


export default function AutomationServicePage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Service</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Automation Design & <span className="text-primary">Deployment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            From Repetitive Tasks to Strategic Work. Transform operational inefficiencies into robust, scalable automated systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/audit">Start with Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">What is AI Automation?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Your team shouldn't be spending hours on work that software can handle in seconds. Our AI Automation Design & Deployment 
                service transforms identified operational inefficiencies into robust, scalable automated systems that run reliably in the 
                background, freeing your people to focus on high-value work.
              </p>
              <p>
                We don't just connect a few apps and call it done. We design end-to-end automation solutions that handle complex business 
                logic, integrate seamlessly with your existing systems, include proper error handling and monitoring, and are maintainable 
                over time. Whether it's automating your sales pipeline, streamlining internal operations, or building intelligent data 
                processing workflows, we deliver production-grade systems backed by ongoing support.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations with identified automation opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Businesses spending significant time on repetitive, rule-based tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Companies needing custom workflows that off-the-shelf tools can't handle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Teams ready to invest in scalable operational infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Business Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">50-80%</div>
                <CardTitle>Time Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Reduction in time spent on automated processes</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">400%</div>
                <CardTitle>Average ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">In first year</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">6-9</div>
                <CardTitle>Months Payback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Typical payback period</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">95%+</div>
                <CardTitle>Error Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Decrease in human error for automated tasks</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Ongoing operational cost reduction annually (depending on scale)
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What's Included</h2>
          </div>
          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {PHASES.map((phase) => (
                <TabsTrigger key={phase.id} value={phase.id} className="text-xs">
                  {phase.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            {PHASES.map((phase) => (
              <TabsContent key={phase.id} value={phase.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">arrow_right</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Deliverable:</h4>
                      <p className="text-muted-foreground">{phase.deliverable}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Technology & Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Automation Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>n8n</Badge>
                  <Badge>Make</Badge>
                  <Badge>Zapier</Badge>
                  <Badge>Go High Level</Badge>
                  <Badge>Custom Python</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>OpenAI API</Badge>
                  <Badge>Claude API</Badge>
                  <Badge>Custom Models</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Databases & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Airtable</Badge>
                  <Badge>Pinecone</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Use Cases</h2>
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Related Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>AI Readiness & Workflow Audits</CardTitle>
                <CardDescription>Identify automation opportunities first</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/audits">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>AI-Powered Customer Experience</CardTitle>
                <CardDescription>For customer-facing automation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/customer-experience">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Advisory & Capacity Building</CardTitle>
                <CardDescription>For ongoing support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/advisory">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's transform your repetitive tasks into strategic advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/audit">Start with Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

