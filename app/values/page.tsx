import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VALUES = [
  {
    icon: "hearing",
    title: "Deep Listening",
    description: "Before recommending any technology, we invest time in understanding your operations, your team, your constraints, and your goals. This isn't a sales pitch—it's a discovery process. We map workflows, identify bottlenecks, talk to the people doing the work, and understand what success really looks like for your organization. Our solutions are effective because they're built on genuine understanding, not assumptions.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: "trending_up",
    title: "Practical Impact",
    description: "We measure success by operational improvements, not by technical complexity. Every solution we design must deliver measurable business value—whether that's time saved, costs reduced, revenue increased, or customer satisfaction improved. We focus on high-impact automation opportunities first, ensuring you see ROI quickly. Our implementations are pragmatic, tested, and proven to work in real business environments.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: "public",
    title: "Context Awareness",
    description: "African businesses operate in unique contexts—different infrastructure realities, regulatory environments, market dynamics, and resource constraints. We design solutions that work within these contexts, not against them. Our systems account for intermittent connectivity, local data protection requirements, budget considerations, and the need for solutions that teams can actually adopt and maintain.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: "security",
    title: "Integrity & Responsibility",
    description: "Trust is foundational to AI adoption. We are transparent about what AI can and cannot do. We protect client data rigorously, recommend only what serves your best interests, and ensure every solution includes human oversight and accountability. We're building for the long term—both for your organization and for responsible AI adoption across Africa.",
    color: "bg-teal-50 text-teal-600"
  }
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Start with the Problem",
    description: "We don't deploy AI for its own sake. Every solution addresses a specific business challenge with measurable outcomes."
  },
  {
    number: "02",
    title: "Build for the Future",
    description: "Scalable architecture and modular design ensure your AI infrastructure evolves with your organization."
  },
  {
    number: "03",
    title: "Iterate Relentlessly",
    description: "Continuous improvement is baked into our process. We measure, learn, and optimize at every stage."
  },
  {
    number: "04",
    title: "Empower Your Team",
    description: "We transfer knowledge, not just technology. Your team gains the skills to maintain and extend AI capabilities."
  }
];

export default function ValuesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Our Values</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Principles That <span className="text-primary">Guide Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our approach to AI is shaped by a commitment to integrity, innovation, and impact. These values drive every decision we make.
          </p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The non-negotiable principles that define how we build, deliver, and support AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                  </div>
                  <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              How we turn principles into practice through our structured methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRINCIPLES.map((principle, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {principle.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-6 block">format_quote</span>
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
              "AI should enhance human capability, not create new complexity. Our mission is to make enterprise-grade AI accessible, practical, and impactful for African organizations."
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-lg">Glory Munoru</p>
              <p className="text-muted-foreground">Co-Founder & Chief Strategy Officer, QEN AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Commitments</h2>
            <p className="text-lg text-muted-foreground">
              Measurable promises we make to every client and partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "verified_user", text: "SOC 2 Type II & GDPR Compliant" },
              { icon: "update", text: "Quarterly Model Audits" },
              { icon: "support_agent", text: "24/7 Enterprise Support" },
              { icon: "insights", text: "Full Explainability Reports" },
              { icon: "lock", text: "Zero Data Retention Policy" },
              { icon: "speed", text: "99.9% Uptime SLA" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-lg border bg-background hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
