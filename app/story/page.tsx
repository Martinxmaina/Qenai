import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StoryPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-6xl md:text-8xl font-serif leading-tight tracking-tight mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            Quest for the Next AI
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Driven by a mission to redefine the future of intelligence, our history is rooted in solving complex challenges with elegant AI solutions.
          </p>
          <div className="mt-8">
            <button className="group flex items-center gap-2 text-white font-semibold text-lg hover:gap-4 transition-all mx-auto">
              Explore our journey
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Foundation - Bento Grid */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">Our Foundation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Our Story (Large Block) */}
            <div className="md:col-span-4 rounded-xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">The Genesis</span>
              <h3 className="text-3xl font-bold mb-4">Our Story</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-6">
                Founded in Nairobi by a team passionate about bringing AI transformation to African businesses, 
                QENAI began with a simple mission: make enterprise AI accessible, practical, and impactful 
                for organizations across the continent.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Today, we&apos;ve grown into a trusted partner for businesses seeking to harness AI without 
                the complexity. We bridge the gap between theoretical AI and real-world business applications.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-semibold italic">
                  &quot;Innovation at scale&quot;
                </div>
              </div>
            </div>

            {/* The Team Block */}
            <div 
              className="md:col-span-2 rounded-xl overflow-hidden relative group min-h-[300px] bg-cover bg-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')` 
              }}
            >
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">The Team</h3>
                <p className="text-sm text-white/80 font-normal leading-snug">
                  A diverse team of engineers, strategists, and AI specialists based in Nairobi, 
                  serving clients across East Africa and beyond.
                </p>
              </div>
            </div>

            {/* Our Values Block */}
            <div className="md:col-span-3 rounded-xl bg-white border border-slate-200 p-8 flex flex-col justify-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-sm mb-1 uppercase tracking-tight">Radical Transparency</p>
                  <p className="text-xs text-slate-500">Open processes that you can trust and verify.</p>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1 uppercase tracking-tight">Human-Centric Design</p>
                  <p className="text-xs text-slate-500">AI that augments intelligence, never replaces it.</p>
                </div>
              </div>
            </div>

            {/* Stats Block */}
            <div className="md:col-span-3 rounded-xl bg-primary text-white p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all">
              <span className="text-4xl font-black mb-1">99.9%</span>
              <span className="text-xs font-medium uppercase tracking-widest opacity-80">System Reliability</span>
              <div className="w-full h-px bg-white/20 my-4"></div>
              <span className="text-lg font-serif italic opacity-90" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                &quot;Securing the digital future, one node at a time.&quot;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl font-bold mb-6 tracking-tight leading-tight">Our Approach to AI</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                We don&apos;t just build models; we engineer ecosystems. Our methodology ensures that every 
                solution is resilient, ethical, and performant.
              </p>
              <div className="mt-10">
                <Button className="bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white" asChild>
                  <Link href="/values">View Our Values</Link>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Approach Items */}
              {[
                {
                  icon: "shield",
                  title: "Ethical Integration",
                  description: "Prioritizing transparency and fairness in every model we build through rigorous bias-detection protocols."
                },
                {
                  icon: "cloud_sync",
                  title: "Scalable Infrastructure",
                  description: "Robust systems designed to grow alongside your business needs, handling large volumes of data with ease."
                },
                {
                  icon: "lightbulb",
                  title: "Continuous Innovation",
                  description: "Always pushing the boundaries of what is possible in machine learning through R&D partnerships."
                },
                {
                  icon: "api",
                  title: "Seamless Integration",
                  description: "API-first philosophy allows our AI to slot directly into your existing software stack without friction."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-slate-200 bg-slate-50 group hover:shadow-lg transition-all">
                  <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose QENAI Stats */}
      <section className="py-24 px-6 md:px-20 lg:px-40 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Clients Choose QENAI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-primary mb-4">50+</span>
              <h4 className="font-bold mb-2">Enterprise Partners</h4>
              <p className="text-slate-500 text-sm">Trusted by leading organizations across East Africa.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-primary mb-4">73%</span>
              <h4 className="font-bold mb-2">Avg. Time Savings</h4>
              <p className="text-slate-500 text-sm">Reduction in manual processing time.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-primary mb-4">4.9/5</span>
              <h4 className="font-bold mb-2">Support Rating</h4>
              <p className="text-slate-500 text-sm">Dedicated AI specialists at your service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Ready to start your AI journey?</h2>
          <p className="text-slate-500 text-lg">
            Book a consultation with our team and discover how QENAI can transform your operations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-10 py-6 h-auto rounded-lg text-lg font-bold" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
