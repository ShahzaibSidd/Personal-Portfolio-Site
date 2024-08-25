import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

export default function NavBar() {
  const loadInNav = {
    visible: {opacity:1, y:0},
    hidden: {opacity:0, y:-100}
  }

  return (
    <motion.nav className="flex justify-between items-center border-b-[4px] h-[80px]" variants={loadInNav} initial="hidden" animate="visible" transition={{duration:0.5}}>
      <h1 className='text-[#00A3FF] text-[40px] ml-[30px] font-urbanist font-bold'>Ss.</h1>
      <a href="https://drive.google.com/file/d/1qCjxkj8obn8BohSdaYb9zSB1WovuoVQg/view?usp=sharing" target="_blank"
        className="flex gap-[10px] h-[40px] w-[160px] bg-[#00A3FF] rounded-[15px] font-urbanist font-bold text-[20px] text-white justify-center items-center 
        hover:gap-[20px] duration-100">
          <h1>Resume</h1>
          <FontAwesomeIcon icon={faArrowRight}/>
      </a>
    </motion.nav>
  )
}