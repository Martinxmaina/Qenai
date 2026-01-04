import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const INDUSTRIES = [
  {
    icon: "business",
    title: "Corporate Enterprises",
    description: "Enterprise-grade AI solutions for large-scale operations, multi-department automation, and complex integrations.",
    features: [
      "Large-scale workflow automation",
      "Enterprise system integrations",
      "Compliance and security frameworks",
      "Multi-department solutions"
    ],
    stats: { value: "400%", label: "Average ROI" },
    color: "from-blue-500 to-indigo-500",
    href: "/solutions/corporate"
  },
  {
    icon: "rocket_launch",
    title: "SMEs & Startups",
    description: "Cost-effective AI automation designed for growing businesses with quick time to value and scalable solutions.",
    features: [
      "Quick implementation timelines",
      "Cost-effective automation",
      "Scalable solutions",
      "Rapid ROI achievement"
    ],
    stats: { value: "5-8", label: "Months to ROI" },
    color: "from-purple-500 to-pink-500",
    href: "/solutions/smes"
  },
  {
    icon: "volunteer_activism",
    title: "NGOs & Humanitarian Organizations",
    description: "Resource optimization, impact measurement, and field operations automation for mission-driven organizations.",
    features: [
      "Resource optimization",
      "Impact measurement systems",
      "Donor reporting automation",
      "Field operations support"
    ],
    stats: { value: "60%", label: "Time Saved" },
    color: "from-green-500 to-teal-500",
    href: "/solutions/ngos"
  },
  {
    icon: "gavel",
    title: "Professional Services",
    description: "Knowledge management, client onboarding, and document processing solutions for service-based firms.",
    features: [
      "Knowledge base systems",
      "Client onboarding automation",
      "Document processing",
      "Time tracking and billing"
    ],
    stats: { value: "70%", label: "Faster Onboarding" },
    color: "from-orange-500 to-red-500",
    href: "/solutions/professional-services"
  },
  {
    icon: "shopping_bag",
    title: "E-commerce & Retail",
    description: "Customer experience automation, inventory management, and multi-channel support for retail businesses.",
    features: [
      "24/7 customer support automation",
      "Inventory management",
      "Order processing automation",
      "Multi-channel integration"
    ],
    stats: { value: "25%", label: "Revenue Increase" },
    color: "from-pink-500 to-rose-500",
    href: "/solutions/ecommerce"
  },
  {
    icon: "account_balance",
    title: "Financial Services",
    description: "Compliance automation, risk assessment, customer onboarding, and fraud detection for financial institutions.",
    features: [
      "Regulatory compliance automation",
      "Risk assessment systems",
      "Customer onboarding",
      "Fraud detection"
    ],
    stats: { value: "99.7%", label: "Accuracy Rate" },
    color: "from-emerald-500 to-green-500",
    href: "/solutions/financial"
  }
];

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Industry Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Solutions for Every <span className="text-primary">Industry</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tailored AI strategies designed to solve unique sector challenges. Proven frameworks that deliver measurable impact from day one.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
                {/* Icon Header */}
                <div className={`h-32 bg-gradient-to-br ${industry.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="material-symbols-outlined text-6xl text-white relative z-10">{industry.icon}</span>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{industry.title}</CardTitle>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{industry.stats.value}</span>
                      <span className="text-sm text-muted-foreground">{industry.stats.label}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                    <Link href={industry.href || "/contact"}>
                      Explore Solutions
                      <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that delivers results in weeks, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", description: "Deep-dive assessment of your data, infrastructure, and business objectives." },
              { step: "02", title: "Design", description: "Custom AI architecture tailored to your specific needs and constraints." },
              { step: "03", title: "Deploy", description: "Rapid implementation with minimal disruption to your operations." },
              { step: "04", title: "Optimize", description: "Continuous monitoring and improvement to maximize ROI." }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Ready to Transform Your <span className="text-primary">Industry?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how QENAI can address your unique challenges and accelerate your AI journey.
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
    </main>
  );
}
