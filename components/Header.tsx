"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NeuButton } from "@/components/ui/neu-button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const SERVICES_MENU = [
    { label: "AI Readiness & Workflow Audits", href: "/services/audits" },
    { label: "AI Automation Design & Deployment", href: "/services/automation" },
    { label: "AI-Powered Customer Experience", href: "/services/customer-experience" },
    { label: "Productivity & Knowledge Systems", href: "/services/knowledge-systems" },
    { label: "Custom AI Model Development", href: "/services/custom-models" },
    { label: "Advisory & Capacity Building", href: "/services/advisory" },
] as const;

const SOLUTIONS_MENU = [
    { label: "Corporate Enterprises", href: "/solutions/corporate" },
    { label: "SMEs & Startups", href: "/solutions/smes" },
    { label: "NGOs & Humanitarian Organizations", href: "/solutions/ngos" },
    { label: "Professional Services", href: "/solutions/professional-services" },
    { label: "E-commerce & Retail", href: "/solutions/ecommerce" },
    { label: "Financial Services", href: "/solutions/financial" },
] as const;

const RESOURCES_MENU = [
    { label: "Blog", href: "/blog" },
    { label: "Whitepapers", href: "/resources#whitepapers" },
    { label: "AI Readiness Assessment", href: "/assessment" },
    { label: "FAQs", href: "/faq" },
] as const;

const ABOUT_MENU = [
    { label: "Our Story", href: "/story" },
    { label: "Team", href: "/team" },
    { label: "Values & Approach", href: "/values" },
    { label: "Why QEN AI", href: "/story#why-qenai" },
] as const;

export const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Logo - Absolute positioned, floats above content */}
            <div className="absolute top-0 left-0 w-full z-40 pointer-events-none">
                <div className="max-w-6xl mx-auto px-4 pt-0">
                    <Link href="/" className="flex items-center group pointer-events-auto">
                        <Image
                            src="/qenai-logo.png"
                            alt="QENAI Logo"
                            width={300}
                            height={20}
                            className="h-40 md:h-48 w-auto group-hover:scale-105 transition-transform"
                            priority
                        />
                    </Link>
                </div>
            </div>

            {/* Menu Bar - Fixed and centered, wider */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 pointer-events-none">
                <nav className="pointer-events-auto mx-auto flex items-center justify-between lg:justify-center px-6 md:px-8 py-2 bg-[#E0E5EC] rounded-2xl shadow-neu-flat w-fit lg:min-w-[700px]">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {/* Home */}
                        <Link
                            href="/"
                            className={cn(
                                "px-3 py-1.5 text-xs font-medium transition-colors uppercase tracking-wider",
                                pathname === "/" ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                            )}
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium transition-colors uppercase tracking-wider flex items-center gap-1",
                                        pathname.startsWith("/services") ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                                    )}
                                >
                                    Services
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-64 bg-[#E0E5EC] shadow-neu-flat border-0 rounded-2xl p-2">
                                {SERVICES_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild className="rounded-xl hover:bg-white/50 cursor-pointer">
                                        <Link href={item.href} className="w-full py-2">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Solutions Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium transition-colors uppercase tracking-wider flex items-center gap-1",
                                        pathname.startsWith("/solutions") ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                                    )}
                                >
                                    Solutions
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-64 bg-[#E0E5EC] shadow-neu-flat border-0 rounded-2xl p-2">
                                {SOLUTIONS_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild className="rounded-xl hover:bg-white/50 cursor-pointer">
                                        <Link href={item.href} className="w-full py-2">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Resources Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium transition-colors uppercase tracking-wider flex items-center gap-1",
                                        pathname.startsWith("/resources") || pathname.startsWith("/blog") || pathname.startsWith("/faq") || pathname.startsWith("/assessment")
                                            ? "text-primary font-bold"
                                            : "text-gray-500 hover:text-primary"
                                    )}
                                >
                                    Resources
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56 bg-[#E0E5EC] shadow-neu-flat border-0 rounded-2xl p-2">
                                {RESOURCES_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild className="rounded-xl hover:bg-white/50 cursor-pointer">
                                        <Link href={item.href} className="w-full py-2">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* About Us Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium transition-colors uppercase tracking-wider flex items-center gap-1",
                                        pathname.startsWith("/story") || pathname.startsWith("/team") || pathname.startsWith("/values")
                                            ? "text-primary font-bold"
                                            : "text-gray-500 hover:text-primary"
                                    )}
                                >
                                    About
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56 bg-[#E0E5EC] shadow-neu-flat border-0 rounded-2xl p-2">
                                {ABOUT_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild className="rounded-xl hover:bg-white/50 cursor-pointer">
                                        <Link href={item.href} className="w-full py-2">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block ml-2">
                        <NeuButton variant="primary" size="sm" className="text-xs px-4 py-1.5" asChild>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </NeuButton>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button className="lg:hidden p-1.5 text-gray-700 hover:text-primary">
                                <span className="material-symbols-outlined text-xl">menu</span>
                                <span className="sr-only">Toggle Menu</span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#E0E5EC] border-0 w-[85vw] max-w-sm sm:w-80 p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-6 py-6 px-6 h-full overflow-y-auto">
                                <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                                    <Image
                                        src="/qenai-logo.png"
                                        alt="QENAI Logo"
                                        width={112}
                                        height={112}
                                        className="h-28 w-auto"
                                        priority
                                    />
                                </Link>

                                <nav className="flex flex-col space-y-2">
                                    {/* Home */}
                                    <Link
                                        href="/"
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-xl",
                                            pathname === "/" ? "text-primary bg-white/30 shadow-neu-pressed" : "text-gray-600"
                                        )}
                                    >
                                        Home
                                    </Link>

                                    {/* Services Accordion */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="services" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 px-4 hover:no-underline text-gray-600 hover:text-primary">
                                                Services
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-6 space-y-1">
                                                {SERVICES_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-sm py-2 px-3 rounded-lg transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium bg-white/30" : "text-gray-500"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* Solutions Accordion */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="solutions" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 px-4 hover:no-underline text-gray-600 hover:text-primary">
                                                Solutions
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-6 space-y-1">
                                                {SOLUTIONS_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-sm py-2 px-3 rounded-lg transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium bg-white/30" : "text-gray-500"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* Resources Accordion */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="resources" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 px-4 hover:no-underline text-gray-600 hover:text-primary">
                                                Resources
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-6 space-y-1">
                                                {RESOURCES_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-sm py-2 px-3 rounded-lg transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium bg-white/30" : "text-gray-500"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* About Accordion */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="about" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 px-4 hover:no-underline text-gray-600 hover:text-primary">
                                                About Us
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-6 space-y-1">
                                                {ABOUT_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-sm py-2 px-3 rounded-lg transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium bg-white/30" : "text-gray-500"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* Contact CTA */}
                                    <div className="pt-6 px-4">
                                        <NeuButton variant="primary" className="w-full" asChild>
                                            <Link href="/contact" onClick={() => setOpen(false)}>
                                                Contact Us
                                            </Link>
                                        </NeuButton>
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </>
    );
};

export default Header;
