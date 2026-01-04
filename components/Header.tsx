"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/Logo";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Case Studies", href: "/cases" },
] as const;

export const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center">
                    {/* Mobile Menu Trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="mr-2 px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                                <span className="material-symbols-outlined text-2xl">menu</span>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <div className="flex flex-col gap-6 py-6">
                                <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                                    <div className="h-8 w-8 text-primary">
                                        <Logo className="h-8 w-8" />
                                    </div>
                                    <span className="font-bold text-xl">QENAI</span>
                                </Link>
                                <nav className="flex flex-col space-y-2">
                                    {/* Home */}
                                    <Link
                                        href="/"
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary py-2",
                                            pathname === "/" ? "text-primary border-r-4 border-primary bg-primary/5 -mr-6 pl-2" : "text-foreground/70"
                                        )}
                                    >
                                        Home
                                    </Link>

                                    {/* Technology */}
                                    <Link
                                        href="/technology"
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary py-2",
                                            pathname === "/technology" ? "text-primary border-r-4 border-primary bg-primary/5 -mr-6 pl-2" : "text-foreground/70"
                                        )}
                                    >
                                        Technology
                                    </Link>

                                    {/* Services Dropdown */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="services" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">
                                                Services
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-4 space-y-2">
                                                {SERVICES_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-base transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium" : "text-foreground/70"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* Solutions Dropdown */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="solutions" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">
                                                Solutions
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-4 space-y-2">
                                                {SOLUTIONS_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-base transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium" : "text-foreground/70"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* Case Studies */}
                                    <Link
                                        href="/cases"
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary py-2",
                                            pathname === "/cases" ? "text-primary border-r-4 border-primary bg-primary/5 -mr-6 pl-2" : "text-foreground/70"
                                        )}
                                    >
                                        Case Studies
                                    </Link>

                                    {/* Resources Dropdown */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="resources" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">
                                                Resources
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-4 space-y-2">
                                                {RESOURCES_MENU.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "block text-base transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium" : "text-foreground/70"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* About Us Dropdown */}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="about" className="border-none">
                                            <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">
                                                About Us
                                            </AccordionTrigger>
                                            <AccordionContent className="pl-4 space-y-2">
                                                {ABOUT_MENU.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                            "block text-base transition-colors hover:text-primary",
                                                            pathname === item.href ? "text-primary font-medium" : "text-foreground/70"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    {/* Contact */}
                                    <Link
                                        href="/contact"
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary py-2",
                                            pathname === "/contact" ? "text-primary border-r-4 border-primary bg-primary/5 -mr-6 pl-2" : "text-foreground/70"
                                        )}
                                    >
                                        Contact
                                    </Link>

                                    {/* Free AI Audit */}
                                    <Link
                                        href="/audit"
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-medium text-primary py-2 border-t pt-4 mt-2"
                                    >
                                        Free AI Audit
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <div className="h-8 w-8 text-primary">
                            <Logo className="h-8 w-8" />
                        </div>
                        <span className="hidden font-bold sm:inline-block text-xl">QENAI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
                        {/* Home */}
                        <Link
                            href="/"
                            className={cn(
                                "px-3 py-2 transition-colors hover:text-foreground/80",
                                pathname === "/" ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            Home
                        </Link>

                        {/* Technology */}
                        <Link
                            href="/technology"
                            className={cn(
                                "px-3 py-2 transition-colors hover:text-foreground/80",
                                pathname === "/technology" ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            Technology
                        </Link>

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname.startsWith("/services") ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    Services
                                    <span className="material-symbols-outlined ml-1 text-sm">expand_more</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-64">
                                {SERVICES_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="w-full">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Solutions Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname.startsWith("/solutions") ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    Solutions
                                    <span className="material-symbols-outlined ml-1 text-sm">expand_more</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-64">
                                {SOLUTIONS_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="w-full">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Case Studies */}
                            <Link
                            href="/cases"
                            className={cn(
                                "px-3 py-2 transition-colors hover:text-foreground/80",
                                pathname === "/cases" ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            Case Studies
                        </Link>

                        {/* Resources Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname.startsWith("/resources") || pathname.startsWith("/blog") || pathname.startsWith("/faq") || pathname.startsWith("/assessment") ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    Resources
                                    <span className="material-symbols-outlined ml-1 text-sm">expand_more</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56">
                                {RESOURCES_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="w-full">
                                            {item.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* About Us Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                        pathname.startsWith("/story") || pathname.startsWith("/team") || pathname.startsWith("/values") ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    About Us
                                    <span className="material-symbols-outlined ml-1 text-sm">expand_more</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-56">
                                {ABOUT_MENU.map((item) => (
                                    <DropdownMenuItem key={item.href} asChild>
                                        <Link href={item.href} className="w-full">
                                {item.label}
                            </Link>
                                    </DropdownMenuItem>
                        ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                </div>

                <div className="flex items-center space-x-4">
                    <Button variant="outline" asChild className="hidden sm:inline-flex">
                        <Link href="/audit">Free AI Audit</Link>
                    </Button>
                    <Button asChild className="animate-pulse-slow">
                        <Link href="/contact">Book Consultation</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
