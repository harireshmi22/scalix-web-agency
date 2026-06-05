"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import { anton, architectsDaughter, geologica } from '@/lib/fonts';
import service from "../../public/service.png"

const highlights = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
        ),
        title: "Secure Hosting & Deployment",
        description: "Enterprise-grade hosting with SSL, CDN, and automated deployments.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: "Performance Optimization",
        description: "Fast load times with code splitting, lazy loading, and caching strategies.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
            </svg>
        ),
        title: "Ongoing Maintenance",
        description: "Regular updates, bug fixes, monitoring, and continuous improvements.",
    },
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("svc-animate-in");
                });
            },
            { threshold: 0.15 }
        );
        const els = sectionRef.current?.querySelectorAll(".svc-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="w-full flex flex-col items-center relative overflow-hidden mt-16 sm:mt-24 md:mt-30 px-4 sm:px-6"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-60 -right-40 h-80 w-[600px] rounded-full bg-[#FFA369] blur-[300px] opacity-40" />
            <div className="absolute -top-40 -left-60 h-70 w-[500px] rounded-full bg-[#D6F1FF] blur-[250px] opacity-50" />

            {/* Section Badge */}
            <div className="svc-anim opacity-0 translate-y-6 transition-all duration-700 ease-out">
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 w-[280px] h-12">
                    <span className="text-sm font-bold text-gray-500 tracking-widest">TRUSTED DIGITAL PARTNERS</span>
                </div>
            </div>

            {/* Content Row */}
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-10 sm:mt-16">

                {/* Left — Text Content */}
                <div className="svc-anim opacity-0 translate-y-6 md:-translate-x-10 transition-all duration-700 ease-out delay-100 w-full md:w-1/2">
                    <h2 className={`text-[32px] sm:text-[40px] leading-tight text-gray-900 ${anton.className}`}>
                        Complete <span className={`text-[#C24700] ${architectsDaughter.className}`}>Web Solutions</span> & Management
                    </h2>

                    <p className={`text-[15px] leading-relaxed text-gray-500 mt-6 max-w-xl ${geologica.className}`}>
                        We don&apos;t just build websites — we handle the complete digital infrastructure behind your business.
                        From secure hosting and performance optimization to ongoing maintenance, SEO, and scalability,
                        we ensure your platform stays fast, reliable, and ready for growth.
                    </p>

                    {/* Highlight Items */}
                    <div className="flex flex-col gap-5 mt-8">
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-gray-200 hover:bg-white/50 hover:shadow-sm"
                            >
                                <div className="shrink-0 h-10 w-10 rounded-lg bg-linear-to-br from-[#ff6200] to-[#ff8a3d] text-white flex items-center justify-center shadow-md shadow-orange-200/40 transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className={`text-[16px] font-semibold text-gray-900 ${anton.className}`}>{item.title}</h3>
                                    <p className={`text-[13px] text-gray-500 mt-1 ${geologica.className}`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Image */}
                <div className="svc-anim opacity-0 translate-y-6 md:translate-x-10 transition-all duration-700 ease-out delay-200 w-full md:w-1/2 flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100 group">
                        <Image
                            src={service}
                            alt="Complete Web Solutions"
                            width={560}
                            height={420}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
                .svc-animate-in {
                    opacity: 1 !important;
                    transform: none !important;
                    translate: none !important;
                }
            `}</style>
        </section>
    )
}

export default Services