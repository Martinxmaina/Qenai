import { Metadata } from "next";
import Link from "next/link";
import { NeuCard } from "@/components/ui/neu-card";
import { NeuButton } from "@/components/ui/neu-button";
import { NeuTag } from "@/components/ui/neu-tag";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import TeamMemberCard from "@/components/team/TeamMemberCard";

export const metadata: Metadata = {
  title: "Our Team | QENAI - AI Automation Agency Kenya",
  description: "Meet the QENAI team. AI engineers, business strategists, and domain experts working together to transform African businesses with intelligent automation.",
  keywords: ["QENAI team", "AI experts Kenya", "AI automation agency Kenya", "AI consultants Africa"],
  alternates: {
    canonical: "/team",
  },
};

const TEAM_MEMBERS = [
  {
    name: "Martin Maina",
    title: "Founder & AI Engineer",
    image: "/team/martin-maina.jpg",
    linkedin: "https://www.linkedin.com/in/martinxmaina/",
    bio: "Martin is an AI engineer with extensive experience in automation systems, operational design, and AI integration. He leads solution architecture at QENAI, specializing in custom Python development, LLM fine-tuning, and making complex AI accessible to non-technical stakeholders.",
    skills: [
      "Automation Systems",
      "Operational Design",
      "AI Integration",
      "Python Development",
      "LLM Fine-tuning"
    ]
  },
  {
    name: "Glory Munoru",
    title: "Co-Founder & Chief Strategy Officer",
    image: "/team/glory-munoru.jpg",
    linkedin: "https://www.linkedin.com/in/glory-munoru-93020b147/",
    bio: "Glory specializes in AI strategy and change management, bridging the gap between technical possibility and organizational reality. She oversees client relationships and strategic partnerships at QENAI, ensuring smooth AI adoption across teams.",
    skills: [
      "AI Strategy & Adoption",
      "Change Management",
      "Stakeholder Engagement",
      "Operations & Workflow Design",
      "Client Success & Training"
    ]
  }
];

export default function TeamPage() {
  return (
    <main className="flex-1 bg-[#E0E5EC]">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://qenai.com" },
          { name: "About", url: "https://qenai.com/story" },
          { name: "Team", url: "https://qenai.com/team" },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 text-center max-w-4xl mx-auto">
        <NeuTag className="mb-6">Our People</NeuTag>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6 leading-tight">
          Meet Our <span className="text-primary italic">Team</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          QENAI brings together AI engineers, business strategists, and domain experts who share 
          one thing: a passion for making AI work in African contexts. We&apos;re not just building 
          technology - we&apos;re building the future of business operations on the continent.
        </p>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Our Leadership</h2>
          <p className="text-gray-500">The founders behind QENAI&apos;s impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <NeuCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Work</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We believe the best solutions come from diverse perspectives working together. 
                Our team combines deep technical expertise with real-world business understanding - because 
                AI that doesn&apos;t solve real problems isn&apos;t worth building.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Cross-functional collaboration on every project
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Client-embedded delivery approach
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Continuous learning and knowledge sharing
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We&apos;re always looking for talented people who want to build AI that matters. 
                If you&apos;re passionate about technology and its potential to transform African 
                businesses, we want to hear from you.
              </p>
              <Link href="/contact">
                <NeuButton variant="primary">
                  View Open Positions
                </NeuButton>
              </Link>
            </div>
          </div>
        </NeuCard>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Learn More About Us</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/story">
            <NeuButton variant="secondary">Our Story →</NeuButton>
          </Link>
          <Link href="/values">
            <NeuButton variant="secondary">Our Values →</NeuButton>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <NeuCard className="p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Work With Us
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Ready to see what our team can do for your organization? Let&apos;s start a conversation.
          </p>
          <Link href="/contact">
            <NeuButton variant="primary" size="lg">
              Get in Touch
            </NeuButton>
          </Link>
        </NeuCard>
      </section>
    </main>
  );
}
