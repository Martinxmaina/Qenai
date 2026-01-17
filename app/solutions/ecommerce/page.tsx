import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import { Logo } from "@/components/icons/Logo";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "AI for E-commerce & Retail | QENAI - AI Automation Agency Kenya",
  description: "Boost your e-commerce business with AI. From personalized recommendations to inventory optimization, our retail AI solutions drive sales and efficiency.",
  keywords: ["AI for e-commerce", "retail AI Kenya", "e-commerce automation", "personalization AI", "AI automation agency Kenya"],
  alternates: {
    canonical: "/solutions/ecommerce",
  },
};

const ECOMMERCE_FEATURES = [
  {
    icon: "recommend",
    title: "Product Recommendations",
    description: "Personalized suggestions that increase average order value and customer satisfaction."
  },
  {
    icon: "inventory",
    title: "Inventory Optimization",
    description: "AI-powered demand forecasting to reduce stockouts and overstock situations."
  },
  {
    icon: "smart_toy",
    title: "Customer Service Bots",
    description: "24/7 support for order inquiries, returns, and product questions."
  },
  {
    icon: "local_shipping",
    title: "Logistics Optimization",
    description: "Smart routing and delivery scheduling that reduces costs and improves speed."
  }
];

export default function EcommercePage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "Solutions", url: "https://qenai.com/solutions" },
          { name: "E-commerce & Retail", url: "https://qenai.com/solutions/ecommerce" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">E-commerce Solutions</NeuTag>
        <Logo size="lg" className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          AI for E-commerce & <span className="text-primary italic">Retail</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          In e-commerce, personalization wins. Our retail AI solutions help you deliver 
          the right product to the right customer at the right time - while optimizing 
          your operations behind the scenes.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Boost Your Store
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
        <NeuCard className="p-6 md:p-8 flex flex-col md:flex-row-reverse items-center gap-8 overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="AI for E-commerce - Online shopping experience"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Every Interaction, Personalized
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Your competitors are using AI to personalize every touchpoint. From product 
              recommendations to customer service, AI helps you create experiences that 
              convert browsers into buyers and buyers into loyalists.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Increase conversion rates with personalization
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Reduce cart abandonment with smart nudges
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Integration with major e-commerce platforms
              </li>
            </ul>
          </div>
        </NeuCard>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">E-commerce AI Features</h2>
          <p className="text-gray-500">Tools that drive sales and efficiency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ECOMMERCE_FEATURES.map((feature, i) => (
            <NeuCard key={i} className="p-8">
              <NeuIconContainer size="sm" className="mb-4">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </NeuIconContainer>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* Relevant Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Relevant Services</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/customer-experience">
            <NeuButton variant="secondary">Customer Experience AI →</NeuButton>
          </Link>
          <Link href="/services/automation">
            <NeuButton variant="secondary">Workflow Automation →</NeuButton>
          </Link>
          <Link href="/services/custom-models">
            <NeuButton variant="secondary">Custom AI Models →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Outpace the Competition?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI can help you sell more, serve better, and operate smarter.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Get Started
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
