"use client"
import { Anton, Architects_Daughter, Siemreap } from 'next/font/google'
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




const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

const architectsDaughter = Architects_Daughter({
    subsets: ["latin"],
    weight: "400",
});


const projectImages = [
    { id: 1, src: hero, alt: 'Project 1' },
    { id: 2, src: hero1, alt: 'Project 2' },
    { id: 3, src: hero2, alt: 'Project 3' },
    { id: 4, src: hero3, alt: 'Project 4' },
    { id: 5, src: hero4, alt: 'Project 5' },
];


function ProjectSwipper() {
    return (
        <main className='w-full h-full  flex flex-col items-center justify-center px-6'>

            <h1 className={`text-[36px] font-black ${anton.className} w-210 text-center mt-70`}>At <span className={`${architectsDaughter.className} text-[#FF6300]`}>Scalix</span> Web Agency, we build <span className={`${architectsDaughter.className} text-[#FF6300]`}>modern applications</span>
                for businesses</h1>
            <section className='relative border w-full h-[786px] overflow-hidden bg-[#15157D] mt-20 flex items-center justify-center'>
                {/* Orange glow - left bottom */}
                <div className="absolute -bottom-40 -left-40 h-87.5 w-187.5 rounded-full bg-[#FFA369] blur-[180px]" />

                {/* Blue glow - right bottom */}
                <div className="absolute -top-40 -right-120 h-75 w-212.5 rounded-full bg-[#D6F1FF] blur-[180px]" />

                <div className='w-[1280px] h-[580px] mx-auto shadow-2xl z-20'>

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
                                    <Image src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>


            </section>
        </main>
    )
}

export default ProjectSwipper