import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Training Programs | ILEYS Consulting",
    description: "Explore ILEYS customized training programs in organizational effectiveness, project management, personal development, and research skills.",
};

const trainingCategories = [
    {
        title: "Organizational Effectiveness",
        description: "Build stronger organizations through strategic management and team building.",
        icon: "🏢",
        color: "from-ileys-green to-ileys-green-light",
        courses: [
            "Strategic Planning and Management",
            "Change Management Skills",
            "Effective Human Resource Management",
            "Strategic Fundraising Skills",
            "Team Building Skills",
        ],
    },
    {
        title: "Project Management",
        description: "Master the skills needed to manage development projects effectively.",
        icon: "📋",
        color: "from-ileys-yellow to-ileys-yellow-light",
        courses: [
            "Project Cycle Management",
            "Community Needs Assessment",
            "Participatory Monitoring and Evaluation",
            "Proposal Writing for Donor Projects",
            "Results Based Management",
        ],
    },
    {
        title: "Personal Development",
        description: "Enhance individual skills for professional growth.",
        icon: "🎯",
        color: "from-ileys-red to-ileys-red-light",
        courses: [
            "Communication and Presentation Skills",
            "Facilitation Skills (ToT & ToF)",
            "Leadership Skills",
            "Stress Management",
        ],
    },
    {
        title: "Research Skills",
        description: "Develop research capabilities for decision making.",
        icon: "🔬",
        color: "from-ileys-navy to-ileys-navy-light",
        courses: [
            "Academic Research Methods",
            "Applied Research Methods",
            "Participatory Research Methods",
        ],
    },
];

export default function TrainingPage() {
    return (
        <div className="overflow-hidden">
            <section className="relative py-24 lg:py-32 hero-mesh">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-ileys-yellow/20 rounded-full blur-3xl animate-float" />
                </div>
                <div className="absolute inset-0 pattern-dots opacity-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                            Training <span className="text-gradient-gold">Programs</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Quality, customized training that provides participants with practical skills.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Training <span className="text-gradient">Categories</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {trainingCategories.map((category) => (
                            <Card key={category.title} className="border-0 shadow-xl overflow-hidden">
                                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="md:w-1/3">
                                            <span className="text-5xl mb-4 block">{category.icon}</span>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                                            <p className="text-gray-600">{category.description}</p>
                                        </div>
                                        <div className="md:w-2/3">
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {category.courses.map((course) => (
                                                    <div key={course} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                                                        <span className="text-gray-700 text-sm font-medium">{course}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 hero-mesh relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Invest in Your Team?
                        </h2>
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-ileys-green-dark hover:bg-white/90 text-lg px-8 py-6 rounded-xl">
                                Request Training
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
