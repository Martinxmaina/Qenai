import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FAQ_CATEGORIES = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "What is QENAI and what do you offer?",
        answer: "QENAI is an enterprise AI platform that helps organizations deploy, manage, and scale AI solutions. We offer end-to-end AI services including consulting, development, deployment, and ongoing support."
      },
      {
        question: "How long does a typical implementation take?",
        answer: "Implementation timelines vary based on project complexity. Simple solutions can be deployed in 4-6 weeks, while complex enterprise implementations may take 3-6 months. We work with you to define realistic timelines during the discovery phase."
      },
      {
        question: "Do I need in-house AI expertise to use QENAI?",
        answer: "No. While having AI expertise helps, it's not required. Our team handles the heavy lifting and provides training to your staff. We design solutions that your team can maintain and extend over time."
      }
    ]
  },
  {
    title: "Technical",
    faqs: [
      {
        question: "What technologies does QENAI use?",
        answer: "We use industry-leading open-source tools including PyTorch, TensorFlow, Kubernetes, and major cloud platforms (AWS, Google Cloud, Azure). Our proprietary orchestration layer sits on top to provide seamless integration and management."
      },
      {
        question: "Can QENAI integrate with our existing systems?",
        answer: "Yes. We provide REST APIs, GraphQL endpoints, and custom connectors for popular enterprise software. Our solutions are designed to work within your existing technology ecosystem."
      },
      {
        question: "How do you ensure model performance doesn't degrade?",
        answer: "We implement continuous monitoring for data drift, concept drift, and model performance. Automated alerts notify you of any issues, and our retraining pipelines ensure models stay current."
      }
    ]
  },
  {
    title: "Security & Compliance",
    faqs: [
      {
        question: "Is QENAI compliant with data privacy regulations?",
        answer: "Yes. We are SOC 2 Type II certified and fully compliant with GDPR, CCPA, and HIPAA. All data is encrypted in transit and at rest. We can deploy solutions entirely within your infrastructure if needed."
      },
      {
        question: "Who owns the data and models?",
        answer: "You do. All data, models, and IP created during our engagement belong to you. We never share your data with third parties or use it to train models for other clients."
      },
      {
        question: "What security measures are in place?",
        answer: "We implement end-to-end encryption, role-based access control, regular security audits, and compliance monitoring. All our engineers undergo security training and background checks."
      }
    ]
  },
  {
    title: "Pricing & Support",
    faqs: [
      {
        question: "How does pricing work?",
        answer: "We offer flexible pricing models including project-based, subscription, and consumption-based options. Pricing depends on your specific requirements, scale, and support needs. Contact us for a custom quote."
      },
      {
        question: "What support do you provide?",
        answer: "We offer 24/7 enterprise support with guaranteed response times. Support includes bug fixes, performance optimization, and feature enhancements. We also provide training and documentation."
      },
      {
        question: "Can we start with a pilot project?",
        answer: "Absolutely. We recommend starting with a focused pilot to demonstrate value before scaling. Most pilots run 8-12 weeks and include a clear success criteria and ROI measurement."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about QENAI and our enterprise AI solutions.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {FAQ_CATEGORIES.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                    {categoryIndex + 1}
                  </div>
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Explore More</h2>
            <p className="text-lg text-muted-foreground">
              Find additional resources and information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "description",
                title: "Documentation",
                description: "Detailed technical guides and API references",
                link: "/resources"
              },
              {
                icon: "school",
                title: "Tutorials",
                description: "Step-by-step guides to get started",
                link: "/resources"
              },
              {
                icon: "support_agent",
                title: "Contact Support",
                description: "Get help from our team",
                link: "/contact"
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-xl bg-background border hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={item.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-primary mb-6 block">help</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/audit">Start Free AI Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
