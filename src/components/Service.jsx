"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import { Anton } from 'next/font/google';
import { Architects_Daughter } from 'next/font/google';
import { Geologica } from 'next/font/google';
import service2 from "../../public/service2.png"

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

const geologica = Geologica({
    subsets: ["latin"],
    weight: "300",
});

const architectsDaughter = Architects_Daughter({
    subsets: ["latin"],
    weight: "400",
});

const features = [
    {
        label: "Fast Performance",
        color: "#0066ff",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        label: "Responsive Design",
        color: "#a855f7",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
    },
    {
        label: "SEO Optimization",
        color: "#10b981",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        ),
    },
    {
        label: "Modern Tech Stack",
        color: "#f59e0b",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
    },
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
];

const Service = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("svc2-animate-in");
                });
            },
            { threshold: 0.15 }
        );
        const els = sectionRef.current?.querySelectorAll(".svc2-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full flex flex-col items-center relative overflow-hidden mt-30 px-6"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-40 -left-40 h-70 w-[600px] rounded-full bg-[#D6F1FF] blur-[300px] opacity-50" />
            <div className="absolute -top-60 -right-60 h-80 w-[500px] rounded-full bg-[#FFA369] blur-[250px] opacity-30" />

            {/* Content Row — Image Left, Text Right */}
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left — Image */}
                <div className="svc2-anim opacity-0 -translate-x-10 transition-all duration-700 ease-out w-full md:w-1/2 flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100 group">
                        <Image
                            src={service2}
                            alt="Building Scalable Experiences"
                            width={560}
                            height={420}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Right — Text Content */}
                <div className="svc2-anim opacity-0 translate-x-10 transition-all duration-700 ease-out delay-150 w-full md:w-1/2">
                    <h3 className={`text-[40px] leading-tight text-gray-900 ${anton.className}`}>
                        Building <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Scalable</span> Digital Experiences
                    </h3>

                    <p className={`text-[15px] leading-relaxed text-gray-500 mt-6 max-w-xl ${geologica.className}`}>
                        We don't just build websites — we handle the complete digital infrastructure behind your business.
                        From secure hosting and performance optimization to ongoing maintenance, SEO, and scalability,
                        we ensure your platform stays fast, reliable, and ready for growth.
                    </p>

                    {/* Feature Chips */}
                    <div className="grid grid-cols-2 gap-3 mt-8">
                        {features.map((feat) => (
                            <div
                                key={feat.label}
                                className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                style={{ borderColor: `${feat.color}20` }}
                            >
                                <div
                                    className="flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: feat.color }}
                                >
                                    {feat.icon}
                                </div>
                                <span className={`text-[14px] font-semibold text-gray-800 ${geologica.className}`}>
                                    {feat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="flex gap-8 mt-10 pt-8 border-t border-gray-200">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className={`text-3xl font-bold text-gray-900 ${anton.className}`}>{stat.value}</p>
                                <p className={`text-[12px] text-gray-400 mt-1 ${geologica.className}`}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
                .svc2-animate-in {
                    opacity: 1 !important;
                    transform: translate(0, 0) !important;
                }
            `}</style>
        </section>
    )
}

export default Service
