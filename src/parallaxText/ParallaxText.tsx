import './pStyles.css';
import { useEffect, useRef, useState } from 'react';
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
	wrap,
	useInView,
} from 'framer-motion';
import React from 'react';

interface ParallaxProps {
	children: string;
	baseVelocity: number;
}

// Credit: Code from Framer motion's docs
function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
	// Optimization of Parallax Text
	const refIsInView = useRef(null);
	const isInView = useInView(refIsInView);

	const [pauseParallaxText, setPauseParallaxText] = useState(false);

	useEffect(() => {
		if (isInView) {
			setPauseParallaxText(false);
		} else {
			setPauseParallaxText(true);
		}
	}, [isInView]);

	// Parallax Text
	const baseX = useMotionValue(1);
	const { scrollY } = useScroll();

	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	const x = useTransform(baseX, (v) => `${wrap(-10, -60, v)}%`);

	const directionFactor = useRef<number>(1);

	 useAnimationFrame(
		!pauseParallaxText
			? (t, delta) => {
					let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

					/**
					 * This is what changes the direction of the scroll once we
					 * switch scrolling directions.
					 */
					if (velocityFactor.get() < 0) {
						directionFactor.current = -1;
					} else if (velocityFactor.get() > 0) {
						directionFactor.current = 1;
					}

					moveBy += directionFactor.current * moveBy * velocityFactor.get();

					baseX.set(baseX.get() + moveBy);
			  }
			: () => {
					return;
			  }
	);
	 

	/**
	 * The number of times to repeat the child text should be dynamically calculated
	 * based on the size of the text and viewport. Likewise, the x motion value is
	 * currently wrapped between -20 and -45% - this 25% is derived from the fact
	 * we have four children (100% / 4). This would also want deriving from the
	 * dynamically generated number of children.
	 */

	return (
		<div ref={refIsInView} className='parallax'>
			<motion.div className='scroller' style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	);
}

export default ParallaxText;
