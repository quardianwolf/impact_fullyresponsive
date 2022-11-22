import React from 'react'
import { FaSearch, FaRegUser, FaShoppingCart, FaLocationArrow, FaGlobeEurope, FaQuestionCircle, FaCreditCard } from 'react-icons/fa';

const Discount = () => {
  return (
    <div className='discountSec'>
        <div className='container'>
            <div className='row flex'>
                <div className='box1 flex-1'>
                    <FaLocationArrow size={25}/>
                    <h3 className='text-[1.5rem]'>Designed in NYC</h3>
                    <p className='text-[1rem] text-gray-600'>Products designed and developed in New York City.</p>
                </div>
                <div className='box2 flex-1'>
                    <FaGlobeEurope size={25}/>
                    <h3 className='text-[1.5rem]'>Free Shipping</h3>
                    <p className='text-[1rem] text-gray-600'>Free worldwide shipping on all orders of $99</p>
                </div>
                <div className='box3 flex-1'>
                    <FaQuestionCircle size={25}/>
                    <h3 className='text-[1.5rem]'>Support</h3>
                    <p className='text-[1rem] text-gray-600'>Our support team is available 24/7</p>
                </div>
                <div className='box4 flex-1'>
                    <FaCreditCard size={25}/>
                    <h3 className='text-[1.5rem]'>Secure Payment</h3>
                    <p className='text-[1rem] text-gray-600'>All payments are processed securely</p>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Discount