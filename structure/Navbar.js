import Link from 'next/link'
import React, { useEffect, useRef, useState} from 'react'
import { FaSearch, FaRegUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import Marquee from "react-fast-marquee";



const Navbar = () => {

const [showMenu, setShowMenu] = useState(false);

let menu
let menuMask

if(showMenu){
  menu = 
  <div className= 'navbarrr'>
                <div className='container'>
                  <div className='row'>
                   
                    <div className='items flex '>
                      <ul>
                        <li><Link href='/'>Shop</Link></li>
                        <li><Link href='/'>Collaborations</Link></li>
                        <li><Link href='/'>Compare</Link></li>
                        <li><Link href='/'>Blog</Link></li>
                        <li><Link href='/'>About</Link></li>
                        <li><Link href='/'>Theme Features</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              menuMask = 

              <div className=" fixed border-b top-0 left-0 w-full h-full z-50" 
              onClick={()=> setShowMenu(false)}
              >

              </div>
}

  return (
    <div className='navigation'>
      <div className='top-bar'>
        <Marquee gradient={false} speed={100}>
          <ul >
            <li>Free standard shipping on all orders</li>
            <li>Discount: Use the code IMPACT20 to receive a 20% discount on your order</li>
            <li>A question? Visit our contact page to send us a message</li>
          </ul>
        </Marquee>
      </div>
        <div className='container pt-5'>
          <div className='row'>
            <div className='Navbar'> 
            {/* <div className={color ? 'Navbarrr' : 'Navbar'}> */}
            <nav className='mobile-nav'>
              <span className='text-xl text-white'>
                <FaBars onClick={()=> setShowMenu(!showMenu)}/>
                <div className='logo flex mobilLogo'>
                      <Link href='/'>
                        <img src='../images/Impact_white.webp' className='navbar_logo' />
                      </Link>
                    </div>
                    <div className='icons flex mobilIcon'>
                      <li><FaSearch size={20} className="Fasearch" /></li>
                      <li><FaRegUser size={20} className="Fauser" /></li>
                      <li><FaShoppingCart size={20}  className="Facart"/></li>
                    </div>
              </span>
              {menuMask}
              {menu}
            </nav>     
            <div className= 'navbarr'>
                <div className='container'>
                  <div className=''>
                    <div className='logo flex '>
                      <Link href='/'>
                        <img src='../images/Impact_white.webp' className='navbar_logo' />
                      </Link>
                    </div>
                    <div className='items flex '>
                      <ul>
                        <li><Link href='/'>Shop</Link></li>
                        <li><Link href='/'>Collaborations</Link></li>
                        <li><Link href='/'>Compare</Link></li>
                        <li><Link href='/'>Blog</Link></li>
                        <li><Link href='/'>About</Link></li>
                        <li><Link href='/'>Theme Features</Link></li>
                      </ul>
                    </div>
                    <div className='icons flex '>
                      <li><FaSearch size={20} /></li>
                      <li><FaRegUser size={20}  /></li>
                      <li><FaShoppingCart size={20} /></li>
                    </div>
                  </div>
                </div>
              </div>       
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar