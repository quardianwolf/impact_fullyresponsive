import React from 'react'
import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <Marquee gradient={false} speed={100} className="homeMarq">
       <span>Mastery is a never-ending exploration    </span> 
    </Marquee>
  )
}

export default Marq