"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Gradient Background */}
      <section className="hero-gradient min-h-screen flex flex-col items-center justify-center pt-32 pb-0 text-center text-white relative">
        <div className="relative z-10 px-6 mb-20 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-tight mb-8 drop-shadow-sm" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            Quest for the <br /> Next AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            QENAI takes your workflow challenges and transforms them into intelligent, 
            automated solutions—all while being completely tailored for African markets.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-blue-500 text-white h-16 px-12 rounded-2xl text-lg font-bold glow-button hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/audit">
                <span className="material-symbols-outlined mr-3">rocket_launch</span>
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Mockup Window */}
        <div className="relative z-10 w-full px-6 max-w-5xl mx-auto">
          <div className="relative mx-auto rounded-t-3xl border border-white/20 bg-black/40 backdrop-blur-2xl shadow-2xl">
            <div className="flex items-center gap-2 p-4 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/50"></div>
                <div className="size-3 rounded-full bg-amber-500/50"></div>
                <div className="size-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col gap-6 max-w-3xl mx-auto">
              <div className="flex justify-end">
                <div className="chat-bubble-ai max-w-md text-left">
                  <span className="text-xs uppercase font-bold opacity-70 mb-2 block">AI Analysis</span>
                  <p className="text-lg">&quot;Based on your workflow analysis, we&apos;ve identified 3 high-impact automation opportunities that could reduce manual processing by 73%.&quot;</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="chat-bubble-user max-w-xs text-left">
                  <p>Show me the implementation roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways We Help Section - Bento Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-2xl leading-[1.1]">
              Ways we make your workflows better
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* AI Real-time Answers Card (Large) */}
            <div className="md:col-span-7 rounded-[2.5rem] bg-primary text-white p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="glass-dark rounded-2xl p-6 mb-8 max-w-md">
                  <div className="flex justify-end mb-4">
                    <span className="bg-blue-500 text-xs px-3 py-1 rounded-full font-bold">What do I automate first?</span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-90 italic">
                    &quot;Based on your audit, start with invoice processing—it&apos;s taking 15 hours weekly and has a 3-week payback period. We&apos;ll have it running in under 5 days.&quot;
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">AI that answers questions for you, real-time</h3>
                <p className="text-blue-100 text-lg max-w-md">QENAI uses your data, processes, and context to deliver actionable insights instantly.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 size-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Instant Follow-up Insights Card */}
            <div className="md:col-span-5 rounded-[2.5rem] bg-slate-50 border border-slate-100 p-12 flex flex-col min-h-[500px]">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Instant follow-up insights</h3>
              <p className="text-slate-500 text-lg mb-12">Send perfectly drafted follow-up reports within seconds after every automation run.</p>
              <div className="mt-auto bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-bold text-slate-900">Daily Operations Report</div>
                  <button className="bg-blue-100 text-primary text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    Auto-send
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                    <div className="size-8 rounded-full bg-green-200 flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-600 text-sm">check</span>
                    </div>
                    <div className="h-2 w-24 bg-slate-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl opacity-60">
                    <div className="size-8 rounded-full bg-slate-200"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl font-bold text-slate-900 mb-2">98%</p>
              <p className="text-slate-500 text-sm font-medium">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900 mb-2">50+</p>
              <p className="text-slate-500 text-sm font-medium">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900 mb-2">73%</p>
              <p className="text-slate-500 text-sm font-medium">Time Savings Average</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900 mb-2">24/7</p>
              <p className="text-slate-500 text-sm font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Our Specialized Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[800px]">
            {/* AI Readiness & Workflow Audits (Large Card) */}
            <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
                <span className="text-slate-400 text-xs font-mono">01 / AUDITS</span>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">AI Readiness & Workflow Audits</h3>
                <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                  Comprehensive evaluation of your current systems and processes to identify AI integration opportunities. We map your data architecture to ensure seamless scaling.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/services/audits" className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer group/link">
                  Learn More 
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Strategic Advisory (Small Card) */}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 flex flex-col hover:shadow-2xl transition-all">
              <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit">
                <span className="material-symbols-outlined text-2xl">lightbulb</span>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-2">Strategic Advisory</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Expert guidance on AI governance, ethical implementation, and long-term roadmap planning.
              </p>
              <Link href="/services/advisory" className="mt-auto pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Automation Design (Medium Card) */}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit">
                  <span className="material-symbols-outlined text-2xl">settings_input_component</span>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-2">Automation Design</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Tailored automation strategies to streamline operations, reduce overhead, and enhance organizational productivity across departments.
                </p>
              </div>
              <div className="mt-6 aspect-video bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/30 text-5xl">schema</span>
              </div>
              <Link href="/services/automation" className="mt-4 flex items-center gap-2 text-primary font-bold text-sm">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Custom AI Model Development (Large Dark Card) */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-8 flex flex-col justify-between text-white hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-l from-primary to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="p-3 bg-white/10 rounded-lg text-white w-fit">
                  <span className="material-symbols-outlined text-2xl">neurology</span>
                </div>
                <h3 className="text-2xl font-bold mt-8 mb-4">Custom AI Model Development</h3>
                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Development of bespoke AI models designed to solve your specific business challenges. From LLM fine-tuning to proprietary vision systems.
                </p>
              </div>
              <div className="relative z-10 mt-8 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">98%</span>
                  <span className="text-xs text-slate-500 uppercase">Accuracy Rate</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-6">
                  <span className="text-2xl font-bold">4.2x</span>
                  <span className="text-xs text-slate-500 uppercase">ROI Average</span>
                </div>
              </div>
              <Link href="/services/custom-models" className="mt-6 flex items-center gap-2 text-primary font-bold text-sm">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support Section */}
      <section className="py-20 px-6 md:px-20 lg:px-40 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">Implementation & Ongoing Support</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Deployment is just the beginning. Our engineers provide hands-on support to maintain and optimize your AI infrastructure, ensuring your systems evolve alongside your business.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium">On-site Training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium">Scaling Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="font-medium">Ethics Compliance</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-video rounded-xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            <img 
              alt="Infrastructure" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Ready to start your AI journey?</h2>
          <p className="text-slate-500 text-lg">
            Book a consultation with our senior advisory team and discover how QENAI can transform your operations.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-blue-700 text-white px-10 py-6 h-auto rounded-lg text-lg font-bold transition-all shadow-xl shadow-primary/20"
            asChild
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
