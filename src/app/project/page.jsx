import React from 'react'
import Image from 'next/image'
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

const projectStats = [
    { value: '12+', label: 'Case studies shipped' },
    { value: '100%', label: 'Custom visual systems' },
    { value: '3x', label: 'Average conversion lift' },
]

const projectCards = [
    {
        title: 'Scalix Agency Website',
        category: 'Brand Experience',
        description:
            'A bold agency showcase with a polished hero, refined motion, and a clear conversion path that puts the brand first.',
        image: '/hero.png',
        accent: '#FFA369',
        tag: 'Strategy + UI',
    },
    {
        title: 'E-Commerce Platform',
        category: 'Commerce',
        description:
            'A fast product journey with strong typography, structured layouts, and product storytelling built to convert.',
        image: '/hero1.png',
        accent: '#6ab8ff',
        tag: 'Next.js + Commerce',
    },
    {
        title: 'Portfolio Dashboard',
        category: 'Analytics',
        description:
            'An elevated dashboard concept that balances data density with clear hierarchy and a premium color system.',
        image: '/hero2.png',
        accent: '#c084fc',
        tag: 'UI Systems',
    },
    {
        title: 'AI Content Studio',
        category: 'Automation',
        description:
            'A productized workspace for content generation with a strong editorial feel and a calm, focused layout.',
        image: '/hero3.png',
        accent: '#34d399',
        tag: 'AI Workflow',
    },
    {
        title: 'Delivery Snapshot',
        category: 'Launch',
        description:
            'A supporting project frame that communicates progress, completion, and the premium delivery standard behind the work.',
        image: '/undraw_project-completed_ug9i.png',
        accent: '#f59e0b',
        tag: 'Case Study',
    },
    {
        title: 'Growth Concepts',
        category: 'Creative Direction',
        description:
            'A flexible visual direction tile set with enough warmth, contrast, and clarity to support future campaign work.',
        image: '/hero4.png',
        accent: '#ff8a3d',
        tag: 'Visual Direction',
    },
]

function Page() {
    return (
        <main className="overflow-hidden">
            <main className="relative overflow-hidden bg-[#0d0d59] text-white">
                <div
                    className="absolute inset-0 pointer-events-none"
                />
                <div className="absolute -left-40 top-24 rounded-full bg-[#FFA369] blur-[180px] opacity-20 pointer-events-none" style={{ height: '28rem', width: '28rem' }} />
                <div className="absolute -right-40 top-40 rounded-full bg-[#D6F1FF] blur-[200px] opacity-15 pointer-events-none" style={{ height: '30rem', width: '30rem' }} />

                <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-14 pt-24 sm:px-6 md:px-10 lg:px-14 lg:pb-24 lg:pt-28">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#FFA369]" />
                        Project Showcase
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div>
                            <h1 className={`text-[36px] leading-[0.98] tracking-tight text-white sm:text-[60px] lg:text-[84px] ${anton.className}`}>
                                Design-led <span className={architectsDaughter.className} style={{ color: '#FFA369' }}>projects</span> built to feel premium.
                            </h1>
                            <p className={`mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75 sm:text-[18px] ${geologica.className}`}>
                                This page translates the project direction into a focused presentation of our work, using the same orange-and-blue energy, bold typography, and polished imagery that define the Scalix brand.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-[#FFA369]/20 bg-[#FFA369]/10 px-4 py-2 text-sm text-[#FFB78A]">
                                    Bespoke UI systems
                                </span>
                                <span className="rounded-full border border-[#D6F1FF]/20 bg-[#D6F1FF]/10 px-4 py-2 text-sm text-[#D6F1FF]">
                                    High-impact visuals
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                                    Conversion-focused layout
                                </span>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                            {projectStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl shadow-[0_12px_50px_rgba(0,0,0,0.18)]"
                                >
                                    <div className={`text-[30px] font-bold leading-none text-white ${anton.className}`}>
                                        {stat.value}
                                    </div>
                                    <div className={`mt-2 text-sm leading-relaxed text-white/65 ${geologica.className}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>  
                    </div>
                </section>
            </main>

            <section className="relative mx-auto w-full px-4 pb-20 sm:px-6 md:px-10 lg:px-14 mt-16 sm:mt-20">
                <div className="mb-8 flex items-end justify-between gap-6">
                    <div>
                        <p className={`text-sm uppercase tracking-[0.28em] text-[#FFA369] ${geologica.className}`}>
                            Selected work
                        </p>
                        <h2 className={`mt-3 text-[30px] leading-tight text-black sm:text-[42px] ${anton.className}`}>
                            A curated set of project stories and visuals.
                        </h2>
                    </div>
                    <p className={`hidden max-w-md text-right text-[15px] leading-relaxed text-black/65 lg:block ${geologica.className}`}>
                        Each card combines title, description, color, and imagery so the page feels like a real portfolio experience instead of a placeholder.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                    {projectCards.map((project) => (
                        <article
                            key={project.title}
                            className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_12px_50px_rgba(0,0,0,0.18)] group"
                        >
                            <div className="relative w-full h-80 sm:h-100 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* <div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(180deg, rgba(13, 13, 89, 0.02) 0%, rgba(13, 13, 89, 0.45) 100%), linear-gradient(135deg, ${project.accent}20, transparent 48%)`,
                                    }}
                                /> */}
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <span className={`text-xs font-bold uppercase tracking-[0.3em] ${geologica.className}`} style={{ color: project.accent }}>
                                        {project.category}
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white-600">
                                        {project.tag}
                                    </span>
                                </div>

                                <h3 className={`mt-4 text-[24px] leading-tight text-black ${anton.className}`}>
                                    {project.title}
                                </h3>

                                <p className={`mt-3 text-[15px] leading-relaxed text-black ${geologica.className}`}>
                                    {project.description}
                                </p>

                                {/* <div className="mt-6 flex items-center gap-2 text-sm font-semibold" style={{ color: project.accent }}>
                                    <span>View project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div> */}
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            <section className="relative mx-auto w-full px-4 pb-20 sm:px-6 md:px-10 lg:px-14 bg-[#0d0d59]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 justify-center items-stretch lg:items-center">
                    <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8 backdrop-blur-xl mt-10 lg:flex-1">
                        <p className={`text-sm uppercase tracking-[0.28em] text-[#FFA369] ${geologica.className}`}>
                            Creative direction
                        </p>
                        <h3 className={`mt-4 text-[30px] leading-tight text-white ${anton.className}`}>
                            Warm highlights, cool contrast, and sharp hierarchy.
                        </h3>
                        <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 ${geologica.className}`}>
                            The page keeps the Scalix palette intact by pairing deep indigo surfaces with orange and sky-blue accents, then framing the work in elevated glass cards for a confident presentation.
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#081042] p-0 backdrop-blur-xl mt-10 lg:flex-1">
                        <div className="relative aspect-16/10 min-h-72 sm:min-h-80">
                            <Image
                                src="/home.png"
                                alt="Project visual preview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#081042] via-[#081042]/25 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="max-w-md rounded-2xl border border-white/10 bg-[#0d0d59]/70 p-5 backdrop-blur-xl">
                                <div className={`text-sm uppercase tracking-[0.28em] text-[#D6F1FF] ${geologica.className}`}>
                                    Featured composition
                                </div>
                                <div className={`mt-2 text-[22px] leading-tight text-white ${anton.className}`}>
                                    A confident landing page frame with a clear brand story.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page