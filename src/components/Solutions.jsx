import React from 'react'

const Solutions = () => {
    return (
        <section className="relative min-h-screen w-full px-9 py-20">
            <div className="border border-gray-300 h-10 w-100 rounded-4xl text-center justify-center flex items-center ">
                <h2 className="text-sm font-bold text-gray-400">WEB SOLUTIONS FOR YOUR EVERY SECTOR</h2>
            </div>

            <div>
                <h1 className="text-[40px] font-semibold w-180">Building <span className="text-blue-500 font-black">Smarter</span>, <span className="text-[#FFA369] font-black">Scalable</span> <span className="text-gray-400 font-black">Digital</span> Solutions for <span className="text-gray-400 font-black">Modern Businesses</span></h1>
            </div>

            <div className="w-full h-136.5 flex mt-15 gap-10">
                <div className="border w-157.25 h-142.25 flex items-center justify-center p-6 rounded-2xl">
                    <img src="/services.png" alt="services" className="object-cover" />
                </div>

                <div className=" max-w-3xl h-142.25 flex flex-col rounded-2xl">
                    <div className="w-full flex flex-col gap-3">
                        <h4 className="text-[32px] text-gray-900 font-semibold mt-2">Modern <span className="text-[#FFA369] font-black">Web Solutions</span> Designed for <span className="text-[#FFA369] font-black">Growth</span></h4>
                        <p className="text-gray-600 max-w-2xl mt-1">We create modern websites and web applications that help businesses grow online with better performance, clean design, secure hosting, and long-term scalability.</p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 rounded-xl">

                        <h4 className="mt-4 font-semibold text-[18px]">Performance-Focused Experience</h4>
                        <p className="text-gray-400 ">We optimize websites for speed, responsiveness, and smooth browsing so users can access your platform quickly on any device.</p>

                        <h4 className="mt-4 font-semibold text-[18px]">Complete Digital Support</h4>
                        <p className="text-gray-400 ">From design and development to hosting, deployment, SEO, and maintenance, we help manage your complete online presence.</p>

                        <h4 className="mt-4 font-semibold text-[18px]">Business Growth Oriented</h4>
                        <p className="text-gray-400 ">Every website is built with a clear purpose: to improve your brand image, attract customers, and support your online growth.</p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Solutions