import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI-Powered Customer Experience | QENAI - AI Automation Agency Kenya",
  description: "Transform customer interactions with AI-powered chatbots, sentiment analysis, and personalized experiences. Deliver 24/7 support that scales without adding headcount.",
  keywords: ["AI customer experience", "AI chatbot Kenya", "customer service automation", "AI automation agency Kenya", "conversational AI Africa"],
  alternates: {
    canonical: "/services/customer-experience",
  },
  openGraph: {
    title: "AI-Powered Customer Experience | QENAI",
    description: "AI solutions that transform how you engage with customers - from chatbots to sentiment analysis.",
    url: "https://qenai.com/services/customer-experience",
  },
};

const CX_FEATURES = [
  {
    icon: "smart_toy",
    title: "AI Chatbots",
    description: "Intelligent chatbots that handle inquiries, process orders, and resolve issues around the clock."
  },
  {
    icon: "sentiment_satisfied",
    title: "Sentiment Analysis",
    description: "Understand customer emotions in real-time to prioritize and personalize responses."
  },
  {
    icon: "route",
    title: "Smart Routing",
    description: "Automatically route complex issues to the right agent with full context."
  },
  {
    icon: "translate",
    title: "Multilingual Support",
    description: "Serve customers in English, Swahili, and other local languages seamlessly."
  },
  {
    icon: "trending_up",
    title: "Predictive Service",
    description: "Anticipate customer needs and reach out proactively before problems escalate."
  },
  {
    icon: "analytics",
    title: "CX Analytics",
    description: "Deep insights into customer journeys, satisfaction drivers, and improvement opportunities."
  }
];

export default function CustomerExperiencePage() {
  return (
    <>
      <Navbar />
    <main className="flex-1 bg-[#E0E5EC]">
      <ServiceSchema
        name="AI-Powered Customer Experience"
        description="Transform customer interactions with AI chatbots, sentiment analysis, and automated support"
        url="https://qenai.com/services/customer-experience"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Services", url: "https://qenai.com/services" },
          { name: "Customer Experience AI", url: "https://qenai.com/services/customer-experience" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-48 lg:pt-56 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Customer Experience</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI-Powered Customer <span className="text-primary italic">Experience</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Your customers expect instant, personalized service. Our AI customer experience solutions 
          deliver 24/7 support that scales without adding headcount - while making every interaction 
          feel human.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Transform Your CX
            </NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary" size="lg">
              See Results
            </NeuButton>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="AI Customer Experience - Happy customer interaction"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Be There for Every Customer, Every Time
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Missed calls mean lost customers. Slow responses mean frustrated customers. 
              Our AI customer experience solutions ensure you&apos;re always available, always 
              helpful, and always improving.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Instant response to common inquiries
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Seamless handoff to human agents when needed
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Works on WhatsApp, web, and social channels
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* CX Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">CX AI Capabilities</h2>
          <p className="text-gray-500">Transform every touchpoint of the customer journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CX_FEATURES.map((feature, i) => (
            <NeuCard key={i} className="p-6">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Related Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/automation">
            <NeuButton variant="secondary">AI Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/custom-models">
            <NeuButton variant="secondary">Custom AI Models →</NeuButton>
          </Link>
          <Link href="/services/knowledge-systems">
            <NeuButton variant="secondary">Knowledge Systems →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Competitors Are Already Using AI for CX
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let slow response times cost you customers. Let&apos;s discuss how AI can 
            transform your customer experience.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Upgrade Your CX
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
      <Footer />
    </>
  );
}
