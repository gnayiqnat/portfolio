'use client';
import { Button } from '@heroui/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	// Toggle visibility based on scroll position
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='fixed bottom-8 right-8 z-50'>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 0.9 }}
						whileTap={{ scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
					>
						<Button
							autoFocus={false}
							isIconOnly
							aria-label='Scroll to top'
							className='select-none touch-none bg-foreground/95 rounded-sm text-2xl p-5.5 dark:p-5 border-5 border-background/20 text-background/80'
							onPress={scrollToTop}
						>
							<span className='dark:mt-1'>^</span>
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
