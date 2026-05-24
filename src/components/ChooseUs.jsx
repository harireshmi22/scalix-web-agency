import React from 'react'
import Image from 'next/image';
const ChooseUs = () => {
    return (
        <section className='h-screen w-full px-9 mt-20'>
            <div className="border border-gray-300 w-60 h-10 rounded-4xl text-center justify-center flex items-center ">
                <h2 className="text-sm font-bold text-[#636363]">WHY CHOOSE US</h2>
            </div>

            <div className="w-full flex mt-6 gap-10 rounded-2xl items-center ">
                <div className='w-1/2 h-full rounded-2xl'>
                    <h1 className='text-[40px] font-semibold text-gray-900 w-180'>Why <span className='text-[#FFA369] font-black'>Scalix</span> Is the Right Choice for Modern <span className='text-[#FFA369] font-black'>Web Solutions</span></h1>


                    <div className="flex flex-col mt-5 gap-4">

                        <h4 className="mt-4 font-semibold text-[18px]">Complete Website Support</h4>
                        <p className="text-slate-500">Our service does not stop after development. We help with hosting, deployment, domain setup, website maintenance, bug fixing, and regular updates. This ensures your website stays secure, active, and smooth for users.</p>

                        <h4 className="mt-4 font-semibold text-[18px]">Performance & SEO Focused</h4>
                        <p className="text-slate-500">We create websites that are fast, optimized, and search-engine friendly. From image optimization and clean code to responsive layouts and basic SEO setup, we make sure your website loads quickly and has a better chance to reach the right audience.</p>

                        <h4 className="mt-4 font-semibold text-[18px]">Tailored Solutions for Your Business Goals</h4>
                        <p className="text-slate-500"> We understand every business has different needs, so we design solutions based on your goals, brand identity, and target users. Our focus is to create a professional online presence that helps your business look trustworthy, modern, and ready for growth.</p>

                    </div>
                </div>

                <div className='w-1/2 h-142.25 border border-gray-300 rounded-2xl flex items-center justify-center'>
                    <div className='mx-auto flex'>
                       <img src="" alt="" /> 
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default ChooseUs