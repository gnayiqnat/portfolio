'use client';

import { useLenis } from 'lenis/react';
import { motion } from 'motion/react';

export default function HeroCardAnimation({ children, link = '', type = '' }) {
	const lenis = useLenis();

	return (
		<motion.span
			onClick={() => {
				link && lenis?.scrollTo(`#${link}`, { offset: -80 });
			}}
			className={`select-none min-h-32 font-bold flex ${type == 'small' ? 'flex-col' : 'flex-row'} justify-center items-center flex-nowrap gap-5 rounded-sm text-foreground/80 bg-foreground/5 border-foreground/10 border-3 border-b-0 cursor-pointer`}
			initial={{
				borderBottomWidth: 7,
				marginTop: 0,
				opacity: 1,
			}}
			whileHover={{ scale: 0.99, transition: { duration: 0.3 } }}
			whileTap={{
				borderBottomWidth: 4,
				scale: 0.95,
				marginTop: 4,
				marginBottom: -4,
				transition: { duration: 0.1 },
			}}
		>
			{children}
		</motion.span>
	);
}
