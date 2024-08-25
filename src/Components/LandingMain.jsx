import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

export default function LandingMain() {
  const loadInDown = {
    visible: {opacity:1, y:0},
    hidden: {opacity:0, y:-30}
  }

  const loadInRight = {
    visible: {opacity:1, x:0},
    hidden: {opacity:0, x:-30}
  }

  const loadInUp = {
    visible: {opacity:1, y:0},
    hidden: {opacity:0, y:30}
  }

  return (
    <>
    <motion.div className="flex gap-[40px] font-urbanist font-bold text-white w-[100%] mt-[60px]">
      <div className="flex flex-col gap-[-10px] content-center w-[45px]">
        <span className="inline-block h-[45px] w-[45px] rounded-[50%] bg-white"></span>
        <span className="inline-block h-[300px] w-[8px] rounded-[15px] bg-white mx-[19px] mt-[-10px]"></span>
      </div>

      <div className="mt-[70px]">
        <motion.h1 className="text-[55px] leading-[30px]" variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.2}}>Hey,</motion.h1>
        <motion.div className="flex text-[100px] gap-[25px]" variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.3}}>
          <h2>I'm </h2> <h2 className="text-[#00A3FF]">Shahzaib!</h2>
        </motion.div>
        <motion.h1 className="text-[50px] leading-[40px]" variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.4}}>A computer eng. student @ UWaterloo</motion.h1>
      </div>
    </motion.div>

    <div className="flex mb-[50px]">
      <motion.p className="font-urbanist text-white text-[35px] mt-[40px]" variants={loadInRight} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.5}}>
        I'm a passionate dev currently in school,<br/>
        and learning new technologies in my free time!
      </motion.p>
      <div className="flex-1 text-white text-[65px] py-[30px] px-[30px]">
        <motion.a className="mx-8 hover:text-[#00A3FF] duration-150" href="" variants={loadInUp} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.6}}><FontAwesomeIcon icon={faEnvelope}/></motion.a>
        <motion.a className="mx-8 hover:text-[#00A3FF] duration-150" href="https://github.com/M-Shahzaib-Siddiqui/" target="_blank" variants={loadInUp} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.7}}><FontAwesomeIcon icon={faGithub}/></motion.a>
        <motion.a className="mx-8 hover:text-[#00A3FF] duration-150" href="https://www.linkedin.com/in/shahzaibsidd/" target="_blank" variants={loadInUp} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.8}}><FontAwesomeIcon icon={faLinkedinIn} href=""/></motion.a>
      </div>
    </div>
    </>
  )
}