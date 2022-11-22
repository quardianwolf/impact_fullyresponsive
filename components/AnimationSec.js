import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const AnimationSec = () => {
  return (
    <div data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-duration="1900" className='AnimationSection h-[100vh]'>
        <div>
            <img src='https://cdn.shopify.com/s/files/1/0646/2118/3226/files/leica-cover_ef186d1c-7bd2-4547-9041-c7abfcd0599b.jpg?v=1662480250&width=2000'  className='absolute'/>
           <div className='relative top-[400px]'>
                <h4 className='relative text-center   text-white'>Master Dynamic x lecia 0.95</h4>
                <h2 className='relative text-center text-[5.5rem] text-white'>Outstanding products with exceptional brands</h2>
            </div>
        </div>
    </div>
  )
}

export default AnimationSec