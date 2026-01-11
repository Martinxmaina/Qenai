import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const RESOURCES = [
  {
    category: "WEEKLY UPDATE",
    title: "The Blog",
    description: "Deep dives into the latest industry shifts, LLM benchmarks, and AI governance frameworks.",
    link: "/blog",
    linkText: "Read latest articles",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    category: "TECHNICAL RESEARCH",
    title: "Whitepapers",
    description: "Rigorous technical research on scalable AI architecture and security.",
    link: "/resources#whitepapers",
    linkText: "Download Library →",
    dark: true
  }
];

const FAQ_TAGS = ["Deployment", "Privacy", "Pricing"];

export default function ResourcesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-8xl font-serif leading-tight tracking-tight mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            Knowledge Hub
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Explore the frontier of Enterprise AI. Insights, tools, and technical research 
            curated for strategic transformation.
          </p>
          <Button variant="secondary" size="lg" className="rounded-full px-8">
            Browse All Content
          </Button>
        </div>
      </section>

      {/* Resource Directory */}
      <section className="py-16 px-6 md:px-20 lg:px-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Resource Directory</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <span className="material-symbols-outlined">grid_view</span>
              </Button>
              <Button variant="ghost" size="icon">
                <span className="material-symbols-outlined">view_list</span>
              </Button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Blog Card - Large */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <span className="text-primary font-bold tracking-widest text-xs uppercase">{RESOURCES[0].category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{RESOURCES[0].title}</h3>
                  <p className="text-slate-500 mb-6">{RESOURCES[0].description}</p>
                  <Link href={RESOURCES[0].link} className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                    {RESOURCES[0].linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </CardContent>
              </Card>
              
              <div 
                className="rounded-xl overflow-hidden min-h-[250px] bg-cover bg-center"
                style={{ backgroundImage: `url('${RESOURCES[0].image}')` }}
              />
            </div>

            {/* Whitepapers Card - Dark */}
            <Card className="bg-slate-900 text-white border-slate-800">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="size-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white">description</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{RESOURCES[1].title}</h3>
                <p className="text-slate-400 mb-6 flex-1">{RESOURCES[1].description}</p>
                <Link href={RESOURCES[1].link} className="text-primary font-bold text-sm hover:underline">
                  {RESOURCES[1].linkText}
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Readiness Tool */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">AI Readiness Tool</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Benchmark your organization against industry standards in 5 minutes.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/assessment">
                    <span className="material-symbols-outlined mr-2 text-sm">analytics</span>
                    Start Assessment
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Support & FAQs */}
            <Card className="border-slate-200 lg:col-span-2">
              <CardContent className="p-6 flex items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Support & FAQs</h3>
                  <p className="text-slate-500 text-sm mb-4">
                    Find answers to common implementation questions and technical support details.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {FAQ_TAGS.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex size-24 rounded-full bg-slate-100 items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-400">help</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay ahead of the curve</h2>
          <p className="text-slate-500 mb-8">
            Join 5,000+ AI leaders receiving our weekly strategic briefing.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="work@company.com" 
              className="h-12 flex-1"
            />
            <Button type="submit" className="h-12 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-slate-400 mt-4">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
