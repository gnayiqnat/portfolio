'use client'

import { motion } from 'motion/react';

export default function MotionOpacityAnimation({ children, delay = 1, duration = 1 }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				delay: delay,
				duration: duration,
			}}
		>
			{children}
		</motion.div>
	);
}
