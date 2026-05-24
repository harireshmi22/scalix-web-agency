import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#070031] h-[631px] w-full overflow-hidden relative flex flex-col items-center justify-center' >

            <div className="absolute -bottom-80 -left-40 h-87.5 w-187.5 rounded-full bg-[#FFA369] blur-[180px]"></div>

            <div className="absolute -bottom-80 -right-40 h-80 w-212.5 rounded-full bg-[#D6F1FF] blur-[160px]"></div>


            <div className=" h-[443px] w-[1339px] mx-auto">
                <h1 className='text-white text-[32px] font-black'>Scalix</h1>
                <p className='text-white text-[16px] font-normal w-[650px] mt-5'>Building modern, scalable, and high-performance websites for businesses and creators. We specialize in full stack web development, backend systems, and visually stunning digital experiences.</p>

                <div className='flex w-full justify-between'>

                    <div className='mt-10 flex gap-5 flex-col'>
                        <h2 className='text-white text-[20px] font-medium'>Quick Links</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-white text-[14px] font-normal'>Home</li>
                            <li className='text-white text-[14px] font-normal'>Services</li>
                            <li className='text-white text-[14px] font-normal'> Projects / Portfolio</li>
                            <li className='text-white text-[14px] font-normal'>Pricing</li>
                            <li className='text-white text-[14px] font-normal'>Contact Us</li>
                        </ul>
                    </div>
                    <div className='mt-10 flex gap-5 flex-col'>
                        <h2 className='text-white text-[20px] font-medium'>Services</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-white text-[14px] font-normal'>Web Solutions</li>
                            <li className='text-white text-[14px] font-normal'>Web Development</li>
                            <li className='text-white text-[14px] font-normal'>Web Design</li>
                            <li className='text-white text-[14px] font-normal'>UI / UX Design</li>
                            <li className='text-white text-[14px] font-normal'>Maintenance & Support</li>
                            <li className='text-white text-[14px] font-normal'>Contact Us</li>
                        </ul>
                    </div>


                    <div className='mt-10 flex gap-5 flex-col'>
                        <h2 className='text-white text-[20px] font-medium'>Features</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-white text-[14px] font-normal'>Scalable Solutions</li>
                            <li className='text-white text-[14px] font-normal'>SEO Optimized</li>
                            <li className='text-white text-[14px] font-normal'>Fast & Secure</li>
                            <li className='text-white text-[14px] font-normal'>24/7 Support</li>
                            <li className='text-white text-[14px] font-normal'>Custom Solutions</li>
                        </ul>
                    </div>

                    <div className='mt-10 flex gap-5 flex-col'>
                        <h2 className='text-white text-[20px] font-medium'> Meet the Team</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-white text-[14px] font-normal'>Hari Reshmi — Senior Full Stack Developer and Manager</li>
                            <li className='text-white text-[14px] font-normal'>Kanishq Dev Anand — Creative & Development Specialist</li>
                            <li className='text-white text-[14px] font-normal'>Srestha Kumar Mishra — Full Stack Developer</li>

                        </ul>
                    </div>

                    <div className='mt-10 flex gap-5 flex-col'>
                        <h2 className='text-white text-[20px] font-medium'>Contact us</h2>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-white text-[14px] font-normal'>hello@scalix.com</li>
                            <li className='text-white text-[14px] font-normal'>+91- 7598805818</li>
                            <p className='text-white w-70'>Address: 1st Floor, 75, 6th Cross St, Maruthamalai Road, near Arumugam complex, Navavoor, Tamil Nadu 641010</p>
                        </ul>
                    </div>
                </div>

                <div className='border-b mt-10 border-gray-300 w-full'>
                </div>
                <p className='text-gray-500 mt-5 text-center'>© 2026 Scalix. All Rights Reserved.
                    Designed and Developed by Scalix Team.</p>

            </div>

        </footer>
    )
}

export default Footer