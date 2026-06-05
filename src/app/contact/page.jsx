"use client"
import React, { useRef, useEffect, useState } from 'react'

import { anton, architectsDaughter, geologica } from "@/lib/fonts";


const whatsappNumber = "919555859701";

const whatsappMessages = [
    {
        label: "General Inquiry",
        message: "Hi Scalix! I'd like to learn more about your web development services.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
        ),
    },
    {
        label: "New Project",
        message: "Hello Scalix! I have a new project idea and would like to discuss the scope, timeline, and budget. Can we schedule a call?",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
    },
    {
        label: "Get a Quote",
        message: "Hi! I need a quote for a website. Here are my requirements:\n\n• Type: [Website/Web App/E-commerce]\n• Pages: [Approx number]\n• Features: [Key features needed]\n• Timeline: [Expected deadline]\n\nPlease share your pricing details.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
    },
    {
        label: "Support & Maintenance",
        message: "Hi Scalix! I need help with maintenance/support for my existing website. Can you assist?",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.386 3.065A1.5 1.5 0 014.5 16.92V7.08a1.5 1.5 0 011.534-1.315L11.42 8.83m0 6.34l5.386 3.065a1.5 1.5 0 002.094-1.315V7.08a1.5 1.5 0 00-2.094-1.315L11.42 8.83m0 6.34V8.83" />
            </svg>
        ),
    },
];

const contactInfo = [
    {
        title: "WhatsApp",
        value: "+91 95558 59701",
        href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Scalix! I'd like to learn more about your services.")}`,
        color: "from-[#25D366] to-[#128C7E]",
        iconBg: "bg-[#25D366]/10",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        title: "Email",
        value: "hello@scalix.com",
        href: "mailto:hello@scalix.com",
        color: "from-[#ff6200] to-[#ff8a3d]",
        iconBg: "bg-[#ff6200]/10",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff6200]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        title: "Phone",
        value: "+91 75988 05818",
        href: "tel:+917598805818",
        color: "from-[#8b5cf6] to-[#6d28d9]",
        iconBg: "bg-[#8b5cf6]/10",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#8b5cf6]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
    },
    
    {
        title: "Location",
        value: "Coimbatore, Tamil Nadu",
        href: "https://maps.google.com/?q=Coimbatore,+Tamil+Nadu",
        color: "from-[#3b82f6] to-[#1d4ed8]",
        iconBg: "bg-[#3b82f6]/10",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#3b82f6]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
    title: "Instagram",
    value: "@scalix.hks",
    href: "https://www.instagram.com/scalix.hks/",
    color: "from-[#E1306C] to-[#C13584]",
    iconBg: "bg-[#E1306C]/10",
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-[#E1306C]"
        >
            <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
        </svg>
    ),
},
];

export default function ContactPage() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("contact-animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll(".contact-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleWhatsAppClick = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const fullMessage = `Hi Scalix! I'm reaching out via your website.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
        handleWhatsAppClick(fullMessage);
    };

    return (
        <main ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#0d0d59]">

            {/* ── Hero Section ── */}
            <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
                {/* Ambient Orbs */}
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFA369] blur-[240px] opacity-20 pointer-events-none" />
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#D6F1FF] blur-[220px] opacity-15 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#8b5cf6] blur-[280px] opacity-10 pointer-events-none" />

                {/* Badge */}
                <div className="contact-anim opacity-0 translate-y-6 transition-all duration-700 ease-out inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-ping" />
                    <span className={`text-[#25D366] text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}>
                        Available on WhatsApp
                    </span>
                </div>

                {/* Heading */}
                <h1 className={`contact-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100 text-[36px] sm:text-[52px] lg:text-[68px] leading-[1.05] font-bold text-white tracking-tight ${anton.className}`}>
                    Let&apos;s{" "}
                    <span className="relative inline-block px-1">
                        <span className="absolute inset-0 bg-[#25D366]/10 rounded-2xl -rotate-1 blur-[2px]" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#128C7E] relative z-10 font-normal ${architectsDaughter.className}`}>
                            connect
                        </span>
                    </span>{" "}
                    and build
                    <br className="hidden sm:block" />
                    something amazing.
                </h1>

                {/* Subtext */}
                <p className={`contact-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 mt-6 text-[16px] sm:text-[18px] leading-relaxed text-gray-300/90 max-w-2xl ${geologica.className}`}>
                    Have a project in mind? Reach out to us via WhatsApp for the fastest response, or use the contact form below. We typically respond within 30 minutes during business hours.
                </p>
            </section>

            {/* ── Contact Info Cards ── */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                    {contactInfo.map((info, idx) => (
                        <a
                            key={info.title}
                            href={info.href}
                            target={info.title === "Location" ? "_blank" : undefined}
                            rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`contact-anim opacity-0 translate-y-6 transition-all duration-700 ease-out group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 flex flex-col gap-4 hover:border-white/20 hover:bg-white/8 hover:scale-[1.02] cursor-pointer`}
                            style={{ transitionDelay: `${idx * 80}ms` }}
                            id={`contact-card-${info.title.toLowerCase()}`}
                        >
                            {/* Gradient top line */}
                            <div className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${info.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                {info.icon}
                            </div>
                            <div>
                                <p className={`text-gray-400 text-xs uppercase tracking-wider font-bold mb-1 ${geologica.className}`}>{info.title}</p>
                                <p className={`text-white text-[15px] font-medium ${geologica.className}`}>{info.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── Main Content: WhatsApp Quick Messages + Contact Form ── */}
            <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-20 sm:pb-28">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left: WhatsApp Quick Messages */}
                    <div className="contact-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100">
                        {/* Section badge */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className={`text-white text-xl sm:text-2xl font-bold ${anton.className}`}>
                                    Quick WhatsApp Messages
                                </h2>
                                <p className={`text-gray-400 text-sm ${geologica.className}`}>Tap to send a pre-formatted message</p>
                            </div>
                        </div>

                        {/* Message Cards */}
                        <div className="flex flex-col gap-3">
                            {whatsappMessages.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleWhatsAppClick(item.message)}
                                    className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                                    id={`whatsapp-msg-${idx}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-white text-[15px] font-semibold mb-1 ${geologica.className}`}>{item.label}</h3>
                                            <p className={`text-gray-400 text-[13px] leading-relaxed line-clamp-2 ${geologica.className}`}>{item.message}</p>
                                        </div>
                                        <div className="shrink-0 w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Direct WhatsApp CTA */}
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Scalix! I'd like to discuss a project.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-6 w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-xl shadow-green-900/30 hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            id="whatsapp-direct-cta"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Chat on WhatsApp — +91 95558 59701</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="contact-anim opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200">
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
                            {/* Decorative glow */}
                            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#ff6200]/15 blur-[80px] pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#D6F1FF]/10 blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-[#ff6200]/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#ff6200]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className={`text-white text-xl sm:text-2xl font-bold ${anton.className}`}>
                                            Send a Message
                                        </h2>
                                        <p className={`text-gray-400 text-sm ${geologica.className}`}>We&apos;ll reply via WhatsApp</p>
                                    </div>
                                </div>

                                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                                    {/* Name */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="contact-name" className={`text-gray-300 text-sm font-medium ${geologica.className}`}>Your Name</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-[16px] outline-none focus:border-[#FFA369]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#FFA369]/30 transition-all duration-300 ${geologica.className}`}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="contact-email" className={`text-gray-300 text-sm font-medium ${geologica.className}`}>Email Address</label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-[14px] outline-none focus:border-[#FFA369]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#FFA369]/30 transition-all duration-300 ${geologica.className}`}
                                        />
                                    </div>

                                    {/* Service */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="contact-service" className={`text-gray-300 text-sm font-medium ${geologica.className}`}>Service Needed</label>
                                        <select
                                            id="contact-service"
                                            required
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-[16px] outline-none focus:border-[#FFA369]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#FFA369]/30 transition-all duration-300 appearance-none cursor-pointer ${geologica.className}`}
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                                        >
                                            <option value="" className="bg-[#1a1a6e] text-gray-400">Select a service...</option>
                                            <option value="Website Development" className="bg-[#1a1a6e]">Website Development</option>
                                            <option value="Web Application" className="bg-[#1a1a6e]">Web Application</option>
                                            <option value="E-Commerce Store" className="bg-[#1a1a6e]">E-Commerce Store</option>
                                            <option value="UI/UX Design" className="bg-[#1a1a6e]">UI/UX Design</option>
                                            <option value="SEO Optimization" className="bg-[#1a1a6e]">SEO Optimization</option>
                                            <option value="Maintenance & Support" className="bg-[#1a1a6e]">Maintenance & Support</option>
                                            <option value="Other" className="bg-[#1a1a6e]">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="contact-message" className={`text-gray-300 text-sm font-medium ${geologica.className}`}>Your Message</label>
                                        <textarea
                                            id="contact-message"
                                            required
                                            rows={4}
                                            placeholder="Describe your project, timeline, and any specific requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-[16px] outline-none focus:border-[#FFA369]/50 focus:bg-white/8 focus:ring-1 focus:ring-[#FFA369]/30 transition-all duration-300 resize-none ${geologica.className}`}
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        id="contact-form-submit"
                                        className="group w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-950/30 hover:shadow-orange-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                                    >
                                        <span>Send via WhatsApp</span>
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </button>
                                </form>

                                {/* Info note */}
                                <p className={`mt-4 text-center text-gray-500 text-xs ${geologica.className}`}>
                                    Your message will be sent directly to our WhatsApp business number
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Floating WhatsApp Button (Fixed) ── */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Scalix!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-900/40 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 active:scale-95 transition-all duration-300 animate-bounce"
                style={{ animationDuration: '3s' }}
                id="whatsapp-floating-btn"
                aria-label="Chat on WhatsApp"
            >
                <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {/* Ping ring */}
                <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
            </a>

            {/* ── Scroll-reveal animation styles ── */}
            <style jsx>{`
                .contact-animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </main>
    );
}
