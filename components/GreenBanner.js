import React from 'react'

const GreenBanner = () => {
    return (
        <div className='greenbann'>
            <section >
                <div className='relative greenbann1'>
                    <img src='https://cdn.shopify.com/s/files/1/0646/2118/3226/files/2500x1200.png?v=1657703543&width=2000' className='z-10' />
                    
                    <div className='absolute left-0 top-0'>
                        <div className='container p-24'>
                            <h2 className='text-[3rem] text-white z-20 leading-10'>MW08 Sport: <br /> inspire <br /> movement</h2>
                            <p className='text-2xl text-white z-20'>Designed with shatter-resistant sapphire glass <br /> and a custom Kevlar® fiber charging case.</p>
                            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className='greenbann2 pb-8'>
                <div className='container flex'>
                    <div className='left'>
                        <h1 className='text-xxl text-white text-center'>6</h1>
                        <h3 className='text-[2rem] text-white text-center'>Microphone talk solution</h3>
                        <p className='text-[1rem] text-white text-center'>A proprietary wind-reduction microphone array means clearer calls wherever you are - <br/> focus only on the sound you want.</p>
                    </div>
                    <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"/>
                    <div className='right'>
                        <h1 className='text-xxl text-white text-center'>5.2</h1>
                        <h3 className='text-[2rem] text-white text-center'>Bluetooth connectivity</h3>
                        <p className='text-[1rem] text-white text-center'>Seamless true wireless Bluetooth listening experience up to a range of 100ft/30m.</p> 
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default GreenBanner