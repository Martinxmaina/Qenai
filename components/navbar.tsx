"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PageSubNav } from "./page-subnav";

const aboutItems = [
    { name: "Our Story", href: "/about#our-story" },
    { name: "Meet the Team", href: "/about#team" },
    { name: "Our Approach", href: "/about#approach" },
];

const serviceItems = [
    { name: "Capabilities", href: "/services#capabilities" },
    { name: "By Industry", href: "/services#by-industry" },
    { name: "Our Process", href: "/services#process" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isPathActive = (href: string) => pathname === href.split("#")[0];
    const isHomeActive = pathname === "/";
    const isTeamActive = isPathActive("/about");
    const isServicesActive = isPathActive("/services");
    const isAuditActive = isPathActive("/audit");
    const activeSectionItems = isTeamActive ? aboutItems : isServicesActive ? serviceItems : null;

    return (
        <header className={`fixed top-0 right-0 left-0 z-50 border-b border-blue-100 transition-all duration-300 ${isScrolled ? "py-3 bg-blue-50/90 backdrop-blur-md backdrop-saturate-150 shadow-md shadow-slate-900/5" : "py-6 bg-blue-50"}`}>
            <div className="relative z-50 flex w-full items-center justify-between gap-6 px-6 sm:px-10">
                <Link href="/" className="relative -ml-4 block h-20 w-64 shrink-0 sm:-ml-6 sm:h-24 sm:w-80" aria-label="Qenai home">
                    <Image src="/qenai-logo.png" alt="QENAI" fill className="object-contain object-center" priority />
                </Link>

                <nav className="hidden items-center gap-6 font-sans md:flex" aria-label="Primary navigation">
                    <div className="flex items-center gap-6">
                        <Link href="/" className={`group relative py-2 text-base font-bold tracking-wide transition-colors hover:text-cyan-600 ${isHomeActive ? "text-blue-600" : "text-slate-900"}`}>
                            Home
                            <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100 ${isHomeActive ? "scale-x-100 bg-blue-600" : "bg-cyan-600"}`} aria-hidden="true" />
                        </Link>
                        <Link href="/about" className={`group relative py-2 text-base font-bold tracking-wide transition-colors hover:text-cyan-600 ${isTeamActive ? "text-blue-600" : "text-slate-900"}`}>
                            Team
                            <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100 ${isTeamActive ? "scale-x-100 bg-blue-600" : "bg-cyan-600"}`} aria-hidden="true" />
                        </Link>
                        <Link href="/services" className={`group relative py-2 text-base font-bold tracking-wide transition-colors hover:text-cyan-600 ${isServicesActive ? "text-blue-600" : "text-slate-900"}`}>
                            Services
                            <span className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100 ${isServicesActive ? "scale-x-100 bg-blue-600" : "bg-cyan-600"}`} aria-hidden="true" />
                        </Link>
                    </div>
                    <Link
                        href="/audit"
                        className={`rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold tracking-wide text-white whitespace-nowrap transition-colors hover:bg-slate-800 ${isAuditActive ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white" : ""}`}
                    >
                        Get Your Free AI Audit
                    </Link>
                </nav>

                <button type="button" onClick={() => setMobileOpen((value) => !value)} className="p-2 text-primary md:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
                    {mobileOpen ? <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
                </button>
            </div>

            {activeSectionItems && <PageSubNav items={activeSectionItems} />}

            {mobileOpen && <div className="fixed inset-0 z-40 overflow-y-auto bg-blue-50 pt-28 pb-10 md:hidden">
                <nav className="flex flex-col px-6" aria-label="Mobile navigation">
                    <Link href="/" onClick={() => setMobileOpen(false)} className={`py-3 text-xl font-bold transition hover:text-cyan-600 ${isHomeActive ? "text-blue-600" : "text-slate-900"}`}>Home</Link>

                    <div className="mt-2 border-t border-blue-100 pt-4">
                        <Link href="/about" onClick={() => setMobileOpen(false)} className={`flex items-center justify-between py-2 text-xl font-bold transition hover:text-cyan-600 ${isTeamActive ? "text-blue-600" : "text-slate-900"}`}>
                            Team
                            <svg className="h-4 w-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <div className="mt-1 flex flex-col border-l-2 border-blue-100 pl-4">
                            {aboutItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`py-2 text-base font-medium transition hover:text-cyan-600 ${isPathActive(item.href) ? "text-blue-600" : "text-slate-600"}`}>{item.name}</Link>)}
                        </div>
                    </div>

                    <div className="mt-4 border-t border-blue-100 pt-4">
                        <Link href="/services" onClick={() => setMobileOpen(false)} className={`flex items-center justify-between py-2 text-xl font-bold transition hover:text-cyan-600 ${isServicesActive ? "text-blue-600" : "text-slate-900"}`}>
                            Services
                            <svg className="h-4 w-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <div className="mt-1 flex flex-col border-l-2 border-blue-100 pl-4">
                            {serviceItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`py-2 text-base font-medium transition hover:text-cyan-600 ${isPathActive(item.href) ? "text-blue-600" : "text-slate-600"}`}>{item.name}</Link>)}
                        </div>
                    </div>

                    <Link href="/audit" onClick={() => setMobileOpen(false)} className={`mt-8 inline-flex justify-center rounded-full bg-slate-900 px-6 py-3.5 text-base font-bold tracking-wide text-white transition-colors hover:bg-slate-800 ${isAuditActive ? "ring-2 ring-blue-500" : ""}`}>Get Your Free AI Audit</Link>
                </nav>
            </div>}
        </header>
    );
}
