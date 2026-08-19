"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function PageSubNav({ items }: { items: { name: string; href: string }[] }) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const ids = items.map((item) => item.href.split("#")[1]).filter(Boolean) as string[];
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return;

        const visible = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                });
                const next = ids.find((id) => visible.has(id)) ?? null;
                setActiveId(next);
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [items]);

    return (
        <div className="hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm md:block">
            <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-7 gap-y-1 px-6 py-2.5 sm:px-10" aria-label="Page sections">
                {items.map((item) => {
                    const hash = item.href.split("#")[1];
                    const isActive = hash === activeId;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative py-1 text-xs font-semibold uppercase tracking-wider transition ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            {item.name}
                            {isActive && <span className="absolute inset-x-0 -bottom-[2px] h-0.5 rounded-full bg-cyan-400" aria-hidden="true" />}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
