import React from 'react'
import { Anton, Architects_Daughter, Geologica } from 'next/font/google'

const anton = Anton({
    subsets: ['latin'],
    weight: '400',
})

const architectsDaughter = Architects_Daughter({
    subsets: ['latin'],
    weight: '400',
})

const geologica = Geologica({
    subsets: ['latin'],
    weight: '300',
})


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


export default function Page() {
    return (
        <main className="overflow-hidden">

            <section className="relative overflow-hidden bg-[#0d0d59] text-white">
                <div className="absolute inset-0 pointer-events-none" />

                <section className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:px-10 lg:px-14 lg:py-24">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#FFA369]" />
                        Our Services
                    </div>

                    <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                        <div>
                            <h1 className={`text-[36px] leading-[0.98] tracking-tight text-white sm:text-[60px] lg:text-[72px] ${anton.className}`}>
                                We design and build
                                <br />
                                <span className={`${architectsDaughter.className} text-transparent bg-clip-text bg-linear-to-r from-[#FFA369] to-[#FF8A3D]`}>premium</span> digital experiences.
                            </h1>

                            <p className={`mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75 sm:text-[18px] ${geologica.className}`}>
                                We partner with product teams and agencies to deliver elegant UI systems, fast and secure platforms,
                                and content-first experiences that convert. Our approach pairs clear strategy with engineering rigor so
                                every release feels intentional, reliable, and on-brand.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-[#FFA369]/20 bg-[#FFA369]/10 px-4 py-2 text-sm text-[#FFB78A]">Design systems</span>
                                <span className="rounded-full border border-[#6ab8ff]/20 bg-[#6ab8ff]/10 px-4 py-2 text-sm text-[#6ab8ff]">Platform builds</span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">Performance</span>
                            </div>
                        </div>


                    </div>
                </section>
            </section>

            {/* Services Section */}
            <section className="relative">
                <div className="w-full max-w-7xl mx-auto px-4 py-14 sm:px-6 md:px-10 lg:px-14">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.id}
                                className="group relative flex flex-col md:flex-row gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-5 sm:p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl"
                            >
                                <div className="md:w-36 shrink-0 rounded-lg overflow-hidden flex items-center justify-center bg-[#081042] p-3">
                                    <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-md bg-linear-to-br from-[#ff6200] to-[#ff8a3d] text-white shadow-md">
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className={`text-lg font-bold text-gray-900 ${anton.className}`}>{service.name}</h3>
                                        {service.timeline && (
                                            <span className="ml-2 inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-sm text-gray-900">{service.timeline}</span>
                                        )}
                                    </div>

                                    <p className={`mt-2 text-sm text-gray-600 ${geologica.className}`}>{service.description}</p>

                                    {service.details?.length > 0 && (
                                        <ul className="mt-3 grid gap-2">
                                            {service.details.map((d, i) => (
                                                <li key={i} className={`text-sm text-gray-600 flex items-start gap-2 ${geologica.className}`}>
                                                    <span className="mt-1 text-[#ff8a3d]">•</span>
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                        <a href="#contact" className="inline-block rounded-full bg-[#FFA369] px-4 py-2 text-sm font-semibold text-black shadow">Request estimate</a>
                                        <a href="#contact" className="text-sm text-white/80 underline">Start a conversation</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            <section className="relative mx-auto w-full px-4 pb-20 sm:px-6 md:px-10 lg:px-14 bg-[#081042]">
                <div className="max-w-7xl mx-auto py-14 sm:py-16">
                    <div className="grid gap-6 md:grid-cols-2 items-center">
                        <div>
                            <h2 className={`text-[30px] leading-tight text-white ${anton.className}`}>How we work</h2>
                            <p className={`mt-4 max-w-xl text-[16px] text-white/75 ${geologica.className}`}>
                                We begin with a short discovery to align objectives, then iterate visually and technically while
                                keeping performance, accessibility, and scalability as primary constraints. Deliverables range from
                                production-ready components and pages to platform blueprints and performance tuning guides.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/6 p-5 sm:p-6 backdrop-blur-xl">
                            <div className={`text-sm uppercase tracking-[0.28em] text-[#FFA369] ${geologica.className}`}>Get started</div>
                            <div className={`mt-2 text-[22px] leading-tight text-white ${anton.className}`}>Tell us about your project</div>
                            <p className={`mt-3 text-[15px] text-white/70 ${geologica.className}`}>Share a brief overview and we’ll respond with a suggested scope and timeline.</p>
                            <div className="mt-6">
                                <a href="#contact" className="inline-block rounded-2xl bg-linear-to-r from-[#FFA369] to-[#FFB78A] px-6 py-3 font-bold text-black shadow-xl">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}