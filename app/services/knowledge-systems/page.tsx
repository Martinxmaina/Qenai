import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PHASES = [
  {
    id: "audit",
    title: "Knowledge Audit",
    duration: "1-2 weeks",
    activities: [
      "Documentation inventory (locations, formats, accessibility)",
      "Information flow mapping",
      "Common knowledge gaps identification",
      "Employee pain point interviews",
      "Current tool usage assessment"
    ],
    deliverable: "Knowledge ecosystem map and recommendations report"
  },
  {
    id: "design",
    title: "System Design",
    duration: "2-3 weeks",
    activities: [
      "Knowledge architecture design",
      "Information taxonomy and organization",
      "Search and retrieval strategy",
      "Integration planning (Slack, email, existing tools)",
      "User interface design",
      "Access control and permissions structure"
    ],
    deliverable: "System architecture and design specifications"
  },
  {
    id: "development",
    title: "Development & Integration",
    duration: "4-8 weeks",
    activities: [
      "Knowledge base construction or migration",
      "AI-powered search system development (RAG architecture)",
      "Document processing pipeline setup",
      "Integration with existing tools",
      "User interface development",
      "Admin dashboard for knowledge management"
    ],
    deliverable: "Functional knowledge system in staging environment"
  },
  {
    id: "processing",
    title: "Content Processing & Optimization",
    duration: "2-4 weeks",
    activities: [
      "Bulk document ingestion and processing",
      "Content quality review and enhancement",
      "AI model training on your specific knowledge base",
      "Search accuracy optimization",
      "Metadata enrichment"
    ],
    deliverable: "Fully populated and optimized knowledge system"
  },
  {
    id: "deployment",
    title: "Deployment & Adoption",
    duration: "2-3 weeks",
    activities: [
      "Production deployment",
      "Team training sessions",
      "Champions program for adoption",
      "Feedback collection and rapid iteration",
      "Documentation and usage guidelines"
    ],
    deliverable: "Live system with trained users and adoption plan"
  }
];

const USE_CASES = [
  {
    title: "Professional Services Firm Knowledge Base",
    challenge: "Scattered information across documents, difficulty finding past project insights",
    solution: "RAG-based knowledge system with semantic search, automated documentation",
    impact: "70-80% time reduction in information searches, 40-60% faster onboarding"
  },
  {
    title: "Tech Startup Internal Knowledge System",
    challenge: "Growing team struggling with knowledge transfer, repetitive questions to leadership",
    solution: "AI-powered internal chatbot with access to company knowledge base",
    impact: "85% of routine questions answered instantly, 15 hours/week leadership time saved"
  }
];


export default function KnowledgeSystemsServicePage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Service</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Productivity & <span className="text-primary">Knowledge Systems</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Turn Organizational Knowledge Into Competitive Advantage. Make organizational intelligence instantly accessible with AI-powered systems.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">What are Knowledge Systems?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Your organization's collective knowledge—documentation, processes, past decisions, best practices—is one of your most valuable 
                assets. But if people can't find what they need when they need it, that knowledge might as well not exist.
              </p>
              <p>
                Our Productivity & Knowledge Systems make organizational intelligence instantly accessible. We build AI-powered systems that 
                understand your documentation, answer employee questions in natural language, surface relevant information contextually, and 
                even help create and maintain documentation automatically. The result: faster onboarding, more consistent decisions, less 
                time wasted searching, and preserved institutional knowledge.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Growing organizations struggling with knowledge transfer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Companies with distributed or remote teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Businesses losing productivity to information searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations with high employee turnover</span>
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
                <div className="text-4xl font-bold text-primary mb-2">70-80%</div>
                <CardTitle>Time Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Reduction in time spent searching for information</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">40-60%</div>
                <CardTitle>Faster Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">New employee time-to-productivity</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">3-5h</div>
                <CardTitle>Weekly Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Per employee (no longer searching)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">Knowledge</div>
                <CardTitle>Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Preserve critical knowledge when people leave</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What's Included</h2>
          </div>
          <Tabs defaultValue="audit" className="w-full">
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
                <CardTitle>RAG Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Pinecone</Badge>
                  <Badge>Claude/GPT-4</Badge>
                  <Badge>Custom RAG</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Document Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>PDF Processing</Badge>
                  <Badge>Text Extraction</Badge>
                  <Badge>Metadata Enrichment</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Slack</Badge>
                  <Badge>Google Drive</Badge>
                  <Badge>Notion</Badge>
                  <Badge>Confluence</Badge>
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
                <CardTitle>AI-Powered Customer Experience</CardTitle>
                <CardDescription>For external-facing knowledge systems</CardDescription>
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
                <CardTitle>AI Automation Design & Deployment</CardTitle>
                <CardDescription>For workflow automation</CardDescription>
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
                <CardTitle>AI Readiness & Workflow Audits</CardTitle>
                <CardDescription>Identify knowledge management opportunities</CardDescription>
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
            Ready to Unlock Your Organizational Knowledge?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI-powered knowledge systems can transform how your team accesses and uses information.
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

