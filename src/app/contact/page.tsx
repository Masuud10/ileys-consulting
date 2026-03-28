"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ContactRow = { text: string; href?: string };

const contactInfo: {
    icon: ReactNode;
    title: string;
    rows: ContactRow[];
}[] = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: "Address",
        rows: [
            { text: "Baidoa, South West State, Somalia" },
            { text: "Ngong Road, Nairobi, Kenya" },
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        title: "Phone",
        rows: [
            { text: "+252 615 575 496", href: "tel:+252615575496" },
            { text: "+254 716 211 499", href: "tel:+254716211499" },
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
        title: "Email",
        rows: [{ text: "ileys.rtcc@gmail.com", href: "mailto:ileys.rtcc@gmail.com" }],
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:ileys.rtcc@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="overflow-hidden">
            <section className="relative py-24 lg:py-32 hero-mesh">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-ileys-green/10 rounded-full blur-3xl animate-float" />
                </div>
                <div className="absolute inset-0 pattern-dots opacity-[0.07]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                            Contact <span className="text-gradient-gold">Us</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get in touch with our team to discuss your research, training, or consulting needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Ready to work with us? Fill out the form and we'll get back to you shortly.
                            </p>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-ileys-green/10 flex items-center justify-center text-ileys-green flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                            <div className="space-y-1">
                                                {info.rows.map((row) =>
                                                    row.href ? (
                                                        <a
                                                            key={row.text}
                                                            href={row.href}
                                                            className="block text-gray-600 hover:text-ileys-green transition-colors"
                                                        >
                                                            {row.text}
                                                        </a>
                                                    ) : (
                                                        <p key={row.text} className="text-gray-600">
                                                            {row.text}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Card className="border border-gray-200/80 shadow-lg bg-gradient-to-br from-emerald-50 via-slate-50 to-gray-100 text-gray-900">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">Lead Consultant</h3>
                                    <p className="text-gray-700">Abdiaziz M. Adan</p>
                                    <p className="text-gray-600 text-sm mt-2">General Manager</p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ileys-green focus:ring-2 focus:ring-ileys-green/20 outline-none transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ileys-green focus:ring-2 focus:ring-ileys-green/20 outline-none transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ileys-green focus:ring-2 focus:ring-ileys-green/20 outline-none transition-all"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ileys-green focus:ring-2 focus:ring-ileys-green/20 outline-none transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-ileys-green hover:bg-ileys-green-dark text-white py-6 rounded-xl text-lg">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
