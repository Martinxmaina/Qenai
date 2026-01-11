import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TECH_STACK = {
  automation: ["n8n", "Zapier", "Make", "Go High Level"],
  ai: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Custom Models"],
  data: ["Airtable", "PostgreSQL", "MongoDB", "Pinecone"],
  integrations: ["Shopify", "WooCommerce", "Salesforce", "HubSpot"]
};

const CAPABILITIES = [
  {
    icon: "schema",
    title: "Workflow Automation",
    description: "End-to-end process automation that eliminates manual bottlenecks and reduces operational costs."
  },
  {
    icon: "support_agent",
    title: "AI-Powered Customer Experience",
    description: "Intelligent chatbots and support systems that handle routine inquiries with human-like understanding."
  },
  {
    icon: "menu_book",
    title: "Knowledge Management Systems",
    description: "AI-powered knowledge bases that make organizational intelligence instantly accessible."
  },
  {
    icon: "neurology",
    title: "Custom AI Model Development",
    description: "Bespoke models fine-tuned for your industry, processes, and brand voice."
  }
];

export default function TechnologyPage() {
    return (
        <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-serif leading-tight tracking-tight mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            Enterprise-Grade Technology
                    </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Built on industry-leading platforms and frameworks, designed for security, 
            scalability, and African market realities.
                    </p>
                </div>
            </section>

            {/* Tech Stack */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Technology Foundation</h2>
                    </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Automation */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">settings</span>
                Automation Platforms
              </h3>
              <div className="space-y-3">
                {TECH_STACK.automation.map((tech, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 hover:shadow-sm transition-all">
                    <span className="font-medium">{tech}</span>
                                    </div>
                                        ))}
                                    </div>
            </div>

            {/* AI */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology</span>
                AI & Machine Learning
              </h3>
              <div className="space-y-3">
                {TECH_STACK.ai.map((tech, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 hover:shadow-sm transition-all">
                    <span className="font-medium">{tech}</span>
                  </div>
                        ))}
                    </div>
                </div>

            {/* Data */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">database</span>
                Data & Storage
              </h3>
              <div className="space-y-3">
                {TECH_STACK.data.map((tech, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 hover:shadow-sm transition-all">
                    <span className="font-medium">{tech}</span>
                                        </div>
                                ))}
                            </div>
                        </div>

            {/* Integrations */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">hub</span>
                Business Integrations
              </h3>
              <div className="space-y-3">
                {TECH_STACK.integrations.map((tech, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/50 hover:shadow-sm transition-all">
                    <span className="font-medium">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
            </section>

      {/* Capabilities */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <Card key={i} className="border-slate-200 hover:shadow-lg transition-all group">
                <CardContent className="p-8 flex gap-6">
                  <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{cap.description}</p>
                            </div>
                </CardContent>
              </Card>
                        ))}
                    </div>
                </div>
            </section>

      {/* African Market Focus */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-bold tracking-widest text-xs uppercase opacity-70">Built for Africa</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">African Market Focus</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Our solutions are designed with African business realities in mind. We understand 
                the unique challenges of infrastructure, connectivity, and local market dynamics.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">wifi_off</span>
                  <span>Offline-capable systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">payments</span>
                  <span>M-Pesa integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">language</span>
                  <span>Multi-language support</span>
                    </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined">security</span>
                  <span>Local data compliance</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1000" 
                alt="African city skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Ready to leverage enterprise-grade AI?</h2>
          <p className="text-slate-500 text-lg">
            Book a consultation to discuss how our technology can transform your operations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-10 py-6 h-auto rounded-lg text-lg font-bold" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
            </section>
        </main>
    );
}
