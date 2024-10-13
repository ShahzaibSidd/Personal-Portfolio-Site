import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';

const ProjectsCarousel = () => {
  const loadInDown = {
    visible: {opacity:1, y:0},
    hidden: {opacity:0, y:-30}
  }

  const [refAllCards, widthAll] = useMeasure();
  const [refContainer, widthScreen] = useMeasure();

  let offScreen = widthAll.width-widthScreen.width;

  return (
    <motion.div className="flex flex-nowrap overflow-hidden h-[320px] w-full mt-[20px]
    phone:max-tablet:h-[187px]" ref={refContainer} variants={loadInDown} initial="hidden" animate="visible" transition={{duration:0.3, delay:0.9}}>
      <motion.div drag="x" dragConstraints={{left:-offScreen, right:1}} className='flex flex-nowrap gap-4' ref={refAllCards} animate={{x:-1}}>
        <ProjectCard 
        image="url('/projects/dreamit-thumbnail.png')"
        link="https://github.com/ShahzaibSidd/Dreamit-SaaS-Image-Maker"
        projectName="Dreamit"
        desc="A full-stack SaaS web application utilizing cloudinary's AI api to alter user images, and publish them for all users to see!"
        techStack={["Nextjs", "TypeScript", 'React', 'Tailwind', 'MongoDB']}
        />

        <ProjectCard 
        image="url('/projects/purrminator-thumbnail.png')"
        link="https://github.com/ShahzaibSidd/The-Purrminator-Game"
        projectName="The Purrminator"
        desc="An indie 2D top-down rogue-like made in Unity's game engine" 
        techStack={["C#", "Unity"]}
        />

        <ProjectCard 
        image="url('/projects/journalify-thumbnail.png')" 
        link="https://github.com/ShahzaibSidd/Journalify-FullStack-App"
        projectName="Journal'ify"
        desc="A full-stack web application allowing users to write and store private journal entries."
        techStack={["Django", "Python", "Javascript", 'React', 'Tailwind']}
        />

        <ProjectCard 
        image="url('/temp-stock.jpg')" 
        link="/"
        projectName="COMING SOON"
        desc="" 
        techStack={[]}
        />
      </motion.div>
    </motion.div>
  )
}


export default ProjectsCarousel