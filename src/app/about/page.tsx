import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "About Us | ILEYS Consulting",
    description: "Learn about ILEYS Research, Training and Consulting Company. Established in 2015, we specialize in offering practical solutions on organizational and social development challenges.",
};

const team = [
    {
        role: "Executive Director",
        description: "Provides strategic leadership and overall direction for the organization.",
    },
    {
        role: "Technical Lead Consultant",
        description: "Leads technical aspects of research and consulting projects.",
    },
    {
        role: "Deputy Technical Lead",
        description: "Supports technical leadership and manages project implementation.",
    },
    {
        role: "Nutrition & Health Specialist",
        description: "Expert in nutrition, health, and WASH sector programming.",
    },
    {
        role: "Gender & Protection Specialist",
        description: "Leads gender mainstreaming and protection-focused initiatives.",
    },
];

const values = [
    {
        icon: "🎯",
        title: "Client First",
        description: "Our first responsibility is to the client. The success of ILEYS is measured by how we meet our responsibility to our clients.",
    },
    {
        icon: "🤝",
        title: "Partnership",
        description: "We maintain partnerships with our customers, seeking long-term relationships based on the partner's strategy.",
    },
    {
        icon: "💡",
        title: "Innovation",
        description: "We strive towards innovating sustainable solutions and developing competences within all sectors.",
    },
    {
        icon: "📚",
        title: "Learning",
        description: "We are a learning organization, emphasizing teamwork and the sharing of knowledge and expertise.",
    },
    {
        icon: "✨",
        title: "Excellence",
        description: "We combine modern, dynamic style with professionalism in the continuous pursuit of excellence.",
    },
    {
        icon: "🌍",
        title: "Local Expertise",
        description: "Deep understanding of the Somali context with over 10 years of working experience in the region.",
    },
];

export default function AboutPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 hero-mesh">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-ileys-yellow/10 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-ileys-green/10 rounded-full blur-3xl animate-float stagger-2" />
                </div>
                <div className="absolute inset-0 pattern-dots opacity-[0.07]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200/80 mb-8 animate-fade-in-down shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-ileys-yellow animate-pulse" />
                            <span className="text-gray-700 text-sm font-medium">Established 2015 in South West State Somalia</span>
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight">
                            About <span className="text-gradient-gold">ILEYS</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
                            A research, training and consulting company specialized in offering
                            practical solutions on organizational and social development challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group hover-lift">
                            <div className="h-2 bg-gradient-to-r from-ileys-green to-ileys-green-light" />
                            <CardContent className="p-8">
                                <div className="w-16 h-16 rounded-2xl bg-ileys-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-green">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m16 12-4-4-4 4" />
                                        <path d="M12 16V8" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We strive towards innovating sustainable solutions and developing
                                    competences of individuals and organizations within the public,
                                    private, and the non-profit sectors.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Vision */}
                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group hover-lift">
                            <div className="h-2 bg-gradient-to-r from-ileys-yellow to-ileys-yellow-light" />
                            <CardContent className="p-8">
                                <div className="w-16 h-16 rounded-2xl bg-ileys-yellow/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-yellow">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To be recognized as a leading consulting firm in making
                                    Productivity and Quality Improvement through people works.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-green/10 text-ileys-green font-semibold text-sm mb-6">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                Who We <span className="text-gradient">Are</span>
                            </h2>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    ILEYS Consult (ILEYS) is a research, training and consulting company registered
                                    in South West State Somalia in 2015. With extensive working experience in the
                                    Somali context, especially areas under SWS jurisdiction, we have established
                                    ourselves as a trusted partner for development organizations.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Our research team is composed of individuals with a strong background spanning
                                    over 10 years' experience in agriculture, food security and livelihoods, natural
                                    resource management, agro-ecology, gender mainstreaming, social protection, WASH,
                                    nutrition, economics, and other sectors.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    We adopt a collaborative and participatory approach to research issues, working
                                    in partnership with client organizations to help them make accurate, insightful
                                    and timely decisions. Our services are based on fact and fair assessment, combining
                                    market knowledge and synthesized experience with theoretical knowledge.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    ILEYS has national and international linkages with experts and organizations such
                                    as SAFE, World Vision, COOPI and DRC, allowing us to tap into a wide range of
                                    experienced expertise to undertake various activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-yellow/10 text-ileys-yellow font-semibold text-sm mb-6">
                            What Drives Us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-gradient-gold">Values</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            The principles that guide our work and define who we are
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card
                                key={value.title}
                                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-interactive stagger-${index + 1}`}
                            >
                                <CardContent className="p-8">
                                    <span className="text-4xl mb-4 block">{value.icon}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-green/10 text-ileys-green font-semibold text-sm mb-6">
                            Our Team
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Leadership <span className="text-gradient">Structure</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our team members are highly qualified professionals with decades of experience
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {team.map((member, index) => (
                                <div
                                    key={member.role}
                                    className={`flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-ileys-green/30 hover:shadow-lg transition-all duration-300 stagger-${index + 1}`}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ileys-green to-ileys-green-light flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        {member.role[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{member.role}</h3>
                                        <p className="text-gray-600">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-0 shadow-2xl overflow-hidden">
                            <div className="h-2 bg-gradient-to-r from-ileys-green via-ileys-yellow to-ileys-red" />
                            <CardContent className="p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                                        <p className="text-gray-600 mb-6">
                                            Ready to work with us? Contact our General Manager and Lead Consultant.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-ileys-green/10 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-green">
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path d="M20 21a8 8 0 1 0-16 0" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 font-medium">Abdiaziz M. Adan</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-ileys-green/10 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-green">
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                        <circle cx="12" cy="10" r="3" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">Baidoa, SWS Somalia</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center md:justify-end">
                                        <Link href="/contact">
                                            <Button size="lg" className="bg-ileys-green hover:bg-ileys-green-dark text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                                Contact Us
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
