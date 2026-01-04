import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CHALLENGES = [
  {
    title: "24/7 Customer Support",
    description: "E-commerce businesses need round-the-clock customer support, but hiring enough staff is cost-prohibitive."
  },
  {
    title: "Order Processing & Inventory",
    description: "Managing orders, inventory levels, and fulfillment across multiple channels requires efficient automation."
  },
  {
    title: "Customer Engagement",
    description: "Personalizing customer experiences, managing campaigns, and driving repeat purchases at scale."
  },
  {
    title: "Multi-Channel Management",
    description: "Coordinating operations across web, mobile, social media, and physical stores requires integrated systems."
  }
];

const SOLUTIONS = [
  {
    icon: "support_agent",
    title: "AI-Powered Customer Experience",
    description: "24/7 customer support automation via chat, WhatsApp, and email with instant, accurate responses.",
    href: "/services/customer-experience"
  },
  {
    icon: "inventory",
    title: "Order & Inventory Automation",
    description: "Automated order processing, inventory management, and fulfillment workflows.",
    href: "/services/automation"
  },
  {
    icon: "campaign",
    title: "Marketing Campaign Automation",
    description: "AI-powered customer segmentation, personalized campaigns, and multi-channel engagement.",
    href: "/services/automation"
  }
];

const USE_CASES = [
  {
    title: "E-Commerce Customer Support",
    challenge: "High volume of customer inquiries, need for 24/7 support, inconsistent response quality",
    solution: "AI-powered chatbot with product knowledge, order tracking, return processing, human handoff",
    impact: "70%+ inquiries handled by AI, 60-80% cost reduction, 25-40% CSAT improvement, 15-25% revenue increase from 24/7 availability"
  },
  {
    title: "Marketing Campaign Orchestration",
    challenge: "50,000+ customer database with manual campaign management and inconsistent segmentation",
    solution: "Automated segmentation, AI content generation, multi-channel campaigns, real-time optimization",
    impact: "3x campaign velocity, 67% email open rate improvement, 28% conversion increase, significant additional revenue"
  }
];

export default function EcommerceSolutionsPage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">E-commerce & Retail</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            AI Solutions for <span className="text-primary">Retail Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Scale your e-commerce operations with AI-powered customer support, automated order processing, and intelligent marketing campaigns.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Scale Your Retail Operations</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              E-commerce and retail businesses face constant pressure to provide excellent customer experiences while 
              managing operations efficiently. QEN AI helps retail businesses automate customer support, streamline 
              order processing, optimize inventory management, and run intelligent marketing campaigns. Our solutions 
              integrate seamlessly with popular e-commerce platforms (Shopify, WooCommerce) and payment systems 
              (M-Pesa), designed for the realities of African markets including intermittent connectivity and mobile-first customers.
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for E-commerce & Retail</h2>
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
                <div className="text-5xl font-bold text-primary mb-2">70%+</div>
                <CardTitle>Inquiries Automated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Customer inquiries handled by AI systems</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">25%</div>
                <CardTitle>Revenue Increase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From 24/7 availability and improved engagement</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-primary mb-2">60-80%</div>
                <CardTitle>Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">In customer support costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Choose QEN AI for E-commerce</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">phone_android</span>
                    Mobile-First Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Solutions designed for mobile-first markets, including WhatsApp and SMS integration for African customers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">shopping_cart</span>
                    Platform Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamless integration with Shopify, WooCommerce, M-Pesa, and other popular e-commerce platforms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    Revenue Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI-powered campaigns and 24/7 support drive measurable revenue increases through better engagement.
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
              <Link href="/solutions/financial">Financial Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Scale Your Retail Business?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI automation can help you provide better customer experiences and grow your revenue.
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

