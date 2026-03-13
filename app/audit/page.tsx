"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AuditPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
        // This relies on the form containing an input with name="access_key"
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Network error. Please make sure you are online.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar />
            <section className="pt-40 pb-20 px-6 section-container max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 text-center">
                    Get Your Free AI Audit
                </h1>
                <p className="body-text mb-12 text-center">
                    Tell us a little about your organization and we'll identify opportunities where AI and automation can improve efficiency, reduce costs, and unlock new capabilities.
                </p>

                {submitted ? (
                    <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you.</h2>
                        <p className="text-gray-700">
                            Our team will review your information and reach out shortly to schedule your AI audit.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        {/* Configure this value in your .env.local file */}
                        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New AI Audit Request" />
                        <input type="hidden" name="from_name" value="QEN AI Website" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input required type="text" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                <input required type="text" name="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input required type="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
                                <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                                <select required name="industry" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white">
                                    <option value="" disabled>Select an industry...</option>
                                    <option value="technology">Technology & Software</option>
                                    <option value="finance">Finance & Banking</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="logistics">Logistics & Supply Chain</option>
                                    <option value="retail">Retail & E-commerce</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                                <select required name="company_size" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white">
                                    <option value="" disabled>Select company size...</option>
                                    <option value="1-10">1–10 employees</option>
                                    <option value="11-50">11–50 employees</option>
                                    <option value="51-200">51–200 employees</option>
                                    <option value="200+">200+ employees</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">What processes are you hoping to improve with AI?</label>
                            <textarea required name="processes_to_improve" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current challenges in your operations</label>
                            <textarea required name="current_challenges" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
                        </div>

                        <button disabled={isSubmitting} type="submit" className="btn-primary w-full">
                            {isSubmitting ? "Submitting..." : "Request My Free AI Audit"}
                        </button>
                    </form>
                )}
            </section>
            <Footer />
        </main>
    );
}
