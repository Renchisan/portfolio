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
  // {
  //   title: 'Lia',
  //   video: '/videos/lia-preview.mp4',
  //   github: 'https://github.com/your/strays-connect',
  //   live: 'https://strays-connect.vercel.app/',
  //   tools: ['Flutter Flow'],
  // },
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
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 1,
      }}
      className="mySwiper h-full"
    >
      {projectData.map((project, i) => (
        <SwiperSlide
  key={i}
  className="swiper-slide-custom w-full h-[500px] flex items-start justify-start px-6"
>
  <div
    className={`flex flex-row w-full h-full items-start gap-6 transition-all duration-500 ${
      activeIndex === i ? 'scale-105' : 'scale-90'
    }`}
  >
    {/* Fixed-size video container */}
    <div className="w-full h-full flex items-center justify-center">
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        className="h-auto w-auto object-contain rounded-lg"
      />
    </div>

    {/* Info section */}
    <div className="w-1/2 h-full flex flex-col justify-center text-white">
      <h2 className="text-xl font-bold font-mono mb-4 text-black">{project.title}</h2>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
</SwiperSlide>

      ))}
    </Swiper>
  );
};

export default Projects;
