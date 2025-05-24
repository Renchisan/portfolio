'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/swiper-custom.css';

const projectData = [
  {
    title: 'Strays Connect',
    video: '/videos/strays-connect-preview.mp4',
    github: 'https://github.com/your/strays-connect',
    live: 'https://strays-connect.vercel.app/',
    tools: ['Laravel', 'Vue', 'TailwindCSS', 'MySQL'],
  },
  {
    title: 'Smart Student Management System',
    video: '/videos/ssms-preview.mp4',
    github: 'https://github.com/your/ssms',
    live: 'http://localhost:8000',
    tools: ['Laravel', 'Vue', 'Machine Learning', 'MySQL'],
  },
  {
    title: 'Tast-E-Book',
    video: '/videos/tast-e-book-preview.mp4',
    github: 'https://github.com/your/tast-e-book',
    live: 'https://tast-e-book.vercel.app/',
    tools: ['Laravel Breeze', 'Vue', 'Inertia', 'MySQL'],
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[EffectCoverflow]}
      direction="vertical"
      effect="coverflow"
      slidesPerView={1.5}
      spaceBetween={-100}
      loop={true}
      centeredSlides={true}
      grabCursor={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 0.8,
      }}
      className="mySwiper h-full"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // update active slide index
    >
      {projectData.map((project, i) => (
        <SwiperSlide
          key={i}
          className="swiper-slide-custom flex flex-col items-center justify-center rounded-lg bg-white relative w-full  "
        >
          {activeIndex === i ? (
            <>
              {/* Show full content when active */}
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full object-contain"
              />
              <div className='flex flex-col w-full font-mono absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20'>
                {/* <span className='text-7xl text-bold text-sm '> {project.title}</span> */}
                {/* <span className='text-bold text-sm '> {project.tools.join(', ')}</span> */}

              </div>
             
            </>
          ) : (
            /* Show just the title when not active */
            <div className='bg-gray-100 items-center h-full w-full'>
                next
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
