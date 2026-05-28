"use client"
import React, { useRef, useEffect, useState } from 'react'
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

const faqData = [
    {
        question: "What services does Scalix Web Agency offer?",
        answer: "We offer custom website development, web application development, UI/UX design, hosting & deployment, website maintenance, and SEO optimization. We provide end-to-end digital solutions for businesses of all sizes.",
    },
    {
        question: "How long does it take to build a website?",
        answer: "Depending on the project scope, a standard website typically takes 2–4 weeks. Web applications with more complex features may take 4–8 weeks. We always discuss timelines upfront during our planning phase.",
    },
    {
        question: "Do you provide hosting and deployment services?",
        answer: "Yes! We handle complete hosting setup, domain connection, SSL certificates, deployment, and server configuration so your website runs smoothly from day one.",
    },
    {
        question: "What technologies do you use?",
        answer: "Our primary tech stack includes React, Next.js, Node.js, Express, MongoDB (MERN Stack), along with Tailwind CSS for styling. We also work with Python for AI/ML solutions and various cloud platforms for hosting.",
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Absolutely. We provide regular updates, bug fixes, performance monitoring, security patches, and ongoing optimization to keep your platform running at its best.",
    },
    {
        question: "Can I request custom features or modifications later?",
        answer: "Yes, we build scalable architectures so new features, pages, and integrations can be added anytime. We offer flexible post-launch support packages for ongoing development.",
    },
];

const FAQItem = ({ item, isOpen, onClick }) => {
    const contentRef = useRef(null);

    return (
        <div
            className={`border mb-10 rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "border-[#ff6200]/30 bg-white/70 shadow-md shadow-orange-100/30" : "border-gray-200 bg-white/40 hover:border-gray-300 hover:bg-white/60"}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer"
            >
                <span className={`text-[16px] font-semibold pr-4 ${isOpen ? "text-gray-900" : "text-gray-700"} ${anton.className}`}>
                    {item.question}
                </span>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-gradient-to-br from-[#ff6200] to-[#ff8a3d] rotate-45" : "bg-gray-100 rotate-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke={isOpen ? "white" : "#6b7280"} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </button>
            <div
                ref={contentRef}
                className="transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className={`px-7 pb-6 text-[14px] leading-relaxed text-gray-500 ${geologica.className}`}>
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("faq-animate-in");
                });
            },
            { threshold: 0.1 }
        );
        const els = sectionRef.current?.querySelectorAll(".faq-anim");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full flex flex-col items-center relative overflow-hidden mt-30 px-6 pb-10"
        >
            {/* Background Glows */}
            <div className="absolute -bottom-60 -left-40 h-[400px] w-[700px] rounded-full bg-[#D6F1FF] blur-[350px] opacity-40" />
            <div className="absolute -top-40 -right-60 h-[350px] w-[600px] rounded-full bg-[#FFA369] blur-[300px] opacity-25" />

            {/* Header */}
            <div className="faq-anim opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col items-center">
                <div className="rounded-4xl flex items-center justify-center border border-gray-300 w-[100px] h-12">
                    <h2 className="text-sm font-bold text-gray-500 tracking-widest">FAQ</h2>
                </div>
                <h1 className={`text-[36px] mt-10 font-semibold text-gray-900 text-center max-w-2xl ${anton.className}`}>
                    Frequently Asked <span className={`text-[#ff6200] ${architectsDaughter.className}`}>Questions</span>
                </h1>
                <p className={`text-gray-500 max-w-xl mt-4 text-center text-[15px] leading-relaxed ${geologica.className}`}>
                    Got questions? Here are some answers to help you understand how we work and what we offer.
                </p>
            </div>

            {/* FAQ Accordion */}
            <div className="faq-anim opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 w-full max-w-[800px] mt-14 flex flex-col gap-3">
                {faqData.map((item, i) => (
                    <FAQItem
                        key={i}
                        item={item}
                        isOpen={openIndex === i}
                        onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    />
                ))}
            </div>

            <style jsx>{`
                .faq-animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    );
};

export default FAQ;