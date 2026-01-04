import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PHASES = [
  {
    id: "mapping",
    title: "Customer Journey Mapping",
    duration: "1-2 weeks",
    activities: [
      "Analysis of current customer inquiry patterns",
      "Identification of common questions and request types",
      "Support ticket categorization and volume analysis",
      "Customer pain point identification",
      "Success metrics definition"
    ],
    deliverable: "Customer interaction analysis report"
  },
  {
    id: "design",
    title: "Solution Design",
    duration: "2-3 weeks",
    activities: [
      "Conversational flow design",
      "Knowledge base organization and enrichment",
      "Escalation logic and handoff procedures",
      "Integration planning (CRM, ticketing, business systems)",
      "Channel strategy (web chat, WhatsApp, email, SMS)",
      "Brand voice and tone guidelines for AI"
    ],
    deliverable: "Comprehensive design document with conversation flow diagrams"
  },
  {
    id: "development",
    title: "Development & Training",
    duration: "4-8 weeks",
    activities: [
      "AI model selection and fine-tuning",
      "Knowledge base integration (RAG system implementation)",
      "Conversational interface development",
      "CRM and business system integration",
      "Multi-channel deployment",
      "Human handoff workflow implementation"
    ],
    deliverable: "Functional AI customer experience system in staging"
  },
  {
    id: "testing",
    title: "Testing & Refinement",
    duration: "2-3 weeks",
    activities: [
      "Internal testing with real customer scenarios",
      "Beta testing with select customers",
      "Accuracy and tone refinement",
      "Performance optimization",
      "Edge case handling",
      "Staff training on AI collaboration"
    ],
    deliverable: "Production-ready system with test results"
  },
  {
    id: "launch",
    title: "Launch & Optimization",
    duration: "Ongoing",
    activities: [
      "Phased rollout (starting with limited hours or channels)",
      "Performance monitoring and analytics",
      "Continuous learning and improvement",
      "Monthly optimization based on interaction data",
      "Quarterly knowledge base updates"
    ],
    deliverable: "Live system with performance dashboards"
  }
];

const USE_CASES = [
  {
    title: "E-Commerce Customer Support",
    challenge: "High volume of customer inquiries, need for 24/7 support, inconsistent response quality",
    solution: "AI-powered chatbot with product knowledge, order tracking, return processing, human handoff",
    impact: "70%+ inquiries handled by AI, 60-80% cost reduction, 25-40% CSAT improvement, 15-25% revenue increase"
  },
  {
    title: "Financial Services Client Onboarding Assistant",
    challenge: "Complex onboarding with multiple documents and compliance requirements",
    solution: "AI assistant guiding clients through onboarding, document collection, compliance verification",
    impact: "Onboarding time reduced by 60%, improved client experience, reduced support burden"
  }
];


export default function CustomerExperienceServicePage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Service</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI-Powered Customer <span className="text-primary">Experience Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Delight Customers While Scaling Support. Intelligent automation handling routine inquiries instantly, while your human team focuses on complex issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/audit">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">What is AI-Powered Customer Experience?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Modern customers expect instant, accurate, helpful responses—24/7. But hiring enough support staff to meet those expectations 
                is prohibitively expensive for most businesses. Our AI-Powered Customer Experience Solutions give you the best of both worlds: 
                intelligent automation handling routine inquiries instantly, while your human team focuses on complex issues and relationship building.
              </p>
              <p>
                We build conversational AI systems that actually understand your business, provide accurate information, handle transactions, 
                and escalate gracefully when human intervention is needed. These aren't generic chatbots—they're custom-trained systems 
                integrated with your knowledge base, CRM, and business systems, able to handle the specific queries your customers have.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Businesses with high-volume customer inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Companies struggling with long response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations wanting to offer 24/7 support without 24/7 staffing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Teams dealing with repetitive customer questions</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">&lt;30s</div>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">For 70%+ of inquiries (from hours/days)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">5-10x</div>
                <CardTitle>Support Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Handle more inquiries with same team</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">60-80%</div>
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Reduce cost-per-interaction</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">25-40%</div>
                <CardTitle>CSAT Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Through instant, accurate responses</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              <strong>Revenue Impact:</strong> Faster response times increase conversion rates by 20-35%. 
              24/7 availability captures inquiries during off-hours (15-25% revenue increase for e-commerce).
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What's Included</h2>
          </div>
          <Tabs defaultValue="mapping" className="w-full">
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
                <CardTitle>AI Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Custom RAG Systems</Badge>
                  <Badge>Claude/GPT-4</Badge>
                  <Badge>Voice AI (Vapi, Retell)</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Web Chat</Badge>
                  <Badge>WhatsApp</Badge>
                  <Badge>SMS</Badge>
                  <Badge>Email</Badge>
                  <Badge>Voice</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>CRM Systems</Badge>
                  <Badge>Helpdesk Platforms</Badge>
                  <Badge>E-commerce Platforms</Badge>
                  <Badge>Payment Processing</Badge>
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
                <CardTitle>AI Automation Design & Deployment</CardTitle>
                <CardDescription>For internal process automation</CardDescription>
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
                <CardTitle>Productivity & Knowledge Systems</CardTitle>
                <CardDescription>For knowledge base systems</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/knowledge-systems">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>AI Readiness & Workflow Audits</CardTitle>
                <CardDescription>Identify customer experience opportunities</CardDescription>
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
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Scale Your Customer Support?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI can help you provide 24/7 support while reducing costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
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

