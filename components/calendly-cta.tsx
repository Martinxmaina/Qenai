"use client";

import { useEffect } from "react";

export function CalendlyCTA() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
        
        // Also add the calendly css
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    const openCalendly = (e: React.MouseEvent) => {
        e.preventDefault();
        // @ts-ignore
        if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/qenai/consultation' });
        } else {
            // fallback if script hasn't loaded
            window.open('https://calendly.com/qenai', '_blank');
        }
    };

    return (
        <section className="section-padding bg-blue-900 flex justify-center px-6">
            <div className="max-w-5xl w-full text-center mx-auto bg-blue-800/40 rounded-2xl p-12 border border-blue-800">
                <h2 className="text-3xl md:text-[2.75rem] font-bold font-serif text-white mb-6 tracking-tight leading-tight">
                    Your Competitors Are Already Automating
                </h2>
                <p className="text-slate-300 mb-10 max-w-3xl mx-auto text-lg">
                    Every day without AI automation is a day your competitors get ahead. Book a
                    free consultation and discover what&apos;s possible for your business.
                </p>
                <button 
                    onClick={openCalendly}
                    className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-100 transition-colors"
                >
                    Book Free Consultation
                </button>
            </div>
        </section>
    );
}
