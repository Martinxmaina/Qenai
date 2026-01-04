"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, ResponsiveContainer } from "recharts";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24 lg:pt-32 lg:pb-32 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-100 blur-[80px] opacity-60"></div>

        <div className="container relative mx-auto px-4 max-w-7xl">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm bg-blue-50 text-primary border-primary/20">
              <span className="mr-2 rounded-full bg-primary w-2 h-2 block animate-pulse"></span> v2.0 Released
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-foreground mb-4">
              Transform Operations. <br className="hidden sm:inline" />
              Scale Impact. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Build Smarter Systems.</span>
            </h1>
            
            <p className="text-lg font-semibold text-primary mb-2">
              Quest for the Next AI
            </p>

            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed mb-8">
              Enterprise-grade AI automation and intelligent solutions tailored for African businesses. From workflow audits to custom AI deployment, we turn operational challenges into competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg hover:-translate-y-0.5 transition-transform" asChild>
                <Link href="/audit">
                  Book Your Free AI Audit
                  <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
            
            <p className="mt-8 text-sm font-medium text-muted-foreground">
              Trusted by organizations across East Africa
            </p>
          </div>

          {/* AI Impact Dashboard */}
          <div className="mt-20 relative mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">See the Impact of AI Implementation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real metrics from businesses that transformed their operations with QEN AI
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left: Key Metrics */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Time Saved</CardTitle>
                    <CardDescription>Reduction in manual processing time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-primary">73%</span>
                        <span className="text-muted-foreground">average reduction</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-primary h-3 rounded-full" style={{ width: "73%" }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground">Clients save an average of 15+ hours per week on automated processes</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Efficiency Gain</CardTitle>
                    <CardDescription>Overall operational improvement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-green-600">98.4%</span>
                        <span className="text-muted-foreground">improvement</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <span className="material-symbols-outlined">trending_up</span>
                        <span className="text-sm font-medium">+12% from baseline</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Measured across all client implementations</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ROI Timeline</CardTitle>
                    <CardDescription>Average payback period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-primary">5-8</span>
                        <span className="text-muted-foreground">months</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Most clients see positive ROI within 5-8 months of implementation</p>
                      <div className="flex gap-2 mt-4">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Month 1-3: Setup</Badge>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Month 4-6: Optimization</Badge>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Month 7+: Positive ROI</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Cost Savings Chart */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cost Savings Over Time</CardTitle>
                    <CardDescription>Monthly savings after AI implementation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        savings: {
                          label: "Monthly Savings",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <LineChart
                        data={[
                          { month: "Month 1", savings: 5000 },
                          { month: "Month 2", savings: 8500 },
                          { month: "Month 3", savings: 12000 },
                          { month: "Month 4", savings: 18000 },
                          { month: "Month 5", savings: 25000 },
                          { month: "Month 6", savings: 32000 },
                        ]}
                        margin={{ left: 12, right: 12 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <ChartTooltip
                          content={<ChartTooltipContent />}
                        />
                        <Line
                          dataKey="savings"
                          type="monotone"
                          stroke="var(--color-savings)"
                          strokeWidth={2}
                          dot={{ fill: "var(--color-savings)", r: 4 }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Before & After Comparison</CardTitle>
                    <CardDescription>Typical workflow transformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-200">
                        <div>
                          <p className="font-semibold text-red-900">Before AI</p>
                          <p className="text-sm text-red-700">Manual processing: 40 hours/week</p>
                        </div>
                        <span className="text-2xl font-bold text-red-600">40h</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-2xl">arrow_downward</span>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
                        <div>
                          <p className="font-semibold text-green-900">After AI</p>
                          <p className="text-sm text-green-700">Automated processing: 2 hours/week</p>
                        </div>
                        <span className="text-2xl font-bold text-green-600">2h</span>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-sm font-medium text-center text-muted-foreground">
                          <span className="text-primary font-bold">95% time reduction</span> - 38 hours saved per week
                        </p>
                      </div>
                </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/cases">
                  View Real Case Studies
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-24">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">Trusted by organizations across East Africa</p>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {["Leading Healthcare Provider", "Global Financial Institution", "Regional Manufacturing Leader", "Tech Innovation Hub"].map((client, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                    <div className="flex items-center justify-center p-4">
                      <div className="text-lg font-semibold text-muted-foreground text-center">{client}</div>
            </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">
              Our approach is built on three core principles that ensure your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">hearing</span>
                </div>
                <CardTitle className="text-xl">Deep Listening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We start with understanding your challenges, not selling tools. Our discovery-first approach ensures solutions fit your reality.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
                <CardTitle className="text-xl">Practical Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Measurable results from day one. We focus on high-ROI automation that directly addresses your operational pain points.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">public</span>
                </div>
                <CardTitle className="text-xl">Context-Aware Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Built for African markets. Our solutions account for local infrastructure, regulatory requirements, and business realities.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/story">Learn About Our Approach</Link>
            </Button>
          </div>
            </div>
      </section>

      {/* Business Impact Section */}
      <section className="border-y bg-muted/40 py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Real Results, Measurable Impact</h2>
            <p className="text-lg text-muted-foreground">
              See the tangible benefits our clients experience.
            </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold tracking-tighter text-primary mb-2">73%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Average Reduction in Manual Processing Time</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold tracking-tighter text-primary mb-2">45%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Improvement in Customer Response Speed</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold tracking-tighter text-primary mb-2">5-8</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Month Average ROI on Automation Investment</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-5xl font-bold tracking-tighter text-primary mb-2">99.7%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Uptime Across Deployed Solutions</div>
              </CardContent>
            </Card>
            </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/cases">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI solutions designed to transform your operations and drive measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "assessment",
                title: "AI Readiness & Workflow Audits",
                description: "Comprehensive assessment of your operations, identifying high-impact automation opportunities while accounting for your organization's capabilities and readiness.",
                link: "/audit"
              },
              {
                icon: "settings",
                title: "AI Automation Design & Deployment",
                description: "Transform identified operational inefficiencies into robust, scalable automated systems that run reliably in the background.",
                link: "/solutions"
              },
              {
                icon: "support_agent",
                title: "AI-Powered Customer Experience",
                description: "Intelligent automation handling routine inquiries instantly, while your human team focuses on complex issues and relationship building.",
                link: "/solutions"
              },
              {
                icon: "menu_book",
                title: "Productivity & Knowledge Systems",
                description: "AI-powered systems that make organizational intelligence instantly accessible, answering questions and surfacing relevant information contextually.",
                link: "/solutions"
              },
              {
                icon: "psychology",
                title: "Custom AI Model Development & Fine-Tuning",
                description: "Create models that understand your industry's language, follow your specific processes, and maintain your brand voice with expert-level accuracy.",
                link: "/technology"
              },
              {
                icon: "school",
                title: "Advisory & Capacity Building",
                description: "Strategic AI guidance, hands-on training, change management support, and ongoing advisory to build organizational capability for long-term success.",
                link: "/contact"
              }
            ].map((service, i) => (
              <HoverCard key={i} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer h-full">
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-6xl text-primary">{service.icon}</span>
                  </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full group-hover:text-primary" asChild>
                        <Link href={service.link}>
                          Learn More
                          <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <Button size="sm" className="w-full mt-4" asChild>
                      <Link href={service.link}>Explore Service</Link>
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
              ))}
            </div>
                  </div>
      </section>

      {/* Technology Stack Showcase */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Built on Enterprise-Grade Technology</h2>
            <p className="text-lg text-muted-foreground">
              Industry-leading tools and frameworks that power our AI solutions.
            </p>
                      </div>

          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="ai-ml">AI/ML</TabsTrigger>
              <TabsTrigger value="data">Data Management</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
            </TabsList>
            <TabsContent value="automation" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["n8n", "Zapier", "Make", "Go High Level"].map((tech, i) => (
                  <Card key={i} className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="font-semibold text-lg">{tech}</div>
                      <div className="text-sm text-muted-foreground mt-2">Automation Platform</div>
                    </CardContent>
                  </Card>
                    ))}
                  </div>
            </TabsContent>
            <TabsContent value="ai-ml" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Custom Fine-Tuned Models"].map((tech, i) => (
                  <Card key={i} className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="font-semibold text-lg">{tech}</div>
                      <div className="text-sm text-muted-foreground mt-2">AI Model</div>
                    </CardContent>
                  </Card>
                ))}
                      </div>
            </TabsContent>
            <TabsContent value="data" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Airtable", "PostgreSQL", "MongoDB", "Pinecone"].map((tech, i) => (
                  <Card key={i} className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="font-semibold text-lg">{tech}</div>
                      <div className="text-sm text-muted-foreground mt-2">Database</div>
                    </CardContent>
                  </Card>
                ))}
                      </div>
            </TabsContent>
            <TabsContent value="development" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Python", "Node.js", "Docker", "Git"].map((tech, i) => (
                  <Card key={i} className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="font-semibold text-lg">{tech}</div>
                      <div className="text-sm text-muted-foreground mt-2">Development Tool</div>
                </CardContent>
              </Card>
                ))}
            </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry Solutions Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Solutions for Every Industry</h2>
              <p className="text-lg text-muted-foreground">Tailored AI strategies designed to solve unique sector challenges across African markets.</p>
            </div>
            <Button variant="ghost" asChild className="group">
              <Link href="/solutions">
                View all industries <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "business", 
                title: "Corporate Enterprises", 
                challenges: ["Operational efficiency", "Data-driven decision making", "Scalable automation"]
              },
              { 
                icon: "rocket_launch", 
                title: "SMEs & Startups", 
                challenges: ["Resource optimization", "Rapid scaling", "Cost-effective solutions"]
              },
              { 
                icon: "volunteer_activism", 
                title: "NGOs & Humanitarian Organizations", 
                challenges: ["Field operations efficiency", "Donor reporting", "Resource allocation"]
              },
              { 
                icon: "work", 
                title: "Professional Services", 
                challenges: ["Client onboarding", "Knowledge management", "Service delivery optimization"]
              }
            ].map((item, i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer h-full">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-6xl text-primary">{item.icon}</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-muted-foreground">Common challenges we solve:</p>
                    <ul className="space-y-1">
                      {item.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/solutions">
                      Explore Solutions
                      <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Leading Organizations Choose QEN AI</h2>
            <p className="text-lg text-muted-foreground">
              Based in Nairobi, Serving East Africa and Beyond
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "QEN AI transformed our operations. Their discovery-first approach identified opportunities we didn't even know existed.",
                author: "CEO",
                company: "Leading Manufacturing Company"
              },
              {
                quote: "The automation solutions delivered measurable ROI within months. Our team can now focus on strategic work instead of repetitive tasks.",
                author: "Operations Director",
                company: "Regional Financial Services Firm"
              },
              {
                quote: "Their understanding of African business contexts made all the difference. Solutions that actually work in our environment.",
                author: "CTO",
                company: "Growing Tech Startup"
              }
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4 block">format_quote</span>
                    <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                    <Separator />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Start with a complimentary AI readiness audit. No obligations, just insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/audit">Claim Your Free Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/contact">Schedule a Discovery Call</Link>
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70 mb-2">Contact Information</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
              <span>Nairobi, Kenya</span>
              <span>contact@qenai.ai</span>
              <span>+254 XXX XXX XXX</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
