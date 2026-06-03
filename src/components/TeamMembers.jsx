"use client"
import React, { useEffect, useRef } from 'react'

import { anton, architectsDaughter, geologica } from '@/lib/fonts'

const teamMembers = [
    {
        id: 1,
        name: "Hari Reshmi",
        role: "Manager / Project Coordinator",
        initials: "HR",
        description: "Manages the complete project workflow, assigns tasks, coordinates with team members, and ensures every project is completed with proper planning and execution.",
        skills: ["Project Management", "Team Coordination", "Client Communication", "Workflow Planning"],
        accentFrom: "#C24700",
        accentTo: "#ff8a3d",
    },
    {
        id: 2,
        name: "Kanishq Gautam",
        role: "MERN Developer",
        initials: "KG",
        description: "Designs and develops responsive websites and web applications using modern MERN stack technologies with a focus on clean UI and usability.",
        skills: ["React", "Node.js", "MongoDB", "Express", "Responsive Design"],
        accentFrom: "#0066ff",
        accentTo: "#38bdf8",
    },
    {
        id: 3,
        name: "Srestha Mishra",
        role: "AI/ML Developer",
        initials: "SM",
        description: "Works on AI and machine learning solutions to create automation features, smart tools, and intelligent systems for modern web applications.",
        skills: ["Python", "Machine Learning", "AI", "Automation", "Data Science"],
        accentFrom: "#a855f7",
        accentTo: "#c084fc",
    },
    {
        id: 4,
        name: "Kaushtubh Singh",
        role: "JavaScript Developer",
        initials: "KS",
        description: "Handles JavaScript-based functionality, interactive features, and code optimization to improve performance and user experience.",
        skills: ["JavaScript", "TypeScript", "Performance Optimization", "Interactive UI"],
        accentFrom: "#10b981",
        accentTo: "#34d399",
    },
];

const TeamMembers = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const cards = sectionRef.current?.querySelectorAll('.team-card');
        cards?.forEach((card) => observer.observe(card));

        const headerEl = sectionRef.current?.querySelector('.team-header');
        if (headerEl) observer.observe(headerEl);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="team"
            className='w-full flex flex-col items-center relative overflow-hidden mt-16 sm:mt-24 md:mt-30 px-4 sm:px-6 pb-20 sm:pb-32'
        >
            {/* Background Glows */}
            <div className="absolute -bottom-80 -left-40 h-88 w-88 sm:h-96 sm:w-96 rounded-full bg-[#FFA369] blur-[250px]" />
            <div className="absolute -bottom-80 -right-40 h-88 w-88 sm:h-96 sm:w-96 rounded-full bg-[#FFA369] blur-[250px]" />
            <div className="absolute -top-80 -right-80 h-80 w-80 sm:h-96 sm:96 rounded-full bg-[#D6F1FF] blur-[150px]" />
            <div className="absolute -top-80 -left-80 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-[#D6F1FF] blur-[150px]" />

            {/* Header */}
            <div className='team-header w-full flex flex-col items-center mt-10 sm:mt-15 opacity-0 translate-y-8 transition-all duration-700 ease-out'>
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 w-[250px] h-12">
                    <h2 className="text-sm font-bold text-gray-500 tracking-widest">OUR TEAM MEMBERS</h2>
                </div>

                <h2 className={`text-[30px] sm:text-[36px] mt-8 sm:mt-10 font-normal text-gray-900 text-center ${anton.className}`}>
                    Meet the people behind <span className={`text-[#C24700] ${architectsDaughter.className}`}>Scalix</span> <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Web Agency</span>
                </h2>

                <p className={`text-gray-500 max-w-3xl mt-5 text-center text-[15px] leading-relaxed ${geologica.className}`}>
                    At Scalix Web Agency, our team brings together development, design, automation, and project management skills to build modern digital solutions. Each member focuses on a specific area of work, helping us create websites, web applications, automation systems, and optimized user experiences with a clear and collaborative process.
                </p>
            </div>

            {/* Team Cards Grid */}
            <div className="w-full max-w-[1280px] mx-auto mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="team-card group relative flex flex-col rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-5 sm:p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 hover:border-gray-300"
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            {/* Top row: avatar + name/role */}
                            <div className="flex items-center gap-5">
                                {/* Avatar with gradient initials */}
                                <div
                                    className="shrink-0 h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${member.accentFrom}, ${member.accentTo})`,
                                    }}
                                >
                                    {member.initials}
                                </div>

                                <div>
                                    <h3 className={`text-lg sm:text-xl font-semibold text-gray-900 ${anton.className}`}>
                                        {member.name}
                                    </h3>
                                    <p className={`text-sm mt-1 font-medium ${geologica.className}`} style={{ color: member.accentFrom }}>
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className={`text-[14px] leading-relaxed text-gray-500 mt-5 ${geologica.className}`}>
                                {member.description}
                            </p>

                            {/* Skill Tags */}
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

                            {/* Bottom accent line */}
                            <div
                                className="absolute bottom-0 left-1/2 h-[3px] w-2/3 -translate-x-1/2 origin-center scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                                style={{
                                    background: `linear-gradient(90deg, ${member.accentFrom}, ${member.accentTo})`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline animation styles */}
            <style jsx>{`
                .animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    )
}

export default TeamMembers