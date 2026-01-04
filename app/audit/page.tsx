import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AUDIT_INCLUDES = [
  {
    icon: "analytics",
    title: "Data Infrastructure Assessment",
    description: "Evaluate your current data architecture, quality, and readiness for AI workloads."
  },
  {
    icon: "groups",
    title: "Team Capability Analysis",
    description: "Assess your team's AI/ML expertise and identify skill gaps that need to be addressed."
  },
  {
    icon: "hub",
    title: "Technology Stack Review",
    description: "Review your existing tools and infrastructure to identify integration opportunities and bottlenecks."
  },
  {
    icon: "flag",
    title: "Strategic Alignment",
    description: "Evaluate how well your business objectives align with AI opportunities and potential use cases."
  },
  {
    icon: "security",
    title: "Security & Compliance Check",
    description: "Assess your data governance, security policies, and regulatory compliance requirements."
  },
  {
    icon: "map",
    title: "Roadmap & Recommendations",
    description: "Receive a detailed action plan with prioritized recommendations and estimated timelines."
  }
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "30-minute discovery call to understand your goals and challenges",
    duration: "30 min"
  },
  {
    step: "2",
    title: "Data & Systems Review",
    description: "Deep dive into your data infrastructure, tools, and workflows",
    duration: "2-3 hours"
  },
  {
    step: "3",
    title: "Stakeholder Interviews",
    description: "Conversations with key team members to understand needs and constraints",
    duration: "1-2 hours"
  },
  {
    step: "4",
    title: "Analysis & Report",
    description: "Comprehensive audit report with findings and recommendations",
    duration: "3-5 days"
  }
];

export default function AuditPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="container relative mx-auto px-4 max-w-7xl">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm bg-green-50 text-green-700 border-green-200">
              <span className="mr-2 rounded-full bg-green-500 w-2 h-2 block animate-pulse"></span> 100% Free - No Commitment
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-foreground mb-4">
              Free AI Readiness <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Audit</span>
            </h1>

            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed mb-8">
              Get expert analysis of your organization's AI readiness. Understand your strengths, identify gaps, and receive a customized roadmap - completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:-translate-y-0.5 transition-transform" asChild>
                <Link href="/assessment">
                  Start Your Free Audit
                  <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500">verified</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500">schedule</span>
              <span>Results in 5 business days</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-500">lock</span>
              <span>100% confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive evaluation of your organization's AI readiness across six key dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUDIT_INCLUDES.map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-all border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              A simple, structured process designed to minimize your time investment while maximizing insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <Badge variant="secondary" className="text-xs">{step.duration}</Badge>
                  </CardContent>
                </Card>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-border translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                What You'll Receive
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Detailed Audit Report",
                    description: "Comprehensive 30+ page analysis of your current state and opportunities"
                  },
                  {
                    title: "Readiness Score",
                    description: "Quantified assessment across data, team, technology, and strategy dimensions"
                  },
                  {
                    title: "Prioritized Roadmap",
                    description: "Step-by-step implementation plan with timelines and resource estimates"
                  },
                  {
                    title: "ROI Projections",
                    description: "Estimated business value and cost-benefit analysis for recommended initiatives"
                  },
                  {
                    title: "Quick Wins",
                    description: "Immediate actions you can take to start seeing value within 30 days"
                  },
                  {
                    title: "Follow-up Session",
                    description: "60-minute consultation to discuss findings and answer questions"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-indigo-50 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4 block">description</span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Sample Audit Report</h3>
                  <p className="text-muted-foreground">See what you'll receive</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Executive Summary</span>
                      <Badge variant="outline">5 pages</Badge>
                    </div>
                    <div className="h-1 bg-primary/20 rounded-full w-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Technical Analysis</span>
                      <Badge variant="outline">15 pages</Badge>
                    </div>
                    <div className="h-1 bg-primary/20 rounded-full w-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Recommendations</span>
                      <Badge variant="outline">10 pages</Badge>
                    </div>
                    <div className="h-1 bg-primary/20 rounded-full w-full"></div>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg" variant="outline" asChild>
                  <Link href="#">Download Sample Report</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Take the first step towards AI transformation. Your free audit awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/assessment">Start Free Audit Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
