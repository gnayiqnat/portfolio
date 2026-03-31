'use client';

import { motion, useScroll } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

	return <motion.div className='bg-gray-700 border-y border-gray-400 h-1.5 w-full
' style={{ scaleX: scrollYProgress, originX: 0, }} />;
}
