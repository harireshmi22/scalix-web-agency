"use client"
import { anton, architectsDaughter } from '@/lib/fonts'
import Image from 'next/image';
import hero from '../../public/hero.png';
import hero1 from '../../public/hero1.png';
import hero2 from '../../public/hero2.png';
import hero3 from '../../public/hero3.png';
import hero4 from '../../public/hero4.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectImages = [
    { id: 1, src: hero, alt: 'Project 1' },
    { id: 2, src: hero1, alt: 'Project 2' },
    { id: 3, src: hero2, alt: 'Project 3' },
    { id: 4, src: hero3, alt: 'Project 4' },
    { id: 5, src: hero4, alt: 'Project 5' },
];


function ProjectSwipper() {
    return (
        <section className='w-full flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden'>

            <h1 className={`max-w-5xl text-[28px] sm:text-[36px] md:text-[44px] font-black ${anton.className} text-center mt-14 sm:mt-20 leading-tight`}>At <span className={`${architectsDaughter.className} text-[#FF6300]`}>Scalix</span> Web Agency, we build <span className={`${architectsDaughter.className} text-[#FF6300]`}>modern applications</span>
                for businesses</h1>
            <section className='relative border w-full min-h-120 sm:min-h-152 lg:min-h-192 overflow-hidden bg-[#15157D] mt-10 sm:mt-20 flex items-center justify-center py-10 sm:py-14'>
                {/* Orange glow - left bottom */}
                <div className="absolute -bottom-24 -left-24 sm:-bottom-40 sm:-left-40 h-48 w-72 sm:h-80 sm:w-120 rounded-full bg-[#FFA369] blur-[180px]" />

                {/* Blue glow - right bottom */}
                <div className="absolute -top-20 -right-24 sm:-top-40 sm:-right-32 h-40 w-64 sm:h-72 sm:w-120 rounded-full bg-[#D6F1FF] blur-[180px]" />

                <div className='relative w-full max-w-6xl aspect-video mx-auto shadow-2xl z-20'>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                        grabCursor
                        className="w-full h-full"
                    >
                        {
                            projectImages.map((image) =>
                                <SwiperSlide key={image.id}>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 1200px"
                                            className="object-contain rounded-lg w-full h-auto"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>


            </section>
        </section>
    )
}

export default ProjectSwipper