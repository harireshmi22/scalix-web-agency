"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { anton, architectsDaughter, geologica } from '@/lib/fonts';

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"


const projects = [
    {
        id: 1,
        title: "Scalix Agency Website",
        category: "Web Design",
        description: "A modern and premium agency website built for Scalix Web Agency, featuring smooth animations, responsive layouts, and a bold visual identity that reflects our brand.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/hero.png",
        accentFrom: "#C24700",
        accentTo: "#ff8a3d",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Application",
        description: "A fully functional e-commerce platform with dynamic product pages, cart system, secure checkout, user authentication, and an admin dashboard for managing inventory.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/hero1.png",
        accentFrom: "#0066ff",
        accentTo: "#38bdf8",
    },
    {
        id: 3,
        title: "Portfolio Dashboard",
        category: "UI/UX Design",
        description: "A clean and interactive portfolio dashboard for creatives and developers to showcase their work, track analytics, and manage projects with a beautiful interface.",
        tags: ["React", "Chart.js", "Tailwind CSS"],
        image: "/hero2.png",
        accentFrom: "#a855f7",
        accentTo: "#c084fc",
    },
    {
        id: 4,
        title: "AI Content Generator",
        category: "AI/ML Application",
        description: "An intelligent content generation tool powered by machine learning that helps businesses create blog posts, social media content, and marketing copy automatically.",
        tags: ["Python", "OpenAI", "Next.js", "FastAPI"],
        image: "/hero3.png",
        accentFrom: "#10b981",
        accentTo: "#34d399",
    },
    {
        id: 5,
        title: "Real Estate Platform",
        category: "Full Stack App",
        description: "A modern real estate listing platform with advanced search filters, interactive maps, virtual tours, and a seamless property management experience for agents and buyers.",
        tags: ["MERN Stack", "Mapbox", "Cloudinary"],
        image: "/hero4.png",
        accentFrom: "#f59e0b",
        accentTo: "#fbbf24",
    },
];

const OurProject = () => {
    const sectionRef = useRef(null);
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("proj-animate-in");
                });
            },
            { threshold: 0.1 }
        );
        const el = sectionRef.current?.querySelector(".proj-header");
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-full flex flex-col items-center relative overflow-hidden mt-16 sm:mt-24 md:mt-30 pb-16 sm:pb-20 h-full"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-60 -left-40 h-40 sm:h-60 lg:h-80 w-[300px] sm:w-[500px] lg:w-[700px] rounded-full bg-[#FFA369] blur-[300px]" />
            <div className="absolute -top-60 -right-40 h-40 sm:h-60 lg:h-80 w-[300px] sm:w-[500px] lg:w-[700px] rounded-full bg-[#D6F1FF] blur-[250px]" />

            {/* Header */}
            <div className="proj-header w-full flex flex-col items-center px-4 sm:px-6 opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 w-full max-w-[220px] h-12">
                    <span className="text-sm font-bold text-gray-500 tracking-widest">OUR PROJECTS</span>
                </div>

                <h2 className={`text-[30px] sm:text-[36px] mt-8 sm:mt-10 font-normal text-gray-900 text-center max-w-3xl ${anton.className}`}>
                    Showcasing Our <span className={`text-[#C24700] ${architectsDaughter.className}`}>Best Work</span> &{" "}
                    <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Digital Creations</span>
                </h2>

                <p className={`text-gray-500 max-w-2xl mt-4 sm:mt-5 text-center text-[15px] leading-relaxed ${geologica.className}`}>
                    Explore a curated selection of projects we&apos;ve built — from agency websites and e-commerce platforms to AI-powered tools and full-stack applications.
                </p>
            </div>

            {/* Swiper */}
            <div className="w-full max-w-7xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6">
                {mounted ? (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        grabCursor
                        className="w-full project-swiper"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="p-2">
                                <div className="group flex flex-col lg:flex-row rounded-3xl border border-gray-200 bg-white/60 gap-6 sm:gap-10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-0.5 p-5 sm:p-8 lg:p-10">
                                    {/* Image */}
                                    <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[400px] lg:w-1/2 overflow-hidden rounded-2xl shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={800}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                                        <h3 className={`text-2xl sm:text-3xl font-semibold text-gray-900 ${anton.className}`}>
                                            {project.title}
                                        </h3>

                                        <p className={`text-[14.5px] leading-relaxed text-gray-500 mt-3 sm:mt-4 ${geologica.className}`}>
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                                                    style={{
                                                        color: project.accentFrom,
                                                        borderColor: `${project.accentFrom}30`,
                                                        backgroundColor: `${project.accentFrom}08`,
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Project */}
                                        <div className="mt-6 sm:mt-8 flex items-center gap-2 group/link cursor-pointer self-start">
                                            <span
                                                className={`text-sm font-semibold ${geologica.className}`}
                                                style={{ color: project.accentFrom }}
                                            >
                                                View Project
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={2} stroke={project.accentFrom}
                                                className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="w-full min-h-[30rem] bg-white/60 rounded-3xl border border-gray-200 flex items-center justify-center animate-pulse p-10">
                        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-10">
                            <div className="bg-gray-200/60 rounded-2xl w-full h-[220px] sm:h-[320px] lg:h-[400px] lg:w-1/2" />
                            <div className="flex flex-col justify-center flex-1 gap-4">
                                <div className="h-8 bg-gray-200/60 rounded-md w-3/4" />
                                <div className="h-20 bg-gray-200/60 rounded-md w-full" />
                                <div className="flex gap-2">
                                    <div className="h-6 bg-gray-200/60 rounded-full w-16" />
                                    <div className="h-6 bg-gray-200/60 rounded-full w-16" />
                                    <div className="h-6 bg-gray-200/60 rounded-full w-16" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .project-swiper .swiper-button-next,
                .project-swiper .swiper-button-prev {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 1px solid #e5e7eb;
                    background: rgba(255,255,255,0.8);
                    backdrop-filter: blur(8px);
                    transition: all 0.2s;
                }
                .project-swiper .swiper-button-next:hover,
                .project-swiper .swiper-button-prev:hover {
                    background: #ff6200;
                    border-color: #ff6200;
                }
                .project-swiper .swiper-button-next::after,
                .project-swiper .swiper-button-prev::after {
                    font-size: 16px;
                    font-weight: 700;
                    color: #6b7280;
                    transition: color 0.2s;
                }
                .project-swiper .swiper-button-next:hover::after,
                .project-swiper .swiper-button-prev:hover::after {
                    color: #fff;
                }
                .project-swiper .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #d1d5db;
                    opacity: 1;
                    transition: all 0.3s;
                }
                .project-swiper .swiper-pagination-bullet-active {
                    width: 28px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #ff6200, #ff8a3d);
                }
                .proj-animate-in {
                    opacity: 1 !important;
                    transform: none !important;
                    translate: none !important;
                }
            `}</style>
        </section>
    )
}

export default OurProject
