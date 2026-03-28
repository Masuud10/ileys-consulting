import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thematic Areas | ILEYS Consulting",
    description:
        "Sectors and themes where ILEYS provides research, training, and consulting in Somalia and the region.",
};

const thematicAreas = [
    "Food Security & Livelihoods",
    "Agriculture & Livestock",
    "Nutrition & Health",
    "WASH & Public Health",
    "Natural Resource Management",
    "Climate & Environment",
    "Gender & Social Inclusion",
    "Social Protection",
    "Youth & TVET",
    "Economic Recovery & Markets",
    "Governance & Accountability",
    "Peacebuilding & Stabilization",
    "Humanitarian & Emergency Response",
    "Applied Research & Surveys",
    "M&E & Learning",
    "Impact & Outcome Evaluation",
    "Organizational Development",
    "Project & Program Management",
    "Strategic Planning & Leadership",
    "Institutional Capacity Building",
    "Proposal & Grant Writing",
    "Agro-ecology & Sustainable Land",
    "Data Quality & Field Methods",
    "Partnerships & Consortium Support",
    "Financial Management Advisory",
    "Community Engagement",
    "Quality & Results-Based Management",
];

export default function ThematicAreasPage() {
    return (
        <div className="overflow-hidden">
            {/* Header band */}
            <header className="relative min-h-[200px] md:min-h-[240px] flex items-end justify-center pb-10 pt-24 px-4 overflow-hidden">
                <div
                    className="absolute inset-0 scale-110"
                    style={{
                        background: `
              linear-gradient(125deg, rgba(22, 101, 52, 0.85) 0%, rgba(15, 118, 110, 0.75) 40%, rgba(202, 138, 4, 0.5) 100%),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
                        filter: "blur(0px)",
                    }}
                />
                <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" aria-hidden />
                <div className="relative z-10 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-ileys-yellow-light drop-shadow-sm">
                        Thematic areas
                    </h1>
                    <div className="mx-auto mt-3 h-0.5 w-24 md:w-32 bg-ileys-yellow rounded-full" />
                    <p className="mt-4 text-sm md:text-base text-white/90 max-w-2xl mx-auto font-light">
                        Focus sectors where ILEYS combines field experience, research, and training for partners across Somalia and the Horn of Africa.
                    </p>
                </div>
            </header>

            {/* Grid section */}
            <section
                className="relative py-14 md:py-20 px-4"
                style={{
                    background: `
            linear-gradient(180deg, #0f172a 0%, #1e293b 45%, #0f172a 100%)
          `,
                }}
            >
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25) 0%, transparent 55%)`,
                    }}
                    aria-hidden
                />
                <div className="container mx-auto max-w-[1600px] relative z-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 gap-3 md:gap-4">
                        {thematicAreas.map((title) => (
                            <div
                                key={title}
                                className="rounded-xl border border-white/15 bg-slate-800/90 px-2 py-4 md:py-5 shadow-lg shadow-black/30 text-center flex items-center justify-center min-h-[72px] md:min-h-[80px] hover:border-ileys-yellow/40 hover:bg-slate-800 transition-colors"
                            >
                                <span className="text-[11px] sm:text-xs md:text-sm font-bold leading-snug text-ileys-yellow-light">
                                    {title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
