import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PHASES = [
  {
    id: "discovery",
    title: "Phase 1: Discovery",
    duration: "Week 1-2",
    activities: [
      "Stakeholder interviews (leadership, operations, IT, end users)",
      "Workflow observation and documentation",
      "Current systems and data flow mapping",
      "Pain point and bottleneck identification",
      "Tool and platform inventory"
    ],
    deliverable: "Detailed process maps and current-state documentation"
  },
  {
    id: "analysis",
    title: "Phase 2: Analysis",
    duration: "Week 2-3",
    activities: [
      "Automation opportunity identification across all workflows",
      "Technical feasibility assessment for each opportunity",
      "ROI estimation (time saved, cost reduction, revenue impact)",
      "Resource requirements analysis (budget, skills, infrastructure)",
      "Risk and change management considerations"
    ],
    deliverable: "Comprehensive analysis report with opportunity matrix"
  },
  {
    id: "roadmap",
    title: "Phase 3: Strategic Roadmap",
    duration: "Week 3-4",
    activities: [
      "Prioritization framework (impact vs. effort)",
      "Phased implementation plan (quick wins to complex transformations)",
      "Budget allocation recommendations",
      "Success metrics and KPI definitions",
      "Technology recommendations (platforms, tools, vendors)",
      "Change management strategy"
    ],
    deliverable: "Executive presentation and detailed implementation roadmap"
  },
  {
    id: "presentation",
    title: "Phase 4: Presentation & Planning",
    duration: "Week 4",
    activities: [
      "Executive presentation of findings and recommendations",
      "Technical deep-dive session with IT/operations teams",
      "Q&A and refinement based on feedback",
      "Next-step planning and project scoping"
    ],
    deliverable: "Final roadmap document and recorded presentations"
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Kickoff & Scoping",
    description: "We begin with a kickoff meeting to understand your business model, operational structure, current challenges, and strategic goals."
  },
  {
    step: "02",
    title: "Deep Listening",
    description: "Our team conducts structured interviews and workflow observations with staff at all levels, understanding context, constraints, and human factors."
  },
  {
    step: "03",
    title: "Technical Assessment",
    description: "We evaluate your current technology stack, data infrastructure, integration capabilities, and technical debt."
  },
  {
    step: "04",
    title: "Opportunity Mapping",
    description: "Using our proprietary framework, we map every identified opportunity across dimensions of business impact, technical complexity, and readiness."
  },
  {
    step: "05",
    title: "Strategic Planning",
    description: "We develop a phased roadmap that balances quick wins with longer-term transformational projects."
  },
  {
    step: "06",
    title: "Presentation & Handoff",
    description: "We present our findings in formats designed for different audiences—executives need strategic clarity, technical teams need implementation details."
  }
];

const USE_CASES = [
  {
    title: "Mid-Sized Manufacturing Company",
    challenge: "Manual order processing consuming 20+ hours/week, frequent errors",
    finding: "73% of order data entry could be automated; existing ERP had unused API capabilities",
    impact: "Automated workflow reduced processing time by 85%, eliminated data entry errors, freed up two staff members",
    roi: "7-month payback period"
  },
  {
    title: "NGO with Field Operations",
    challenge: "Field teams spending 30% of time on administrative reporting",
    finding: "Data being collected 3 times across different systems; opportunity for mobile-first collection and automated aggregation",
    impact: "Streamlined data collection reduced admin burden by 65%, improved data quality, enabled real-time reporting",
    roi: "Significant annual cost savings"
  },
  {
    title: "Professional Services Firm",
    challenge: "Client onboarding taking 3-5 days, inconsistent information collection",
    finding: "90% of onboarding could be automated through intelligent forms and workflow automation",
    impact: "Onboarding time reduced to 4 hours, 100% information completeness, better client experience",
    roi: "Capacity to take on 40% more clients without adding staff"
  },
  {
    title: "E-commerce Retailer",
    challenge: "Customer support overwhelmed with repetitive inquiries, 24-hour response times",
    finding: "60% of inquiries were answerable from existing documentation; opportunity for AI chatbot + knowledge base",
    impact: "70% of inquiries handled instantly by AI, response time under 5 minutes, customer satisfaction up 35%",
    roi: "12-month payback; support team refocused on complex issues"
  }
];


export default function AuditsServicePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Service</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Readiness & <span className="text-primary">Workflow Audits</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Understand Before You Automate. A comprehensive assessment of your operations, identifying high-impact automation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Your Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/audit">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">What is an AI Readiness & Workflow Audit?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Most AI implementations fail not because of technology, but because of insufficient understanding of the actual work being done. 
                Our AI Readiness & Workflow Audits provide a comprehensive assessment of your operations, identifying high-impact automation 
                opportunities while accounting for your organization's current capabilities, constraints, and readiness.
              </p>
              <p>
                This is not a generic checklist or automated assessment tool. It's a hands-on discovery process led by our team, involving 
                interviews with your staff, observation of workflows, analysis of data flows, and evaluation of existing systems. The output 
                is a prioritized roadmap that shows you exactly where AI and automation can deliver the greatest value, what it will take to 
                implement, and what return you can expect.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations exploring AI adoption but unsure where to start</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Businesses with operational inefficiencies but unclear on solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Companies that have tried automation tools with limited success</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Leadership teams needing a clear, defensible AI strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Business Impact</h2>
            <p className="text-lg text-muted-foreground">
              Clear ROI identification and strategic clarity for your AI journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">5-10x</div>
                <CardTitle>ROI Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Identify automation opportunities with high return potential</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <CardTitle>Faster Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Prioritized roadmap accelerates decision-making</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">Risk</div>
                <CardTitle>Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Avoid costly implementation mistakes</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">Team</div>
                <CardTitle>Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Get buy-in by involving teams in discovery</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">Secondary Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">description</span>
                <span className="text-muted-foreground">Documented operational processes (valuable even without automation)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">database</span>
                <span className="text-muted-foreground">Identification of data quality issues before they become blockers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">school</span>
                <span className="text-muted-foreground">Team education on AI possibilities relevant to their work</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">route</span>
                <span className="text-muted-foreground">Foundation for phased, strategic automation rollout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Phases */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive 4-phase process designed to give you complete clarity on your AI opportunities.
            </p>
          </div>
          <Tabs defaultValue="discovery" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {PHASES.map((phase) => (
                <TabsTrigger key={phase.id} value={phase.id} className="text-xs sm:text-sm">
                  {phase.title.split(":")[1] || phase.title}
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

      {/* Process & Methodology */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures comprehensive understanding and actionable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <Card key={i} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Technology & Tools</h2>
            <p className="text-lg text-muted-foreground">
              We use industry-standard tools to ensure comprehensive analysis and clear documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Process Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Miro</Badge>
                  <Badge>Lucidchart</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Flow Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Custom Python Scripts</Badge>
                  <Badge>Visualization Tools</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Comprehensive Reports</Badge>
                  <Badge>Visual Aids</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Real Results</h2>
            <p className="text-lg text-muted-foreground">
              See how our audits have helped organizations identify and prioritize automation opportunities.
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
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Audit Finding</h4>
                    <p className="text-foreground">{useCase.finding}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Impact</h4>
                    <p className="text-foreground font-medium">{useCase.impact}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">ROI</h4>
                    <p className="text-foreground font-semibold text-primary">{useCase.roi}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Related Services */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Related Services</h2>
            <p className="text-lg text-muted-foreground">
              Natural next steps after your audit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>AI Automation Design & Deployment</CardTitle>
                <CardDescription>Natural next step after audit</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/automation">
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
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Custom AI Model Development</CardTitle>
                <CardDescription>For identified advanced use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/custom-models">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Start With Clarity
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Every successful AI transformation begins with understanding. Book your audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Your Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/audit">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

