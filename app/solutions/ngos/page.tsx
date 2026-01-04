import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CHALLENGES = [
  {
    title: "Resource Optimization",
    description: "NGOs need to maximize impact with limited resources, requiring efficient operations and cost-effective solutions."
  },
  {
    title: "Impact Measurement & Reporting",
    description: "Donors and stakeholders require detailed reporting on program outcomes and impact metrics."
  },
  {
    title: "Field Operations Support",
    description: "Remote field operations need streamlined processes for data collection, beneficiary management, and coordination."
  },
  {
    title: "Donor Engagement",
    description: "Maintaining donor relationships and communication requires efficient systems for engagement and reporting."
  }
];

const SOLUTIONS = [
  {
    icon: "analytics",
    title: "Impact Measurement Systems",
    description: "Automated data collection and reporting systems for program outcomes and donor reporting.",
    href: "/services/automation"
  },
  {
    icon: "groups",
    title: "Beneficiary Management",
    description: "AI-powered systems for tracking beneficiaries, managing programs, and coordinating field operations.",
    href: "/services/automation"
  },
  {
    icon: "description",
    title: "Donor Reporting Automation",
    description: "Automated generation of donor reports, impact summaries, and communication workflows.",
    href: "/services/automation"
  }
];

const USE_CASES = [
  {
    title: "NGO Field Operations Automation",
    challenge: "Manual data collection and beneficiary tracking across multiple field locations",
    solution: "Mobile data collection, automated beneficiary management, real-time reporting dashboard",
    impact: "60% reduction in administrative time, real-time program visibility, improved data accuracy"
  },
  {
    title: "NGO Beneficiary Information System",
    challenge: "Scattered information across documents, difficulty answering beneficiary questions quickly",
    solution: "AI-powered knowledge base with RAG system, accessible via WhatsApp and SMS",
    impact: "80% of routine questions answered instantly, field staff time saved, consistent information delivery"
  }
];

export default function NGOSolutionsPage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">NGO Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Solutions for <span className="text-primary">Mission-Driven Organizations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Optimize resources, measure impact, and scale your programs with AI automation designed for NGOs and humanitarian organizations.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Maximizing Impact with Limited Resources</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NGOs and humanitarian organizations face unique challenges: maximizing program impact with limited resources, 
              meeting donor reporting requirements, and coordinating field operations across remote locations. QEN AI specializes 
              in cost-effective automation solutions that help NGOs operate more efficiently, measure impact more effectively, 
              and focus resources on their core mission. We understand the constraints NGOs work within and design solutions 
              that are affordable, easy to adopt, and deliver measurable value.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for NGOs</h2>
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Impact Metrics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">60%</div>
                <CardTitle>Time Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average reduction in administrative time</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">80%</div>
                <CardTitle>Questions Automated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Routine inquiries handled by AI systems</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">Real-time</div>
                <CardTitle>Program Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Live dashboards for impact tracking</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Choose QEN AI for NGOs</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                    Mission-Aligned Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand NGO constraints and design solutions that maximize impact while respecting budget limitations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    Impact Measurement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automated systems for tracking program outcomes and generating donor reports efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">public</span>
                    Field Operations Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Solutions designed for remote field operations, including mobile data collection and low-bandwidth access.
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

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Maximize Your Impact?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI automation can help your organization operate more efficiently and measure impact more effectively.
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


