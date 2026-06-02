"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/logo.jpeg"
import { anton } from "@/lib/fonts"


const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service" },
    { label: "Pricing", href: "/pricing" },
    { label: "Projects", href: "/project" },
    { label: "Features", href: "/feature" },
    { label: "About", href: "/about" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[95%] max-w-7xl min-h-16 rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled
                ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-gray-200/40 border border-gray-200/60"
                : "bg-white/10 backdrop-blur-md border border-white/15"
                }`}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 group">
                <Image
                    src={logo}
                    alt="Scalix Logo"
                    width={36}
                    height={36}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 rounded-full"
                />
                <span className={`text-[20px] font-bold transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"} ${anton.className}`}>
                    scalix
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`relative px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 hover:bg-white/10 ${scrolled
                            ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                            : "text-white/70 hover:text-white"
                            }`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
                <Link
                    href="/contact"
                    className="relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-[#ff6200] to-[#ff8a3d] shadow-md shadow-orange-200/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-300/50 hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10">Contact us</span>
                    <div className="absolute inset-0 bg-linear-to-r from-[#ff8a3d] to-[#ff6200] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""} ${scrolled ? "bg-gray-900" : "bg-white"}`} />
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""} ${scrolled ? "bg-gray-900" : "bg-white"}`} />
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""} ${scrolled ? "bg-gray-900" : "bg-white"}`} />
            </button>

            {/* Mobile Dropdown */}
            <div className={`absolute top-full left-0 right-0 mt-3 md:hidden bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 shadow-xl overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0 border-0"}`}>
                <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-2 text-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-[#ff6200] to-[#ff8a3d] shadow-md"
                    >
                        Get Started
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header