import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Applied Research",
    description:
      "Baseline surveys, impact evaluations, market assessments, and KAP studies to support evidence-based decision making.",
    color: "from-ileys-green to-ileys-green-light",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Training Programs",
    description:
      "Customized capacity building programs in project management, leadership, research methods, and organizational development.",
    color: "from-ileys-yellow to-ileys-yellow-light",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Consulting Services",
    description:
      "Strategic management, institutional development, and practical solutions for organizational challenges.",
    color: "from-ileys-red to-ileys-red-light",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "15+", label: "Partner Organizations" },
  { value: "100+", label: "Professionals Trained" },
];

const partnerLogos = [
  {
    src: "/partners/ministry-livestock-southwest-somalia.png",
    alt: "Ministry of Livestock, Forestry and Range Southwest State of Somalia",
  },
  {
    src: "/partners/coopi.png",
    alt: "COOPI Cooperazione Internazionale",
  },
];

const competencies = [
  { title: "Strategic Management", icon: "📊" },
  { title: "Project Management", icon: "📋" },
  { title: "Research & M&E", icon: "🔬" },
  { title: "Capacity Building", icon: "🎯" },
  { title: "Gender Mainstreaming", icon: "⚖️" },
  { title: "Proposal Writing", icon: "✍️" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-green-50/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ileys-green/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ileys-yellow/10 rounded-full blur-3xl animate-float stagger-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ileys-green/5 rounded-full blur-3xl" />
          {/* Decorative green accent shapes */}
          <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-ileys-green to-ileys-green-light rounded-3xl rotate-12 opacity-20" />
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-ileys-yellow to-ileys-yellow-light rounded-2xl -rotate-12 opacity-30" />
          <div className="absolute top-1/3 right-10 w-4 h-4 bg-ileys-red rounded-full opacity-60" />
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-ileys-green rounded-full opacity-50" />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 pattern-dots opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ileys-green/10 backdrop-blur-sm border border-ileys-green/20 mb-8 animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-ileys-green animate-pulse" />
              <span className="text-ileys-green-dark text-sm font-medium">
                Trusted by Leading Organizations in Somalia
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up leading-tight">
              Offering up-to-date
              <br />
              <span className="text-gradient">Practical Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1 leading-relaxed">
              Empowering organizations through research, training, and
              consulting to create meaningful impact across East Africa and
              beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <Link href="/services">
                <Button
                  size="lg"
                  className="group bg-ileys-green hover:bg-ileys-green-dark text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-ileys-green/20 transition-all duration-300 hover:scale-105"
                >
                  Explore Our Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl border-2 border-ileys-green/30 text-ileys-green-dark hover:bg-ileys-green/5 hover:border-ileys-green/50 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-ileys-green/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-ileys-green/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-green/10 text-ileys-green font-semibold text-sm mb-6">
                About ILEYS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Driving Change Through{" "}
                <span className="text-gradient">Knowledge & Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2015, ILEYS has been at the forefront of development
                consulting in Somalia. We bring together a network of
                experienced professionals with decades of hands-on experience in
                applied research, strategic management, and institutional
                development.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our collaborative approach ensures that we work in partnership
                with organizations to improve knowledge and competence in using
                research findings for decision making.
              </p>
              <Link href="/about">
                <Button className="bg-ileys-green hover:bg-ileys-green-dark text-white px-6 py-3 rounded-xl hover-lift">
                  Learn More About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ileys-green to-ileys-green-light p-1 hover-lift">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-white flex items-center justify-center shadow-2xl overflow-hidden border border-gray-100">
                      <Image
                        src="/ileys-icon.png"
                        alt="ILEYS Consulting"
                        width={128}
                        height={128}
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      ILEYS Consult
                    </h3>
                    <p className="text-gray-500">
                      Research • Training • Consulting
                    </p>
                    <div className="mt-6 flex justify-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-ileys-green" />
                      <span className="w-3 h-3 rounded-full bg-ileys-yellow" />
                      <span className="w-3 h-3 rounded-full bg-ileys-red" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-ileys-yellow/20 rounded-2xl -rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ileys-green/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-green/10 text-ileys-green font-semibold text-sm mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions designed to address organizational and
              social development challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-interactive stagger-${index + 1}`}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-ileys-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-ileys-green font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-ileys-yellow/10 text-ileys-yellow font-semibold text-sm mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient-gold">Competencies</span>
            </h2>
            <p className="text-lg text-gray-600">
              Expertise built over years of hands-on experience in development
              consulting
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {competencies.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-ileys-green/30 hover:shadow-xl transition-all duration-300 text-center hover-lift stagger-${index + 1}`}
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted By Leading Organizations
            </h2>
            <p className="text-gray-500">
              We maintain partnerships with organizations committed to
              development
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {partnerLogos.map((partner) => (
              <div
                key={partner.src}
                className="flex items-center justify-center px-8 py-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={320}
                  height={160}
                  className="object-contain w-auto max-h-28 md:max-h-36"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-mesh relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ileys-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-ileys-green/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 pattern-lines opacity-[0.35]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Let us work together to develop practical solutions for your
              challenges. Contact us today to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-ileys-green hover:bg-ileys-green-dark text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl border-2 border-gray-300 text-gray-800 bg-white/60 hover:bg-white hover:border-ileys-green/40 transition-all"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
