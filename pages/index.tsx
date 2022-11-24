import Head from 'next/head'
import Image from 'next/image'
import {Categories, Categories3, Hero, Hero2, Marque, Product, Box4, BeforeAfter, GreenBanner, Testimonial, Twoimage, ProductQuickViev, AnimationSec, Story, Question, Discount} from '../components';


export default function Home() {
  return (
    <div className='main '>
    <Hero/>
    <Categories/>
    <Marque/>
    <Categories3/>
    <Product/>
    <section className='HomePart_1'>
     <div className='container'>
       <div className='row'>
         <div className='Himage'>
           MW08
         </div>
         <div className='desc text-center'>
           <h2 className='text-4xl'>A leap forward in sound and design</h2>
           <p className='text-l text-gray-700 homepartP font-roboto pb-2'>Crafted from ceramic and stainless steel, the MW08 wireless earbuds features Hybrid Active Noise- <br/>Cancellation, a streamlined form designed for comfort, and a new wind-reducing talk solution with 6 <br/> microphones.</p>
           <div className='text-center'>
          <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Shop MW08 Sport</button>
         </div>
         </div>
       </div>
     </div>
    </section>
    <section className='HomePart_2'>
     <div className='container'>
       <img alt="img" src='https://cdn.shopify.com/s/files/1/0646/2118/3226/files/MW08SportGR_Generic_IPhone_800x800_800x800_2f8236b1-cb9a-4b4f-8717-9780ee313d4f.png?v=1660209910&width=1600'/>
     </div>
    </section>
    <Box4 />
    <BeforeAfter/>
    <Testimonial/>
    <GreenBanner/>
    <Twoimage/>
    <ProductQuickViev/>
    {/* <AnimationSec/> */}
    <Story/>
    <Question/>
    <Discount/>
   </div>
  )
}
