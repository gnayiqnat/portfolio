'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Logo() {
	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{ scale: 0.98 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link href='/' className='font-barcode text-4xl text-foreground/90'>
				TAN QI YANG
			</Link>
		</motion.div>
	);
}
