import React, { useEffect } from 'react'
import ScrollerText from './ScrollerText'
import useMeasure from 'react-use-measure';
import { animate, useMotionValue, motion } from 'framer-motion';

const InfiniteScroller = (props) => {
  const scrollText = [];
  let [ref, {width}] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity
    });

    return controls.stop;
  }, [xTranslation, width]);

  for (let i=0; i<40; i++) {scrollText.push(<ScrollerText word={props.word}/>)}

  return (
    <motion.div className='flex gap-6 h-[60px] w-full border-2 border-solid rounded-[10px] mt-[25px] overflow-hidden items-center bg-[#00A3FF] bg-opacity-10'>
      <motion.div className='flex gap-6 items-center' ref={ref} style={{x:xTranslation}}>
        {scrollText}
      </motion.div>
    </motion.div>
  )
}

export default InfiniteScroller