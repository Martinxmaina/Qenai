import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CASE_STUDIES = [
  {
    id: "corporate-integration",
    category: "ENTERPRISE",
    title: "Corporate Integration Framework",
    description: "Implementing a customized LLM architecture for a Fortune 500 logistics provider, automating core workflows and predictive supply chain management.",
    impact: "+40%",
    impactLabel: "Efficiency Increase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "ngo-routing",
    category: "SOCIAL IMPACT",
    title: "NGO Resource Routing",
    description: "Maximizing food distribution reach in underserved regions using QENAI's geo-spatial optimization models.",
    impact: "3x",
    impactLabel: "Resource Distribution Range",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "retail-growth",
    category: "E-COMMERCE",
    title: "Retail Growth Engine",
    description: "Deploying hyper-personalization engines for a global lifestyle brand, enhancing customer retention and lifetime value.",
    impact: "+25%",
    impactLabel: "Sales Growth YoY",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
  }
];

const QUICK_STATS = [
  { label: "Global Impact", value: "1M+", sublabel: "Users", trend: "+15%" },
  { label: "Active Deployments", value: "500+", sublabel: "", trend: "+12%" },
  { label: "Avg. Latency Reduction", value: "200ms", sublabel: "", trend: "-45%" }
];

const ADDITIONAL_CASES = [
  {
    icon: "local_hospital",
    title: "Healthcare Compliance",
    description: "Securing patient data processing with HIPAA-compliant AI pipelines.",
    stat: "0.00%",
    statLabel: "DATA BREACHES"
  },
  {
    icon: "account_balance",
    title: "Fraud Detection",
    description: "Reducing false positives in digital transactions by 60%.",
    stat: "60%",
    statLabel: "ACCURACY BOOST"
  },
  {
    icon: "precision_manufacturing",
    title: "Smart Factories",
    description: "Predictive maintenance scheduling for global automotive lines.",
    stat: "99.9%",
    statLabel: "UPTIME"
  }
];

export default function CasesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-serif leading-tight tracking-tight mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            Real Impact
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Pioneering AI infrastructure that transforms global industries through 
            intelligence, efficiency, and ethical scaling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-20 lg:px-40 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Industry Success Stories</h2>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {QUICK_STATS.map((stat, i) => (
              <Card key={i} className="border-slate-200">
                <CardContent className="p-6">
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                    {stat.sublabel && <span className="text-slate-500">{stat.sublabel}</span>}
                    <span className="text-green-600 text-sm font-medium ml-auto">{stat.trend}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            {/* Featured Case - Large Card */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden relative min-h-[400px] group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${CASE_STUDIES[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <Badge className="bg-slate-800 text-white mb-4">{CASE_STUDIES[0].category}</Badge>
                <h3 className="text-2xl font-bold mb-2">{CASE_STUDIES[0].title}</h3>
                <p className="text-white/80 text-sm mb-4">{CASE_STUDIES[0].description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-400">{CASE_STUDIES[0].impact}</span>
                    <span className="text-white/60 text-sm ml-2">{CASE_STUDIES[0].impactLabel}</span>
                  </div>
                  <Button variant="secondary" size="sm">
                    Read Full Study
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NGO Case */}
              <div className="rounded-xl overflow-hidden relative min-h-[200px] group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${CASE_STUDIES[1].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <Card className="border-slate-200 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit mb-4 bg-green-50 text-green-700 border-green-200">{CASE_STUDIES[1].category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{CASE_STUDIES[1].title}</h3>
                  <p className="text-slate-500 text-sm mb-4 flex-1">{CASE_STUDIES[1].description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">{CASE_STUDIES[1].impact}</span>
                    <span className="text-slate-500 text-sm">{CASE_STUDIES[1].impactLabel}</span>
                  </div>
                  <Link href="#" className="text-primary font-bold text-sm mt-4 flex items-center gap-1 hover:underline">
                    LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </CardContent>
              </Card>

              {/* Retail Case */}
              <div className="rounded-xl overflow-hidden relative min-h-[200px] group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${CASE_STUDIES[2].image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <Card className="border-slate-200 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <Badge variant="outline" className="w-fit mb-4 bg-orange-50 text-orange-700 border-orange-200">{CASE_STUDIES[2].category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{CASE_STUDIES[2].title}</h3>
                  <p className="text-slate-500 text-sm mb-4 flex-1">{CASE_STUDIES[2].description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">{CASE_STUDIES[2].impact}</span>
                    <span className="text-slate-500 text-sm">{CASE_STUDIES[2].impactLabel}</span>
                  </div>
                  <Link href="#" className="text-primary font-bold text-sm mt-4 flex items-center gap-1 hover:underline">
                    LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Cases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDITIONAL_CASES.map((item, i) => (
              <Card key={i} className="border-slate-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{item.description}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">
                    <span className="text-slate-900 font-bold">{item.stat}</span> {item.statLabel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Ready to be our next success story?</h2>
          <p className="text-slate-500 text-lg">
            Book a consultation with our team and discover how QENAI can transform your operations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-10 py-6 h-auto rounded-lg text-lg font-bold" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
