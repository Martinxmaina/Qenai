"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function NavDropdown({ label, items, isScrolled }: { label: string; items: { name: string; href: string }[]; isScrolled: boolean }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button type="button" onClick={() => setOpen((value) => !value)} className="px-2 py-2 text-base font-semibold text-white transition hover:text-cyan-300" aria-expanded={open}>
                {label}
            </button>
            {open && <div className="absolute right-0 z-50 mt-4 w-64 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-950/15">
                {items.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-5 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-primary">{item.name}</Link>)}
            </div>}
        </div>
    );
}

const aboutItems = [
    { name: "Our Story", href: "/about#our-story" },
    { name: "Team", href: "/about#team" },
    { name: "Our Approach", href: "/about#approach" },
];

const serviceItems = [
    { name: "Workflow Audit", href: "/services#workflow-audit" },
    { name: "Custom AI Development", href: "/services#custom-ai" },
    { name: "System Integration", href: "/services#system-integration" },
    { name: "Functional Automation", href: "/services#functional-automation" },
    { name: "Implementation & Support", href: "/services#implementation-support" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 right-0 left-0 z-50 bg-slate-900 transition-all duration-300 ${isScrolled ? "py-3 shadow-md shadow-slate-950/30" : "py-5"}`}>
            <div className="flex w-full items-center justify-between gap-6 px-6 sm:px-10">
                <Link href="/" className="relative -ml-6 block h-40 w-128 shrink-0 sm:-ml-10" aria-label="Qenai home">
                    <Image src="/qenai-logo.png" alt="QENAI" fill className="object-contain object-center" priority unoptimized />
                </Link>

                <nav className="hidden items-center gap-3 px-1 py-3 md:flex" aria-label="Primary navigation">
                    <div className="flex items-center gap-3">
                        <NavDropdown label="Team" items={aboutItems} isScrolled={isScrolled} />
                        <NavDropdown label="Services" items={serviceItems} isScrolled={isScrolled} />
                    </div>
                    <div className="mx-2 h-6 w-px bg-blue-200" aria-hidden="true" />
                    <Link href="/audit" className="px-2 py-2 text-base font-semibold text-white transition hover:text-cyan-300">Get Your Free AI Audit</Link>
                </nav>

                <button type="button" onClick={() => setMobileOpen((value) => !value)} className="p-2 text-primary md:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
                    {mobileOpen ? <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
                </button>
            </div>

            {mobileOpen && <div className="border-t border-slate-700/80 bg-slate-900 px-6 pb-6 pt-3 md:hidden">
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                    <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-cyan-300">Meet the Team</p>
                    {aboutItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-base font-medium text-white transition hover:text-cyan-300">{item.name}</Link>)}
                    <p className="px-3 pb-1 pt-5 text-xs font-semibold uppercase tracking-wider text-cyan-300">Services</p>
                    {serviceItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-base font-medium text-white transition hover:text-cyan-300">{item.name}</Link>)}
                    <Link href="/audit" onClick={() => setMobileOpen(false)} className="mt-5 px-3 py-2.5 text-base font-semibold text-white transition hover:text-cyan-300">Get Your Free AI Audit</Link>
                </nav>
            </div>}
        </header>
    );
}
