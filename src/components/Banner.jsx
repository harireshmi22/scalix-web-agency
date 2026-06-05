"use client"
import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { anton, architectsDaughter, geologica } from "@/lib/fonts"


const Banner = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("banner-animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll(".banner-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full flex flex-col items-center relative overflow-hidden mt-16 sm:mt-24 md:mt-30 px-4 sm:px-6 py-8 sm:py-12"
        >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[800px] rounded-full bg-[#FFA369] blur-[220px] opacity-20 pointer-events-none" />

            {/* Glowing CTA Container */}
            <div className="banner-anim opacity-0 translate-y-8 transition-all duration-[800ms] ease-out relative w-full max-w-[1200px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E1E90] to-[#111162] border border-white/10 shadow-2xl px-4 sm:px-8 py-10 sm:py-16 md:py-20 flex flex-col items-center text-center">
                {/* Visual grid backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#ff6200]/20 blur-[80px]" />
                <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#D6F1FF]/10 blur-[80px]" />

                {/* Badge */}
                <div className="relative z-10 rounded-full px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm">
                    <span className={`text-[#FFA369] text-xs uppercase tracking-widest font-extrabold ${geologica.className}`}>
                        Ready to level up your business?
                    </span>
                </div>

                {/* Heading */}
                <h2 className={`relative z-10 text-[26px] sm:text-[40px] md:text-[54px] font-bold text-white max-w-4xl mt-6 sm:mt-8 leading-tight tracking-wide ${anton.className}`}>
                    Have a Vision? Let&apos;s turn it into <br className="hidden sm:block" />
                    a <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal tracking-wider`}>scalable</span> masterpiece.
                </h2>

                {/* Subtext */}
                <p className={`relative z-10 text-gray-300 max-w-2xl mt-6 text-[15px] sm:text-[17px] leading-relaxed ${geologica.className}`}>
                    Partner with Scalix Web Agency to build secure web applications, sleek portfolios, or get complete maintenance coverage. Our team has the expertise to launch your goals successfully.
                </p>

                {/* Buttons */}
                <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-10 w-full">
                    {/* Primary Button */}
                    <Link
                        href="/contact"
                        className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                        <span>Start Your Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>

                    {/* Secondary Button */}
                    <Link
                        href="/project"
                        className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                        <span>View Portfolio</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .banner-animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    );
};

export default Banner;