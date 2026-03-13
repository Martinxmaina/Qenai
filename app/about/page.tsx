import Image from "next/image";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const team = [
    {
        name: "Martin Maina",
        title: "Co-Founder & Head of Solution Architecture",
        image: "/team/martin-maina.jpg",
        linkedin: "https://www.linkedin.com/in/martinxmaina/",
        bio: "Martin is a strategic AI leader with a passion for building intelligent systems that solve real business problems. As the head of solution architecture at QENAI, he focuses on designing practical, high-impact solutions that streamline operations, improve decision-making, and unlock new efficiencies for organizations. Known for his ability to bridge the gap between innovation and execution, Martin turns complex ideas into clear, usable solutions.",
        skills: ["Solution Architecture", "AI Systems Design", "Operational Design", "AI Integration", "LLM Fine-tuning"],
    },
    {
        name: "Glory Munoru",
        title: "Co-Founder & Chief Strategy Officer",
        image: "/team/glory-munoru.jpg",
        linkedin: "https://www.linkedin.com/in/glory-munoru-93020b147/",
        bio: "Glory brings a rare blend of operational expertise, policy insight, and a track record in tech-driven social impact. She specializes in AI strategy and change management, bridging the gap between technical possibility and organizational reality. With years of experience in program management, communications, and cross-border operations across East Africa, she turns complex challenges into actionable, high-impact strategies.",
        skills: ["AI Strategy & Adoption", "Change Management", "Stakeholder Engagement", "Operations & Workflow Design", "Client Success & Training"],
    },
];

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
        <main className="min-h-screen bg-white text-black">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 bg-blue-50 text-center px-6">
                <div className="section-container max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight text-gray-900 mb-6 leading-tight">
                        We help organizations adopt AI <span className="text-blue-600">correctly.</span>
                    </h1>
                    <p className="body-text">
                        QEN AI is an AI transformation consultancy focused on practical, ethical, and
                        sustainable adoption of intelligent systems for African organizations and beyond.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section id="our-story" className="section-padding flex flex-col items-center">
                <div className="section-container max-w-6xl text-center mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
                        Our Story
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold font-serif text-gray-800 mb-8">
                        Built on the belief that AI should work for people.
                    </h3>
                    <div className="body-text max-w-4xl mx-auto">
                        <p>
                            QEN AI was founded to solve a core problem: organizations fail at AI because of poor implementation, not bad technology. We combine deep technical expertise with operational consulting to guide you through every stage—from readiness to system building to adoption—ensuring AI aligns with your reality and your team actually uses it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="section-padding bg-gray-50">
                <div className="section-container max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-16">
                        Team
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="card-standard flex flex-col items-center text-center"
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
                                    className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm mb-7"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                                <p className="subtext text-left">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section id="approach" className="section-padding">
                <div className="section-container max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
                        Our Approach
                    </h2>
                    <p className="body-text mb-16 max-w-3xl">
                        A problem-first approach grounded in operational reality. We begin by developing a deep understanding of organizational context, workflows,
                        data, and priorities, then design and deploy AI systems aligned to those realities.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {approach.map((step, i) => (
                            <div
                                key={i}
                                className="card-primary border hover:border-blue-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-5">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-bold font-serif text-gray-900 mb-3">{step.title}</h3>
                                <p className="subtext">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}