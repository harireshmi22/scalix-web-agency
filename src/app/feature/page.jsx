"use client"
import React, { useRef, useEffect, useState } from 'react'
import { anton, architectsDaughter, geologica } from "@/lib/fonts";


/* ──────────────────────────────────────────
   Core Features Data
   ────────────────────────────────────────── */

const coreFeatures = [
    {
        title: "Website & App Hosting",
        description: "We deploy your website or web app on reliable, blazing-fast cloud infrastructure with 99.9% uptime. No more worrying about servers — we handle it all so your site stays live and lightning quick.",
        color: "#ff6200",
        gradient: "from-[#ff6200] to-[#ff8a3d]",
        bgGlow: "bg-[#ff6200]/8",
        number: "01",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        highlights: ["Cloud Deployment", "Auto Scaling", "SSL Certificates", "CDN Integration"],
    },
    {
        title: "Complete Website Management",
        description: "From content updates to domain management, we take full ownership of your digital presence. You focus on running your business — we'll keep your website running perfectly behind the scenes.",
        color: "#0066ff",
        gradient: "from-[#0066ff] to-[#3b82f6]",
        bgGlow: "bg-[#0066ff]/8",
        number: "02",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
        ),
        highlights: ["Content Updates", "Domain Management", "Analytics Setup", "Performance Monitoring"],
    },
    {
        title: "Professional Web Services",
        description: "We offer end-to-end web development, design, and consulting services. Whether it's a fresh build, a redesign, or adding new functionality — our team delivers pixel-perfect, high-performing solutions.",
        color: "#a855f7",
        gradient: "from-[#a855f7] to-[#7c3aed]",
        bgGlow: "bg-[#a855f7]/8",
        number: "03",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        highlights: ["Custom Development", "UI/UX Design", "API Integration", "Database Architecture"],
    },
    {
        title: "Bug Fixing & Debugging",
        description: "Got a broken feature, a layout glitch, or an error you can't figure out? We diagnose and resolve bugs fast — whether it's frontend rendering issues, backend API errors, or database problems.",
        color: "#ef4444",
        gradient: "from-[#ef4444] to-[#dc2626]",
        bgGlow: "bg-[#ef4444]/8",
        number: "04",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135c-.117-1.08-.908-1.929-1.987-2.043A22.312 22.312 0 0012 5.75c-1.74 0-3.443.2-5.068.562-1.079.114-1.87.963-1.987 2.043a23.91 23.91 0 01-1.152 6.135A24.29 24.29 0 0112 12.75zM2.695 18.243a25.86 25.86 0 011.305-7.018M21.305 18.243a25.86 25.86 0 00-1.305-7.018M12 2.25c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 11-3.5 0V4c0-.966.784-1.75 1.75-1.75z" />
            </svg>
        ),
        highlights: ["Quick Turnaround", "Root Cause Analysis", "Cross-Browser Fixes", "Performance Patches"],
    },
    {
        title: "SEO Optimisation",
        description: "We build SEO into every website from the ground up — clean semantic HTML, meta tags, structured data, fast load times, mobile responsiveness, and Core Web Vitals optimization to rank higher on Google.",
        color: "#10b981",
        gradient: "from-[#10b981] to-[#059669]",
        bgGlow: "bg-[#10b981]/8",
        number: "05",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
        highlights: ["On-Page SEO", "Schema Markup", "Core Web Vitals", "Keyword Strategy"],
    },
    {
        title: "Deployment & DevOps",
        description: "We handle the entire deployment pipeline — CI/CD setup, staging environments, production releases, and rollback strategies. Your website goes live smoothly every single time.",
        color: "#f59e0b",
        gradient: "from-[#f59e0b] to-[#d97706]",
        bgGlow: "bg-[#f59e0b]/8",
        number: "06",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        highlights: ["CI/CD Pipeline", "Staging Environments", "Zero-Downtime Deploy", "Rollback Support"],
    },
];

/* ──────────────────────────────────────────
   Process Steps
   ────────────────────────────────────────── */

const processSteps = [
    {
        step: "01",
        title: "Share Your Requirements",
        description: "Tell us what you need — a new website, a fix, hosting migration, or SEO improvements. We listen carefully.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "We Plan & Execute",
        description: "Our team creates a roadmap, sets milestones, and begins working on your project with regular progress updates.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Deploy & Go Live",
        description: "We deploy to production, configure your domain, set up SSL, and ensure everything runs flawlessly.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
    },
    {
        step: "04",
        title: "Ongoing Support",
        description: "After launch, we provide continued maintenance, bug fixes, updates, and optimisations to keep your site performing at its best.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
];

/* ──────────────────────────────────────────
   Stats
   ────────────────────────────────────────── */

const stats = [
    { value: "99.9%", label: "Uptime Guarantee", color: "text-[#ff6200]" },
    { value: "50+", label: "Projects Deployed", color: "text-[#0066ff]" },
    { value: "< 2hr", label: "Avg Bug Fix Time", color: "text-[#ef4444]" },
    { value: "100%", label: "SEO Optimised Sites", color: "text-[#10b981]" },
];

/* ──────────────────────────────────────────
   Component
   ────────────────────────────────────────── */

export default function FeaturePage() {
    const sectionRef = useRef(null);
    const [activeFeature, setActiveFeature] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("feat-animate-in");
                    }
                });
            },
            { threshold: 0.08 }
        );
        const els = sectionRef.current?.querySelectorAll(".feat-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main ref={sectionRef} className="relative min-h-screen overflow-hidden">

            {/* ═══════════════════════════════════════
                HERO SECTION
               ═══════════════════════════════════════ */}
            <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center bg-[#0d0d59]">
                {/* Ambient Orbs */}
                <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#FFA369] blur-[260px] opacity-20 pointer-events-none" />
                <div className="absolute -top-20 -right-32 h-80 w-80 rounded-full bg-[#D6F1FF] blur-[240px] opacity-15 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#8b5cf6] blur-[300px] opacity-10 pointer-events-none" />

                {/* Badge */}
                <div className="feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-[#FFA369] animate-ping" />
                    <span className={`text-[#FFA369] text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                        Everything Your Website Needs
                    </span>
                </div>

                {/* Heading */}
                <h1 className={`feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[34px] sm:text-[50px] lg:text-[66px] leading-[1.05] font-bold text-white tracking-tight ${anton.className}`}>
                    We{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#ff6200]/10 rounded-2xl -rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FFA369] to-[#ff6200] relative z-10 font-normal ${architectsDaughter.className}`}>
                            build, deploy
                        </span>
                    </span>
                    {" "}&{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#0066ff]/10 rounded-2xl rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#0066ff] relative z-10 font-normal ${architectsDaughter.className}`}>
                            manage
                        </span>
                    </span>
                    <br className="hidden sm:block" />
                    your entire web presence.
                </h1>

                {/* Subtext */}
                <p className={`feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-300/90 max-w-2xl ${geologica.className}`}>
                    From hosting and deployment to bug fixing, SEO, and ongoing maintenance — Scalix handles every aspect of your website or web application so you can focus on growing your business.
                </p>

                {/* CTA Buttons */}
                <div className="feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 flex flex-col sm:flex-row gap-4 mt-10">
                    <a
                        href="/contact"
                        className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                        id="feature-cta-contact"
                    >
                        <span>Get Started Today</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                    <a
                        href="/pricing"
                        className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                        id="feature-cta-pricing"
                    >
                        <span>View Pricing</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                STATS BAR
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-24 bg-[#0d0d59]">
                <div className="max-w-5xl mx-auto">
                    <div className="feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-2" id={`stat-${idx}`}>
                                    <span className={`text-[32px] sm:text-[40px] font-bold ${anton.className} ${stat.color}`}>
                                        {stat.value}
                                    </span>
                                    <span className={`text-sm text-gray-400 font-medium tracking-wide ${geologica.className}`}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                CORE FEATURES GRID
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-20 sm:pb-28">
                {/* Background glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#0066ff] blur-[350px] opacity-8 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-300 bg-white/50 backdrop-blur-sm mb-6">
                            <span className={`text-gray-900 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Our Core Features
                            </span>
                        </div>
                        <h2 className={`feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-black leading-tight ${anton.className}`}>
                            Everything You Need,{" "}
                            <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal`}>Under One Roof</span>
                        </h2>
                        <p className={`feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-black text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            We don&apos;t just build websites. We host them, manage them, fix them, optimise them, and deploy them — providing a complete, worry-free digital experience.
                        </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {coreFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="feat-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-md p-6 sm:p-7 hover:border-gray-300 hover:bg-white/80 hover:shadow-xl hover:shadow-gray-200/40 cursor-default"
                                style={{ transitionDelay: `${150 + idx * 80}ms` }}
                                onMouseEnter={() => setActiveFeature(idx)}
                                onMouseLeave={() => setActiveFeature(null)}
                                id={`feature-card-${idx}`}
                            >
                                {/* Top gradient line */}
                                <div className={`absolute top-0 left-5 right-5 h-[2px] bg-linear-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Hover glow */}
                                <div className={`absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full ${feature.bgGlow} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                {/* Number badge */}
                                <div className="absolute top-5 right-5">
                                    <span className={`text-xs font-bold tracking-widest opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${geologica.className}`} style={{ color: feature.color }}>
                                        {feature.number}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mb-5"
                                        style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)` }}
                                    >
                                        {feature.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-gray-900 text-[18px] sm:text-[20px] font-bold mb-3 ${anton.className}`}>
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-gray-900 text-[13.5px] leading-relaxed mb-5 ${geologica.className}`}>
                                        {feature.description}
                                    </p>

                                    {/* Highlight tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {feature.highlights.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-300 ${geologica.className}`}
                                                style={{
                                                    color: activeFeature === idx ? feature.color : '#6b7280',
                                                    borderColor: activeFeature === idx ? `${feature.color}40` : '#e5e7eb',
                                                    backgroundColor: activeFeature === idx ? `${feature.color}10` : '#f9fafb',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                HOW IT WORKS (PROCESS)
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-20 sm:pb-28">
                {/* Background glow */}
                <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-[#FFA369] blur-[300px] opacity-10 pointer-events-none" />

                <div className="max-w-5xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-300 bg-white/50 backdrop-blur-sm mb-6">
                            <span className={`text-gray-900 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                How It Works
                            </span>
                        </div>

                        <h2 className={`feat-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            From Idea to{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Launch</span>{" "}
                            in 4 Simple Steps
                        </h2>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {processSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="feat-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative"
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                                id={`process-step-${idx}`}
                            >
                                {/* Connector line (hidden on last item and on mobile single column) */}
                                {idx < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-gray-300 to-gray-100" />
                                )}

                                <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-md p-6 hover:border-gray-300 hover:bg-white/80 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                    {/* Step number + icon row */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6200] to-[#ff8a3d] flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            {step.icon}
                                        </div>
                                        <span className={`text-[28px] font-bold text-gray-500 group-hover:text-[#FFA369]/30 transition-colors duration-300 ${anton.className}`}>
                                            {step.step}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-black text-[17px] font-bold mb-2 ${anton.className}`}>
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-gray-800 text-[13px] leading-relaxed flex-1 ${geologica.className}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                BOTTOM CTA BANNER
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-20 sm:pb-28">
                <div className="feat-anim opacity-0 translate-y-8 transition-all duration-[800ms] ease-out max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E1E90] to-[#111162] border border-white/10 shadow-2xl px-6 sm:px-10 py-12 sm:py-16 flex flex-col items-center text-center">
                    {/* Decorative glows */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff6200]/20 blur-[80px]" />
                    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#D6F1FF]/10 blur-[80px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Badge */}
                    <div className="relative z-10 rounded-full px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                        <span className={`text-[#FFA369] text-xs uppercase tracking-widest font-extrabold ${geologica.className}`}>
                            Ready to get started?
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className={`relative z-10 text-[24px] sm:text-[36px] md:text-[48px] font-bold text-white max-w-3xl leading-tight tracking-wide ${anton.className}`}>
                        Let us handle your website.
                        <br className="hidden sm:block" />
                        You handle your{" "}
                        <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal tracking-wider`}>business.</span>
                    </h2>

                    {/* Subtext */}
                    <p className={`relative z-10 text-gray-300 max-w-xl mt-5 text-[15px] sm:text-[17px] leading-relaxed ${geologica.className}`}>
                        Whether you need hosting, deployment, bug fixes, SEO, or complete website management — Scalix has you covered from start to finish.
                    </p>

                    {/* CTA Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto">
                        <a
                            href="/contact"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            id="feature-bottom-cta-contact"
                        >
                            <span>Start Your Project</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                        <a
                            href="/service"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            id="feature-bottom-cta-services"
                        >
                            <span>Explore Services</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Scroll-reveal animation styles ── */}
            <style jsx>{`
                .feat-animate-in {
                    opacity: 1 !important;
                    transform: none !important;
                    translate: none !important;
                }
            `}</style>
        </main >
    );
}
