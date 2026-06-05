"use client"
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { anton, architectsDaughter, geologica } from "@/lib/fonts";

/* ──────────────────────────────────────────
   Pricing Tiers (Website Packages)
   ────────────────────────────────────────── */

const pricingTiers = [
    {
        name: "Starter",
        subtitle: "Perfect for personal brands, portfolios, and small businesses",
        price: "4,999 – 9,999",
        period: "one-time",
        color: "#ff6200",
        gradient: "from-[#ff6200] to-[#ff8a3d]",
        popular: false,
        features: [
            "Responsive Website Design",
            "Up to 5 Pages",
            "Modern UI/UX",
            "Mobile Friendly Layout",
            "Contact Form Integration",
            "Basic SEO Setup",
            "Fast Loading Website",
            "1 Month Free Support",
        ],
        excluded: [],
    },
    {
        name: "Professional",
        subtitle: "Advanced website solutions with backend functionality",
        price: "14,999 – 29,999",
        period: "one-time",
        color: "#0066ff",
        gradient: "from-[#0066ff] to-[#3b82f6]",
        popular: true,
        features: [
            "Full Custom Website",
            "Frontend + Backend Development",
            "Admin Dashboard",
            "API Integration",
            "Database Setup",
            "Login & Authentication System",
            "Premium UI Animations",
            "Performance Optimization",
            "Fully Responsive Design",
            "2 Months Free Support",
        ],
        excluded: [],
    },
    {
        name: "Enterprise",
        subtitle: "Powerful scalable solutions for businesses and advanced projects",
        price: "39,999+",
        period: "one-time",
        color: "#a855f7",
        gradient: "from-[#a855f7] to-[#7c3aed]",
        popular: false,
        features: [
            "Complete Full Stack Web Application",
            "Advanced Backend Architecture",
            "Secure Authentication Systems",
            "API & Database Integration",
            "AI/Automation Features",
            "Premium UI/UX Design",
            "High Performance Optimization",
            "Scalable Infrastructure",
            "Ongoing Maintenance & Support",
            "Custom Features on Demand",
        ],
        excluded: [],
    },
]

/* ──────────────────────────────────────────
   Hosting Packages
   ────────────────────────────────────────── */

const hostingPackages = [
    {
        name: "Basic Hosting",
        price: "2,999",
        period: "/ 3 Months",
        color: "#10b981",
        features: [
            "Secure Website Hosting",
            "Free SSL Certificate",
            "Fast Loading Speed",
            "Weekly Backups",
            "Technical Support",
            "99.9% Uptime",
        ],
    },
    {
        name: "Standard Hosting",
        price: "4,999",
        period: "/ 5 Months",
        color: "#0066ff",
        popular: true,
        features: [
            "Enhanced Website Speed",
            "Priority Technical Support",
            "Monthly Website Optimization",
            "Security Monitoring",
            "Database Support",
            "Better Performance Stability",
        ],
    },
    {
        name: "Premium Hosting",
        price: "9,999",
        period: "/ 12 Months",
        color: "#a855f7",
        features: [
            "High Performance Hosting",
            "Premium Security & Monitoring",
            "Automated Daily Backups",
            "Advanced Speed Optimization",
            "24/7 Priority Support",
            "Scalable Infrastructure",
            "Dedicated Maintenance Support",
        ],
    },
]

/* ──────────────────────────────────────────
   Why Choose Scalix
   ────────────────────────────────────────── */

const whyChooseUs = [
    {
        title: "Experienced Full Stack Developers",
        description: "Our team consists of expert engineers who understand design, databases, security, and scalability.",
        color: "#ff6200"
    },
    {
        title: "Modern & Premium Website Designs",
        description: "Bespoke, aesthetically pleasing designs tailored to your brand identity. No cheap templates.",
        color: "#0066ff"
    },
    {
        title: "Secure Backend Systems",
        description: "Secure user authentication, clean API systems, and structured databases built on modern standards.",
        color: "#a855f7"
    },
    {
        title: "Reliable Hosting Solutions",
        description: "Fast loading speeds, daily or weekly backups, SSL integration, and a 99.9% uptime guarantee.",
        color: "#10b981"
    },
    {
        title: "Fast Delivery & Professional Workflow",
        description: "Agile process with clean communication, progress milestones, and zero-downtime deployment pipelines.",
        color: "#f59e0b"
    },
    {
        title: "Dedicated Technical Support",
        description: "Reliable post-launch support and monthly care to resolve any bugs and keep your site updated.",
        color: "#ef4444"
    }
]

/* ──────────────────────────────────────────
   FAQ Data
   ────────────────────────────────────────── */

const faqs = [
    {
        question: "Can I start with a package and add custom features later?",
        answer: "Yes! All our packages are built with scalable architectures, allowing us to implement custom features, backend APIs, or integrations anytime your business demands.",
    },
    {
        question: "What's included in the Enterprise Website Package?",
        answer: "The Enterprise package covers full-stack web applications, custom databases, AI integrations, scalable architectures, secure authentication, and dedicated ongoing maintenance. We customize it entirely to your unique business flow.",
    },
    {
        question: "How long does website delivery take?",
        answer: "Starter packages typically take 1-2 weeks. Professional and backend-enabled websites take 2-4 weeks. Large full-stack Enterprise applications range from 4-8 weeks depending on the complexity of features.",
    },
    {
        question: "Do you provide hosting support?",
        answer: "Yes! We offer basic, standard, and premium hosting solutions tailored to your traffic needs. We set up SSL certificates, backup protocols, CDN, and guarantee 99.9% uptime.",
    },
    {
        question: "Do I get free support after delivery?",
        answer: "Yes, you get free post-delivery technical support to resolve bugs and glitches. The Starter package includes 1 month, the Professional package includes 2 months, and the Enterprise package features dedicated ongoing support.",
    },
]

/* ──────────────────────────────────────────
   Component
   ────────────────────────────────────────── */

export default function PricingPage() {
    const sectionRef = useRef(null)
    const [openFaq, setOpenFaq] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("price-animate-in")
                    }
                })
            },
            { threshold: 0.06 }
        )
        const els = sectionRef.current?.querySelectorAll(".price-anim")
        els?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    // JSON-LD Structured Data for FAQ
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <main ref={sectionRef} className="relative min-h-screen overflow-hidden">
            {/* FAQ Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* ═══════════════════════════════════════
                HERO SECTION
               ═══════════════════════════════════════ */}
            <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center bg-[#0d0d59]">
                {/* Ambient Orbs */}
                <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#FFA369] blur-[260px] opacity-20 pointer-events-none" />
                <div className="absolute -top-20 -right-32 h-80 w-80 rounded-full bg-[#D6F1FF] blur-[240px] opacity-15 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#8b5cf6] blur-[300px] opacity-10 pointer-events-none" />

                {/* Badge */}
                <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-[#FFA369] animate-ping" />
                    <span className={`text-[#FFA369] text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                        Transparent Pricing
                    </span>
                </div>

                {/* Heading */}
                <h1 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[34px] sm:text-[50px] lg:text-[66px] leading-[1.05] font-bold text-white tracking-tight ${anton.className}`}>
                    Plans that{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#ff6200]/10 rounded-2xl -rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-linear-to-r from-[#FFA369] to-[#ff6200] relative z-10 font-normal ${architectsDaughter.className}`}>
                            scale
                        </span>
                    </span>
                    {" "}with{" "}
                    <br className="hidden sm:block" />
                    your{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#0066ff]/10 rounded-2xl rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-linear-to-r from-[#3b82f6] to-[#0066ff] relative z-10 font-normal ${architectsDaughter.className}`}>
                            business.
                        </span>
                    </span>
                </h1>

                {/* Subtext */}
                <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-300/90 max-w-2xl ${geologica.className}`}>
                    Whether you need a simple website, a backend-integrated custom platform, or an advanced enterprise web application — we have a plan for every stage of your growth. No hidden fees.
                </p>

                {/* Scroll indicator */}
                <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 mt-12 flex flex-col items-center gap-2">
                    <span className={`text-white/40 text-xs tracking-widest uppercase ${geologica.className}`}>Scroll to explore</span>
                    <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
                        <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                MAIN PRICING TIERS
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-[#0d0d59]">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-[#0066ff] blur-[400px] opacity-8 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <span className={`text-white/70 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Choose Your Package
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight ${anton.className}`}>
                            Website{" "}
                            <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal`}>Development</span>
                            {" "}Packages
                        </h2>
                        <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-white/60 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            Pick a website package that matches your scope. Every plan is built from scratch with clean typography, fast performance, and mobile layout layouts.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {pricingTiers.map((tier, idx) => (
                            <div
                                key={idx}
                                className={`price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-3xl border backdrop-blur-md p-7 sm:p-8 flex flex-col ${tier.popular
                                    ? "border-[#0066ff]/40 bg-white/10 shadow-2xl shadow-blue-500/10 lg:scale-105"
                                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                                    } transition-all duration-300`}
                                style={{ transitionDelay: `${150 + idx * 100}ms` }}
                                id={`pricing-tier-${idx}`}
                            >
                                {/* Popular badge */}
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className={`px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-linear-to-r ${tier.gradient} shadow-lg ${geologica.className}`}>
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Top gradient line */}
                                <div className={`absolute top-0 left-6 right-6 h-[2px] bg-linear-to-r ${tier.gradient} rounded-full opacity-60`} />

                                {/* Tier Name */}
                                <div className="mb-6">
                                    <h3 className={`text-[24px] sm:text-[28px] font-bold text-white ${anton.className}`}>
                                        {tier.name}
                                    </h3>
                                    <p className={`text-white/50 text-[13px] mt-1 ${geologica.className}`}>
                                        {tier.subtitle}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="flex items-end gap-2 mb-8">
                                    <span className="text-white/40 text-[22px] font-bold">₹</span>
                                    <span className={`text-[32px] sm:text-[28px] font-bold leading-none ${anton.className}`} style={{ color: tier.color }}>
                                        {tier.price}
                                    </span>
                                    <span className={`text-white/40 text-[14px] mb-2 ${geologica.className}`}>
                                        {tier.period}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-white/10 mb-6" />

                                {/* Features */}
                                <ul className="flex-1 space-y-3 mb-8">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={tier.color} className="w-5 h-5 shrink-0 mt-0.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className={`text-white/80 text-[14px] ${geologica.className}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/contact"
                                    className={`w-full text-center py-4 rounded-2xl text-[15px] font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${tier.popular
                                        ? `text-white bg-linear-to-r ${tier.gradient} shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95`
                                        : "text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 active:scale-95"
                                        }`}
                                    id={`pricing-cta-${idx}`}
                                >
                                    <span>Get Started</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                WHY CHOOSE SCALIX?
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-[#f9fafb]">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#0066ff] blur-[350px] opacity-[0.05] pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-200 bg-white/85 backdrop-blur-md mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Why Scalix
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Built for{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>Growth,</span>
                            {" "}Designed for{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Scale</span>
                        </h2>
                    </div>

                    {/* Why Choose Us Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, idx) => (
                            <div
                                key={idx}
                                className="price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-7 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                style={{ transitionDelay: `${150 + idx * 80}ms` }}
                            >
                                <div className="absolute top-0 left-5 right-5 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: item.color }} />

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: item.color }} />
                                    <h3 className={`text-gray-900 text-[18px] font-bold ${anton.className}`}>
                                        {item.title}
                                    </h3>
                                </div>
                                <p className={`text-gray-500 text-[13.5px] leading-relaxed ${geologica.className}`}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                HOSTING PACKAGES
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-white">
                {/* Background glow */}
                <div className="absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full bg-[#0066ff] blur-[350px] opacity-8 pointer-events-none" />

                <div className="max-w-5xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-200 bg-white/60 backdrop-blur-md mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Secure Hosting Solutions
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Website{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Hosting</span>
                            {" "}Packages
                        </h2>
                        <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-500 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            Reliable and secure hosting solutions by Scalix to keep your website running smoothly with maximum performance and uptime.
                        </p>
                    </div>

                    {/* Hosting Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {hostingPackages.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-3xl border backdrop-blur-md p-7 sm:p-8 flex flex-col ${plan.popular
                                    ? "border-[#0066ff]/30 bg-linear-to-b from-[#0066ff]/5 to-transparent shadow-xl shadow-blue-100/30 lg:scale-105"
                                    : "border-gray-200 bg-white/60 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/30"
                                    } transition-all duration-300`}
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                                id={`hosting-package-${idx}`}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-linear-to-r from-[#0066ff] to-[#3b82f6] shadow-lg ${geologica.className}`}>
                                            Recommended
                                        </span>
                                    </div>
                                )}

                                {/* Top line */}
                                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, ${plan.color}, ${plan.color}66)` }} />

                                {/* Plan Name */}
                                <h3 className={`text-[22px] font-bold text-gray-900 mb-1 ${anton.className}`}>
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-gray-400 text-[18px] font-bold">₹</span>
                                    <span className={`text-[44px] font-bold leading-none ${anton.className}`} style={{ color: plan.color }}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-gray-400 text-[14px] mb-2 ${geologica.className}`}>
                                        {plan.period}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gray-100 mb-6" />

                                {/* Features */}
                                <ul className="flex-1 space-y-3 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={plan.color} className="w-4.5 h-4.5 shrink-0 mt-0.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className={`text-gray-600 text-[13.5px] ${geologica.className}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="/contact"
                                    className={`w-full text-center py-3.5 rounded-2xl text-[14px] font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${plan.popular
                                        ? "text-white bg-linear-to-r from-[#0066ff] to-[#3b82f6] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
                                        : "text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                                        }`}
                                >
                                    <span>Choose Plan</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                FULL PROJECT MANAGEMENT BANNER
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 bg-gray-50">
                <div className="price-anim opacity-0 translate-y-8 transition-all duration-[800ms] ease-out max-w-6xl mx-auto relative rounded-3xl overflow-hidden bg-linear-to-br from-[#1E1E90] to-[#111162] border border-white/10 shadow-2xl">
                    {/* Decorative glows */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff6200]/20 blur-[80px]" />
                    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#D6F1FF]/10 blur-[80px]" />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#FFA369]/60 to-transparent" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-10 py-12 sm:py-16">
                        {/* Left content */}
                        <div>
                            <div className="rounded-full px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-6 w-fit">
                                <span className={`text-[#FFA369] text-xs uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                    Full Project Handling
                                </span>
                            </div>

                            <h2 className={`text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight tracking-wide ${anton.className}`}>
                                Let us handle{" "}
                                <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal tracking-wider`}>
                                    everything.
                                </span>
                            </h2>

                            <p className={`text-gray-300 max-w-xl mt-5 text-[15px] sm:text-[17px] leading-relaxed ${geologica.className}`}>
                                Don&apos;t want to worry about any of it? Our full project management service means we own every aspect of your digital project — from planning and design to development, deployment, and ongoing hosting management. One team. One point of contact. Zero stress.
                            </p>

                            {/* Key highlights */}
                            <div className="grid grid-cols-2 gap-3 mt-8">
                                {[
                                    "Dedicated Project Coordinator",
                                    "End-to-End Development",
                                    "Hosting & Deployment",
                                    "Ongoing Maintenance",
                                    "SEO & Performance",
                                    "Priority Technical Support",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#FFA369" className="w-4 h-4 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className={`text-white/70 text-[13px] ${geologica.className}`}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - pricing card */}
                        <div className="flex items-center justify-center">
                            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 sm:p-10 w-full max-w-sm text-center">
                                <p className={`text-white/50 text-[13px] uppercase tracking-widest mb-3 ${geologica.className}`}>Starting from</p>
                                <div className="flex items-end justify-center gap-2 mb-2">
                                    <span className="text-white/40 text-[24px] font-bold">₹</span>
                                    <span className={`text-[64px] font-bold text-[#FFA369] leading-none ${anton.className}`}>39,999</span>
                                    <span className="text-white/40 text-[24px] font-bold mb-2">+</span>
                                </div>
                                <p className={`text-white/40 text-[14px] mb-2 ${geologica.className}`}>one-time development</p>
                                <p className={`text-white/30 text-[13px] mb-8 ${geologica.className}`}>+ hosting from ₹2,999 / 3 Mo</p>

                                <Link
                                    href="/contact"
                                    className="group w-full justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-linear-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                                    id="pricing-full-project-cta"
                                >
                                    <span>Discuss Your Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>

                                <p className={`text-white/30 text-[12px] mt-4 ${geologica.className}`}>
                                    Free consultation · No obligation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                FAQ SECTION
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-[#f9fafb]">
                <div className="max-w-3xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-200 bg-white/80 backdrop-blur-md mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Common Questions
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Frequently{" "}
                            <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal`}>Asked</span>
                            {" "}Questions
                        </h2>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
                                style={{ transitionDelay: `${100 + idx * 60}ms` }}
                                id={`faq-item-${idx}`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                                >
                                    <span className={`text-[16px] font-bold text-gray-900 pr-4 ${anton.className}`}>
                                        {faq.question}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openFaq === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className={`px-6 pb-5 text-[14px] text-gray-500 leading-relaxed ${geologica.className}`}>
                                        {faq.answer}
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
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                <div className="price-anim opacity-0 translate-y-8 transition-all duration-[800ms] ease-out max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E1E90] to-[#111162] border border-white/10 shadow-2xl px-6 sm:px-10 py-12 sm:py-16 flex flex-col items-center text-center">
                    {/* Decorative glows */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff6200]/20 blur-[80px]" />
                    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#D6F1FF]/10 blur-[80px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top, var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Badge */}
                    <div className="relative z-10 rounded-full px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                        <span className={`text-[#FFA369] text-xs uppercase tracking-widest font-extrabold ${geologica.className}`}>
                            Not sure which plan?
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className={`relative z-10 text-[24px] sm:text-[36px] md:text-[48px] font-bold text-white max-w-3xl leading-tight tracking-wide ${anton.className}`}>
                        Let&apos;s find the{" "}
                        <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal tracking-wider`}>perfect plan</span>
                        <br className="hidden sm:block" />
                        for your project.
                    </h2>

                    {/* Subtext */}
                    <p className={`relative z-10 text-gray-300 max-w-xl mt-5 text-[15px] sm:text-[17px] leading-relaxed ${geologica.className}`}>
                        Schedule a free consultation and we&apos;ll recommend the best package based on your goals, timeline, and budget. No commitment required.
                    </p>

                    {/* CTA Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-black bg-linear-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            id="pricing-bottom-cta-contact"
                        >
                            <span>Book Free Consultation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/service"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            id="pricing-bottom-cta-services"
                        >
                            <span>View All Services</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Scroll-reveal animation styles ── */}
            <style jsx>{`
                .price-animate-in {
                    opacity: 1 !important;
                    transform: none !important;
                    translate: none !important;
                }
            `}</style>
        </main>
    )
}