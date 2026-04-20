'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function SocialsCard({ text, url, logo }) {
	return (
		<Link target='_blank' href={url} rel='noopener noreferrer'>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 0.98 }}
				whileTap={{ scale: 0.93 }}
				className=' w-full h-13 border-2 bg-foreground/2 border-foreground/10 rounded-sm flex flex-row items-center justify-center text-lg text-foreground/80 gap-3'
			>
				{logo} <p>{text}</p>
			</motion.div>
		</Link>
	);
}
