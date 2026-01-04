import Link from "next/link";
import { Logo } from "@/components/icons/Logo";

const FOOTER_LINKS = {
    company: [
        { label: "About Us", href: "/story" },
        { label: "Careers", href: "/team" },
        { label: "Contact", href: "/contact" },
    ],
    services: [
        { label: "Solutions", href: "/solutions" },
        { label: "Technology", href: "/technology" },
        { label: "Free AI Audit", href: "/audit" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/contact" },
        { label: "Terms of Service", href: "/contact" },
        { label: "Security", href: "/technology" },
    ],
} as const;

const LOCATIONS = ["Nairobi, Kenya"] as const;

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Logo size="md" />
                            <span className="text-lg font-bold text-foreground">QENAI</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                            QENAI empowers enterprises across Africa to harness the full potential of
                            artificial intelligence. Secure, scalable, and built for African business realities.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <Link
                                href="https://linkedin.com/company/qenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-8 rounded bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <span className="text-xs font-bold">in</span>
                            </Link>
                            <Link
                                href="https://twitter.com/qenai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-8 rounded bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <span className="text-xs font-bold">x</span>
                            </Link>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4 text-sm">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
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

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4 text-sm">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
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

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4 text-sm">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {FOOTER_LINKS.legal.map((link) => (
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
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2025 QENAI Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        {LOCATIONS.map((location) => (
                            <span key={location}>{location}</span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
