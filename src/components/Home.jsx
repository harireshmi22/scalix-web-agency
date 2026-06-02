"use client"
import React, { useRef, useEffect } from 'react'
import homes from "../../public/home-removebg-preview.png"
import Image from 'next/image'
import { anton, architectsDaughter, geologica } from "@/lib/fonts"

const Home = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("home-animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll(".home-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const keyMetrics = [
        { value: "99.9%", label: "Platform Uptime", color: "text-[#FFA369]" },
        { value: "< 1.2s", label: "Page Load Time", color: "text-blue-300" },
        { value: "100%", label: "Custom Code & SEO", color: "text-purple-300" },
    ];

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#0d0d59] flex flex-col justify-between pt-28 pb-14 px-4 sm:px-6 md:px-12 lg:px-20"
        >
            {/* Mesh Grid Backdrop */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] [radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Glowing Ambient Orbs */}
            <div className="absolute -bottom-24 -left-24 h-48 w-48 sm:-bottom-48 sm:-left-48 sm:h-72 sm:w-72[18rem] lg:h-150 lg:w-150 rounded-full bg-[#FFA369] blur-[240px] opacity-[0.22] animate-pulse duration-[10s] pointer-events-none" />
            <div className="absolute -top-24 right-[-12%] h-56 w-56 sm:-top-48 sm:right-[-10%] sm:h-72 sm:w-[20rem] lg:h-150 lg:w-200 rounded-full bg-[#D6F1FF] blur-[220px] opacity-[0.18] animate-pulse duration-[12s] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 h-24 w-24 sm:h-40 sm:w-40 rounded-full bg-[#8b5cf6] blur-[150px] opacity-[0.12] pointer-events-none" />

            {/* Main Interactive Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">

                {/* Left Text / Actions Column */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">

                    {/* Brand Pill Badge */}
                    <div className="home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out flex items-center mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md shadow-inner shadow-white/5">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                            <span className={`text-gray-300 text-[11px] md:text-xs uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Now Accepting New Projects
                            </span>
                        </div>
                    </div>

                    {/* Majestic Title Headline */}
                    <h1 className={`home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[38px] sm:text-[54px] lg:text-[72px] leading-[1.05] font-bold text-white tracking-tight ${anton.className}`}>
                        Make your <span className="relative inline-block px-1">
                            {/* Backdrop highlight block */}
                            <span className="absolute inset-0 bg-[#FFA369]/10 rounded-2xl -rotate-1 blur-[2px]" />
                            <span className={`text-transparent bg-clip-text bg-linear-to-r from-[#FFA369] to-[#FF8A3D] relative z-10 font-normal ${architectsDaughter.className}`}>
                                website
                            </span>
                        </span>
                        <br />
                        secure and scalable.
                    </h1>

                    {/* Smooth, descriptive supporting text */}
                    <p className={`home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-8 text-[17px] sm:text-[20px] leading-relaxed text-gray-300/90 max-w-155 ${geologica.className}`}>
                        We architect premium, bespoke digital products that combine beautiful typography, reliable database functionality, and industry-leading performance to elevate your agency or enterprise.
                    </p>

                    {/* Premium Call-to-Actions */}
                    <div className="home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-10">
                        {/* Explore CTA */}
                        <a
                            href="#services"
                            className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-linear-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-500/10 hover:shadow-orange-400/25 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center gap-2 cursor-pointer"
                        >
                            <span className="relative z-10">Let&apos;s Explore</span>
                            <div className="absolute inset-0 bg-linear-to-r from-[#FFB78A] to-[#FFA369] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        {/* Contact CTA */}
                        <a
                            href="#contact"
                            className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                        >
                            <span>Contact Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l3.293-3.293m0 0l3.293 3.293m-3.293-3.293v8.018m-6.62-1.285a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243zm13.486 0a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Interactive Card / Illustration */}
                <div className="w-160 max-w-[420px] sm:max-w-[560px] lg:max-w-none mx-auto lg:mx-0">
                    {/* Backside ambient glow board */}

                    <Image
                        src={homes}
                        alt="Scalix Digital Illustration"
                        className="w-full h-full object-contain p-0 sm:p-4 lg:p-8 select-none transition-transform duration-[1.5s] ease-out group-hover:scale-105 mix-blend-multiply"
                        priority
                    />
                </div>
            </div>

            {/* Bottom Key Metrics Row */}
            <div className="relative z-10 w-full max-w-7xl mx-auto mt-14 lg:mt-24 border-t border-white/10 pt-8 sm:pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
                    {keyMetrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className="home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center sm:justify-start"
                        >
                            <span className={`text-[32px] font-bold ${anton.className} ${metric.color}`}>
                                {metric.value}
                            </span>
                            <div className="h-px w-8 bg-white/20 sm:h-8 sm:w-px" />
                            <span className={`text-sm text-gray-400 font-medium tracking-wide ${geologica.className}`}>
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom smooth background visual divider fade */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" /> */}

            <style jsx>{`
                .home-animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    )
}

export default Home