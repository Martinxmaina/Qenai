"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CONTACT_INFO = [
  {
    icon: "location_on",
    title: "Nairobi Office",
    details: ["Nairobi, Kenya", "East Africa"]
  }
];

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
    // Here you would typically send the form data to your backend
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

    return (
        <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">Contact Us</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Let's <span className="text-primary">Transform</span> Together
                    </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to unlock the power of AI for your organization? Our team is here to help.
                    </p>
                </div>
            </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
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
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Input
                          id="role"
                          placeholder="e.g., CTO, Data Scientist"
                          value={formData.role}
                          onChange={(e) => handleChange("role", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">What are you interested in? *</Label>
                      <Select onValueChange={(value) => handleChange("interest", value)} required>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Schedule a Consultation</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="careers">Career Opportunities</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your AI needs..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                      <span className="material-symbols-outlined ml-2 text-sm">send</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
                            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Response</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">schedule</span>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                                        </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">support_agent</span>
                                        <div>
                      <p className="font-medium">24/7 Support</p>
                      <p className="text-sm text-muted-foreground">For enterprise clients</p>
                    </div>
                                        </div>
                                    </CardContent>
                                </Card>

              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">contact@qenai.ai</p>
                    </div>
                                        </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">phone</span>
                                        <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+254 700 000 000</p>
                    </div>
                                        </div>
                                    </CardContent>
                                </Card>

              {/* Social */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://linkedin.com/company/qenai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <span className="text-sm font-bold">in</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://twitter.com/qenai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                          <span className="text-sm font-bold">x</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/qenai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <span className="material-symbols-outlined text-lg">code</span>
                        </a>
                      </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                        </div>
                    </div>
                </div>
            </section>

      {/* Office Locations */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our location in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTACT_INFO.map((office, i) => (
              <Card key={i} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{office.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{office.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {office.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
