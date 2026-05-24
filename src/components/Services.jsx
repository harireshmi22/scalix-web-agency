import React from 'react'
import Image from 'next/image';

const services = () => {
    return (
        <div className="h-screen max-w-full">
            <h1 className="text-[40px] font-bold text-center mt-30">Trusted Digital Partners</h1>

            <div className="w-full h-136.5 flex items-center justify-center">

                <div className="h-96">
                    <h4 className="text-[36px] mt-10 text-gray-900 px-9 font-semibold">Complete Web Solutions & Management</h4>
                    <p className="text-slate-600 px-9 mt-4 max-w-4xl">We don’t just build websites — we handle the complete digital infrastructure behind your business.
                        From secure hosting and performance optimization to ongoing maintenance, SEO, and scalability,
                        we ensure your platform stays fast, reliable, and ready for growth.</p>


                </div>

                <div className="border w-142.25 h-96 flex items-center justify-center p-6 rounded-2xl">
                    <Image src="/services.png" alt="services" width={569} height={384} className="object-cover" />
                </div>
            </div>

           
        </div>
    )
}

export default services