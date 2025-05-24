'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/swiper-custom.css';

const Projects = () => {
  const [_text, setText] = useState('');
  const [_stage, setStage] = useState<'typing' | 'outro'>('typing');
  const [_fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fullText = '@mondo';
    let current = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) {
        clearInterval(typing);
        setTimeout(() => setStage('outro'), 700);
        setTimeout(() => setFadeOut(true), 700); // trigger fade out
      }
    }, 300);

    return () => clearInterval(typing);
  }, []);

  return (
    <Swiper
        modules={[EffectCoverflow]}
        direction="vertical" 
        effect="coverflow"
        slidesPerView={1.5}
        spaceBetween={-120}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale: 0.5, // center slightly bigger
        }}
        className="mySwiper h-full"
    >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <SwiperSlide
            key={i}
            
            className="swiper-slide-custom flex items-center justify-center h-120 overflow-y-scroll scrollbar-hide rounded-lg shadow-md bg-gray-100 text-black transition duration-300"
        > 
            <span className="text-xl font-semibold select-none">Project {i} Preview</span>
        </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Projects;
