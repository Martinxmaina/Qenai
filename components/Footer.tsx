import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
    services: [
        { label: "AI Readiness Audits", href: "/services/audits" },
        { label: "Workflow Automation", href: "/services/automation" },
        { label: "Custom AI Models", href: "/services/custom-models" },
        { label: "Customer Experience AI", href: "/services/customer-experience" },
        { label: "Knowledge Systems", href: "/services/knowledge-systems" },
        { label: "Advisory Services", href: "/services/advisory" },
    ],
    solutions: [
        { label: "Enterprise Solutions", href: "/solutions/corporate" },
        { label: "SMEs & Startups", href: "/solutions/smes" },
        { label: "NGOs", href: "/solutions/ngos" },
        { label: "Professional Services", href: "/solutions/professional-services" },
        { label: "E-commerce", href: "/solutions/ecommerce" },
        { label: "Financial Services", href: "/solutions/financial" },
    ],
    company: [
        { label: "Our Story", href: "/story" },
        { label: "Team", href: "/team" },
        { label: "Values", href: "/values" },
        { label: "Contact", href: "/contact" },
    ],
    resources: [
        { label: "Blog", href: "/blog" },
        { label: "Resources", href: "/resources" },
        { label: "AI Assessment", href: "/assessment" },
        { label: "FAQs", href: "/faq" },
    ],
} as const;

export const Footer = () => {
    return (
        <footer className="mt-20 py-16 border-t border-gray-200/30 bg-[#E0E5EC]">
            <div className="max-w-6xl mx-auto px-4">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="p-4 rounded-2xl bg-[#E0E5EC] shadow-neu-flat group-hover:shadow-neu-pressed transition-all">
                                <Image 
                                    src="/qenai-logo.png" 
                                    alt="QENAI Logo" 
                                    width={144} 
                                    height={144} 
                                    className="h-28 w-auto group-hover:scale-105 transition-transform"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                            Kenya&apos;s premier AI automation agency. We transform business operations with 
                            intelligent workflow automation, custom AI models, and strategic AI readiness audits.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/company/qenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#E0E5EC] shadow-neu-sm flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <span className="material-symbols-outlined text-xl">link</span>
                            </a>
                            <a
                                href="https://twitter.com/qenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-[#E0E5EC] shadow-neu-sm flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <span className="material-symbols-outlined text-xl">tag</span>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest">
                            Solutions
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            {FOOTER_LINKS.solutions.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest">
                            Resources
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            {FOOTER_LINKS.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} QENAI Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-400">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
