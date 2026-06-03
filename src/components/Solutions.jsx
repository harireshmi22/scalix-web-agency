"use client"
import React, { useRef, useEffect } from 'react'
import solutions from "../../public/solutions.png"
import Image from 'next/image'
import { anton, architectsDaughter, geologica } from '@/lib/fonts'

const solutionItems = [
    {
        title: "Performance-Focused Experience",
        description: "We optimize websites for speed, responsiveness, and smooth browsing so users can access your platform quickly on any device.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        color: "#0066ff",
    },
    {
        title: "Complete Digital Support",
        description: "From design and development to hosting, deployment, SEO, and maintenance, we help manage your complete online presence.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
        ),
        color: "#ff6200",
    },
    {
        title: "Business Growth Oriented",
        description: "Every website is built with a clear purpose: to improve your brand image, attract customers, and support your online growth.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
        ),
        color: "#10b981",
    },
];

const Solutions = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("sol-animate-in");
                });
            },
            { threshold: 0.12 }
        );
        const els = sectionRef.current?.querySelectorAll(".sol-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full flex flex-col items-center overflow-hidden mt-16 sm:mt-24 md:mt-30 px-4 sm:px-6"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-80 -right-60 h-[400px] w-[800px] rounded-full bg-[#FFA369] blur-[400px] opacity-40" />
            <div className="absolute -top-60 -left-40 h-[350px] w-[600px] rounded-full bg-[#D6F1FF] blur-[300px] opacity-50" />

            {/* Section Badge */}
            <div className="sol-anim opacity-0 translate-y-6 transition-all duration-700 ease-out">
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 h-12 px-6 sm:px-8">
                    <h2 className="text-xs sm:text-sm font-bold text-gray-500 tracking-widest text-center">WEB SOLUTIONS FOR EVERY SECTOR</h2>
                </div>
            </div>

            {/* Heading */}
            <div className="sol-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 mt-8 sm:mt-10">
                <h2 className={`text-[30px] sm:text-[40px] text-center font-semibold max-w-3xl ${anton.className}`}>
                    Building <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Smarter</span>,{" "}
                    <span className={`text-[#ff6200] ${architectsDaughter.className}`}>Scalable Digital</span> Solutions{" "}
                    <span className={`text-gray-400 ${architectsDaughter.className}`}>for Modern Businesses</span>
                </h2>
            </div>

            {/* Content Row — Image Left, Text Right */}
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-12 sm:mt-20">

                {/* Left — Image */}
                <div className="sol-anim opacity-0 translate-y-6 md:-translate-x-10 transition-all duration-700 ease-out delay-200 w-full md:w-5/12 flex justify-center overflow-hidden">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100 group">
                        <Image
                            src={solutions}
                            alt="Web Solutions"
                            width={480}
                            height={560}
                            sizes="(max-width: 640px) 100vw, 480px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Right — Text + Solution Items */}
                <div className="sol-anim opacity-0 translate-y-6 md:translate-x-10 transition-all duration-700 ease-out delay-300 w-full md:w-7/12">
                    <h3 className={`text-[28px] sm:text-[32px] leading-tight text-gray-900 ${anton.className}`}>
                        Modern <span className={`text-[#ff6200] ${architectsDaughter.className}`}>Web Solutions</span> Designed for{" "}
                        <span className={`text-[#ff6200] ${architectsDaughter.className}`}>Growth</span>
                    </h3>

                    <p className={`text-[15px] leading-relaxed text-gray-500 mt-4 max-w-xl ${geologica.className}`}>
                        We create modern websites and web applications that help businesses grow online with better performance, clean design, secure hosting, and long-term scalability.
                    </p>

                    {/* Solution Items */}
                    <div className="flex flex-col gap-4 mt-8">
                        {solutionItems.map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white/40 backdrop-blur-sm transition-all duration-300 hover:border-gray-200 hover:bg-white/70 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <div
                                    className="shrink-0 h-10 w-10 rounded-lg flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: item.color }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className={`text-[16px] font-semibold text-gray-900 ${anton.className}`}>{item.title}</h4>
                                    <p className={`text-[13px] text-gray-500 mt-1.5 leading-relaxed ${geologica.className}`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
                .sol-animate-in {
                    opacity: 1 !important;
                    transform: translate(0, 0) !important;
                }
            `}</style>
        </section>
    )
}

export default Solutions