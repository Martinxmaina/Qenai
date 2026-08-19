import Image from "next/image";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroBackgroundMesh } from "@/components/hero-background-mesh";

const team = [
    {
        name: "Martin Maina",
        title: "Co-Founder & CTO",
        image: "/team/martin-maina.jpg",
        linkedin: "https://www.linkedin.com/in/martinxmaina/",
        bio: "Martin is the heart of the technical build. He owns the engineering architecture, builds the platform engines, and brings the technical product vision to life.",
        skills: ["Engineering Architecture", "Platform Development", "AI Systems", "Technical Leadership", "Product Vision"],
    },
    {
        name: "Glory Munoru",
        title: "Co-Founder & CSO",
        image: "/team/glory-munoru.jpg",
        linkedin: "https://www.linkedin.com/in/glory-munoru-93020b147/",
        bio: "Glory defines the company's direction and shapes the long-term vision. She designs product-market fit, develops core business models, and ensures strategic alignment across all initiatives.",
        skills: ["Strategic Vision", "Product-Market Fit", "Business Model Design", "Strategic Planning", "Business Direction"],
    },
    {
        name: "Hansie Zefy",
        title: "Co-Founder & COO",
        image: "/team/hansie-zefy.jpg",
        linkedin: "https://www.linkedin.com/in/hansiezefy/",
        bio: "Hansie drives relationships, ecosystem partnerships, and execution. He manages partner and stakeholder relationships, accelerates client growth, and keeps the operational engine running smoothly.",
        skills: ["Partnership Development", "Stakeholder Management", "Operations", "Client Growth", "Relationship Building"],
    },];

const approach = [
    {
        title: "AI Readiness and Workflow Audits",
        desc: "Assessing processes, data flows, and operational constraints to establish a clear foundation for automation.",
    },
    {
        title: "Problem Discovery and Prioritization",
        desc: "Identifying and ranking opportunities where intelligent automation can deliver the highest operational and financial impact.",
    },
    {
        title: "Systems Design",
        desc: "Building autonomous and semi-autonomous workflows tailored to how organizations operate.",
    },
    {
        title: "Implementation & Integration",
        desc: "Deploying AI systems that integrate cleanly with existing tools, infrastructure, and processes.",
    },
    {
        title: "Adoption & Enablement",
        desc: "Equipping teams with the understanding and support needed to confidently use and sustain AI-enabled systems.",
    },
];

export default function AboutPage() {
    return (
        <main className="page-shell">
            <Navbar />

            {/* Hero */}
            <section className="page-hero relative overflow-hidden pt-[20rem]">
                <HeroBackgroundMesh />
                <div className="section-container relative z-10 mx-auto flex max-w-4xl flex-col items-center">
                    <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-400">
                        The People Behind Qenai
                    </p>
                    <div className="mt-4 mb-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    <h1 className="max-w-3xl text-balance text-4xl md:text-6xl font-bold font-serif tracking-tight mb-6 leading-tight">
                        Save Time. Cut Costs. <span className="text-cyan-400">Scale Faster.</span>
                    </h1>
                    <p className="body-text mx-auto max-w-2xl text-center">
                        We help African businesses increase revenue, reduce manual work, and scale faster
                        with custom AI systems and workflow automation.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section id="our-story" className="section-padding scroll-mt-44 flex flex-col items-center bg-white">
                <div className="section-container max-w-6xl text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
                        Our Story
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold font-serif text-cyan-400 mb-8">
                        Built on the belief that AI should work for people.
                    </h3>
                    <div className="mx-auto max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
                        <p>
                            QEN AI was founded to solve a core problem: organizations fail at AI because of poor implementation, not bad technology. We combine deep technical expertise with operational consulting to guide you through every stage—from readiness to system building to adoption—ensuring AI aligns with your reality and your team actually uses it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="section-padding scroll-mt-44 bg-transparent">
                <div className="section-container max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-16">
                        Team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col items-center rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-lg shadow-blue-950/10"
                            >
                                <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-md mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={144}
                                        height={144}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-semibold text-sm mb-4">{member.title}</p>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-black hover:text-blue-600 transition-colors text-sm mb-7"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                                <p className="text-left text-base leading-relaxed text-black">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section id="approach" className="section-padding scroll-mt-44 bg-white">
                <div className="section-container max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
                        Our Approach
                    </h2>
                    <p className="mb-16 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                        A problem-first approach grounded in operational reality. We begin by developing a deep understanding of organizational context, workflows,
                        data, and priorities, then design and deploy AI systems aligned to those realities.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {approach.map((step, i) => (
                            <div
                                key={i}
                                className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-lg shadow-black/20 hover:bg-slate-800"
                            >
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-900">
                                    {i + 1}
                                </div>
                                <h3 className="mb-3 text-lg font-bold font-serif text-white">{step.title}</h3>
                                <p className="text-base leading-relaxed text-white/80">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
