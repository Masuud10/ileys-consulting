import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Services | ILEYS Consulting",
    description: "Explore ILEYS consulting services including applied research, baseline surveys, impact evaluations, and organizational consulting.",
};

const researchServices = [
    {
        title: "Baseline Surveys",
        description: "Comprehensive baseline assessments to establish benchmarks for project interventions and measure future impact.",
        icon: "📊",
    },
    {
        title: "Impact Evaluations",
        description: "Rigorous evaluation studies to measure the effects and outcomes of development programs and interventions.",
        icon: "📈",
    },
    {
        title: "Market Surveys",
        description: "In-depth market research and analysis to understand economic dynamics and opportunities.",
        icon: "🏪",
    },
    {
        title: "KAP Studies",
        description: "Knowledge, Attitudes and Practices surveys to understand community behaviors and inform programming.",
        icon: "🧠",
    },
    {
        title: "Customer Satisfaction",
        description: "Client perception surveys to measure satisfaction and improve service delivery.",
        icon: "⭐",
    },
    {
        title: "Case Studies",
        description: "Detailed case study research to document best practices and lessons learned.",
        icon: "📚",
    },
    {
        title: "Third Party Monitoring",
        description: "Independent monitoring services to ensure project quality and accountability.",
        icon: "🔍",
    },
    {
        title: "Outcome Harvesting",
        description: "Participatory evaluation approach to identify and document project outcomes and changes.",
        icon: "🌾",
    },
];

const consultingServices = [
    {
        title: "Strategic Management",
        description: "Strategic planning, operational management, and leadership development to enhance organizational effectiveness.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            </svg>
        ),
    },
    {
        title: "Organizational Development",
        description: "Building organizational capacity through systems improvement, process optimization, and change management.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Proposal & Tender Writing",
        description: "Expert assistance in developing winning proposals and tender documents for donor-funded projects.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
            </svg>
        ),
    },
    {
        title: "M&E Systems",
        description: "Designing and implementing robust monitoring and evaluation frameworks for results-based management.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
            </svg>
        ),
    },
    {
        title: "Fundraising Strategy",
        description: "Developing strategic approaches to resource mobilization and donor engagement.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
            </svg>
        ),
    },
    {
        title: "Cost Management",
        description: "Financial management advisory services including budgeting, cost control, and financial reporting.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
        ),
    },
];

export default function ServicesPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 hero-mesh">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-ileys-yellow/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-ileys-green-light/20 rounded-full blur-3xl animate-float stagger-2" />
                </div>
                <div className="absolute inset-0 pattern-dots opacity-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-down">
                            <span className="w-2 h-2 rounded-full bg-ileys-yellow animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">Comprehensive Development Solutions</span>
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
                            Our <span className="text-gradient-gold">Services</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
                            Practical, creative and collaborative solutions to address organizational
                            and social development challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our approach is practical, creative and collaborative. We listen and integrate
                            our clients' vast experience in finding practical solutions to their work challenges
                            in a dynamic developing world. We have a core team of experts who offer technical
                            knowledge, insights and expertise. We ensure quality control, value for money and
                            better results for all our assignments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Applied Research Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-ileys-green to-ileys-green-light mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Applied <span className="text-gradient">Research</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            ILEYS supports clients to undertake applied research to enhance their knowledge base,
                            support planning and programming, and make informed decision-making.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {researchServices.map((service, index) => (
                            <Card
                                key={service.title}
                                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover-lift stagger-${index % 4 + 1}`}
                            >
                                <CardContent className="p-6">
                                    <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-ileys-green transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consulting Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-ileys-yellow to-ileys-yellow-light mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="text-gradient-gold">Consulting</span> Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our consultancy services are especially designed to help organizations achieve
                            sustainable results by empowering people and improving their systems and processes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {consultingServices.map((service, index) => (
                            <Card
                                key={service.title}
                                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group card-interactive stagger-${index % 3 + 1}`}
                            >
                                <CardContent className="p-8">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ileys-yellow to-ileys-yellow-light flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ileys-yellow transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-red/10 text-ileys-red font-semibold text-sm mb-6">
                                Our Expertise
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                Sector <span className="text-gradient">Experience</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Agriculture & Food Security",
                                "Livelihoods",
                                "Natural Resource Management",
                                "Agro-ecology",
                                "Gender Mainstreaming",
                                "Social Protection",
                                "WASH",
                                "Nutrition",
                                "Economics",
                            ].map((sector) => (
                                <div
                                    key={sector}
                                    className="px-6 py-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-ileys-green/30 hover:shadow-md transition-all duration-200 text-center"
                                >
                                    <span className="text-gray-700 font-medium">{sector}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 hero-mesh relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-ileys-yellow/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-ileys-green-light/20 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-0 pattern-lines opacity-20" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Need Our Research or Consulting Services?
                        </h2>
                        <p className="text-xl text-white/80 mb-10">
                            Let's discuss how we can support your organization's goals.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-ileys-green-dark hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
                                Get a Consultation
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
