import React from 'react'
import Image from 'next/image';

const Service = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gap-10">
      <div className="border border-black w-142.25 h-96 flex items-center justify-center rounded-2xl">
        <Image src="/services.png" alt="services" width={569} height={384} className="object-cover" />
      </div>


      <div className="h-100 flex flex-col gap-3">

        <h4 className="text-[36px] mt-4 text-black font-semibold">Building Scalable Digital Experiences</h4>
        <p className="text-slate-400 max-w-3xl">We don’t just build websites — we handle the complete digital infrastructure behind your business.

          From secure hosting and performance optimization to ongoing maintenance, SEO, and scalability,
          we ensure your platform stays fast, reliable, and ready for growth.</p>

        <div className="w-153.25 h-38 mt-10 grid grid-cols-2 gap-2">

          <div className="bg-blue-500 rounded-4xl p-6 text-white text-sm text-center">
            Fast Performance
          </div>

          <div className="bg-purple-500 rounded-4xl p-6 text-white text-sm text-center">
            Responsive Design
          </div>

          <div className="bg-blue-500 rounded-4xl p-6 text-white text-sm text-center">
            SEO Optimization
          </div>

          <div className="bg-purple-500 rounded-4xl p-6 text-white text-sm text-center">
            Modern Tech Stack
          </div>


        </div>
      </div>

    </div>
  )
}

export default Service
