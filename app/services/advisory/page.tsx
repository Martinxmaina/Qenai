import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SERVICE_TYPES = [
  {
    id: "executive",
    title: "Executive AI Strategy Advisory",
    engagement: "Quarterly strategic advisory + monthly check-ins",
    features: [
      "Quarterly strategic planning sessions with leadership team",
      "AI opportunity identification and prioritization",
      "Technology evaluation and vendor selection guidance",
      "AI governance framework development",
      "Risk assessment and mitigation planning",
      "ROI tracking and success metrics definition",
      "Competitive intelligence on AI trends relevant to your industry",
      "Monthly check-in calls for ongoing guidance"
    ]
  },
  {
    id: "technical",
    title: "Technical Training & Capacity Building",
    engagement: "Custom training programs",
    features: [
      "Hands-on training for technical teams on AI tools and platforms",
      "Best practices for AI implementation and maintenance",
      "Code reviews and technical guidance",
      "Architecture design support",
      "Troubleshooting and problem-solving sessions",
      "Knowledge transfer to build internal expertise"
    ]
  },
  {
    id: "change",
    title: "Change Management & Adoption Support",
    engagement: "Project-based or ongoing",
    features: [
      "Organizational change management strategy",
      "Stakeholder engagement and communication plans",
      "Training programs for end users",
      "Adoption monitoring and support",
      "Feedback collection and iteration",
      "Success story documentation and sharing"
    ]
  },
  {
    id: "ongoing",
    title: "Ongoing Advisory & Support",
    engagement: "Monthly or quarterly retainer",
    features: [
      "Regular check-ins and progress reviews",
      "Strategic guidance as you scale AI initiatives",
      "Technology updates and recommendations",
      "Risk monitoring and mitigation",
      "Team coaching and mentorship",
      "Access to QEN AI expertise on-demand"
    ]
  }
];

const IMPACT_METRICS = [
  {
    title: "Strategic Clarity",
    description: "Clear, actionable AI roadmap aligned with business objectives"
  },
  {
    title: "Risk Reduction",
    description: "Avoid costly mistakes through expert guidance"
  },
  {
    title: "Team Capability",
    description: "Build internal expertise reducing dependency on external consultants"
  },
  {
    title: "Adoption Success",
    description: "Higher success rates for AI initiatives through proper change management"
  }
];

export default function AdvisoryServicePage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Service</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Advisory & <span className="text-primary">Capacity Building</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Strategic AI Guidance For Long-Term Success. Build organizational capability, establish governance, and develop a coherent AI strategy.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">What is Advisory & Capacity Building?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                AI transformation isn't just about implementing technology—it's about building organizational capability, establishing 
                governance, training teams, and developing a coherent strategy. Our Advisory & Capacity Building services help leadership 
                teams navigate AI adoption thoughtfully, ensure responsible implementation, and build internal expertise for sustained success.
              </p>
              <p>
                Whether you need strategic guidance for C-suite executives, hands-on training for technical teams, change management 
                support for organization-wide adoption, or ongoing advisory as you scale your AI initiatives, we provide the expertise 
                and support you need.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Leadership teams developing AI strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations beginning AI adoption journeys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Companies needing to build internal AI literacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Teams implementing AI requiring change management support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Businesses wanting ongoing strategic AI guidance</span>
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
            <p className="text-lg text-muted-foreground">
              Strategic clarity and long-term value for your AI journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {IMPACT_METRICS.map((metric, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Long-Term Value</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">trending_up</span>
                <span className="text-muted-foreground">Sustainable AI practice within organization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">lightbulb</span>
                <span className="text-muted-foreground">Informed decision-making on AI investments</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">security</span>
                <span className="text-muted-foreground">Ethical and responsible AI adoption</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-0.5">star</span>
                <span className="text-muted-foreground">Competitive advantage through strategic AI use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Service Types</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive advisory services tailored to your needs.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {SERVICE_TYPES.map((service) => (
              <AccordionItem key={service.id} value={service.id} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.engagement}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-3">
                    <h4 className="font-semibold text-foreground mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Engagement Models</h2>
            <p className="text-lg text-muted-foreground">
              Flexible engagement options to fit your organization's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quarterly Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quarterly strategic planning sessions with monthly check-ins. Best for organizations with established AI initiatives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom training programs for technical teams or end users. Project-based or ongoing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monthly or quarterly retainer for ongoing guidance, coaching, and strategic support.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              <strong>Engagement:</strong> Custom engagement models based on your needs, scope, and duration. Contact us for a tailored proposal.
            </p>
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
                <CardDescription>Start with understanding your opportunities</CardDescription>
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
                <CardTitle>AI Automation Design & Deployment</CardTitle>
                <CardDescription>Implement the solutions we help you plan</CardDescription>
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
                <CardTitle>Custom AI Model Development</CardTitle>
                <CardDescription>For advanced use cases we identify</CardDescription>
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

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Build Your AI Strategy?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how our advisory services can help you navigate AI adoption thoughtfully and build long-term capability.
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

