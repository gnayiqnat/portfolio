'use client';

import { motion } from 'motion/react';

export default function MotionCardAnimation({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1, duration: 1 }}
			className='w-11/12 max-w-230 bg-white rounded-sm border py-10 px-5 sm:px-8 flex flex-col gap-4 items-center justify-center'
		>
			{children}
		</motion.div>
	);
}

export function MotionOpacityAnimation({children, delay = 1, duration = 1}) {
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