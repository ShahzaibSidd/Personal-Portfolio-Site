import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';

const ProjectsCarousel = () => {
  const [refAllCards, widthAll] = useMeasure();
  const [refContainer, widthScreen] = useMeasure();

  let offScreen = widthAll.width-widthScreen.width;

  return (
    <div className="flex flex-nowrap overflow-hidden h-[320px] w-full mt-[20px]" ref={refContainer}>
      <motion.div drag="x" dragConstraints={{left:-offScreen, right:1}} className='flex flex-nowrap gap-4' ref={refAllCards} animate={{x:-1}}>
        <ProjectCard 
        image="url('/projects/dreamit-thumbnail.png')"
        projectName="Dreamit"
        desc="A full-stack SaaS web application utilizing cloudinary's AI api to alter user images, and publish them for all users to see!"
        techStack={["Nextjs", "TypeScript", 'React', 'Tailwind', 'MongoDB']}
        />

        <ProjectCard 
        image="url('/projects/purrminator-thumbnail.png')"
        projectName="The Purrminator"
        desc="An indie 2D top-down rogue-like made in Unity's game engine" 
        techStack={["C#", "Unity"]}
        />

        <ProjectCard 
        image="url('/projects/journalify-thumbnail.png')" 
        projectName="Journal'ify"
        desc="A full-stack web application allowing users to write and store private journal entries."
        techStack={["Django", "Python", "Javascript", 'React', 'Tailwind']}
        />

        <ProjectCard 
        image="url('/temp-stock.jpg')" 
        projectName="COMING SOON"
        desc="" 
        techStack={[]}
        />
      </motion.div>
    </div>
  )
}


export default ProjectsCarousel