import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
    company: [
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/training", label: "Training" },
        { href: "/contact", label: "Contact" },
    ],
    services: [
        { href: "/services", label: "Applied Research" },
        { href: "/services", label: "Consulting" },
        { href: "/training", label: "Training Programs" },
        { href: "/services", label: "M&E Services" },
    ],
};

export function Footer() {
    return (
        <footer className="footer-gradient text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ileys-green to-ileys-green-light flex items-center justify-center">
                                <span className="text-white font-bold text-xl">I</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white tracking-tight">
                                    ILEYS
                                </span>
                                <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                                    Consult
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Research, Training and Consulting company specialized in offering
                            practical solutions on organizational and social development challenges.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-ileys-green/30 flex items-center justify-center transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-ileys-green/30 flex items-center justify-center transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-ileys-green/30 flex items-center justify-center transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:ileys.rtcc@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-ileys-green/30 flex items-center justify-center transition-colors duration-300"
                                aria-label="Email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            Company
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-ileys-green to-ileys-yellow" />
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-ileys-green-light transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-ileys-green-light group-hover:w-3 transition-all duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            Services
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-ileys-green to-ileys-yellow" />
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-ileys-green-light transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-ileys-green-light group-hover:w-3 transition-all duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-ileys-green to-ileys-yellow" />
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-ileys-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-green-light">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Baidoa, South West State</p>
                                    <p className="text-gray-400 text-sm">Somalia</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-ileys-green/20 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-green-light">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <a href="tel:+252615575496" className="text-gray-400 hover:text-ileys-green-light transition-colors text-sm">
                                    +252 615 575 496
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-ileys-green/20 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ileys-green-light">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <a href="mailto:ileys.rtcc@gmail.com" className="text-gray-400 hover:text-ileys-green-light transition-colors text-sm">
                                    ileys.rtcc@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Separator className="bg-white/10" />

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} ILEYS Research, Training & Consulting. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        Made with
                        <span className="text-ileys-red">♥</span>
                        in Somalia
                    </p>
                </div>
            </div>
        </footer>
    );
}
