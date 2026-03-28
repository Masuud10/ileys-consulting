import type { ReactNode } from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "What We Do | ILEYS Consulting",
    description:
        "How ILEYS delivers applied research, training, and consulting—evidence, capacity building, and institutional support for development in Somalia.",
};

function CircleIcon({ children }: { children: ReactNode }) {
    return (
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 mb-6">
            {children}
        </div>
    );
}

export default function WhatWeDoPage() {
    return (
        <div className="overflow-hidden bg-white">
            {/* Intro */}
            <section className="pt-20 pb-16 md:pt-24 md:pb-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-4">
                        ILEYS is a research, training and consulting company addressing{" "}
                        <strong className="font-medium text-gray-800">organizational and social development</strong> challenges in{" "}
                        <strong className="font-medium text-gray-800">Somalia</strong>, with deep experience in the South West State context.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        We combine{" "}
                        <strong className="font-medium text-gray-800">field presence</strong>,{" "}
                        <strong className="font-medium text-gray-800">applied research</strong>, and{" "}
                        <strong className="font-medium text-gray-800">practical advisory support</strong> so partners can act on evidence and build lasting capacity.
                    </p>
                </div>
            </section>

            {/* Row 1 — panel left */}
            <section className="border-t border-gray-100">
                <div className="grid md:grid-cols-2 min-h-[340px] md:min-h-[380px]">
                    <div
                        className="relative flex flex-col items-center justify-center px-8 py-14 text-center text-white order-2 md:order-1"
                        style={{
                            backgroundColor: "#c2410c",
                            backgroundImage: `
                repeating-radial-gradient(circle at center, transparent 0, transparent 12px, rgba(255,255,255,0.06) 12px, rgba(255,255,255,0.06) 13px)
              `,
                        }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md leading-tight mb-8">
                            Applied Research &amp; M&amp;E
                        </h2>
                        <Link
                            href="/services"
                            className="inline-block px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border-2 border-white/90 text-white hover:bg-white/10 transition-colors"
                        >
                            Explore services
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center px-8 md:px-14 py-14 bg-white order-1 md:order-2">
                        <CircleIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3v18h18" />
                                <path d="m19 9-5 5-4-4-3 3" />
                                <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                            </svg>
                        </CircleIcon>
                        <p className="text-gray-700 leading-relaxed text-center max-w-lg">
                            We support{" "}
                            <strong className="font-semibold text-gray-900">public institutions, NGOs, and development partners</strong> with baselines, impact and outcome assessments,
                            KAP studies, and{" "}
                            <strong className="font-semibold text-gray-900">third-party monitoring</strong>. Our work turns data into{" "}
                            <strong className="font-semibold text-gray-900">timely insight</strong> so you can track progress, capture{" "}
                            <strong className="font-semibold text-gray-900">lessons learned</strong>, and improve programming in{" "}
                            <strong className="font-semibold text-gray-900">real time</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Row 2 — panel right */}
            <section className="border-t border-gray-100">
                <div className="grid md:grid-cols-2 min-h-[340px] md:min-h-[380px]">
                    <div className="flex flex-col items-center justify-center px-8 md:px-14 py-14 bg-white">
                        <CircleIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </CircleIcon>
                        <p className="text-gray-700 leading-relaxed text-center max-w-lg">
                            Our training builds practical skills in{" "}
                            <strong className="font-semibold text-gray-900">project cycle management</strong>,{" "}
                            <strong className="font-semibold text-gray-900">M&amp;E</strong>,{" "}
                            <strong className="font-semibold text-gray-900">gender mainstreaming</strong>, and{" "}
                            <strong className="font-semibold text-gray-900">leadership and facilitation</strong>. Programs are tailored to teams in the{" "}
                            <strong className="font-semibold text-gray-900">public, private, and non-profit</strong> sectors so staff can apply tools confidently in the field.
                        </p>
                    </div>
                    <div
                        className="relative flex flex-col items-center justify-center px-8 py-14 text-center text-white"
                        style={{
                            backgroundColor: "#0f766e",
                            backgroundImage: `
                linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 70%, rgba(0,0,0,0.12) 0%, transparent 55%)
              `,
                        }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md leading-tight mb-8">
                            Training &amp; Capacity Building
                        </h2>
                        <Link
                            href="/training"
                            className="inline-block px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border-2 border-white/90 text-white hover:bg-white/10 transition-colors"
                        >
                            View programs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Row 3 — panel left */}
            <section className="border-t border-b border-gray-100">
                <div className="grid md:grid-cols-2 min-h-[340px] md:min-h-[380px]">
                    <div
                        className="relative flex flex-col items-center justify-center px-8 py-14 text-center text-white order-2 md:order-1"
                        style={{
                            backgroundColor: "#b45309",
                            backgroundImage: `
                repeating-linear-gradient(-19deg, transparent, transparent 16px, rgba(255,255,255,0.05) 16px, rgba(255,255,255,0.05) 17px)
              `,
                        }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md leading-tight mb-8">
                            Consulting &amp; Institutional Development
                        </h2>
                        <Link
                            href="/services"
                            className="inline-block px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border-2 border-white/90 text-white hover:bg-white/10 transition-colors"
                        >
                            Work with us
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center px-8 md:px-14 py-14 bg-white order-1 md:order-2">
                        <CircleIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </CircleIcon>
                        <p className="text-gray-700 leading-relaxed text-center max-w-lg">
                            We help organizations strengthen strategy, systems, and teams—supporting{" "}
                            <strong className="font-semibold text-gray-900">strategic planning</strong>,{" "}
                            <strong className="font-semibold text-gray-900">proposal and tender writing</strong>, and{" "}
                            <strong className="font-semibold text-gray-900">organizational effectiveness</strong>. Our consulting is collaborative: we transfer knowledge so partners can sustain results beyond the assignment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
