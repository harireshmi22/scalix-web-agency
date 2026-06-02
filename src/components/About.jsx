"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import collaborationImg from "../../public/undraw_collaboration_hkrb.png";
import { anton, architectsDaughter, geologica } from "@/lib/fonts"

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("about-animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll(".about-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const coreValues = [
        {
            title: "Collaborative Process",
            desc: "We work as a close extension of your team to ensure every detail matches your business goals.",
            color: "#ff6200",
            iconBg: "bg-orange-50",
            iconBorder: "border-orange-100",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ff6200" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            )
        },
        {
            title: "Driven by Innovation",
            desc: "Using MERN, Next.js, and smart automation to build high-performance products.",
            color: "#3b82f6",
            iconBg: "bg-blue-50",
            iconBorder: "border-blue-100",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#3b82f6" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            )
        },
        {
            title: "Client-Centric Philosophy",
            desc: "Your success is our metric. We build software that drives real engagement and conversion.",
            color: "#a855f7",
            iconBg: "bg-purple-50",
            iconBorder: "border-purple-100",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#a855f7" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="about"
            className="w-full flex flex-col items-center relative overflow-hidden mt-16 sm:mt-24 md:mt-30 px-4 sm:px-6 pb-16 sm:pb-20"
        >
            {/* Background Glows */}
            <div className="absolute -top-24 -left-28 sm:-top-40 sm:-left-60 h-[16rem] w-[18rem] sm:h-[25rem] sm:w-[44rem] rounded-full bg-[#FFA369] blur-[320px] opacity-25" />
            <div className="absolute -bottom-28 -right-20 sm:-bottom-60 sm:-right-40 h-[18rem] w-[20rem] sm:h-[28rem] sm:w-[47rem] rounded-full bg-[#D6F1FF] blur-[350px] opacity-35" />

            {/* Layout Grid */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Side: Illustration */}
                <div className="about-anim opacity-0 -translate-x-8 transition-all duration-700 ease-out lg:col-span-5 flex justify-center">
                    <div className="relative group w-full max-w-[500px] aspect-[1.1] rounded-3xl overflow-hidden bg-white/40 border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-blue-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <Image
                            src={collaborationImg}
                            alt="About Scalix Collaboration"
                            className="w-full h-full object-contain select-none transition-transform duration-700 group-hover:scale-103"
                        />
                    </div>
                </div>

                {/* Right Side: Description */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">

                    {/* Section Badge */}
                    <div className="about-anim opacity-0 translate-y-6 transition-all duration-700 ease-out flex items-center mb-6">
                        <div className="rounded-full px-5 py-2 flex items-center justify-center border border-gray-300 bg-white/50 backdrop-blur-sm">
                            <h2 className={`text-xs font-extrabold text-gray-500 tracking-widest uppercase ${geologica.className}`}>
                                Who We Are
                            </h2>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className={`about-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[30px] sm:text-[45px] leading-tight font-semibold text-gray-900 ${anton.className}`}>
                        We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6200] to-[#ff8a3d]">Scalix</span>, a team built to shape your <span className={`text-[#ff6200] ${architectsDaughter.className}`}>success.</span>
                    </h1>

                    {/* Paragraph */}
                    <p className={`about-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 text-[15px] sm:text-[16px] leading-relaxed text-gray-500 max-w-[650px] ${geologica.className}`}>
                        At Scalix Web Agency, we specialize in bridging the gap between elegant design, robust technology, and business-focused functionality. Our multidisciplinary approach allows us to deliver high-quality, high-speed applications that don&apos;t just sit online—they convert and scale.
                    </p>

                    {/* Core Values Stack */}
                    <div className="mt-10 flex flex-col gap-6">
                        {coreValues.map((value, idx) => (
                            <div
                                key={idx}
                                className={`about-anim opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col sm:flex-row items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white/40 backdrop-blur-sm hover:border-gray-200 hover:bg-white/70 hover:shadow-md transition-all duration-300`}
                                style={{ transitionDelay: `${300 + idx * 100}ms` }}
                            >
                                <div className={`flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center border ${value.iconBorder} ${value.iconBg}`}>
                                    {value.icon}
                                </div>
                                <div className="flex-col">
                                    <h3 className={`text-[16px] font-bold text-gray-800 ${anton.className}`}>
                                        {value.title}
                                    </h3>
                                    <p className={`text-[13.5px] text-gray-500 mt-1 leading-relaxed ${geologica.className}`}>
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .about-animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    );
};

export default About;