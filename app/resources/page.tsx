import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import FAQSection from "@/components/FAQSection";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 bg-blue-50 text-center px-6">
                <div className="section-container max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight text-gray-900 mb-6 leading-tight">
                        Explore our work, thinking, and tools.
                    </h1>
                    <p className="body-text">
                        From projects and case studies to assessments and FAQs — everything you need to understand and get started with AI automation.
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="section-padding border-b border-gray-100">
                <div className="section-container max-w-6xl mx-auto">
                    <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Projects</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">Featured Projects</h2>
                    <p className="body-text mb-10 max-w-2xl">
                        Real-world AI automation projects we've designed and deployed for organizations.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Workflow Automation for Logistics", tag: "Supply Chain", outcome: "Reduced processing delays by 40% and eliminated manual entry errors using an intelligent routing agent." },
                            { title: "AI-Powered Document Processing", tag: "Financial Services", outcome: "Automated invoice and receipt extraction, cutting document handling time from days to minutes." },
                            { title: "Predictive Maintenance System", tag: "Manufacturing", outcome: "Deployed sensor-driven ML models predicting equipment failure 2 weeks in advance, saving millions in downtime." }
                        ].map((project, i) => (
                            <div key={i} className="card-primary flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-white text-blue-700 text-xs font-bold rounded-full mb-4 shadow-sm">
                                        {project.tag}
                                    </span>
                                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">{project.title}</h3>
                                    <p className="subtext mb-6">{project.outcome}</p>
                                </div>
                                <button disabled className="btn-secondary w-full py-3 opacity-60 cursor-not-allowed">
                                    Case Study Coming Soon
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blogs */}
            <section id="blogs" className="section-padding border-b border-gray-100">
                <div className="section-container max-w-6xl mx-auto">
                    <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Blogs</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">Latest Insights</h2>
                    <p className="body-text mb-10 max-w-2xl">
                        Perspectives on AI adoption, automation strategy, and operational intelligence.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Why Most AI Projects Fail (And How to Fix It)", category: "Strategy", readTime: "5 min read", excerpt: "Discover the hidden operational disconnects that derail enterprise AI initiatives. We explore why aligning technology with human workflows is the missing piece." },
                            { title: "The Real Cost of Not Automating", category: "Implementation", readTime: "4 min read", excerpt: "Every day spent on repetitive tasks is a day your competitors pull ahead. Learn how to quantify the hidden costs of manual processes in your business." }
                        ].map((blog, i) => (
                            <div key={i} className="card-standard flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{blog.category}</span>
                                        <span className="text-gray-400 text-xs">•</span>
                                        <span className="text-gray-500 text-xs">{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif text-gray-900 mb-3">{blog.title}</h3>
                                    <p className="subtext mb-6">{blog.excerpt}</p>
                                </div>
                                <button disabled className="text-left text-blue-600 font-semibold text-sm opacity-50 cursor-not-allowed uppercase tracking-wide">
                                    Publishing soon
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* White Papers */}
            <section id="whitepapers" className="section-padding border-b border-gray-100">
                <div className="section-container max-w-6xl mx-auto">
                    <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">White Papers</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">Research &amp; Frameworks</h2>
                    <p className="body-text mb-10 max-w-2xl">
                        In-depth analysis and practical frameworks for AI-driven operational transformation.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "AI Adoption in African Enterprises", desc: "A comprehensive breakdown of the unique challenges and opportunities for rolling out AI tools across diverse operational environments in Africa.", date: "Expected Q4 2026" },
                            { title: "Generative AI Governance Framework", desc: "A blueprint for securing proprietary data and maintaining ethical compliance while heavily utilizing LLMs in the workplace.", date: "Expected Q1 2027" },
                            { title: "The Automation ROI Calculator", desc: "Methodologies and formulas to accurately measure the financial and temporal returns on deploying AI workflow systems.", date: "Expected Q1 2027" }
                        ].map((paper, i) => (
                            <div key={i} className="card-standard flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">{paper.title}</h3>
                                    <p className="subtext mb-6">{paper.desc}</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-medium">{paper.date}</span>
                                    <button disabled className="text-xs text-blue-600 font-bold uppercase tracking-wide opacity-50 cursor-not-allowed">
                                        Notify Me
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / Waitlist Banner */}
            <section className="section-padding bg-qen-dark text-center px-6">
                <div className="section-container max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                        Don't miss our latest research.
                    </h2>
                    <p className="body-text text-white/70 mb-8 max-w-2xl mx-auto">
                        Join our waitlist to be immediately notified when our case studies, articles, and white papers are published. We send high-signal insights, no spam.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                            required
                        />
                        <button type="submit" className="btn-primary py-3 whitespace-nowrap border border-blue-600">
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </section>

            {/* AI Readiness Assessment */}
            <section id="readiness" className="section-padding border-b border-gray-100 bg-gray-50">
                <div className="section-container max-w-6xl mx-auto text-center">
                    <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Assessment</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">AI Readiness Assessment</h2>
                    <p className="body-text mb-12 max-w-2xl mx-auto">
                        Find out how ready your organization is for AI adoption with our quick assessment.
                    </p>
                    <div className="card-primary max-w-2xl mx-auto p-12 text-center">
                        <h3 className="text-2xl font-bold font-serif text-gray-900 mb-3">Take the Assessment</h3>
                        <p className="subtext mb-8 max-w-md mx-auto">
                            A 5-minute evaluation to benchmark your organization&apos;s data maturity, culture, and technical infrastructure for AI.
                        </p>
                        <a
                            href="/assessment"
                            className="btn-primary"
                        >
                            Start Now
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection />

            <Footer />
        </main>
    );
}
