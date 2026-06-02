"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { anton, architectsDaughter, geologica } from "@/lib/fonts"

/* ──────────────────────────────────────────
   Team Members
   ────────────────────────────────────────── */

const teamMembers = [
    {
        name: "Hari Reshmi",
        role: "Founder & Project Coordinator",
        initials: "HR",
        bio: "Manages the complete project lifecycle — from initial client discovery and scope definition to task delegation, milestone tracking, and final delivery. Ensures every project ships on time with clear communication at every step.",
        skills: ["Project Management", "Client Relations", "Strategic Planning", "Quality Assurance"],
        accentFrom: "#ff6200",
        accentTo: "#ff8a3d",
    },
    {
        name: "Kanishq Gautam",
        role: "Lead MERN Developer",
        initials: "KG",
        bio: "Designs and engineers responsive, high-performance websites and web applications using modern MERN stack technologies. Focuses on clean architecture, reusable components, and pixel-perfect UI implementation.",
        skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        accentFrom: "#0066ff",
        accentTo: "#38bdf8",
    },
    {
        name: "Srestha Mishra",
        role: "AI / ML Developer",
        initials: "SM",
        bio: "Builds intelligent automation features, smart recommendation engines, and data-driven tools. Integrates AI/ML capabilities into web platforms to give clients a competitive edge through technology.",
        skills: ["Python", "Machine Learning", "AI Integration", "Data Science", "Automation"],
        accentFrom: "#a855f7",
        accentTo: "#c084fc",
    },
    {
        name: "Kaushtubh Singh",
        role: "JavaScript Developer",
        initials: "KS",
        bio: "Handles complex JavaScript logic, interactive UI components, animations, and frontend performance optimization. Ensures every interaction feels smooth, fast, and intentional across all browsers.",
        skills: ["JavaScript", "TypeScript", "Performance Tuning", "Interactive UI", "Testing"],
        accentFrom: "#10b981",
        accentTo: "#34d399",
    },
]

/* ──────────────────────────────────────────
   Services Overview
   ────────────────────────────────────────── */

const services = [
    {
        title: "Custom Website Development",
        description: "Responsive, fast, and SEO-optimized websites tailored to your brand identity and business goals.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
        color: "#ff6200",
    },
    {
        title: "Web Application Development",
        description: "Scalable, feature-rich web applications built on modern tech stacks with robust backend architectures.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
            </svg>
        ),
        color: "#0066ff",
    },
    {
        title: "UI/UX Design",
        description: "Beautiful, user-centered interfaces designed to engage visitors and drive conversions on every device.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
        ),
        color: "#a855f7",
    },
    {
        title: "Hosting & Deployment",
        description: "Reliable cloud hosting, domain setup, SSL certificates, and zero-downtime deployments for your projects.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 .75-7.425A4.502 4.502 0 0 0 14.25 6a4.5 4.5 0 0 0-4.06 2.56A4.5 4.5 0 0 0 2.25 15Z" />
            </svg>
        ),
        color: "#10b981",
    },
    {
        title: "SEO Optimization",
        description: "On-page SEO, meta optimization, Core Web Vitals tuning, and structured data to rank higher on Google.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        ),
        color: "#f59e0b",
    },
    {
        title: "Maintenance & Support",
        description: "Ongoing updates, bug fixes, performance monitoring, and feature enhancements to keep your site running perfectly.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
            </svg>
        ),
        color: "#ef4444",
    },
]

/* ──────────────────────────────────────────
   How We Help Clients
   ────────────────────────────────────────── */

const clientBenefits = [
    {
        step: "01",
        title: "We Listen First",
        description: "Every project starts with a deep understanding of your goals, audience, and brand. We ask the right questions so we build exactly what you need — not just what looks good.",
    },
    {
        step: "02",
        title: "Transparent Process",
        description: "You get regular updates, milestone previews, and direct access to our team. No guesswork, no surprises — just clear communication from start to finish.",
    },
    {
        step: "03",
        title: "We Build to Scale",
        description: "Our code is clean, modular, and built for growth. Whether you need 5 pages today or 50 features tomorrow, your platform is ready to evolve with your business.",
    },
    {
        step: "04",
        title: "Post-Launch Support",
        description: "Our relationship doesn't end at launch. We provide ongoing maintenance, performance tuning, and feature updates so your site stays ahead of the competition.",
    },
]

/* ──────────────────────────────────────────
   Core Values
   ────────────────────────────────────────── */

const values = [
    {
        title: "Quality Over Quantity",
        description: "We don't chase volume. Every project gets our full attention, care, and best engineering practices.",
        icon: "✦",
        color: "#ff6200",
    },
    {
        title: "Honesty & Transparency",
        description: "We give realistic timelines, honest feedback, and fair pricing. No inflated estimates, no hidden costs.",
        icon: "◈",
        color: "#0066ff",
    },
    {
        title: "Client-First Mindset",
        description: "Your success is our success. We measure our work by the impact it creates for your business.",
        icon: "◉",
        color: "#a855f7",
    },
    {
        title: "Continuous Improvement",
        description: "We stay current with the latest technologies, frameworks, and design trends to give you the best possible product.",
        icon: "⬡",
        color: "#10b981",
    },
]

/* ──────────────────────────────────────────
   Stats
   ────────────────────────────────────────── */

const stats = [
    { value: "50+", label: "Projects Delivered", color: "text-[#ff6200]" },
    { value: "30+", label: "Happy Clients", color: "text-[#0066ff]" },
    { value: "99.9%", label: "Uptime Guaranteed", color: "text-[#10b981]" },
    { value: "4", label: "Skilled Team Members", color: "text-[#a855f7]" },
]

/* ──────────────────────────────────────────
   Component
   ────────────────────────────────────────── */

export default function AboutPage() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("about-page-in")
                })
            },
            { threshold: 0.08 }
        )
        const els = sectionRef.current?.querySelectorAll(".ap-anim")
        els?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <main ref={sectionRef} className="relative min-h-screen overflow-hidden">

            {/* ═══════════════════════════════════════
                HERO SECTION
               ═══════════════════════════════════════ */}
            <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center bg-[#0d0d59]">
                {/* Ambient orbs */}
                <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#FFA369] blur-[260px] opacity-20 pointer-events-none" />
                <div className="absolute -top-20 -right-32 h-80 w-80 rounded-full bg-[#D6F1FF] blur-[240px] opacity-15 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#8b5cf6] blur-[300px] opacity-10 pointer-events-none" />

                {/* Badge */}
                <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-[#FFA369] animate-ping" />
                    <span className={`text-[#FFA369] text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                        About Scalix Web Agency
                    </span>
                </div>

                {/* Heading */}
                <h1 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[34px] sm:text-[50px] lg:text-[66px] leading-[1.05] font-bold text-white tracking-tight ${anton.className}`}>
                    We build{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#ff6200]/10 rounded-2xl -rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FFA369] to-[#ff6200] relative z-10 font-normal ${architectsDaughter.className}`}>
                            digital experiences
                        </span>
                    </span>
                    <br className="hidden sm:block" />
                    that drive{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#0066ff]/10 rounded-2xl rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#0066ff] relative z-10 font-normal ${architectsDaughter.className}`}>
                            real growth.
                        </span>
                    </span>
                </h1>

                {/* Subtext */}
                <p className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-300/90 max-w-2xl ${geologica.className}`}>
                    Scalix is a focused, passionate web agency that partners with businesses and creators to build premium websites, powerful web applications, and lasting digital identities — all with a commitment to quality, transparency, and results.
                </p>

                {/* Stats bar */}
                <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 mt-14 w-full max-w-4xl">
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-2">
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
                OUR STORY
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#FFA369] blur-[350px] opacity-10 pointer-events-none" />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image */}
                    <div className="ap-anim opacity-0 -translate-x-8 transition-all duration-700 ease-out flex justify-center">
                        <div className="relative group w-full max-w-[480px] rounded-3xl overflow-hidden border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-blue-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                            <Image
                                src="/undraw_collaboration_hkrb.png"
                                alt="Scalix team collaboration and project planning"
                                width={480}
                                height={400}
                                className="object-contain w-full transition-transform duration-500 group-hover:scale-105 p-6"
                            />
                        </div>
                    </div>

                    {/* Right: Story */}
                    <div className="flex flex-col">
                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out">
                            <div className="rounded-full px-5 py-2 inline-flex items-center justify-center border border-gray-300 bg-white/50 backdrop-blur-sm mb-5">
                                <span className={`text-xs font-bold text-gray-500 tracking-widest uppercase ${geologica.className}`}>Our Story</span>
                            </div>
                        </div>

                        <h2 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[36px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Why We Started{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>Scalix</span>
                        </h2>

                        <div className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 space-y-4 text-[15px] leading-relaxed text-gray-600 ${geologica.className}`}>
                            <p>
                                Scalix was born from a simple frustration: too many businesses were paying too much for mediocre websites. We saw small businesses and startups struggling with overpriced agencies that delivered template-based sites with no real strategy behind them.
                            </p>
                            <p>
                                We decided to do things differently. As a tight-knit team of developers, designers, and strategists, we set out to build a web agency that prioritizes <strong className="text-gray-900">quality, affordability, and genuine partnership</strong> with every client.
                            </p>
                            <p>
                                Today, Scalix serves businesses across India and beyond — delivering custom-built, high-performance digital products that help our clients stand out, grow faster, and compete with confidence in the digital world.
                            </p>
                        </div>

                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full border border-[#FFA369]/20 bg-[#FFA369]/10 px-4 py-2 text-sm text-[#ff6200] font-medium">Founded with Purpose</span>
                            <span className="rounded-full border border-[#0066ff]/20 bg-[#0066ff]/10 px-4 py-2 text-sm text-[#0066ff] font-medium">Client-First Approach</span>
                            <span className="rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-4 py-2 text-sm text-[#a855f7] font-medium">Modern Tech Stack</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                TEAM SECTION
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-gradient-to-b from-gray-50/80 to-white">
                <div className="absolute -top-40 -right-40 h-80 w-[600px] rounded-full bg-[#D6F1FF] blur-[250px] opacity-40 pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 h-80 w-[600px] rounded-full bg-[#FFA369] blur-[300px] opacity-20 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-300 mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Meet the Team
                            </span>
                        </div>
                        <h2 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            The People Behind{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>Scalix</span>{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Agency</span>
                        </h2>
                        <p className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-500 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            A small team that works big. Each member brings deep expertise in their domain, and together we deliver complete digital solutions from concept to launch.
                        </p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={member.name}
                                className="ap-anim opacity-0 translate-y-10 transition-all duration-700 ease-out group relative flex flex-col rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-7 sm:p-8 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 hover:border-gray-300"
                                style={{ transitionDelay: `${150 + idx * 100}ms` }}
                            >
                                {/* Top row: avatar + name/role */}
                                <div className="flex items-center gap-5">
                                    <div
                                        className="flex-shrink-0 h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
                                        style={{ background: `linear-gradient(135deg, ${member.accentFrom}, ${member.accentTo})` }}
                                    >
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-semibold text-gray-900 ${anton.className}`}>
                                            {member.name}
                                        </h3>
                                        <p className={`text-sm mt-1 font-medium ${geologica.className}`} style={{ color: member.accentFrom }}>
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className={`text-[14px] leading-relaxed text-gray-500 mt-5 ${geologica.className}`}>
                                    {member.bio}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {member.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200"
                                            style={{
                                                color: member.accentFrom,
                                                borderColor: `${member.accentFrom}30`,
                                                backgroundColor: `${member.accentFrom}08`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-2/3"
                                    style={{ background: `linear-gradient(90deg, ${member.accentFrom}, ${member.accentTo})` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                WHAT WE OFFER (Services)
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#0066ff] blur-[350px] opacity-[0.06] pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-300 mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                What We Offer
                            </span>
                        </div>
                        <h2 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            End-to-End{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>Digital Services</span>{" "}
                            for Your Business
                        </h2>
                        <p className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-500 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            From design to development to deployment — we handle every aspect of your web presence so you can focus on growing your business.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {services.map((service, idx) => (
                            <div
                                key={service.title}
                                className="ap-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-7 hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-1 hover:border-gray-300"
                                style={{ transitionDelay: `${150 + idx * 80}ms` }}
                            >
                                {/* Icon */}
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                                >
                                    {service.icon}
                                </div>

                                <h3 className={`text-lg font-semibold text-gray-900 ${anton.className}`}>
                                    {service.title}
                                </h3>

                                <p className={`text-[14px] leading-relaxed text-gray-500 ${geologica.className}`}>
                                    {service.description}
                                </p>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-1/2" style={{ background: service.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                HOW WE HELP CLIENTS
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-[#0d0d59]">
                {/* Ambient */}
                <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#FFA369] blur-[260px] opacity-15 pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#D6F1FF] blur-[240px] opacity-10 pointer-events-none" />

                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <span className={`text-[#FFA369] text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Our Approach
                            </span>
                        </div>
                        <h2 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight ${anton.className}`}>
                            How We Help You{" "}
                            <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal`}>Succeed</span>
                        </h2>
                        <p className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-300/80 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            We don&apos;t just write code — we partner with you at every stage to ensure your project drives real business results.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {clientBenefits.map((benefit, idx) => (
                            <div
                                key={benefit.step}
                                className="ap-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-7 hover:border-white/20 hover:bg-white/8"
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                            >
                                {/* Step badge + title */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6200] to-[#ff8a3d] flex items-center justify-center text-black font-bold text-sm shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        {benefit.step}
                                    </div>
                                    <h3 className={`text-white text-[17px] font-bold ${anton.className}`}>
                                        {benefit.title}
                                    </h3>
                                </div>

                                <p className={`text-gray-400 text-[13.5px] leading-relaxed ${geologica.className}`}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                OUR VALUES
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-[#FFA369] blur-[300px] opacity-10 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-300 mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                What We Stand For
                            </span>
                        </div>
                        <h2 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Our{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Core Values</span>{" "}
                            Drive Everything We Do
                        </h2>
                    </div>

                    {/* Values grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {values.map((value, idx) => (
                            <div
                                key={value.title}
                                className="ap-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-6 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 text-center"
                                style={{ transitionDelay: `${200 + idx * 80}ms` }}
                            >
                                {/* Icon */}
                                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125" style={{ color: value.color }}>
                                    {value.icon}
                                </div>

                                <h3 className={`text-[16px] font-bold text-gray-900 mb-2 ${anton.className}`}>
                                    {value.title}
                                </h3>

                                <p className={`text-[13px] leading-relaxed text-gray-500 ${geologica.className}`}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                WHAT MAKES US DIFFERENT
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-gradient-to-b from-gray-50/80 to-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Text */}
                    <div>
                        <div className="ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out">
                            <div className="rounded-full px-5 py-2 inline-flex items-center justify-center border border-gray-300 bg-white/50 backdrop-blur-sm mb-5">
                                <span className={`text-xs font-bold text-gray-500 tracking-widest uppercase ${geologica.className}`}>Why Us</span>
                            </div>
                        </div>

                        <h2 className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[36px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            What Makes{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>Scalix</span>{" "}
                            Different?
                        </h2>

                        <div className={`ap-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 space-y-5 ${geologica.className}`}>
                            {[
                                { label: "No Templates, Ever", desc: "Every website we build is custom-designed from scratch. We don't use pre-made templates or drag-and-drop builders." },
                                { label: "Developer-First Quality", desc: "Clean, well-structured, documented code that's easy to maintain and scale — not spaghetti code that breaks when you breathe on it." },
                                { label: "Affordable for Everyone", desc: "Premium quality doesn't have to come with a premium price tag. We offer competitive pricing without compromising on craftsmanship." },
                                { label: "We Stay After Launch", desc: "Unlike agencies that disappear after delivery, we provide long-term maintenance, support, and continuous improvement." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff6200] to-[#ff8a3d] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-3.5 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-gray-900">{item.label}</h4>
                                        <p className="text-[13.5px] text-gray-500 leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="ap-anim opacity-0 translate-x-8 transition-all duration-700 ease-out delay-300 flex justify-center">
                        <div className="relative group w-full max-w-[480px] rounded-3xl overflow-hidden border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-orange-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                            <Image
                                src="/undraw_goals_dwgr.png"
                                alt="Scalix commitment to quality and client success"
                                width={480}
                                height={400}
                                className="object-contain w-full transition-transform duration-500 group-hover:scale-105 p-6"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                BOTTOM CTA
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                <div className="ap-anim opacity-0 translate-y-8 transition-all duration-[800ms] ease-out max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E1E90] to-[#111162] border border-white/10 shadow-2xl px-6 sm:px-10 py-12 sm:py-16 flex flex-col items-center text-center">
                    {/* Glows */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff6200]/20 blur-[80px]" />
                    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#D6F1FF]/10 blur-[80px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Badge */}
                    <div className="relative z-10 rounded-full px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                        <span className={`text-[#FFA369] text-xs uppercase tracking-widest font-extrabold ${geologica.className}`}>
                            Ready to work together?
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className={`relative z-10 text-[24px] sm:text-[36px] md:text-[48px] font-bold text-white max-w-3xl leading-tight tracking-wide ${anton.className}`}>
                        Let&apos;s turn your vision into a{" "}
                        <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal tracking-wider`}>premium reality.</span>
                    </h2>

                    {/* Subtext */}
                    <p className={`relative z-10 text-gray-300 max-w-xl mt-5 text-[15px] sm:text-[17px] leading-relaxed ${geologica.className}`}>
                        Whether you need a brand-new website, a complete redesign, or ongoing support — we&apos;re here to help you build something exceptional.
                    </p>

                    {/* CTA buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto">
                        <a
                            href="/contact"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                        >
                            <span>Start a Conversation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                        <a
                            href="/service"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                        >
                            <span>Explore Services</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Animation styles */}
            <style jsx>{`
                .about-page-in {
                    opacity: 1 !important;
                    transform: translate(0, 0) !important;
                }
            `}</style>
        </main>
    )
}
