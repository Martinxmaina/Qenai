"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function NavDropdown({
    label,
    items,
}: {
    label: string;
    items: { name: string; href: string }[];
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="text-sm font-semibold text-white/90 hover:text-white transition flex items-center gap-1"
                aria-expanded={open}
            >
                {label}
                <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 rounded-2xl border border-blue-100 bg-white shadow-lg overflow-hidden z-50">
                    {items.map((it) => (
                        <Link
                            key={it.href}
                            href={it.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                            onClick={() => setOpen(false)}
                        >
                            {it.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-blue-50/95 backdrop-blur-md border-b border-blue-100 py-3"
                : "bg-blue-50 border-b border-blue-100 py-5"
                }`}
        >
            <div className="container-wide relative flex items-center justify-center">
                {/* Logo (left) */}
                <Link href="/" className="absolute left-0 flex items-center">
                    <div className="relative h-32 w-96">
                        <Image
                            src="/qenai-logo.png"
                            alt="QENAI"
                            fill
                            className="object-contain object-left"
                            priority
                            unoptimized
                        />
                    </div>
                </Link>

                {/* Center Nav */}
                <nav className="hidden md:flex items-center gap-8 bg-blue-600 px-10 py-3 rounded-full shadow-sm">
                    <Link href="/" className="text-sm font-semibold text-white hover:text-white/90">
                        Home
                    </Link>

                    <NavDropdown
                        label="About"
                        items={[
                            { name: "Our Story", href: "/about#our-story" },
                            { name: "Team", href: "/about#team" },
                            { name: "Our Approach", href: "/about#approach" },
                        ]}
                    />

                    <NavDropdown
                        label="Services"
                        items={[
                            { name: "Workflow Audit", href: "/services#workflow-audit" },
                            { name: "Custom AI Development", href: "/services#custom-ai" },
                            { name: "System Integration", href: "/services#system-integration" },
                            { name: "Functional Automation", href: "/services#functional-automation" },
                            { name: "Implementation & Support", href: "/services#implementation-support" },
                        ]}
                    />

                    <NavDropdown
                        label="Resources"
                        items={[
                            { name: "Projects", href: "/resources#projects" },
                            { name: "Blogs", href: "/resources#blogs" },
                            { name: "White Papers", href: "/resources#whitepapers" },
                            { name: "AI Readiness Assessment", href: "/resources#readiness" },
                            { name: "FAQs", href: "/resources#faqs" },
                        ]}
                    />

                    <Link href="#contact" className="text-sm font-semibold text-white/90 hover:text-white">
                        Contact
                    </Link>
                </nav>

                {/* CTA (right) */}
                <div className="hidden md:flex absolute right-0 items-center">
                    <Link
                        href="/audit"
                        className="px-7 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full hover:opacity-90 transition shadow-sm"
                    >
                        Get Your Free AI Audit
                    </Link>
                </div>

                {/* Mobile menu icon */}
                <button className="md:hidden absolute right-0 text-blue-900 p-2">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}