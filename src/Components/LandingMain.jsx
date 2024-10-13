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
    <motion.div className="flex gap-[40px] font-urbanist font-bold text-white w-[100%] mt-[60px]
    phone:max-tablet:mt-[0px]">
      <div className="flex flex-col gap-[-10px] content-center w-[45px]
      phone:max-tablet:hidden">
        <span className="inline-block h-[45px] w-[45px] rounded-[50%] bg-white"></span>
        <span className="inline-block h-[300px] w-[8px] rounded-[15px] bg-white mx-[19px] mt-[-10px]"></span>
      </div>

      <div className="mt-[90px]">
        <motion.h1 className="text-[55px] leading-[30px]
        phone:max-tablet:hidden"
        variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.2}}>Hey,</motion.h1>
        
        <motion.div className="flex flex-wrap text-[100px] gap-[25px]
        phone:max-tablet:text-[70px] phone:max-tablet:gap-[0px] phone:max-tablet:leading-[70px]" 
        variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.3}}>
          <h2>I'm </h2> <h2 className="text-[#00A3FF]">Shahzaib!</h2>
        </motion.div>
        
        <motion.h1 className="text-[50px] leading-[40px]
        phone:max-tablet:text-[28px] phone:max-tablet:pt-[25px]"
        variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.4}}>A computer eng. student @ UWaterloo</motion.h1>
      </div>
    </motion.div>

    <div className="flex flex-wrap mb-[50px]
    phone:max-tablet:pt-[80px]">
      <motion.p className="font-urbanist text-white text-[35px] mt-[40px]
      phone:max-tablet:text-[25px] phone:max-tablet:text-center phone:max-tablet:mt-0" 
      variants={loadInRight} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.5}}>
        Hey! I'm a passionate dev currently in school,<br/>
        and learning new technologies in my free time!
      </motion.p>

      <div className="flex-1 text-white text-[65px] py-[30px] px-[30px]
      phone:max-tablet:text-[50px] phone:max-tablet:px-0 phone:max-tablet:pb-0 phone:max-tablet:text-center">
        <motion.a className="mx-8 phone:max-tablet:mx-[18px] hover:text-[#00A3FF] duration-150" href="" variants={loadInUp} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.6}}><FontAwesomeIcon icon={faEnvelope}/></motion.a>
        <motion.a className="mx-8 phone:max-tablet:mx-[18px] hover:text-[#00A3FF] duration-150" href="https://github.com/M-Shahzaib-Siddiqui/" target="_blank" variants={loadInUp} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.7}}><FontAwesomeIcon icon={faGithub}/></motion.a>
        <motion.a className="mx-8 phone:max-tablet:mx-[18px] hover:text-[#00A3FF] duration-150" href="https://www.linkedin.com/in/shahzaibsidd/" target="_blank" variants={loadInUp} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.8}}><FontAwesomeIcon icon={faLinkedinIn} href=""/></motion.a>
      </div>
    </div>
    </>
  )
}