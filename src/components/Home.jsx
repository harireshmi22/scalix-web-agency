"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { anton, architectsDaughter, geologica } from "@/lib/fonts"
import Link from 'next/link'

const homesSrc = '/home-removebg-preview.avif';

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
            <div className="absolute -bottom-24 -left-24 h-48 w-48 sm:-bottom-48 sm:-left-48 sm:h-72 sm:w-[18rem] lg:h-[22rem] lg:w-[22rem] rounded-full bg-[#FFA369] blur-[240px] opacity-[0.22] animate-pulse duration-[10s] pointer-events-none" />
            <div className="absolute -top-24 right-[-12%] h-56 w-56 sm:-top-48 sm:right-[-10%] sm:h-72 sm:w-[20rem] lg:h-[22rem] lg:w-[28rem] rounded-full bg-[#D6F1FF] blur-[220px] opacity-[0.18] animate-pulse duration-[12s] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 h-24 w-24 sm:h-40 sm:w-40 rounded-full bg-[#8b5cf6] blur-[150px] opacity-[0.12] pointer-events-none" />

            {/* Main Interactive Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
                <div className="lg:col-span-7">
                    {/* Majestic Title Headline */}
                    <h1 className={`home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1.05] font-bold text-white tracking-tight ${anton.className}`}>
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
                    <div className="home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-300 flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-5 mt-10">
                        {/* Explore CTA */}
                        <Link
                            href="/service"
                            className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-linear-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-500/10 hover:shadow-orange-400/25 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center gap-2 cursor-pointer"
                        >
                            <span className="relative z-10">Let&apos;s Explore</span>
                            <div className="absolute inset-0 bg-linear-to-r from-[#FFB78A] to-[#FFA369] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>

                        {/* Contact CTA */}
                        <Link
                            href="/contact"
                            className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                        >
                            <span>Contact Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l3.293-3.293m0 0l3.293 3.293m-3.293-3.293v8.018m-6.62-1.285a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243zm13.486 0a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
                            </svg>
                        </Link>

                        {/* Social Contacts Group */}
                        <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                            {/* WhatsApp link */}
                            <a
                                href="https://wa.me/919555859701"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                                aria-label="Chat on WhatsApp"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            {/* Instagram link */}
                            <a
                                href="https://www.instagram.com/scalix.hks/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                                aria-label="Visit our Instagram"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex w-full max-w-[320px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] mx-auto lg:mx-0 lg:col-span-5 lg:justify-self-end mt-8 lg:mt-0">
                    <Image
                        src={homesSrc}
                        alt="Scalix Digital Illustration"
                        width={640}
                        height={640}
                        className="w-full h-auto object-contain p-0 sm:p-4 lg:p-8 select-none transition-transform duration-[1.5s] ease-out"
                        sizes="(max-width: 1024px) 50vw, 640px"
                        priority
                        placeholder="blur"
                        blurDataURL={"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'><rect width='10' height='10' fill='%230d0d59'/></svg>"}
                    />
                </div>
            </div>

            {/* Bottom Key Metrics Row */}
            <div className="relative z-10 w-full max-w-7xl mx-auto mt-14 lg:mt-24 border-t border-white/10 pt-8 sm:pt-10">
                <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center">
                    {keyMetrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className="home-anim opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col items-center gap-2 justify-center"
                        >
                            <span className={`text-[22px] sm:text-[32px] md:text-[40px] font-bold ${anton.className} ${metric.color}`}>
                                {metric.value}
                            </span>
                            <span className={`text-[10px] sm:text-sm text-gray-400 font-medium tracking-wide leading-tight ${geologica.className}`}>
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
                    transform: none !important;
                    translate: none !important;
                }
            `}</style>
        </section>
    )
}

export default Home

