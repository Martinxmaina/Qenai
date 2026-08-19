"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ConsultationPage() {
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
                    Book an AI Strategy Consultation
                </h1>
                <p className="body-text mb-12 text-center">
                    Schedule a short consultation with our team to discuss your organization’s goals and how AI automation could support them.
                </p>

                {submitted ? (
                    <div className="form-surface p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received.</h2>
                        <p className="text-gray-700">
                            Your consultation request has been received. We will confirm your session shortly.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="form-surface space-y-6 p-8">
                        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New Consultation Request" />
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
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Consultation Date</label>
                                <input required type="date" name="preferred_date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                <input required type="time" name="preferred_time" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">What would you like to discuss?</label>
                            <textarea required name="discussion_topic" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
                        </div>

                        <button disabled={isSubmitting} type="submit" className="btn-primary w-full">
                            {isSubmitting ? "Submitting..." : "Book My Consultation"}
                        </button>
                    </form>
                )}
            </section>
            <Footer />
        </main>
    );
}
