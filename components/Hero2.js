import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectFade } from "swiper";

const Hero2 = () => {
  return (
    <section id='hero2'>
        <div className='container'>
            <div className='row'>
                <Swiper  modules={[Navigation, Autoplay, EffectFade]} effect={"fade"} autoplay={{delay:2000, disableOnInteraction: false,}} className="mySwiper">
                    <SwiperSlide className='backgroundSlide2'><img src='../images/siyahslider.jpg' /></SwiperSlide>   
                    <SwiperSlide className='backgroundSlide1'><img src='../images/mavislider.jpg' /></SwiperSlide>                  
                    <SwiperSlide className='backgroundSlide3'><img src='../images/yesilslider.jpg' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Hero2