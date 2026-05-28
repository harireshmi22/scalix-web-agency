"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Anton } from 'next/font/google'
import { Architects_Daughter } from 'next/font/google'
import { Geologica } from 'next/font/google'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

const geologica = Geologica({
    subsets: ["latin"],
    weight: "300",
});

const architectsDaughter = Architects_Daughter({
    subsets: ["latin"],
    weight: "400",
});

const projects = [
    {
        id: 1,
        title: "Scalix Agency Website",
        category: "Web Design",
        description: "A modern and premium agency website built for Scalix Web Agency, featuring smooth animations, responsive layouts, and a bold visual identity that reflects our brand.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/hero.png",
        accentFrom: "#ff6200",
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

    useEffect(() => {
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
            className="w-full flex flex-col items-center relative overflow-hidden mt-30 pb-20 h-full"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-60 -left-40 h-80 w-[700px] rounded-full bg-[#FFA369] blur-[300px]" />
            <div className="absolute -top-60 -right-40 h-80 w-[700px] rounded-full bg-[#D6F1FF] blur-[250px]" />

            {/* Header */}
            <div className="proj-header w-full flex flex-col items-center px-6 opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 w-[220px] h-12">
                    <h2 className="text-sm font-bold text-gray-500 tracking-widest">OUR PROJECTS</h2>
                </div>

                <h1 className={`text-[36px] mt-10 font-normal text-gray-900 text-center max-w-3xl ${anton.className}`}>
                    Showcasing Our <span className={`text-[#ff6200] ${architectsDaughter.className}`}>Best Work</span> &{" "}
                    <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Digital Creations</span>
                </h1>

                <p className={`text-gray-500 max-w-2xl mt-5 text-center text-[15px] leading-relaxed ${geologica.className}`}>
                    Explore a curated selection of projects we've built — from agency websites and e-commerce platforms to AI-powered tools and full-stack applications.
                </p>
            </div>

            {/* Swiper */}
            <div className="w-full mx-auto mt-30 px-6">
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
                        <SwiperSlide key={project.id}>
                            <div className="group flex rounded-2xl border border-gray-200 bg-white/60  gap-10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-0.5">
                                {/* Image */}
                                <div className="relative w-full h-[400px]  overflow-hidden ">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                    />

                                </div>

                                {/* Content */}
                                <div className="w-300 flex flex-col justify-center">
                                    <h3 className={`text-3xl font-semibold text-gray-900 ${anton.className}`}>
                                        {project.title}
                                    </h3>

                                    <p className={`text-[15px] leading-relaxed text-gray-500 mt-4 ${geologica.className}`}>
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-6">
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
                                    <div className="mt-8 flex items-center gap-2 group/link cursor-pointer">
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
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    )
}

export default OurProject