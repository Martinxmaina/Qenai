"use client";

import { useState } from "react";

interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="divide-y divide-slate-700 border-t border-b border-slate-700">
            {items.map((item, i) => (
                <div key={i}>
                    <button
                        type="button"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between py-5 text-left text-white hover:text-cyan-400 transition-colors"
                    >
                        <span className="text-base font-semibold pr-4">{item.title}</span>
                        <svg
                            className={`w-5 h-5 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {openIndex === i && (
                        <div className="pb-5 text-slate-300 leading-relaxed text-sm">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
