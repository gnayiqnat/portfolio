'use client';

import { motion, useScroll } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

	return <motion.div className='bg-foreground/80 border-y border-gray-400 dark:border-none h-1.5 w-full
' style={{ scaleX: scrollYProgress, originX: 0, }} />;
}
