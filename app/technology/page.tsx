"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TECH_STACK = {
  automation: [
    { name: "n8n", description: "Primary platform for complex workflow automation" },
    { name: "Make (Integromat)", description: "Visual automation platform" },
    { name: "Zapier", description: "Simple automation workflows" },
    { name: "Go High Level", description: "All-in-one business platform" },
    { name: "Custom Python/Node.js", description: "Custom automation solutions" }
  ],
  aiModels: [
    { name: "OpenAI API (GPT-4)", description: "Advanced language models" },
    { name: "Claude API", description: "Anthropic's enterprise-grade AI" },
    { name: "Mistral", description: "Open-source AI models" },
    { name: "Custom Fine-Tuned Models", description: "Domain-specific AI models" },
    { name: "RAG Systems (Pinecone)", description: "Retrieval-augmented generation" }
  ],
  databases: [
    { name: "PostgreSQL", description: "Relational database" },
    { name: "MongoDB", description: "NoSQL database" },
    { name: "Airtable", description: "Collaborative database platform" },
    { name: "Pinecone", description: "Vector database for AI" }
  ],
  integrations: [
    { name: "Shopify", description: "E-commerce platform" },
    { name: "WooCommerce", description: "WordPress e-commerce" },
    { name: "M-Pesa", description: "Mobile money integration" },
    { name: "HubSpot", description: "CRM and marketing" },
    { name: "Salesforce", description: "Enterprise CRM" },
    { name: "Zendesk", description: "Customer support" },
    { name: "QuickBooks", description: "Accounting software" },
    { name: "WhatsApp Business API", description: "Messaging platform" }
  ]
};

const CAPABILITIES = [
  {
    icon: "settings",
    title: "Workflow Automation",
    description: "End-to-end automation solutions that transform operational inefficiencies into scalable systems.",
    features: ["Complex business logic", "Multi-system integration", "Error handling & monitoring", "Maintainable workflows"]
  },
  {
    icon: "support_agent",
    title: "AI-Powered Customer Experience",
    description: "Intelligent customer support systems that handle inquiries instantly while maintaining quality.",
    features: ["24/7 availability", "Multi-channel deployment", "Human handoff", "Knowledge base integration"]
  },
  {
    icon: "database",
    title: "Knowledge Management Systems",
    description: "RAG-based systems that turn organizational knowledge into accessible, searchable assets.",
    features: ["Semantic search", "Automated documentation", "Internal chatbots", "Knowledge retention"]
  },
  {
    icon: "psychology",
    title: "Custom AI Model Development",
    description: "Fine-tuned AI models tailored to your specific domain and use cases.",
    features: ["Domain-specific models", "Fine-tuning services", "Model deployment", "Performance optimization"]
  },
  {
    icon: "api",
    title: "Integration & API Development",
    description: "Seamless integration with existing systems and custom API development.",
    features: ["REST & GraphQL APIs", "Webhook support", "Custom connectors", "System integration"]
  }
];

const SECURITY_FEATURES = [
  {
    icon: "lock",
    title: "Data Encryption",
    features: ["End-to-end encryption", "Data at rest encryption", "Secure data transmission", "Encrypted backups"]
  },
  {
    icon: "verified_user",
    title: "Access Control",
    features: ["Role-based access control", "Multi-factor authentication", "Audit logging", "Permission management"]
  },
  {
    icon: "shield",
    title: "Compliance",
    features: ["GDPR compliance", "Data protection", "Privacy by design", "Regular security audits"]
  },
  {
    icon: "security",
    title: "Data Privacy",
    features: ["Data minimization", "User consent management", "Right to deletion", "Data portability"]
  }
];

export default function TechnologyPage() {
    return (
        <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Technology & Capabilities</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Built on Enterprise-Grade <span className="text-primary">Technology</span>
                    </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our technology stack combines proven automation platforms, cutting-edge AI models, and robust infrastructure to deliver solutions that work for African businesses.
                    </p>
                </div>
            </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              End-to-end solutions covering automation, AI integration, knowledge management, and custom development.
            </p>
                    </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((capability, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{capability.icon}</span>
                                        </div>
                  <CardTitle className="text-2xl">{capability.title}</CardTitle>
                  <CardDescription className="text-base">{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

      {/* Technology Stack - Tabs */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Technology Stack</h2>
            <p className="text-lg text-muted-foreground">
              Proven platforms and tools that power our automation and AI solutions.
            </p>
          </div>

          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="ai">AI Models</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="automation" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TECH_STACK.automation.map((item, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TECH_STACK.aiModels.map((item, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="databases" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TECH_STACK.databases.map((item, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TECH_STACK.integrations.map((item, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Models & Integration */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">AI Models & Integration</h2>
            <p className="text-lg text-muted-foreground">
              We work with leading AI models and build custom solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Foundation Models</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Claude API (Anthropic)</h4>
                    <p className="text-sm text-muted-foreground">Enterprise-grade AI with strong safety features, ideal for customer support and knowledge systems.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">OpenAI GPT-4</h4>
                    <p className="text-sm text-muted-foreground">Advanced language model for complex reasoning, content generation, and analysis tasks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mistral</h4>
                    <p className="text-sm text-muted-foreground">Open-source models for cost-effective solutions with full control over deployment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom AI Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Fine-Tuned Models</h4>
                    <p className="text-sm text-muted-foreground">Domain-specific models trained on your data for specialized use cases.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">RAG Systems</h4>
                    <p className="text-sm text-muted-foreground">Retrieval-augmented generation using Pinecone for knowledge-intensive applications.</p>
                  </div>
                        <div>
                    <h4 className="font-semibold mb-2">Multi-Model Orchestration</h4>
                    <p className="text-sm text-muted-foreground">Intelligent routing and combination of multiple AI models for optimal performance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Data Protection */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Security & Data Protection</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade security and compliance to protect your data and ensure regulatory adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_FEATURES.map((feature, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                                        </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                </CardContent>
              </Card>
            ))}
                            </div>
        </div>
      </section>

      {/* Custom Development Capabilities */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Custom Development Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              When off-the-shelf solutions aren't enough, we build custom solutions tailored to your needs.
            </p>
                        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">code</span>
                                    </div>
                <CardTitle>Python Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom Python applications for data processing, AI model integration, and complex automation workflows.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">Pandas</Badge>
                  <Badge variant="secondary">Custom Scripts</Badge>
                                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">javascript</span>
                                            </div>
                <CardTitle>Node.js Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Node.js applications for real-time systems, API development, and integration services.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">Webhooks</Badge>
                  <Badge variant="secondary">Real-time</Badge>
                                            </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">api</span>
                                        </div>
                <CardTitle>API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom APIs and integrations connecting your systems with automation platforms and AI services.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">Webhooks</Badge>
                  <Badge variant="secondary">Custom Connectors</Badge>
                                </div>
              </CardContent>
                            </Card>
                        </div>
                    </div>
      </section>

      {/* African Market Focus */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Built for African Businesses</h2>
            <p className="text-lg text-muted-foreground">
              Our technology choices reflect the unique needs of businesses operating in East Africa and across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">payments</span>
                </div>
                <CardTitle>M-Pesa Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Seamless mobile money integration for payments and transactions.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                            </div>
                <CardTitle>WhatsApp Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Customer engagement through WhatsApp, the preferred messaging platform in Africa.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">phone_android</span>
                </div>
                <CardTitle>Mobile-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Solutions optimized for mobile devices, reflecting how most users access services.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">signal_cellular_alt</span>
                </div>
                <CardTitle>Low-Bandwidth Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Efficient solutions that work well even with limited bandwidth connectivity.</p>
              </CardContent>
            </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Operations?
                    </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our technology stack can solve your specific challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/audit">Start Free AI Audit</Link>
            </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
