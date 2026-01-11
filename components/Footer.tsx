import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

const FOOTER_LINKS = {
    product: [
        { label: "AI Platform", href: "/technology" },
        { label: "Workflow Automation", href: "/services/automation" },
        { label: "Integrations", href: "/technology#integrations" },
    ],
    solutions: [
        { label: "Enterprise", href: "/solutions/corporate" },
        { label: "SMEs & Startups", href: "/solutions/smes" },
        { label: "Financial Services", href: "/solutions/financial" },
    ],
    company: [
        { label: "Who We Are", href: "/story" },
        { label: "Team", href: "/team" },
        { label: "Case Studies", href: "/cases" },
        { label: "Contact", href: "/contact" },
    ],
    resources: [
        { label: "Blog", href: "/blog" },
        { label: "Resources", href: "/resources" },
        { label: "FAQs", href: "/faq" },
    ],
} as const;

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Logo size="md" />
                            <span className="text-2xl font-bold text-slate-900">QENAI</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Pioneering the next evolution of enterprise artificial intelligence. 
                            Secure, modular, and built for Africa&apos;s tomorrow.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                            Product
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            {FOOTER_LINKS.product.map((link) => (
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
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                            Solutions
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-500">
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
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                            Company
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-500">
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

                    {/* Social */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
                            Social
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <Link
                                    href="https://linkedin.com/company/qenai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://twitter.com/qenai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-400">
                        © 2025 QENAI Technologies Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-slate-400">
                        <Link href="/contact" className="hover:text-slate-900 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/contact" className="hover:text-slate-900 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="hover:text-slate-900 transition-colors">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
