"use client"
import React, { useRef, useEffect, useState } from 'react'

import { anton, architectsDaughter, geologica } from "@/lib/fonts";

/* ──────────────────────────────────────────
   Pricing Tiers
   ────────────────────────────────────────── */

const pricingTiers = [
    {
        name: "Starter",
        subtitle: "Perfect for small businesses & personal brands",
        price: "39,999",
        period: "one-time",
        color: "#ff6200",
        gradient: "from-[#ff6200] to-[#ff8a3d]",
        popular: false,
        features: [
            "Custom 5-Page Website",
            "Mobile Responsive Design",
            "Basic SEO Setup",
            "Contact Form Integration",
            "Domain & Hosting Setup",
            "1 Round of Revisions",
            "7-Day Delivery",
            "SSL Certificate",
        ],
        excluded: [
            "Web Application Features",
            "Advanced Animations",
            "Database Integration",
            "Priority Support",
        ],
    },
    {
        name: "Professional",
        subtitle: "For growing businesses that need more power",
        price: "99,999",
        period: "one-time",
        color: "#0066ff",
        gradient: "from-[#0066ff] to-[#3b82f6]",
        popular: true,
        features: [
            "Custom 10-Page Website",
            "Advanced UI/UX Design",
            "Full SEO Optimization",
            "Blog / CMS Integration",
            "API & Database Integration",
            "Advanced Animations & Interactions",
            "3 Rounds of Revisions",
            "14-Day Delivery",
            "Performance Optimization",
            "Analytics Dashboard Setup",
        ],
        excluded: [
            "Dedicated Project Manager",
            "24/7 Priority Support",
        ],
    },
    {
        name: "Agency",
        subtitle: "Full project ownership — we handle everything",
        price: "2,49,999",
        period: "one-time",
        color: "#a855f7",
        gradient: "from-[#a855f7] to-[#7c3aed]",
        popular: false,
        features: [
            "Unlimited Pages",
            "Premium UI/UX Design System",
            "Full-Stack Web Application",
            "E-Commerce / SaaS Features",
            "Advanced SEO & Schema Markup",
            "CI/CD Pipeline Setup",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "30-Day Delivery",
            "24/7 Priority Support",
            "Source Code Ownership",
            "Post-Launch Training Session",
        ],
        excluded: [],
    },
]

/* ──────────────────────────────────────────
   Individual Services (Add-ons)
   ────────────────────────────────────────── */

const individualServices = [
    {
        name: "Bug Fixing & Debugging",
        price: "3,999",
        unit: "per issue",
        description: "Quick diagnosis and resolution of frontend/backend bugs, layout glitches, and API errors.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135c-.117-1.08-.908-1.929-1.987-2.043A22.312 22.312 0 0012 5.75c-1.74 0-3.443.2-5.068.562-1.079.114-1.87.963-1.987 2.043a23.91 23.91 0 01-1.152 6.135A24.29 24.29 0 0112 12.75z" />
            </svg>
        ),
        color: "#ef4444",
    },
    {
        name: "SEO Optimization",
        price: "14,999",
        unit: "per site",
        description: "Full on-page SEO audit, meta tags, schema markup, Core Web Vitals, and keyword strategy.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
        color: "#10b981",
    },
    {
        name: "Hosting & Deployment",
        price: "7,999",
        unit: "setup + ₹1,249/mo",
        description: "Cloud deployment, SSL, CDN, domain configuration, auto-scaling, and 99.9% uptime guarantee.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        color: "#f59e0b",
    },
    {
        name: "UI/UX Redesign",
        price: "29,999",
        unit: "per project",
        description: "Complete visual overhaul with modern design, micro-animations, responsive layouts, and brand alignment.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        color: "#a855f7",
    },
    {
        name: "API & Backend Development",
        price: "49,999",
        unit: "per module",
        description: "Custom REST/GraphQL APIs, database architecture, authentication, and third-party integrations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>
        ),
        color: "#0066ff",
    },
    {
        name: "Performance Optimization",
        price: "11,999",
        unit: "per site",
        description: "Code splitting, lazy loading, image optimization, caching strategies, and Core Web Vitals tuning.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        color: "#ff6200",
    },
]

/* ──────────────────────────────────────────
   Custom Website Pricing (per page)
   ────────────────────────────────────────── */

const customPagePricing = [
    { pages: "1–5 Pages", price: "39,999", perPage: "~₹8,000/page", description: "Landing pages, personal sites, portfolios" },
    { pages: "6–10 Pages", price: "74,999", perPage: "~₹7,500/page", description: "Business websites, service pages, blogs" },
    { pages: "11–20 Pages", price: "1,29,999", perPage: "~₹6,500/page", description: "Corporate sites, multi-service platforms" },
    { pages: "21–50 Pages", price: "2,89,999", perPage: "~₹5,800/page", description: "Large-scale sites, e-commerce, directories" },
    { pages: "50+ Pages", price: "Custom", perPage: "Best rates", description: "Enterprise solutions, custom web apps" },
]

/* ──────────────────────────────────────────
   Maintenance Plans
   ────────────────────────────────────────── */

const maintenancePlans = [
    {
        name: "Basic Care",
        price: "3,999",
        period: "/month",
        color: "#10b981",
        features: [
            "Monthly security updates",
            "Uptime monitoring",
            "1 content update/month",
            "Bug fixes (up to 2/month)",
            "Monthly performance report",
        ],
    },
    {
        name: "Growth Plan",
        price: "9,999",
        period: "/month",
        color: "#0066ff",
        popular: true,
        features: [
            "Weekly security updates",
            "24/7 uptime monitoring",
            "5 content updates/month",
            "Unlimited bug fixes",
            "SEO monitoring & tweaks",
            "Performance optimization",
            "Weekly analytics reports",
            "Priority email support",
        ],
    },
    {
        name: "Premium Care",
        price: "24,999",
        period: "/month",
        color: "#a855f7",
        features: [
            "Daily security monitoring",
            "24/7 uptime + instant alerts",
            "Unlimited content updates",
            "Unlimited bug fixes",
            "Advanced SEO management",
            "Performance optimization",
            "Feature enhancements (4hr/mo)",
            "Dedicated account manager",
            "Same-day response guarantee",
            "Monthly strategy call",
        ],
    },
]

/* ──────────────────────────────────────────
   FAQ Data
   ────────────────────────────────────────── */

const faqs = [
    {
        question: "Can I start with a package and add services later?",
        answer: "Absolutely! All our packages are designed to be flexible. You can start with any tier and add individual services or upgrade your plan at any time. We'll prorate any differences.",
    },
    {
        question: "What's included in the 'full project handling' Agency package?",
        answer: "The Agency package means we take complete ownership of your project — from initial planning and UI/UX design to full-stack development, deployment, and post-launch support. You get a dedicated project manager who handles everything so you can focus on your business.",
    },
    {
        question: "How does custom website pricing work based on pages?",
        answer: "Our per-page pricing decreases as you add more pages. Each page includes responsive design, SEO optimization, and content integration. Complex pages (e-commerce, dashboards) may have additional costs which we'll discuss during our initial consultation.",
    },
    {
        question: "Do maintenance plans include hosting?",
        answer: "Maintenance plans cover website upkeep, updates, and support. Hosting is billed separately at ₹1,249/month or can be included in your package. We offer bundled discounts when you combine both services.",
    },
    {
        question: "What happens after my website is delivered?",
        answer: "After delivery, you get 30 days of free basic support. After that, we recommend one of our maintenance plans to keep your site secure, fast, and up-to-date. You own the source code and can host it anywhere you prefer.",
    },
    {
        question: "Can I hire Scalix to manage my entire digital presence?",
        answer: "Yes! Our Agency package combined with the Premium Care maintenance plan is designed exactly for this. We handle your website, hosting, updates, SEO, bug fixes, and even new feature development on an ongoing basis.",
    },
]

/* ──────────────────────────────────────────
   Component
   ────────────────────────────────────────── */

export default function PricingPage() {
    const sectionRef = useRef(null)
    const [billingCycle, setBillingCycle] = useState("one-time")
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
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FFA369] to-[#ff6200] relative z-10 font-normal ${architectsDaughter.className}`}>
                            scale
                        </span>
                    </span>
                    {" "}with{" "}
                    <br className="hidden sm:block" />
                    your{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#0066ff]/10 rounded-2xl rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#0066ff] relative z-10 font-normal ${architectsDaughter.className}`}>
                            business.
                        </span>
                    </span>
                </h1>

                {/* Subtext */}
                <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-300/90 max-w-2xl ${geologica.className}`}>
                    Whether you need a simple landing page, a full-scale web application, or complete project management — we have a plan for every stage of your growth. No hidden fees, no surprises.
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
                            Pick a package that fits your needs. Every package includes responsive design, SEO basics, and our quality guarantee. Need something custom? We do that too.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {pricingTiers.map((tier, idx) => (
                            <div
                                key={idx}
                                className={`price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-3xl border backdrop-blur-md p-7 sm:p-8 flex flex-col ${tier.popular
                                    ? "border-[#0066ff]/40 bg-white/10 shadow-2xl shadow-blue-500/10 scale-[1.02] lg:scale-105"
                                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                                    } transition-all duration-300`}
                                style={{ transitionDelay: `${150 + idx * 100}ms` }}
                                id={`pricing-tier-${idx}`}
                            >
                                {/* Popular badge */}
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className={`px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r ${tier.gradient} shadow-lg ${geologica.className}`}>
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Top gradient line */}
                                <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${tier.gradient} rounded-full opacity-60`} />

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
                                    <span className={`text-[48px] sm:text-[56px] font-bold leading-none ${anton.className}`} style={{ color: tier.color }}>
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
                                    {tier.excluded.map((feature, fIdx) => (
                                        <li key={`ex-${fIdx}`} className="flex items-start gap-3 opacity-40">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 shrink-0 mt-0.5 text-white/40">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className={`text-white/40 text-[14px] line-through ${geologica.className}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="/contact"
                                    className={`w-full text-center py-4 rounded-2xl text-[15px] font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${tier.popular
                                        ? `text-white bg-gradient-to-r ${tier.gradient} shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95`
                                        : "text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 active:scale-95"
                                        }`}
                                    id={`pricing-cta-${idx}`}
                                >
                                    <span>Get Started</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                CUSTOM WEBSITE PRICING (BY PAGES)
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                {/* Background glow */}
                <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-[#FFA369] blur-[350px] opacity-10 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-200 bg-white/60 backdrop-blur-md mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                Custom Website Pricing
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Pay per{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>Page,</span>
                            {" "}Save at{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Scale</span>
                        </h2>
                        <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-500 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            Need a custom website with a specific number of pages? Our per-page pricing gets more affordable as your project grows. Every page is mobile responsive and SEO optimized.
                        </p>
                    </div>

                    {/* Pages pricing table */}
                    <div className="price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 rounded-3xl border border-gray-200 bg-white/60 backdrop-blur-md overflow-hidden shadow-xl shadow-gray-200/30">
                        {/* Table header */}
                        <div className="grid grid-cols-4 gap-4 px-6 sm:px-8 py-5 bg-gradient-to-r from-[#0d0d59] to-[#1a1a7a] text-white">
                            <span className={`text-[13px] font-bold uppercase tracking-wider ${geologica.className}`}>Pages</span>
                            <span className={`text-[13px] font-bold uppercase tracking-wider ${geologica.className}`}>Starting At</span>
                            <span className={`text-[13px] font-bold uppercase tracking-wider hidden sm:block ${geologica.className}`}>Per Page</span>
                            <span className={`text-[13px] font-bold uppercase tracking-wider hidden sm:block ${geologica.className}`}>Best For</span>
                        </div>

                        {/* Table rows */}
                        {customPagePricing.map((item, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 sm:px-8 py-5 items-center transition-colors duration-200 hover:bg-[#ff6200]/5 ${idx < customPagePricing.length - 1 ? "border-b border-gray-100" : ""
                                    }`}
                                id={`custom-page-row-${idx}`}
                            >
                                <span className={`text-[15px] font-bold text-gray-900 ${anton.className}`}>
                                    {item.pages}
                                </span>
                                <span className={`text-[18px] font-bold text-[#ff6200] ${anton.className}`}>
                                    {item.price === "Custom" ? "Custom" : `₹${item.price}`}
                                </span>
                                <span className={`text-[14px] text-gray-500 hidden sm:block ${geologica.className}`}>
                                    {item.perPage}
                                </span>
                                <span className={`text-[13px] text-gray-400 hidden sm:block ${geologica.className}`}>
                                    {item.description}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Note */}
                    <p className={`price-anim opacity-0 translate-y-4 transition-all duration-700 ease-out delay-300 mt-6 text-center text-gray-400 text-[13px] ${geologica.className}`}>
                        * All prices are in INR. Complex pages (e-commerce, dashboards, portals) may incur additional charges. Contact us for an exact quote.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                INDIVIDUAL SERVICES (ADD-ONS)
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 bg-[#f9fafb]">
                {/* Background glow */}
                <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-[#D6F1FF] blur-[300px] opacity-30 pointer-events-none" />
                <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#FFA369] blur-[300px] opacity-10 pointer-events-none" />

                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-200 bg-white/80 backdrop-blur-md mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                À La Carte Services
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Need Just{" "}
                            <span className={`text-[#ff6200] ${architectsDaughter.className} font-normal`}>One</span>
                            {" "}Service?
                        </h2>
                        <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-500 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            Don&apos;t need a full package? Pick individual services to solve specific problems. Add them to any existing package or use them standalone.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {individualServices.map((service, idx) => (
                            <div
                                key={idx}
                                className="price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 sm:p-7 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300"
                                style={{ transitionDelay: `${150 + idx * 80}ms` }}
                                id={`service-card-${idx}`}
                            >
                                {/* Subtle top accent */}
                                <div className="absolute top-0 left-5 right-5 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}88)` }} />

                                <div className="flex items-start justify-between mb-5">
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                        style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                                    >
                                        {service.icon}
                                    </div>

                                    {/* Price badge */}
                                    <div className="text-right">
                                        <span className={`text-[24px] font-bold ${anton.className}`} style={{ color: service.color }}>
                                            ₹{service.price}
                                        </span>
                                        <p className={`text-[11px] text-gray-400 ${geologica.className}`}>
                                            {service.unit}
                                        </p>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-gray-900 text-[18px] font-bold mb-2 ${anton.className}`}>
                                    {service.name}
                                </h3>

                                {/* Description */}
                                <p className={`text-gray-500 text-[13px] leading-relaxed mb-5 ${geologica.className}`}>
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide transition-all duration-300 group-hover:gap-3 cursor-pointer"
                                    style={{ color: service.color }}
                                >
                                    <span>Request Service</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                MAINTENANCE PLANS
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28">
                {/* Background glow */}
                <div className="absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full bg-[#0066ff] blur-[350px] opacity-8 pointer-events-none" />

                <div className="max-w-5xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-14 sm:mb-18">
                        <div className="price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center justify-center rounded-full px-5 py-2 border border-gray-200 bg-white/60 backdrop-blur-md mb-6">
                            <span className={`text-gray-500 text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                                After Launch Care
                            </span>
                        </div>
                        <h2 className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-tight ${anton.className}`}>
                            Website{" "}
                            <span className={`text-[#0066ff] ${architectsDaughter.className} font-normal`}>Maintenance</span>
                            {" "}Plans
                        </h2>
                        <p className={`price-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-4 text-gray-500 text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed ${geologica.className}`}>
                            Keep your website secure, fast, and up-to-date with our monthly maintenance plans. All plans include uptime monitoring and security patches.
                        </p>
                    </div>

                    {/* Maintenance Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {maintenancePlans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`price-anim opacity-0 translate-y-8 transition-all duration-700 ease-out group relative rounded-3xl border backdrop-blur-md p-7 sm:p-8 flex flex-col ${plan.popular
                                    ? "border-[#0066ff]/30 bg-gradient-to-b from-[#0066ff]/5 to-transparent shadow-xl shadow-blue-100/30 scale-[1.02] md:scale-105"
                                    : "border-gray-200 bg-white/60 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/30"
                                    } transition-all duration-300`}
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                                id={`maintenance-plan-${idx}`}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#0066ff] to-[#3b82f6] shadow-lg ${geologica.className}`}>
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
                                <a
                                    href="/contact"
                                    className={`w-full text-center py-3.5 rounded-2xl text-[14px] font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${plan.popular
                                        ? "text-white bg-gradient-to-r from-[#0066ff] to-[#3b82f6] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
                                        : "text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 active:scale-95"
                                        }`}
                                >
                                    <span>Choose Plan</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                FULL PROJECT MANAGEMENT BANNER
               ═══════════════════════════════════════ */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20">
                <div className="price-anim opacity-0 translate-y-8 transition-all duration-[800ms] ease-out max-w-6xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E1E90] to-[#111162] border border-white/10 shadow-2xl">
                    {/* Decorative glows */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff6200]/20 blur-[80px]" />
                    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#D6F1FF]/10 blur-[80px]" />
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFA369]/60 to-transparent" />

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
                                Don&apos;t want to worry about any of it? Our full project management service means we own every aspect of your digital project — from planning and design to development, deployment, and ongoing maintenance. One team. One point of contact. Zero stress.
                            </p>

                            {/* Key highlights */}
                            <div className="grid grid-cols-2 gap-3 mt-8">
                                {[
                                    "Dedicated Project Manager",
                                    "End-to-End Development",
                                    "Hosting & Deployment",
                                    "Ongoing Maintenance",
                                    "SEO & Performance",
                                    "24/7 Priority Support",
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
                                    <span className={`text-[64px] font-bold text-[#FFA369] leading-none ${anton.className}`}>2,49,999</span>
                                </div>
                                <p className={`text-white/40 text-[14px] mb-2 ${geologica.className}`}>one-time development</p>
                                <p className={`text-white/30 text-[13px] mb-8 ${geologica.className}`}>+ maintenance from ₹9,999/mo</p>

                                <a
                                    href="/contact"
                                    className="group w-full justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                                    id="pricing-full-project-cta"
                                >
                                    <span>Discuss Your Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>

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
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />

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
                        Schedule a free 15-minute consultation and we&apos;ll recommend the best package based on your goals, timeline, and budget. No commitment required.
                    </p>

                    {/* CTA Buttons */}
                    <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto">
                        <a
                            href="/contact"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            id="pricing-bottom-cta-contact"
                        >
                            <span>Book Free Consultation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                        <a
                            href="/service"
                            className="group w-full sm:w-auto justify-center px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                            id="pricing-bottom-cta-services"
                        >
                            <span>View All Services</span>
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
                .price-animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </main>
    )
}