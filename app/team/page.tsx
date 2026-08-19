import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Our Team | QENAI",
  description: "Meet the people helping organizations turn AI ambition into practical systems.",
};

const team = [
  { name: "Martin Maina", title: "Co-Founder & CTO", image: "/team/martin-maina.jpg", linkedin: "https://www.linkedin.com/in/martinxmaina/", bio: "Martin is the heart of the technical build. He owns the engineering architecture, builds the platform engines, and brings the technical product vision to life." },
  { name: "Glory Munoru", title: "Co-Founder & CSO", image: "/team/glory-munoru.jpg", linkedin: "https://www.linkedin.com/in/glory-munoru-93020b147/", bio: "Glory defines the company's direction and shapes the long-term vision. She designs product-market fit, develops core business models, and ensures strategic alignment across all initiatives." },
  { name: "Hansie Zefy", title: "Co-Founder & COO", image: "/team/hansie-zefy.jpg", linkedin: "https://www.linkedin.com/in/hansiezefy/", bio: "Hansie drives relationships, ecosystem partnerships, and execution. He manages partner and stakeholder relationships, accelerates client growth, and keeps the operational engine running smoothly." },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="px-6 pb-24 pt-48 text-center sm:px-10 lg:pt-56">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-400">The people behind Qenai</p>
        <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-normal leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-[7.25rem]">Built by people who believe AI should <span className="text-cyan-400">work for people.</span></h1>
        <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-slate-300">We combine technical craft with operational understanding to make AI useful in the real world.</p>
      </section>
      <section className="border-t border-slate-700/80 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-400">Businesses we work with</p>
          <div className="mt-8 grid border-y border-slate-700/80 sm:grid-cols-3 sm:divide-x sm:divide-slate-700/80">
            {['Real Estate', 'Dental Clinics', 'Logistics'].map((business, index) => (
              <p key={business} className="flex items-center gap-4 border-slate-700/80 py-5 text-2xl tracking-[-.04em] text-white sm:px-8 sm:py-7 sm:first:pl-0">
                <span className="text-sm text-cyan-400">0{index + 1}</span>
                {business}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-slate-700/80 bg-slate-950 px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-3">
          {team.map((member, index) => <article key={member.name} className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/70 p-6 pt-6 shadow-lg shadow-blue-950/15 ring-1 ring-white/70">
            <div className="mb-7 text-sm text-slate-600"><span>0{index + 1}</span></div>
            <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-2xl bg-blue-100 ring-1 ring-blue-200"><Image src={member.image} alt={member.name} fill className="object-cover object-top grayscale transition duration-500 hover:scale-105 hover:grayscale-0" sizes="(min-width: 768px) 33vw, 100vw" /></div>
            <h2 className="text-3xl font-normal tracking-[-.045em] text-slate-900">{member.name}</h2>
            <p className="mt-2 text-sm font-medium text-cyan-700">{member.title}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-cyan-700">Connect on LinkedIn <ArrowUpRight className="size-4" /></a>
            <p className="mt-5 text-base leading-7 text-slate-600">{member.bio}</p>
          </article>)}
        </div>
      </section>
      <section className="border-t border-slate-700/80 bg-slate-900 px-6 py-24 text-center sm:px-10"><p className="text-sm uppercase tracking-[.18em] text-slate-400">Start a conversation</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-normal tracking-[-.055em] text-white md:text-6xl">Ready to make AI a practical advantage?</h2><Link href="/contact" className="mt-10 inline-flex items-center gap-3 rounded-md bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-slate-950 transition hover:bg-cyan-400">Get in touch <Linkedin className="size-4" /></Link></section>
      <Footer />
    </main>
  );
}
