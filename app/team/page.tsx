"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LEADERSHIP = [
  {
    name: "Martin Main",
    role: "Co-Founder & Chief Solutions Architect",
    bio: "Martin brings extensive experience in automation systems, operational design, and AI integration. Before co-founding QEN AI, he led digital transformation projects for SMEs across East Africa, worked in systems integration, and built automation frameworks for growing companies. His technical expertise spans the full automation and AI stack—from low-code platforms like n8n and Make, to custom Python development, to fine-tuning large language models for specific business applications. Martin's approach is deeply rooted in understanding business operations first, technology second. At QEN AI, Martin leads solution architecture, client discovery processes, and technical delivery. He's passionate about making complex AI accessible to non-technical stakeholders and building systems that people actually want to use. When not designing automation workflows, Martin explores Nairobi's vibrant tech community, mentors young developers, and experiments with new AI models to push the boundaries of what's possible.",
    expertise: [
      "AI Solution Architecture",
      "Workflow Automation (n8n, Zapier, Make)",
      "LLM Integration & Fine-Tuning",
      "Python & API Development",
      "Business Process Analysis"
    ],
    email: "martin@qenai.ai",
    linkedin: "https://linkedin.com/in/martinmain"
  },
  {
    name: "Glory Munoru",
    role: "Co-Founder & Chief Strategy Officer",
    bio: "Glory specializes in strategic implementation and brings years of experience working with businesses and organizations across East Africa. Before QEN AI, she led operational initiatives at growth-stage companies, managed stakeholder engagement for complex projects, and worked in corporate communications. Her strength lies in bridging the gap between technical possibility and organizational reality. Glory has a unique ability to listen deeply to operational challenges, translate them into clear automation opportunities, and ensure smooth adoption across teams. At QEN AI, Glory oversees client relationships, change management, strategic partnerships, and business development. She's driven by the belief that AI should enhance human capability, not create new complexity. Outside QEN AI, Glory advocates for ethical tech adoption, writes about AI in African business contexts, and supports women in tech initiatives across the continent.",
    expertise: [
      "AI Strategy & Adoption",
      "Change Management",
      "Stakeholder Engagement",
      "Operations & Workflow Design",
      "Client Success & Training"
    ],
    email: "glory@qenai.ai",
    linkedin: "https://linkedin.com/in/glorymunoru"
  }
];

const DEPARTMENTS = [
  {
    name: "Engineering",
    count: "60+",
    description: "Building scalable AI infrastructure",
    icon: "code"
  },
  {
    name: "Research",
    count: "25+",
    description: "Pushing the boundaries of AI",
    icon: "science"
  },
  {
    name: "Customer Success",
    count: "30+",
    description: "Ensuring client satisfaction",
    icon: "support_agent"
  },
  {
    name: "Operations",
    count: "35+",
    description: "Keeping everything running smoothly",
    icon: "settings"
  }
];

const OPENINGS = [
  { title: "Senior Automation Engineer", department: "Engineering", location: "Nairobi / Remote" },
  { title: "AI Solutions Architect", department: "Solutions", location: "Nairobi / Remote" },
  { title: "Client Success Manager", department: "Customer Success", location: "Nairobi" },
  { title: "Business Development Lead", department: "Business Development", location: "Nairobi / East Africa" }
];

export default function TeamPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Our Team</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Meet the Minds Behind <span className="text-primary">QENAI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A diverse team of AI researchers, engineers, and strategists united by a passion for building ethical, impactful technology.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              The founders who recognized the gap between enterprise AI expertise and African business realities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {LEADERSHIP.map((leader, i) => (
              <Card key={i} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row gap-6">
                    <Avatar className="w-32 h-32 mx-auto md:mx-0">
                      <AvatarFallback className="text-4xl bg-primary/10 text-primary">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                      <AvatarImage src="" alt={leader.name} />
                    </Avatar>
                    <div className="flex-1 text-center md:text-left">
                      <CardTitle className="text-2xl mb-2">{leader.name}</CardTitle>
                      <p className="text-primary font-medium mb-4">{leader.role}</p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {leader.expertise.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Separator />
                  <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                  <Separator />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        Connect on LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={`mailto:${leader.email}`}>
                        Email {leader.name.split(' ')[0]}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Working With QEN AI Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-muted/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Working With QEN AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in collaboration. For specific projects, we work with specialized partners, advisors, and technical collaborators who bring deep domain expertise. This collaborative approach ensures we deliver the best possible solutions for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Departments</h2>
            <p className="text-lg text-muted-foreground">
              Cross-functional teams working together to deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEPARTMENTS.map((dept, i) => (
              <div key={i} className="text-center p-8 rounded-xl bg-background border hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">{dept.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{dept.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{dept.count}</div>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Culture</h2>
            <p className="text-lg text-muted-foreground">
              What it's like to work at QENAI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "diversity_3", title: "Diverse & Inclusive", description: "We celebrate different perspectives and backgrounds." },
              { icon: "school", title: "Continuous Learning", description: "Annual learning budget and weekly knowledge sharing sessions." },
              { icon: "work_history", title: "Work-Life Balance", description: "Flexible hours and generous PTO policy." },
              { icon: "health_and_safety", title: "Health & Wellness", description: "Comprehensive health insurance and mental health support." },
              { icon: "language", title: "Remote-Friendly", description: "Distributed team across 15+ countries." },
              { icon: "rocket_launch", title: "Impact-Driven", description: "Work on projects that matter to millions of users." }
            ].map((value, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Join us in shaping the future of enterprise AI.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {OPENINGS.map((job, i) => (
              <Card key={i} className="hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">work</span>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Apply</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see your role? We're always looking for exceptional talent.</p>
            <Button size="lg" asChild>
              <Link href="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
