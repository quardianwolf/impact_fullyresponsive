import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Twoimage = () => {
    const yazi = [
        {
            top: 'About us',
            mid: 'Designed & developed in New York City', 
            last: 'Founder Jonathan Levine was first drawn to headphones after building a recording studio in his office to support his shared passion with his music-mad son, Robert, an emerging DJ/music producer. Jonathan, a serial consumer products entrepreneur, envisioned headphones with both premium sound quality and elevated design that his son could use.',
        },
        {
            top: 'What we do',
            mid: 'Superior design and craftmanship',
            last: 'Brilliant sound and design motivate everything we do. We have a deep passion for building beautifully crafted, technically sophisticated sound tools. Only the finest materials supporting comfort, aesthetics and functionality. Designing the ultimate sound experience, while delivering best-in-class performance at every touch point',
        }
    ]
  return (
    <div className='Twoimage'>
        <div className='container flex p-28'>
            <div className='row'>
                
                    <div className='  images flex columns-6 float-left'>
                        <div className="row flex">
                            <img  className="-rotate-2 img-1" style={{width:"390px", height:"462px", borderRadius: "1rem"}} src='https://cdn.shopify.com/s/files/1/0646/2118/3226/files/20191010_HomePageModule_MW07Plus-2_1600x_1.jpg?v=1662969924&width=500' />
                            <img className="rotate-2 img-2"style={{borderRadius: "1rem"}}  src='https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MH40S2_StillLife-JLApt_2015_1_6cd9855b-2ff2-4fa1-b349-fe312a1bd76c.jpg?v=1662969771&width=500' />
                           
                        </div>
                    </div>
                    <div className='slider columns-6 sliderMobil'>
                        <div className="container">
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                {yazi.map((yazz)=>(
                                <SwiperSlide>
                                    <div className="container p-20 ">
                                        <p>{yazz.top}</p>
                                        <h1 style={{width: "332px"}} className="text-[2rem]">{yazz.mid}</h1>
                                        <p style={{width: "614px"}} className="text-xl">{yazz.last}</p>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default Twoimage