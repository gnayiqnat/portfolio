'use client'

import { motion } from 'motion/react';

export default function HoverScaleAnimation({ children }) {
	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{ scale: 0.99 }}
			whileTap={{ scale: 0.93 }}
		>
			{children}
		</motion.div>
	);
}
