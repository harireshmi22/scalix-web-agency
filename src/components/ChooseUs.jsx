"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image';
import solution from "../../public/solution.png"
import { anton, geologica, architectsDaughter } from '@/lib/fonts';

const reasons = [
    {
        title: "Complete Website Support",
        description: "Our service does not stop after development. We help with hosting, deployment, domain setup, website maintenance, bug fixing, and regular updates.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
            </svg>
        ),
        color: "#ff6200",
        number: "01",
    },
    {
        title: "Performance & SEO Focused",
        description: "We create websites that are fast, optimized, and search-engine friendly. From image optimization and clean code to responsive layouts and basic SEO setup.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        ),
        color: "#0066ff",
        number: "02",
    },
    {
        title: "Tailored Solutions for Your Goals",
        description: "We design solutions based on your goals, brand identity, and target users. Our focus is to create a professional presence that helps your business grow.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
        ),
        color: "#a855f7",
        number: "03",
    },
];

const ChooseUs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("cu-animate-in");
                });
            },
            { threshold: 0.12 }
        );
        const els = sectionRef.current?.querySelectorAll(".cu-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full flex flex-col items-center relative overflow-hidden mt-16 sm:mt-24 md:mt-30 px-4 sm:px-6"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-60 -left-60 h-[400px] w-[700px] rounded-full bg-[#D6F1FF] blur-[350px] opacity-50" />
            <div className="absolute -top-40 -right-40 h-[350px] w-[600px] rounded-full bg-[#FFA369] blur-[300px] opacity-30" />

            {/* Section Badge */}
            <div className="cu-anim opacity-0 translate-y-6 transition-all duration-700 ease-out">
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 w-[200px] h-12">
                    <h2 className="text-sm font-bold text-gray-500 tracking-widest">WHY CHOOSE US</h2>
                </div>
            </div>

            {/* Heading */}
            <div className="cu-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 mt-8 sm:mt-10">
                <h2 className={`text-[30px] sm:text-[36px] text-center font-semibold text-gray-900 max-w-3xl ${anton.className}`}>
                    Why <span className={`text-[#ff6200] ${architectsDaughter.className}`}>Scalix</span> Is the Right Choice for Modern{" "}
                    <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Web Solutions</span>
                </h2>
            </div>

            {/* Content Row — Text Left, Image Right */}
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-12 sm:mt-20">

                {/* Left — Reason Cards */}
                <div className="w-full md:w-7/12">
                    <div className="flex flex-col gap-5">
                        {reasons.map((reason, i) => (
                            <div
                                key={i}
                                className={`cu-anim opacity-0 translate-y-6 md:-translate-x-8 transition-all duration-700 ease-out group flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl border border-gray-100 bg-white/40 backdrop-blur-sm hover:bg-white/70 hover:border-gray-200 hover:shadow-lg hover:-translate-y-0.5`}
                                style={{ transitionDelay: `${200 + i * 120}ms` }}
                            >
                                {/* Number + Icon */}
                                <div className="shrink-0 flex flex-col items-center gap-2">
                                    <div
                                        className="h-12 w-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                        style={{ background: reason.color }}
                                    >
                                        {reason.icon}
                                    </div>
                                    <span className={`text-xs font-bold tracking-widest ${geologica.className}`} style={{ color: reason.color }}>
                                        {reason.number}
                                    </span>
                                </div>

                                {/* Text */}
                                <div>
                                    <h4 className={`text-lg font-semibold text-gray-900 ${anton.className}`}>
                                        {reason.title}
                                    </h4>
                                    <p className={`text-[14px] text-gray-500 mt-2 leading-relaxed ${geologica.className}`}>
                                        {reason.description}
                                    </p>
                                </div>

                                {/* Right arrow on hover */}
                                <div className="hidden sm:block shrink-0 self-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={reason.color} className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Image */}
                <div className="cu-anim opacity-0 translate-y-6 md:translate-x-10 transition-all duration-700 ease-out delay-500 w-full md:w-5/12 flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100 group">
                        <Image
                            src={solution}
                            alt="Why Choose Scalix"
                            width={480}
                            height={560}
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
                .cu-animate-in {
                    opacity: 1 !important;
                    transform: translate(0, 0) !important;
                }
            `}</style>
        </section>
    )
}

export default ChooseUs