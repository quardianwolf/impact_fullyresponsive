import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Story = () => {
    const story = [
        {
            text: 'Master & Dynamic launches in NYC with a core collection of premium on, over and in-ear headphones.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2014.jpg?v=1664198643&width=1200',
        },
        {
            text: 'Master & Dynamic partners with renowned architect Sir David Adjaye to launch a new concrete wireless speaker for the home.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2017_0b20eaa0-33f3-49b8-8c0b-09ce56fe3bb8.jpg?v=1664199648&width=1200',
        },
        {
            text: 'We introduce the MW07 True Wireless Earphones, built on cutting-edge technology and crafted with premium materials.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2018.jpg?v=1664199864&width=1200',
        },
        {
            text: 'Master & Dynamic partners with Automobili Lamborghini on a collection of high-performance sound tools.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2019.jpg?v=1664200342&width=1200',
        },
        {
            text: 'Master & Dynamic partners with the iconic football club Paris Saint-Germain to create a limited-edition collection of sound tools',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2020.jpg?v=1664200454&width=1200',
        },
        {
            text: 'Master & Dynamic partners with Leica Camera AG to introduce the MH40 Wireless Headphones to the 0.95 capsule collection.',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2021.jpg?v=1664200637&width=1200',
        }
    ]
    return (
        <div className='h-[80vh] StorySec'>
            <div className="container">
                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {story.map((s)=>(
                    <SwiperSlide>
                        <div className="flex">
                            <img src={s.imageSrc} />
                            <h2 className="text-[2.5rem] w-[35rem] text-left py-6 px-24">{s.text}</h2>
                        </div>
                    </SwiperSlide>
                     ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Story