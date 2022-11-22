import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Testimonial = () => {
    const yorumlar = [ 
       {yorumm: 'Master & Dynamic is known for providing a first-class audio listening experience with the most stylish, unexpected designs.', imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/men_shealth_logo.png?v=1657272238&width=120'},
       {yorumm: 'If you’re the sort of person who takes their sport seriously and loves to own beautiful objects, the Master & Dynamic MW08 Sport were made for you.', imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/forbes.png?v=1657718627&width=100'},
       {yorumm: 'The design is spectacular, the fit is precise, the ANC is industry-leading, the battery life is fantastic, and the audio is clear and powerful.', imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/Luxe_Digital_Logo.png?v=1658322923&width=100'},
    ]
  return (
    <div className='HomeTestimonial'> 
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
    >{yorumlar.map((yorum)=>( 
        <SwiperSlide>
            <div className="container">
                <div className="row">
                    <div>
                        <blockquote className="text-black text-[2rem]">{yorum.yorumm}</blockquote>
                    </div>
                    <div className="content-center">
                        <img src={yorum.imageSrc} className="content-center mx-auto"  /> 
                    </div>
                </div>
            </div>
        </SwiperSlide>
         ))}
    </Swiper>
  </div>
  )
}

export default Testimonial