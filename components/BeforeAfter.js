import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const BeforeAfter = () => {

    const FIRST_IMAGE = {
        imageUrl: '/images/resim1.png'
      };
      const SECOND_IMAGE = {
        imageUrl: '/images/resim2.png'
      };

  return (
    <div className='bg-white'>
        <div className='container'>
            <div className='row'>
                <div className='text-center p-10'>
                    <h6 className='text-s'>MH40 Headphones</h6>
                    <h3 className='text-4xl'>An icon, now wireless!</h3>
                    <p>MH40 Wireless Over-Ear Headphones are an evolution of our very first headphones “The MH40” in celebration of <br/> our five year anniversary.</p>
                </div>
                <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
                />
            </div>
        </div>
    </div>
  )
}

export default BeforeAfter