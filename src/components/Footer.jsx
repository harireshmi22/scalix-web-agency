"use client"
import React from 'react'
import Link from 'next/link'
import { anton, architectsDaughter, geologica } from "@/lib/fonts"

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-[#0f0f5c] w-full overflow-hidden relative flex flex-col items-center pt-20 pb-10 px-6 md:px-12 border-t border-white/5"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-40 -left-40 h-[350px] w-[600px] rounded-full bg-[#FFA369] blur-[220px] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 h-[350px] w-[600px] rounded-full bg-[#D6F1FF] blur-[200px] opacity-15 pointer-events-none" />

            {/* Grid Container */}
            <div className="w-full max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">

                    {/* Left Column: Brand & Description */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-1.5 group self-start">
                            <div className="h-9 w-9 rounded-xl bg-linear-to-br from-[#ff6200] to-[#ff8a3d] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <span className="text-white text-base font-black">S</span>
                            </div>
                            <span className={`text-2xl font-bold text-white ${anton.className}`}>
                                Scalix
                            </span>
                        </Link>
                        <p className={`text-gray-300 text-[14.5px] leading-relaxed max-w-full md:max-w-[360px] ${geologica.className}`}>
                            Building modern, scalable, and high-performance websites for businesses and creators. We specialize in MERN, Next.js, and visually stunning digital products that scale.
                        </p>
                        {/* Social Links placeholder */}
                        <div className="flex gap-4">
                            {["twitter", "github", "linkedin", "instagram"].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={`#${social}`}
                                    className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#FFA369] hover:border-[#FFA369] hover:text-black transition-all duration-300 hover:-translate-y-1 text-gray-400"
                                >
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        {social === "twitter" && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                                        {social === "github" && <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />}
                                        {social === "linkedin" && <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />}
                                        {social === "instagram" && <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns (Grid layout of 8 cols remaining) */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

                        {/* Col 1: Links */}
                        <div className="flex flex-col gap-5">
                            <h3 className={`text-white text-[15px] tracking-wider uppercase font-bold ${anton.className}`}>
                                Company
                            </h3>
                            <ul className={`flex flex-col gap-3 text-[14px] text-gray-400 ${geologica.className}`}>
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "Services", href: "/service" },
                                    { label: "Projects", href: "/project" },
                                    { label: "Team", href: "/about" }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-[#FFA369] transition-colors duration-200"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 2: Services */}
                        <div className="flex flex-col gap-5">
                            <h3 className={`text-white text-[15px] tracking-wider uppercase font-bold ${anton.className}`}>
                                Services
                            </h3>
                            <ul className={`flex flex-col gap-3 text-[14px] text-gray-400 ${geologica.className}`}>
                                {["Web Solutions", "Web Development", "UI / UX Design", "Maintenance"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="/service"
                                            className="hover:text-[#FFA369] transition-colors duration-200"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Features */}
                        <div className="flex flex-col gap-5">
                            <h3 className={`text-white text-[15px] tracking-wider uppercase font-bold ${anton.className}`}>
                                Features
                            </h3>
                            <ul className={`flex flex-col gap-3 text-[14px] text-gray-400 ${geologica.className}`}>
                                {["Scalable Architecture", "SEO Optimization", "Fast & Secure", "24/7 Support"].map((item) => (
                                    <li key={item} className="hover:text-white transition-colors duration-200 select-none">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Contact info */}
                        <div className="flex flex-col gap-5">
                            <h3 className={`text-white text-[15px] tracking-wider uppercase font-bold ${anton.className}`}>
                                Get in Touch
                            </h3>
                            <ul className={`flex flex-col gap-3 text-[14px] text-gray-400 ${geologica.className}`}>
                                <li>
                                    <a
                                        href="mailto:hello@scalix.com"
                                        className="hover:text-[#FFA369] transition-colors duration-200"
                                    >
                                        hello@scalix.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+917598805818"
                                        className="hover:text-[#FFA369] transition-colors duration-200"
                                    >
                                        +91 75988 05818
                                    </a>
                                </li>
                                <li className="leading-relaxed text-xs">
                                    1st Floor, 75, Navavoor, Coimbatore, Tamil Nadu 641010
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Team Acknowledgement Row */}
                <div className="py-8 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3">
                        <span className={`text-[12px] uppercase text-gray-500 font-extrabold tracking-widest ${geologica.className}`}>
                            The Team Behind Scalix:
                        </span>
                    </div>
                    <div className={`md:col-span-9 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-gray-300 ${geologica.className}`}>
                        <span><strong>Hari Reshmi</strong> — Manager & Coordinator</span>
                        <span><strong>Kanishq Gautam</strong> — MERN Developer</span>
                        <span><strong>Srestha Mishra</strong> — AI/ML Developer</span>
                        <span><strong>Kaushtubh Singh</strong> — JS Developer</span>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className={`text-[13.5px] text-gray-500 text-center sm:text-left ${geologica.className}`}>
                        © {new Date().getFullYear()} Scalix. All rights reserved.
                    </p>
                    <p className={`text-[13.5px] text-gray-500 text-center sm:text-right ${geologica.className}`}>
                        Designed and developed with passion by <span className={`text-[#FFA369] ${architectsDaughter.className}`}>Scalix Team</span>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
