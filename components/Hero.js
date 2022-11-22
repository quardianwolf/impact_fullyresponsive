import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectFade } from "swiper";

import {Hero2} from '../components';


const Hero = () => {
  return (
  <div className='heroSlider'>
    <Hero2/>
    <section id='hero'>
      <Swiper  modules={[Navigation, Autoplay, EffectFade]} effect={"fade"} autoplay={{delay:2000, disableOnInteraction: false,
        }} className="mySwiper">
        <SwiperSlide className='backgroundSlide1'>Slide1</SwiperSlide>
        <SwiperSlide className='backgroundSlide2'>Slide2</SwiperSlide>
        <SwiperSlide className='backgroundSlide3'>Slide3</SwiperSlide>
      </Swiper>
    </section>
    
 </div>
  )
}

export default Hero
