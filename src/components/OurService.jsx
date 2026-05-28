"use client"
import React from 'react'
import { Anton } from 'next/font/google';
import { Architects_Daughter } from 'next/font/google';
import { Geologica } from 'next/font/google';

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

const services = [
    {
        id: 1,
        name: "Custom Website Development",
        description: "Professional and responsive websites tailored for businesses, startups, and personal brands.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "Web Application Development",
        description: "Scalable and modern web applications built for performance, functionality, and future growth.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
            </svg>
        ),
    },
    {
        id: 3,
        name: "Hosting & Deployment",
        description: "Secure hosting setup, domain connection, deployment, and server configuration for smooth online operations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 .75-7.425A4.502 4.502 0 0 0 14.25 6a4.5 4.5 0 0 0-4.06 2.56A4.5 4.5 0 0 0 2.25 15Z" />
            </svg>
        ),
    },
    {
        id: 4,
        name: "Website Management & Maintenance",
        description: "Regular updates, bug fixes, monitoring, and performance optimization to keep your platform running efficiently.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
            </svg>
        ),
    },
    {
        id: 5,
        name: "UI/UX Design",
        description: "Clean, modern, and user-focused interfaces designed to provide a seamless experience across all devices.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
        ),
    },
    {
        id: 6,
        name: "SEO Optimization",
        description: "Basic search engine optimization practices to improve visibility, speed, and online reach.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        ),
    },
];

const OurService = () => {
    return (
        <section className='w-full flex flex-col items-center relative overflow-hidden mt-20 sm:mt-30 px-4 sm:px-6'>

            {/* Background glows */}
            <div className="absolute -bottom-40 -left-24 sm:-bottom-24 sm:-left-40 h-56 w-72 sm:h-80 sm:w-80 rounded-full bg-[#FFA369] blur-[300px]"></div>
            <div className="absolute -bottom-40 -right-24 sm:-bottom-24 sm:-right-40 h-56 w-72 sm:h-80 sm:w-80 rounded-full bg-[#FFA369] blur-[300px]"></div>
            <div className="absolute -top-32 -right-24 sm:-top-40 sm:-right-40 h-48 w-64 sm:h-80 sm:w-72 rounded-full bg-[#D6F1FF] blur-[150px]"></div>
            <div className="absolute -top-32 -left-24 sm:-top-40 sm:-left-40 h-48 w-64 sm:h-80 sm:w-72 rounded-full bg-[#D6F1FF] blur-[150px]"></div>

            {/* Header */}
            <div className='w-full flex flex-col items-center mt-10 sm:mt-15'>
                <div className="rounded-4xl flex items-center justify-center">
                        <h2 className={`${anton.className} text-[26px] sm:text-[32px] md:text-[36px] font-bold text-gray-900`}>Our Services</h2>
                    </div>
                <h1 className={`text-[28px] sm:text-[36px] mt-10 sm:mt-20 font-normal max-w-4xl text-gray-900 text-center ${anton.className}`}>
                    Our <span className={`text-[#ff6200] ${architectsDaughter.className}`}>mission</span> Is To Make Your <span className={`text-[#0066ff] ${architectsDaughter.className}`}>Business</span> Better Through Technology
                </h1>
            </div>

            {/* Service Cards Grid */}
            <div className="w-full max-w-7xl mx-auto py-12 md:py-16 mt-8 md:mt-10 px-2 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1 hover:border-[#ff6200]/30"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-linear-to-br from-[#ff6200] to-[#ff8a3d] text-white shadow-md shadow-orange-200 transition-transform duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className={`text-xl font-semibold text-gray-900 ${anton.className}`}>
                                {service.name}
                            </h3>

                            {/* Description */}
                            <p className={`text-[15px] leading-relaxed text-gray-500 ${geologica.className}`}>
                                {service.description}
                            </p>

                            {/* Subtle bottom accent line on hover */}
                            <div className="absolute bottom-0 left-1/2 h-0.75 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#ff6200] to-[#0066ff] transition-all duration-300 group-hover:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default OurService