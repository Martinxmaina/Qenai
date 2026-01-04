import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PHASES = [
  {
    id: "definition",
    title: "Use Case Definition & Data Assessment",
    duration: "2-3 weeks",
    activities: [
      "Specific task and performance requirements definition",
      "Current performance baseline establishment",
      "Training data availability and quality assessment",
      "Privacy and security requirements analysis",
      "Success metrics and evaluation criteria definition",
      "Feasibility analysis and ROI projection"
    ],
    deliverable: "Technical feasibility report and project plan"
  },
  {
    id: "preparation",
    title: "Data Preparation",
    duration: "3-6 weeks",
    activities: [
      "Training data collection and aggregation",
      "Data cleaning and quality assurance",
      "Data labeling and annotation (if needed)",
      "Validation and test set creation",
      "Bias detection and mitigation",
      "Compliance and privacy review"
    ],
    deliverable: "Prepared, cleaned, validated training dataset"
  },
  {
    id: "selection",
    title: "Model Selection & Architecture",
    duration: "1-2 weeks",
    activities: [
      "Base model selection (GPT-4, Claude, Mistral, Llama, or others)",
      "Fine-tuning approach determination (full fine-tuning, LoRA, prompt engineering)",
      "Infrastructure planning (cloud, on-premise, hybrid)",
      "Training pipeline design",
      "Evaluation framework setup"
    ],
    deliverable: "Technical architecture document"
  },
  {
    id: "training",
    title: "Training & Optimization",
    duration: "4-8 weeks",
    activities: [
      "Initial model training",
      "Performance evaluation against baseline",
      "Hyperparameter tuning and optimization",
      "Iterative refinement based on results",
      "Bias testing and correction",
      "Safety and alignment testing"
    ],
    deliverable: "Trained model with performance benchmarks"
  },
  {
    id: "deployment",
    title: "Deployment & Integration",
    duration: "2-4 weeks",
    activities: [
      "Production environment setup",
      "API development (if needed)",
      "Integration with your systems/workflows",
      "Monitoring and logging infrastructure",
      "Security hardening",
      "Backup and recovery procedures"
    ],
    deliverable: "Production-ready model with full integration"
  },
  {
    id: "evaluation",
    title: "Evaluation & Iteration",
    duration: "Ongoing",
    activities: [
      "Performance monitoring",
      "User feedback collection",
      "Model refinement based on real-world usage",
      "Regular retraining with new data",
      "Continuous improvement"
    ],
    deliverable: "Optimized model with ongoing support"
  }
];

const USE_CASES = [
  {
    title: "Legal Document Analysis for Law Firm",
    challenge: "Reviewing contracts takes 4-6 hours per document, significant cost, risk of missing critical clauses",
    solution: "Fine-tuned Claude model on 5,000+ past contracts, trained to identify key terms and risky clauses",
    impact: "Review time reduced from 4-6 hours to 45 minutes, higher consistency, junior associates freed for analysis"
  },
  {
    title: "Customer Service Response Generation for E-Commerce",
    challenge: "Generic AI responses lacked brand voice, often inappropriate, required heavy editing",
    solution: "Fine-tuned GPT-4 on 50,000+ past support conversations, trained to match brand voice",
    impact: "Response drafting time reduced by 75%, brand consistency, support team handles 3x volume"
  },
  {
    title: "Financial Analysis Model for Investment Firm",
    challenge: "General AI models lack context on African markets, economic dynamics, regulatory environment",
    solution: "Fine-tuned model on proprietary research, market reports, economic data",
    impact: "Initial research reports generated 70% faster, consistent analytical framework, competitive advantage"
  }
];


export default function CustomModelsServicePage() {
  return (
    <main className="flex-1">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Service</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Custom AI Model Development & <span className="text-primary">Fine-Tuning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Purpose-Built AI For Your Exact Needs. Create models that understand your industry's language and perform specialized tasks with expert-level accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <Link href="/audit">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">What is Custom AI Model Development?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                While general-purpose AI models like GPT-4 and Claude are incredibly powerful, they're trained on general knowledge and may 
                not excel at your specific business tasks. Custom AI model fine-tuning allows you to create models that understand your 
                industry's language, follow your specific processes, maintain your brand voice, and perform your specialized tasks with 
                expert-level accuracy.
              </p>
              <p>
                We fine-tune state-of-the-art AI models on your proprietary data, creating specialized systems that outperform general 
                models for your specific use cases while remaining secure and under your control. Whether it's understanding technical 
                jargon in your industry, following your company's analytical framework, or maintaining consistent brand communication, 
                custom models deliver superior results.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations with highly specialized domains or technical language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Companies needing consistent, brand-aligned AI-generated content at scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Businesses with proprietary processes or methodologies to encode in AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  <span>Organizations concerned about data privacy who need on-premise or private AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Business Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">30-60%</div>
                <CardTitle>Accuracy Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">For specialized tasks vs. general models</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">95%+</div>
                <CardTitle>Brand Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Adherence to brand guidelines and standards</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">2-5x</div>
                <CardTitle>Faster Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Specialized task completion vs. manual work</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">Complete</div>
                <CardTitle>Data Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Control over training data and model deployment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">What's Included</h2>
          </div>
          <Tabs defaultValue="definition" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 overflow-x-auto">
              {PHASES.map((phase) => (
                <TabsTrigger key={phase.id} value={phase.id} className="text-xs">
                  {phase.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            {PHASES.map((phase) => (
              <TabsContent key={phase.id} value={phase.id} className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">arrow_right</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Deliverable:</h4>
                      <p className="text-muted-foreground">{phase.deliverable}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Technology & Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Base Models</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>GPT-4</Badge>
                  <Badge>Claude</Badge>
                  <Badge>Mistral</Badge>
                  <Badge>Llama</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fine-Tuning Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>LoRA</Badge>
                  <Badge>Full Fine-Tuning</Badge>
                  <Badge>Prompt Engineering</Badge>
                  <Badge>RAG</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>GPU Clusters</Badge>
                  <Badge>Cloud Training</Badge>
                  <Badge>On-Premise</Badge>
                  <Badge>Hybrid</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Use Cases</h2>
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Related Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>AI Readiness & Workflow Audits</CardTitle>
                <CardDescription>Identify optimal fine-tuning use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/audits">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>AI Automation Design & Deployment</CardTitle>
                <CardDescription>Integrate fine-tuned models into workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/automation">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Advisory & Capacity Building</CardTitle>
                <CardDescription>AI strategy and governance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/5" asChild>
                  <Link href="/services/advisory">
                    Learn More
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Build Your Specialized AI
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's assess whether custom model development is right for your use case. Schedule a technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/contact">Book Technical Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/audit">Download Fine-Tuning Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

