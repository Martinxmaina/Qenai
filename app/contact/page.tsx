"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

    return (
        <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-serif leading-tight tracking-tight mb-6" style={{ fontFamily: 'Lora, Georgia, serif' }}>
            Let&apos;s Build the Future
                    </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Personalized AI strategies to scale your vision.
                    </p>
                </div>
            </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-slate-50 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            {/* Form Header */}
            <div className="p-8 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">Book a Discovery Call</h2>
              <p className="text-slate-500 mt-2">Pick a time that works for you to discuss your project with our AI experts.</p>
                            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                            </div>
                        </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="h-12"
                  />
                                    </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Input
                    id="role"
                    placeholder="e.g., CEO, CTO, Operations Manager"
                    value={formData.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="h-12"
                  />
                                            </div>
                                        </div>

              <div className="space-y-2">
                <Label htmlFor="interest">What are you interested in? *</Label>
                <Select onValueChange={(value) => handleChange("interest", value)} required>
                  <SelectTrigger id="interest" className="h-12">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="audit">Free AI Readiness Audit</SelectItem>
                    <SelectItem value="consultation">Schedule a Consultation</SelectItem>
                    <SelectItem value="automation">Automation Solutions</SelectItem>
                    <SelectItem value="custom">Custom AI Development</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                                            </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your project *</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your current challenges and what you're hoping to achieve with AI..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                />
                                            </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
                Send Message
                <span className="material-symbols-outlined ml-2">send</span>
              </Button>
            </form>

            {/* Contact Info Footer */}
            <div className="p-8 bg-slate-50 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                                                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-medium">Email Us</p>
                  <p className="font-semibold text-slate-900">hello@qenai.com</p>
                                            </div>
                                        </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                                    </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-medium">Location</p>
                  <p className="font-semibold text-slate-900">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

          {/* Alternative Contact */}
          <p className="text-center text-slate-500 mt-8">
            Prefer another way? <Link href="mailto:hello@qenai.com" className="text-primary font-semibold hover:underline">Send us a direct message</Link>.
          </p>
                </div>
            </section>
        </main>
    );
}
