"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AssessmentPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        
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
        <main className="page-shell">
            <Navbar />
            <section className="pt-40 pb-20 px-6 section-container max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 text-center">
                    AI Readiness Assessment
                </h1>
                <p className="body-text mb-12 text-center">
                    Answer a few quick questions to see how ready your organization is for AI adoption.
                </p>

                {submitted ? (
                    <div className="form-surface p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment Complete</h2>
                        <p className="text-gray-700 mb-8 max-w-lg mx-auto">
                            Thank you for completing the AI Readiness Assessment. Based on your responses, our team can help identify the most impactful opportunities for automation.
                        </p>
                        <Link
                            href="/consultation"
                            className="btn-primary inline-block"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="form-surface space-y-8 p-8">
                        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New AI Readiness Assessment" />
                        <input type="hidden" name="from_name" value="QEN AI Website" />
                        
                        <div>
                            <label className="block text-base font-semibold text-gray-900 mb-4">1. Does your company currently use automation tools?</label>
                            <div className="space-y-3">
                                {["Yes", "No", "Unsure"].map((opt) => (
                                    <label key={opt} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-blue-500 transition">
                                        <input required type="radio" name="q1" value={opt} className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-gray-300" />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-base font-semibold text-gray-900 mb-4">2. Do you have structured digital workflows?</label>
                            <div className="space-y-3">
                                {["Yes", "No", "Partially"].map((opt) => (
                                    <label key={opt} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-blue-500 transition">
                                        <input required type="radio" name="q2" value={opt} className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-gray-300" />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-base font-semibold text-gray-900 mb-4">3. What department would benefit most from automation?</label>
                            <div className="space-y-3">
                                {["Sales", "Operations", "Customer Support", "Finance", "Other"].map((opt) => (
                                    <label key={opt} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-blue-500 transition">
                                        <input required type="radio" name="q3" value={opt} className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-gray-300" />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-base font-semibold text-gray-900 mb-4">4. Do you currently collect operational data?</label>
                            <div className="space-y-3">
                                {["Yes", "No"].map((opt) => (
                                    <label key={opt} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-blue-500 transition">
                                        <input required type="radio" name="q4" value={opt} className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-gray-300" />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-base font-semibold text-gray-900 mb-4">5. What is your main goal with AI?</label>
                            <div className="space-y-3">
                                {["Reduce costs", "Increase efficiency", "Improve customer experience", "Explore possibilities"].map((opt) => (
                                    <label key={opt} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:border-blue-500 transition">
                                        <input required type="radio" name="q5" value={opt} className="w-4 h-4 text-blue-600 focus:ring-blue-600 border-gray-300" />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button disabled={isSubmitting} type="submit" className="btn-primary w-full">
                            {isSubmitting ? "Submitting..." : "Submit Assessment"}
                        </button>
                    </form>
                )}
            </section>
            <Footer />
        </main>
    );
}
