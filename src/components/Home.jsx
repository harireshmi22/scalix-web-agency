import React from 'react'
import Header from './Header';

const Home = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#070031]">
            <Header />
            {/* Base gradient background */}
            <div className="absolute  bg-[#070031]" />

            {/* Orange glow - left bottom */}
            <div className="absolute -bottom-40 -left-40 h-87.5 w-187.5 rounded-full bg-[#FFA369] blur-[180px]" />

            {/* Blue glow - right bottom */}
            <div className="absolute -bottom-40 -right-40 h-75 w-212.5 rounded-full bg-[#D6F1FF] blur-[180px]" />
            {/* 
            {/* Optional dark overlay for premium look */}
            {/* <div className="absolute inset-0 bg-black/10" /> */}

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <h1 className="max-w-3xl text-4xl font-serif leading-tight tracking-[0.15em] text-white md:text-6xl">
                    Make your website secure and scalable.
                </h1>

                <p className="mt-6 max-w-2xl text-sm text-white/80 md:text-base">
                    From websites to web applications, we create digital solutions that help
                    your business run more efficiently.
                </p>

                <div className="mt-14 flex gap-6">
                    <button className="rounded-md bg-orange-300 px-8 py-4 text-sm font-medium text-black">
                        Let’s Explore
                    </button>

                    <button className="rounded-md bg-sky-100 px-8 py-4 text-sm font-medium text-black">
                        Contact us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home