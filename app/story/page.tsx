import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuIconContainer } from "@/components/ui/neu-icon-container";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Story | QENAI - AI Automation Agency Kenya",
  description: "Learn about QENAI's mission to bring world-class AI automation to African businesses. We're building the future of intelligent business operations in Kenya and beyond.",
  keywords: ["QENAI story", "AI company Kenya", "AI automation agency Kenya", "African AI company", "AI startup Kenya"],
  alternates: {
    canonical: "/story",
  },
};

export default function StoryPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "About", url: "https://qenai.com/story" },
          { name: "Our Story", url: "https://qenai.com/story" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">About Us</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Our <span className="text-primary italic">Story</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We started QENAI because we saw African businesses being left behind in the AI revolution. 
          Not because they lacked potential, but because existing AI solutions weren&apos;t built for 
          their reality.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-8 md:p-12 text-center">
          <NeuIconContainer className="mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">flag</span>
          </NeuIconContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            To make AI automation accessible, practical, and impactful for businesses across Africa. 
            We believe that every organization - regardless of size or technical sophistication - deserves 
            access to technology that can transform their operations.
          </p>
        </NeuCard>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">The Problem We Saw</h2>
            <p>
              Global AI solutions assume reliable internet, clean data, and Western business contexts. 
              African businesses operate differently. They deal with unique document formats, local 
              languages, inconsistent infrastructure, and business practices shaped by our own markets.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p>
              We don&apos;t just deploy off-the-shelf AI tools. We build and customize solutions that 
              work in African contexts. We train models on local data. We design for the connectivity 
              and infrastructure that actually exists. We understand the regulatory and business 
              environments our clients operate in.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4" id="why-qenai">Why QENAI?</h2>
            <p>
              QENAI stands for &quot;Quest for the Next AI.&quot; It represents our belief that the next 
              generation of AI won&apos;t just come from Silicon Valley - it will emerge from solving 
              real problems in underserved markets. We&apos;re not waiting for the future of AI; 
              we&apos;re building it here.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Journey</h2>
          <p className="text-gray-500">Key milestones in the QENAI story</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NeuCard className="p-8">
            <NeuIconContainer size="sm" className="mb-4">
              <span className="material-symbols-outlined text-2xl">lightbulb</span>
            </NeuIconContainer>
            <span className="text-sm text-primary font-bold">Founded</span>
            <h3 className="font-bold text-xl text-gray-800 mb-2 mt-1">The Beginning</h3>
            <p className="text-gray-500 text-sm">
              Started with a simple mission: bring practical AI automation to African businesses.
            </p>
          </NeuCard>

          <NeuCard className="p-8">
            <NeuIconContainer size="sm" className="mb-4">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </NeuIconContainer>
            <span className="text-sm text-primary font-bold">Growth</span>
            <h3 className="font-bold text-xl text-gray-800 mb-2 mt-1">Building the Team</h3>
            <p className="text-gray-500 text-sm">
              Assembled a team of AI engineers and business consultants who understand both technology and local contexts.
            </p>
          </NeuCard>

          <NeuCard className="p-8">
            <NeuIconContainer size="sm" className="mb-4">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </NeuIconContainer>
            <span className="text-sm text-primary font-bold">Today</span>
            <h3 className="font-bold text-xl text-gray-800 mb-2 mt-1">Expanding Impact</h3>
            <p className="text-gray-500 text-sm">
              Working with organizations across East Africa to transform how they operate with AI.
            </p>
          </NeuCard>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Learn More About Us</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/team">
            <NeuButton variant="secondary">Meet Our Team →</NeuButton>
          </Link>
          <Link href="/values">
            <NeuButton variant="secondary">Our Values →</NeuButton>
          </Link>
          <Link href="/cases">
            <NeuButton variant="secondary">Case Studies →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re ready to transform your operations or just exploring what&apos;s possible, 
            we&apos;d love to hear from you.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Start a Conversation
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
