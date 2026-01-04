"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const CASE_STUDIES = [
  {
    company: "Mid-Sized Manufacturing Company",
    industry: "Corporate",
    service: "AI Automation",
    serviceHref: "/services/automation",
    challenge: "Manual order processing consuming 20+ hours/week with frequent errors",
    solution: "Automated workflow with intelligent data extraction and ERP integration",
    results: [
      "85% reduction in processing time",
      "Eliminated data entry errors completely",
      "Freed up two staff members for strategic work"
    ],
    metrics: {
      timeSaved: "85%",
      roi: "7-month payback period",
      staffFreed: "2 employees"
    },
    technology: ["n8n", "Python", "ERP Integration", "AI Data Extraction"],
    icon: "precision_manufacturing",
    color: "from-blue-500 to-cyan-500"
  },
  {
    company: "E-commerce Retailer",
    industry: "E-commerce",
    service: "Customer Experience",
    serviceHref: "/services/customer-experience",
    challenge: "Customer support overwhelmed with repetitive inquiries, 24-hour response times",
    solution: "AI-powered chatbot with product knowledge base and order tracking",
    results: [
      "70% of inquiries handled instantly by AI",
      "Response time under 5 minutes",
      "Customer satisfaction up 35%"
    ],
    metrics: {
      inquiriesHandled: "70%",
      responseTime: "< 5 minutes",
      satisfaction: "+35%"
    },
    technology: ["Claude API", "RAG System", "Shopify Integration", "WhatsApp Business"],
    icon: "shopping_cart",
    color: "from-purple-500 to-pink-500"
  },
  {
    company: "Professional Services Firm",
    industry: "Professional Services",
    service: "Knowledge Systems",
    serviceHref: "/services/knowledge-systems",
    challenge: "Scattered information across documents, difficulty finding past project insights",
    solution: "RAG-based knowledge system with semantic search and automated documentation",
    results: [
      "70-80% time reduction in information searches",
      "40-60% faster onboarding for new team members",
      "85% of routine questions answered instantly"
    ],
    metrics: {
      searchTimeReduction: "70-80%",
      onboardingSpeed: "40-60% faster",
      questionsAnswered: "85%"
    },
    technology: ["Pinecone", "Claude API", "Document Processing", "Slack Integration"],
    icon: "business_center",
    color: "from-indigo-500 to-blue-500"
  },
  {
    company: "NGO with Field Operations",
    industry: "NGOs",
    service: "AI Automation",
    serviceHref: "/services/automation",
    challenge: "Field teams spending 30% of time on administrative reporting",
    solution: "Mobile-first data collection with automated aggregation and real-time reporting",
    results: [
      "65% reduction in admin burden",
      "Improved data quality significantly",
      "Enabled real-time reporting capabilities"
    ],
    metrics: {
      adminTimeReduction: "65%",
      costSavings: "Significant annual savings",
      dataQuality: "Significantly improved"
    },
    technology: ["n8n", "Mobile Forms", "Airtable", "Custom Dashboard"],
    icon: "volunteer_activism",
    color: "from-green-500 to-emerald-500"
  },
  {
    company: "Financial Services Company",
    industry: "Financial Services",
    service: "Customer Experience",
    serviceHref: "/services/customer-experience",
    challenge: "Complex client onboarding taking 3-5 days with multiple documents and compliance requirements",
    solution: "AI assistant guiding clients through onboarding with automated document collection and compliance verification",
    results: [
      "Onboarding time reduced by 60%",
      "100% compliance rate achieved",
      "Improved client experience scores"
    ],
    metrics: {
      timeReduction: "60%",
      compliance: "100%",
      clientSatisfaction: "Significantly improved"
    },
    technology: ["Claude API", "Document Processing", "Compliance Checks", "CRM Integration"],
    icon: "account_balance",
    color: "from-teal-500 to-green-500"
  },
  {
    company: "Tech Startup",
    industry: "SMEs",
    service: "Knowledge Systems",
    serviceHref: "/services/knowledge-systems",
    challenge: "Growing team struggling with knowledge transfer, repetitive questions to leadership",
    solution: "AI-powered internal chatbot with access to company knowledge base",
    results: [
      "85% of routine questions answered instantly",
      "15 hours/week leadership time saved",
      "40% faster onboarding for new hires"
    ],
    metrics: {
      questionsAnswered: "85%",
      timeSaved: "15 hours/week",
      onboardingSpeed: "40% faster"
    },
    technology: ["RAG System", "Claude API", "Slack Integration", "Knowledge Base"],
    icon: "rocket_launch",
    color: "from-orange-500 to-red-500"
  }
];

const INDUSTRIES = ["All", "Corporate", "E-commerce", "Professional Services", "NGOs", "Financial Services", "SMEs"];
const SERVICES = ["All", "AI Automation", "Customer Experience", "Knowledge Systems"];

export default function CasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry;
    const serviceMatch = selectedService === "All" || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Case Studies & Impact</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Real Results from <span className="text-primary">Real Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how businesses across East Africa have transformed their operations with QEN AI's automation and AI solutions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground self-center">Filter by Industry:</span>
              {INDUSTRIES.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-muted-foreground self-center">Filter by Service:</span>
              {SERVICES.map((service) => (
                <Button
                  key={service}
                  variant={selectedService === service ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies match the selected filters.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSelectedIndustry("All");
                setSelectedService("All");
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStudies.map((study, i) => (
                <Card key={i} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
                  {/* Header with gradient */}
                  <div className={`h-24 bg-gradient-to-br ${study.color} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <span className="material-symbols-outlined text-5xl text-white relative z-10">{study.icon}</span>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{study.company}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">{study.industry}</Badge>
                          <Badge variant="secondary">{study.service}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-foreground">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-foreground">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Results</h3>
                      <div className="space-y-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-sm font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Technology</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technology.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={study.serviceHref}>
                          View Service
                          <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href="/contact">
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Impact by the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Real results from businesses across East Africa that have transformed their operations with QEN AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "73%", label: "Average Time Reduction" },
              { value: "5-8 months", label: "Average ROI Payback" },
              { value: "98.4%", label: "Efficiency Improvement" },
              { value: "50+", label: "Organizations Transformed" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-xl bg-background border">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The audit process opened our eyes to automation opportunities we never considered. The ROI was evident within months of implementation.",
                author: "Operations Director",
                role: "Mid-Sized Manufacturing Company, Nairobi"
              },
              {
                quote: "Our customer support team was drowning in repetitive inquiries. The AI chatbot now handles 70% of them instantly, and our customer satisfaction scores have never been higher.",
                author: "Customer Experience Manager",
                role: "E-commerce Retailer, Kenya"
              },
              {
                quote: "QEN AI didn't just implement technology—they understood our operations first. The knowledge system has transformed how our team accesses information and onboard new members.",
                author: "Managing Partner",
                role: "Professional Services Firm, East Africa"
              }
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4 block">format_quote</span>
                  <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Write Your Success Story?
                    </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how QENAI can help you achieve similar results.
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
