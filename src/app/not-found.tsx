import React from "react";
import Link from "next/link";
import { anton, architectsDaughter, geologica } from "@/lib/fonts";

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#0d0d59] flex flex-col items-center justify-center px-4 py-20 text-center">
      {/* Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] [radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing Ambient Orbs */}
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FFA369] blur-[180px] opacity-[0.2] pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#D6F1FF] blur-[180px] opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#8b5cf6] blur-[220px] opacity-[0.1] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        {/* Animated 404 Text */}
        <div className="relative select-none">
          <span className="absolute -inset-2 bg-[#FFA369]/10 rounded-3xl blur-[8px] -rotate-1" />
          <h1
            className={`text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 filter drop-shadow-2xl ${anton.className}`}
          >
            404
          </h1>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-[#ff6200] animate-pulse" />
          <span
            className={`text-[#FFA369] text-[11px] uppercase tracking-widest font-extrabold ${geologica.className}`}
          >
            Page Not Found
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`text-[28px] sm:text-[38px] md:text-[44px] font-bold text-white leading-tight ${anton.className}`}
        >
          Lost in the{" "}
          <span className={`text-[#FFA369] ${architectsDaughter.className} font-normal`}>
            digital space?
          </span>
        </h2>

        {/* Subtext */}
        <p
          className={`text-gray-300 max-w-md text-[15px] sm:text-[17px] leading-relaxed ${geologica.className}`}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        {/* Interactive CTA Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/"
            className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-black bg-gradient-to-r from-[#FFA369] to-[#FFB78A] shadow-xl shadow-orange-500/10 hover:shadow-orange-400/25 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10">Return to Homepage</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB78A] to-[#FFA369] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="group relative w-full sm:w-auto justify-center px-8 py-4 rounded-2xl text-[15px] font-bold tracking-wide text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span className={`${geologica.className}`}>Contact Support</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
