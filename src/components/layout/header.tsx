"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass-dark">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ileys-green to-ileys-green-light flex items-center justify-center shadow-lg group-hover:shadow-ileys-green/30 transition-shadow duration-300">
                                <span className="text-white font-bold text-xl">I</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-ileys-yellow animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white tracking-tight">
                                ILEYS
                            </span>
                            <span className="text-[10px] text-gray-300 tracking-widest uppercase">
                                Research • Training • Consulting
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-gray-200 hover:text-white font-medium transition-colors duration-200 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-ileys-green-light to-ileys-yellow group-hover:w-3/4 transition-all duration-300" />
                            </Link>
                        ))}
                        <Link href="/contact">
                            <Button className="ml-4 bg-gradient-to-r from-ileys-green to-ileys-green-light hover:from-ileys-green-light hover:to-ileys-green text-white shadow-lg hover:shadow-ileys-green/30 transition-all duration-300">
                                Get in Touch
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-ileys-navy border-ileys-navy-light">
                            <nav className="flex flex-col gap-2 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full mt-4 bg-gradient-to-r from-ileys-green to-ileys-green-light text-white">
                                        Get in Touch
                                    </Button>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
